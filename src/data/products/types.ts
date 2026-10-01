import type { LucideIcon } from "lucide-react";

/**
 * QRION product catalogue — the single source of truth for the product grid,
 * the ecosystem diagram, the navbar dropdown and every product detail page.
 *
 * To add a new product: append an entry here and it becomes available at
 * `/produk/<slug>` automatically (static params are generated from this array).
 *
 * All numbers inside `preview` are illustrative UI placeholders for the
 * marketing mock-ups — replace them with API data when the product is wired up.
 */

export const productSlugs = [
  "ontuition",
  "oncard",
  "ontime",
  "jurnal",
  "spmb",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export type StatusTone = "success" | "warning" | "neutral" | "info";

export type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductStep = {
  title: string;
  description: string;
};

export type ProductTextItem = {
  title: string;
  description: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

/** Per-product Tailwind accent classes (written literally so Tailwind sees them). */
export type ProductAccent = {
  iconWrap: string;
  icon: string;
  chip: string;
  gradient: string;
  dot: string;
  bar: string;
  ring: string;
};

export type ProductPreview = {
  kind: "attendance" | "payments" | "cards" | "journal" | "admission";
  appTitle: string;
  appSubtitle: string;
  metrics: { label: string; value: string; hint: string }[];
  chartTitle: string;
  series: { label: string; value: number }[];
  rowsTitle: string;
  rows: { label: string; value: string; status: string; tone: StatusTone }[];
};

export type Product = {
  slug: ProductSlug;
  name: string;
  category: string;
  /** One-liner for cards and the ecosystem diagram. */
  tagline: string;
  /** Product page hero headline. */
  headline: string;
  /** Product page hero paragraph. */
  description: string;
  /** Card description (homepage product grid). */
  summary: string;
  icon: LucideIcon;
  accent: ProductAccent;
  highlights: string[];
  /** Five headline benefits shown on the homepage product card. */
  cardBenefits: string[];
  problems: ProductTextItem[];
  features: ProductFeature[];
  workflow: ProductStep[];
  benefits: ProductTextItem[];
  roles: ProductTextItem[];
  faq: ProductFaq[];
  preview: ProductPreview;
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};
