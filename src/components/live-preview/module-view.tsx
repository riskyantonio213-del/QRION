"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { chartPalette, liveOverview, type LiveModule } from "@/data/live-preview";
import type { StatusTone } from "@/data/products";
import { cn } from "@/lib/utils";

const toneToBadge: Record<StatusTone, "success" | "warning" | "info" | "neutral"> = {
  success: "success",
  warning: "warning",
  info: "info",
  neutral: "neutral",
};

function ChartSkeleton({ label }: { label: string }) {
  return (
    <div
      role="status"
      className="flex h-full items-center justify-center rounded-lg border border-dashed border-border text-xs text-qrion-text-muted"
    >
      {label}
    </div>
  );
}

// Recharts stays out of the initial bundle, as on the marketing previews.
const ModuleTrendChart = dynamic(
  () => import("@/components/live-preview/module-charts").then((mod) => mod.ModuleTrendChart),
  { ssr: false, loading: () => <ChartSkeleton label="Menyiapkan grafik…" /> },
);

const ModuleBreakdownChart = dynamic(
  () =>
    import("@/components/live-preview/module-charts").then(
      (mod) => mod.ModuleBreakdownChart,
    ),
  { ssr: false, loading: () => <ChartSkeleton label="Menyiapkan grafik…" /> },
);

/** Compact ecosystem-level strip shown above the active module. */
export function EcosystemStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {liveOverview.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-border bg-background p-3.5 transition-colors hover:border-brand-mint-medium"
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full"
              style={{ backgroundColor: chartPalette[item.slot] }}
            />
            <p className="text-[11px] font-medium text-qrion-text-muted">{item.label}</p>
          </div>
          <p className="mt-1.5 font-display text-lg font-bold text-qrion-indigo">
            {item.value}
          </p>
          <p className="mt-0.5 text-[11px] text-qrion-text-muted">{item.hint}</p>
        </div>
      ))}
    </div>
  );
}

