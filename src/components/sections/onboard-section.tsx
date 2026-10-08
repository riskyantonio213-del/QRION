"use client";

import { ArrowRight, BarChart3 } from "lucide-react";
import { useContent } from "@/components/admin/content-provider";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function OnboardSection() {
  const { onboard, onboardCards } = useContent().onboard;

  return (
    <Section
      id="onboard"
      aria-labelledby="onboard-heading"
      containerClassName="max-w-[1400px]"
      className="relative overflow-hidden min-h-[100dvh] lg:min-h-0 py-12 lg:py-24" 
    >
      {/* Latar foto laptop — bleed penuh seperti semula */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src={onboard.image}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center lg:object-[65%_bottom]"
        />
        {/* Tanpa blur di mobile, murni main opacity pekat */}
        <div className="absolute inset-0 bg-background/90 lg:hidden" />
      </div>

      {/* Teks + CTA (kiri) — Diperpendek lebarnya (max-w-lg) dan diberi batasan kanan (lg:pr-8) */}
      <div className="relative max-w-lg lg:pr-8 px-4 sm:px-6 lg:px-0 lg:pl-6 z-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[12px] sm:text-[13px] font-semibold text-brand-dark shadow-sm">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-brand shadow-[0_0_0_4px_rgba(53,187,130,0.20)]"
            />
            {onboard.eyebrow}
          </span>

          <h2
            id="onboard-heading"
            className="mt-4 sm:mt-5 text-[28px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.15] lg:leading-[1.08] tracking-tight text-foreground"
          >
            {onboard.titleBefore}{" "}
            <span className="bg-gradient-to-r from-brand to-emerald-700 bg-clip-text text-transparent">
              {onboard.titleHighlight}
            </span>
          </h2>

          {/* Deskripsi sekarang otomatis turun ke bawah lebih cepat mengikuti max-w-lg */}
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-foreground/80 lg:text-muted-foreground">
            {onboard.description}
          </p>

          {/* Callout pill */}
          <div className="mt-6 inline-flex items-start sm:items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card lg:bg-brand-mint-light/95">
            <BarChart3
              aria-hidden="true"
              className="size-5 shrink-0 text-brand mt-0.5 sm:mt-0"
            />
            <p className="text-[13px] sm:text-[14px] font-medium leading-snug text-foreground">
              {onboard.callout}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-7 sm:mt-8">
            <a
              href={onboard.cta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-brand py-1.5 sm:py-2 pl-5 sm:pl-6 pr-1.5 sm:pr-2 text-[13px] sm:text-sm font-bold text-white shadow-[0_14px_32px_rgba(53,187,130,0.35)] transition-colors duration-300 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {onboard.cta.label}
              <span
                aria-hidden="true"
                className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <ArrowRight className="size-3.5 sm:size-4" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Grid 3 kartu fitur di bawah */}
      <div className="relative z-10 mt-12 px-4 sm:px-6 lg:px-0 lg:pl-6 grid gap-4 grid-cols-1 lg:grid-cols-3 lg:mt-20 lg:gap-6">
        {onboardCards.map(({ Icon, tone, title, description }, index) => (
          <Reveal key={title} delay={index * 0.08} className="h-full">
            <article className="flex flex-col sm:flex-row lg:flex-col xl:flex-row h-full gap-4 rounded-3xl bg-white p-5 sm:p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl",
                  tone,
                )}
              >
                <Icon className="size-5 sm:size-6" />
              </span>
              <div>
                <h3 className="font-display text-[16px] sm:text-[17px] font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 sm:mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground">
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