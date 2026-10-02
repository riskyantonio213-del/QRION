import { ArrowRight, Bell, Check, ScanLine } from "lucide-react";

import { LogoMark } from "@/components/layout/logo";
import { Badge } from "@/components/ui/badge";
import type { Product, StatusTone } from "@/data/products";
import { cn } from "@/lib/utils";

const toneToBadge: Record<
  StatusTone,
  "success" | "warning" | "info" | "neutral"
> = {
  success: "success",
  warning: "warning",
  info: "info",
  neutral: "neutral",
};

/** Small, kind-specific header graphic so each module reads differently. */
function KindStrip({ product }: { product: Product }) {
  const { kind, appTitle } = product.preview;

  if (kind === "cards") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br p-4 text-white",
          "from-brand-indigo to-brand-indigo-dark",
        )}
      >
        <div className="flex items-center justify-between">
          <LogoMark className="size-6 rounded-md" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
            {appTitle}
          </span>
        </div>
        <p className="mt-6 font-mono text-[13px] tracking-[0.2em] text-white/85">
          •••• •••• 4821
        </p>
        <p className="mt-1 text-[11px] text-white/60">
          Kartu siswa — contoh tampilan
        </p>
      </div>
    );
  }

  if (kind === "attendance") {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-border bg-soft px-4 py-3">
        <span
          className={cn(
            "flex size-9 items-center justify-center rounded-lg border",
            product.accent.iconWrap,
          )}
        >
          <ScanLine
            aria-hidden="true"
            className={cn("size-4", product.accent.icon)}
          />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-foreground">
            Perangkat presensi aktif
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            Menunggu tap kartu berikutnya
          </p>
        </div>
      </div>
    );
  }

  if (kind === "admission") {
    const steps = ["Pendaftaran", "Verifikasi", "Pengumuman"];
    return (
      <div className="rounded-lg border border-border bg-soft p-3.5">
        <ol className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
          {steps.map((step, index) => (
            <li key={step} className="flex flex-1 items-center gap-2">
              <span className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-full text-[10px] text-white",
                    index < 2 ? product.accent.dot : "bg-border",
                  )}
                >
                  {index < 2 ? <Check className="size-3" /> : index + 1}
                </span>
                {step}
              </span>
              {index < steps.length - 1 ? (
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (kind === "journal") {
    return (
      <div className="rounded-lg border border-border bg-soft p-3.5">
        <p className="text-[11px] font-medium text-muted-foreground">
          Catatan terakhir
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-foreground">
          Materi, aktivitas kelas, dan catatan pembelajaran tersimpan rapi pada
          jurnal digital.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-soft px-4 py-3">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-foreground">
          Tagihan periode berjalan
        </p>
        <p className="truncate text-[11px] text-muted-foreground">
          Dipantau dari dashboard sekolah
        </p>
      </div>
      <Bell aria-hidden="true" className="size-4 shrink-0 text-brand" />
    </div>
  );
}

/**
 * Visual product demonstration.
 *
 * All values come from `product.preview` in src/data/products.ts and are
 * labelled "Contoh data" — replace with API data when the app ships.
 */
export function ProductPreview({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { preview } = product;
  const max = Math.max(...preview.series.map((point) => point.value));

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-2 shadow-sm shadow-foreground/5",
        className,
      )}
    >
      <div className="rounded-xl bg-soft/70 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3 pb-3">
          <div className="flex items-center gap-2">
            <LogoMark className="size-6" />
            <span className="text-[13px] font-semibold text-foreground">
              {preview.appTitle}
            </span>
          </div>
          <Badge variant="neutral">Contoh data</Badge>
        </div>

        <KindStrip product={product} />

        <div className="mt-3 grid grid-cols-3 gap-2">
          {preview.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-border bg-background p-2.5"
            >
              <p className="truncate text-[11px] font-medium text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1 font-display text-[15px] font-bold text-foreground sm:text-base">
                {metric.value}
              </p>
              <p className="mt-0.5 text-[10px] text-muted-foreground/70">
                {metric.hint}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-lg border border-border bg-background p-3.5">
            <p className="text-[12px] font-semibold text-foreground">
              {preview.chartTitle}
            </p>
            <div
              className="mt-3 flex h-24 items-end gap-2"
              role="img"
              aria-label={`${preview.chartTitle} (contoh data)`}
            >
              {preview.series.map((point) => (
                <div
                  key={point.label}
                  className="flex flex-1 flex-col items-center gap-1.5"
                >
                  <span
                    className={cn(
                      "w-full rounded-md opacity-90",
                      product.accent.bar,
                    )}
                    style={{
                      height: `${Math.max((point.value / max) * 100, 8)}%`,
                    }}
                  />
                  <span className="truncate text-[9px] font-medium text-muted-foreground">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background">
            <p className="px-3.5 pt-3.5 text-[12px] font-semibold text-foreground">
              {preview.rowsTitle}
            </p>
            <ul className="mt-2 divide-y divide-border">
              {preview.rows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-3 px-3.5 py-2.5"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[12px] font-medium text-foreground">
                      {row.label}
                    </span>
                    <span className="block truncate text-[11px] text-muted-foreground">
                      {row.value}
                    </span>
                  </span>
                  <Badge variant={toneToBadge[row.tone]} className="shrink-0">
                    {row.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <ArrowRight aria-hidden="true" className="size-3.5" />
          Tampilan contoh — nilai dapat diganti dengan data sekolah Anda.
        </p>
      </div>
    </div>
  );
}
