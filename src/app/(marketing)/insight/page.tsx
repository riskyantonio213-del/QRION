import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/sections/page-hero";
import { ArticleCard } from "@/components/sections/article-card";
import { OncardRipple } from "@/components/product/designs/interactive/oncard-ripple";
import {
  articlesInCategory,
  buildCategoryList,
  getPublishedArticles,
  latest,
} from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Wawasan dan artikel terbaru dari QRION seputar digitalisasi sekolah, manajemen operasional pendidikan, kabar mitra, dan inovasi teknologi di lingkungan sekolah.",
  alternates: { canonical: "/insight" },
};

export default async function InsightPage() {
  const articles = await getPublishedArticles();
  const featured = latest(articles, 3);
  const categories = buildCategoryList(articles);

  return (
    <>
      <PageHero
        eyebrow="Artikel"
        title="Wawasan & Artikel Terbaru"
        description="Berbagai artikel pilihan yang membahas teknologi, manajemen, dan inovasi di lingkungan sekolah — dari edukasi digitalisasi hingga kabar terbaru mengenai mitra QRION."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Artikel" }]}
      />

      {/* Unggulan — artikel terbaru */}
      <Section background="soft">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              featured
              className="h-full"
            />
          ))}
        </div>
      </Section>

      {/* Section per kategori + "Lihat Selengkapnya" */}
      {categories.map((category, index) => {
        const categoryArticles = articlesInCategory(articles, category.slug).slice(0, 6);
        return (
          <Section
            key={category.slug}
            background={index % 2 === 0 ? "default" : "soft"}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <h2 className="text-[24px] font-bold leading-tight text-foreground sm:text-[28px]">
                  {category.name}
                </h2>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  {category.count} artikel
                </p>
              </div>
              <Link
                href={`/insight/${category.slug}`}
                className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg border border-brand px-4 py-2 text-[13px] font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
              >
                <OncardRipple color="#51c590" hoverColor="#ffffff" />
                <span className="relative z-10 flex items-center gap-1.5">
                  Lihat Selengkapnya
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  className="h-full"
                />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
