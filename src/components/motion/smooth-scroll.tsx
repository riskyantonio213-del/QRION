"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Smooth scrolling (inertia wheel) ala Framer/FintechX.
 *
 * Lenis tetap memakai scroll native window (bukan transform hack), jadi
 * `position: sticky` navbar dan `useScroll` framer-motion tetap sinkron.
 * Dimatikan otomatis untuk pengunjung dengan prefers-reduced-motion.
 *
 * Dua penjaga navigasi antar halaman:
 * 1. `stopInertiaOnNavigate` — saat klik link ke pathname lain, Lenis
 *    mereset animasinya SEBELUM Next.js mereset scroll ke 0/restorasi
 *    histori, sehingga scroll-reset tidak pernah "dibalik" oleh animasi
 *    inertia yang masih berjalan.
 * 2. Instance Lenis dibuat ulang tiap pathname berganti (cleanup → destroy
 *    instance lama; instance baru dibuat satu tick kemudian setelah
 *    scroll-reset/restorasi Next.js selesai, sehingga target = posisi scroll
 *    yang benar untuk halaman baru).
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let lenis: Lenis | null = null;
    const timer = window.setTimeout(() => {
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        // Panel scrollable di dalam halaman (dashboard live-preview,
        // tabel/carousel produk, dsb) tetap memakai scroll native saat
        // wheel berada di atasnya — Lenis hanya mengambil alih wheel
        // yang tidak bisa dikonsumsi panel tersebut.
        allowNestedScroll: true,
      });
    }, 0);

    return () => {
      window.clearTimeout(timer);
      lenis?.destroy();
    };
  }, [pathname]);

  return null;
}
