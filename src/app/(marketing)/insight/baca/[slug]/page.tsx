import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, User } from "lucide-react";

import { Section } from "@/components/layout/section";
import { ExternalImage } from "@/components/ui/external-image";
import {
  articleCategoryList,
  articles,
  categorySlug,
  getArticleMeta,
  latestArticles,
} from "@/data/articles";
import { articlesContent } from "@/data/articles-content";
import { neutralizeArticleLinks } from "@/lib/sanitize-article";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type ArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

/** Pre-render semua artikel dari data qrion.id. */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleMeta(slug);

  if (!article) {
    return { title: "Artikel tidak ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insight/baca/${article.slug}` },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url: `/insight/baca/${article.slug}`,
      siteName: siteConfig.name,
      title: `${article.title} | QRION`,
      description: article.excerpt,
      publishedTime: article.isoDate,
      images: article.image ? [{ url: article.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | QRION`,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getArticleMeta(slug);
  const contentHtml = articlesContent[slug];

  if (!article || !contentHtml) {
    notFound();
  }

  const latest = latestArticles(10)
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Judul di atas (latar polos), cover bersih di bawah tanpa overlay */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="pt-8 sm:pt-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                ›
              </li>
              <li>
                <Link
                  href="/insight"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Artikel
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                ›
              </li>
              <li className="min-w-0 max-w-full truncate font-medium text-foreground">
                {article.title}
              </li>
            </ol>
          </nav>

          <span className="mt-5 inline-flex rounded-full border border-border bg-soft px-3 py-1 text-[12px] font-semibold text-brand">
            {article.category}
          </span>

          <h1 className="mt-4 max-w-4xl text-[28px] font-bold leading-[1.15] text-foreground sm:text-[36px] lg:text-[44px]">
            {article.title}
          </h1>
        </div>

        {/* Cover — tampil utuh, tanpa gradient atau teks di atasnya */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-soft">
          {article.image ? (
            <ExternalImage
              src={article.image}
              alt={article.title}
              className="block h-auto w-full"
              fallbackClassName="block aspect-[16/9] w-full object-contain p-10"
            />
          ) : (
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-brand-dark via-brand to-brand-mint" />
          )}
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] xl:gap-16">
          {/* Sidebar kiri — Kategori Lainnya + Artikel Terbaru (ala PCR) */}
          <aside className="order-2 lg:order-1">
            <h2 className="text-[15px] font-bold text-muted-foreground">
              Kategori Lainnya
            </h2>
            <ul className="mt-4 space-y-3">
              {articleCategoryList.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/insight/${item.slug}`}
                    className={cn(
                      "group inline-flex items-center gap-2 text-[14px] transition-colors duration-200",
                      item.slug === categorySlug(article.category)
                        ? "font-semibold text-brand"
                        : "text-muted-foreground hover:text-brand",
                    )}
                  >
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3.5 shrink-0"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="my-7 border-border" />

            <h2 className="text-[15px] font-bold text-muted-foreground">
              Artikel Terbaru
            </h2>
            <div className="mt-4 space-y-6">
              {latest.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insight/baca/${item.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-soft">
                    {item.image ? (
                      <ExternalImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        fallbackClassName="h-full w-full object-contain p-4"
                      />
                    ) : null}
                  </div>
                  <h3 className="mt-2.5 line-clamp-2 text-[14px] font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-muted-foreground">
                    {item.date}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              href="/insight"
              className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
              Lihat Semua Artikel
            </Link>
          </aside>

          {/* Konten utama */}
          <div className="order-1 min-w-0 max-w-3xl lg:order-2">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{
                __html: neutralizeArticleLinks(contentHtml),
              }}
            />

            {/* Meta bawah — tanggal, penulis, sumber, label kategori (ala PCR) */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand"
                  >
                    <CalendarDays className="size-3.5" />
                  </span>
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand"
                  >
                    <User className="size-3.5" />
                  </span>
                  QRION
                </span>
              </div>

              <Link
                href={`/insight/${categorySlug(article.category)}`}
                className="rounded-full border border-border px-4 py-1.5 text-[13px] font-semibold text-foreground transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                {article.category}
              </Link>
            </div>

            <div className="mt-6">
              <Link
                href="/insight"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                />
                Kembali ke Artikel
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
