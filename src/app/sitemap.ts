import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

/** Static routes with their relative crawl priority. */
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/produk", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solusi", priority: 0.8, changeFrequency: "monthly" },
  { path: "/demo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/live-preview", priority: 0.9, changeFrequency: "monthly" },
  { path: "/kontak", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tentang", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insight", priority: 0.6, changeFrequency: "weekly" },
  { path: "/karier", priority: 0.5, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/pusat-bantuan", priority: 0.5, changeFrequency: "monthly" },
  { path: "/dokumentasi", priority: 0.5, changeFrequency: "monthly" },
  { path: "/kebijakan-privasi", priority: 0.3, changeFrequency: "yearly" },
  { path: "/syarat-ketentuan", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route.path, siteConfig.url).toString(),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: new URL(`/produk/${product.slug}`, siteConfig.url).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
