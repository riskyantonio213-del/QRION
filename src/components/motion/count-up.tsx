"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type CountUpProps = {
  to: number;
  from?: number;
  direction?: "up" | "down";
  /** Detik sebelum hitungan mulai setelah masuk viewport. */
  delay?: number;
  /** Durasi animasi dalam detik (dipakai untuk kalkulasi spring). */
  duration?: number;
  className?: string;
  /** Set false untuk menahan hitungan meski sudah masuk viewport. */
  startWhen?: boolean;
  /** Pemisah ribuan, mis. "." → 500.000. */
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

const getDecimalPlaces = (num: number): number => {
  const str = num.toString();
  if (str.includes(".")) {
    const decimals = str.split(".")[1];
    if (parseInt(decimals, 10) !== 0) return decimals.length;
  }
  return 0;
};

/**
 * Angka berhitung naik (atau turun) dengan spring, otomatis mulai sekali
 * saat elemen masuk viewport. Untuk `prefers-reduced-motion`, angka akhir
 * langsung ditampilkan tanpa animasi.
 */
export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(direction === "down" ? to : from);

  // Damping kritis (ζ = 1): tanpa overshoot dan tanpa ekor lambat, jadi
  // angka bulat benar-benar menyentuh target (formula over-damped lama
  // membuat display mentok di "2.499.999" selama beberapa detik).
  const stiffness = 100 * (1 / duration);
  const damping = 2 * Math.sqrt(stiffness);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number): string => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };

      const formattedNumber = new Intl.NumberFormat("en-US", options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator],
  );

  const finalValue = direction === "down" ? from : to;
  const initialValue = direction === "down" ? to : from;
  const initialText = prefersReducedMotion
    ? formatValue(finalValue)
    : formatValue(initialValue);

  // Teks awal ikut ter-SSR supaya paint pertama sudah ada angka,
  // lalu dikunci lagi saat mount (textContent di luar VDOM React).
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = initialText;
    }
  }, [initialText]);

  // Mulai hitung satu kali saat masuk viewport.
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isInView && startWhen) {
      if (typeof onStart === "function") onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(finalValue);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === "function") onEnd();
        },
        delay * 1000 + duration * 1000,
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    prefersReducedMotion,
    isInView,
    startWhen,
    motionValue,
    finalValue,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  // Teruskan nilai spring ke teks.
  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue, prefersReducedMotion]);

  return (
    <span className={className} ref={ref}>
      {initialText}
    </span>
  );
}
