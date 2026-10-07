/**
 * CRUD artikel di Supabase (tabel `public.articles`) — server-only,
 * REST (PostgREST) dengan service key, pola sama seperti store.ts.
 *
 * Tabel di-seed otomatis sekali dari data kode (articles-meta +
 * articles-content) saat masih kosong.
 */

import { articlesContent } from "@/data/articles-content";
import { articlesMeta } from "@/data/articles-meta";
import { adminRest } from "@/lib/admin/supabase";

export type ArticleStatus = "draft" | "published";

export type ArticleRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  iso_date: string;
  image: string | null;
  source_url: string;
  status: ArticleStatus;
  published_at: string | null;
  content: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type ArticleListItem = Omit<ArticleRow, "content" | "created_at">;

export type ArticleInput = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  isoDate: string;
  image: string | null;
  status: ArticleStatus;
  content: string;
};

const META_COLUMNS =
  "id,slug,title,excerpt,category,iso_date,image,source_url,status,published_at,deleted_at,updated_at";

const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

/** "2026-09-14" → "14 September 2026" */
export function formatTanggalIndo(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** "QRion Mobile Terbaru!" → "qrion-mobile-terbaru" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);
}

function toListItem(row: ArticleRow): ArticleListItem {
  const { content: _content, created_at: _createdAt, ...rest } = row;
  return rest;
}

/* ---------------------------------------------------------------
 * Seed otomatis (sekali saat tabel masih kosong)
 * ------------------------------------------------------------- */

let seedChecked = false;

export async function ensureArticlesSeeded(): Promise<void> {
  if (seedChecked) return;

  const probe = await adminRest("articles?select=id&limit=1");
  if (!probe.ok) {
    throw new Error(`Gagal membaca tabel articles (HTTP ${probe.status}).`);
  }
  const existing: unknown[] = await probe.json();
  if (existing.length > 0) {
    seedChecked = true;
    return;
  }

  const rows = articlesMeta.map((meta) => ({
    slug: meta.slug,
    title: meta.title,
    excerpt: meta.excerpt,
    category: meta.category,
    iso_date: meta.isoDate,
    image: meta.image,
    source_url: meta.sourceUrl,
    status: "published",
    published_at: `${meta.isoDate}T00:00:00+00:00`,
    content: articlesContent[meta.slug] ?? "<p></p>",
  }));

  const CHUNK = 8;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    const response = await adminRest(
      "articles?on_conflict=slug",
      {
        method: "POST",
        headers: {
          Prefer:
            "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify(chunk),
      },
    );
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        `Gagal seed artikel (HTTP ${response.status}): ${detail.slice(0, 200)}`,
      );
    }
  }
  seedChecked = true;
}

/* ---------------------------------------------------------------
 * Baca (admin)
 * ------------------------------------------------------------- */

export type AdminArticleQuery = {
  view: "semua" | "terbit" | "draft" | "sampah";
  q?: string;
};

export async function listAdminArticles(
  query: AdminArticleQuery,
): Promise<ArticleListItem[]> {
  await ensureArticlesSeeded();

  const params = new URLSearchParams();
  params.set("select", META_COLUMNS);
  params.set("order", query.view === "sampah" ? "updated_at.desc" : "iso_date.desc");

  if (query.view === "sampah") {
    params.append("deleted_at", "not.is.null");
  } else {
    params.append("deleted_at", "is.null");
    if (query.view === "terbit") params.append("status", "eq.published");
    if (query.view === "draft") params.append("status", "eq.draft");
  }

  const q = query.q?.trim();
  if (q) {
    const safe = q.replace(/[%_,()]/g, " ");
    params.append(
      "or",
      `(title.ilike.*${safe}*,slug.ilike.*${safe}*,category.ilike.*${safe}*)`,
    );
  }

  const response = await adminRest(`articles?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Gagal memuat artikel (HTTP ${response.status}).`);
  }
  const rows: ArticleRow[] = await response.json();
  return rows.map(toListItem);
}

