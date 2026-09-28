import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { Faq } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { generalFaq } from "@/data/faq";
import { finalCta } from "@/data/home";
import { ctaLinks } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan mengenai ekosistem QRION, modul produk, dan proses implementasi di sekolah, madrasah, serta pesantren.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan Umum tentang QRION"
        description="Rangkuman pertanyaan yang paling sering diajukan sekolah sebelum memulai pembicaraan dengan tim QRION."
        breadcrumb={[{ label: "Beranda", href: "/" }, { label: "FAQ" }]}
      />

      <Faq
        items={generalFaq}
        eyebrow="Pertanyaan Umum"
        title="Hal yang Sering Ditanyakan"
        description="Jika jawaban di bawah belum menjawab kebutuhan Anda, silakan hubungi tim QRION langsung."
        background="soft"
      />

      <div className="pb-4">
        <div className="mx-auto w-full max-w-2xl px-5 text-center sm:px-6">
          <Link
            href="/pusat-bantuan"
            className="inline-flex items-center gap-2 rounded text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            Lihat Pusat Bantuan
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>

      <CTASection
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={{ label: finalCta.secondaryCta.label, href: ctaLinks.contact }}
      />
    </>
  );
}
