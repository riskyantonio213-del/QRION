"use client";

import { useEffect, useState } from "react";

const TOTAL = 6;

export function OntuitionTestimonial() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % TOTAL), 8000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-[#33B77E]/15 bg-white shadow-lg shadow-zinc-200/60">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          <div className="min-w-full">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NlU_hVsmBek?si=e0afnW7UY10Vx-sA"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons mb-4 h-8 w-8 text-[#33B77E]/30"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                    Dulu mengurus administrasi sekolah secara manual, sekarang{" "}
                    <span className="font-semibold text-[#0E1E14]">
                      QRION sangat membantu kami dalam digitalisasi sekolah
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/20 text-sm font-bold text-[#33B77E]">
                      V
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E1E14]">
                        Viki Fintaru, S.T., M.T.
                      </p>
                      <p className="text-xs leading-snug text-zinc-400">
                        Kepala SMK Perbankan Pekanbaru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/laW5bMPIlhY?si=9NO2rq4yXR_3j18g"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons mb-4 h-8 w-8 text-[#33B77E]/30"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                    Sistem pembayaran yang terintegrasi membuat pekerjaan kami
                    jauh lebih efisien,{" "}
                    <span className="font-semibold text-[#0E1E14]">
                      QRION memberikan solusi terbaik untuk manajemen keuangan
                      sekolah
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/20 text-sm font-bold text-[#33B77E]">
                      V
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E1E14]">
                        Vidyana Qomaria, S.T.
                      </p>
                      <p className="text-xs leading-snug text-zinc-400">
                        Kepala MTS Masmur Pekanbaru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_V9-UtVLWus?si=dVb1IZSoj6BgrR96"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons mb-4 h-8 w-8 text-[#33B77E]/30"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                    Sistem pembayaran yang terintegrasi membuat pekerjaan kami
                    jauh lebih efisien,{" "}
                    <span className="font-semibold text-[#0E1E14]">
                      QRION memberikan solusi terbaik untuk manajemen keuangan
                      sekolah
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/20 text-sm font-bold text-[#33B77E]">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E1E14]">
                        Abuya H.Ahmad Junaidi Jamarin
                      </p>
                      <p className="text-xs leading-snug text-zinc-400">
                        Ketua Yayasan &amp; Pimpinan Pondok Pesantren syekh
                        Burhanuddin Kuntu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fFs9Hc7ttQg?si=-foJsBrqHDKAxZyN"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons mb-4 h-8 w-8 text-[#33B77E]/30"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                    Sistem pembayaran yang terintegrasi membuat pekerjaan kami
                    jauh lebih efisien,{" "}
                    <span className="font-semibold text-[#0E1E14]">
                      QRION memberikan solusi terbaik untuk manajemen keuangan
                      sekolah
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/20 text-sm font-bold text-[#33B77E]">
                      H
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E1E14]">
                        H. Ir. Sutan Lazrisyah, MT
                      </p>
                      <p className="text-xs leading-snug text-zinc-400">
                        Ketua Yayasan Pendidikan I&apos;aanatuth thalibin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VCV6DLLUvtM?si=7RkKWv-dgoHN0Yxb"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons mb-4 h-8 w-8 text-[#33B77E]/30"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                    Sistem pembayaran yang terintegrasi membuat pekerjaan kami
                    jauh lebih efisien,{" "}
                    <span className="font-semibold text-[#0E1E14]">
                      QRION memberikan solusi terbaik untuk manajemen keuangan
                      sekolah
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/20 text-sm font-bold text-[#33B77E]">
                      H
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E1E14]">
                        Haidi, S.Pd., M.Pd.
                      </p>
                      <p className="text-xs leading-snug text-zinc-400">
                        Kepala Sekolah SMPIT Tahfizh Al-Fatih Pekanbaru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-full">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-tl-3xl rounded-bl-none rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl bg-zinc-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/jwZSBUKVPaQ?si=4yHffb99vr-WZ6Rl"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons mb-4 h-8 w-8 text-[#33B77E]/30"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                    Sistem pembayaran yang terintegrasi membuat pekerjaan kami
                    jauh lebih efisien,{" "}
                    <span className="font-semibold text-[#0E1E14]">
                      QRION memberikan solusi terbaik untuk manajemen keuangan
                      sekolah
                    </span>
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/20 text-sm font-bold text-[#33B77E]">
                      D
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0E1E14]">
                        DR.KH.Hamdani Purba, Lc., M.A.
                      </p>
                      <p className="text-xs leading-snug text-zinc-400">
                        Pimpinan Pondok Pesantren Syafaaturasul Kuantan Singingi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-100 px-6 py-4">
          <span className="text-xs font-medium text-zinc-400">
            <span className="text-[#33B77E]">{idx + 1}</span> / {TOTAL}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              className={`rounded-full transition-all duration-300 ${idx === 0 ? "w-6 h-2 bg-[#33B77E]" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"}`}
              onClick={() => setIdx(0)}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label="Testimonial 1"
            />
            <button
              className={`rounded-full transition-all duration-300 ${idx === 1 ? "w-6 h-2 bg-[#33B77E]" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"}`}
              onClick={() => setIdx(1)}
              aria-current={idx === 1 ? "true" : undefined}
              aria-label="Testimonial 2"
            />
            <button
              className={`rounded-full transition-all duration-300 ${idx === 2 ? "w-6 h-2 bg-[#33B77E]" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"}`}
              onClick={() => setIdx(2)}
              aria-current={idx === 2 ? "true" : undefined}
              aria-label="Testimonial 3"
            />
            <button
              className={`rounded-full transition-all duration-300 ${idx === 3 ? "w-6 h-2 bg-[#33B77E]" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"}`}
              onClick={() => setIdx(3)}
              aria-current={idx === 3 ? "true" : undefined}
              aria-label="Testimonial 4"
            />
            <button
              className={`rounded-full transition-all duration-300 ${idx === 4 ? "w-6 h-2 bg-[#33B77E]" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"}`}
              onClick={() => setIdx(4)}
              aria-current={idx === 4 ? "true" : undefined}
              aria-label="Testimonial 5"
            />
            <button
              className={`rounded-full transition-all duration-300 ${idx === 5 ? "w-6 h-2 bg-[#33B77E]" : "w-2 h-2 bg-zinc-200 hover:bg-zinc-300"}`}
              onClick={() => setIdx(5)}
              aria-current={idx === 5 ? "true" : undefined}
              aria-label="Testimonial 6"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all duration-200 hover:border-[#33B77E]/30 hover:bg-[#33B77E]/8"
              type="button"
              onClick={() => setIdx((idx + TOTAL - 1) % TOTAL)}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--heroicons h-4 w-4 text-zinc-400"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all duration-200 hover:border-[#33B77E]/30 hover:bg-[#33B77E]/8"
              type="button"
              onClick={() => setIdx((idx + 1) % TOTAL)}
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--heroicons h-4 w-4 text-zinc-400"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m8.25 4.5l7.5 7.5l-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
