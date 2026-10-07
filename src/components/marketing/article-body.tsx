"use client";

import { useEffect, useRef } from "react";

import { anchorSlug } from "@/lib/anchor";

/**
 * Konten artikel + dukungan anchor internal ala WordPress:
 * - Setiap heading (h2–h4) otomatis diberi id slug dari teksnya
 *   (mis. "Judul Uji Panel" -> id "judul-uji-panel") sebagai tujuan `#anchor`.
 * - Klik link `href="#…"` di dalam konten: scroll halus ke tujuan +
 *   perbarui hash URL tanpa navigasi ulang.
 * - Saat halaman dibuka langsung dengan `#hash`, scroll sekali ke tujuan.
 */
export function ArticleBody({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const used = new Set<string>();
    container
      .querySelectorAll<HTMLElement>("h2, h3, h4")
      .forEach((heading) => {
        if (heading.id) {
          used.add(heading.id);
          return;
        }
        const base = anchorSlug(heading.textContent ?? "") || "bagian";
        let id = base;
        let n = 2;
        while (used.has(id) || document.getElementById(id)) {
          id = `${base}-${n++}`;
        }
        heading.id = id;
        used.add(id);
      });

    const onClick = (event: MouseEvent) => {
      const el =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
          : null;
      if (!el || !container.contains(el)) return;
      const href = el.getAttribute("href");
      if (!href || href.length < 2) return;
      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    };
    container.addEventListener("click", onClick);

    let frame = 0;
    if (location.hash.length > 1) {
      frame = requestAnimationFrame(() => {
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ block: "start" });
      });
    }

    return () => {
      container.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
    };
  }, [html]);

  return (
    <div
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
