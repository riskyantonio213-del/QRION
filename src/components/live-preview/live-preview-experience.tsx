"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, CircleAlert, CircleCheck, Play, X } from "lucide-react";

import type { FormState } from "@/app/actions/form-actions";
import { GuidedTour } from "@/components/live-preview/guided-tour";
import { LeadModal } from "@/components/live-preview/lead-modal";
import { EcosystemStrip, ModuleView } from "@/components/live-preview/module-view";
import { LogoMark } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { contactChannels } from "@/config/site";
import { liveModules, tourSteps } from "@/data/live-preview";
import { cn } from "@/lib/utils";

/**
 * QRION Live Experience — the application counterpart of the marketing site.
 *
 * Flow: lead capture gate → full-bleed app shell (header, product sidebar,
 * guided tour, progress indicator) → per-module dashboard + knowledge panel →
 * WhatsApp / contact CTA. Every surface reuses the shared QRION design tokens
 * so the demo reads as the same product, not a generic admin template.
 */
export function LivePreviewExperience() {
  const [entered, setEntered] = useState(false);
  const [leadState, setLeadState] = useState<FormState | null>(null);
  const [activeSlug, setActiveSlug] = useState<string>(liveModules[0].slug);
  const [visited, setVisited] = useState<string[]>([liveModules[0].slug]);
  const [tourStep, setTourStep] = useState<number | null>(null);

  const activeModule =
    liveModules.find((module) => module.slug === activeSlug) ?? liveModules[0];

  const whatsappHref = useMemo(() => {
    if (!contactChannels.whatsapp) return null;
    const digits = contactChannels.whatsapp.replace(/\D/g, "");
    return digits ? `https://wa.me/${digits}` : null;
  }, []);

  const selectModule = useCallback((slug: string) => {
    setActiveSlug(slug);
    setVisited((current) => (current.includes(slug) ? current : [...current, slug]));
  }, []);

  const handleLeadComplete = useCallback((state: FormState) => {
    setLeadState(state.message ? state : null);
    setEntered(true);

    // Start the tour automatically on desktop, where every target is visible.
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
      setTourStep(0);
    }
  }, []);

  // Keep the demo reachable by keyboard: while the gate is open, stop the
  // page behind it from scrolling.
  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [entered]);

  const currentTour = tourStep === null ? null : tourSteps[tourStep];

  return (
    <>
      <LeadModal open={!entered} onComplete={handleLeadComplete} />

      <div className="flex min-h-dvh flex-col bg-soft">
        {/* ---------------------------- Header ---------------------------- */}
        <header className="sticky top-0 z-40 border-b border-border bg-background">
          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <Link
                href="/"
                aria-label="Kembali ke situs QRION"
                className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                <LogoMark className="size-8" />
                <span className="truncate font-display text-[16px] font-bold tracking-tight text-qrion-indigo sm:text-[18px]">
                  QRION Live Experience
                </span>
              </Link>
              <span className="hidden rounded-full bg-brand-mint px-2.5 py-1 text-[11px] font-semibold text-brand-dark sm:inline-flex">
                Demo Environment
              </span>
            </div>

            <div className="flex items-center gap-2" data-tour="support">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full"
                onClick={() => setTourStep(0)}
              >
                <Play aria-hidden="true" className="size-3.5" />
                Tur Singkat
              </Button>
              <Button size="sm" asChild className="rounded-full px-4">
                <Link href="/kontak">Hubungi Tim QRION</Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col lg:flex-row">
          {/* --------------------------- Sidebar --------------------------- */}
          <aside
            data-tour="sidebar"
            className="hidden w-[250px] shrink-0 flex-col border-r border-brand/15 bg-[#E7EEEB] lg:flex"
          >
            <div className="px-5 py-5">
              <p className="font-display text-[13px] font-extrabold tracking-[0.18em] text-qrion-indigo">
                QRION
              </p>
              <p className="mt-1 text-[11px] text-[#65706C]">Ekosistem digital sekolah</p>
            </div>

            <nav aria-label="Modul QRION" className="flex-1 px-2 pb-4">
              <ul>
                {liveModules.map((module) => {
                  const Icon = module.product.icon;
                  const active = module.slug === activeSlug;
                  const done = visited.includes(module.slug);

                  return (
                    <li key={module.slug} className="border-b border-brand/15 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => selectModule(module.slug)}
                        aria-current={active ? "true" : undefined}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors",
                          active
                            ? "border-l-2 border-brand bg-background"
                            : "border-l-2 border-transparent hover:bg-brand-soft",
                        )}
                      >
                        <Icon
                          aria-hidden="true"
                          className={cn("size-4 shrink-0", active ? "text-brand" : "text-[#65706C]")}
                        />
                        <span
                          className={cn(
                            "min-w-0 flex-1 truncate font-display text-[11.5px] font-bold uppercase tracking-[0.08em]",
                            active ? "text-qrion-indigo" : "text-[#65706C]",
                          )}
                        >
                          {module.code}
                        </span>
                        {done ? (
                          <Check aria-hidden="true" className="size-3.5 shrink-0 text-brand" />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ---------------------- Progress indicator ---------------------- */}
            <div className="border-t border-brand/15 px-5 py-4">
              <p className="text-[11px] font-medium leading-snug text-qrion-indigo">
                Produk yang sudah Anda jelajahi
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div
                  role="img"
                  aria-label={`${visited.length} dari ${liveModules.length} modul sudah dijelajahi`}
                  className="flex flex-1 gap-1"
                >
                  {liveModules.map((module) => (
                    <span
                      key={module.slug}
                      className={cn(
                        "h-1.5 flex-1 rounded-full",
                        visited.includes(module.slug) ? "bg-brand" : "bg-[#E1ECE7]",
                      )}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-qrion-indigo">
                  {visited.length}/{liveModules.length}
                </span>
              </div>

              <ul className="mt-3 grid gap-1.5">
                {liveModules.map((module) => {
                  const done = visited.includes(module.slug);
                  return (
                    <li key={module.slug} className="flex items-center gap-2 text-[11px]">
                      <Check
                        aria-hidden="true"
                        className={cn("size-3 shrink-0", done ? "text-brand" : "text-[#B7C4BF]")}
                      />
                      <span className={done ? "text-qrion-indigo" : "text-[#65706C]"}>
                        {module.name}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/"
                className="mt-4 inline-flex rounded text-[11px] font-medium text-[#65706C] underline-offset-2 transition-colors hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                Kembali ke situs QRION
              </Link>
            </div>
          </aside>

          {/* ---------------------------- Main ----------------------------- */}
          <main id="konten-utama" className="min-w-0 flex-1 bg-soft px-4 py-5 sm:px-6 lg:py-8">
            {leadState ? (
              <div
                role="status"
                className={cn(
                  "mb-5 flex items-start gap-3 rounded-xl border p-4",
                  leadState.status === "success"
                    ? "border-qrion-success/20 bg-qrion-success-bg"
                    : "border-qrion-warning/25 bg-qrion-warning-bg",
                )}
              >
                {leadState.status === "success" ? (
                  <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-qrion-success" />
                ) : (
                  <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-qrion-warning" />
                )}
                <p className="flex-1 text-[13px] leading-relaxed text-qrion-text-body">
                  {leadState.message}
                </p>
                <button
                  type="button"
                  onClick={() => setLeadState(null)}
                  aria-label="Tutup pemberitahuan"
                  className="rounded-lg p-1 text-qrion-text-muted transition-colors hover:bg-white/60 hover:text-qrion-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  <X aria-hidden="true" className="size-3.5" />
                </button>
              </div>
            ) : null}

            <div className="grid gap-5">
              <EcosystemStrip />

              {/* Mobile module switcher — the sidebar collapses into a row. */}
              <div className="-mx-4 overflow-x-auto px-4 lg:hidden">
                <ul className="flex w-max gap-2">
                  {liveModules.map((module) => {
                    const Icon = module.product.icon;
                    const active = module.slug === activeSlug;
                    return (
                      <li key={module.slug}>
                        <button
                          type="button"
                          onClick={() => selectModule(module.slug)}
                          aria-current={active ? "true" : undefined}
                          className={cn(
                            "flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors",
                            active
                              ? "border-brand bg-brand-mint text-qrion-indigo"
                              : "border-border bg-background text-[#65706C]",
                          )}
                        >
                          <Icon
                            aria-hidden="true"
                            className={cn("size-3.5", active ? "text-brand" : "text-[#65706C]")}
                          />
                          {module.code}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <ModuleView module={activeModule} whatsappHref={whatsappHref} />
            </div>
          </main>
        </div>

        <footer className="border-t border-border bg-background px-4 py-5 sm:px-6">
          <p className="mx-auto max-w-3xl text-center text-[12px] leading-relaxed text-qrion-text-muted">
            QRION Live Experience — lingkungan demo. Seluruh angka pada halaman ini
            adalah contoh data, bukan data sekolah sebenarnya.
          </p>
        </footer>
      </div>

      {currentTour ? (
        <GuidedTour
          target={currentTour.target}
          title={currentTour.title}
          body={currentTour.body}
          index={tourStep ?? 0}
          total={tourSteps.length}
          onNext={() =>
            setTourStep((step) => {
              if (step === null) return 0;
              return step + 1 >= tourSteps.length ? null : step + 1;
            })
          }
          onPrevious={() =>
            setTourStep((step) => (step === null || step === 0 ? step : step - 1))
          }
          onClose={() => setTourStep(null)}
        />
      ) : null}
    </>
  );
}
