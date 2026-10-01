import type { ProductDesign } from "./types";
import { OncardDashboard } from "./interactive/oncard-dashboard";
import { OncardTestimonials } from "./interactive/oncard-testimonials";
import { OncardVideoCarousel } from "./interactive/oncard-video-carousel";
import { OncardHero } from "./interactive/oncard-hero";
import { OncardStats } from "./interactive/oncard-stats";
import { OncardTilt } from "./interactive/oncard-tilt";
import { OncardRipple } from "./interactive/oncard-ripple";

/**
 * Halaman Oncard — salinan penuh (plek ketiplek) dari
 * https://oncard.qrion.id/ (DOM setelah JS, tanpa navbar & footer asli).
 * Gambar diarahkan ke domain asli; seluruh styling adalah Tailwind
 * utilities yang di-generate ulang dari source ini.
 */
function OncardPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div>
        <div>
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(15, 23, 42) 1px, transparent 1px), linear-gradient(rgb(15, 23, 42) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              backgroundPosition: "0px 0px",
            }}
          />
          <OncardHero />
          <section
            id="download-section"
            className="relative min-h-screen w-full overflow-hidden text-slate-900"
          >
            <div className="pointer-events-none absolute inset-0 -z-20" />
            <div className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-26 sm:px-8 lg:px-12">
              <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="relative flex min-h-[520px] w-full items-center justify-center lg:min-h-[650px]">
                  <div className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-[#33B77E]/10 blur-[100px] sm:h-[400px] sm:w-[400px]" />
                  <div className="relative z-10 w-full max-w-[470px] rotate-[1deg] transition-transform duration-700 hover:rotate-0">
                    <div className="rounded-[2.2rem] border border-white/80 bg-white/80 p-2 shadow-[0_45px_100px_rgba(15,23,42,0.13)] backdrop-blur-xl">
                      <div className="overflow-hidden rounded-[1.8rem] bg-slate-100">
                        <img
                          alt="QRION Mobile"
                          className="h-auto w-full object-cover"
                          src="https://oncard.id/assets_oncard/images/qrion_banner.webp"
                        />
                      </div>
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                              QRION Wallet
                            </p>
                            <p className="mt-1 text-lg font-semibold tracking-[-0.04em] text-slate-900">
                              Your everyday companion.
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#33B77E]/10 text-[#33B77E]">
                            ↗
                          </div>
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-2">
                          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3.5">
                            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400">
                              Saldo
                            </p>
                            <p className="mt-1.5 text-sm font-semibold tracking-[-0.02em] text-slate-900">
                              Rp 240K
                            </p>
                          </div>
                          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3.5">
                            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400">
                              Kehadiran
                            </p>
                            <p className="mt-1.5 text-sm font-semibold tracking-[-0.02em] text-slate-900">
                              98%
                            </p>
                          </div>
                          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-3.5">
                            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400">
                              Transaksi
                            </p>
                            <p className="mt-1.5 text-sm font-semibold tracking-[-0.02em] text-slate-900">
                              12x
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 top-[22%] z-20 hidden -translate-x-2 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:block lg:left-[2%]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#33B77E]/10 text-sm text-[#33B77E]">
                        ✓
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                          Attendance
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900">
                          98% Present
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[19%] right-0 z-20 hidden translate-x-2 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:block lg:right-[2%]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs text-white">
                        Rp
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
                          Balance
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900">
                          Rp 240.000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-20 w-full max-w-[620px]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#059669] backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#33B77E]" />
                    Official QRION Mobile
                  </div>
                  <div className="mt-6 flex items-center">
                    <img
                      alt="ONCARD"
                      className="h-10 w-auto object-contain sm:h-12"
                      src="https://oncard.qrion.id/assets/logo_dongker-sM2j8ZUU.png"
                    />
                  </div>
                  <h2 className="mt-6 max-w-[650px] text-[clamp(28px,3.8vw,48px)] font-bold leading-[1.15] tracking-tight text-slate-900">
                    Semua kebutuhan pelajar
                    <span className="block bg-gradient-to-r from-[#33B77E] to-[#059669] bg-clip-text text-transparent">
                      dalam genggaman.
                    </span>
                  </h2>
                  <p className="mt-5 max-w-[500px] text-sm leading-relaxed text-slate-600 sm:text-base">
                    Satu aplikasi untuk mengelola kebutuhan pendidikan,
                    pembayaran, saldo, absensi, hingga aktivitas siswa.
                    Sederhana untuk digunakan. Terintegrasi untuk dikelola.
                  </p>
                  <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.phoenixkd.qrionmobile"
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

        border-[#33B77E] hover:border-[#33B77E]


      group
      min-h-[52px]
      border-[#33B77E]
      bg-[#33B77E]
      px-7
      text-white
      shadow-[0_8px_25px_rgba(51,183,126,0.30)]
      transition-all
      duration-300
      hover:border-[#059669]
      hover:bg-[#059669]
      hover:shadow-[0_10px_30px_rgba(5,150,105,0.40)]


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
                        style={{ color: "rgb(5, 150, 105)" }}
                      >
                        Download aplikasi
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          ↗
                        </span>
                      </span>
                    </a>
                    <a
                      href="#fitur"
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
          min-h-[52px]
          items-center
          justify-center
          rounded-full
          border
          border-slate-900
          bg-slate-900
          px-6
          py-3.5
          text-sm
          font-medium
          text-white
          shadow-[0_8px_20px_rgba(15,23,42,0.15)]
          transition-all
          duration-300
          hover:border-slate-700
          hover:bg-slate-700
          hover:shadow-[0_10px_25px_rgba(15,23,42,0.25)]


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
                        Explore features
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5">
                          ↓
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <span className="rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-[11px] font-medium text-slate-500 backdrop-blur-md">
                      Saldo &amp; Top Up
                    </span>
                    <span className="rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-[11px] font-medium text-slate-500 backdrop-blur-md">
                      Absensi
                    </span>
                    <span className="rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-[11px] font-medium text-slate-500 backdrop-blur-md">
                      Kantin
                    </span>
                    <span className="rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-[11px] font-medium text-slate-500 backdrop-blur-md">
                      Digital Wallet
                    </span>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-8">
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
                          24/7
                        </div>
                        <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                          Available
                        </div>
                      </div>
                      <div className="h-8 w-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
                          1K+
                        </div>
                        <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                          Users
                        </div>
                      </div>
                      <div className="h-8 w-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
                          50+
                        </div>
                        <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                          Schools
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="fitur"
            data-theme="light"
            className="
        relative
        overflow-hidden
        bg-white
        py-25
        sm:py-25
        lg:py-25
      "
          >
            <div
              className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#32B67D]/[0.06]
          blur-[130px]
        "
            />
            <div
              className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#087F68]/[0.05]
          blur-[140px]
        "
            />
            <div
              className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(7, 26, 19) 1px, transparent 1px), linear-gradient(90deg, rgb(7, 26, 19) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <div
              className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
            >
              <div
                className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-end
            lg:gap-24
          "
              >
                <div>
                  <div
                    className="
                mb-7
                flex
                items-center
                gap-3
              "
                  >
                    <span
                      className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#32B67D]
                  shadow-[0_0_0_6px_rgba(50,182,125,0.10)]
                "
                    />
                    <span
                      className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#32B67D]
                "
                    >
                      Ekosistem Oncard
                    </span>
                  </div>
                  <h2
                    className="
                text-[clamp(3.5rem,7vw,6.5rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.08em]
                text-[#071A13]
              "
                  >
                    Satu<span className="block text-[#2EB77B]">Ekosistem.</span>
                  </h2>
                </div>
                <div className="lg:pb-2">
                  <p
                    className="
                max-w-xl
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
                  >
                    Oncard menghubungkan sekolah, unit usaha, pelajar, guru, dan
                    orang tua dalam satu ekosistem digital yang terintegrasi.
                  </p>
                  <div
                    className="
                mt-7
                flex
                items-center
                gap-3
              "
                  >
                    <span
                      className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#32B67D]
                  text-sm
                  font-bold
                  text-white
                "
                    >
                      ✓
                    </span>
                    <span
                      className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
                    >
                      08 fitur terintegrasi
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="
            mt-14
            grid
            grid-cols-2
            gap-3
            sm:mt-20
            sm:gap-6
            lg:mt-24
            lg:grid-cols-4
          "
              >
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    01
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      01
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="Host / Koordinator Usaha"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/1.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      Host / Koordinator Usaha
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Entitas bisnis sekolah yang mengoperasikan dan mengelola
                      sistem Oncard.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="Host / Koordinator Usaha"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            01
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              01
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="Host / Koordinator Usaha"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/1.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              Host / Koordinator Usaha
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Entitas bisnis sekolah yang mengoperasikan dan
                              mengelola sistem Oncard.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    02
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      02
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="Merchant / Kantin"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/2.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      Merchant / Kantin
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Unit usaha seperti kantin, laundry, barbershop, dan
                      layanan lainnya.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="Merchant / Kantin"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            02
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              02
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="Merchant / Kantin"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/2.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              Merchant / Kantin
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Unit usaha seperti kantin, laundry, barbershop,
                              dan layanan lainnya.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    03
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      03
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="User / Pelajar & Guru"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/3.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      User / Pelajar &amp; Guru
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Pengguna kartu digital untuk berbagai kebutuhan di
                      lingkungan sekolah.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="User / Pelajar & Guru"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            03
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              03
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="User / Pelajar & Guru"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/3.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              User / Pelajar &amp; Guru
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Pengguna kartu digital untuk berbagai kebutuhan di
                              lingkungan sekolah.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    04
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      04
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="Biaya Pendidikan"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/4.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      Biaya Pendidikan
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Integrasi pembayaran SPP, uang komite, dan kebutuhan
                      pendidikan lainnya.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="Biaya Pendidikan"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            04
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              04
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="Biaya Pendidikan"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/4.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              Biaya Pendidikan
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Integrasi pembayaran SPP, uang komite, dan
                              kebutuhan pendidikan lainnya.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    05
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      05
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="Kartu Elektronik Pelajar"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/5.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      Kartu Elektronik Pelajar
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Identitas digital sekaligus dompet elektronik untuk
                      transaksi harian.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="Kartu Elektronik Pelajar"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            05
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              05
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="Kartu Elektronik Pelajar"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/5.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              Kartu Elektronik Pelajar
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Identitas digital sekaligus dompet elektronik
                              untuk transaksi harian.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    06
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      06
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="PSB Online"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/6.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      PSB Online
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Sistem penerimaan pelajar baru yang terintegrasi secara
                      digital.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="PSB Online"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            06
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              06
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="PSB Online"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/6.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              PSB Online
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Sistem penerimaan pelajar baru yang terintegrasi
                              secara digital.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    07
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      07
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="Absensi Digital"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/7.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      Absensi Digital
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Pencatatan kehadiran secara online yang akurat dan
                      efisien.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="Absensi Digital"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            07
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              07
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="Absensi Digital"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/7.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              Absensi Digital
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Pencatatan kehadiran secara online yang akurat dan
                              efisien.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
                <article
                  className="
          relative
          h-[285px]
          w-full
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200/80
          bg-white
          p-3.5
          shadow-[0_10px_35px_rgba(7,26,19,0.06)]
          sm:hidden
        "
                  tabIndex={0}
                >
                  <span
                    className="
            pointer-events-none
            absolute
            -right-2
            -top-5
            select-none
            text-[5rem]
            font-black
            leading-none
            tracking-[-0.1em]
            text-[#32B67D]/[0.055]
          "
                  >
                    08
                  </span>
                  <div
                    className="
            relative
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#32B67D]/[0.08]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#32B67D]
            "
                    >
                      <span
                        className="
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
              "
                      />
                      Oncard
                    </span>
                    <span
                      className="
              font-mono
              text-[8px]
              font-medium
              tracking-widest
              text-slate-300
            "
                    >
                      08
                    </span>
                  </div>
                  <div
                    className="
            relative
            z-10
            mt-3
            h-[125px]
            w-full
            overflow-hidden
            rounded-[17px]
            bg-gradient-to-br
            from-[#32B67D]/[0.055]
            via-white
            to-[#087F68]/[0.035]
          "
                  >
                    <div
                      className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#32B67D]/10
              blur-3xl
            "
                    />
                    <img
                      alt="Virtual Account"
                      className="
              relative
              z-10
              h-full
              w-full
              object-contain
              mix-blend-multiply
              drop-shadow-[0_12px_12px_rgba(7,26,19,0.10)]
            "
                      src="https://oncard.qrion.id/image/8.png"
                      style={{ transform: "translateY(-2px) scale(1.03)" }}
                    />
                    <div
                      className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-8
              bg-gradient-to-t
              from-white/50
              to-transparent
            "
                    />
                  </div>
                  <div
                    className="
            relative
            z-20
            mt-3.5
            pr-1
          "
                  >
                    <h3
                      className="
              line-clamp-2
              text-[13px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#071A13]
            "
                    >
                      Virtual Account
                    </h3>
                    <p
                      className="
              mt-1.5
              line-clamp-2
              text-[8.5px]
              leading-[1.5]
              text-slate-400
            "
                    >
                      Identitas virtual untuk top-up dan pengelolaan saldo
                      pelajar.
                    </p>
                  </div>
                  <div
                    className="
            absolute
            bottom-3.5
            left-3.5
            right-3.5
            z-20
            flex
            items-center
            justify-between
          "
                  >
                    <span
                      className="
              text-[6px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-300
            "
                    >
                      Digital ecosystem
                    </span>
                    <span
                      className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-[10px]
              text-slate-300
            "
                    >
                      ↗
                    </span>
                  </div>
                </article>
                <OncardTilt className="hidden h-[380px] w-full sm:block">
                  <figure
                    className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        [perspective:1100px]
      "
                    style={{ height: 380, width: "100%" }}
                  >
                    <div
                      className="
          relative
          [transform-style:preserve-3d]
        "
                      style={{ width: "100%", height: 380, transform: "none" }}
                    >
                      <img
                        alt="Virtual Account"
                        className="
            absolute
            left-0
            top-0
            h-full
            w-full
            rounded-[26px]
            object-cover
            [transform:translateZ(0)]
          "
                        style={{ width: "100%", height: 380 }}
                      />
                      <div
                        className="
                absolute
                left-0
                top-0
                z-10
                h-full
                w-full
                [transform-style:preserve-3d]
              "
                      >
                        <article
                          className="
                relative
                h-[380px]
                w-full
                overflow-visible
                rounded-[26px]
                border
                p-6
                [transform-style:preserve-3d]
              "
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            borderColor: "rgba(50, 182, 125, 0.12)",
                            boxShadow: "rgba(7, 26, 19, 0.08) 0px 15px 40px",
                          }}
                        >
                          <div
                            className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-white/20
                  blur-[80px]
                "
                          />
                          <span
                            className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-6
                  select-none
                  text-[8rem]
                  font-black
                  leading-none
                  tracking-[-0.1em]
                "
                            style={{
                              transform: "none",
                              color: "rgba(50, 182, 125, 0.055)",
                            }}
                          >
                            08
                          </span>
                          <div
                            className="
                  relative
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(50px)" }}
                          >
                            <span
                              className="
                    rounded-full
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{
                                backgroundColor: "rgba(50, 182, 125, 0.08)",
                                color: "rgb(50, 182, 125)",
                              }}
                            >
                              Oncard
                            </span>
                            <span
                              className="
                    font-mono
                    text-[9px]
                    tracking-widest
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              08
                            </span>
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-[45px]
                  z-40
                  flex
                  justify-center
                "
                          >
                            <img
                              alt="Virtual Account"
                              className="
                    h-[220px]
                    w-[260px]
                    object-contain
                    mix-blend-multiply
                    drop-shadow-[0_25px_25px_rgba(7,26,19,0.18)]
                    will-change-transform
                  "
                              src="https://oncard.qrion.id/image/8.png"
                              style={{ transform: "none" }}
                            />
                          </div>
                          <div
                            className="
                  pointer-events-none
                  absolute
                  left-6
                  right-6
                  top-[105px]
                  z-10
                  h-[125px]
                  rounded-[20px]
                  border
                  border-[#32B67D]/10
                  bg-[#32B67D]/[0.045]
                "
                            style={{ transform: "none", opacity: 1 }}
                          />
                          <div
                            className="
                  absolute
                  bottom-[62px]
                  left-6
                  right-6
                  z-30
                "
                            style={{ transform: "translateZ(55px)" }}
                          >
                            <h3
                              className="
                    max-w-[290px]
                    text-[20px]
                    font-bold
                    leading-[1.1]
                    tracking-[-0.045em]
                  "
                              style={{ color: "rgb(7, 26, 19)" }}
                            >
                              Virtual Account
                            </h3>
                            <p
                              className="
                    mt-3
                    max-w-[300px]
                    text-[11px]
                    leading-[1.65]
                  "
                              style={{ color: "rgb(148, 163, 184)" }}
                            >
                              Identitas virtual untuk top-up dan pengelolaan
                              saldo pelajar.
                            </p>
                          </div>
                          <div
                            className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                  flex
                  items-center
                  justify-between
                "
                            style={{ transform: "translateZ(45px)" }}
                          >
                            <span
                              className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                              style={{ color: "rgb(203, 213, 225)" }}
                            >
                              Digital ecosystem
                            </span>
                            <span
                              className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-sm
                  "
                              style={{
                                transform: "none",
                                color: "rgb(203, 213, 225)",
                              }}
                            >
                              ↗
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </figure>
                </OncardTilt>
              </div>
              <div
                className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            pt-5
            sm:mt-12
          "
              >
                <span
                  className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-300
              sm:text-[9px]
            "
                >
                  Digital School Ecosystem
                </span>
                <span
                  className="
              hidden
              font-mono
              text-[9px]
              tracking-widest
              text-slate-300
              sm:block
            "
                >
                  ONCARD / 2026
                </span>
              </div>
            </div>
          </section>
          <section
            data-theme="light"
            className="
        relative
        w-full
        overflow-hidden
        bg-white
        font-[Inter]
      "
          >
            <div
              className="
          relative
          z-10
          w-full
          py-20
          sm:py-24
          lg:py-28
        "
            >
              <div
                className="
            mx-auto
            w-full
            max-w-[1440px]
            px-6
            sm:px-12
            lg:px-12
            xl:px-16
          "
              >
                <div
                  className="
              grid
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-16
              xl:gap-20
            "
                >
                  <div className="max-w-xl">
                    <div className="-ml-2 mb-1 md:-ml-3">
                      <div
                        className="relative block min-h-[220px] w-full overflow-hidden isolate 
                    !min-h-[85px]
                    w-full
                    md:!min-h-[110px]"
                        role="img"
                        aria-label="Cashless System"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            color: "#33B77E",
                            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.06em",
                            lineHeight: 0.9,
                          }}
                        >
                          Cashless System
                        </span>
                      </div>
                    </div>
                    <div
                      className="
                  max-w-lg
                  space-y-4
                  text-sm
                  leading-7
                  text-slate-600
                  md:text-base
                  md:leading-7
                "
                    >
                      <p>
                        Sistem Cashless adalah sebuah inovasi teknologi yang
                        dirancang untuk menjadi media pembayaran digital di
                        lingkungan sekolah. Dengan sistem ini, transaksi
                        keuangan menjadi lebih mudah, cepat, dan aman, tanpa
                        perlu menggunakan uang tunai.
                      </p>
                      <p>
                        Siswa, guru, dan orang tua dapat melakukan berbagai
                        pembayaran, seperti uang jajan, pembelian makanan di
                        kantin, pembayaran buku, atau kegiatan sekolah lainnya,
                        hanya dengan menggunakan kartu, aplikasi mobile, atau
                        perangkat khusus yang terhubung ke sistem.
                      </p>
                      <p>
                        Selain meminimalkan risiko kehilangan uang tunai, sistem
                        ini juga membantu pihak sekolah untuk mencatat dan
                        mengelola transaksi secara otomatis, sehingga lebih
                        transparan dan efisien.
                      </p>
                    </div>
                  </div>
                  <div
                    className="
                w-full
                lg:max-w-2xl
                lg:justify-self-end
              "
                  >
                    <div className="mb-6 md:mb-8">
                      <div
                        className="
                    mb-3
                    flex
                    items-center
                    gap-3
                  "
                      >
                        <span
                          className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#32B67D]
                    "
                        />
                        <span
                          className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#32B67D]
                    "
                        >
                          Performance
                        </span>
                      </div>
                      <h3
                        className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[#071A13]
                    md:text-3xl
                  "
                      >
                        Statistik Oncard
                      </h3>
                      <p
                        className="
                    mt-2
                    max-w-xl
                    text-sm
                    leading-6
                    text-slate-500
                  "
                      >
                        Sejak 2022, berkomitmen memberikan layanan terbaik untuk
                        setiap mitra yang menjalin hubungan dengan Oncard.
                      </p>
                    </div>
                    <OncardStats />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="dashboard"
            className="relative w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-10 xl:px-16"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-[120px]" />
              <div className="absolute inset-0 bg-[radial-gradient(#dcefe7_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
            </div>
            <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#107849]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#107849]" />
                Manajemen Unit Usaha Sekolah
              </div>
              <h2 className="text-[clamp(34px,4vw,58px)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#071A13]">
                Ekosistem Cashless Sekolah,
                <br />
                <span className="text-[#107849]">
                  dalam satu platform ONCARD.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Kelola transaksi kantin, mutasi jurnal keuangan, hingga
                penarikan saldo (withdraw) unit usaha secara transparan dan
                real-time.
              </p>
            </div>
            <OncardDashboard />
            <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">
              <span>Data diperbarui secara real-time</span>
              <span className="h-1 w-1 rounded-full bg-[#107849]" />
              <span>Terintegrasi Sistem QRION</span>
              <span className="h-1 w-1 rounded-full bg-[#107849]" />
              <span>Keamanan data terjamin</span>
            </div>
          </section>
          <OncardVideoCarousel />
          <section
            id="mitra"
            className="relative w-full overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32"
          >
            <div className="mx-auto max-w-7xl px-6 mb-10 sm:mb-16 text-center">
              <div className="max-w-3xl mx-auto text-center">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600">
                  Mitra Kami
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Tumbuh Bersama Oncard
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
                  Tumbuh bersama dalam era transformasi digital, tingkatkan
                  kualitas pendidikan bersama kami dalam program yang inovatif
                  dan komitmen bersama.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col gap-4 sm:gap-6 py-2 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
              <section>
                <div className="undefined relative overflow-hidden">
                  <div
                    className="flex items-center flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]"
                    style={{ animation: "oc-marquee-left 45s linear infinite" }}
                  >
                    <span className="flex-shrink-0 flex items-center">
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="PP MA S AL-HIMMAH"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/Ss5pCirBiTa38bkI1749008468.jpg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            PP MA S AL-HIMMAH
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SMK Perbankan Riau"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/Uw51CPREKkTsPe5j1745384212.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SMK Perbankan Riau
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SD IT AITI Tualang Siak"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/bsUWgiCD1EedpOZk1739956785.jpeg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SD IT AITI Tualang Siak
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Syafa'aturrasul 2 Putra"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/AARqKU8tGyNI3gSt1736407352.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Syafa&apos;aturrasul 2 Putra
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Yayasan Ibu Harapan"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/RlcbvYbD68iP7Cuc1754730059.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Yayasan Ibu Harapan
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Bequranic Bengkalis"
                            className="h-full w-full object-contain"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjXYXoGRn9ClDtlpl2FXy5PmFN_1ZLNf0FadyHRNvXw&s=10"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Bequranic Bengkalis
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Syafa'aturrasul 1"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/AtWzpRqo14l8iY8c1691512037.webp"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Syafa&apos;aturrasul 1
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Darul Fikri"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/rPT37qO3ihjxni4c1771570316.jpg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Darul Fikri
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="MTS Masmur Pekanbaru"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/B5tmyMkAgHDsZJHU1739429154.jpeg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            MTS Masmur Pekanbaru
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Yayasan Abdi Nusantara"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/assets_oncard/logo/logo_dongker.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Yayasan Abdi Nusantara
                          </h4>
                        </div>
                      </div>
                      &nbsp;
                    </span>
                    <span className="flex-shrink-0 flex items-center">
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="PP MA S AL-HIMMAH"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/Ss5pCirBiTa38bkI1749008468.jpg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            PP MA S AL-HIMMAH
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SMK Perbankan Riau"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/Uw51CPREKkTsPe5j1745384212.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SMK Perbankan Riau
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SD IT AITI Tualang Siak"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/bsUWgiCD1EedpOZk1739956785.jpeg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SD IT AITI Tualang Siak
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Syafa'aturrasul 2 Putra"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/AARqKU8tGyNI3gSt1736407352.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Syafa&apos;aturrasul 2 Putra
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Yayasan Ibu Harapan"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/RlcbvYbD68iP7Cuc1754730059.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Yayasan Ibu Harapan
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Bequranic Bengkalis"
                            className="h-full w-full object-contain"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjXYXoGRn9ClDtlpl2FXy5PmFN_1ZLNf0FadyHRNvXw&s=10"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Bequranic Bengkalis
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Syafa'aturrasul 1"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/AtWzpRqo14l8iY8c1691512037.webp"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Syafa&apos;aturrasul 1
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Darul Fikri"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/rPT37qO3ihjxni4c1771570316.jpg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Darul Fikri
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="MTS Masmur Pekanbaru"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/B5tmyMkAgHDsZJHU1739429154.jpeg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            MTS Masmur Pekanbaru
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Yayasan Abdi Nusantara"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/assets_oncard/logo/logo_dongker.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Yayasan Abdi Nusantara
                          </h4>
                        </div>
                      </div>
                      &nbsp;
                    </span>
                  </div>
                </div>
              </section>
              <section>
                <div className="undefined relative overflow-hidden">
                  <div
                    className="flex items-center flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]"
                    style={{
                      animation: "oc-marquee-right 45s linear infinite",
                    }}
                  >
                    <span className="flex-shrink-0 flex items-center">
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="TK - Playgroup Labschool FKIP UNRI"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/ClLHcazCsyvryYc81752898320.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            TK - Playgroup Labschool FKIP UNRI
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SMPS Mutawally"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/9G0DqMUpsxSMwlQW1753848478.jpeg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SMPS Mutawally
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Al Faruqi"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/ZN9kX4VhWfhxoV5U1750605715.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Al Faruqi
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SMA Negeri Pintar"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/orG0IRpMOXnyRVcC1736430037.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SMA Negeri Pintar
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Al Munawwarah"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/zoS65sWy1mYoWBak1769053365.jpg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Al Munawwarah
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Al Muslimun"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/wco0iXNjoSRH8FJz1732589850.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Al Muslimun
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Syekh Burhanuddin Kuntu"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/4OaniEQ5Zvavx4wi1722841750.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Syekh Burhanuddin Kuntu
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Al Azhar Syifabudi Pekanbaru"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/bDHwsWwjpQkFBuAr1736430141.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Al Azhar Syifabudi Pekanbaru
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Yayasan Assajadah Kubang Raya"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/nudoEIoen6GaywBb1733986777.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Yayasan Assajadah Kubang Raya
                          </h4>
                        </div>
                      </div>
                      &nbsp;
                    </span>
                    <span className="flex-shrink-0 flex items-center">
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="TK - Playgroup Labschool FKIP UNRI"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/ClLHcazCsyvryYc81752898320.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            TK - Playgroup Labschool FKIP UNRI
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SMPS Mutawally"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/9G0DqMUpsxSMwlQW1753848478.jpeg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SMPS Mutawally
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Al Faruqi"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/ZN9kX4VhWfhxoV5U1750605715.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Al Faruqi
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="SMA Negeri Pintar"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/orG0IRpMOXnyRVcC1736430037.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            SMA Negeri Pintar
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Al Munawwarah"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/zoS65sWy1mYoWBak1769053365.jpg"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Al Munawwarah
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Al Muslimun"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/wco0iXNjoSRH8FJz1732589850.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Al Muslimun
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Pondok Pesantren Syekh Burhanuddin Kuntu"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/4OaniEQ5Zvavx4wi1722841750.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Pondok Pesantren Syekh Burhanuddin Kuntu
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Al Azhar Syifabudi Pekanbaru"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/bDHwsWwjpQkFBuAr1736430141.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Al Azhar Syifabudi Pekanbaru
                          </h4>
                        </div>
                      </div>
                      <div className="mx-2 sm:mx-4 flex flex-col items-center justify-start w-[140px] sm:w-[170px] min-h-[130px] sm:min-h-[170px] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="h-[55px] sm:h-[75px] w-full overflow-hidden flex items-center justify-center">
                          <img
                            alt="Yayasan Assajadah Kubang Raya"
                            className="h-full w-full object-contain"
                            src="https://oncard.id/app/assets/users/foto/nudoEIoen6GaywBb1733986777.png"
                          />
                        </div>
                        <div className="mt-2.5 w-full flex-1 flex items-center justify-center">
                          <h4 className="text-center text-[10px] sm:text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                            Yayasan Assajadah Kubang Raya
                          </h4>
                        </div>
                      </div>
                      &nbsp;
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section
            className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-28
        lg:py-32
      "
          >
            <div
              className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#32B67D]/[0.045]
          blur-[140px]
        "
            />
            <div
              className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#087F68]/[0.035]
          blur-[140px]
        "
            />
            <div
              className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
            >
              <div
                className="
            mb-12
            flex
            flex-col
            gap-8
            sm:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
              >
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#32B67D]
                  shadow-[0_0_0_6px_rgba(50,182,125,0.10)]
                "
                    />
                    <span
                      className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#32B67D]
                "
                    >
                      Berita &amp; Informasi
                    </span>
                  </div>
                  <h2
                    className="
                text-[clamp(3rem,6vw,5.5rem)]
                font-bold
                leading-[0.86]
                tracking-[-0.075em]
                text-[#071A13]
              "
                  >
                    Update<span className="block text-[#32B67D]">ONCARD.</span>
                  </h2>
                </div>
                <div className="max-w-md lg:pb-1">
                  <p
                    className="
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
                  >
                    Informasi terbaru mengenai perkembangan, implementasi, dan
                    inovasi ekosistem digital ONCARD.
                  </p>
                </div>
              </div>
              <div
                className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
              >
                <a
                  className="
        group
        relative
        block
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200/80
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#32B67D]/30
        hover:shadow-[0_24px_60px_rgba(7,26,19,0.08)]
      "
                  href="https://oncard.qrion.id/berita/manfaat-menggunakan-oncard-di-sekolah"
                  data-discover="true"
                >
                  <div
                    className="
          relative
          aspect-[1.25/1]
          overflow-hidden
          bg-slate-100
        "
                  >
                    <img
                      alt="5 Manfaat Menggunakan Oncard di Sekolah"
                      className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.06]
          "
                      src="https://oncard.id/assets_oncard/images/konten_sisfo/Screen_Shot_2024-07-15_at_20_41_44.png"
                    />
                    <div
                      className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                    />
                    <div
                      className="
            absolute
            left-4
            top-4
            flex
            h-8
            min-w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/60
            bg-white/80
            px-2
            font-mono
            text-[9px]
            font-medium
            text-[#071A13]
            backdrop-blur-md
          "
                    >
                      01
                    </div>
                    <div
                      className="
            absolute
            right-4
            top-4
            rounded-full
            bg-[#071A13]/80
            px-3
            py-1.5
            backdrop-blur-md
          "
                    >
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
                      >
                        Edukasi
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
                      >
                        15 Juli 2024
                      </span>
                      <span
                        className="
              text-xs
              text-slate-300
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#32B67D]
            "
                      >
                        ↗
                      </span>
                    </div>
                    <h3
                      className="
            line-clamp-2
            min-h-[48px]
            text-[17px]
            font-bold
            leading-[1.2]
            tracking-[-0.035em]
            text-[#071A13]
            transition-colors
            duration-300
            group-hover:text-[#32B67D]
          "
                    >
                      5 Manfaat Menggunakan Oncard di Sekolah
                    </h3>
                    <p
                      className="
            mt-3
            line-clamp-3
            text-[11px]
            leading-[1.65]
            text-slate-400
          "
                    >
                      Oncard adalah kartu pelajar pintar yang memudahkan
                      berbagai aktivitas sekolah seperti transaksi, absensi, dan
                      komunikasi dengan orang tua.
                    </p>
                    <div
                      className="
            mt-6
            flex
            items-center
            gap-2
          "
                    >
                      <span
                        className="
              h-px
              w-5
              bg-[#32B67D]
              transition-all
              duration-500
              group-hover:w-10
            "
                      />
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-300
              transition-colors
              group-hover:text-[#32B67D]
            "
                      >
                        Read article
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  className="
        group
        relative
        block
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200/80
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#32B67D]/30
        hover:shadow-[0_24px_60px_rgba(7,26,19,0.08)]
      "
                  href="https://oncard.qrion.id/berita/ponpes-nurul-hidayah-terapkan-oncard"
                  data-discover="true"
                >
                  <div
                    className="
          relative
          aspect-[1.25/1]
          overflow-hidden
          bg-slate-100
        "
                  >
                    <img
                      alt="Silaturrahmi Ponpes Nurul Hidayah Bengkalis dengan PT Phoenix Kreatif Digital untuk Terapkan Sistem ONCARD"
                      className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.06]
          "
                      src="https://oncard.id/assets_oncard/images/konten_sisfo/Screen_Shot_2024-03-12_at_13_43_48.png"
                    />
                    <div
                      className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                    />
                    <div
                      className="
            absolute
            left-4
            top-4
            flex
            h-8
            min-w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/60
            bg-white/80
            px-2
            font-mono
            text-[9px]
            font-medium
            text-[#071A13]
            backdrop-blur-md
          "
                    >
                      02
                    </div>
                    <div
                      className="
            absolute
            right-4
            top-4
            rounded-full
            bg-[#071A13]/80
            px-3
            py-1.5
            backdrop-blur-md
          "
                    >
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
                      >
                        Kerjasama
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
                      >
                        12 Maret 2024
                      </span>
                      <span
                        className="
              text-xs
              text-slate-300
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#32B67D]
            "
                      >
                        ↗
                      </span>
                    </div>
                    <h3
                      className="
            line-clamp-2
            min-h-[48px]
            text-[17px]
            font-bold
            leading-[1.2]
            tracking-[-0.035em]
            text-[#071A13]
            transition-colors
            duration-300
            group-hover:text-[#32B67D]
          "
                    >
                      Silaturrahmi Ponpes Nurul Hidayah Bengkalis dengan PT
                      Phoenix Kreatif Digital untuk Terapkan Sistem ONCARD
                    </h3>
                    <p
                      className="
            mt-3
            line-clamp-3
            text-[11px]
            leading-[1.65]
            text-slate-400
          "
                    >
                      Pimpinan Pondok Pesantren Mengakui Pentingnya Adaptasi
                      Terhadap Era Digital di Kabupaten Bengkalis.
                    </p>
                    <div
                      className="
            mt-6
            flex
            items-center
            gap-2
          "
                    >
                      <span
                        className="
              h-px
              w-5
              bg-[#32B67D]
              transition-all
              duration-500
              group-hover:w-10
            "
                      />
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-300
              transition-colors
              group-hover:text-[#32B67D]
            "
                      >
                        Read article
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  className="
        group
        relative
        block
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200/80
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#32B67D]/30
        hover:shadow-[0_24px_60px_rgba(7,26,19,0.08)]
      "
                  href="https://oncard.qrion.id/berita/mahad-tafaqquh-luncurkan-oncard"
                  data-discover="true"
                >
                  <div
                    className="
          relative
          aspect-[1.25/1]
          overflow-hidden
          bg-slate-100
        "
                  >
                    <img
                      alt="Ma'had Tafaqquh Resmi Luncurkan Sistem Kartu Elektronik ONCARD untuk Santri"
                      className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.06]
          "
                      src="https://oncard.id/assets_oncard/images/konten_sisfo/Screen_Shot_2024-03-12_at_13_37_02.png"
                    />
                    <div
                      className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                    />
                    <div
                      className="
            absolute
            left-4
            top-4
            flex
            h-8
            min-w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/60
            bg-white/80
            px-2
            font-mono
            text-[9px]
            font-medium
            text-[#071A13]
            backdrop-blur-md
          "
                    >
                      03
                    </div>
                    <div
                      className="
            absolute
            right-4
            top-4
            rounded-full
            bg-[#071A13]/80
            px-3
            py-1.5
            backdrop-blur-md
          "
                    >
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
                      >
                        Implementasi
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
                      >
                        12 Maret 2024
                      </span>
                      <span
                        className="
              text-xs
              text-slate-300
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#32B67D]
            "
                      >
                        ↗
                      </span>
                    </div>
                    <h3
                      className="
            line-clamp-2
            min-h-[48px]
            text-[17px]
            font-bold
            leading-[1.2]
            tracking-[-0.035em]
            text-[#071A13]
            transition-colors
            duration-300
            group-hover:text-[#32B67D]
          "
                    >
                      Ma&apos;had Tafaqquh Resmi Luncurkan Sistem Kartu
                      Elektronik ONCARD untuk Santri
                    </h3>
                    <p
                      className="
            mt-3
            line-clamp-3
            text-[11px]
            leading-[1.65]
            text-slate-400
          "
                    >
                      Ustad Dr. Musthafa Umar, Lc, MA, Memperkenalkan Teknologi
                      Mutakhir untuk Pengalaman Belajar yang Lebih Baik.
                    </p>
                    <div
                      className="
            mt-6
            flex
            items-center
            gap-2
          "
                    >
                      <span
                        className="
              h-px
              w-5
              bg-[#32B67D]
              transition-all
              duration-500
              group-hover:w-10
            "
                      />
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-300
              transition-colors
              group-hover:text-[#32B67D]
            "
                      >
                        Read article
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  className="
        group
        relative
        block
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200/80
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#32B67D]/30
        hover:shadow-[0_24px_60px_rgba(7,26,19,0.08)]
      "
                  href="https://oncard.qrion.id/berita/sharing-knowledge-oncard-brks-arifin-ahmad"
                  data-discover="true"
                >
                  <div
                    className="
          relative
          aspect-[1.25/1]
          overflow-hidden
          bg-slate-100
        "
                  >
                    <img
                      alt="Tim OnCard Perkuat Sinergi dengan BRKS Pusat, Bagikan Knowledge dengan Bank Riau Kepri Syariah Cabang Arifin Ahmad Pekanbaru"
                      className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.06]
          "
                      src="https://oncard.id/assets_oncard/images/konten_sisfo/WhatsApp_Image_2024-01-29_at_14_51_23.jpeg"
                    />
                    <div
                      className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                    />
                    <div
                      className="
            absolute
            left-4
            top-4
            flex
            h-8
            min-w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/60
            bg-white/80
            px-2
            font-mono
            text-[9px]
            font-medium
            text-[#071A13]
            backdrop-blur-md
          "
                    >
                      04
                    </div>
                    <div
                      className="
            absolute
            right-4
            top-4
            rounded-full
            bg-[#071A13]/80
            px-3
            py-1.5
            backdrop-blur-md
          "
                    >
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
                      >
                        Partner
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
                      >
                        29 Januari 2024
                      </span>
                      <span
                        className="
              text-xs
              text-slate-300
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#32B67D]
            "
                      >
                        ↗
                      </span>
                    </div>
                    <h3
                      className="
            line-clamp-2
            min-h-[48px]
            text-[17px]
            font-bold
            leading-[1.2]
            tracking-[-0.035em]
            text-[#071A13]
            transition-colors
            duration-300
            group-hover:text-[#32B67D]
          "
                    >
                      Tim OnCard Perkuat Sinergi dengan BRKS Pusat, Bagikan
                      Knowledge dengan Bank Riau Kepri Syariah Cabang Arifin
                      Ahmad Pekanbaru
                    </h3>
                    <p
                      className="
            mt-3
            line-clamp-3
            text-[11px]
            leading-[1.65]
            text-slate-400
          "
                    >
                      Pekanbaru, 29 Januari 2024 - Tim OnCard memperkuat
                      kerjasamanya dengan BRKS Pusat melalui kegiatan berbagi
                      pengetahuan.
                    </p>
                    <div
                      className="
            mt-6
            flex
            items-center
            gap-2
          "
                    >
                      <span
                        className="
              h-px
              w-5
              bg-[#32B67D]
              transition-all
              duration-500
              group-hover:w-10
            "
                      />
                      <span
                        className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-slate-300
              transition-colors
              group-hover:text-[#32B67D]
            "
                      >
                        Read article
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="
            mt-10
            flex
            flex-col
            gap-6
            border-t
            border-slate-200
            pt-6
            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
              >
                <div className="flex items-center gap-4">
                  <span
                    className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-300
              "
                  >
                    Latest updates
                  </span>
                  <span
                    className="
                hidden
                h-1
                w-1
                rounded-full
                bg-[#32B67D]
                sm:block
              "
                  />
                  <span
                    className="
                font-mono
                text-[9px]
                tracking-widest
                text-slate-300
              "
                  >
                    04 ARTICLES
                  </span>
                </div>
                <a
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



        !flex
        !box-border
      "
                  href="https://oncard.qrion.id/berita"
                  data-discover="true"
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
                    Lihat Semua Berita
                  </span>
                </a>
              </div>
            </div>
          </section>
          <OncardTestimonials />
        </div>
        <div className="fixed bottom-6 right-6 z-50 flex items-center group">
          <span
            className="
          mr-3
          hidden
          rounded-lg
          bg-slate-900
          px-3
          py-1.5
          text-xs
          font-medium
          text-white
          shadow-md
          transition-all
          duration-300
          group-hover:block
        "
          >
            Chat via WhatsApp
          </span>
          <a
            href="https://wa.me/6281262279950?text=Halo%2C%20saya%20ingin%20bertanya..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat via WhatsApp"
            className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-emerald-500
          text-white
          shadow-lg
          shadow-emerald-500/30
          transition-all
          duration-300
          hover:scale-110
          hover:bg-emerald-600
          hover:shadow-emerald-500/50
          active:scale-95
        "
          >
            <span
              className="
            absolute
            inline-flex
            h-10
            w-10
            animate-ping
            rounded-full
            bg-emerald-400
            opacity-75
          "
            />
            <svg
              className="relative z-10 h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export const oncard: ProductDesign = {
  page: () => <OncardPage />,
};
