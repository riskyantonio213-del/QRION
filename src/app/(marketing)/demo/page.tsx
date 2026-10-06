import type { Metadata } from "next";
import { CalendarCheck, MessageCircle, Presentation } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/layout/section";
import { DemoForm } from "@/components/forms/demo-form";
import { Reveal } from "@/components/motion/reveal";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Jadwalkan Demo",
  description:
    "Ajukan sesi demo QRION untuk melihat bagaimana pembayaran, presensi, kartu siswa, jurnal pembelajaran, dan penerimaan murid baru dapat berjalan dalam satu ekosistem.",
  alternates: { canonical: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
  openGraph: {
    title: "Jadwalkan Demo QRION",
    description:
      "Lihat bagaimana QRION dapat membantu sekolah Anda mengelola operasional secara lebih sederhana.",
    url: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0",
  },
};

type DemoPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const steps = [
  {
    title: "Kami memahami kebutuhan Anda",
    description:
      "Tim QRION membaca informasi yang Anda kirim dan menghubungi Anda untuk memastikan konteks sekolah.",
    icon: MessageCircle,
  },
  {
    title: "Sesi demo sesuai kebutuhan",
    description:
      "Demo difokuskan pada modul yang relevan, bukan presentasi umum untuk semua sekolah.",
    icon: Presentation,
  },
  {
    title: "Diskusi langkah lanjutan",
    description:
      "Jika sesuai, kami membahas opsi implementasi dan tahapan yang perlu disiapkan sekolah.",
    icon: CalendarCheck,
  },
];

export default async function DemoPage({ searchParams }: DemoPageProps) {
  const params = await searchParams;
  const rawProduct = params.produk;
  const slug = Array.isArray(rawProduct) ? rawProduct[0] : rawProduct;
  const product = slug ? getProduct(slug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Request Demo"
        title="Lihat Bagaimana QRION Dapat Membantu Sekolah Anda"
        description="Isi formulir berikut agar tim QRION dapat menyiapkan sesi demo yang sesuai dengan kondisi dan kebutuhan institusi Anda."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Jadwalkan Demo" }]}
      >
        <p className="text-[13px] text-muted-foreground">
          Proses pengisian formulir kurang dari 3 menit.
        </p>
      </PageHero>

      <Section size="wide">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          <Reveal>
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Formulir Permintaan Demo
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Semua kolom bertanda{" "}
                <span aria-hidden="true" className="text-destructive">
                  *
                </span>{" "}
                wajib diisi.
              </p>
              <div className="mt-8">
                <DemoForm defaultProductSlug={product?.slug} />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:content-start">
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-border bg-soft p-6">
                <h2 className="font-display text-[17px] font-semibold text-foreground">
                  Apa yang terjadi setelah Anda mengirim formulir?
                </h2>
                <ol className="mt-5 grid gap-5">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.title} className="flex gap-3.5">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                          <Icon aria-hidden="true" className="size-[18px] text-brand" />
                        </span>
                        <div>
                          <p className="text-[14px] font-semibold text-foreground">
                            {index + 1}. {step.title}
                          </p>
                          <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h2 className="font-display text-[17px] font-semibold text-foreground">
                  Yang dapat Anda lihat pada sesi demo
                </h2>
                <ul className="mt-4 grid gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {[
                    "Alur pembayaran dan pencatatan tagihan siswa",
                    "Presensi digital beserta rekap kehadiran",
                    "Penggunaan kartu siswa di lingkungan sekolah",
                    "Jurnal pembelajaran dan pemantauannya",
                    "Alur penerimaan murid baru secara digital",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
