import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

/** Product card used on the homepage grid and the /produk overview page. */
export function ProductCard({ product, className }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-card transition-all duration-300 hover:border-brand-mint-medium hover:bg-soft",
        className,
      )}
    >
      {/* Subtle per-product accent line keeps each module recognisable. */}
      <span
        aria-hidden="true"
        className={cn("h-[3px] w-full bg-gradient-to-r", product.accent.gradient)}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "flex size-11 items-center justify-center rounded-lg border",
              product.accent.iconWrap,
            )}
          >
            <Icon
              aria-hidden="true"
              className={cn("size-5", product.accent.icon)}
            />
          </span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-1 text-[11px] font-medium",
              product.accent.chip,
            )}
          >
            {product.category}
          </span>
        </div>

        <h3 className="mt-5 font-display text-[19px] font-bold text-foreground">
          {product.name}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
          {product.summary}
        </p>

        <ul className="mt-5 grid gap-2.5">
          {product.cardBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5">
              <Check
                aria-hidden="true"
                className={cn("mt-0.5 size-4 shrink-0", product.accent.icon)}
              />
              <span className="text-[14px] leading-snug text-foreground/85">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="border-t border-border pt-5">
            <Link
              href={`/produk/${product.slug}`}
              className="inline-flex items-center gap-2 rounded py-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              Pelajari {product.name}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