export async function getAdminArticle(
  id: number,
): Promise<ArticleRow | null> {
  const response = await adminRest(
    `articles?select=*&id=eq.${encodeURIComponent(String(id))}&limit=1`,
  );
  if (!response.ok) {
    throw new Error(`Gagal memuat artikel (HTTP ${response.status}).`);
  }
  const rows: ArticleRow[] = await response.json();
  return rows[0] ?? null;
}

/** Slug unik di seluruh artikel (termasuk sampah, kecuali milik `exceptId`). */
export async function ensureUniqueSlug(
  desired: string,
  exceptId?: number,
): Promise<string> {
  const response = await adminRest("articles?select=id,slug");
  if (!response.ok) {
    throw new Error(`Gagal memeriksa slug (HTTP ${response.status}).`);
  }
  const rows: { id: number; slug: string }[] = await response.json();
  const taken = new Set(
    rows.filter((row) => row.id !== exceptId).map((row) => row.slug),
  );
  if (!taken.has(desired)) return desired;
  for (let n = 2; ; n++) {
    const candidate = `${desired}-${n}`;
    if (!taken.has(candidate)) return candidate;
  }
}

/* ---------------------------------------------------------------
 * Tulis (admin)
 * ------------------------------------------------------------- */

async function parseCreated(response: Response): Promise<ArticleRow> {
  const detail = await response.text().catch(() => "");
  if (!response.ok) {
    throw new Error(`Gagal menyimpan artikel (HTTP ${response.status}): ${detail.slice(0, 200)}`);
  }
  const rows = detail ? (JSON.parse(detail) as ArticleRow[]) : [];
  if (!rows[0]) throw new Error("Artikel tersimpan tapi respons kosong.");
  return rows[0];
}

export async function createArticle(
  input: ArticleInput,
): Promise<ArticleRow> {
  const slug = await ensureUniqueSlug(input.slug);
  const publishedAt =
    input.status === "published" ? new Date().toISOString() : null;

  const response = await adminRest("articles", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      slug,
      title: input.title,
      excerpt: input.excerpt,
      category: input.category,
      iso_date: input.isoDate,
      image: input.image,
      status: input.status,
      content: input.content,
      published_at: publishedAt,
    }),
  });
  return parseCreated(response);
}

export async function updateArticle(
  id: number,
  input: Partial<ArticleInput> & { publishedAt?: string | null },
): Promise<ArticleRow> {
  const body: Record<string, unknown> = {};
  if (input.title !== undefined) body.title = input.title;
  if (input.excerpt !== undefined) body.excerpt = input.excerpt;
  if (input.category !== undefined) body.category = input.category;
  if (input.isoDate !== undefined) body.iso_date = input.isoDate;
  if (input.image !== undefined) body.image = input.image;
  if (input.content !== undefined) body.content = input.content;
  if (input.status !== undefined) body.status = input.status;
  if (input.slug !== undefined) {
    body.slug = await ensureUniqueSlug(input.slug, id);
  }
  if (input.publishedAt !== undefined) {
    body.published_at = input.publishedAt;
  }
  body.updated_at = new Date().toISOString();

  const response = await adminRest(
    `articles?id=eq.${encodeURIComponent(String(id))}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(body),
    },
  );
  return parseCreated(response);
}

export async function trashArticle(id: number): Promise<void> {
  const response = await adminRest(
    `articles?id=eq.${encodeURIComponent(String(id))}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        deleted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }),
    },
  );
  if (!response.ok) {
    throw new Error(`Gagal memindahkan ke sampah (HTTP ${response.status}).`);
  }
}

export async function restoreArticle(id: number): Promise<void> {
  const response = await adminRest(
    `articles?id=eq.${encodeURIComponent(String(id))}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ deleted_at: null, updated_at: new Date().toISOString() }),
    },
  );
  if (!response.ok) {
    throw new Error(`Gagal mengembalikan artikel (HTTP ${response.status}).`);
  }
}

export async function purgeArticle(id: number): Promise<void> {
  const response = await adminRest(
    `articles?id=eq.${encodeURIComponent(String(id))}`,
    { method: "DELETE" },
  );
  if (!response.ok) {
    throw new Error(`Gagal menghapus permanen (HTTP ${response.status}).`);
  }
}
