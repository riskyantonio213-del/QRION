"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, Check, TrendingUp } from "lucide-react";

import CountUp from "@/components/motion/count-up";
import { attendanceSeries, heroActivity, heroFloatingCards, heroStats } from "@/data/dashboard";
import { cn } from "@/lib/utils";

/**
 * Angka statistik dashboard dengan animasi hitung saat masuk viewport.
 * Nilai yang bukan angka murni (mis. "Rp 96,2 jt") dirender apa adanya.
 */
function StatValue({ value }: { value: string }) {
  const match = value.match(/^([\d.,]+)(%?)$/);
  if (!match) return <>{value}</>;
  const numeric = Number(match[1].replace(/[.,]/g, ""));
  if (Number.isNaN(numeric)) return <>{value}</>;
  return (
    <>
      <CountUp from={0} to={numeric} separator="." duration={1} />
      {match[2]}
    </>
  );
}

const floatTone: Record<string, { iconWrap: string; icon: string }> = {
  indigo: { iconWrap: "bg-brand-mint border-brand-mint-medium", icon: "text-brand-indigo" },
  blue: { iconWrap: "bg-brand-mint border-brand-mint-medium", icon: "text-brand" },
  cyan: { iconWrap: "bg-brand-soft border-border", icon: "text-brand-green" },
  emerald: {
    iconWrap: "bg-qrion-subtle-green border-brand-mint-medium",
    icon: "text-brand-dark",
  },
};

function FloatingCard({
  product,
  label,
  tone,
  className,
  delay,
}: {
  product: string;
  label: string;
  tone: keyof typeof floatTone;
  className: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const styles = floatTone[tone] ?? floatTone.blue;

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute z-20 hidden items-center gap-2.5 rounded-xl border border-border bg-background/95 px-3 py-2.5 shadow-sm shadow-foreground/5 backdrop-blur lg:flex",
        className,
      )}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, scale: 1 }
          : { opacity: 1, scale: 1, y: [0, -7, 0] }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.4, delay }
          : {
              opacity: { duration: 0.5, delay },
              scale: { duration: 0.5, delay },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5,
              },
            }
      }
    >
      <span
        className={cn(
          "flex size-7 items-center justify-center rounded-md border",
          styles.iconWrap,
        )}
      >
        <Check className={cn("size-3.5", styles.icon)} />
      </span>
      <span className="grid">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {product}
        </span>
        <span className="text-[13px] font-medium text-foreground">{label}</span>
      </span>
    </motion.div>
  );
}

/** Compact animated bar chart built with plain markup (no chart library needed). */
function MiniBars() {
  const max = Math.max(...attendanceSeries.map((point) => point.hadir));

  return (
    <div className="flex h-24 items-end gap-2 sm:gap-3" role="img" aria-label="Grafik kehadiran mingguan (contoh data)">
      {attendanceSeries.map((point, index) => (
        <div key={point.day} className="flex flex-1 flex-col items-center gap-1.5">
          <motion.div
            className="w-full rounded-md bg-gradient-to-t from-brand/70 to-brand-green/80"
            style={{ height: `${(point.hadir / max) * 100}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="text-[10px] font-medium text-muted-foreground">
            {point.day}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroDashboard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      {/* Soft brand glow behind the mock-up */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] bg-[radial-gradient(420px_260px_at_70%_10%,rgba(53,187,130,0.16),transparent),radial-gradient(360px_240px_at_10%_90%,rgba(232,246,241,0.9),transparent)] blur-2xl"
      />

      <motion.div
        className="relative rounded-2xl border border-border bg-card p-2 shadow-sm shadow-foreground/5"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-xl bg-soft/70 p-3 sm:p-4">
          {/* Window chrome */}
          <div className="flex items-center justify-between gap-3 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
              </span>
              <span className="ml-1 text-[13px] font-semibold text-foreground">
                Dashboard QRION
              </span>
            </div>
            <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Contoh tampilan
            </span>
          </div>

          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-background p-2.5 sm:p-3"
              >
                <p className="truncate text-[11px] font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-foreground sm:text-xl">
                  <StatValue value={stat.value} />
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground/70">
                  {stat.hint}
                </p>
              </div>
            ))}
          </div>

          {/* Chart + activity */}
          <div className="mt-2 grid gap-2 sm:mt-3 sm:gap-3 lg:grid-cols-[1.15fr_1fr]">
            <div className="rounded-lg border border-border bg-background p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-semibold text-foreground">
                  Kehadiran Pekan Ini
                </p>
                <TrendingUp aria-hidden="true" className="size-4 text-brand" />
              </div>
              <div className="mt-3">
                <MiniBars />
              </div>
            </div>

            <div className="grid gap-2">
              {heroActivity.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-background p-3"
                >
                  <div className="flex items-center gap-2">
                    {item.tone === "success" ? (
                      <Bell aria-hidden="true" className="size-4 text-brand" />
                    ) : (
                      <Bell aria-hidden="true" className="size-4 text-brand" />
                    )}
                    <p className="text-[13px] font-semibold text-foreground">
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating module cards (desktop only — mobile shows a stacked list below) */}
      <FloatingCard
        product="Ontime"
        label="Siswa hadir"
        tone="indigo"
        delay={0.5}
        className="-left-4 top-24 xl:-left-12"
      />
      <FloatingCard
        product="Ontuition"
        label="Pembayaran berhasil"
        tone="blue"
        delay={0.65}
        className="-left-2 bottom-24 xl:-left-10"
      />
      <FloatingCard
        product="Oncard"
        label="Kartu aktif"
        tone="cyan"
        delay={0.8}
        className="-right-3 top-32 xl:-right-10"
      />
      <FloatingCard
        product="Jurnal"
        label="Jurnal pembelajaran tercatat"
        tone="emerald"
        delay={0.95}
        className="-right-2 bottom-14 xl:-right-8"
      />

      <ul className="mt-4 grid grid-cols-2 gap-2 lg:hidden">
        {heroFloatingCards.map((card) => {
          const styles = floatTone[card.tone] ?? floatTone.blue;
          return (
            <li
              key={card.product}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-2.5"
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-md border",
                  styles.iconWrap,
                )}
              >
                <Check aria-hidden="true" className={cn("size-3.5", styles.icon)} />
              </span>
              <span className="grid min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {card.product}
                </span>
                <span className="truncate text-[12px] font-medium text-foreground">
                  {card.label}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
