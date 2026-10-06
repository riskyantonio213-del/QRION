"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import {
  Check,
  CreditCard,
  GraduationCap,
  MessagesSquare,
  ScanFace,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import TechText from "@/components/tech-text";
import { dashboardSection, hero } from "@/data/home";

/**
 * Hero stage berlapis (konsep parallax ala FintechX Framer template):
 *
 *   1.  bg-hero3.png  — latar paling belakang, parallax lambat
 *   1b. Awan          — 3 gambar dengan kecepatan parallax berbeda
 *   2.  Konten hero   — judul, highlight, CTA
 *   3.  Dashboard     — mulai kecil menimpa hero, lalu turun + membesar
 *   3b. Feature cards — keluar dari belakang dashboard setelah scroll
 *   4.  bg-hero4.avif — rumput foreground, turun + membesar lebih cepat,
 *                       lalu memudar
 */

/** Rentang progress scroll (0–1) dan nilai awal → akhir tiap layer. */
const SCROLL = {
  bgBack: {
    range: [0, 1],
    y: ["0%", "32%"],
  },

  dashboard: {
    range: [0, 0.55],
    scale: [0.644, 1],
  },
} as const;

/** Tinggi hero (px) — stage minimal setinggi ini. */
const STAGE_H = 1600;

/**
 * Posisi awal rumput.
 */
const GRASS_BOTTOM_SVH = 140;
const GRASS_BOTTOM_REM = 16;

/**
 * Rumput foreground.
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
 * Awan — posisi/kecepatan/ukuran bervariasi (random-terlihat), drift kanan → kiri
 * via CSS `qrion-cloud-drift`. `top`/`height` memakai svh supaya band aman di
 * atas badge/judul hero ikut skala viewport (layer = 115svh dari atas stage,
 * stage sendiri mulai -76px di bawah navbar).
 */
const CLOUDS = [
  {
    id: "c1",
    src: "/images/awan2.avif",
    width: 1024,
    height: 1024,
    top: "-4svh",
    size: "15svh",
    duration: 52,
    delay: -8,
    opacity: 0.95,
    bob: "9s",
  },
  {
    id: "c2",
    src: "/images/awan1.avif",
    width: 1024,
    height: 1024,
    top: "5svh",
    size: "12svh",
    duration: 68,
    delay: -34,
    opacity: 0.8,
    bob: "11s",
  },
  {
    id: "c3",
    src: "/images/awan3.avif",
    width: 1024,
    height: 1024,
    top: "1svh",
    size: "9svh",
    duration: 44,
    delay: -14,
    opacity: 0.9,
    bob: "7s",
  },
  {
    id: "c4",
    src: "/images/awan1.avif",
    width: 3024,
    height: 3024,
    top: "-7svh",
    size: "16svh",
    duration: 76,
    delay: -55,
    opacity: 0.7,
    bob: "12s",
  },
  {
    id: "c5",
    src: "/images/awan2.avif",
    width: 3024,
    height: 3024,
    top: "8svh",
    size: "10svh",
    duration: 58,
    delay: -47,
    opacity: 0.85,
    bob: "10s",
  },
  {
    id: "c6",
    src: "/images/awan3.avif",
    width: 3024,
    height: 3024,
    top: "0svh",
    size: "8svh",
    duration: 40,
    delay: -26,
    opacity: 0.75,
    bob: "8s",
  },
] as const;

/** Konfigurasi efek TechText untuk headline hero (dua baris). */
const HEADLINE_TECH_STYLE = {
  fontWeight: 700,
  fontSize: 150,
  reveal: "letter",
  dashLength: 4,
  dashGap: 1,
  specks: 15,
  fontFamily: "",
  color: "#302E59",
  borderColor: "#ffffff",
  accentColor: "#ffffff",
  letterSpacing: -0.01,
  reach: 200,
  softness: 0.7,
  strokeWidth: 3.5,
  speed: 1,
  lineStyle: "dashed",
  selection: true,
  labels: true,
  draggable: true,
  sweep: false,
  pad: 500,
} as const;

/**
 * Tinggi/lebar viewport.
 */
const subscribeVH = (cb: () => void) => {
  window.addEventListener("resize", cb);

  return () => {
    window.removeEventListener("resize", cb);
  };
};

const getVH = () => window.innerHeight;

const subscribeVW = (cb: () => void) => {
  window.addEventListener("resize", cb);

  return () => {
    window.removeEventListener("resize", cb);
  };
};

const getVW = () => window.innerWidth;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* =========================================================
 * FEATURE CARD
 * ======================================================= */

type DashboardFeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBoxClassName?: string;
  iconClassName?: string;
};

