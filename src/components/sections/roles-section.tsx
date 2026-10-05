"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { roles } from "@/data/home";

/* =========================================================
 * VISUAL CONFIG
 *
 * Ganti path image sesuai file yang kamu punya di /public.
 * ======================================================= */

const ROLE_VISUALS: Record<
  string,
  {
    image: string;
    highlight: string;
    subHighlight: string;
    theme: "green" | "blue";
  }
> = {
  "Manajemen Sekolah": {
    image: "/UseCase/kepsek.png",
    highlight: "Data Real-time",
    subHighlight: "Kontrol sekolah di satu layar",
    theme: "green",
  },

  Administrator: {
    image: "/UseCase/admin.png",
    highlight: "Tertata",
    subHighlight: "Administrasi lebih terstruktur",
    theme: "green",
  },

  Guru: {
    image: "/UseCase/guru.png",
    highlight: "+Efisien",
    subHighlight: "Lebih banyak waktu untuk mengajar",
    theme: "blue",
  },

  "Orang Tua": {
    image: "/UseCase/ortu.png",
    highlight: "Semua Terhubung",
    subHighlight: "Lebih dekat dengan sekolah",
    theme: "green",
  },

  Siswa: {
    image: "/UseCase/murid.png",
    highlight: "Lebih Mandiri",
    subHighlight: "Semangat belajar setiap hari",
    theme: "blue",
  },
};

/* =========================================================
 * INFO CARD
 * ======================================================= */

