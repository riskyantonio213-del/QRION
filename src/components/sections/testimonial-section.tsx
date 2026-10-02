"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ExternalImage } from "@/components/ui/external-image";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const sm = window.matchMedia("(min-width: 640px)");
    const update = () => setPerView(lg.matches ? 3 : sm.matches ? 2 : 1);
    update();
    lg.addEventListener("change", update);
    sm.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      sm.removeEventListener("change", update);
    };
  }, []);

  return perView;
}

export function TestimonialSection() {
  const perView = usePerView();
  const count = testimonials.length;
  const maxIndex = Math.max(count - perView, 0);
  const [rawIndex, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const index = Math.min(rawIndex, maxIndex);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const go = useCallback(
    (delta: number) =>
      setIndex((i) => Math.min(Math.max(i + delta, 0), maxIndex)),
    [maxIndex],
  );

  return (
    <Section
      id="testimoni"
      background="soft"
      aria-labelledby="testimoni-heading"
    >
      <SectionHeader
        eyebrow="Testimoni"
        title={<span id="testimoni-heading">Apa Kata Mitra Kami</span>}
        description="Pengalaman langsung dari sekolah dan pengguna yang telah merasakan manfaat ekosistem digital kami."
      />

      <div
        className="group relative mt-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimoni mitra QRION"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex -mx-2.5 transition-transform duration-500 ease-out motion-reduce:transition-none [--per-view:1] sm:[--per-view:2] lg:[--per-view:3]"
            style={{
              transform: `translateX(calc(${index * -100}% / var(--per-view)))`,
            }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} dari ${count}`}
                className="basis-[calc(100%_/_var(--per-view))] shrink-0 grow-0 px-2.5"
              >
                <figure className="flex h-full flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-[0_8px_30px_rgba(48,46,89,0.05)]">
                  <Quote
                    aria-hidden="true"
                    className="size-7 shrink-0 -scale-x-100 text-brand/60"
                  />
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
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Testimoni sebelumnya"
          className="absolute left-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition-all hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-0"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index >= maxIndex}
          aria-label="Testimoni berikutnya"
          className="absolute right-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition-all hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-0"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }, (_, dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => setIndex(dot)}
            aria-label={`Ke testimoni ${dot + 1}`}
            aria-current={dot === index ? "true" : undefined}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
              dot === index
                ? "w-6 bg-brand"
                : "w-2 bg-border hover:bg-brand/50",
            )}
          />
        ))}
      </div>
    </Section>
  );
}
