"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scrolling (inertia wheel) ala Framer/FintechX.
 *
 * Lenis tetap memakai scroll native window (bukan transform hack), jadi
 * `position: sticky` navbar dan `useScroll` framer-motion tetap sinkron.
 * Dimatikan otomatis untuk pengunjung dengan prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
