"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Rect = { top: number; left: number; width: number; height: number };

type GuidedTourProps = {
  /** `data-tour` value of the element to highlight. */
  target: string;
  title: string;
  body: string;
  index: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
};

const TOOLTIP_WIDTH = 340;
const GAP = 14;

/**
 * Highlights one element at a time with a QRION green ring and a white
 * tooltip. The page behind is dimmed with a very large box-shadow, so no
 * separate mask element is needed and the highlight stays pixel-accurate.
 */
export function GuidedTour({
  target,
  title,
  body,
  index,
  total,
  onNext,
  onPrevious,
  onClose,
}: GuidedTourProps) {
  const [rect, setRect] = useState<Rect | null>(null);

  /** Reads the highlighted element's box. Elements hidden at the current
   *  breakpoint (e.g. the desktop sidebar on mobile) report a zero box, so the
   *  tooltip falls back to a centred position. */
  const measure = useCallback(() => {
    const element = document.querySelector<HTMLElement>(`[data-tour="${target}"]`);
    if (!element) {
      setRect(null);
      return;
    }

    const box = element.getBoundingClientRect();
    if (box.width === 0 || box.height === 0) {
      setRect(null);
      return;
    }

    setRect({ top: box.top, left: box.left, width: box.width, height: box.height });
  }, [target]);

  // Measure inside a frame callback (never synchronously in the effect body).
  useEffect(() => {
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [measure]);

  // Bring the highlighted element into view once per step, not on every scroll.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const element = document.querySelector<HTMLElement>(`[data-tour="${target}"]`);
      if (!element) return;

      const box = element.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) return;

      if (box.top < 8 || box.bottom > window.innerHeight - 8) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [target]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrevious]);

  const viewportHeight = typeof window === "undefined" ? 0 : window.innerHeight;
  const viewportWidth = typeof window === "undefined" ? 0 : window.innerWidth;

  // Prefer the tooltip below the target; flip above when there is no room.
  const placeBelow = rect ? rect.top + rect.height + GAP + 210 < viewportHeight : true;
  const top = rect
    ? placeBelow
      ? rect.top + rect.height + GAP
      : Math.max(GAP, rect.top - GAP - 200)
    : Math.max(GAP, viewportHeight / 2 - 120);
  const left = rect
    ? Math.min(
        Math.max(GAP, rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2),
        Math.max(GAP, viewportWidth - TOOLTIP_WIDTH - GAP),
      )
    : Math.max(GAP, viewportWidth / 2 - TOOLTIP_WIDTH / 2);

  const isLast = index === total - 1;

  return (
    <>
      {/* Click anywhere outside the tooltip to leave the tour. */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-[85] cursor-pointer"
      />

      {rect ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-[86] rounded-xl border-2 border-brand transition-all duration-300"
          style={{
            top: rect.top - 6,
            left: rect.left - 6,
            width: rect.width + 12,
            height: rect.height + 12,
            boxShadow:
              "0 0 0 9999px rgba(48,46,89,0.35), 0 0 0 6px rgba(53,187,130,0.18)",
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[86]"
          style={{ backgroundColor: "rgba(48,46,89,0.35)" }}
        />
      )}

      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="tour-title"
        className="fixed z-[87] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-background p-5 shadow-[0_18px_50px_rgba(48,46,89,0.18)] transition-all duration-300"
        style={{ top, left }}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-mint px-2.5 py-1 text-[11px] font-semibold text-brand-dark">
            Langkah {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup tur"
            className="rounded-lg p-1 text-qrion-text-muted transition-colors hover:bg-brand-soft hover:text-qrion-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </div>

        <h3
          id="tour-title"
          className="mt-3 font-display text-[16px] font-bold leading-snug text-qrion-indigo"
        >
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-qrion-text-body">{body}</p>

        <div className="mt-5 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onPrevious}
            disabled={index === 0}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-medium text-qrion-text-muted transition-colors",
              "hover:bg-brand-soft hover:text-qrion-indigo disabled:pointer-events-none disabled:opacity-40",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            )}
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" />
            Kembali
          </button>

          <Button type="button" size="sm" onClick={onNext} className="rounded-full px-4">
            {isLast ? (
              <>
                <Check aria-hidden="true" className="size-3.5" />
                Selesai
              </>
            ) : (
              <>
                Lanjut
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
