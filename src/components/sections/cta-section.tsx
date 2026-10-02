import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { OncardRipple } from "@/components/product/designs/interactive/oncard-ripple";

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/** Premium gradient CTA panel with subtle graphical accents. */
export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-background pb-16 pt-4 sm:pb-20 lg:pb-28"
    >
      <Container size="wide">
        <Reveal>
          <div
            className="relative isolate overflow-hidden rounded-2xl border border-brand-mint-medium px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #E8F6F1 0%, #F8FCFA 50%, #DDF5EA 100%)",
            }}
          >
            {/* Decorative geometry — purely visual, keeps the panel airy. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.18] [mask-image:radial-gradient(620px_320px_at_100%_0%,black,transparent)]"
            />
            <span className="pointer-events-none absolute -right-10 -top-12 -z-10 size-52 rotate-12 rounded-[42px] bg-white/50" />
            <span className="pointer-events-none absolute -bottom-16 left-10 -z-10 size-40 -rotate-12 rounded-[32px] bg-qrion-subtle-green/60" />
            <span className="pointer-events-none absolute right-24 top-8 -z-10 size-9 rotate-45 rounded-lg bg-qrion-mint-medium/50" />

            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="cta-heading"
                  className="text-balance text-[26px] font-bold leading-[1.2] text-qrion-indigo sm:text-[32px] lg:text-[36px]"
                >
                  {title}
                </h2>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-qrion-text-body sm:text-base">
                  {description}
                </p>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  asChild
                  size="xl"
                  className="relative overflow-hidden rounded-full px-7"
                >
                  <Link href={primaryCta.href}>
                    <OncardRipple color="#51c590" hoverColor="#ffffff" />
                    <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                      {primaryCta.label}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </span>
                  </Link>
                </Button>
                {secondaryCta ? (
                  <Button
                    asChild
                    size="xl"
                    variant="secondary"
                    className="relative overflow-hidden rounded-full px-7"
                  >
                    <Link href={secondaryCta.href}>
                      <OncardRipple color="#35bb82" hoverColor="#ffffff" />
                      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                        {secondaryCta.label}
                      </span>
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
