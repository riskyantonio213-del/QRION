/**
 * Lapisan data artikel untuk halaman publik /insight — baca dari
 * Supabase (tabel `articles`, hanya yang terbit) dengan fallback ke
 * data kode lokal bila Supabase belum terkonfigurasi / error.
 * Server-only.
 */

import {
  articleCategoryList as fallbackCategories,
  articles as fallbackArticles,
  categorySlug,
  type ArticleCategory,
  type ArticleMeta,
} from "@/data/articles";
import { articlesContent } from "@/data/articles-content";
import { ensureArticlesSeeded } from "@/lib/admin/articles-store";
import { adminRest } from "@/lib/admin/supabase";

type PublicRow = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  iso_date: string;
  image: string | null;
  source_url: string;
  content?: string;
};

const PUBLIC_META =
  "slug,title,excerpt,category,iso_date,image,source_url";
const PUBLISHED_FILTER =
  "status=eq.published&deleted_at=is.null&or=(published_at.is.null,published_at.lte.now)";

function toMeta(row: PublicRow): ArticleMeta {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    date: formatTanggal(row.iso_date),
    isoDate: row.iso_date.slice(0, 10),
    image: row.image,
    sourceUrl: row.source_url,
  };
}

const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function formatTanggal(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** Semua artikel terbit, terbaru dulu. Fallback: data kode bila error. */
export async function getPublishedArticles(): Promise<ArticleMeta[]> {
  try {
    await ensureArticlesSeeded();
    const response = await adminRest(
      `articles?select=${PUBLIC_META}&${PUBLISHED_FILTER}&order=iso_date.desc`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const rows: PublicRow[] = await response.json();
    return rows.map(toMeta);
  } catch {
    return fallbackArticles;
  }
}

/** Detail satu artikel terbit (dengan isi HTML). null = tak ditemukan/tak terbit. */
export async function getPublishedArticle(
  slug: string,
): Promise<{ meta: ArticleMeta; contentHtml: string } | null> {
  try {
    await ensureArticlesSeeded();
    const response = await adminRest(
      `articles?select=${PUBLIC_META},content&slug=eq.${encodeURIComponent(slug)}&${PUBLISHED_FILTER}&limit=1`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const rows: PublicRow[] = await response.json();
    const row = rows[0];
    if (!row) return null;
    return { meta: toMeta(row), contentHtml: row.content ?? "" };
  } catch {
    const meta = fallbackArticles.find((item) => item.slug === slug);
    if (!meta) return null;
    const contentHtml = articlesContent[slug];
    if (!contentHtml) return null;
    return { meta, contentHtml };
  }
}

/** Meta saja (untuk generateMetadata — tanpa isi artikel). */
export async function getPublishedArticleMeta(
  slug: string,
): Promise<ArticleMeta | null> {
  try {
    await ensureArticlesSeeded();
    const response = await adminRest(
      `articles?select=${PUBLIC_META}&slug=eq.${encodeURIComponent(slug)}&${PUBLISHED_FILTER}&limit=1`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const rows: PublicRow[] = await response.json();
    return rows[0] ? toMeta(rows[0]) : null;
  } catch {
    return fallbackArticles.find((item) => item.slug === slug) ?? null;
  }
}

/* ---------------------------------------------------------------
 * Helper turunan (dihitung dari daftar terbit)
 * ------------------------------------------------------------- */

export function buildCategoryList(list: ArticleMeta[]): ArticleCategory[] {
  const counts = new Map<string, number>();
  for (const article of list) {
    counts.set(article.category, (counts.get(article.category) ?? 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({
    name,
    slug: categorySlug(name),
    count,
  }));
}

export function fallbackCategoryList(): ArticleCategory[] {
  return fallbackCategories;
}

export function articlesInCategory(
  list: ArticleMeta[],
  slug: string,
): ArticleMeta[] {
  return list.filter((article) => categorySlug(article.category) === slug);
}

export function latest(list: ArticleMeta[], count: number): ArticleMeta[] {
  return list.slice(0, count);
}

export function relatedTo(
  list: ArticleMeta[],
  slug: string,
  count = 3,
): ArticleMeta[] {
  const current = list.find((article) => article.slug === slug);
  const sameCategory = list.filter(
    (article) =>
      article.slug !== slug && article.category === current?.category,
  );
  const others = list.filter(
    (article) =>
      article.slug !== slug && article.category !== current?.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}
