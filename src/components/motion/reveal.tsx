"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds of delay — use small increments to stagger grids. */
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
  duration?: number;
};

/**
 * Fades and lifts content as it enters the viewport.
 *
 * Motion is automatically disabled for visitors who prefer reduced motion, in
 * which case the content renders immediately (no layout or SEO impact).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  duration = 0.55,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