function RoleInfoCard({
  role,
}: {
  role: (typeof roles)[number];
}) {
  const Icon = role.icon;

  const visual =
    ROLE_VISUALS[role.title] ??
    ({
      image: "/images/roles/default.jpg",
      highlight: "Terintegrasi",
      subHighlight: "Semua dalam satu ekosistem",
      theme: "blue",
    } as const);

  const isGreen = visual.theme === "green";

  return (
    <article
      className="
        relative
        h-[430px]
        w-[300px]
        shrink-0
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200/70
        bg-white
        shadow-[0_16px_50px_rgba(15,23,42,0.08)]
        sm:w-[315px]
      "
    >
      {/* ===============================================
       * CONTENT ATAS
       * ============================================= */}

      <div className="relative z-10 p-7">
        {/* ICON */}
        <div
          className={`
            flex
            size-[58px]
            items-center
            justify-center
            rounded-[20px]

            ${isGreen
              ? "bg-emerald-50 text-emerald-600"
              : "bg-sky-50 text-sky-600"
            }
          `}
        >
          <Icon
            aria-hidden="true"
            className="size-7"
            strokeWidth={2.2}
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-6
            text-[25px]
            font-bold
            tracking-[-0.03em]
            text-slate-950
          "
        >
          {role.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3
            text-[15px]
            leading-[1.6]
            text-slate-600
          "
        >
          {role.description}
        </p>
      </div>

      {/* ===============================================
       * DECORATION / FAKE UI
       * ============================================= */}

      <div
        className="
          absolute
          bottom-[95px]
          left-1/2
          w-[78%]
          -translate-x-1/2
        "
      >
        <div
          className="
            rounded-[20px]
            border
            border-white/80
            bg-white/60
            p-4
            shadow-[0_12px_35px_rgba(15,23,42,0.06)]
            backdrop-blur-md
          "
        >
          <div className="flex items-center gap-3">
            <div
              className={`
                size-10
                rounded-xl

                ${isGreen
                  ? "bg-emerald-100"
                  : "bg-sky-100"
                }
              `}
            />

            <div className="flex-1 space-y-2">
              <div className="h-2 w-[75%] rounded-full bg-slate-200/80" />
              <div className="h-2 w-[50%] rounded-full bg-slate-100" />
            </div>

            <div
              className={`
                size-5
                rounded-full

                ${isGreen
                  ? "bg-emerald-400"
                  : "bg-sky-400"
                }
              `}
            />
          </div>
        </div>
      </div>

      {/* ===============================================
       * BOTTOM GRADIENT
       * ============================================= */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          h-[145px]

          ${isGreen
            ? "bg-gradient-to-t from-emerald-100 via-emerald-50/90 to-transparent"
            : "bg-gradient-to-t from-sky-100 via-sky-50/90 to-transparent"
          }
        `}
      />

      {/* Decorative wave */}
      <div
        className={`
          absolute
          -bottom-14
          -left-12
          h-[150px]
          w-[390px]
          rotate-[3deg]
          rounded-[50%]

          ${isGreen
            ? "bg-emerald-200/50"
            : "bg-sky-200/50"
          }
        `}
      />

      {/* ===============================================
       * BOTTOM TEXT
       * ============================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          px-7
          pb-6
        "
      >
        <p
          className="
            text-[21px]
            font-bold
            tracking-[-0.03em]
            text-slate-900
          "
        >
          {visual.highlight}
        </p>

        <p
          className="
            mt-1
            text-[13px]
            text-slate-600
          "
        >
          {visual.subHighlight}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
 * IMAGE CARD
 * ======================================================= */

function RoleImageCard({
  role,
}: {
  role: (typeof roles)[number];
}) {
  const visual =
    ROLE_VISUALS[role.title] ??
    ROLE_VISUALS.Guru;

  return (
    <article
      className="
        relative
        h-[430px]
        w-[300px]
        shrink-0
        overflow-hidden
        rounded-[28px]
        bg-slate-100
        shadow-[0_16px_50px_rgba(15,23,42,0.10)]
        sm:w-[315px]
      "
    >
      <Image
        src={visual.image}
        alt={`${role.title} menggunakan QRION`}
        fill
        sizes="315px"
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-[1.03]
        "
      />

      {/* Sedikit overlay bawah */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[30%]
          bg-gradient-to-t
          from-black/10
          to-transparent
        "
      />
    </article>
  );
}

/* =========================================================
 * SATU GRUP LOOP
 *
 * Struktur:
 *
 * INFO Kepala
 * FOTO Kepala
 * INFO Guru
 * FOTO Guru
 * INFO Orang Tua
 * FOTO Orang Tua
 * INFO Siswa
 * FOTO Siswa
 *
 * ======================================================= */

function RolesLoopGroup({
  groupIndex,
}: {
  groupIndex: number;
}) {
  return (
    <div
      className="
        flex
        shrink-0
        gap-4
        pr-4
      "
    >
      {roles.map((role, index) => (
        <div
          key={`${groupIndex}-${role.title}-${index}`}
          className="flex shrink-0 gap-4"
        >
          <RoleInfoCard role={role} />
          <RoleImageCard role={role} />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
 * ROLES SECTION
 * ======================================================= */

export function RolesSection() {
  const prefersReducedMotion =
    useReducedMotion() ?? false;

  return (
    <Section
      id="peran"
      background="soft"
      aria-labelledby="peran-heading"
      className="relative overflow-x-clip"
    >
      {/* ===================================================
       * BACKGROUND GLOW
       * ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[10%]
            top-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-emerald-100/30
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-[10%]
            top-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-sky-100/30
            blur-[130px]
          "
        />
      </div>

      {/* ===================================================
       * HEADER
       * ================================================= */}

      <Reveal>
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* EYEBROW */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              bg-emerald-50
              px-5
              py-2
              text-[13px]
              font-semibold
              text-emerald-800
            "
          >
            Use case
          </div>

          {/* TITLE */}
          <h2
            id="peran-heading"
            className="
              mt-6
              text-4xl
              font-extrabold
              tracking-[-0.04em]
              text-slate-950
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Untuk siapa QRION dirancang
          </h2>
        </div>
      </Reveal>

      {/* ===================================================
       * INFINITE MARQUEE
       *
       * left-1/2 + w-screen membuat carousel keluar dari
       * container Section dan memenuhi seluruh viewport.
       *
       * Ada DUA group identik.
       *
       * track bergerak 0 → -50%.
       *
       * Saat group pertama keluar,
       * group kedua sudah berada tepat di tempatnya.
       *
       * Hasil:
       * tidak ada snap / reset yang terlihat.
       * ================================================= */}

      <div
        className="
          relative
          left-1/2
          mt-14
          w-screen
          -translate-x-1/2
          overflow-hidden
        "
      >
        <motion.div
          className="
            flex
            w-max
            items-stretch
          "
          style={{
            willChange: "transform",
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                x: ["0%", "-50%"],
              }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                x: {
                  duration: 38,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }
          }
        >
          {/* LOOP 1 */}
          <RolesLoopGroup groupIndex={0} />

          {/* LOOP 2 — clone untuk seamless loop */}
          <RolesLoopGroup groupIndex={1} />
        </motion.div>
      </div>

    </Section>
  );
}