function DashboardFeatureCard({
  icon: Icon,
  title,
  description,
  iconBoxClassName = "",
  iconClassName = "",
}: DashboardFeatureCardProps) {
  return (
    <div
      className="
        flex
        min-h-[112px]
        w-[265px]
        items-center
        gap-4
        rounded-[30px]
        border
        border-white/80
        bg-white/95
        px-5
        py-5
        text-left
        shadow-[0_22px_65px_rgba(15,23,42,0.18)]
        backdrop-blur-xl
      "
    >
      {/* ICON */}
      <div
        className={`
          flex
          h-[58px]
          w-[58px]
          shrink-0
          items-center
          justify-center
          rounded-[18px]
          ${iconBoxClassName}
        `}
      >
        <Icon
          aria-hidden="true"
          strokeWidth={2.25}
          className={`h-8 w-8 ${iconClassName}`}
        />
      </div>

      {/* TEXT */}
      <div className="min-w-0">
        <p
          className="
            text-[16px]
            font-bold
            leading-[1.1]
            text-slate-800
          "
        >
          {title}
        </p>

        <p
          className="
            mt-2
            text-[13px]
            leading-[1.3]
            text-slate-600
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
 * HERO
 * ======================================================= */

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const dashImgRef = useRef<HTMLImageElement>(null);

  const prefersReducedMotion = useReducedMotion() ?? false;

  const vh = useSyncExternalStore(
    subscribeVH,
    getVH,
    () => 900,
  );

  const vw = useSyncExternalStore(
    subscribeVW,
    getVW,
    () => 1440,
  );

  // Mobile (< sm) = layout rapat, SEMUA efek scroll mati.
  const isMobile = vw < 640;

  const { scrollYProgress, scrollY } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Efek scroll dimatikan jika reduced-motion ATAU mobile (< lg / 1024px)
  // supaya tidak ada transform yang ditulis tiap frame saat scroll di HP.
  const disabled =
    prefersReducedMotion || vw < 1024;

  const pick = <T,>(
    from: T,
    to: T,
  ): [T, T] =>
    disabled
      ? [from, from]
      : [from, to];

  /* =======================================================
   * BACKGROUND
   * ===================================================== */

  const bgBackY = useTransform(
    scrollYProgress,
    [...SCROLL.bgBack.range],
    pick<string>(
      SCROLL.bgBack.y[0],
      SCROLL.bgBack.y[1],
    ),
  );

  /* =======================================================
   * GRASS
   * ===================================================== */

  const grassDrop = Math.max(
    0,
    STAGE_H -
    (
      vh * (GRASS_BOTTOM_SVH / 100) +
      GRASS_BOTTOM_REM
    ),
  );

  const bgFrontY = useTransform(
    scrollY,
    [
      GRASS.moveStart,
      GRASS.moveEnd,
    ],
    pick<string>(
      "0px",
      `${grassDrop + GRASS.sinkExtra}px`,
    ),
  );

  const bgFrontScale = useTransform(
    scrollY,
    [
      GRASS.growStart,
      GRASS.growEnd,
    ],
    pick<number>(
      1,
      GRASS.scale,
    ),
  );

  const bgFrontOpacity = useTransform(
    scrollY,
    [
      GRASS.fadeStart,
      GRASS.fadeEnd,
    ],
    pick<number>(
      1,
      0,
    ),
    {
      clamp: false,
    },
  );

  /* =======================================================
   * DASHBOARD SCALE
   * ===================================================== */

  const dashScale = useTransform(
    scrollYProgress,
    [...SCROLL.dashboard.range],
    pick<number>(
      isMobile
        ? 1
        : SCROLL.dashboard.scale[0],

      SCROLL.dashboard.scale[1],
    ),
  );

  /* =======================================================
   * FEATURE CARDS
   *
   * Tidak ada opacity / fade.
   *
   * Saat awal:
   * card digeser masuk ke belakang dashboard.
   *
   * Setelah scroll:
   * card keluar ke posisi final.
   *
   * Final card sengaja dibuat lebih jauh dari dashboard.
   * ===================================================== */

  const leftCardsX = useTransform(
    scrollYProgress,

    [
      0,
      0.025,
      0.14,
    ],

    disabled
      ? [
        "0px",
        "0px",
        "0px",
      ]
      : [
        "310px",
        "310px",
        "0px",
      ],
  );

  const rightCardsX = useTransform(
    scrollYProgress,

    [
      0,
      0.025,
      0.14,
    ],

    disabled
      ? [
        "0px",
        "0px",
        "0px",
      ]
      : [
        "-310px",
        "-310px",
        "0px",
      ],
  );

  /* =======================================================
   * DASHBOARD POSITION
   * ===================================================== */

  // Posisi dashboard TETAP (tanpa gerak y):
  // translate pas-kan bagian bawah gambar di awal
  // agar PAS dengan batas bawah layar.
  useIsomorphicLayoutEffect(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    const img = dashImgRef.current;

    if (
      !stage ||
      !layer ||
      !img
    ) {
      return;
    }

    if (isMobile) {
      layer.style.removeProperty(
        "translate",
      );

      return;
    }

    const apply = () => {
      layer.style.removeProperty(
        "translate",
      );

      const stageDoc =
        stage.getBoundingClientRect().top +
        window.scrollY;

      let top = 0;

      let el: HTMLElement | null =
        img;

      while (
        el &&
        el !== stage
      ) {
        top += el.offsetTop;

        el =
          el.offsetParent as
          | HTMLElement
          | null;
      }

      const imgH =
        img.offsetHeight || 1;

      const scale0 =
        SCROLL.dashboard.scale[0];

      const bottom0 =
        stageDoc +
        top +
        scale0 * imgH;

      const delta =
        window.innerHeight -
        bottom0;

      layer.style.setProperty(
        "translate",
        `0 ${delta}px`,
        "important",
      );
    };

    apply();

    window.addEventListener(
      "resize",
      apply,
    );

    return () => {
      window.removeEventListener(
        "resize",
        apply,
      );
    };
  }, [isMobile]);

  return (
    <div
      ref={stageRef}
      className="
        relative
        isolate
        -mt-[76px]
        min-h-svh
        overflow-hidden
        bg-background
        pb-[10svh]
        pt-[76px]
        sm:min-h-[1400px]
        lg:-mt-[84px]
        lg:pt-[84px]
      "
    >
      {/* ===================================================
       * LAYER 1
       * BACKGROUND
       * ================================================= */}

      <motion.div
        aria-hidden="true"

        // Logic asli tetap:
        // style={{ y: bgBackY }}

        className="
          absolute
          inset-x-0
          -top-[76px]
          z-0
          h-[115svh]
          overflow-hidden
          lg:-top-[84px]
        "
      >
        <Image
          src="/images/bg-hero7.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        {/* Vignette — mobile */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            bg-gradient-to-b
            from-transparent
            via-background
            to-background
            sm:hidden
          "
        />

        {/* Vignette — desktop */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            hidden
            bg-gradient-to-b
            from-transparent
            via-background
            to-background
            sm:bottom-auto
            sm:mt-138
            sm:top-1/2
            sm:-translate-y-1/2
            sm:block
          "
        />
      </motion.div>

      {/* ===================================================
       * LAYER 1B
       * CLOUDS — drift kanan → kiri, looping mulus
       * ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-20
          z-[5]
          h-[315svh]
          overflow-hidden
        "
      >
        {CLOUDS.map((cloud) => (
          <div
            key={cloud.id}
            className="qrion-cloud absolute"
            style={{
              top: cloud.top,
              height: cloud.size,
              opacity: cloud.opacity,
              animationDuration: `${cloud.duration}s`,
              animationDelay: `${cloud.delay}s`,
            }}
          >
            <Image
              src={cloud.src}
              alt=""
              width={cloud.width}
              height={cloud.height}
              className="block h-full w-auto"
              style={{ "--cloud-bob": cloud.bob } as CSSProperties}
            />
          </div>
        ))}
      </div>

      {/* ===================================================
       * LAYER 2
       * HERO
       * ================================================= */}

      <section
        aria-labelledby="hero-heading"
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          px-6
          pb-2
          pt-6
          text-center
          sm:min-h-svh
          sm:px-12
          sm:pb-[50svh]
          sm:pt-0
        "
      >
        <div className="mx-auto w-full max-w-5xl">
          <span
            className="
              inline-block
              rounded-full
              bg-background/80
              px-3
              py-1
              text-sm
              font-medium
              text-foreground
              shadow-sm
              backdrop-blur-sm
            "
          >
            QRION • {hero.eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="-mx-6 mt-6 w-[calc(100%_+_3rem)] sm:mx-0 sm:w-full"
          >
            <span className="sr-only ">
              {hero.headline} {hero.headline2}
            </span>

            <span
              aria-hidden="true"
              className="block h-14 w-full sm:h-20 lg:h-28"
            >
              <TechText text={hero.headline} {...HEADLINE_TECH_STYLE} />
            </span>

            <span
              aria-hidden="true"
              className="block h-14 w-full sm:h-20 lg:h-28"
            >
              <TechText text={hero.headline2} {...HEADLINE_TECH_STYLE} />
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-lg
              font-semibold
              text-brand-light
            "
          >
            {hero.highlight}
          </p>

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              sm:mt-14
            "
          >
            <Link
              href="/live-preview"
              className="btn"
              aria-label="Coba Live Preview"
            >
              <strong>Coba Live Preview</strong>

              <div id="container-stars">
                <div id="stars" />
              </div>

              <div id="glow">
                <div className="circle" />
                <div className="circle" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
       * LAYER 3
       * DASHBOARD + CARDS
       * ================================================= */}

      <motion.div
        ref={layerRef}
        style={{
          scale: dashScale,
        }}
        className="
          relative
          z-20
          mx-auto
          mt-6
          w-full
          max-w-[1124px]
          origin-top
          sm:-mt-[50svh]
        "
      >
        {/* =================================================
         * LEFT TOP
         *
         * Outer motion:
         * scroll keluar + floating.
         *
         * Inner div:
         * static rotate.
         * =============================================== */}

        <motion.div
          style={{
            x: leftCardsX,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                y: [
                  0,
                  -8,
                  0,
                  8,
                  0,
                ],
              }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                y: {
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
          }
          className="
            pointer-events-none
            absolute
            left-[-275px]
            top-[29%]
            z-0
            hidden
            xl:block
          "
        >
          <div className="rotate-[5deg]">
            <DashboardFeatureCard
              icon={ScanFace}
              title="Absensi"
              description="Lebih mudah dengan wajah"
              iconBoxClassName="bg-blue-50"
              iconClassName="text-blue-500"
            />
          </div>
        </motion.div>

        {/* =================================================
         * LEFT BOTTOM
         * =============================================== */}

        <motion.div
          style={{
            x: leftCardsX,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                y: [
                  0,
                  7,
                  0,
                  -7,
                  0,
                ],
              }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                y: {
                  duration: 7.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                },
              }
          }
          className="
            pointer-events-none
            absolute
            left-[-285px]
            top-[51%]
            z-0
            hidden
            xl:block
          "
        >
          <div className="rotate-[3deg]">
            <DashboardFeatureCard
              icon={CreditCard}
              title="Pembayaran"
              description="Non-tunai di kantin sekolah"
              iconBoxClassName="bg-emerald-50"
              iconClassName="text-emerald-500"
            />
          </div>
        </motion.div>

        {/* =================================================
         * RIGHT TOP
         * =============================================== */}

        <motion.div
          style={{
            x: rightCardsX,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                y: [
                  0,
                  -7,
                  0,
                  7,
                  0,
                ],
              }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }
          }
          className="
            pointer-events-none
            absolute
            right-[-275px]
            top-[29%]
            z-0
            hidden
            xl:block
          "
        >
          <div className="-rotate-[5deg]">
            <DashboardFeatureCard
              icon={GraduationCap}
              title="Akademik"
              description="Nilai & rapor dalam satu sistem"
              iconBoxClassName="bg-blue-50"
              iconClassName="text-blue-600"
            />
          </div>
        </motion.div>

        {/* =================================================
         * RIGHT BOTTOM
         * =============================================== */}

        <motion.div
          style={{
            x: rightCardsX,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                y: [
                  0,
                  8,
                  0,
                  -8,
                  0,
                ],
              }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                y: {
                  duration: 7.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9,
                },
              }
          }
          className="
            pointer-events-none
            absolute
            right-[-285px]
            top-[51%]
            z-0
            hidden
            xl:block
          "
        >
          <div className="-rotate-[3deg]">
            <DashboardFeatureCard
              icon={MessagesSquare}
              title="Komunikasi"
              description="Sekolah, orang tua dan siswa terhubung"
              iconBoxClassName="bg-sky-50"
              iconClassName="text-sky-500"
            />
          </div>
        </motion.div>

        {/* =================================================
         * DASHBOARD
         *
         * z-10 membuat card berada di belakang dashboard
         * ketika posisi awal.
         * =============================================== */}

        <div className="relative z-10">
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
                src="/images/onboard.png"
                alt="Dashboard ONBOARD QRION"
                width={1280}
                height={703}
                priority
                className="
                  h-auto
                  w-full
                  rounded-2xl
                  shadow-[0_24px_60px_rgba(48,46,89,0.18)]
                "
              />
            </Reveal>

            {/* Logic lama */}
            {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {dashboardSection.bullets.map((bullet, index) => (
                <Reveal
                  key={bullet}
                  delay={index * 0.07}
                >
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
        </div>
      </motion.div>

      {/* ===================================================
       * LAYER 4
       * GRASS
       * ================================================= */}

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
        className="
          pointer-events-none
          absolute
          inset-x-0
          z-30
          hidden
          sm:block
        "
      >
        <Image
          src="/images/bg-hero4.avif"
          alt=""
          width={1960}
          height={767}
          priority
          className="h-auto w-full"
        />
      </motion.div>
    </div>
  );
}