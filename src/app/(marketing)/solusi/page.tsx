import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Landmark } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { RoleCard } from "@/components/sections/cards";
import { products } from "@/data/products";
import { roles } from "@/data/home";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solusi",
  description:
    "Solusi digital QRION untuk sekolah, madrasah, pesantren, dan yayasan pendidikan — dipetakan berdasarkan kebutuhan operasional yang paling sering dihadapi.",
  alternates: { canonical: "/solusi" },
};

/** Institution types QRION is built for. */
const institutionTypes = [
  {
    title: "Sekolah",
    description:
      "Mendukung administrasi harian, pembayaran, presensi, dan dokumentasi pembelajaran pada jenjang pendidikan formal.",
    icon: Building2,
  },
  {
    title: "Madrasah",
    description:
      "Membantu pengelolaan data siswa, kegiatan pembelajaran, dan proses administrasi dengan alur yang dapat disesuaikan.",
    icon: Landmark,
  },
  {
    title: "Pesantren",
    description:
      "Mendukung pencatatan kehadiran, pembayaran, dan aktivitas pembelajaran pada lingkungan pendidikan berbasis asrama.",
    icon: GraduationCap,
  },
];

/** Need → module mapping, derived from the product catalogue. */
const needMapping = [
  {
    need: "Pembayaran & tagihan siswa",
    detail:
      "Menyusun tagihan, memantau pembayaran, dan menyiapkan rekap pembayaran sekolah.",
    slugs: ["ontuition"] as const,
  },
  {
    need: "Kehadiran & kedisiplinan",
    detail:
      "Mencatat kehadiran siswa, guru, dan staf serta meneruskan informasi kepada orang tua.",
    slugs: ["ontime", "oncard"] as const,
  },
  {
    need: "Identitas siswa & aktivitas digital",
    detail:
      "Menggunakan satu kartu untuk identitas siswa dan aktivitas digital di lingkungan sekolah.",
    slugs: ["oncard", "ontime"] as const,
  },
  {
    need: "Dokumentasi pembelajaran",
    detail:
      "Mencatat jurnal pembelajaran guru dan memonitor aktivitas kelas.",
    slugs: ["jurnal"] as const,
  },
  {
    need: "Penerimaan murid baru",
    detail:
      "Mengelola pendaftaran, verifikasi data, dan status penerimaan dalam satu alur digital.",
    slugs: ["spmb"] as const,
  },
];

export default function SolusiPage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi"
        title="Solusi Digital yang Mengikuti Kebutuhan Institusi"
        description="Setiap institusi pendidikan memiliki prioritas yang berbeda. QRION membantu memetakan kebutuhan tersebut menjadi modul yang dapat digunakan secara bertahap."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Solusi" }]}
      />

      <Section aria-labelledby="jenis-institusi-heading">
        <SectionHeader
          eyebrow="Jenis Institusi"
          title={<span id="jenis-institusi-heading">Dirancang untuk Berbagai Institusi Pendidikan</span>}
          description="Penerapan QRION disesuaikan dengan struktur, kebijakan, dan proses yang berjalan di masing-masing institusi."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {institutionTypes.map((type, index) => (
            <Reveal key={type.title} delay={index * 0.07} className="h-full">
              <RoleCard
                title={type.title}
                description={type.description}
                icon={type.icon}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="soft" aria-labelledby="kebutuhan-heading">
        <SectionHeader
          eyebrow="Berdasarkan Kebutuhan"
          title={<span id="kebutuhan-heading">Mulai dari Proses yang Paling Perlu Dirapikan</span>}
          description="Pilih kebutuhan utama sekolah, lalu lihat modul QRION yang relevan."
        />

        <div className="mt-12 grid gap-4">
          {needMapping.map((item, index) => (
            <Reveal key={item.need} delay={index * 0.05}>
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h3 className="font-display text-[17px] font-semibold text-foreground">
                    {item.need}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {item.slugs.map((slug) => {
                    const product = products.find((entry) => entry.slug === slug);
                    if (!product) return null;
                    const Icon = product.icon;
                    return (
                      <Link
                        key={`${item.need}-${slug}`}
                        href={`/produk/${product.slug}`}
                        className={cn(
                          "inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-mint-medium hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                        )}
                      >
                        <Icon
                          aria-hidden="true"
                          className={cn("size-4", product.accent.icon)}
                        />
                        {product.name}
                        <ArrowRight
                          aria-hidden="true"
                          className="size-3.5 text-muted-foreground"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="peran-solusi-heading">
        <SectionHeader
          eyebrow="Pengguna"
          title={<span id="peran-solusi-heading">Dibangun untuk Seluruh Ekosistem Sekolah</span>}
          description="Setiap peran di sekolah mendapatkan informasi dan akses sesuai kebutuhannya."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={(index % 5) * 0.06} className="h-full">
              <RoleCard
                title={role.title}
                description={role.description}
                icon={role.icon}
                className="p-5"
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