export function ModuleView({
  module,
  whatsappHref,
}: {
  module: LiveModule;
  whatsappHref: string | null;
}) {
  const Icon = module.product.icon;

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_336px]">
      <div className="grid min-w-0 gap-5">
        {/* Module heading */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3.5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand-mint-medium bg-brand-mint">
              <Icon aria-hidden="true" className="size-5 text-brand" />
            </span>
            <div className="min-w-0">
              <h1 className="font-display text-[21px] font-bold leading-tight text-qrion-indigo sm:text-[24px]">
                {module.name}
              </h1>
              <p className="mt-1 text-[13px] text-qrion-text-muted">
                {module.category} · {module.tagline}
              </p>
            </div>
          </div>
          <Badge variant="neutral" className="shrink-0">
            Contoh data
          </Badge>
        </div>

        {/* KPI cards */}
        <div data-tour="metrics" className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {module.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border bg-background p-4 transition-all hover:border-brand-mint-medium hover:shadow-card"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[12px] font-medium leading-snug text-qrion-text-muted">
                  {metric.label}
                </p>
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-md border border-brand-mint-medium bg-brand-mint"
                >
                  <Sparkles className="size-3.5 text-brand" />
                </span>
              </div>
              <p className="mt-2 font-display text-[22px] font-bold text-qrion-indigo">
                {metric.value}
              </p>
              <p className="mt-1 text-[11px] text-qrion-text-muted">{metric.hint}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div data-tour="chart" className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[14px] font-semibold text-qrion-indigo">
                {module.chartTitle}
              </h2>
              <span className="text-[11px] text-qrion-text-muted">Contoh data</span>
            </div>
            <div className="mt-4 h-56 w-full">
              <ModuleTrendChart series={module.series} label={module.chartTitle} />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
            <h2 className="text-[14px] font-semibold text-qrion-indigo">
              {module.breakdownTitle}
            </h2>
            <div className="mt-2 h-36 w-full">
              <ModuleBreakdownChart data={module.breakdown} />
            </div>
            <ul className="mt-3 grid gap-1.5">
              {module.breakdown.map((slice) => (
                <li key={slice.name} className="flex items-center gap-2 text-[12px]">
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-sm"
                    style={{ backgroundColor: chartPalette[slice.slot] }}
                  />
                  <span className="flex-1 text-qrion-text-body">{slice.name}</span>
                  <span className="font-semibold text-qrion-indigo">{slice.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Activity table */}
        <div data-tour="activity" className="rounded-xl border border-border bg-background">
          <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
            <h2 className="text-[14px] font-semibold text-qrion-indigo">
              {module.activityTitle}
            </h2>
            <span className="text-[11px] text-qrion-text-muted">Contoh data</span>
          </div>
          <div className="overflow-hidden border-t border-border">
            <table className="w-full table-fixed text-left">
              <caption className="sr-only">
                Contoh aktivitas terbaru pada modul {module.name} di QRION Live Experience
              </caption>
              <thead className="bg-brand-soft">
                <tr className="text-[11px] uppercase tracking-wider text-qrion-text-muted">
                  <th scope="col" className="px-4 py-2.5 font-medium sm:px-5">
                    Aktivitas
                  </th>
                  <th scope="col" className="hidden w-20 px-2 py-2.5 font-medium sm:table-cell">
                    Waktu
                  </th>
                  <th scope="col" className="w-24 px-4 py-2.5 text-right font-medium sm:px-5">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {module.activity.map((row) => (
                  <tr
                    key={`${row.label}-${row.time}`}
                    className="border-t border-border text-[13px]"
                  >
                    <td className="px-4 py-3 sm:px-5">
                      <span className="block truncate font-medium text-qrion-indigo">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] text-qrion-text-muted">
                        {row.detail}
                        <span className="sm:hidden"> · {row.time}</span>
                      </span>
                    </td>
                    <td className="hidden px-2 py-3 text-qrion-text-muted sm:table-cell">
                      {row.time}
                    </td>
                    <td className="px-4 py-3 text-right sm:px-5">
                      <Badge variant={toneToBadge[row.tone]}>{row.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Knowledge + support column */}
      <div className="grid gap-5">
        <div
          data-tour="knowledge"
          className="rounded-2xl border border-brand-mint-medium bg-brand-mint-light p-5"
        >
          <h2 className="font-display text-[16px] font-bold text-qrion-indigo">
            Pelajari modul ini
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-qrion-text-body">
            {module.summary}
          </p>

          <div className="mt-4 grid gap-2.5">
            {module.product.features.slice(0, 3).map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-brand-mint-medium bg-brand-mint"
                  >
                    <FeatureIcon className="size-4 text-brand" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-qrion-indigo">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-qrion-text-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <p className="text-[12px] font-semibold text-qrion-indigo">Terhubung dengan</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {module.connectedTo.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-brand-mint-medium bg-background px-2.5 py-1 text-[11px] font-medium text-qrion-indigo"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-brand-mint-medium bg-background p-3.5">
            <p className="flex items-start gap-2 text-[12px] leading-relaxed text-qrion-text-body">
              <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-brand" />
              <span>
                <span className="font-semibold text-qrion-indigo">Cocok untuk: </span>
                {module.bestFor}
              </span>
            </p>
          </div>
        </div>

        {/* WhatsApp / contact CTA */}
        <div
          className="rounded-2xl border border-brand-mint-medium p-5"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #E8F6F1 0%, #F8FCFA 50%, #DDF5EA 100%)",
          }}
        >
          <h2 className="font-display text-[16px] font-bold leading-snug text-qrion-indigo">
            Lihat ekosistem ini pada data sekolah Anda
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-qrion-text-body">
            Tim QRION siap memandu implementasi tiap modul sesuai kebutuhan sekolah,
            madrasah, atau pesantren Anda.
          </p>
          <div className="mt-4 grid gap-2.5">
            {whatsappHref ? (
              <Button asChild className="w-full rounded-full">
                <a href={whatsappHref} rel="noopener noreferrer" target="_blank">
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Hubungi Tim QRION
                </a>
              </Button>
            ) : (
              <Button asChild className="w-full rounded-full">
                <Link
                  href="https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Hubungi Tim QRION
                </Link>
              </Button>
            )}
            <Button asChild variant="secondary" className="w-full rounded-full">
              <Link href="https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Jadwalkan Demo
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
          <p className={cn("mt-3 text-center text-[11px] leading-relaxed text-qrion-text-muted")}>
            Lingkungan demo — tidak ada data sekolah nyata yang ditampilkan.
          </p>
        </div>
      </div>
    </div>
  );
}
