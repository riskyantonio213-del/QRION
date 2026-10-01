import type { Product, ProductSlug } from "./types";
import { ontuition } from "./ontuition";
import { oncard } from "./oncard";
import { ontime } from "./ontime";
import { jurnal } from "./jurnal";
import { spmb } from "./spmb";

export * from "./types";

/**
 * QRION product catalogue — the single source of truth for the product grid,
 * the ecosystem diagram, the navbar dropdown and every product detail page.
 *
 * Each product lives in its own file (ontuition.ts, oncard.ts, ...) so its
 * content and design (accent classes, icons, copy) can be edited in isolation.
 * To add a new product: create <slug>.ts, export it here, and add the slug to
 * productSlugs in ./types — it becomes available at /produk/<slug>
 * automatically (static params are generated from products).
 *
 * All numbers inside preview are illustrative UI placeholders for the
 * marketing mock-ups — replace them with API data when the product is wired up.
 */
export const products: Product[] = [ontuition, oncard, ontime, jurnal, spmb];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<ProductSlug, Product>;

export function getProduct(slug: string): Product | undefined {
  return productBySlug[slug as ProductSlug];
}

export const ecosystemProducts = products.map((product) => ({
  slug: product.slug,
  name: product.name,
  tagline: product.tagline,
  icon: product.icon,
  accent: product.accent,
}));
