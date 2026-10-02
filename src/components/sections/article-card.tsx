"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { ArticleMeta } from "@/data/articles";
import { ExternalImage } from "@/components/ui/external-image";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: ArticleMeta;
  className?: string;
  /** Kartu besar untuk baris unggulan di halaman utama Artikel. */
  featured?: boolean;
};

export function ArticleCard({
  article,
  className,
  featured,
}: ArticleCardProps) {
  return (
    <Link
      href={`/insight/baca/${article.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(48,46,89,0.10)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-soft",
          featured ? "aspect-[16/10]" : "aspect-[16/9]",
        )}
      >
        {article.image ? (
          <ExternalImage
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            fallbackClassName="h-full w-full object-contain p-6"
          />
        ) : (
          <img
            src="/images/qrion-logo2.png"
            alt=""
            className="h-full w-full object-contain p-6"
          />
        )}
      </div>

      <div
        className={cn("flex flex-1 flex-col gap-3", featured ? "p-6" : "p-5")}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="rounded-full border border-brand-mint-medium bg-brand-mint px-2.5 py-1 text-[11px] font-semibold text-brand-dark">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            {article.date}
          </span>
        </div>

        <h3
          className={cn(
            "font-bold leading-snug text-foreground transition-colors group-hover:text-brand",
            featured ? "text-[18px] sm:text-[19px]" : "text-[16px]",
          )}
        >
          {article.title}
        </h3>

        <p className="line-clamp-3 text-[13.5px] leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-[13px] font-semibold text-brand">
          Selengkapnya
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
