import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { howItWorks } from "@/data/home";

export function HowItWorks() {
  return (
    <Section id="cara-kerja" aria-labelledby="cara-kerja-heading">
      <SectionHeader
        eyebrow="Cara Kerja"
        title={<span id="cara-kerja-heading">Digitalisasi Sekolah Tidak Harus Rumit</span>}
        description="QRION mendampingi sekolah dari pemetaan kebutuhan hingga sistem dapat dijalankan sehari-hari."
      />

      <div className="relative mt-12 grid gap-4 lg:grid-cols-4 lg:gap-5">
        {/* Horizontal connector (desktop) — purely decorative. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
        />

        {howItWorks.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.step} delay={index * 0.08} className="h-full">
              <div className="relative flex h-full flex-col rounded-xl border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[28px] font-extrabold leading-none text-primary/25">
                    {step.step}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-soft">
                    <Icon
                      aria-hidden="true"
                      className="size-[18px] text-brand"
                    />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[17px] font-semibold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
