"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { dashboardSection, hero } from "@/data/home";

/**
 * Hero stage berlapis (konsep parallax ala FintechX Framer template):
 *
 *   1.  bg-hero3.png  — latar paling belakang, parallax lambat
 *   1b. Awan          — 3 gambar dengan kecepatan parallax berbeda
 *   2.  Konten hero   — judul, highlight, CTA
 *   3.  Dashboard     — mulai kecil menimpa hero, lalu turun + membesar
 *   4.  bg-hero4.avif — rumput foreground, turun + membesar lebih cepat,
 *                       lalu memudar
 *
 * Semua angka scroll ada di SCROLL & GRASS di bawah supaya gampang di-tuning. Catatan: nilai-nilai ini BELUM dicocokkan dengan template Framer
 * asli (angka aslinya tidak bisa dibaca dari luar). Ambil nilai transform dari
 * DevTools situs aslinya, lalu ganti di sini.
 */

/** Rentang progress scroll (0–1) dan nilai awal → akhir tiap layer. */
const SCROLL = {
  bgBack: { range: [0, 1], y: ["0%", "32%"] },
  dashboard: {
    range: [0, 0.35],
    y: [-40, 0],
    scale: [0.644, 1],
  },
} as const;

/**
 * ==== Rumput depan (bg-hero4) — atur kapan turun & kapan hilang di sini ====
 * Nilainya posisi scroll dalam PIXEL dari atas halaman:
 *
 *   moveStart → moveEnd : rumput TURUN (y) + membesar (scale)
 *   fadeStart → fadeEnd : rumput HILANG (opacity 1 → 0; 0 = tak terlihat)
 *
 * Contoh: biarkan tetap terlihat sampai scroll 800px → fadeEnd: 800.
 * Turun lebih awal → kecilkan moveStart. Belum perlu turun → moveStart besar.
 */
const GRASS = {
  moveStart: 0,
  moveEnd: 737,
  fadeStart: 649,
  fadeEnd: 700,
  y: "80%",
  scale: 5.3,
} as const;

/**
 * Awan: `travel` = seberapa jauh turun (relatif tinggi elemen) selama scroll.
 * Makin besar = makin terasa dekat. Kosongkan array ini kalau belum punya
 * aset awan.
 */
// const CLOUDS = [
//   {
//     src: "/images/cloud-1.png",
//     width: 1185,
//     height: 689,
//     travel: "18%",
//     className: "absolute -left-[8%] top-[14%] w-[42%]",
//   },
//   {
//     src: "/images/cloud-2.png",
//     width: 1186,
//     height: 548,
//     travel: "26%",
//     className: "absolute -right-[10%] top-[22%] w-[38%]",
//   },
//   {
//     src: "/images/cloud-3.png",
//     width: 1192,
//     height: 714,
//     travel: "12%",
//     className: "absolute left-[30%] top-[48%] w-[34%]",
//   },
// ] as const;

