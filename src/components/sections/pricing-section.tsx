"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { ArrowRight, Check } from "lucide-react";

import { useContent } from "@/components/admin/content-provider";
import { Section } from "@/components/layout/section";
import CountUp from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import type { PricingPlan } from "@/data/pricing";
import { externalLinkProps } from "@/lib/utils";

function TitleDashes() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 18"
      className="mx-1 inline-block h-[0.55em] w-[0.8em] align-baseline text-brand"
      fill="none"
    >
      <path
        d="M4 13 L12 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M15 13 L23 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Harga paket dengan animasi hitung saat masuk viewport.
 * "Rp500.000" → prefix "Rp" tetap, angkanya berhitung dari 0.
 */
function PriceValue({ price }: { price: string }) {
  const match = price.match(/^([^\d]*)(\d[\d.,]*)$/);
  if (!match) return <>{price}</>;
  const numeric = Number(match[2].replace(/[.,]/g, ""));
  if (Number.isNaN(numeric)) return <>{price}</>;
  return (
    <>
      {match[1]}
      <CountUp from={0} to={numeric} separator="." duration={1.2} />
    </>
  );
}

function PlanCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="relative flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-7 text-slate-900 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:p-8">
        {plan.badge ? (
          <span className="absolute right-5 top-5 rounded-full bg-brand-mint px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-dark">
            {plan.badge}
          </span>
        ) : null}

        <div className="flex items-center gap-2">
          {plan.modules.map((module, moduleIndex) => (
            <Fragment key={module.slug}>
              {moduleIndex > 0 ? (
                <span aria-hidden="true" className="text-sm font-bold text-slate-300">
                  +
                </span>
              ) : null}
              <Image
                src={`/icon/icon-${module.slug}.png`}
                alt=""
                aria-hidden="true"
                width={15}
                height={15}
                className="size-5 shrink-0 object-contain"
              />
            </Fragment>
          ))}
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">{plan.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{plan.description}</p>

        <div className="mt-auto">
          <div className="mt-6 flex items-end gap-1.5">
            <span className="text-[32px] font-extrabold leading-none tracking-tight text-slate-900 tabular-nums">
              <PriceValue price={plan.price} />
            </span>
            <span className="pb-1 text-sm font-medium text-slate-500">{plan.period}</span>
          </div>

          <Link
            href={plan.cta.href}
            {...externalLinkProps(plan.cta.href)}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            {plan.cta.label}
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center rounded-full bg-white text-slate-900 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <ArrowRight className="size-3.5" />
            </span>
          </Link>

          <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
                >
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-[13.5px] leading-snug text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export function PricingSection() {
  const { pricingCallout, pricingHeader, pricingPlans, pricingTrust } =
    useContent().pricing;

  return (
    <Section
      id="paket"
      aria-labelledby="paket-heading"
      className="overflow-hidden"
    >
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-4 py-2 text-[13px] font-semibold text-brand-dark">
            <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
            {pricingHeader.eyebrow}
          </span>

          <h2
            id="paket-heading"
            className="mt-6 text-balance text-[28px] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]"
          >
            {pricingHeader.titleBefore}
            <TitleDashes />
            {pricingHeader.titleAfter}
          </h2>

          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-500 sm:text-base">
            {pricingHeader.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <PlanCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
          {pricingTrust.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 ? (
                <span aria-hidden="true" className="text-slate-300">
                  &bull;
                </span>
              ) : null}
              <span className="inline-flex items-center gap-2">
                <item.icon aria-hidden className="size-4 text-brand-dark" />
                {item.label}
              </span>
            </Fragment>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eafaf3] via-white to-[#dcf4ea] ring-1 ring-brand-mint">
          <Image
            src={pricingCallout.image}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover object-[center_92%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-white/10"
          />

          <div className="relative z-10 p-8 sm:p-10 lg:max-w-[56%]">
            <h3 className="text-balance text-xl font-bold text-slate-900 sm:text-2xl">
              {pricingCallout.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              {pricingCallout.description}
            </p>
            <Link
              href={pricingCallout.cta.href}
              {...externalLinkProps(pricingCallout.cta.href)}
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90"
            >
              {pricingCallout.cta.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
