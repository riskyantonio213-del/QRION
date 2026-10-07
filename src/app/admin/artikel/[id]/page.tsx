import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ArticleForm } from "@/components/admin/article-form";
import { articleCategoryList } from "@/data/articles";
import { getAdminArticle } from "@/lib/admin/articles-store";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  if (!Number.isNaN(Number(id))) {
    try {
      const article = await getAdminArticle(Number(id));
      if (article) {
        return { title: `Edit: ${article.title} — Panel Admin QRION` };
      }
    } catch {
      // jatuh ke metadata default
    }
  }
  return { title: "Edit Artikel — Panel Admin QRION" };
}

export default async function EditArticlePage({ params }: Params) {
  const { id } = await params;
  const numericId = Number(id);
  if (Number.isNaN(numericId)) notFound();

  let article = null;
  try {
    article = await getAdminArticle(numericId);
  } catch {
    notFound();
  }
  if (!article) notFound();

  const categories = articleCategoryList.map((category) => category.name);

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-[0_8px_30px_rgba(48,46,89,0.06)] backdrop-blur-xl">
        <Link
          href="/admin/artikel"
          className="inline-flex items-center gap-1.5 rounded-lg px-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Artikel
        </Link>
        <span aria-hidden="true" className="h-5 w-px bg-slate-200" />
        <div className="min-w-0">
          <h1 className="truncate font-display text-lg font-bold tracking-tight text-qrion-indigo">
            {article.title || "Edit Artikel"}
          </h1>
        </div>
        <p className="hidden text-sm text-muted-foreground md:block">
          Perubahan tampil di situs setelah disimpan (Terbitkan / Simpan Draft).
        </p>
      </div>

      <ArticleForm
        key={article.id}
        article={article}
        categories={
          categories.includes(article.category)
            ? categories
            : [article.category, ...categories]
        }
      />
    </div>
  );
}
