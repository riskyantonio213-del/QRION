import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ArticleForm } from "@/components/admin/article-form";
import { articleCategoryList } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artikel Baru — Panel Admin QRION",
};

export default function NewArticlePage() {
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
          <h1 className="font-display text-lg font-bold tracking-tight text-qrion-indigo">
            Artikel Baru
          </h1>
        </div>
        <p className="hidden text-sm text-muted-foreground md:block">
          Tulis artikel dengan editor WYSIWYG. Simpan sebagai Draft atau
          Terbitkan langsung ke halaman Wawasan.
        </p>
      </div>

      <ArticleForm article={null} categories={categories} />
    </div>
  );
}
