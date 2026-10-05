import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names while de-duplicating Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build an absolute URL from a site-relative path (used by metadata + sitemap). */
export function absoluteUrl(base: string, path = "/") {
  return new URL(path, base).toString();
}

/**
 * Props tambahan untuk <Link>/<a> agar URL eksternal (mis. WhatsApp)
 * terbuka di tab baru; href internal tetap tanpa target.
 */
export function externalLinkProps(href: string | null | undefined) {
  return href && /^https?:\/\//i.test(href)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : undefined;
}
