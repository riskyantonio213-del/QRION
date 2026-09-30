import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Handshake,
  Info,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { RoleCard } from "@/components/sections/cards";
import { CTASection } from "@/components/sections/cta-section";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { products } from "@/data/products";
import { finalCta } from "@/data/home";
import { ctaLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "QRION membangun infrastruktur digital untuk pendidikan Indonesia melalui ekosistem teknologi terintegrasi bagi sekolah, madrasah, dan pesantren.",
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: "Tentang QRION",
    description:
      "Visi, misi, dan nilai yang menjadi dasar pengembangan ekosistem QRION.",
    url: "/tentang",
  },
};

const values = [
  {
    title: "Innovation",
    description:
      "Terus mengembangkan cara baru agar teknologi pendidikan lebih mudah digunakan sekolah.",
    icon: Lightbulb,
  },
  {
    title: "Reliability",
    description:
      "Membangun sistem yang dapat diandalkan untuk kebutuhan operasional harian sekolah.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "Mengembangkan solusi bersama sekolah, madrasah, dan pesantren sebagai pengguna utama.",
    icon: Handshake,
  },
  {
    title: "Simplicity",
    description:
      "Menyederhanakan proses yang rumit agar mudah dipahami admin, guru, dan orang tua.",
    icon: Gauge,
  },
  {
    title: "Impact",
    description:
      "Berfokus pada dampak nyata bagi kualitas layanan dan tata kelola pendidikan.",
    icon: Target,
  },
];

const mission = [
  "Menyediakan ekosistem digital yang menyatukan proses operasional sekolah dalam satu alur.",
  "Membantu sekolah mengurangi pekerjaan administratif manual dan berulang.",
  "Menghadirkan informasi yang lebih mudah diakses oleh manajemen, guru, dan orang tua.",
  "Mendampingi sekolah pada setiap tahap implementasi, bukan hanya saat sistem dipasang.",
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Membangun Infrastruktur Digital untuk Pendidikan Indonesia"
        description={`${siteConfig.name} mengembangkan teknologi untuk menyederhanakan proses operasional sekolah — mulai dari administrasi, pembayaran, presensi, hingga dokumentasi pembelajaran.`}
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }]}
      />

      <Section aria-labelledby="siapa-kami-heading">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Who We Are"
              title={<span id="siapa-kami-heading">Siapa Kami</span>}
              description="QRION adalah perusahaan teknologi pendidikan yang berfokus pada ekosistem digital untuk institusi pendidikan."
              align="left"
            />
            <div className="mt-6 grid gap-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Kami melihat banyak sekolah, madrasah, dan pesantren menjalankan
                proses penting dengan alat yang terpisah: pencatatan pembayaran di
                satu tempat, presensi di tempat lain, dan dokumentasi pembelajaran
                di berkas yang berbeda. Kondisi ini membuat pekerjaan administratif
                menumpuk dan informasi sulit diakses ketika dibutuhkan.
              </p>
              <p>
                QRION dibangun untuk menyatukan proses tersebut. Setiap modul
                dirancang agar dapat digunakan secara mandiri, namun tetap
                terhubung ketika sekolah siap mengadopsi ekosistem secara lebih
                luas.
              </p>
            </div>
          </div>

          <Reveal delay={0.08} className="lg:pt-4">
            <div className="rounded-2xl border border-border bg-soft p-6">
              <h3 className="font-display text-[15px] font-semibold text-foreground">
                Catatan placeholder
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Informasi perusahaan seperti sejarah, susunan tim, legalitas, dan
                data resmi lainnya belum tersedia. Bagian ini sengaja tidak diisi
                agar tidak ada klaim yang belum terverifikasi — tambahkan setelah
                data resmi QRION tersedia.
              </p>
              <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-border bg-background p-4">
                <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  Tambahkan juga logo mitra resmi pada komponen LogoCloud setelah
                  kerja sama disepakati.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section background="soft" aria-labelledby="visi-misi-heading">
        <SectionHeader
          eyebrow="Visi & Misi"
          title={<span id="visi-misi-heading">Arah Pengembangan QRION</span>}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-border bg-background p-7">
              <h3 className="font-display text-xl font-bold text-foreground">
                Visi
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Menjadi infrastruktur digital yang membantu institusi pendidikan
                Indonesia menjalankan operasionalnya secara sederhana, transparan,
                dan terintegrasi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-border bg-background p-7">
              <h3 className="font-display text-xl font-bold text-foreground">
                Misi
              </h3>
              <ul className="mt-4 grid gap-3">
                {mission.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span className="text-[15px] leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section aria-labelledby="apa-yang-dibangun-heading">
        <SectionHeader
          eyebrow="What We Build"
          title={<span id="apa-yang-dibangun-heading">Apa yang Kami Bangun</span>}
          description="Lima modul yang saling terhubung dalam satu ekosistem pendidikan."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.slug} delay={(index % 5) * 0.06} className="h-full">
                <Link
                  href={`/produk/${product.slug}`}
                  className={cn(
                    "flex h-full min-h-32 flex-col rounded-xl border border-border bg-background p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                    product.accent.ring,
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-lg border",
                      product.accent.iconWrap,
                    )}
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn("size-[18px]", product.accent.icon)}
                    />
                  </span>
                  <span className="mt-4 font-display text-[15px] font-semibold text-foreground">
                    {product.name}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-[13px] text-brand">
                    Lihat detail
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section background="soft" aria-labelledby="nilai-heading">
        <SectionHeader
          eyebrow="Our Values"
          title={<span id="nilai-heading">Nilai yang Kami Pegang</span>}
          description="Prinsip yang menjadi dasar cara QRION membangun produk dan mendampingi sekolah."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={(index % 3) * 0.07} className="h-full">
              <RoleCard
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section padding="compact" className="border-t border-border/70">
        <SectionHeader
          eyebrow="Kepercayaan"
          title="Bersama Institusi Pendidikan"
          description="Logo pada bagian ini masih berupa placeholder. Logo mitra resmi akan ditambahkan setelah kerja sama disepakati."
          titleClassName="text-[22px] sm:text-[26px] lg:text-[28px]"
        />
        <LogoCloud className="mt-10" />
      </Section>

      <CTASection
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={{ label: finalCta.secondaryCta.label, href: ctaLinks.contact }}
      />
    </>
  );
}
