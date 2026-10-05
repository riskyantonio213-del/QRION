"use client";

import { useState, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { problemTransition, problems } from "@/data/home";
import { cn } from "@/lib/utils";

/* =========================================================
 * HEADER — layout editorial asimetris (kiri display, kanan
 * deskripsi) dengan garis coretan yang menggambar dirinya
 * sendiri di atas kata "Rumit".
 * ======================================================= */

function ProblemHeading({ strikeDisabled }: { strikeDisabled: boolean }) {
  return (
    <header className="relative z-10 grid items-end gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div>
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-brand-mint px-4 py-1.5 text-[13px] font-semibold text-brand-dark">
            Tantangan
          </span>

          <h2
            id="masalah-heading"
            className="mt-5 text-[32px] font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[42px] lg:text-[52px]"
          >
            Operasional Sekolah Tidak Seharusnya{" "}
            <span className="relative inline-block whitespace-nowrap">
              Rumit
              {/* <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-[4px] w-full origin-left rounded-full bg-brand"
                initial={{ scaleX: strikeDisabled ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: strikeDisabled ? 0 : 0.55,
                  delay: strikeDisabled ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              /> */}
            </span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="border-l-2 border-brand-mint-medium pl-5 lg:pb-1.5">
          <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Banyak institusi pendidikan menghadapi tantangan yang sama setiap
            hari.
          </p>
          <p className="mt-4 font-display text-[13px] font-semibold tracking-[0.18em] text-brand">
            01 — 04
          </p>
        </div>
      </Reveal>
    </header>
  );
}

/* =========================================================
 * PROBLEM CARD — ghost number, spotlight radial yang
 * mengikuti kursor, lift saat hover, offset editorial.
 * ======================================================= */

function ProblemCard({
  problem,
  index,
  offset,
}: {
  problem: (typeof problems)[number];
  index: number;
  offset: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(-2000);
  const pointerY = useMotionValue(-2000);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${pointerX}px ${pointerY}px, rgba(53,187,130,0.16), transparent 65%)`;

  const Icon = problem.icon;

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
  };

  const handlePointerLeave = () => {
    pointerX.set(-2000);
    pointerY.set(-2000);
  };

  return (
    <Reveal delay={index * 0.07} className={cn("h-full", offset && "lg:mt-8")}>
      <article
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand-mint-medium hover:shadow-[0_20px_46px_rgba(48,46,89,0.10)]"
      >
        {/* Spotlight radial mengikuti kursor — transparan di luar hover. */}
        <motion.span
          aria-hidden="true"
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Ghost number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-3 select-none font-display text-[64px] font-bold leading-none text-slate-900/5 transition-colors duration-300 group-hover:text-slate-900/10"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-qrion-neutral-bg text-qrion-neutral transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-mint-medium group-hover:bg-brand-mint group-hover:text-brand-dark">
          <Icon aria-hidden="true" className="size-5" />
        </span>

        <h3 className="relative z-10 mt-5 font-display text-[17px] font-semibold leading-snug text-foreground">
          {problem.title}
        </h3>
        <p className="relative z-10 mt-2 text-[15px] leading-relaxed text-muted-foreground">
          {problem.description}
        </p>
      </article>
    </Reveal>
  );
}

/* =========================================================
 * KONVERGENSI — 4 garis putus-putus dari dasar tiap kartu
 * menyatu ke satu titik di atas panel solusi. Dash mengalir
 * pelan; titik node berdenyut saat masuk viewport.
 * ======================================================= */

const CONVERGE_PATHS = [
  "M 150 4 C 150 40, 600 22, 600 62",
  "M 450 4 C 450 42, 600 34, 600 62",
  "M 750 4 C 750 42, 600 34, 600 62",
  "M 1050 4 C 1050 40, 600 22, 600 62",
];

function Convergence({ reduced }: { reduced: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 hidden h-16 lg:block"
    >
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {CONVERGE_PATHS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="var(--qrion-border-strong)"
            strokeWidth={1.5}
            strokeDasharray="6 9"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: reduced ? 1 : 0 }}
            whileInView={
              reduced
                ? { opacity: 1 }
                : { opacity: 1, strokeDashoffset: [0, -15] }
            }
            viewport={{ once: true, margin: "-60px" }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 1.8,
                    delay: 0.1 + i * 0.12,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          />
        ))}
        <motion.circle
          cx={600}
          cy={62}
          r={4}
          fill="var(--qrion-green-primary)"
          initial={{ opacity: reduced ? 1 : 0 }}
          whileInView={
            reduced ? { opacity: 1 } : { opacity: [0.6, 1, 0.6], r: [4, 5.5, 4] }
          }
          viewport={{ once: true, margin: "-60px" }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 2.2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </svg>
    </div>
  );
}

/* =========================================================
 * PANEL SOLUSI — panel mint gradient dengan pill "Solusi",
 * highlight hijau, dan tombol panah magnetic.
 * ======================================================= */

function SolutionPanel({ reduced }: { reduced: boolean }) {
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const segments = problemTransition.title.split("satu ekosistem digital");

  const handleMagnetMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setMagnet({
      x: (event.clientX - rect.left - rect.width / 2) * 0.3,
      y: (event.clientY - rect.top - rect.height / 2) * 0.3,
    });
  };

  return (
    <Reveal delay={0.05}>
      <div className="relative z-10 mt-6 overflow-hidden rounded-[28px] border border-brand-mint-medium bg-gradient-to-br from-white via-brand-mint-light to-brand-mint p-7 shadow-[0_24px_60px_rgba(48,46,89,0.08)] sm:p-9 lg:mt-0 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-brand/20 blur-3xl"
        />

        <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-mint-medium bg-white/80 px-4 py-1.5 text-[13px] font-semibold text-brand-dark">
              Solusi
            </span>

            <h3 className="mt-4 max-w-2xl font-display text-[20px] font-bold leading-snug text-slate-900 sm:text-[23px] lg:text-[26px]">
              {segments.length === 2 ? (
                <>
                  {segments[0]}
                  <span className="text-brand-dark">
                    satu ekosistem digital
                  </span>
                  {segments[1]}
                </>
              ) : (
                problemTransition.title
              )}
            </h3>

            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
              {problemTransition.description}
            </p>
          </div>

          {/* Panah magnetic — "menempel" ke kursor saat hover. */}
          <span
            aria-hidden="true"
            onPointerMove={handleMagnetMove}
            onPointerLeave={() => setMagnet({ x: 0, y: 0 })}
            className="group/magnet relative flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[0_16px_36px_rgba(53,187,130,0.35)] transition-transform duration-300 ease-out"
            style={{ transform: `translate(${magnet.x}px, ${magnet.y}px)` }}
          >
            <ArrowRight className="size-5 transition-transform duration-300 group-hover/magnet:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* =========================================================
 * SECTION
 * ======================================================= */

export function ProblemSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Section
      id="masalah"
      containerClassName="max-w-[1400px]"
      background="soft"
      aria-labelledby="masalah-heading"
      className="relative overflow-hidden"
    >
      {/* Blob gradient melayang — halus, tidak neon. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {!prefersReducedMotion ? (
          <>
            <div className="absolute -left-20 top-8 size-[360px] rounded-full bg-brand-mint/70 blur-3xl animate-[qrion-float_7s_ease-in-out_infinite]" />
            <div className="absolute -right-28 bottom-24 size-[400px] rounded-full bg-cyan-100/50 blur-3xl animate-[qrion-float_9s_ease-in-out_infinite_1.2s]" />
          </>
        ) : null}
      </div>

      <ProblemHeading strikeDisabled={prefersReducedMotion} />

      <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
        {problems.map((problem, index) => (
          <ProblemCard
            key={problem.title}
            problem={problem}
            index={index}
            offset={index % 2 === 1}
          />
        ))}
      </div>

      <Convergence reduced={prefersReducedMotion} />
      <SolutionPanel reduced={prefersReducedMotion} />
    </Section>
  );
}
