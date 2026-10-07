"use client";

import { Quote } from "lucide-react";

import { useContent } from "@/components/admin/content-provider";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { ExternalImage } from "@/components/ui/external-image";
import type { Testimonial } from "@/data/testimonials";

/**
 * Marquee testimoni — looping mulus tanpa jeda.
 *
 * Track berisi dua salinan identik testimoni; `oc-marquee-left` bergerak
 * 0 → -50% sehingga tepat satu set penuh berganti dengan set berikutnya
 * tanpa lompatan. Lebar slide tetap (termasuk padding kanan sebagai gutter)
 * agar -50% presisi. Hover menjeda animasi; prefers-reduced-motion
 * menonaktifkan animasi dan mengubah container jadi scrollable.
 */

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-[0_8px_30px_rgba(48,46,89,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-brand-mint-medium hover:shadow-[0_20px_46px_rgba(48,46,89,0.10)]">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-brand-dark"
      >
        <Quote className="size-5 -scale-x-100" />
      </span>
      <blockquote className="flex-1 text-[14px] leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <ExternalImage
          src={testimonial.photo}
          alt={testimonial.name}
          className="size-11 shrink-0 rounded-full object-cover"
          fallbackClassName="size-11 shrink-0 rounded-full object-contain bg-white p-1"
        />
        <div className="min-w-0">
          <p className="text-[14px] font-bold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-[12.5px] leading-snug text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialSection() {
  const { testimonials, testimonialHeader } = useContent().testimonials;
  const count = testimonials.length;
  const loop = [...testimonials, ...testimonials];

  return (
    <Section
      id="testimoni"
      background="soft"
      aria-labelledby="testimoni-heading"
    >
      <SectionHeader
        eyebrow={testimonialHeader.eyebrow}
        title={<span id="testimoni-heading">{testimonialHeader.title}</span>}
        description={testimonialHeader.description}
      />

      <Reveal delay={0.1}>
        <div
          className="group relative mt-12 overflow-hidden py-2 motion-reduce:overflow-x-auto [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimoni mitra QRION"
        >
          <div className="flex w-max animate-[oc-marquee-left_55s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {loop.map((testimonial, i) => {
              const isClone = i >= count;
              return (
                <div
                  key={`${testimonial.name}-${i}`}
                  role={isClone ? undefined : "group"}
                  aria-roledescription={isClone ? undefined : "slide"}
                  aria-label={
                    isClone ? undefined : `${i + 1} dari ${count}`
                  }
                  aria-hidden={isClone || undefined}
                  className={`w-[280px] shrink-0 pr-5 sm:w-[330px] lg:w-[360px] ${
                    isClone ? "motion-reduce:hidden" : ""
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
