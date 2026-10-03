"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from "react";
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
    range: [0, 0.55],
    scale: [0.644, 1],
  },
} as const;

/** Tinggi hero (px) — stage minimal setinggi ini. */
const STAGE_H = 1600;

/**
 * Posisi awal rumput: jarak dari atas stage = (GRASS_BOTTOM_SVH × viewport)
 * + 1rem. Nilai ini dipakai di 2 tempat (style bottom Layer 4 & hitungan
 * jarak turun) — ubah di sini saja.
 */
const GRASS_BOTTOM_SVH = 140;
const GRASS_BOTTOM_REM = 16;

/**
 * ==== Rumput depan (bg-hero4) — parallax tenggelam ke bawah ====
 * Rumput terus turun (sink) mengikuti scroll seperti parallax, sambil
 * membesar, lalu memudar. Semua angka satuan scroll dalam PIXEL:
 *
 *   [moveStart → moveEnd]   rumput TURUN terus (parallax) sampai `sinkExtra`
 *                           px lewat batas bawah hero → "tenggelam"
 *   [growStart → growEnd]   rumput membesar (tumpang tindih dgn turun)
 *   [fadeStart → fadeEnd]   rumput memudar (1 → 0)
 *
 * Jarak turun total = grassDrop (sampai tepat batas hero) + sinkExtra.
 */
