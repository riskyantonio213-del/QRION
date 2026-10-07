"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";

import { livePreviewProducts } from "@/data/live-preview";
import { DesktopHint } from "@/components/live-preview/desktop-hint";

interface LivePreviewShellProps {
  slug: string;
  children?: React.ReactNode;
  /** Sembunyikan bar mockup browser (traffic light + URL bar). Dipakai halaman mockup mobile. */
  showBrowserBar?: boolean;
  /** Hilangkan padding vertikal section (dipakai saat shell dibungkus Section marketing). */
  compact?: boolean;
  /** Ukuran kartu preview. "lg" lebih tinggi & lebar — khusus dashboard sekolah. */
  size?: "default" | "lg";
}

export function LivePreviewShell({
  slug,
  children,
  showBrowserBar = true,
  compact = false,
  size = "default",
}: LivePreviewShellProps) {
  const product = livePreviewProducts.find((p) => p.slug === slug);
  const ProductIcon = product?.icon ?? Sparkles;

  // Mockup QRION Mobile dipertahankan dengan tampilan klasiknya (padding & tinggi asli).
  const classicLayout = slug === "qrion-mobile";

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
    );
  }, []);

  return (
    <section
      className={`relative w-full overflow-hidden font-sans ${
        compact
          ? "px-0 py-0"
          : classicLayout
            ? "px-4 py-24 sm:px-6 lg:px-10 lg:py-6 xl:px-16"
            : "px-3 py-8 sm:px-6 sm:py-14 lg:px-10 lg:py-6 xl:px-16"
      }`}
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-mint/40 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#dcefe7_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      {/* Petunjuk mobile */}
      <DesktopHint className="mb-3" />

      {/* Dashboard Shell */}
      <div
        className={`relative z-10 mx-auto flex w-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.13)] ${
          classicLayout
            ? "h-[820px] max-w-[1380px] lg:h-[calc(100dvh-11.5rem)]"
            : size === "lg"
              ? "h-[calc(100dvh-11rem)] min-h-[560px] max-w-[1980px] lg:h-[1080px] lg:min-h-0"
              : "h-[calc(100dvh-11rem)] min-h-[560px] max-w-[1380px] lg:h-[calc(100dvh-11.5rem)] lg:min-h-0"
        }`}
      >
        {/* Browser Bar Mockup */}
        {showBrowserBar && (
          <div className="flex h-[48px] shrink-0 items-center gap-2 border-b border-slate-100 bg-white px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFCC4D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#33C77B]" />
            <div className="ml-3 flex h-7 max-w-[500px] flex-1 items-center rounded-full border border-slate-100 bg-slate-50 px-3 text-[10px] text-slate-400">
              <span className="mr-2 text-[9px]">🔒</span>
              admin.{slug}.qrion.id
            </div>
            <div className="hidden items-center gap-2 text-[10px] font-medium text-slate-400 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />{" "}
              Live Preview
            </div>
          </div>
        )}

        {/* Mobile App Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4 py-3 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-brand text-white shadow-sm">
              <ProductIcon className="size-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-qrion-indigo">
                {product?.name ?? "QRION"} Admin
              </div>
              <div className="text-[9px] text-slate-400">
                Sekolah Global Mandiri
              </div>
            </div>
          </div>
        </div>

        {/* Layout Body */}
        <div className="relative flex flex-1 overflow-hidden bg-slate-50/50">
          {children}
        </div>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3 text-[10px] font-medium text-slate-500 lg:mt-4">
        <span>Sistem terisolasi (Sandbox)</span>
        <span className="h-1 w-1 rounded-full bg-brand" />
        <span>Terintegrasi Ekosistem QRION</span>
        <span className="h-1 w-1 rounded-full bg-brand" />
        <span>Keamanan enkripsi aktif</span>
      </div>
    </section>
  );
}
