"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { LogoMark } from "@/components/layout/logo";
import {
  dashboardNav,
  dashboardStats,
  recentActivity,
  type ActivityTone,
  type StatTone,
} from "@/data/dashboard";
import { cn } from "@/lib/utils";

const statTone: Record<StatTone, { chip: string; icon: string }> = {
  blue: { chip: "border-brand-mint-medium bg-brand-mint", icon: "text-brand" },
  cyan: { chip: "border-border bg-brand-soft", icon: "text-brand-green" },
  indigo: { chip: "border-brand-mint-medium bg-brand-mint", icon: "text-brand-indigo" },
  emerald: { chip: "border-brand-mint-medium bg-qrion-subtle-green", icon: "text-brand-dark" },
};

const toneToBadge: Record<ActivityTone, "success" | "warning" | "info"> = {
  success: "success",
  warning: "warning",
  info: "info",
};

function ChartPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="status"
      className="flex h-full items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground"
    >
      {label}
    </div>
  );
}

// Charts are client-only and code-split, so Recharts stays out of the initial bundle.
const AttendanceChart = dynamic(
  () => import("@/components/dashboard/charts").then((mod) => mod.AttendanceChart),
  { ssr: false, loading: () => <ChartPlaceholder label="Menyiapkan grafik kehadiran…" /> },
);

const PaymentChart = dynamic(
  () => import("@/components/dashboard/charts").then((mod) => mod.PaymentChart),
  { ssr: false, loading: () => <ChartPlaceholder label="Menyiapkan grafik pembayaran…" /> },
);

export function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-border bg-card p-2 shadow-sm shadow-foreground/5">
      <div className="flex overflow-hidden rounded-xl border border-border bg-background">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-56 shrink-0 flex-col border-r border-border bg-brand-soft p-4 lg:flex">
          <div className="flex items-center gap-2 px-1">
            <LogoMark className="size-7" />
            <span className="font-display text-sm font-extrabold tracking-[0.14em] text-foreground">
              QRION
            </span>
          </div>
          <nav aria-hidden="true" className="mt-6 grid gap-0.5">
            {dashboardNav.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium",
                    item.active
                      ? "border-l-2 border-brand bg-brand-mint text-brand-indigo"
                      : "text-qrion-neutral",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </span>
              );
            })}
          </nav>
          <p className="mt-auto px-1 text-[11px] leading-relaxed text-muted-foreground/70">
            Tampilan contoh — bukan data sekolah sebenarnya.
          </p>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Topbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3.5">
            <div className="flex items-center gap-2">
              <LogoMark className="size-6 lg:hidden" />
              <h3 className="font-display text-[15px] font-semibold text-foreground">
                Dashboard Sekolah
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="neutral">Contoh data</Badge>
              <span className="hidden text-xs text-muted-foreground sm:inline">
                Tahun ajaran berjalan
              </span>
            </div>
          </div>

          {/* Mobile module pills (the sidebar collapses into a scrollable row) */}
          <div
            aria-hidden="true"
            className="flex gap-2 overflow-x-auto border-b border-border px-4 py-3 lg:hidden"
          >
            {dashboardNav.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium",
                    item.active
                      ? "border-brand-mint-medium bg-brand-mint text-brand-indigo"
                      : "border-border text-qrion-neutral",
                  )}
                >
                  <Icon className="size-3.5" />
                  {item.label}
                </span>
              );
            })}
          </div>

          <div className="grid gap-3 p-3 sm:gap-4 sm:p-4">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {dashboardStats.map((stat) => {
                const tone = statTone[stat.tone];
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-background p-3.5 sm:p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[12px] font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-md border",
                          tone.chip,
                        )}
                      >
                        <ArrowUpRight className={cn("size-3.5", tone.icon)} />
                      </span>
                    </div>
                    <p className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground/70">
                      {stat.hint}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Charts */}
            <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr] lg:gap-4">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-[13px] font-semibold text-foreground">
                    Kehadiran Mingguan
                  </h4>
                  <span className="text-[11px] text-muted-foreground">
                    Contoh data
                  </span>
                </div>
                <div className="mt-4 h-52 w-full">
                  <AttendanceChart />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-[13px] font-semibold text-foreground">
                    Status Pembayaran
                  </h4>
                  <span className="text-[11px] text-muted-foreground">
                    Contoh data
                  </span>
                </div>
                <div className="mt-4 h-52 w-full">
                  <PaymentChart />
                </div>
              </div>
            </div>

            {/* Recent activity table */}
            <div className="rounded-xl border border-border bg-background">
              <div className="flex items-center justify-between px-4 py-3.5">
                <h4 className="text-[13px] font-semibold text-foreground">
                  Aktivitas Terbaru
                </h4>
                <span className="text-[11px] text-muted-foreground">
                  Contoh data
                </span>
              </div>
              <div className="overflow-hidden border-t border-border">
                <table className="w-full table-fixed text-left">
                  <caption className="sr-only">
                    Contoh tabel aktivitas terbaru di dashboard QRION
                  </caption>
                  <thead className="bg-soft/70">
                    <tr className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      <th scope="col" className="px-4 py-2.5 font-medium">
                        Aktivitas
                      </th>
                      <th scope="col" className="hidden w-20 px-2 py-2.5 font-medium sm:table-cell">
                        Waktu
                      </th>
                      <th scope="col" className="w-24 px-4 py-2.5 text-right font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((row) => (
                      <tr
                        key={`${row.activity}-${row.time}`}
                        className="border-t border-border text-[13px]"
                      >
                        <td className="px-4 py-3">
                          <span className="block truncate font-medium text-foreground">
                            {row.activity}
                          </span>
                          <span className="mt-0.5 block truncate text-[12px] text-muted-foreground">
                            {row.detail}
                            <span className="sm:hidden"> · {row.time}</span>
                          </span>
                        </td>
                        <td className="hidden px-2 py-3 text-muted-foreground sm:table-cell">
                          {row.time}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Badge variant={toneToBadge[row.tone]}>{row.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