const GRASS = {
  moveStart: 0,
  moveEnd: 737,
  sinkExtra: 1020,
  growStart: 100,
  growEnd: 649,
  fadeStart: 649,
  fadeEnd: 700,
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

/** Tinggi/lebar viewport (untuk SSR aman: default, disesuaikan setelah mount). */
const subscribeVH = (cb: () => void) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};
const getVH = () => window.innerHeight;
const subscribeVW = (cb: () => void) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};
const getVW = () => window.innerWidth;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const dashImgRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const vh = useSyncExternalStore(subscribeVH, getVH, () => 900);
  const vw = useSyncExternalStore(subscribeVW, getVW, () => 1440);
  // Mobile (< sm) = layout rapat, SEMUA efek scroll mati.
  const isMobile = vw < 640;

  const { scrollYProgress, scrollY } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Jika reduced motion ATAU mobile, semua efek dikunci ke posisi awal.
  const disabled = prefersReducedMotion || isMobile;
  const pick = <T,>(from: T, to: T): [T, T] =>
    disabled ? [from, from] : [from, to];

  const bgBackY = useTransform(
    scrollYProgress,
    [...SCROLL.bgBack.range],
    pick<string>(SCROLL.bgBack.y[0], SCROLL.bgBack.y[1]),
  );

  // Jarak turun rumput = dari posisi awalnya sampai tepat batas bawah hero
  // (STAGE_H). Negatif = posisi awal sudah lewat batas → 0.
  const grassDrop = Math.max(
    0,
    STAGE_H - (vh * (GRASS_BOTTOM_SVH / 100) + GRASS_BOTTOM_REM),
  );

  // Rumput depan — parallax: terus turun/tenggelam selama scroll.
  const bgFrontY = useTransform(
    scrollY,
    [GRASS.moveStart, GRASS.moveEnd],
    pick<string>("0px", `${grassDrop + GRASS.sinkExtra}px`),
  );
  // Membesar tumpang tindih dgn gerak turun.
  const bgFrontScale = useTransform(
    scrollY,
    [GRASS.growStart, GRASS.growEnd],
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

  const dashScale = useTransform(
    scrollYProgress,
    [...SCROLL.dashboard.range],
    pick<number>(
      isMobile ? 1 : SCROLL.dashboard.scale[0],
      SCROLL.dashboard.scale[1],
    ),
  );

  // Posisi dashboard TETAP (tanpa gerak y): translate pas-kan bagian bawah
  // gambar di awal (scale0) agar PAS dengan batas bawah layar.
  // Mobile: efek dimatikan, tanpa translate, ukuran natural.
  useIsomorphicLayoutEffect(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    const img = dashImgRef.current;
    if (!stage || !layer || !img) return;

    if (isMobile) {
      layer.style.removeProperty("translate");
      return;
    }

    const apply = () => {
      layer.style.removeProperty("translate");

      const stageDoc = stage.getBoundingClientRect().top + window.scrollY;
      let top = 0;
      let el: HTMLElement | null = img;
      while (el && el !== stage) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }

      const imgH = img.offsetHeight || 1;
      const scale0 = SCROLL.dashboard.scale[0];
      const bottom0 = stageDoc + top + scale0 * imgH;
      const delta = window.innerHeight - bottom0;
      layer.style.setProperty("translate", `0 ${delta}px`, "important");
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [isMobile]);

  return (
    <div
      ref={stageRef}
      className="relative isolate -mt-[76px] min-h-svh overflow-hidden bg-background pb-[10svh] pt-[76px] sm:min-h-[1600px] lg:-mt-[84px] lg:pt-[84px]"
    >
      
      {/* Layer 1 — latar belakang (paling belakang); top negatif = gambar
          merambat ke balik navbar (kapsul Dynamic Island melayang di atasnya) */}
      <motion.div
        aria-hidden="true"
        // style={{ y: bgBackY }}
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

        {/* Vignette — mobile: di bawah akhir hero; sm+: di tengah depan
            bg-hero5 (posisi/tinggi bebas diatur manual) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent via-background to-background sm:bottom-auto sm:mt-138 sm:top-1/2 sm:-translate-y-1/2"
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

      {/* Layer 2 — konten hero; mobile: rapat tanpa min-h (dashboard langsung
          di bawah teks), sm+: layout desktop (tengah + ruang tumpang tindih) */}
      <section
        aria-labelledby="hero-heading"
        className="relative z-10 flex flex-col items-center justify-center px-6 pb-2 pt-6 text-center sm:min-h-svh sm:px-12 sm:pb-[50svh] sm:pt-0"
      >
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-background/80 px-3 py-1 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
            QRION • {hero.eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.headline} <br/>
            {hero.headline2}
          </h1>

          <p className="mt-4 text-lg font-semibold text-brand-light">
            {hero.highlight} <br/> {hero.highlight2}
          </p>

          <div className="mt-6 flex items-center justify-center sm:mt-14">
  <Link
    href="/live-preview"
    className="group relative inline-flex items-center justify-between rounded-full bg-blue-600 px-6 py-3.5 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)]"
    aria-label="Coba Live Preview"
  >
    {/* Teks Tombol */}
    <span className="pr-6 font-medium tracking-wide">Coba Live Preview</span>

    {/* Lingkaran Putih Berisi Panah di Kanan */}
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 shadow-md transition-transform duration-300 group-hover:translate-x-1">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  </Link>
</div>
        </div>
        
      </section>

      {/* Layer 3 — dashboard: posisi tetap, membesar pelan (tanpa gerak y);
          mobile: langsung rapat di bawah CTA */}
      <motion.div
        ref={layerRef}
        style={{ scale: dashScale }}
        className="relative z-20 mx-auto mt-6 w-full max-w-[1124px] origin-top sm:-mt-[50svh]"
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
              ref={dashImgRef}
              src="/images/onboard.jpeg"
              alt="Dashboard ONBOARD QRION"
              width={1280}
              height={703}
              priority
              className="h-auto w-full rounded-2xl shadow-[0_24px_60px_rgba(48,46,89,0.18)]"
            />
          </Reveal>

          {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
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
          </div> */}
        </Section>
      </motion.div>

      {/* Layer 4 — rumput foreground: turun, membesar, lalu menghilang saat scroll */}
      <motion.div
        aria-hidden="true"
        style={{
          y: bgFrontY,
          scale: bgFrontScale,
          opacity: bgFrontOpacity,
          bottom: isMobile
            ? "0px"
            : `calc(100% - ${GRASS_BOTTOM_SVH}svh - ${GRASS_BOTTOM_REM}px)`,
        }}
        className="pointer-events-none absolute inset-x-0 z-30 hidden sm:block"
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
