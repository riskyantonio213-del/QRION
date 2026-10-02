import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProductsShowcase } from "@/components/sections/products-showcase";

export function ProductsSection() {
  return (
    <Section id="produk" background="soft" aria-labelledby="produk-heading">
      <SectionHeader
        eyebrow="Produk"
        title={
          <span id="produk-heading">
            Modul yang Dapat Digunakan Sesuai Kebutuhan
          </span>
        }
        description="Setiap modul QRION dapat digunakan secara mandiri, dan bekerja paling optimal ketika dihubungkan dalam satu ekosistem."
      />

      <ProductsShowcase />
    </Section>
  );
}
