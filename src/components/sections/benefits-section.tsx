import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { BenefitCard } from "@/components/sections/cards";
import { benefits } from "@/data/home";

export function BenefitsSection() {
  return (
    <Section id="manfaat" background="soft" aria-labelledby="manfaat-heading">
      <SectionHeader
        eyebrow="Manfaat"
        title={
          <span id="manfaat-heading">
            Lebih Sederhana untuk Sekolah. Lebih Transparan untuk Semua.
          </span>
        }
        description="Manfaat yang dirasakan ketika proses operasional sekolah berjalan dalam satu ekosistem."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit.title} delay={(index % 3) * 0.08} className="h-full">
            <BenefitCard
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
