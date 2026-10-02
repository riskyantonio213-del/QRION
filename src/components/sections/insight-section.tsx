import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ArticleCard } from "@/components/sections/article-card";
import { Reveal } from "@/components/motion/reveal";
import { OncardRipple } from "@/components/product/designs/interactive/oncard-ripple";
import { latestArticles } from "@/data/articles";

export function InsightSection() {
  const latest = latestArticles(3);

  return (
    <Section id="wawasan" aria-labelledby="wawasan-heading">
      <SectionHeader
        eyebrow="Wawasan"
        title={<span id="wawasan-heading">Wawasan &amp; Artikel Terbaru</span>}
        description="Berbagai artikel pilihan yang membahas teknologi, manajemen, dan inovasi di lingkungan sekolah."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((article, index) => (
          <Reveal key={article.slug} delay={index * 0.07} className="h-full">
            <ArticleCard article={article} className="h-full" />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/insight"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
        >
          <OncardRipple color="#51c590" hoverColor="#ffffff" />
          <span className="relative z-10 flex items-center gap-2">
            Lihat semua artikel
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </div>
    </Section>
  );
}
