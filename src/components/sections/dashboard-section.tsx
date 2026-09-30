import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { DashboardPreview } from "@/components/dashboard/dashboard-preview";
import { dashboardSection } from "@/data/home";

export function DashboardSection() {
  return (
    <Section
      id="dashboard"
      size="wide"
      containerClassName="max-w-[1980px]"
      aria-labelledby="dashboard-heading"
    >
      <SectionHeader
        eyebrow={dashboardSection.eyebrow}
        title={<span id="dashboard-heading">{dashboardSection.title}</span>}
        description={dashboardSection.description}
      />

      <Reveal className="mt-12">
        <DashboardPreview />
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {dashboardSection.bullets.map((bullet, index) => (
          <Reveal key={bullet} delay={index * 0.07}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {bullet}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
