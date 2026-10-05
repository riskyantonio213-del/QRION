import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ProductsSection } from "@/components/sections/products-section";
import { CTASection } from "@/components/sections/cta-section";
import { products } from "@/data/products";
import { finalCta } from "@/data/home";
import { ctaLinks } from "@/config/site";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Jelajahi modul QRION: Ontuition untuk pembayaran sekolah, Oncard untuk kartu pintar siswa, Ontime untuk presensi digital, Qrion Jurnal, dan Qrion SPMB untuk penerimaan murid baru.",
  alternates: { canonical: "/produk" },
  openGraph: {
    title: "Produk QRION",
    description:
      "Lima modul yang dapat digunakan secara mandiri dan dihubungkan dalam satu ekosistem pendidikan.",
    url: "/produk",
  },
};

export default function ProdukPage() {
  return (
    <>
      <PageHero
        eyebrow="Produk"
        title="Modul QRION untuk Berbagai Kebutuhan Sekolah"
        description="QRION menyediakan modul yang dapat digunakan sesuai prioritas sekolah. Semua modul dirancang agar konsisten dan dapat saling terhubung dalam satu ekosistem."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Produk" }]}
      >
        <p className="text-[13px] text-muted-foreground">
          {products.length} modul tersedia ·{" "}
          <span className="text-foreground/80">
            dapat diimplementasikan bertahap
          </span>
        </p>
      </PageHero>

      <ProductsSection />

      {/* <CTASection
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={{ label: finalCta.secondaryCta.label, href: ctaLinks.contact }}
      /> */}
    </>
  );
}
