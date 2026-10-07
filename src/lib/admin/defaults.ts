import * as comparison from "@/data/comparison";
import * as ecosystem from "@/data/ecosystem";
import * as homeFaq from "@/data/home-faq";
import * as home from "@/data/home";
import * as mitra from "@/data/mitra";
import * as onboard from "@/data/onboard";
import * as pricing from "@/data/pricing";
import * as showcase from "@/data/showcase";
import * as testimonials from "@/data/testimonials";

/**
 * Default konten homepage — namespace per modul data.
 * Dipakai ContentProvider (merge dengan override admin) dan
 * halaman editor admin (prefill form).
 */
export const defaults = {
  home,
  comparison,
  onboard,
  ecosystem,
  pricing,
  testimonials,
  faq: homeFaq,
  showcase,
  mitra,
};

export type Defaults = typeof defaults;

/**
 * Snapshot JSON-safe dari seluruh konten default (untuk seed ke Supabase):
 * properti fungsi (ikon React, helper) dibuang — komponen tetap mengambilnya
 * dari modul kode lewat deepMerge saat render.
 */
function strip(value: unknown): unknown {
  if (typeof value === "function") return undefined;
  if (Array.isArray(value)) {
    return value.map(strip).filter((item) => item !== undefined);
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value)) {
      const cleaned = strip(entry);
      if (cleaned !== undefined) out[key] = cleaned;
    }
    return out;
  }
  return value;
}

export function serializeDefaults(): Record<string, unknown> {
  return strip(defaults) as Record<string, unknown>;
}
