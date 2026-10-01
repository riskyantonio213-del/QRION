"use client";

import { useEffect, useState } from "react";

const SLIDES = 5;

export function OntimeFeatureCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % SLIDES), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#33B77E]/25 via-[#33B77E]/10 to-transparent pointer-events-none z-30 transition-opacity duration-300 opacity-0" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#33B77E]/25 via-[#33B77E]/10 to-transparent pointer-events-none z-30 transition-opacity duration-300 opacity-0" />
      <button
        type="button"
        aria-label="Slide sebelumnya"
        onClick={() => setIdx((idx + SLIDES - 1) % SLIDES)}
        className="swiper-prev absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 320 512"
          className="text-3xl lg:text-4xl text-[#33B77E]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Slide berikutnya"
        onClick={() => setIdx((idx + 1) % SLIDES)}
        className="swiper-next absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 320 512"
          className="text-3xl lg:text-4xl text-[#33B77E]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </button>
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="swiper swiper-initialized swiper-horizontal pb-20 swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style={{
              transform: `translateX(-${idx * 100}%)`,
              transitionDuration: "300ms",
            }}
          >
            <div
              className={`swiper-slide${idx === 0 ? " swiper-slide-active" : ""}${(idx + 1) % SLIDES === 0 ? " swiper-slide-next" : ""}`}
              data-swiper-slide-index={0}
            >
              <div className="text-center mb-10 md:mb-20 px-2 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  Real-Time Monitoring
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                  Pantau aktivitas kehadiran dan belajar mengajar di sekolah
                  anda lewat real-time dashboard
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center relative">
                <div className="relative z-10 lg:order-2">
                  <div className="grid grid-cols-1 gap-6 px-4 lg:px-8">
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Track Progress Belajar
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Lacak aktivitas setiap kelas melalui indikator status
                          secara real-time (Ongoing, Done, Passed)
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Pantau Detail Jadwal
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Pantau guru mata pelajaran yang masuk kelas, mata
                          pelajaran, hingga durasi waktu mengajar
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Deteksi Dini Masalah Kelas
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Identifikasi kelas yang terlambat dimulai, guru belum
                          hadir, atau jadwal tidak berjalan sesuai rencana.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-visible relative z-10 lg:order-2">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(51, 183, 126, 0.55) 0%, rgba(184, 230, 213, 0.45) 25%, rgba(184, 230, 213, 0.25) 45%, rgba(184, 230, 213, 0.12) 65%, transparent 75%)",
                      width: 400,
                      height: 400,
                      filter: "blur(60px)",
                      zIndex: -1,
                    }}
                  />
                  <div className="grid place-items-center h-full relative">
                    <img
                      alt="Real-Time Monitoring"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      src="https://ontime.qrion.id/assets/s1-FUwMGEI7.png"
                      style={{
                        filter:
                          "drop-shadow(rgba(0, 0, 0, 0.12) 0px 20px 50px)",
                        transform: "scale(1)",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`swiper-slide${idx === 1 ? " swiper-slide-active" : ""}${(idx + 1) % SLIDES === 1 ? " swiper-slide-next" : ""}`}
              data-swiper-slide-index={1}
            >
              <div className="text-center mb-10 md:mb-20 px-2 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  Manajemen Absensi
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                  Sistem absensi siswa dan guru
                  <br className="block md:hidden" /> yang otomatis dan akurat.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center relative">
                <div className="relative z-10 lg:order-2">
                  <div className="grid grid-cols-1 gap-6 px-4 lg:px-8">
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 640 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Absensi Digital
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Pencatatan kehadiran tanpa manual, langsung
                          terintegrasi dengan sistem.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Rekap Otomatis
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Laporan kehadiran tersedia secara real-time dan
                          akurat.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Laporan Kehadiran
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Analisis data kehadiran siswa dan guru secara berkala.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-visible relative z-10 lg:order-1">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(51, 183, 126, 0.55) 0%, rgba(184, 230, 213, 0.45) 25%, rgba(184, 230, 213, 0.25) 45%, rgba(184, 230, 213, 0.12) 65%, transparent 75%)",
                      width: 400,
                      height: 400,
                      filter: "blur(60px)",
                      zIndex: -1,
                    }}
                  />
                  <div className="grid place-items-center h-full relative">
                    <img
                      alt="Manajemen Absensi"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      src="https://ontime.qrion.id/assets/s2-D4KiZySK.png"
                      style={{
                        filter:
                          "drop-shadow(rgba(0, 0, 0, 0.12) 0px 20px 50px)",
                        transform: "scale(1)",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`swiper-slide${idx === 2 ? " swiper-slide-active" : ""}${(idx + 1) % SLIDES === 2 ? " swiper-slide-next" : ""}`}
              data-swiper-slide-index={2}
            >
              <div className="text-center mb-10 md:mb-20 px-2 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  Manajemen <br className="block md:hidden" /> Guru Piket
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                  Atur dan pantau tugas guru piket secara optimal.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center relative">
                <div className="relative z-10 lg:order-2">
                  <div className="grid grid-cols-1 gap-6 px-4 lg:px-8">
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 640 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Jadwal Piket
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Buat dan kelola jadwal piket guru dengan mudah dan
                          fleksibel.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Monitoring Kehadiran
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Pastikan guru piket hadir sesuai jadwal yang
                          ditentukan.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Evaluasi Kinerja
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Pantau dan evaluasi kinerja guru piket secara berkala.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-visible relative z-10 lg:order-2">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(51, 183, 126, 0.55) 0%, rgba(184, 230, 213, 0.45) 25%, rgba(184, 230, 213, 0.25) 45%, rgba(184, 230, 213, 0.12) 65%, transparent 75%)",
                      width: 400,
                      height: 400,
                      filter: "blur(60px)",
                      zIndex: -1,
                    }}
                  />
                  <div className="grid place-items-center h-full relative">
                    <img
                      alt="[object Object]"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      src="https://ontime.qrion.id/assets/s3-wqPjfZMB.png"
                      style={{
                        filter:
                          "drop-shadow(rgba(0, 0, 0, 0.12) 0px 20px 50px)",
                        transform: "scale(1)",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`swiper-slide${idx === 3 ? " swiper-slide-active" : ""}${(idx + 1) % SLIDES === 3 ? " swiper-slide-next" : ""}`}
              data-swiper-slide-index={3}
            >
              <div className="text-center mb-10 md:mb-20 px-2 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  Kalender Akademik
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                  Kelola agenda akademik sekolah secara terstruktur.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center relative">
                <div className="relative z-10 lg:order-2">
                  <div className="grid grid-cols-1 gap-6 px-4 lg:px-8">
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Agenda Sekolah
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Kelola semua agenda dan kegiatan akademik dalam satu
                          platform.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Jadwal Ujian
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Atur jadwal ujian dan ulangan untuk menghindari
                          bentrokan.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Pengingat Otomatis
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Dapatkan notifikasi untuk setiap agenda penting
                          sekolah.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-visible relative z-10 lg:order-1">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(51, 183, 126, 0.55) 0%, rgba(184, 230, 213, 0.45) 25%, rgba(184, 230, 213, 0.25) 45%, rgba(184, 230, 213, 0.12) 65%, transparent 75%)",
                      width: 400,
                      height: 400,
                      filter: "blur(60px)",
                      zIndex: -1,
                    }}
                  />
                  <div className="grid place-items-center h-full relative">
                    <img
                      alt="Kalender Akademik"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      src="https://ontime.qrion.id/assets/s4-X-Wv-a9Y.png"
                      style={{
                        filter:
                          "drop-shadow(rgba(0, 0, 0, 0.12) 0px 20px 50px)",
                        transform: "scale(1)",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`swiper-slide${idx === 4 ? " swiper-slide-active" : ""}${(idx + 1) % SLIDES === 4 ? " swiper-slide-next" : ""}`}
              data-swiper-slide-index={4}
            >
              <div className="text-center mb-10 md:mb-20 px-2 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#33B77E] mb-3">
                  Rapor &amp; Rekapitulasi
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                  Pelaporan hasil belajar yang cepat dan aman.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center relative">
                <div className="relative z-10 lg:order-2">
                  <div className="grid grid-cols-1 gap-6 px-4 lg:px-8">
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Rapor Digital
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Akses rapor siswa secara online dengan keamanan
                          terjamin.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Rekap Nilai
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Sistem otomatis merekap nilai dari semua mata
                          pelajaran.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="w-12 h-12 md:w-16 md:h-16 text-xl md:text-2xl bg-[#B8E6D5] flex items-center justify-center text-[#33B77E] text-2xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Analisis Prestasi
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Monitor perkembangan akademik siswa dengan grafik dan
                          statistik.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-visible relative z-10 lg:order-2">
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(51, 183, 126, 0.55) 0%, rgba(184, 230, 213, 0.45) 25%, rgba(184, 230, 213, 0.25) 45%, rgba(184, 230, 213, 0.12) 65%, transparent 75%)",
                      width: 400,
                      height: 400,
                      filter: "blur(60px)",
                      zIndex: -1,
                    }}
                  />
                  <div className="grid place-items-center h-full relative">
                    <img
                      alt="Rapor & Rekapitulasi"
                      className="w-full h-auto object-contain transition-transform duration-500"
                      src="https://ontime.qrion.id/assets/s5-BHRVF6gb.png"
                      style={{
                        filter:
                          "drop-shadow(rgba(0, 0, 0, 0.12) 0px 20px 50px)",
                        transform: "scale(1)",
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <button
              type="button"
              aria-label="Slide 1"
              onClick={() => setIdx(0)}
              className={`custom-bullet${idx === 0 ? " custom-bullet-active" : ""}`}
            />
            <button
              type="button"
              aria-label="Slide 2"
              onClick={() => setIdx(1)}
              className={`custom-bullet${idx === 1 ? " custom-bullet-active" : ""}`}
            />
            <button
              type="button"
              aria-label="Slide 3"
              onClick={() => setIdx(2)}
              className={`custom-bullet${idx === 2 ? " custom-bullet-active" : ""}`}
            />
            <button
              type="button"
              aria-label="Slide 4"
              onClick={() => setIdx(3)}
              className={`custom-bullet${idx === 3 ? " custom-bullet-active" : ""}`}
            />
            <button
              type="button"
              aria-label="Slide 5"
              onClick={() => setIdx(4)}
              className={`custom-bullet${idx === 4 ? " custom-bullet-active" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
