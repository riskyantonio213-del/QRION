import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** `inverted` is used on dark/gradient surfaces (footer, CTA panels). */
  variant?: "default" | "inverted";
  href?: string | null;
};

/**
 * QRION logo lockup: an abstract "ecosystem node" mark next to the wordmark.
 * The gradient uses a fixed id on purpose — the SVG is byte-identical wherever
 * it appears, so sharing one gradient definition keeps the markup small.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("size-8", className)}
    >
      <defs>
        <linearGradient id="qrion-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-indigo-dark)" />
          <stop offset="100%" stopColor="var(--brand)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#qrion-mark-gradient)" />
      <g stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
        <path d="M16 16v-6.6" />
        <path d="m16 16 6.2 3.6" />
        <path d="M16 16l-6.2 3.6" />
      </g>
      <circle cx="16" cy="16" r="2.9" fill="#ffffff" />
      <circle cx="16" cy="9.4" r="2" fill="#ffffff" />
      <circle cx="22.2" cy="19.6" r="2" fill="#ffffff" />
      <circle cx="9.8" cy="19.6" r="2" fill="#ffffff" />
    </svg>
  );
}

export function Logo({
  className,
  variant = "default",
  href = "/",
}: LogoProps) {
  const content = (
    <>
      <LogoMark />
      <span
        className={cn(
          "font-display text-[19px] font-extrabold tracking-[0.16em]",
          variant === "inverted" ? "text-white" : "text-foreground",
        )}
      >
        QRION
      </span>
    </>
  );

  const baseClass = cn(
    "inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
    className,
  );

  if (!href) {
    return <span className={baseClass}>{content}</span>;
  }

  return (
    <Link href={href} className={baseClass} aria-label="QRION — Beranda">
      {content}
    </Link>
  );
}
