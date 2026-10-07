"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, TrendingUp, User, X } from "lucide-react";

import { useContent } from "@/components/admin/content-provider";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* =========================================================
 * MASK FOTO — foto "larut" ke warna kartu.
 * ======================================================= */

const MASK_BEFORE = [
  "[-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_30%)]",
  "[mask-image:linear-gradient(to_bottom,transparent,#000_30%)]",
  "lg:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_38%)]",
  "lg:[mask-image:linear-gradient(to_right,transparent,#000_38%)]",
].join(" ");

const MASK_AFTER = [
  "[-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_80%,transparent)]",
  "[mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_80%,transparent)]",
  "lg:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_34%)]",
  "lg:[mask-image:linear-gradient(to_right,transparent,#000_34%)]",
].join(" ");

/* =========================================================
 * HEADER
 * ======================================================= */

function ComparisonHeading() {
  const { comparison } = useContent();
  const { comparisonHeading } = comparison;

  return (
    <Reveal className="mx-auto max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-4 py-1.5 text-[13px] font-semibold tracking-wide text-brand-dark">
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-brand shadow-[0_0_0_4px_rgba(53,187,130,0.20)]"
        />
        {comparisonHeading.eyebrow}
      </span>

      <h2
        id="perbandingan-heading"
        className="mt-5 text-[30px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[42px] lg:text-[54px]"
      >
        {comparisonHeading.titleBefore}{" "}
        <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-brand to-teal-500 bg-clip-text text-transparent">
          {comparisonHeading.titleHighlight}
        </span>{" "}
        {comparisonHeading.titleAfter}
      </h2>

      <p className="mx-auto mt-5 max-w-[44rem] text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
        {comparisonHeading.description}
      </p>
    </Reveal>
  );
}

/* =========================================================
 * KARTU KIRI — "Sebelum QRION"
 * ======================================================= */

function BeforeCard() {
  const { comparison } = useContent();
  const { beforeCard, fileBadges, images, painPoints } = comparison;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200 lg:min-h-[470px] lg:rounded-[40px]">
      <div className="relative z-10 p-6 sm:p-8 lg:w-[60%] lg:pb-10">
        <span className="inline-flex w-fit items-center rounded-full bg-slate-300/60 px-4 py-1.5 text-[13px] font-semibold text-slate-600">
          {beforeCard.badge}
        </span>

        <h3 className="mt-4 font-display text-[22px] font-bold leading-snug text-foreground sm:text-[26px]">
          {beforeCard.titleBefore}
          <br className="hidden sm:block" /> {beforeCard.titleAfter}
        </h3>

        <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-slate-500 lg:max-w-[19rem]">
          {beforeCard.description}
        </p>

        <ul className="mt-5 grid gap-3">
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-[14px] text-slate-700 lg:whitespace-nowrap"
            >
              <span
                aria-hidden="true"
                className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500"
              >
                <X className="size-3" strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Foto latar dengan badge melayang (overflow-visible agar badge di kiri tidak terpotong) */}
      <div className="relative h-[300px] overflow-visible sm:h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[170%]">
        <Image
          src={images.before}
          alt="bg"
          fill
          sizes="(min-width:1280px) 30vw, (min-width:1024px) 60vw, 100vw"
          className={cn("object-cover object-bottom", MASK_BEFORE)}
        />

        {/* Label file miring melayang di atas foto */}
        {fileBadges.map(({ label, Icon, tone, position, delay }) => (
          <span key={label} className={cn("absolute z-10", position)}>
            <span
              className={cn(
                "flex w-fit max-w-[12rem] animate-[qrion-float_7s_ease-in-out_infinite] items-center gap-2 rounded-xl bg-white px-2.5 py-2 text-[11px] font-semibold leading-tight text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.14)] motion-reduce:animate-none sm:text-xs",
                delay,
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-md text-white",
                  tone,
                )}
              >
                <Icon className="size-3" />
              </span>
              <span>{label}</span>
            </span>
          </span>
        ))}
      </div>
    </article>
  );
}

/* =========================================================
 * WIDGET DASHBOARD
 * ======================================================= */

function WidgetCard({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-4 shadow-[0_18px_44px_-14px_rgba(48,46,89,0.25)] ring-1 ring-slate-900/[0.04]",
        className,
      )}
    >
      <p className="text-[12.5px] font-bold text-foreground">{title}</p>
      {children}
    </div>
  );
}

