import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export function ProductsSection() {
  return (
    <Section id="produk" background="soft" aria-labelledby="produk-heading">
      <SectionHeader
        eyebrow="Produk"
        title={<span id="produk-heading">Modul yang Dapat Digunakan Sesuai Kebutuhan</span>}
        description="Setiap modul QRION dapat digunakan secara mandiri, dan bekerja paling optimal ketika dihubungkan dalam satu ekosistem."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal
            key={product.slug}
            delay={(index % 3) * 0.08}
            className="h-full"
          >
            <ProductCard product={product} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
