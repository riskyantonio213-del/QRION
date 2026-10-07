"use client";

import { ArrowRight, BarChart3 } from "lucide-react";

import { useContent } from "@/components/admin/content-provider";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* =========================================================
 * SECTION — foto dashboard sebagai latar bleed penuh,
 * teks + CTA di kiri, 3 kartu fitur di bawah.
 * ======================================================= */

export function OnboardSection() {
  const { onboard, onboardCards } = useContent().onboard;

  return (
    <Section
      id="onboard"
      aria-labelledby="onboard-heading"
      containerClassName="max-w-[1400px]"
      className="relative overflow-hidden"
    >
      {/* Latar foto laptop — bleed penuh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={onboard.image}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-fit object-bottom"
        />
        {/* Overlay keterbacaan — pekat di mobile, gradasi tipis di desktop */}
        <div className="absolute inset-0 bg-background/75 lg:hidden" />
        {/* <div className="absolute inset-0 hidden bg-gradient-to-r from-background/95 via-background/55 to-transparent lg:block" /> */}
      </div>

      {/* Teks + CTA (kiri) */}
      <div className="relative max-w-2xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-[13px] font-semibold text-brand-dark shadow-sm">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand shadow-[0_0_0_4px_rgba(53,187,130,0.20)]"
            />
            {onboard.eyebrow}
          </span>

          <h2
            id="onboard-heading"
            className="mt-5 text-[32px] font-bold leading-[1.08] tracking-tight text-foreground sm:text-[42px] lg:text-[50px]"
          >
            {onboard.titleBefore}{" "}
            <span className="bg-gradient-to-r from-brand to-emerald-700 bg-clip-text text-transparent">
              {onboard.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
            {onboard.description}
          </p>

          {/* Callout pill */}
          <div className="mt-6 inline-flex max-w-lg items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-card backdrop-blur-sm lg:bg-brand-mint-light/90 lg:backdrop-blur-none">
            <BarChart3
              aria-hidden="true"
              className="size-5 shrink-0 text-brand"
            />
            <p className="text-[14px] font-medium leading-snug text-foreground">
              {onboard.callout}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-7">
            <a
              href={onboard.cta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold text-white shadow-[0_14px_32px_rgba(53,187,130,0.35)] transition-colors duration-300 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {onboard.cta.label}
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Grid 3 kartu fitur */}
      <div className="relative mt-14 grid gap-4 sm:grid-cols-3 lg:mt-20 lg:gap-6">
        {onboardCards.map(({ Icon, tone, title, description }, index) => (
          <Reveal key={title} delay={index * 0.08} className="h-full">
            <article className="flex h-full gap-4 rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-2xl",
                  tone,
                )}
              >
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-[17px] font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
