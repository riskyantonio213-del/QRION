import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroDashboard } from "@/components/sections/hero-dashboard";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-x-clip bg-background pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      {/* Decorative background: faint grid plus two soft brand gradients. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] [mask-image:radial-gradient(720px_420px_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(680px_340px_at_12%_0%,rgba(232,246,241,0.9),transparent),radial-gradient(560px_300px_at_96%_8%,rgba(221,245,234,0.85),transparent)]"
      />
      {/* Abstract mint geometry — diagonal blocks and digital pixels. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -left-16 top-24 hidden size-72 rotate-12 rounded-[48px] bg-qrion-mint/60 lg:block" />
        <span className="absolute -right-24 top-8 hidden size-64 -rotate-12 rounded-[40px] bg-qrion-subtle-green/70 lg:block" />
        <span className="absolute right-24 top-64 hidden h-24 w-24 rotate-45 rounded-2xl bg-qrion-mint-medium/40 xl:block" />
        <span className="absolute left-1/2 top-10 hidden size-10 rounded-md bg-qrion-mint-medium/50 xl:block" />
      </div>

      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-2xl">
            {/* Badge: green outer container wrapping a white QRION pill. */}
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint py-1 pl-1 pr-3.5 text-[13px] font-medium text-qrion-indigo">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold tracking-[0.14em] text-qrion-indigo shadow-sm shadow-qrion-indigo/5">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                QRION
              </span>
              {hero.eyebrow}
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-balance font-display text-[32px] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-[42px] lg:text-[48px] xl:text-[54px]"
            >
              {hero.headline}
            </h1>

            <p className="mt-5 text-pretty text-[15px] font-semibold text-brand sm:text-[17px]">
              {hero.highlight}
            </p>

            <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-qrion-text-body sm:text-[17px]">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="xl" className="rounded-full px-7">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="secondary" className="rounded-full px-7">
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-border pt-6">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 size-[18px] shrink-0 text-brand"
              />
              <p className="max-w-lg text-[13px] leading-relaxed text-qrion-text-muted sm:text-sm">
                {hero.trustNote}
              </p>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}
