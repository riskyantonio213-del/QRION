import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ProductPreview } from "@/components/product/product-preview";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

/** Hero block for a single product page. */
export function ProductHero({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <section
      aria-labelledby="product-hero-heading"
      className="relative isolate overflow-x-clip border-b border-border bg-background pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-br",
          product.accent.gradient,
        )}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-grid opacity-[0.25] [mask-image:radial-gradient(640px_320px_at_20%_0%,black,transparent)]"
      />

      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  >
                    Beranda
                  </Link>
                </li>
                <ChevronRight aria-hidden="true" className="size-3.5" />
                <li>
                  <Link
                    href="/produk"
                    className="rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  >
                    Produk
                  </Link>
                </li>
                <ChevronRight aria-hidden="true" className="size-3.5" />
                <li>
                  <span aria-current="page">{product.name}</span>
                </li>
              </ol>
            </nav>

            <span
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]",
                product.accent.chip,
              )}
            >
              <Icon aria-hidden="true" className="size-3.5" />
              {product.category}
            </span>

            <h1
              id="product-hero-heading"
              className="mt-5 text-balance font-display text-[30px] font-extrabold leading-[1.14] tracking-tight text-foreground sm:text-[38px] lg:text-[44px]"
            >
              {product.headline}
            </h1>

            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
              {product.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[13px] text-foreground/85"
                >
                  <Check
                    aria-hidden="true"
                    className={cn("size-3.5", product.accent.icon)}
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="xl">
                <Link href={`/demo?produk=${product.slug}`}>
                  Jadwalkan Demo {product.name}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/kontak">Hubungi Tim QRION</Link>
              </Button>
            </div>
          </div>

          <Reveal delay={0.1}>
            <ProductPreview product={product} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
