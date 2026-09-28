import type { Metadata } from "next";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { ProductsSection } from "@/components/sections/products-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { DashboardSection } from "@/components/sections/dashboard-section";
import { RolesSection } from "@/components/sections/roles-section";
import { CTASection } from "@/components/sections/cta-section";
import { finalCta, trust } from "@/data/home";
import { ctaLinks } from "@/config/site";

export const metadata: Metadata = {
  title: "QRION | Ekosistem Digital untuk Pendidikan",
  description:
    "QRION menyediakan solusi digital terintegrasi untuk membantu sekolah, madrasah, dan pesantren mengelola pembayaran, presensi, kartu pintar, jurnal pembelajaran, dan penerimaan murid baru.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section 2 — Trust / social proof (placeholder logos only). */}
      <Section
        id="kepercayaan"
        padding="compact"
        className="border-t border-border/70"
      >
        <SectionHeader
          eyebrow="Kepercayaan"
          title={trust.title}
          description={trust.description}
          titleClassName="text-[22px] sm:text-[26px] lg:text-[28px]"
        />
        <LogoCloud className="mt-10" />
      </Section>

      <ProblemSection />
      <EcosystemSection />
      <ProductsSection />
      <HowItWorks />
      <BenefitsSection />
      <DashboardSection />
      <RolesSection />

      <CTASection
        title={finalCta.title}
        description={finalCta.description}
        primaryCta={finalCta.primaryCta}
        secondaryCta={{ label: finalCta.secondaryCta.label, href: ctaLinks.contact }}
      />
    </>
  );
}
