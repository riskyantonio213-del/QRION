import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { ArticleCard } from "@/components/sections/article-card";
import {
  articleCategoryList,
  articlesByCategory,
  getCategoryBySlug,
} from "@/data/articles";
import { cn } from "@/lib/utils";

type KategoriRouteProps = {
  params: Promise<{ kategori: string }>;
};

/** Pre-render semua halaman kategori artikel. */
export function generateStaticParams() {
  return articleCategoryList.map((category) => ({ kategori: category.slug }));
}

export async function generateMetadata({
  params,
}: KategoriRouteProps): Promise<Metadata> {
  const { kategori } = await params;
  const category = getCategoryBySlug(kategori);

  if (!category) {
    return { title: "Kategori tidak ditemukan" };
  }

  return {
    title: `${category.name} — Artikel`,
    description: `Daftar artikel QRION pada kategori ${category.name}.`,
    alternates: { canonical: `/insight/${category.slug}` },
  };
}

export default async function KategoriArtikelPage({
  params,
}: KategoriRouteProps) {
  const { kategori } = await params;
  const category = getCategoryBySlug(kategori);

  if (!category) {
    notFound();
  }

  const categoryArticles = articlesByCategory(category.slug);

  return (
    <>
      <PageHero
        eyebrow="Artikel"
        title={category.name}
        description={`Daftar lengkap artikel QRION pada kategori ${category.name}.`}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Artikel", href: "/insight" },
          { label: category.name },
        ]}
      />

      <Section background="soft">
        {/* Kategori lainnya — pil navigasi antar kategori */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="mr-1 text-[13px] font-semibold text-muted-foreground">
            Kategori Lainnya
          </span>
          {articleCategoryList.map((item) =>
            item.slug === category.slug ? (
              <span
                key={item.slug}
                aria-pressed="true"
                className="rounded-full border border-brand bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-[0_6px_20px_rgba(16,120,73,0.25)]"
              >
                {item.name}
              </span>
            ) : (
              <Link
                key={item.slug}
                href={`/insight/${item.slug}`}
                className={cn(
                  "rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-semibold text-slate-600 transition-colors duration-200",
                  "hover:border-brand hover:text-brand",
                )}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <p className="mt-6 text-[13px] text-muted-foreground">
          Menampilkan {categoryArticles.length} artikel
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              className="h-full"
            />
          ))}
        </div>

        {categoryArticles.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Belum ada artikel pada kategori ini.
          </p>
        ) : null}
      </Section>
    </>
  );
}
