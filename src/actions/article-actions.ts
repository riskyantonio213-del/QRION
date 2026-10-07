"use server";

import { revalidatePath } from "next/cache";

import {
  createArticle,
  getAdminArticle,
  purgeArticle,
  restoreArticle,
  slugify,
  trashArticle,
  updateArticle,
  type ArticleStatus,
} from "@/lib/admin/articles-store";
import { getSessionUsername } from "@/lib/admin/session";

export type ArticleSaveState = {
  ok?: boolean;
  id?: number;
  error?: string;
  message?: string;
};

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function revalidateArticles(): void {
  revalidatePath("/insight", "layout");
  revalidatePath("/admin/artikel", "layout");
}

function readForm(
  formData: FormData,
): { data: Parameters<typeof createArticle>[0]; intent: string } | { error: string } {
  const intent = String(formData.get("intent") ?? "draft");
  const title = String(formData.get("title") ?? "").trim();
  const slugRaw = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const isoDate = String(formData.get("isoDate") ?? "").trim();
  const imageRaw = String(formData.get("image") ?? "").trim();
  const content = String(formData.get("content") ?? "");

  if (!title) return { error: "Judul artikel wajib diisi." };
  if (!category) return { error: "Pilih kategori artikel." };
  if (!ISO_DATE_RE.test(isoDate)) return { error: "Tanggal artikel tidak valid." };

  const status: ArticleStatus =
    intent === "publish" ? "published" : "draft";
  const slug = slugify(slugRaw || title);
  if (!slug) return { error: "Judul harus mengandung karakter yang bisa dijadikan slug." };

  return {
    intent,
    data: {
      slug,
      title,
      excerpt,
      category,
      isoDate,
      image: imageRaw || null,
      status,
      content: content.trim() || "<p></p>",
    },
  };
}

/** Simpan artikel baru (draft) atau perbarui artikel lama. */
export async function saveArticleAction(
  id: number | null,
  formData: FormData,
): Promise<ArticleSaveState> {
  const username = await getSessionUsername();
  if (!username) {
    return { error: "Sesi berakhir. Silakan masuk kembali." };
  }

  const parsed = readForm(formData);
  if ("error" in parsed) return { error: parsed.error };

  try {
    if (id === null) {
      const created = await createArticle(parsed.data);
      revalidateArticles();
      return { ok: true, id: created.id, message: "Artikel dibuat." };
    }

    const existing = await getAdminArticle(id);
    if (!existing) return { error: "Artikel tidak ditemukan." };

    let publishedAt: string | null | undefined;
    if (parsed.data.status === "published" && existing.status !== "published") {
      publishedAt = new Date().toISOString();
    }

    await updateArticle(id, { ...parsed.data, publishedAt });
    revalidateArticles();
    return { ok: true, id, message: "Artikel diperbarui." };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Gagal menyimpan artikel. Coba lagi.",
    };
  }
}

export async function trashArticleAction(id: number): Promise<ArticleSaveState> {
  const username = await getSessionUsername();
  if (!username) return { error: "Sesi berakhir. Silakan masuk kembali." };
  try {
    await trashArticle(id);
    revalidateArticles();
    return { ok: true, message: "Artikel dipindahkan ke sampah." };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Gagal memindahkan artikel.",
    };
  }
}

export async function restoreArticleAction(id: number): Promise<ArticleSaveState> {
  const username = await getSessionUsername();
  if (!username) return { error: "Sesi berakhir. Silakan masuk kembali." };
  try {
    await restoreArticle(id);
    revalidateArticles();
    return { ok: true, message: "Artikel dikembalikan." };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Gagal mengembalikan artikel.",
    };
  }
}

export async function purgeArticleAction(id: number): Promise<ArticleSaveState> {
  const username = await getSessionUsername();
  if (!username) return { error: "Sesi berakhir. Silakan masuk kembali." };
  try {
    await purgeArticle(id);
    revalidateArticles();
    return { ok: true, message: "Artikel dihapus permanen." };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Gagal menghapus artikel.",
    };
  }
}
