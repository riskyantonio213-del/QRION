import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductHero } from "@/components/product/product-hero";
import {
  ProductBenefits,
  ProductFeatures,
  ProductOverview,
  ProductProblems,
  ProductRoles,
  ProductWorkflow,
} from "@/components/product/product-sections";
import { DashboardPreview } from "@/components/dashboard/dashboard-preview";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Faq } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import { ctaLinks } from "@/config/site";
import { cn } from "@/lib/utils";

/** Shows how the module connects to the school-wide QRION dashboard. */
function ProductIntegration({ product }: { product: Product }) {
  const others = products.filter((item) => item.slug !== product.slug);

  return (
    <Section id="integrasi" background="soft" size="wide" containerClassName="max-w-[1980px]" aria-labelledby="integrasi-heading">
      <SectionHeader
        eyebrow="Integrasi"
        title={
          <span id="integrasi-heading">
            {product.name} Terhubung ke Dashboard Sekolah
          </span>
        }
        description={`Data dari ${product.name} mengalir ke dashboard QRION, sehingga manajemen sekolah dapat melihat gambaran operasional dalam satu tampilan.`}
      />

      <Reveal className="mt-12">
        <DashboardPreview />
      </Reveal>

      <p className="mt-5 text-center text-sm text-muted-foreground">
        Tampilan contoh — bukan data sekolah sebenarnya.
      </p>

      <div className="mt-14">
        <h3 className="text-center font-display text-[15px] font-semibold text-foreground">
          Modul lain dalam ekosistem QRION
        </h3>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {others.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/produk/${item.slug}`}
                className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-qrion-indigo transition-all hover:border-brand-mint-medium hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-md border",
                    item.accent.iconWrap,
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    className={cn("size-3.5", item.accent.icon)}
                  />
                </span>
                {item.name}
                <ArrowRight aria-hidden="true" className="size-3.5 text-muted-foreground" />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/**
 * Product detail template — every QRION product page is rendered from data in
 * src/data/products.ts, so adding a product requires no new page component.
 */
export function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <ProductHero product={product} />
      <ProductOverview product={product} />
      <ProductProblems product={product} />
      <ProductFeatures product={product} />
      <ProductWorkflow product={product} />
      <ProductBenefits product={product} />
      <ProductRoles product={product} />
      <ProductIntegration product={product} />
      <Faq items={product.faq} />
      <CTASection
        title={product.cta.title}
        description={product.cta.description}
        primaryCta={{ label: product.cta.primaryLabel, href: `/demo?produk=${product.slug}` }}
        secondaryCta={{ label: product.cta.secondaryLabel, href: ctaLinks.contact }}
      />
    </>
  );
}
