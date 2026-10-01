"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OncardRipple } from "./oncard-ripple";

export function OncardHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const lineEls =
        linesRef.current?.querySelectorAll<HTMLElement>(".hero-line");
      const targets: (HTMLElement | null)[] = [
        badgeRef.current,
        paraRef.current,
        btnsRef.current,
        imgRef.current,
      ];
      gsap.set(
        targets.filter((t): t is HTMLElement => t !== null),
        { opacity: 0 },
      );
      if (lineEls) {
        gsap.set(lineEls, {
          opacity: 0,
          y: 45,
          rotateX: -25,
          transformPerspective: 1000,
        });
      }
      if (badgeRef.current) gsap.set(badgeRef.current, { y: 20, scale: 0.96 });
      if (paraRef.current) gsap.set(paraRef.current, { y: 20 });
      if (btnsRef.current) gsap.set(btnsRef.current, { y: 15 });
      if (imgRef.current)
        gsap.set(imgRef.current, { y: 45, x: 30, scale: 0.96 });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(badgeRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.55 })
        .to(
          lineEls ? Array.from(lineEls) : [],
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.08 },
          "-=0.25",
        )
        .to(paraRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
        .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(
          imgRef.current,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.65",
        );

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          y: -8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.1,
        });
      }
    }, section);

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (linesRef.current) {
        gsap.to(linesRef.current, {
          x: px * 5,
          y: py * 3,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          rotationY: px * 20,
          rotationX: py * -22,
          x: px * -14,
          y: py * -8,
          scale: 1.015,
          transformPerspective: 1400,
          transformStyle: "preserve-3d",
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };
    const onLeave = () => {
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          rotationX: 0,
          rotationY: 0,
          x: 0,
          y: -8,
          scale: 1,
          duration: 0.9,
          ease: "elastic.out(1, 0.55)",
          overwrite: "auto",
        });
      }
      if (linesRef.current) {
        gsap.to(linesRef.current, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[calc(100vh-80px)]
        w-full
        overflow-hidden
        text-slate-900
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-[1440px]
          items-center
          px-6
          py-20
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-8
            xl:gap-14
          "
        >
          <div className="relative z-20 max-w-[600px]">
            <div
              ref={badgeRef}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#33B77E]/30
                bg-white/80
                px-3.5
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                text-[#059669]
                shadow-[0_4px_20px_rgba(51,183,126,0.08)]
                backdrop-blur-md
                sm:text-[11px]
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#33B77E]
                  shadow-[0_0_0_4px_rgba(51,183,126,0.10)]
                "
              />
              Platform Keuangan Sekolah di Indonesia
            </div>
            <div
              ref={linesRef}
              className="
                mt-6
                space-y-0
              "
            >
              <div className="overflow-hidden ">
                <h1 className="hero-line text-[clamp(40px,4.5vw,68px)] font-extrabold leading-[1.02]  text-[#2EB77B]">
                  Kelola Tagihan
                </h1>
              </div>
              <div className="overflow-hidden ">
                <h1 className="hero-line text-[clamp(40px,4.5vw,68px)] font-extrabold leading-[1.02]  text-[#2EB77B]">
                  &amp; Pembayaran
                </h1>
              </div>
              <div className="overflow-hidden pt-1">
                <h1 className="hero-line text-[clamp(40px,4.5vw,68px)] font-extrabold leading-[1.02]  text-[#071A13]">
                  Sekolah Lebih
                </h1>
              </div>
              <div className="overflow-hidden ">
                <h1 className="hero-line text-[clamp(40px,4.5vw,68px)] font-extrabold leading-[1.02]  text-[#071A13]">
                  Rapi &amp; Otomatis
                </h1>
              </div>
            </div>
            <div
              ref={paraRef}
              className="
                mt-7
                max-w-[535px]
              "
            >
              <p
                className="
                  text-sm
                  leading-[1.75]
                  text-slate-500
                  sm:text-[15px]
                  lg:text-base
                "
              >
                Kelola pembayaran SPP, uang buku, dan laporan keuangan sekolah
                secara{" "}
                <span className="font-semibold text-slate-700">
                  otomatis &amp; real-time.
                </span>{" "}
                Terintegrasi dengan semua channel pembayaran &amp; QRIS Mobile.
              </p>
            </div>
            <div
              ref={btnsRef}
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <a
                href="https://api.whatsapp.com/send/?phone=6281262279950&text=Saya+tertarik%25+untuk+menggunakan+oncard+.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                type="button"
                className="
        group
        relative
        isolate
        inline-flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        bg-white/60
        backdrop-blur-xl
        font-bold
        uppercase
        leading-none
        tracking-[0.1em]
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        transition-[border-color,box-shadow,transform,background-color]
        duration-300
        hover:-translate-y-0.5
        hover:bg-white/70
        hover:shadow-[0_12px_35px_rgba(51,183,126,0.14)]
        active:translate-y-[1px]

        min-h-[52px] px-7 py-3.5 text-[12px] sm:px-8 sm:py-4

        border-slate-300/70 hover:border-[#33B77E]


                  group
                  inline-flex
                  h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#28C77B]
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(40,199,123,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#22B96F]
                  hover:shadow-[0_14px_30px_rgba(40,199,123,0.32)]


        !flex
        !box-border
      "
              >
                <OncardRipple />
                <span
                  className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-2
          whitespace-nowrap
        "
                  style={{ color: "rgb(51, 65, 85)" }}
                >
                  <svg
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.6 8.6 0 0 1-4.1-1L3 20l1.1-4.7A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 1 1 21 11.5Z" />
                    <path d="M8.5 8.5c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.1.1-.2.2-.1.4.3.6 1.1 1.5 1.8 1.9.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.3.2.6-.1.5-.4 1.1-.8 1.3-.4.3-1 .3-1.6.1-1-.3-2.2-1-3.1-1.9-.9-.9-1.7-2.1-2-3.1-.2-.7-.2-1.3.1-1.9Z" />
                  </svg>
                  Konsultasi Gratis
                </span>
              </a>
            </div>
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
                text-[11px]
                text-slate-400
              "
            >
              <span>Versi rilis terbaru: 21-08-2026</span>
              <span className="h-1 w-1 rounded-full bg-[#33B77E]" />
              <span>Sekolah Digital</span>
            </div>
          </div>
          <div
            ref={imgRef}
            className="
          relative
          flex
          w-full
          items-center
          justify-center
          lg:justify-end
          will-change-transform
        "
          >
            <div
              className="
                absolute
                bottom-[-25px]
                right-[4%]
                h-[120px]
                w-[75%]
                rounded-full
                bg-emerald-400/15
                blur-[55px]
              "
            />
            <div
              className="
          relative
          w-full
          max-w-[690px]
          overflow-visible
          rounded-[18px]
          border
          border-slate-200/80
          bg-white
          shadow-[0_30px_70px_rgba(15,23,42,0.12)]
          transition-shadow
          duration-300
          will-change-transform
        "
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="
                  flex
                  h-[44px]
                  items-center
                  gap-2
                  border-b
                  border-slate-100
                  bg-white
                  px-4
                "
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFCC4D]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#33C77B]" />
                <div
                  className="
                    ml-3
                    flex
                    h-[25px]
                    flex-1
                    items-center
                    rounded-full
                    border
                    border-slate-100
                    bg-slate-50
                    px-3
                    text-[8px]
                    text-slate-400
                  "
                >
                  <span className="mr-1 text-[7px]">🔒</span>
                  admin.oncard.qrion.id/dashboard
                </div>
              </div>
              <div className="bg-[#F7FAF9] p-3 sm:p-4">
                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-slate-100
                    bg-white
                    px-3
                    py-3
                    shadow-sm
                  "
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#33B77E]
                        text-white
                      "
                    >
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <rect x={3} y={3} width={7} height={7} rx={1} />
                        <rect x={14} y={3} width={7} height={7} rx={1} />
                        <rect x={3} y={14} width={7} height={7} rx={1} />
                        <rect x={14} y={14} width={7} height={7} rx={1} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-700">
                        Dashboard
                      </div>
                      <div className="text-[7px] text-slate-400">
                        Senin, 18 Nov 2025
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                      hidden
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-emerald-100
                      bg-white
                      px-3
                      py-1.5
                      text-[8px]
                      font-semibold
                      text-slate-600
                      shadow-sm
                      sm:flex
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                    Update Real-Time
                  </div>
                </div>
                <div
                  className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-2
                    sm:grid-cols-4
                  "
                >
                  <div
                    className="
        bg-slate-50
        rounded-lg
        border
        border-white
        p-2.5
      "
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-slate-100 text-slate-500
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-md
            text-[9px]
            font-bold
          "
                      >
                        ◉
                      </div>
                      <div className="min-w-0">
                        <div
                          className="
              text-slate-700
              text-[10px]
              font-extrabold
            "
                        >
                          Rp48jt
                        </div>
                        <div className="truncate text-[6px] text-slate-400">
                          Total Tagihan
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
        bg-emerald-50/70
        rounded-lg
        border
        border-white
        p-2.5
      "
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-emerald-100 text-emerald-500
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-md
            text-[9px]
            font-bold
          "
                      >
                        ✓
                      </div>
                      <div className="min-w-0">
                        <div
                          className="
              text-emerald-500
              text-[10px]
              font-extrabold
            "
                        >
                          Rp32jt
                        </div>
                        <div className="truncate text-[6px] text-slate-400">
                          Dibayar
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
        bg-amber-50
        rounded-lg
        border
        border-white
        p-2.5
      "
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-amber-100 text-amber-500
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-md
            text-[9px]
            font-bold
          "
                      >
                        ◷
                      </div>
                      <div className="min-w-0">
                        <div
                          className="
              text-amber-500
              text-[10px]
              font-extrabold
            "
                        >
                          Rp16jt
                        </div>
                        <div className="truncate text-[6px] text-slate-400">
                          Belum Lunas
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
        bg-red-50
        rounded-lg
        border
        border-white
        p-2.5
      "
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-red-100 text-red-500
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-md
            text-[9px]
            font-bold
          "
                      >
                        !
                      </div>
                      <div className="min-w-0">
                        <div
                          className="
              text-red-500
              text-[10px]
              font-extrabold
            "
                        >
                          Rp4jt
                        </div>
                        <div className="truncate text-[6px] text-slate-400">
                          Tunggakan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="
                    mt-3
                    grid
                    grid-cols-1
                    gap-2
                    sm:grid-cols-[1.55fr_0.75fr]
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-100
                      bg-white
                      p-3
                      shadow-sm
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-[9px] font-bold text-slate-600">
                        Pembayaran per Bulan
                      </div>
                      <span
                        className="
                          rounded-full
                          bg-emerald-50
                          px-1.5
                          py-0.5
                          text-[6px]
                          font-bold
                          text-emerald-500
                        "
                      >
                        +12%
                      </span>
                    </div>
                    <div
                      className="
                        relative
                        mt-3
                        h-[100px]
                        overflow-hidden
                      "
                    >
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                        <span className="border-t border-dashed border-slate-100" />
                      </div>
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 500 110"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              offset="0%"
                              stopColor="#33B77E"
                              stopOpacity="0.22"
                            />
                            <stop
                              offset="100%"
                              stopColor="#33B77E"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="
                            M0 90
                            C35 82 55 72 85 78
                            C115 84 125 60 155 64
                            C185 68 205 42 235 48
                            C265 54 285 68 315 54
                            C345 40 370 46 395 34
                            C425 22 455 28 500 12
                            L500 110
                            L0 110
                            Z
                          "
                          fill="url(#chartGradient)"
                        />
                        <path
                          d="
                            M0 90
                            C35 82 55 72 85 78
                            C115 84 125 60 155 64
                            C185 68 205 42 235 48
                            C265 54 285 68 315 54
                            C345 40 370 46 395 34
                            C425 22 455 28 500 12
                          "
                          fill="none"
                          stroke="#33B77E"
                          strokeWidth={2}
                        />
                      </svg>
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1 text-[6px] text-slate-300">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>Mei</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-100
                      bg-white
                      p-3
                      shadow-sm
                    "
                  >
                    <div className="text-center text-[8px] font-bold text-slate-600">
                      Status
                    </div>
                    <div className="mt-2 flex justify-center">
                      <div
                        className="
                          relative
                          flex
                          h-[78px]
                          w-[78px]
                          items-center
                          justify-center
                          rounded-full
                          border-[8px]
                          border-emerald-100
                        "
                      >
                        <div
                          className="
                            absolute
                            inset-[-8px]
                            rounded-full
                            border-[8px]
                            border-transparent
                            border-t-[#33B77E]
                            border-r-[#33B77E]
                          "
                        />
                        <div className="text-center">
                          <div className="text-[14px] font-extrabold text-[#33B77E]">
                            66%
                          </div>
                          <div className="text-[6px] text-slate-400">Lunas</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 space-y-1 text-[6px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                          <span className="text-slate-400">Lunas</span>
                        </div>
                        <span className="font-semibold text-slate-500">
                          66%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F5C84B]" />
                          <span className="text-slate-400">Proses</span>
                        </div>
                        <span className="font-semibold text-slate-500">
                          20%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7777]" />
                          <span className="text-slate-400">Tunggak</span>
                        </div>
                        <span className="font-semibold text-slate-500">8%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="
                    mt-3
                    rounded-xl
                    border
                    border-slate-100
                    bg-white
                    p-3
                    shadow-sm
                  "
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-[9px] font-bold text-slate-600">
                      Transaksi Terbaru
                    </div>
                    <span className="text-[7px] font-semibold text-[#33B77E]">
                      Lihat semua →
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 py-2 first:border-t-0">
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-[#33B77E]
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            text-[8px]
            font-bold
            text-white
          "
                      >
                        A
                      </div>
                      <div>
                        <div className="text-[8px] font-semibold text-slate-600">
                          Ahmad Rafli
                        </div>
                        <div className="text-[6px] text-slate-400">
                          XI IPA 1
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[7px] font-bold text-slate-500">
                        Rp500.000
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[6px] font-semibold text-[#33B77E]">
                        Lunas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 py-2 first:border-t-0">
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-[#F5B927]
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            text-[8px]
            font-bold
            text-white
          "
                      >
                        S
                      </div>
                      <div>
                        <div className="text-[8px] font-semibold text-slate-600">
                          Siti Aminah
                        </div>
                        <div className="text-[6px] text-slate-400">
                          XII IPS 2
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[7px] font-bold text-slate-500">
                        Rp750.000
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[6px] font-semibold text-[#33B77E]">
                        Lunas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 py-2 first:border-t-0">
                    <div className="flex items-center gap-2">
                      <div
                        className="
            bg-[#33B77E]
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            text-[8px]
            font-bold
            text-white
          "
                      >
                        B
                      </div>
                      <div>
                        <div className="text-[8px] font-semibold text-slate-600">
                          Budi Santoso
                        </div>
                        <div className="text-[6px] text-slate-400">X IPA 3</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[7px] font-bold text-slate-500">
                        Rp350.000
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[6px] font-semibold text-[#33B77E]">
                        Lunas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="
                  absolute
                  -right-3
                  top-[65px]
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-100
                  bg-white
                  px-3
                  py-2
                  text-[15px]
                  font-semibold
                  text-slate-600
                  shadow-[0_10px_25px_rgba(15,23,42,0.12)]
                  sm:flex
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#33B77E]
                    shadow-[0_0_0_4px_rgba(51,183,126,0.1)]
                  "
                />
                Update Real-Time
              </div>
              <div
                className="
                  absolute
                  -bottom-5
                  right-4
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-emerald-100
                  bg-white
                  px-3
                  py-2
                  shadow-[0_12px_30px_rgba(15,23,42,0.12)]
                  sm:right-8
                "
              >
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#33B77E]
                    text-white
                  "
                >
                  <svg
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-slate-600">
                    Pembayaran Masuk
                  </div>
                  <div className="text-[15px] font-bold text-[#33B77E]">
                    +Rp500.000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
