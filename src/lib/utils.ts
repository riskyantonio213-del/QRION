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