// Komponen awan — aktifkan kembali bersama const CLOUDS di atas kalau asetnya
// sudah ada.
// type CloudProps = (typeof CLOUDS)[number] & {
//   progress: MotionValue<number>;
//   reduced: boolean;
// };
//
// function Cloud({ src, width, height, travel, className, progress, reduced }: CloudProps) {
//   const y = useTransform(progress, [0, 1], reduced ? ["0%", "0%"] : ["0%", travel]);
//
//   return (
//     <motion.div style={{ y }} className={className}>
//       <Image src={src} alt="" width={width} height={height} className="h-auto w-full" />
//     </motion.div>
//   );
// }

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress, scrollY } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Jika user memilih reduced motion, semua nilai dikunci ke posisi awal.
  const pick = <T,>(from: T, to: T): [T, T] =>
    prefersReducedMotion ? [from, from] : [from, to];

  const bgBackY = useTransform(
    scrollYProgress,
    [...SCROLL.bgBack.range],
    pick<string>(SCROLL.bgBack.y[0], SCROLL.bgBack.y[1]),
  );

  // Rumput depan — dikontrol penuh lewat konstanta GRASS (satuan: pixel).
  const bgFrontY = useTransform(
    scrollY,
    [GRASS.moveStart, GRASS.moveEnd],
    pick<string>("0%", GRASS.y),
  );
  const bgFrontScale = useTransform(
    scrollY,
    [GRASS.moveStart, GRASS.moveEnd],
    pick<number>(1, GRASS.scale),
  );
  // clamp:false agar framer tidak memakai jalur "accelerate" (WAAPI) yang
  // tidak sinkron dengan scroll di framer-motion v13 — nilai di luar rentang
  // tetap di-clamp CSS ke 0/1 untuk opacity.
  const bgFrontOpacity = useTransform(
    scrollY,
    [GRASS.fadeStart, GRASS.fadeEnd],
    pick<number>(1, 0),
    { clamp: false },
  );

  const dashY = useTransform(
    scrollYProgress,
    [...SCROLL.dashboard.range],
    pick<number>(SCROLL.dashboard.y[0], SCROLL.dashboard.y[1]),
  );
  const dashScale = useTransform(
    scrollYProgress,
    [...SCROLL.dashboard.range],
    pick<number>(SCROLL.dashboard.scale[0], SCROLL.dashboard.scale[1]),
  );

  return (
    <div
      ref={stageRef}
      className="relative isolate -mt-[76px] overflow-hidden bg-background pb-[10svh] pt-[76px] lg:-mt-[84px] lg:pt-[84px]"
    >
      {/* Layer 1 — latar belakang (paling belakang); top negatif = gambar
          merambat ke balik navbar (kapsul Dynamic Island melayang di atasnya) */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgBackY }}
        className="absolute inset-x-0 -top-[76px] z-0 h-[115svh] overflow-hidden lg:-top-[84px]"
      >
        <Image
          src="/images/bg-hero5.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Vignette bawah — transisi lembut gambar → bg putih */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-background/60 to-background"
        />
      </motion.div>

      {/* Layer 1b — awan (di atas latar, di bawah konten hero) */}
      {/* {CLOUDS.length > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[115svh] overflow-hidden"
        >
          {CLOUDS.map((cloud) => (
            <Cloud
              key={cloud.src}
              {...cloud}
              progress={scrollYProgress}
              reduced={prefersReducedMotion}
            />
          ))}
        </div>
      )} */}

      {/* Layer 2 — konten hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 pb-[50svh] pt-0 text-center sm:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-background/80 px-3 py-1 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
            QRION • {hero.eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>

          <p className="mt-4 text-lg font-semibold text-brand-dark">
            {hero.highlight}
          </p>

          <div className="mt-14 flex items-center justify-center">
            <Link
              href="/live-preview"
              className="qbtn"
              aria-label="Coba Live Preview"
            >
              <span className="qbtn-fx" aria-hidden="true" />
              <span className="qbtn-fx qbtn-fx-bottom" aria-hidden="true" />
              <span className="qbtn-content">
                <span>Coba Live Preview</span>
                <svg
                  viewBox="0 0 1200 1200"
                  height={30}
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path fill="#fed3fe" d="m150 550h775v100h-775z" />
                  <path
                    fill="#fed3fe"
                    d="m710 935-70-70 265-265-265-265 70-70 335 335z"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Layer 3 — dashboard: mulai kecil (±683px), membesar ke 1124px saat scroll */}
      <motion.div
        style={{ y: dashY, scale: dashScale }}
        className="relative z-20 mx-auto -mt-[24svh] w-full max-w-[1124px] origin-top sm:-mt-[50svh]"
      >
        <Section
          id="dashboard"
          size="wide"
          containerClassName="max-w-[1980px]"
          background="none"
          padding="none"
        >
          <Reveal className="mt-0">
            <Image
              src="/images/onboard.jpeg"
              alt="Dashboard ONBOARD QRION"
              width={1280}
              height={703}
              priority
              className="aspect-[1060/1127] w-full rounded-2xl bg-background object-contain"
            />
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {dashboardSection.bullets.map((bullet, index) => (
              <Reveal key={bullet} delay={index * 0.07}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand"
                  />
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {bullet}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* Layer 4 — rumput foreground: turun, membesar, lalu menghilang saat scroll */}
      <motion.div
        aria-hidden="true"
        style={{
          y: bgFrontY,
          scale: bgFrontScale,
          opacity: bgFrontOpacity,
          bottom: "calc(100% - 150svh - 1rem)",
        }}
        className="pointer-events-none absolute inset-x-0 z-30"
      >
        <Image
          src="/images/bg-hero4.avif"
          alt=""
          width={1960}
          height={767}
          className="h-auto w-full"
        />
      </motion.div>
    </div>
  );
}