function PaidWidget({ className }: { className?: string }) {
  const { comparison } = useContent();
  const { paid } = comparison.comparisonWidgets;

  return (
    <WidgetCard title={paid.title} className={className}>
      <div className="mt-3 flex items-start gap-4">
        <div className="flex shrink-0 flex-col items-center gap-1">
          <span className="relative flex size-16 items-center justify-center">
            <svg
              viewBox="0 0 36 36"
              className="size-16 -rotate-90"
              aria-hidden="true"
            >
              <circle
                cx="18"
                cy="18"
                r="14.5"
                fill="none"
                strokeWidth="4.5"
                className="stroke-indigo-100"
              />
              <circle
                cx="18"
                cy="18"
                r="14.5"
                fill="none"
                strokeWidth="4.5"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="89 11"
                className="stroke-brand"
              />
            </svg>
            <span className="absolute text-[13px] font-extrabold text-foreground">
              {paid.percent}
            </span>
          </span>
          <span className="whitespace-nowrap text-[10px] text-muted-foreground">
            {paid.caption}
          </span>
        </div>

        <ul className="grid flex-1 gap-1.5 pt-1.5">
          {paid.legend.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-2 text-[11px] text-slate-500"
            >
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span
                  aria-hidden="true"
                  className={cn("size-1.5 rounded-full", row.color)}
                />
                {row.label}
              </span>
              <span className="font-bold text-foreground">{row.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </WidgetCard>
  );
}

const avatarTones = [
  "bg-sky-200 text-sky-500",
  "bg-amber-200 text-amber-500",
  "bg-rose-200 text-rose-400",
  "bg-emerald-200 text-emerald-500",
] as const;

function AttendanceWidget({ className }: { className?: string }) {
  const { comparison } = useContent();
  const { attendance } = comparison.comparisonWidgets;

  return (
    <WidgetCard title={attendance.title} className={className}>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="flex -space-x-2" aria-hidden="true">
          {avatarTones.map((tone) => (
            <span
              key={tone}
              className={cn(
                "flex size-7 items-end justify-center overflow-hidden rounded-full border-2 border-white",
                tone,
              )}
            >
              <User
                className="size-5 translate-y-0.5"
                fill="currentColor"
                strokeWidth={1.5}
              />
            </span>
          ))}
        </span>
        <span className="grid gap-1 text-right">
          <span className="whitespace-nowrap text-[15px] font-extrabold leading-none text-foreground">
            {attendance.present}
          </span>
          <span className="flex items-center justify-end gap-0.5 whitespace-nowrap text-[10.5px] font-semibold text-brand">
            <TrendingUp aria-hidden="true" className="size-3" />
            {attendance.delta}
          </span>
        </span>
      </div>
    </WidgetCard>
  );
}

function AdmissionWidget({ className }: { className?: string }) {
  const { comparison } = useContent();
  const { admission } = comparison.comparisonWidgets;

  return (
    <WidgetCard title={admission.title} className={className}>
      <div className="mt-3 flex items-end justify-between gap-3">
        <span className="flex h-10 items-end gap-1" aria-hidden="true">
          {admission.bars.map((height, index) => (
            <span
              key={index}
              className={cn(
                "w-2 rounded-[3px]",
                index === 4 ? "bg-teal-300" : "bg-indigo-100",
              )}
              style={{ height: `${height}%` }}
            />
          ))}
        </span>
        <span className="grid gap-1 text-right">
          <span className="whitespace-nowrap text-[16px] font-extrabold leading-none text-foreground">
            <span className="text-brand">+</span> {admission.count}
          </span>
          <span className="text-[10px] leading-tight text-muted-foreground">
            {admission.captionA}
            <br />
            {admission.captionB}
          </span>
        </span>
      </div>
    </WidgetCard>
  );
}

function FinanceWidget({ className }: { className?: string }) {
  const { comparison } = useContent();
  const { finance } = comparison.comparisonWidgets;

  return (
    <WidgetCard title={finance.title} className={className}>
      <div className="mt-3 flex items-end justify-between gap-3">
        <span className="flex h-10 items-end gap-1" aria-hidden="true">
          {finance.bars.map(({ height, tone }, index) => (
            <span
              key={index}
              className={cn("w-2.5 rounded-[3px]", tone)}
              style={{ height: `${height}%` }}
            />
          ))}
        </span>
        <span className="grid gap-1 text-right">
          <span className="whitespace-nowrap text-[13px] font-extrabold leading-tight text-foreground">
            {finance.amount}
          </span>
          <span className="flex items-center justify-end gap-0.5 whitespace-nowrap text-[10px] font-semibold text-brand">
            <TrendingUp aria-hidden="true" className="size-3" />
            {finance.delta}
          </span>
        </span>
      </div>
    </WidgetCard>
  );
}

/* =========================================================
 * KARTU KANAN — "Dengan QRION" (Tombol text di bawah component dibuang)
 * ======================================================= */

function AfterCard() {
  const { comparison } = useContent();
  const { afterCard, images, modules } = comparison;

  return (
    <article className="relative flex h-full flex-col rounded-[32px] border border-brand-mint-medium/60 bg-gradient-to-br from-emerald-50 via-white to-brand-mint-light lg:min-h-[470px] lg:rounded-[40px]">
      <div className="relative z-10 flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8 lg:w-[56%] lg:pb-0 lg:pr-0">
        <span className="inline-flex w-fit items-center rounded-full bg-brand-mint px-4 py-1.5 text-[13px] font-semibold text-brand-dark">
          {afterCard.badge}
        </span>

        <h3 className="mt-4 font-display text-[22px] font-bold leading-snug text-foreground sm:text-[26px]">
          {afterCard.titleBefore}
          <br className="hidden sm:block" /> {afterCard.titleAfter}
        </h3>

        <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-slate-500 lg:max-w-[19rem]">
          {afterCard.description}
        </p>

        {/* Box menu modul — di desktop menempel ke dasar kartu */}
        <div className="mt-6 lg:mt-auto lg:pl-3 lg:pt-6">
          <ul className="grid w-full gap-0.5 rounded-2xl border border-slate-200/70 bg-white p-2 shadow-[0_14px_34px_rgba(48,46,89,0.10)] sm:max-w-[220px] lg:w-[190px] lg:rounded-b-none lg:border-b-0">
            {modules.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium text-slate-700"
              >
                <Icon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-qrion-neutral"
                />
                <span className="truncate">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Foto latar */}
      <div className="relative h-[300px] sm:h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[80%] lg:overflow-hidden lg:rounded-r-[40px]">
        <Image
          src={images.after}
          alt="bg"
          fill
          sizes="(min-width:1280px) 30vw, (min-width:1024px) 60vw, 100vw"
          className={cn("object-cover object-[80%_bottom]", MASK_AFTER)}
        />
      </div>

      {/* Widget */}
      <div className="grid gap-3 px-6 pb-6 sm:grid-cols-2 sm:px-8 sm:pb-8 lg:contents">
        <PaidWidget className="lg:absolute lg:-top-15 lg:-right-10 lg:z-20 lg:w-[250px] lg:rotate-[-4deg]" />
        <AttendanceWidget className="lg:absolute lg:-right-[9%] lg:top-[107px] lg:z-20 lg:w-[215px] lg:rotate-[-2deg]" />
        <AdmissionWidget className="lg:absolute lg:-right-8 lg:top-[219px] lg:z-20 lg:w-[200px] lg:rotate-[2deg]" />
        <FinanceWidget className="lg:absolute lg:-right-[8%] lg:top-[349px] lg:z-20 lg:w-[225px] lg:rotate-[-2deg]" />
      </div>
    </article>
  );
}

/* =========================================================
 * GRID FITUR BAWAH
 * ======================================================= */

function FeatureGrid() {
  const { comparison } = useContent();
  const { features } = comparison;

  return (
    <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-0">
      {features.map(({ Icon, title, description }, index) => (
        <Reveal key={title} delay={index * 0.08}>
          <div
            className={cn(
              "h-full sm:px-8 lg:px-9",
              index % 2 === 1 && "sm:border-l sm:border-border",
              index === 2 && "lg:border-l lg:border-border",
            )}
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-brand-mint text-brand shadow-[0_10px_24px_rgba(53,187,130,0.16)] ring-[6px] ring-brand-mint/40">
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-[18px] font-bold text-foreground">
              {title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* =========================================================
 * SECTION
 * ======================================================= */

export function ComparisonSection() {
  return (
    <Section
      id="perbandingan"
      aria-labelledby="perbandingan-heading"
      containerClassName="max-w-[1400px]"
      background="soft"
      className="relative overflow-x-clip"
    >
      <ComparisonHeading />

      <div className="relative mt-12 grid gap-6 lg:mt-20 xl:grid-cols-2 xl:items-stretch xl:gap-7">
        <Reveal className="h-full">
          <BeforeCard />
        </Reveal>

        <div className="flex items-center justify-center xl:hidden">
          <span className="flex size-12 items-center justify-center rounded-full border border-brand-mint-medium bg-brand-mint text-brand shadow-[0_12px_28px_rgba(53,187,130,0.25)]">
            <ArrowRight aria-hidden="true" className="size-5" />
          </span>
        </div>

        <Reveal className="h-full" delay={0.12}>
          <AfterCard />
        </Reveal>

        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-30 hidden size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-mint-medium bg-brand-mint text-brand shadow-[0_12px_28px_rgba(53,187,130,0.25)] ring-[6px] ring-white/80 xl:flex"
        >
          <ArrowRight className="size-7" />
        </span>
      </div>

      <FeatureGrid />
    </Section>
  );
}