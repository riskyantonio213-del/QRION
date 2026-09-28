import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { ProblemCard } from "@/components/sections/cards";
import { problemTransition, problems } from "@/data/home";

export function ProblemSection() {
  return (
    <Section id="masalah" background="soft" aria-labelledby="masalah-heading">
      <SectionHeader
        eyebrow="Tantangan"
        title={
          <span id="masalah-heading">
            Operasional Sekolah Tidak Seharusnya Rumit
          </span>
        }
        description="Banyak institusi pendidikan menghadapi tantangan yang sama setiap hari."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {problems.map((problem, index) => (
          <Reveal key={problem.title} delay={index * 0.07} className="h-full">
            <ProblemCard
              title={problem.title}
              description={problem.description}
              icon={problem.icon}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-primary/15 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="font-display text-[17px] font-semibold text-foreground sm:text-lg">
              {problemTransition.title}
            </p>
            <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {problemTransition.description}
            </p>
          </div>
          <ArrowRight
            aria-hidden="true"
            className="hidden size-5 shrink-0 text-brand sm:block"
          />
        </div>
      </Reveal>
    </Section>
  );
}
