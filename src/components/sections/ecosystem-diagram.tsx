"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import { cn } from "@/lib/utils";

/** Natural pixel sizes of the wordmark PNGs in /public/images (for aspect ratio). */
const productImageSize: Record<string, { width: number; height: number }> = {
  ontuition: { width: 828, height: 238 },
  oncard: { width: 666, height: 238 },
  ontime: { width: 667, height: 252 },
  jurnal: { width: 467, height: 206 },
  spmb: { width: 488, height: 214 },
};

/**
 * Node positions on a pentagon around the QRION core, expressed as container
 * percentages. Order matches `products` (Ontuition → SPMB).
 */
const nodePositions = [
  { left: 50, top: 8 },
  { left: 84.2, top: 38.9 },
  { left: 71.2, top: 79.1 },
  { left: 28.8, top: 79.1 },
  { left: 15.8, top: 38.9 },
] as const;

function ProductNode({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  const product = products[index];
  const size = productImageSize[product.slug];

  return (
    <Link
      href={`/produk/${product.slug}`}
      className={cn(
        "group flex w-[168px] flex-col gap-2 rounded-xl border border-border bg-background p-3.5 transition-colors duration-300 xl:w-[190px] xl:p-4",
        product.accent.ring,
        className,
      )}
    >
      <span className="flex h-8 items-center">
        <Image
          src={`/images/${product.slug}.png`}
          alt={product.name}
          width={size.width}
          height={size.height}
          className="h-6 w-auto object-contain xl:h-7"
        />
      </span>
      <span className="text-[12px] leading-snug text-muted-foreground">
        {product.category}
      </span>
    </Link>
  );
}

export function EcosystemDiagram() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-14">
      {/* ------------------------------- Desktop ------------------------------ */}
      <div className="relative hidden lg:block">
        <div
          className="relative mx-auto h-[480px] w-full max-w-5xl xl:h-[520px]"
          role="group"
          aria-label="Diagram ekosistem QRION"
        >
          {/* Connection lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {nodePositions.map((position, index) => (
              <motion.line
                key={`${position.left}-${position.top}`}
                x1={50}
                y1={50}
                x2={position.left}
                y2={position.top}
                stroke={index === 0 ? "var(--brand)" : "var(--qrion-green)"}
                strokeOpacity={index === 0 ? 0.75 : 0.4}
                strokeWidth={index === 0 ? 1.75 : 1.25}
                strokeDasharray="4 5"
                vectorEffect="non-scaling-stroke"
                initial={prefersReducedMotion ? undefined : { pathLength: 0 }}
                whileInView={
                  prefersReducedMotion ? undefined : { pathLength: 1 }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + index * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-mint-medium/80 xl:size-[280px]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-mint-medium/70 xl:size-[440px]"
          />

          {/* QRION core */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            initial={
              prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92 }
            }
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-indigo-dark bg-brand-indigo-dark px-8 py-6 shadow-[0_8px_30px_rgba(48,46,89,0.18)]">
              <span className="flex h-11 items-center justify-center rounded-xl bg-white px-5">
                <Image
                  src="/images/qrion-logo2.png"
                  alt="QRION"
                  width={109}
                  height={40}
                  className="h-6 w-auto object-contain"
                />
              </span>
              <span className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-white/65">
                Ekosistem Terintegrasi
              </span>
            </div>
          </motion.div>

          {/* Product nodes */}
          {nodePositions.map((position, index) => (
            <motion.div
              key={`node-${index}`}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${position.left}%`, top: `${position.top}%` }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.55,
                delay: 0.3 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductNode index={index} />
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Pilih modul yang dibutuhkan, lalu hubungkan semuanya melalui satu
          ekosistem.
        </p>
      </div>

      {/* ------------------------------- Mobile ------------------------------- */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-brand-indigo-dark p-6">
          <span className="flex h-11 items-center justify-center rounded-xl bg-white px-5">
            <Image
              src="/images/qrion-logo2.png"
              alt="QRION"
              width={109}
              height={40}
              className="h-6 w-auto object-contain"
            />
          </span>
          <span className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-white/65">
            Ekosistem Terintegrasi
          </span>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto h-8 w-px bg-gradient-to-b from-brand-mint-medium to-brand/50"
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {products.map((product) => {
            const size = productImageSize[product.slug];
            return (
              <li key={product.slug}>
                <Link
                  href={`/produk/${product.slug}`}
                  className="flex h-full flex-col gap-2 rounded-xl border border-border bg-background p-4 transition-colors hover:border-brand-mint-medium hover:bg-soft active:bg-soft"
                >
                  <span className="flex h-7 items-center">
                    <Image
                      src={`/images/${product.slug}.png`}
                      alt={product.name}
                      width={size.width}
                      height={size.height}
                      className="h-6 w-auto object-contain"
                    />
                  </span>
                  <span className="text-[13px] leading-snug text-muted-foreground">
                    {product.tagline}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/produk"
          className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-lg text-sm font-medium text-brand"
        >
          Lihat semua produk QRION
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  );
}
