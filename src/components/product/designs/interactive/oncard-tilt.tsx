"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export function OncardTilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const article = el.querySelector("article");
    if (!article) return;
    const kids = article.children;
    if (kids.length < 7) return;
    const glow = kids[0];
    const number = kids[1];
    const header = kids[2];
    const imgWrap = kids[3];
    const panel = kids[4];
    const info = kids[5];
    const bottom = kids[6];
    const chip = header.querySelector("span");
    const img = imgWrap.querySelector("img");
    const h3 = info.querySelector("h3");
    const p = info.querySelector("p");
    const eyebrow = bottom.children[0];
    const arrow = bottom.children[1];
    if (!chip || !h3 || !p || !eyebrow || !arrow) return;

    const over = () => {
      gsap.to(article, {
        backgroundColor: "#32B67D",
        borderColor: "rgba(255, 255, 255, 0.35)",
        boxShadow: "0 30px 70px rgba(50, 182, 125, 0.25)",
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsap.to(h3, { color: "#ffffff", duration: 0.3, overwrite: "auto" });
      gsap.to(p, {
        color: "rgba(255, 255, 255, 0.72)",
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(eyebrow, {
        color: "rgba(255, 255, 255, 0.5)",
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(number, {
        color: "rgba(255, 255, 255, 0.1)",
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(chip, {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "#ffffff",
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(arrow, {
        color: "#32B67D",
        rotate: 45,
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(glow, {
        opacity: 0,
        scale: 1.2,
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(panel, {
        opacity: 0,
        scale: 0.85,
        duration: 0.4,
        overwrite: "auto",
      });
      if (img)
        gsap.to(img, {
          y: -25,
          scale: 1.3,
          rotate: -3,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto",
        });
    };
    const out = () => {
      gsap.to(article, {
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgba(50, 182, 125, 0.12)",
        boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
        duration: 0.4,
        overwrite: "auto",
      });
      gsap.to(h3, {
        color: "rgb(7, 26, 19)",
        duration: 0.35,
        overwrite: "auto",
      });
      gsap.to(p, {
        color: "rgb(148, 163, 184)",
        duration: 0.35,
        overwrite: "auto",
      });
      gsap.to(eyebrow, {
        color: "rgb(203, 213, 225)",
        duration: 0.35,
        overwrite: "auto",
      });
      gsap.to(number, {
        color: "rgba(50, 182, 125, 0.055)",
        duration: 0.35,
        overwrite: "auto",
      });
      gsap.to(chip, {
        backgroundColor: "rgba(50, 182, 125, 0.08)",
        color: "rgb(50, 182, 125)",
        duration: 0.35,
        overwrite: "auto",
      });
      gsap.to(arrow, {
        color: "rgb(203, 213, 225)",
        rotate: 0,
        duration: 0.35,
        overwrite: "auto",
      });
      gsap.to(glow, { opacity: 1, scale: 1, duration: 0.4, overwrite: "auto" });
      gsap.to(panel, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        overwrite: "auto",
      });
      if (img)
        gsap.to(img, {
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.6)",
          overwrite: "auto",
        });
    };
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, {
        rotateY: px * 12,
        rotateX: -py * 12,
        transformPerspective: 1100,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    const leave = () => {
      out();
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "elastic.out(1, 0.55)",
        overwrite: "auto",
      });
    };

    el.addEventListener("mouseenter", over);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("mousemove", move);
    return () => {
      el.removeEventListener("mouseenter", over);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
