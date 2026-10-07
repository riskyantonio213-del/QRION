import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Plus, Search } from "lucide-react";

import { RowActions } from "@/components/admin/article-row-actions";
import {
  formatTanggalIndo,
  listAdminArticles,
  type ArticleListItem,
} from "@/lib/admin/articles-store";
import { articleCategoryList } from "@/data/articles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Artikel — Panel Admin QRION",
};

type SearchParams = { searchParams: Promise<{ status?: string; q?: string }> };

const TABS = [
  { key: "semua", label: "Semua" },
  { key: "terbit", label: "Terbit" },
  { key: "draft", label: "Draft" },
  { key: "sampah", label: "Sampah" },
] as const;

type View = (typeof TABS)[number]["key"];

function StatusBadge({ article }: { article: ArticleListItem }) {
  if (article.deleted_at) {
    return (
      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
        Sampah
      </span>
    );
  }
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-semibold",
        article.status === "published"
          ? "bg-emerald-100 text-emerald-700"
          : "bg-amber-100 text-amber-700",
      )}
    >
      {article.status === "published" ? "Terbit" : "Draft"}
    </span>
  );
}

export default async function AdminArticlesPage({ searchParams }: SearchParams) {
  const params = await searchParams;
  const view: View = TABS.some((tab) => tab.key === params.status)
    ? (params.status as View)
    : "semua";
  const q = params.q?.trim() ?? "";

  let articles: ArticleListItem[] = [];
  let loadError: string | null = null;
  try {
    articles = await listAdminArticles({ view, q });
  } catch (error) {
    loadError =
      error instanceof Error ? error.message : "Gagal memuat artikel.";
  }

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Panel Admin
          </p>
          <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-qrion-indigo sm:text-3xl">
            Artikel
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Kelola artikel Wawasan — tulis dengan editor WYSIWYG, atur status
            terbit/draft, kategori, gambar utama, dan Sampah.
          </p>
        </div>
        <Link
          href="/admin/artikel/baru"
          className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(16,120,73,0.3)] transition-all hover:-translate-y-0.5 hover:bg-brand/90 sm:mt-0"
        >
          <Plus className="size-4" aria-hidden="true" />
          Artikel Baru
        </Link>
      </div>

      {/* Filter status + pencarian */}
      <div className="flex flex-wrap items-center gap-3">
        <nav aria-label="Filter status" className="flex flex-wrap gap-1.5">
          {TABS.map((tab) => (
            <Link
              key={tab.key}
              href={
                tab.key === "semua"
                  ? "/admin/artikel"
                  : `/admin/artikel?status=${tab.key}`
              }
              className={cn(
                "rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors",
                view === tab.key
                  ? "border-brand bg-brand text-white shadow-[0_6px_20px_rgba(16,120,73,0.25)]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand/40 hover:text-brand",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        <form
          action="/admin/artikel"
          method="get"
          className="ml-auto flex items-center gap-2"
        >
          {view !== "semua" ? (
            <input type="hidden" name="status" value={view} />
          ) : null}
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Cari judul, slug, kategori…"
              className="w-56 rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm shadow-sm focus:border-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/25"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:border-brand/40 hover:text-brand"
          >
            Cari
          </button>
        </form>
      </div>

      {loadError ? (
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
          {loadError}
        </div>
      ) : null}

      {/* Tabel artikel */}
      <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200/80 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3.5 font-semibold">Judul</th>
                <th className="px-4 py-3.5 font-semibold">Kategori</th>
                <th className="px-4 py-3.5 font-semibold">Status</th>
                <th className="px-4 py-3.5 font-semibold">Tanggal</th>
                <th className="px-5 py-3.5 text-right font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center text-slate-500">
                    <FileText
                      aria-hidden="true"
                      className="mx-auto mb-3 size-8 text-slate-300"
                    />
                    {loadError
                      ? "Data tidak bisa dimuat."
                      : view === "sampah"
                        ? "Sampah kosong."
                        : q
                          ? `Tidak ada artikel yang cocok dengan "${q}".`
                          : "Belum ada artikel."}
                  </td>
                </tr>
              ) : (
                articles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-b border-slate-100 transition-colors last:border-b-0 hover:bg-white/80"
                  >
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/artikel/${article.id}`}
                        className="font-semibold text-qrion-indigo transition-colors hover:text-brand"
                      >
                        {article.title}
                      </Link>
                      <p className="mt-0.5 max-w-md truncate text-xs text-slate-400">
                        /insight/baca/{article.slug}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge article={article} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">
                      {formatTanggalIndo(article.iso_date)}
                    </td>
                    <td className="px-5 py-4">
                      <RowActions
                        id={article.id}
                        slug={article.slug}
                        status={article.status}
                        trashed={article.deleted_at !== null}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        {articles.length} artikel{q ? ` untuk pencarian "${q}"` : ""}
        {articleCategoryList.length > 0
          ? ` · ${articleCategoryList.length} kategori tersedia`
          : ""}
      </p>
    </div>
  );
}
