"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function OncardRipple({
  color = "#33B77E",
  hoverColor = "#ffffff",
}: {
  color?: string;
  hoverColor?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const host = el.parentElement;
    if (!host) return;
    const label = el.nextElementSibling;

    gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
    let origColor = "";

    const place = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      gsap.set(el, { left: e.clientX - r.left, top: e.clientY - r.top });
    };
    const enter = (e: MouseEvent) => {
      place(e);
      if (label) origColor = getComputedStyle(label).color;
      gsap.to(el, { opacity: 1, duration: 0.15, overwrite: "auto" });
      gsap.to(el, {
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
      if (label)
        gsap.to(label, { color: hoverColor, duration: 0.2, overwrite: "auto" });
    };
    const leave = () => {
      gsap.to(el, {
        scale: 0,
        duration: 0.45,
        ease: "power3.in",
        overwrite: "auto",
        onComplete: () => gsap.set(el, { opacity: 0 }),
      });
      if (label)
        gsap.to(label, { color: origColor, duration: 0.2, overwrite: "auto" });
    };

    host.addEventListener("mousemove", place);
    host.addEventListener("mouseenter", enter);
    host.addEventListener("mouseleave", leave);
    return () => {
      host.removeEventListener("mousemove", place);
      host.removeEventListener("mouseenter", enter);
      host.removeEventListener("mouseleave", leave);
    };
  }, [hoverColor]);

  return (
    <span
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-0 rounded-full opacity-0"
      style={{ width: "250%", paddingBottom: "250%", backgroundColor: color }}
    />
  );
}
