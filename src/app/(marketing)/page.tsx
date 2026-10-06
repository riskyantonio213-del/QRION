import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { OnboardSection } from "@/components/sections/onboard-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { ProductsSection } from "@/components/sections/products-section";
// import { HowItWorks } from "@/components/sections/how-it-works";
// import { BenefitsSection } from "@/components/sections/benefits-section";
// Bagian dashboard sudah digabung ke dalam <Hero /> (hero stage berlapis)
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { InsightSection } from "@/components/sections/insight-section";
import { RolesSection } from "@/components/sections/roles-section";
import { FAQSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "QRION",
  description:
    "QRION menyediakan solusi digital terintegrasi untuk membantu sekolah, madrasah, dan pesantren mengelola pembayaran, presensi, kartu pintar, jurnal pembelajaran, dan penerimaan murid baru.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComparisonSection />
      <OnboardSection />
      <EcosystemSection />
      <ProductsSection />
      {/* <ProblemSection /> */}
      {/* <HowItWorks /> */}
      {/* <BenefitsSection /> */}
      <RolesSection />
      <TestimonialSection />
      <PricingSection />
      <InsightSection />
      <TrustSection />
      <FAQSection />
    </>
  );
}
