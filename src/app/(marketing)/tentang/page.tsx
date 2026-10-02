import type { Metadata } from "next";
import { Link2, Layers, ShieldCheck, Sparkles } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { ExternalImage } from "@/components/ui/external-image";
import { CTASection } from "@/components/sections/cta-section";
import { finalCta } from "@/data/home";
import { ctaLinks, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil Qrion — brand edtech di bawah Phoenix Software: sekilas perusahaan, visi, misi, nilai utama, dan mitra strategis BRK Syariah melalui BRKSEduPay.",
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: "Tentang QRION",
    description:
      "Sekilas Qrion, visi, misi, nilai utama, dan mitra strategis QRION.",
    url: "/tentang",
  },
};

const highlights = [
  {
    src: "https://qrion.id/wp-content/uploads/2026/06/Judul-3-819x1024.png",
    alt: "Poster informasi Qrion",
  },
  {
    src: "https://qrion.id/wp-content/uploads/2026/06/Judul-6-819x1024.png",
    alt: "Poster informasi Qrion",
  },
  {
    src: "https://qrion.id/wp-content/uploads/2026/06/Judul-4-819x1024.png",
    alt: "Poster informasi Qrion",
  },
  {
    src: "https://qrion.id/wp-content/uploads/2026/06/Judul-5-819x1024.png",
    alt: "Poster informasi Qrion",
  },
];

const mission = [
  {
    title: "Connect",
    description:
      "Menghubungkan seluruh layanan sekolah dalam satu ekosistem digital yang terintegrasi.",
    icon: Link2,
  },
  {
    title: "Simplify",
    description:
      "Menyederhanakan operasional sekolah melalui teknologi yang intuitif dan efisien.",
    icon: Layers,
  },
  {
    title: "Secure",
    description:
      "Menyediakan platform yang aman, andal, dan siap bertumbuh bersama kebutuhan sekolah.",
    icon: ShieldCheck,
  },
  {
    title: "Innovate",
    description:
      "Mengembangkan solusi digital secara berkelanjutan untuk menciptakan pengalaman pendidikan yang lebih baik.",
    icon: Sparkles,
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Membangun Infrastruktur Digital untuk Pendidikan Indonesia"
        description={`${siteConfig.name} mengembangkan teknologi untuk menyederhanakan proses operasional sekolah — mulai dari administrasi, pembayaran, presensi, hingga dokumentasi pembelajaran.`}
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Tentang Kami" },
        ]}
      />

      <Section aria-labelledby="sekilas-heading">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Sekilas Qrion"
              title={<span id="sekilas-heading">Siapa Qrion</span>}
              align="left"
            />
            <div className="mt-6 grid gap-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Qrion merupakan brand edtech yang berada di bawah naungan
                Phoenix Software / PT Phoenix Kreatif Digital. Qrion
                dikembangkan untuk menjawab kebutuhan sekolah terhadap sistem
                digital yang mudah digunakan, terintegrasi, dan relevan dengan
                aktivitas pendidikan sehari-hari.
              </p>
              <p>
                Berawal dari kebutuhan sekolah dalam mengelola administrasi dan
                keuangan secara lebih modern, Qrion terus berkembang menjadi
                ekosistem digital sekolah yang menghubungkan pihak sekolah,
                guru, orang tua, siswa, dan mitra strategis dalam satu sistem
                yang saling terhubung.
              </p>
              <p>
                Saat ini, Qrion berfokus pada pengembangan solusi digital untuk
                membantu sekolah melakukan transformasi dari sistem manual
                menuju sistem yang lebih otomatis, real-time, dan terdokumentasi
                dengan baik.
              </p>
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-border bg-soft p-3">
              <ExternalImage
                src="https://qrion.id/wp-content/uploads/2026/06/ARGEO-1.png"
                alt="Visual ekosistem digital Qrion"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((poster, index) => (
            <Reveal key={poster.src} delay={index * 0.06} className="h-full">
              <div className="h-full overflow-hidden rounded-xl border border-border bg-soft p-2">
                <ExternalImage
                  src={poster.src}
                  alt={poster.alt}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="soft" aria-labelledby="visi-misi-heading">
        <SectionHeader
          eyebrow="Visi & Misi"
          title={<span id="visi-misi-heading">Arah Pengembangan Qrion</span>}
        />

        <Reveal className="mt-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/15 bg-primary/5 p-8 text-center sm:p-12">
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
              Visi
            </span>
            <p className="mt-4 text-balance font-display text-[26px] font-extrabold leading-[1.2] text-foreground sm:text-[32px] lg:text-[36px]">
              Powering the Future of School Ecosystems
            </p>
          </div>
        </Reveal>

        <h3 className="mt-12 text-center font-display text-xl font-bold text-foreground">
          Misi
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mission.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <div className="h-full rounded-xl border border-border bg-background p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-brand/20 bg-brand-soft text-brand">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className="mt-4 font-display text-[16px] font-bold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section aria-labelledby="nilai-heading">
        <SectionHeader
          eyebrow="Nilai Utama"
          title={<span id="nilai-heading">Nilai Utama Qrion</span>}
          description="Fondasi nilai yang menjadi panduan Qrion dalam membangun produk dan melayani sekolah."
        />
        <Reveal className="mt-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-soft p-3">
            <ExternalImage
              src="https://qrion.id/wp-content/uploads/2026/08/ChatGPT-Image-Aug-3-2026-09_07_37-AM-1024x530.png"
              alt="Infografis Nilai Utama Qrion"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </Reveal>
      </Section>

      <Section background="soft" aria-labelledby="partner-heading">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Strategic Partner"
              title={
                <span id="partner-heading">BRK Syariah &amp; BRKSEduPay</span>
              }
              align="left"
            />
            <div className="mt-6 grid gap-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Dalam pengembangan ekosistem digital sekolah, Qrion juga
                berkolaborasi dengan BRK Syariah melalui program BRKSEduPay.
              </p>
              <p>
                BRKSEduPay merupakan program digitalisasi keuangan sekolah yang
                mengintegrasikan sistem Qrion dengan layanan perbankan BRK
                Syariah. Program ini membantu sekolah mengelola pembayaran,
                tagihan, kas, jurnal, dan laporan keuangan secara lebih rapi,
                transparan, real-time, dan terintegrasi.
              </p>
              <p>
                Melalui BRKSEduPay, sekolah dapat memperoleh solusi digitalisasi
                keuangan sekolah yang mendukung kemudahan pembayaran bagi orang
                tua siswa, efisiensi administrasi bagi sekolah, serta
                pengelolaan dana yang lebih tertata melalui ekosistem perbankan
                syariah.
              </p>
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-border bg-background p-3">
              <ExternalImage
                src="https://qrion.id/wp-content/uploads/2026/06/QRION-Feed-23-2-1024x512.png"
                alt="Program BRKSEduPay — digitalisasi keuangan sekolah bersama BRK Syariah"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={{
          label: finalCta.secondaryCta.label,
          href: ctaLinks.contact,
        }}
      />
    </>
  );
}
