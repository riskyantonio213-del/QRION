"use client";

import { useContent } from "@/components/admin/content-provider";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProductsShowcase } from "@/components/sections/products-showcase";

export function ProductsSection() {
  const { productsHeader } = useContent().showcase;

  return (
    <Section
      id="produk"
      background="soft"
      aria-labelledby="produk-heading"
      className="overflow-x-clip"
      containerClassName="max-w-[1400px]"
    >
      <SectionHeader
        eyebrow={productsHeader.eyebrow}
        title={
          <span id="produk-heading">{productsHeader.title}</span>
        }
        description={productsHeader.description}
      />

      <ProductsShowcase />
    </Section>
  );
}
