import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductPage } from "@/components/product/product-page";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/config/site";

type ProductRouteProps = {
  params: Promise<{ slug: string }>;
};

/** Pre-render every product page from the product catalogue. */
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Produk tidak ditemukan" };
  }

  const title = `${product.name} — ${product.category}`;

  return {
    title,
    description: product.summary,
    alternates: { canonical: `/produk/${product.slug}` },
    keywords: [
      product.name,
      product.category,
      ...product.features.map((feature) => feature.title),
    ],
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: `/produk/${product.slug}`,
      siteName: siteConfig.name,
      title: `${title} | QRION`,
      description: product.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | QRION`,
      description: product.summary,
    },
  };
}

export default async function ProdukDetailPage({ params }: ProductRouteProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
