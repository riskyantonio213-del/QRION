import type { ProductDesign } from "./types";

import { OntuitionFaq } from "./interactive/ontuition-faq";
import { OntuitionPricing } from "./interactive/ontuition-pricing";
import { OntuitionTestimonial } from "./interactive/ontuition-testimonial";

/**
 * Halaman Ontuition — salinan penuh (plek ketiplek) dari
 * https://ontuition.qrion.id/ (DOM setelah JS, tanpa navbar & footer asli).
 * Gambar diarahkan ke domain asli; keyframes diambil dari CSS mereka.
 */
const ontuitionKeyframes = `
@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes floatBadge{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}
@keyframes marqueeReverse{0%{transform:translate(-50%)}to{transform:translate(0)}}
`;

function OntuitionPage() {
  return (
    <div className="min-h-full bg-white font-sans text-gray-900">
      <style>{ontuitionKeyframes}</style>
      <div>
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#F0FBF7] to-[#E8F8F1]">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #33B77E 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#33B77E]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#33B77E]/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 left-1/3 h-56 w-56 rounded-full bg-[#33B77E]/5 blur-2xl" />
          <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-6 py-16">
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#33B77E] shadow-sm backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#33B77E]" />
                  </span>
                  Platform Keuangan Sekolah di Indonesia
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-5xl lg:text-6xl">
                    <span className="text-[#33B77E]">Kelola Tagihan</span>
                    <br />
                    <span className="text-[#33B77E]">&amp; Pembayaran</span>
                    <br />
                    <span className="text-[#0E1E14]">Sekolah Lebih</span>
                    <br />
                    <span className="relative inline-block text-[#0E1E14]">
                      Rapi &amp; Otomatis
                    </span>
                  </h1>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-zinc-600 md:text-base">
                  Kelola pembayaran SPP, uang buku, dan laporan keuangan sekolah
                  secara{" "}
                  <span className="font-semibold text-[#0E1E14]">
                    otomatis &amp; real-time
                  </span>
                  . Terintegrasi dengan semua channel pembayaran &amp; QRIS
                  Mobile.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20keuangan%20Ontuition.%20Boleh%20dibantu?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#20BA5A] hover:scale-105 hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ic h-5 w-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                    Konsultasi Gratis
                  </a>
                  <a href="https://demo-admin.ontuition.qrion.id/logindemo">
                    <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#33B77E] bg-white px-6 py-3 text-sm font-semibold text-[#33B77E] shadow-md shadow-[#33B77E]/10 transition-all duration-300 hover:bg-[#33B77E] hover:text-white hover:scale-105 hover:shadow-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                          <path d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327z" />
                        </g>
                      </svg>
                      Coba Trial 14 Hari
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-0 bottom-4 h-24 rounded-3xl bg-[#33B77E]/20 blur-3xl" />
                <div className="absolute inset-x-12 bottom-0 h-12 rounded-3xl bg-[#33B77E]/15 blur-2xl" />
                <div className="relative w-full max-w-lg animate-[float_4s_ease-in-out_infinite]">
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-[#33B77E]/15 ring-1 ring-black/5">
                    <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/90 px-3 py-2">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white px-2 py-1 text-[9px] text-zinc-400 ring-1 ring-zinc-200/80">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2 w-2 shrink-0 text-[#33B77E]"
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
                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25"
                          />
                        </svg>
                        <span className="truncate">
                          admin.ontuition.qrion.id/dashboard
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFB] p-3">
                      <div className="mb-3 flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-zinc-100">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-[#33B77E] flex items-center justify-center shadow-sm shadow-[#33B77E]/30">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3.5 w-3.5 text-white"
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
                                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold text-[#0E1E14]">
                            Dashboard
                          </span>
                          <span className="text-[8px] text-zinc-400">
                            — Senin, 18 Nov 2025
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="relative h-6 w-6 rounded-full bg-[#33B77E]/10 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-[#33B77E]"
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
                                d="M14.857 17.082a24 24 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                              />
                            </svg>
                            <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
                            </span>
                          </div>
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#33B77E] to-[#2a9666] shadow-sm" />
                        </div>
                      </div>
                      <div className="mb-3 grid grid-cols-4 gap-1.5">
                        <div className="rounded-xl bg-white border border-zinc-100/80 p-2 shadow-sm">
                          <div className="mb-1 flex h-5 w-5 items-center justify-center rounded-lg bg-zinc-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-[#0E1E14]"
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
                                d="M2.25 18.75a60 60 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m3 0h.008v.008H18zm-12 0h.008v.008H6z"
                              />
                            </svg>
                          </div>
                          <p className="text-[9px] font-bold leading-none text-[#0E1E14]">
                            Rp48jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] text-zinc-400 leading-tight">
                            Total Tagihan
                          </p>
                        </div>
                        <div className="rounded-xl bg-[#33B77E]/5 border border-zinc-100/80 p-2 shadow-sm">
                          <div className="mb-1 flex h-5 w-5 items-center justify-center rounded-lg bg-[#33B77E]/15">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-[#33B77E]"
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
                                d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                              />
                            </svg>
                          </div>
                          <p className="text-[9px] font-bold leading-none text-[#33B77E]">
                            Rp32jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] text-zinc-400 leading-tight">
                            Dibayar
                          </p>
                        </div>
                        <div className="rounded-xl bg-amber-50 border border-zinc-100/80 p-2 shadow-sm">
                          <div className="mb-1 flex h-5 w-5 items-center justify-center rounded-lg bg-amber-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-amber-500"
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
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                              />
                            </svg>
                          </div>
                          <p className="text-[9px] font-bold leading-none text-amber-500">
                            Rp16jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] text-zinc-400 leading-tight">
                            Belum Lunas
                          </p>
                        </div>
                        <div className="rounded-xl bg-red-50 border border-zinc-100/80 p-2 shadow-sm">
                          <div className="mb-1 flex h-5 w-5 items-center justify-center rounded-lg bg-red-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-red-500"
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
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 3.75h.008v.008H12z"
                              />
                            </svg>
                          </div>
                          <p className="text-[9px] font-bold leading-none text-red-500">
                            Rp4jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] text-zinc-400 leading-tight">
                            Tunggakan
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2 rounded-xl bg-white p-2.5 shadow-sm border border-zinc-100">
                          <div className="mb-1.5 flex items-center justify-between">
                            <p className="text-[9px] font-semibold text-zinc-600">
                              Pembayaran per Bulan
                            </p>
                            <span className="rounded-full bg-[#33B77E]/10 px-1.5 py-0.5 text-[7px] font-semibold text-[#33B77E]">
                              +12%
                            </span>
                          </div>
                          <div className="flex items-end gap-0.5 h-14">
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "35%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "58%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "42%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "75%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "50%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "88%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "65%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "82%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/20"
                                style={{ height: "55%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/50"
                                style={{ height: "92%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E]/50"
                                style={{ height: "70%" }}
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-sm bg-[#33B77E] shadow-sm shadow-[#33B77E]/30"
                                style={{ height: "95%" }}
                              />
                            </div>
                          </div>
                          <div className="mt-1 grid grid-cols-6 gap-0">
                            <span className="text-center text-[6px] text-zinc-300">
                              Jan
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Mar
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Mei
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Jul
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Sep
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Des
                            </span>
                          </div>
                        </div>
                        <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-zinc-100 flex flex-col items-center justify-center">
                          <p className="mb-1 text-[8px] font-semibold text-zinc-500">
                            Status
                          </p>
                          <div className="relative h-14 w-14">
                            <svg
                              viewBox="0 0 36 36"
                              className="h-14 w-14 -rotate-90"
                            >
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#F0FBF7"
                                strokeWidth="4.5"
                              />
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#33B77E"
                                strokeWidth="4.5"
                                strokeDasharray="66 34"
                                strokeLinecap="round"
                              />
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#FCD34D"
                                strokeWidth="4.5"
                                strokeDasharray="20 80"
                                strokeDashoffset={-66}
                                strokeLinecap="round"
                              />
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#FCA5A5"
                                strokeWidth="4.5"
                                strokeDasharray="8 92"
                                strokeDashoffset={-86}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-[10px] font-extrabold text-[#33B77E]">
                                66%
                              </span>
                              <span className="text-[6px] text-zinc-400">
                                Lunas
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 space-y-0.5 w-full px-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                                <span className="text-[6.5px] text-zinc-400">
                                  Lunas
                                </span>
                              </div>
                              <span className="text-[6.5px] font-semibold text-zinc-500">
                                66%
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                                <span className="text-[6.5px] text-zinc-400">
                                  Proses
                                </span>
                              </div>
                              <span className="text-[6.5px] font-semibold text-zinc-500">
                                20%
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-red-300" />
                                <span className="text-[6.5px] text-zinc-400">
                                  Tunggak
                                </span>
                              </div>
                              <span className="text-[6.5px] font-semibold text-zinc-500">
                                8%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 rounded-xl bg-white p-2.5 shadow-sm border border-zinc-100">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-[9px] font-semibold text-zinc-600">
                            Transaksi Terbaru
                          </p>
                          <span className="flex items-center gap-0.5 text-[7.5px] font-medium text-[#33B77E]">
                            Lihat semua{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5"
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
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between rounded-lg px-1.5 py-1 transition-colors hover:bg-zinc-50">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-[#33B77E]">
                                A
                              </div>
                              <div>
                                <p className="text-[8px] font-semibold text-zinc-700">
                                  Ahmad Rafi
                                </p>
                                <p className="text-[6.5px] text-zinc-400">
                                  XII IPA 1
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] font-bold text-zinc-700">
                                Rp500.000
                              </span>
                              <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-[#33B77E]/10 text-[#33B77E]">
                                <span className="h-1 w-1 rounded-full bg-[#33B77E]" />
                                Lunas
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-lg px-1.5 py-1 transition-colors hover:bg-zinc-50">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-amber-400">
                                S
                              </div>
                              <div>
                                <p className="text-[8px] font-semibold text-zinc-700">
                                  Siti Aminah
                                </p>
                                <p className="text-[6.5px] text-zinc-400">
                                  XI IPS 2
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] font-bold text-zinc-700">
                                Rp750.000
                              </span>
                              <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-amber-50 text-amber-500">
                                <span className="h-1 w-1 rounded-full bg-amber-400" />
                                Proses
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-lg px-1.5 py-1 transition-colors hover:bg-zinc-50">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-[#33B77E]">
                                B
                              </div>
                              <div>
                                <p className="text-[8px] font-semibold text-zinc-700">
                                  Budi Santoso
                                </p>
                                <p className="text-[6.5px] text-zinc-400">
                                  X MIPA 3
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] font-bold text-zinc-700">
                                Rp500.000
                              </span>
                              <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-[#33B77E]/10 text-[#33B77E]">
                                <span className="h-1 w-1 rounded-full bg-[#33B77E]" />
                                Lunas
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative mx-4">
                    <div className="h-2.5 w-full rounded-b-lg bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-sm" />
                    <div className="mx-auto h-1 w-5/6 rounded-b-xl bg-zinc-300/60" />
                    <div className="mx-auto h-0.5 w-4/6 rounded-b-xl bg-zinc-200/60" />
                  </div>
                </div>
                <div className="absolute -right-3 top-10 z-20 hidden sm:flex animate-[floatBadge_3s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#33B77E]" />
                  </span>
                  <span className="text-[11px] font-semibold text-[#0E1E14]">
                    Update Real-Time
                  </span>
                </div>
                <div className="absolute -right-3 bottom-16 z-20 hidden sm:flex animate-[floatBadge_3.5s_ease-in-out_infinite_0.5s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#33B77E] shadow-sm shadow-[#33B77E]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-4 w-4 text-white"
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
                        d="m4.5 12.75l6 6l9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Pembayaran Masuk
                    </p>
                    <p className="text-[9px] text-[#33B77E] font-medium">
                      + Rp500.000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          id="mitra"
          className="jsx-9214055e3b40753b relative overflow-hidden bg-gradient-to-b from-[#F0FBF7] to-white py-16"
        >
          <div className="jsx-9214055e3b40753b pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#33B77E]/5 blur-3xl" />
          <div className="jsx-9214055e3b40753b relative mx-auto max-w-6xl px-6">
            <div className="jsx-9214055e3b40753b mb-12 text-center">
              <div className="jsx-9214055e3b40753b mb-4 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-[#33B77E]/10 px-4 py-1.5 text-xs font-semibold text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-4 w-4"
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008zm0 3h.008v.008h-.008zm0 3h.008v.008h-.008z"
                  />
                </svg>
                Dipercaya ratusan institusi pendidikan
              </div>
              <h2 className="jsx-9214055e3b40753b text-3xl font-bold text-[#0E1E14] md:text-4xl">
                Dipercaya Banyak Sekolah di{" "}
                <span className="jsx-9214055e3b40753b text-[#33B77E]">
                  Seluruh Indonesia
                </span>
              </h2>
              <p className="jsx-9214055e3b40753b mx-auto mt-3 max-w-xl text-sm text-zinc-500 md:text-base">
                Dari sekolah dasar hingga yayasan, Ontuition telah membantu
                bendahara sekolah bekerja lebih efisien dan transparan.
              </p>
            </div>
            <div className="jsx-9214055e3b40753b space-y-6">
              <div
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
                className="jsx-9214055e3b40753b relative overflow-hidden"
              >
                <div className="jsx-9214055e3b40753b flex animate-[marquee_28s_linear_infinite] gap-6">
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 1"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 5"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 7"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 8"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 4"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 6"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 1"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 5"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 7"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 8"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 4"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 6"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                }}
                className="jsx-9214055e3b40753b relative overflow-hidden"
              >
                <div className="jsx-9214055e3b40753b flex animate-[marqueeReverse_22s_linear_infinite] gap-6">
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 4"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 6"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 1"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 8"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 5"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 7"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 4"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F4.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 2"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F2.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 6"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F6.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 1"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F1.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 8"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F8.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 3"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F3.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 5"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F5.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="jsx-9214055e3b40753b group relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                    <div className="jsx-9214055e3b40753b h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-[#33B77E]/40 group-hover:shadow-md group-hover:shadow-[#33B77E]/10 group-hover:-translate-y-1">
                      <img
                        alt="School Logo 7"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-contain p-1 transition-all duration-300 group-hover:scale-110"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=640&q=75 640w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=750&q=75 750w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=828&q=75 828w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1080&q=75 1080w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1200&q=75 1200w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=1920&q=75 1920w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=2048&q=75 2048w, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75 3840w"
                        src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection2%2F7.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="fitur"
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FBF7] to-[#E8F8F1] py-28"
        >
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(51,183,126,0.18) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="pointer-events-none absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-[#33B77E]/12 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[360px] w-[360px] rounded-full bg-[#33B77E]/10 blur-[80px]" />
          <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full border border-[#33B77E]/12" />
          <div className="pointer-events-none absolute -left-20 top-1/3 h-48 w-48 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -right-16 bottom-1/4 h-56 w-56 rounded-full border border-[#33B77E]/8" />
          <div className="pointer-events-none absolute left-[8%] top-[15%] h-3 w-3 rounded-full bg-[#33B77E]/30" />
          <div className="pointer-events-none absolute left-[18%] top-[60%] h-2 w-2 rounded-full bg-[#33B77E]/25" />
          <div className="pointer-events-none absolute right-[12%] top-[25%] h-4 w-4 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[22%] bottom-[20%] h-2.5 w-2.5 rounded-full bg-[#33B77E]/30" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mb-20 text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5"
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
                    d="m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5z"
                  />
                </svg>
                Fitur Unggulan
              </div>
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-5xl lg:text-6xl">
                Semua yang Sekolah Butuhkan, <br className="hidden md:block" />
                <span className="text-[#33B77E]">Dalam Satu Platform</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                Dari pembayaran otomatis hingga laporan akuntansi.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#33B77E] to-[#22956A] p-8 md:col-span-7">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute right-6 bottom-6 h-40 w-40 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute right-14 bottom-10 h-20 w-20 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--mdi h-6 w-6 text-white"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M4 4h6v6H4zm16 0v6h-6V4zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zM4 20v-6h6v6zM6 6v2h2V6zm10 0v2h2V6zM6 16v2h2v-2zm-2-5h2v2H4zm5 0h4v4h-2v-2H9zm2-5h2v4h-2zM2 2v4H0V2a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V2h-4V0zM2 18v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                        Fitur 01
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                      Otomatisasi Pembayaran
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-white/75">
                      Setiap transaksi tercatat otomatis tanpa input manual.
                      Terintegrasi langsung dengan QRIS, Virtual Account, dan
                      semua e-Wallet populer.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3"
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
                            d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                        QRIS
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3"
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
                            d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                        Virtual Account
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3"
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
                            d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                        e-Wallet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/20 bg-white p-7 shadow-sm md:col-span-5 transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-lg hover:shadow-[#33B77E]/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#33B77E]/10 blur-2xl" />
                <div className="pointer-events-none absolute left-0 bottom-0 h-24 w-24 rounded-full border border-[#33B77E]/8" />
                <div className="relative flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#33B77E]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--mdi h-6 w-6 text-[#33B77E]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                        Fitur 02
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#0E1E14]">
                      Laporan Real-Time
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Pantau arus kas dan status pembayaran kapan pun. Laporan
                      otomatis siap diunduh dalam satu klik.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-3 py-1 text-xs font-medium text-[#33B77E]">
                        Arus Kas
                      </span>
                      <span className="rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-3 py-1 text-xs font-medium text-[#33B77E]">
                        Export PDF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/20 bg-white p-7 shadow-sm md:col-span-5 transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-lg hover:shadow-[#33B77E]/10">
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-[#33B77E]/10 blur-2xl" />
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full border border-[#33B77E]/8" />
                <div className="relative flex h-full flex-col justify-between gap-5">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#33B77E]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--mdi h-6 w-6 text-[#33B77E]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m19 2l-5 4.5v11l5-4.5zM6.5 5C4.55 5 2.45 5.4 1 6.5v14.66c0 .25.25.5.5.5c.1 0 .15-.07.25-.07c1.35-.65 3.3-1.09 4.75-1.09c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.31 4.75 1.06c.1.05.15.03.25.03c.25 0 .5-.25.5-.5V6.5c-.6-.45-1.25-.75-2-1V19c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6.5C10.55 5.4 8.45 5 6.5 5"
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                        Fitur 03
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#0E1E14]">
                      Jurnal Akuntansi Lengkap
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Jurnal monitoring, jurnal pembayaran, jurnal transit,
                      jurnal rekening sekolah semua tersusun otomatis.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-3 py-1 text-xs font-medium text-[#33B77E]">
                        Buku Besar
                      </span>
                      <span className="rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-3 py-1 text-xs font-medium text-[#33B77E]">
                        Neraca
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/25 bg-gradient-to-br from-[#E8F8F1] via-[#F0FBF7] to-white p-8 md:col-span-7 transition-all duration-300 hover:border-[#33B77E]/50 hover:shadow-lg hover:shadow-[#33B77E]/10">
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[#33B77E]/15 blur-3xl" />
                <div className="pointer-events-none absolute left-4 top-4 h-28 w-28 rounded-full border border-[#33B77E]/15" />
                <div className="pointer-events-none absolute left-10 top-10 h-12 w-12 rounded-full border border-[#33B77E]/10" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#33B77E]/25 ring-1 ring-[#33B77E]/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#33B77E]/35">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--mdi h-6 w-6 text-[#33B77E]"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.98 2.98 0 0 0 0-4.24a2.98 2.98 0 0 0-4.24 0l-3.53 3.53a2.98 2.98 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.98 2.98 0 0 0 0 4.24a2.98 2.98 0 0 0 4.24 0l3.53-3.53a2.98 2.98 0 0 0 0-4.24a.973.973 0 0 1 0-1.42"
                          />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Fitur 04
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#0E1E14] md:text-3xl">
                      Integrasi Sistem Qrion
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                      Hubungkan wali murid dan sistem pembayaran dengan satu
                      klik. Notifikasi otomatis langsung ke orang tua via
                      WhatsApp.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-3 py-1.5 text-xs font-semibold text-[#33B77E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3"
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
                            d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                        WhatsApp
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-3 py-1.5 text-xs font-semibold text-[#33B77E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3"
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
                            d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                        Notifikasi
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-3 py-1.5 text-xs font-semibold text-[#33B77E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3"
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
                            d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                        Orang Tua
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              <div className="group flex items-center gap-3 rounded-2xl border border-[#33B77E]/20 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-md hover:shadow-[#33B77E]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E]"
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-[#33B77E]">
                    80%
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Hemat Waktu Bendahara
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-3 rounded-2xl border border-[#33B77E]/20 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-md hover:shadow-[#33B77E]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E]"
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
                      d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-[#33B77E]">
                    99.9%
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Akurasi Laporan
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-3 rounded-2xl border border-[#33B77E]/20 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-md hover:shadow-[#33B77E]/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E]"
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
                      d="M8.625 9.75a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227q1.63.24 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332a48 48 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold leading-none text-[#33B77E]">
                    24/7
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    Support Tersedia
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="https://demo-admin.ontuition.qrion.id/logindemo">
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#33B77E] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#33B77E]/30 transition-all duration-300 hover:bg-[#2a9666] hover:scale-105 hover:shadow-xl hover:shadow-[#33B77E]/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-5 w-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                        <path d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327z" />
                      </g>
                    </svg>
                    Coba Trial 14 Hari
                  </button>
                </a>
                <a
                  href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20keuangan%20Ontuition.%20Boleh%20dibantu?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#33B77E] bg-white px-7 py-3 text-sm font-semibold text-[#33B77E] shadow-sm transition-all duration-300 hover:bg-[#33B77E] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#33B77E]/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ic h-5 w-5 text-[#25D366]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-white py-24">
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="mb-14 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-4 py-1.5 text-xs font-semibold text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5"
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
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                Dashboard Real-Time
              </div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0E1E14] md:text-4xl lg:text-5xl">
                Semua Data Keuangan{" "}
                <span className="text-[#33B77E]">dalam Satu Layar</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                Pantau transaksi, tagihan, dan progres pembayaran secara
                real-time — tanpa perlu buka spreadsheet lagi.
              </p>
            </div>
            <div className="relative mx-auto">
              <div className="absolute inset-x-8 -bottom-4 h-16 rounded-3xl bg-[#33B77E]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-[#33B77E]/10 ring-1 ring-black/5 animate-[float_5s_ease-in-out_infinite]">
                <div className="flex items-center gap-3 border-b border-zinc-100 bg-zinc-50/90 px-5 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-zinc-400 ring-1 ring-zinc-200/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-2.5 w-2.5 shrink-0 text-[#33B77E]"
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
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25"
                      />
                    </svg>
                    <span className="truncate">
                      admin.ontuition.qrion.id/dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-3.5 w-3.5"
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
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-3.5 w-3.5"
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#F1F5F9] px-0 pb-0">
                  <div className="flex h-[420px] overflow-hidden">
                    <div className="hidden w-36 shrink-0 flex-col border-r border-zinc-100 bg-white px-3 py-4 md:flex">
                      <div className="mb-5 flex items-center gap-2 px-1">
                        <div className="h-6 w-6 rounded-lg bg-[#33B77E] flex items-center justify-center shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--heroicons h-3.5 w-3.5 text-white"
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
                              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"
                            />
                          </svg>
                        </div>
                        <span className="text-[10px] font-extrabold text-[#0E1E14]">
                          ontuition
                        </span>
                      </div>
                      <div className="mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 bg-[#33B77E]/10 text-[#33B77E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 shrink-0"
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
                            d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                        <span className="text-[9px] font-medium">
                          Dashboard
                        </span>
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                      </div>
                      <div className="mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-zinc-400 hover:bg-zinc-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 shrink-0"
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
                            d="M2.25 18.75a60 60 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m3 0h.008v.008H18zm-12 0h.008v.008H6z"
                          />
                        </svg>
                        <span className="text-[9px] font-medium">Tagihan</span>
                      </div>
                      <div className="mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-zinc-400 hover:bg-zinc-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 shrink-0"
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
                            d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0"
                          />
                        </svg>
                        <span className="text-[9px] font-medium">Siswa</span>
                      </div>
                      <div className="mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-zinc-400 hover:bg-zinc-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 shrink-0"
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
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125z"
                          />
                        </svg>
                        <span className="text-[9px] font-medium">Laporan</span>
                      </div>
                      <div className="mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-zinc-400 hover:bg-zinc-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 shrink-0"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z" />
                            <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                          </g>
                        </svg>
                        <span className="text-[9px] font-medium">
                          Pengaturan
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3">
                      <div className="mb-3 flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-zinc-100">
                        <div>
                          <p className="text-[10px] font-bold text-[#0E1E14]">
                            Selamat Datang, Admin 👋
                          </p>
                          <p className="text-[8px] text-zinc-400">
                            SMAN 1 Pekanbaru — Senin, 18 Nov 2025
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative h-6 w-6 rounded-full bg-[#33B77E]/10 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-[#33B77E]"
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
                                d="M14.857 17.082a24 24 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                              />
                            </svg>
                            <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
                            </span>
                          </div>
                          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#33B77E] to-[#2a9666] ring-2 ring-[#33B77E]/20 shadow-sm" />
                        </div>
                      </div>
                      <div className="mb-3 grid grid-cols-4 gap-2">
                        <div className="rounded-xl bg-white border border-zinc-100 p-2 shadow-sm">
                          <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3.5 w-3.5 text-[#0E1E14]"
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
                                d="M2.25 18.75a60 60 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m3 0h.008v.008H18zm-12 0h.008v.008H6z"
                              />
                            </svg>
                          </div>
                          <p className="text-[10px] font-extrabold leading-none text-[#0E1E14]">
                            Rp48jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] leading-tight text-zinc-400">
                            Total Tagihan
                          </p>
                        </div>
                        <div className="rounded-xl bg-[#33B77E]/5 border border-zinc-100 p-2 shadow-sm">
                          <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-[#33B77E]/15">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                                d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                              />
                            </svg>
                          </div>
                          <p className="text-[10px] font-extrabold leading-none text-[#33B77E]">
                            Rp32jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] leading-tight text-zinc-400">
                            Sudah Bayar
                          </p>
                        </div>
                        <div className="rounded-xl bg-amber-50 border border-zinc-100 p-2 shadow-sm">
                          <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-amber-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3.5 w-3.5 text-amber-500"
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
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                              />
                            </svg>
                          </div>
                          <p className="text-[10px] font-extrabold leading-none text-amber-500">
                            Rp12jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] leading-tight text-zinc-400">
                            Belum Lunas
                          </p>
                        </div>
                        <div className="rounded-xl bg-red-50 border border-zinc-100 p-2 shadow-sm">
                          <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-red-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3.5 w-3.5 text-red-500"
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
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 3.75h.008v.008H12z"
                              />
                            </svg>
                          </div>
                          <p className="text-[10px] font-extrabold leading-none text-red-500">
                            Rp4jt
                          </p>
                          <p className="mt-0.5 text-[6.5px] leading-tight text-zinc-400">
                            Tunggakan
                          </p>
                        </div>
                      </div>
                      <div className="mb-3 grid grid-cols-3 gap-2">
                        <div className="col-span-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-100">
                          <div className="mb-2 flex items-center justify-between">
                            <p className="text-[9px] font-semibold text-zinc-600">
                              Pembayaran per Bulan
                            </p>
                            <div className="flex items-center gap-1">
                              <span className="rounded-full bg-[#33B77E]/10 px-1.5 py-0.5 text-[7px] font-bold text-[#33B77E]">
                                ▲ 12%
                              </span>
                              <span className="text-[7px] text-zinc-400">
                                vs bln lalu
                              </span>
                            </div>
                          </div>
                          <div className="flex items-end gap-1 h-16">
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "30%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "55%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "40%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "70%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "48%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "85%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "62%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "78%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/20 group-hover/bar:bg-[#33B77E]/40"
                                style={{ height: "52%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/60"
                                style={{ height: "88%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E]/60"
                                style={{ height: "68%" }}
                              />
                            </div>
                            <div className="group/bar flex-1 flex flex-col items-center justify-end">
                              <div
                                className="w-full rounded-t-sm transition-all duration-700 bg-[#33B77E] shadow-sm shadow-[#33B77E]/40"
                                style={{ height: "95%" }}
                              />
                            </div>
                          </div>
                          <div className="mt-1.5 grid grid-cols-6 gap-0 border-t border-zinc-50 pt-1">
                            <span className="text-center text-[6px] text-zinc-300">
                              Jan
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Mar
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Mei
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Jul
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Sep
                            </span>
                            <span className="text-center text-[6px] text-zinc-300">
                              Des
                            </span>
                          </div>
                        </div>
                        <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-zinc-100 flex flex-col items-center justify-center">
                          <p className="mb-2 text-[8px] font-semibold text-zinc-500">
                            Status Bayar
                          </p>
                          <div className="relative h-16 w-16">
                            <svg
                              viewBox="0 0 36 36"
                              className="h-16 w-16 -rotate-90"
                            >
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#F0FBF7"
                                strokeWidth={5}
                              />
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#33B77E"
                                strokeWidth={5}
                                strokeDasharray="67 33"
                                strokeLinecap="round"
                              />
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#FCD34D"
                                strokeWidth={5}
                                strokeDasharray="20 80"
                                strokeDashoffset={-67}
                                strokeLinecap="round"
                              />
                              <circle
                                cx={18}
                                cy={18}
                                r={13}
                                fill="none"
                                stroke="#FCA5A5"
                                strokeWidth={5}
                                strokeDasharray="8 92"
                                strokeDashoffset={-87}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-[11px] font-extrabold text-[#33B77E]">
                                67%
                              </span>
                              <span className="text-[6px] text-zinc-400">
                                Lunas
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 w-full space-y-1 px-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                                <span className="text-[6.5px] text-zinc-400">
                                  Lunas
                                </span>
                              </div>
                              <span className="text-[6.5px] font-bold text-zinc-500">
                                67%
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                                <span className="text-[6.5px] text-zinc-400">
                                  Proses
                                </span>
                              </div>
                              <span className="text-[6.5px] font-bold text-zinc-500">
                                20%
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-red-300" />
                                <span className="text-[6.5px] text-zinc-400">
                                  Lewat
                                </span>
                              </div>
                              <span className="text-[6.5px] font-bold text-zinc-500">
                                8%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white shadow-sm ring-1 ring-zinc-100 overflow-hidden">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-50">
                          <p className="text-[9px] font-semibold text-zinc-600">
                            Transaksi Terbaru
                          </p>
                          <span className="flex items-center gap-0.5 text-[7.5px] font-medium text-[#33B77E]">
                            Lihat semua{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5"
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
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 bg-zinc-50/80 px-3 py-1.5">
                          <span className="text-[7px] font-semibold uppercase tracking-wide text-zinc-400">
                            Nama Siswa
                          </span>
                          <span className="text-[7px] font-semibold uppercase tracking-wide text-zinc-400">
                            Jenis Tagihan
                          </span>
                          <span className="text-[7px] font-semibold uppercase tracking-wide text-zinc-400">
                            Nominal
                          </span>
                          <span className="text-[7px] font-semibold uppercase tracking-wide text-zinc-400">
                            Status
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 px-3 py-1.5 transition-colors hover:bg-[#F0FBF7] ">
                          <div className="flex items-center gap-1.5">
                            <div className="h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-[#33B77E]">
                              A
                            </div>
                            <span className="text-[8px] font-medium text-zinc-700 truncate">
                              Ahmad Rafi
                            </span>
                          </div>
                          <span className="flex items-center text-[7.5px] text-zinc-500 truncate">
                            SPP Bulanan
                          </span>
                          <span className="flex items-center text-[8px] font-semibold text-zinc-700">
                            Rp500.000
                          </span>
                          <div className="flex items-center">
                            <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-[#33B77E]/10 text-[#33B77E]">
                              <span className="h-1 w-1 rounded-full bg-[#33B77E]" />
                              Lunas
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 px-3 py-1.5 transition-colors hover:bg-[#F0FBF7] bg-zinc-50/40">
                          <div className="flex items-center gap-1.5">
                            <div className="h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-amber-400">
                              S
                            </div>
                            <span className="text-[8px] font-medium text-zinc-700 truncate">
                              Siti Aminah
                            </span>
                          </div>
                          <span className="flex items-center text-[7.5px] text-zinc-500 truncate">
                            Uang Buku
                          </span>
                          <span className="flex items-center text-[8px] font-semibold text-zinc-700">
                            Rp250.000
                          </span>
                          <div className="flex items-center">
                            <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-amber-50 text-amber-500">
                              <span className="h-1 w-1 rounded-full bg-amber-400" />
                              Proses
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 px-3 py-1.5 transition-colors hover:bg-[#F0FBF7] ">
                          <div className="flex items-center gap-1.5">
                            <div className="h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-[#33B77E]">
                              B
                            </div>
                            <span className="text-[8px] font-medium text-zinc-700 truncate">
                              Budi Santoso
                            </span>
                          </div>
                          <span className="flex items-center text-[7.5px] text-zinc-500 truncate">
                            SPP Bulanan
                          </span>
                          <span className="flex items-center text-[8px] font-semibold text-zinc-700">
                            Rp500.000
                          </span>
                          <div className="flex items-center">
                            <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-[#33B77E]/10 text-[#33B77E]">
                              <span className="h-1 w-1 rounded-full bg-[#33B77E]" />
                              Lunas
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 px-3 py-1.5 transition-colors hover:bg-[#F0FBF7] bg-zinc-50/40">
                          <div className="flex items-center gap-1.5">
                            <div className="h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-red-400">
                              D
                            </div>
                            <span className="text-[8px] font-medium text-zinc-700 truncate">
                              Dewi Rahayu
                            </span>
                          </div>
                          <span className="flex items-center text-[7.5px] text-zinc-500 truncate">
                            Uang Kegiatan
                          </span>
                          <span className="flex items-center text-[8px] font-semibold text-zinc-700">
                            Rp150.000
                          </span>
                          <div className="flex items-center">
                            <span className="flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[6.5px] font-semibold bg-red-50 text-red-500">
                              <span className="h-1 w-1 rounded-full bg-red-400" />
                              Belum
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm md:grid-cols-4 md:divide-y-0">
              <div className="group flex flex-col items-center gap-2 px-6 py-6 transition-colors duration-200 hover:bg-[#F0FBF7]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#33B77E]/10 transition-all duration-200 group-hover:bg-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E] transition-colors duration-200 group-hover:text-white"
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-extrabold leading-none text-[#0E1E14]">
                  80%
                </p>
                <p className="text-center text-xs text-zinc-500">
                  Hemat Waktu Bendahara
                </p>
              </div>
              <div className="group flex flex-col items-center gap-2 px-6 py-6 transition-colors duration-200 hover:bg-[#F0FBF7]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#33B77E]/10 transition-all duration-200 group-hover:bg-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E] transition-colors duration-200 group-hover:text-white"
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
                      d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-extrabold leading-none text-[#0E1E14]">
                  100%
                </p>
                <p className="text-center text-xs text-zinc-500">
                  Keamanan Data
                </p>
              </div>
              <div className="group flex flex-col items-center gap-2 px-6 py-6 transition-colors duration-200 hover:bg-[#F0FBF7]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#33B77E]/10 transition-all duration-200 group-hover:bg-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E] transition-colors duration-200 group-hover:text-white"
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
                      d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.942"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-extrabold leading-none text-[#0E1E14]">
                  99.9%
                </p>
                <p className="text-center text-xs text-zinc-500">
                  Akurasi Laporan
                </p>
              </div>
              <div className="group flex flex-col items-center gap-2 px-6 py-6 transition-colors duration-200 hover:bg-[#F0FBF7]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#33B77E]/10 transition-all duration-200 group-hover:bg-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5 text-[#33B77E] transition-colors duration-200 group-hover:text-white"
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
                      d="m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5z"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-extrabold leading-none text-[#0E1E14]">
                  24/7
                </p>
                <p className="text-center text-xs text-zinc-500">
                  Uptime Sistem
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FBF7] to-[#E8F8F1] py-28">
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(51,183,126,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#33B77E]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[320px] w-[320px] rounded-full bg-[#33B77E]/12 blur-[80px]" />
          <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -right-8 top-1/3 h-40 w-40 rounded-full border border-[#33B77E]/8" />
          <div className="pointer-events-none absolute -left-16 bottom-1/4 h-56 w-56 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#33B77E]/25" />
          <div className="pointer-events-none absolute left-[20%] bottom-[25%] h-2 w-2 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[25%] bottom-[20%] h-2 w-2 rounded-full bg-[#33B77E]/30" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-x-6 -bottom-6 h-20 rounded-3xl bg-[#33B77E]/20 blur-2xl" />
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full border border-[#33B77E]/15" />
                <div className="pointer-events-none absolute -right-4 -bottom-4 h-16 w-16 rounded-full border border-[#33B77E]/10" />
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-[#33B77E]/10 ring-1 ring-black/5 animate-[float_5s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3 border-b border-zinc-100 bg-zinc-50/90 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[10px] text-zinc-400 ring-1 ring-zinc-200/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-2.5 w-2.5 shrink-0 text-[#33B77E]"
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
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25"
                        />
                      </svg>
                      <span className="truncate">
                        admin.ontuition.qrion.id/tagihan
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-zinc-100 bg-white px-5 py-3">
                    <div>
                      <p className="text-xs font-bold text-[#0E1E14]">
                        Manajemen Tagihan
                      </p>
                      <p className="text-[10px] text-zinc-400">
                        Periode: Juli 2025
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-lg bg-[#33B77E]/10 px-2.5 py-1">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                        </span>
                        <span className="text-[10px] font-semibold text-[#33B77E]">
                          Live
                        </span>
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#33B77E] shadow-sm shadow-[#33B77E]/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-white"
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
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-px bg-zinc-100 border-b border-zinc-100">
                    <div className="bg-white px-4 py-2.5">
                      <p className="text-sm font-bold leading-none text-[#0E1E14]">
                        Rp 24,5 Jt
                      </p>
                      <p className="mt-0.5 text-[10px] text-zinc-400">
                        Total Tagihan
                      </p>
                    </div>
                    <div className="bg-white px-4 py-2.5">
                      <p className="text-sm font-bold leading-none text-[#33B77E]">
                        Rp 18,2 Jt
                      </p>
                      <p className="mt-0.5 text-[10px] text-zinc-400">
                        Sudah Bayar
                      </p>
                    </div>
                    <div className="bg-white px-4 py-2.5">
                      <p className="text-sm font-bold leading-none text-amber-500">
                        Rp 6,3 Jt
                      </p>
                      <p className="mt-0.5 text-[10px] text-zinc-400">
                        Belum Bayar
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-zinc-100 bg-white px-5 py-2.5">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400">
                        Progres Pembayaran
                      </span>
                      <span className="text-[10px] font-bold text-[#33B77E]">
                        74%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                      <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-[#33B77E] to-[#5ECBA0] animate-[progressFill_2s_ease-out_forwards]" />
                    </div>
                  </div>
                  <div className="divide-y divide-zinc-50 bg-white">
                    <div className="flex items-center gap-3 px-5 py-2.5 transition-colors duration-150 hover:bg-[#F0FBF7]/60">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/10 text-[10px] font-bold text-[#33B77E]">
                        A
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-[11px] font-semibold text-[#0E1E14]">
                          Ahmad Fauzi
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          X IPA 1 · SPP
                        </p>
                      </div>
                      <p className="shrink-0 text-[11px] font-bold text-[#0E1E14]">
                        Rp 450.000
                      </p>
                      <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold bg-[#33B77E]/10 text-[#33B77E]">
                        Lunas
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-2.5 transition-colors duration-150 hover:bg-[#F0FBF7]/60">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/10 text-[10px] font-bold text-[#33B77E]">
                        S
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-[11px] font-semibold text-[#0E1E14]">
                          Siti Rahayu
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          XI IPS 2 · Buku
                        </p>
                      </div>
                      <p className="shrink-0 text-[11px] font-bold text-[#0E1E14]">
                        Rp 200.000
                      </p>
                      <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold bg-[#33B77E]/10 text-[#33B77E]">
                        Lunas
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-2.5 transition-colors duration-150 hover:bg-[#F0FBF7]/60">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/10 text-[10px] font-bold text-[#33B77E]">
                        B
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-[11px] font-semibold text-[#0E1E14]">
                          Budi Santoso
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          XII IPA 3 · SPP
                        </p>
                      </div>
                      <p className="shrink-0 text-[11px] font-bold text-[#0E1E14]">
                        Rp 450.000
                      </p>
                      <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold bg-amber-50 text-amber-500">
                        Menunggu
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-2.5 transition-colors duration-150 hover:bg-[#F0FBF7]/60">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33B77E]/10 text-[10px] font-bold text-[#33B77E]">
                        D
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-[11px] font-semibold text-[#0E1E14]">
                          Dewi Lestari
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          X IPS 1 · Kegiatan
                        </p>
                      </div>
                      <p className="shrink-0 text-[11px] font-bold text-[#0E1E14]">
                        Rp 150.000
                      </p>
                      <span className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold bg-[#33B77E]/10 text-[#33B77E]">
                        Lunas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/80 px-5 py-2.5">
                    <p className="text-[10px] text-zinc-400">
                      Menampilkan 4 dari 248 siswa
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#33B77E] shadow-sm shadow-[#33B77E]/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3 text-white"
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
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </div>
                      <span className="text-[10px] font-semibold text-[#33B77E]">
                        Export
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-5 top-14 z-20 hidden md:flex animate-[floatBadge_3.5s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#33B77E] shadow-sm shadow-[#33B77E]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-4 w-4 text-white"
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
                        d="m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Auto-Tagih
                    </p>
                    <p className="text-[9px] text-[#33B77E] font-medium">
                      248 siswa aktif
                    </p>
                  </div>
                </div>
                <div className="absolute -right-5 top-24 z-20 hidden md:flex animate-[floatBadge_4s_ease-in-out_infinite_0.6s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#33B77E]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      + Rp 450.000
                    </p>
                    <p className="text-[9px] text-zinc-400">Baru saja masuk</p>
                  </div>
                </div>
                <div className="absolute -right-5 bottom-20 z-20 hidden md:flex animate-[floatBadge_3.8s_ease-in-out_infinite_1.2s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#25D366]/15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ic h-4 w-4 text-[#25D366]"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Notif WA Terkirim
                    </p>
                    <p className="text-[9px] text-zinc-400">
                      ke 248 wali murid
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 space-y-8 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/25 bg-[#33B77E]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-3.5 w-3.5"
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
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48 48 0 0 0-1.123-.08m-5.801 0q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125zM6.75 12h.008v.008H6.75zm0 3h.008v.008H6.75zm0 3h.008v.008H6.75z"
                    />
                  </svg>
                  Manajemen Tagihan
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-4xl lg:text-5xl">
                    Atur Tagihan Siswa{" "}
                    <span className="relative inline-block">
                      <span className="text-[#33B77E]">Lebih Mudah</span>
                      <svg
                        className="absolute -bottom-1 left-0 w-full"
                        viewBox="0 0 200 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6 C50 2, 150 2, 198 6"
                          stroke="#33B77E"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.4"
                        />
                      </svg>
                    </span>{" "}
                    &amp; Cepat
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
                    Atur jenis biaya sesuai kebutuhan sekolah atau pesantren —
                    mulai dari SPP, uang buku, hingga biaya kegiatan — semua
                    dalam satu dashboard terpusat.
                  </p>
                </div>
                <div className="space-y-3">
                  <div
                    className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5"
                    style={{ animationDelay: "0ms" }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Minim Human Error
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Sistem validasi otomatis memastikan setiap data tagihan
                        akurat.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5"
                    style={{ animationDelay: "80ms" }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Notifikasi WhatsApp Otomatis
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Orang tua menerima tagihan &amp; konfirmasi pembayaran
                        langsung di WA.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5"
                    style={{ animationDelay: "160ms" }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Export Laporan 1 Klik
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Unduh rekap tagihan dalam format PDF atau Excel kapan
                        saja.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 rounded-2xl border border-[#33B77E]/15 bg-gradient-to-r from-[#F0FBF7] to-white px-5 py-4">
                  <div className="flex-1 text-center border-r border-[#33B77E]/15">
                    <p className="text-lg font-extrabold leading-none text-[#33B77E]">
                      99%
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-500">
                      Akurasi Data
                    </p>
                  </div>
                  <div className="flex-1 text-center border-r border-[#33B77E]/15">
                    <p className="text-lg font-extrabold leading-none text-[#33B77E]">
                      &lt; 2 mnt
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-500">
                      Setup Tagihan
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://demo-admin.ontuition.qrion.id/logindemo">
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#33B77E] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#33B77E]/30 transition-all duration-300 hover:bg-[#2a9666] hover:scale-105 hover:shadow-xl hover:shadow-[#33B77E]/40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                          <path d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327z" />
                        </g>
                      </svg>
                      Coba Fitur Ini
                    </button>
                  </a>
                  <a
                    href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20fitur%20Manajemen%20Tagihan%20Ontuition."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-white px-7 py-3 text-sm font-semibold text-[#33B77E] shadow-sm transition-all duration-300 hover:border-[#33B77E] hover:bg-[#33B77E]/5 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-5 w-5"
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
                        d="M8.625 9.75a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227q1.63.24 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332a48 48 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                      />
                    </svg>
                    Tanya Lebih Lanjut
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="channel"
          className="relative overflow-hidden bg-gradient-to-b from-[#F0FBF7] via-white to-[#E8F8F1] py-28"
        >
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(51,183,126,0.14) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />
          <div className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[#33B77E]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[320px] w-[320px] rounded-full bg-[#33B77E]/12 blur-[80px]" />
          <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -left-8 top-1/3 h-40 w-40 rounded-full border border-[#33B77E]/8" />
          <div className="pointer-events-none absolute -right-16 bottom-1/3 h-64 w-64 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute left-[8%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#33B77E]/25" />
          <div className="pointer-events-none absolute left-[22%] bottom-[22%] h-2 w-2 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[12%] top-[28%] h-3 w-3 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[28%] bottom-[18%] h-2 w-2 rounded-full bg-[#33B77E]/30" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/25 bg-[#33B77E]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-3.5 w-3.5"
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
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5"
                    />
                  </svg>
                  Multi-Channel Pembayaran
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-4xl lg:text-5xl">
                    Semua Channel{" "}
                    <span className="relative inline-block">
                      <span className="text-[#33B77E]">Pembayaran Online</span>
                      <svg
                        className="absolute -bottom-1 left-0 w-full"
                        viewBox="0 0 260 8"
                        fill="none"
                      >
                        <path
                          d="M2 6 C65 2, 195 2, 258 6"
                          stroke="#33B77E"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          opacity="0.4"
                        />
                      </svg>
                    </span>{" "}
                    dalam Satu Sistem
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
                    Terima pembayaran lewat QRIS, Virtual Account, hingga semua
                    e-Wallet populer. Status transaksi langsung terupdate
                    otomatis — tanpa rekap manual.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--mdi h-5 w-5 text-white"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M4 4h6v6H4zm16 0v6h-6V4zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zM4 20v-6h6v6zM6 6v2h2V6zm10 0v2h2V6zM6 16v2h2v-2zm-2-5h2v2H4zm5 0h4v4h-2v-2H9zm2-5h2v4h-2zM2 2v4H0V2a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V2h-4V0zM2 18v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        QRIS &amp; Scan Bayar
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Satu kode QR untuk semua aplikasi dompet digital.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6l9 6m-1.5 12V10.333A48.4 48.4 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Virtual Account Bank
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Transfer via BCA, BRI, BNI, Mandiri, dan bank lainnya.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        e-Wallet: DANA, OVO, GoPay
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Pembayaran instan lewat dompet digital favorit orang
                        tua.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#33B77E]/25 hover:shadow-md hover:shadow-[#33B77E]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#33B77E] shadow-md shadow-[#33B77E]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M14.857 17.082a24 24 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.97 8.97 0 0 1 5.292 3m13.416 0a8.97 8.97 0 0 1 2.168 4.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Konfirmasi Otomatis
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Notifikasi real-time ke admin &amp; orang tua setiap
                        transaksi masuk.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#33B77E]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#33B77E]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 rounded-2xl border border-[#33B77E]/15 bg-gradient-to-r from-[#F0FBF7] to-white px-5 py-4">
                  <div className="flex-1 text-center border-r border-[#33B77E]/15">
                    <p className="text-lg font-extrabold leading-none text-[#33B77E]">
                      10+
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-500">
                      Channel Aktif
                    </p>
                  </div>
                  <div className="flex-1 text-center border-r border-[#33B77E]/15">
                    <p className="text-lg font-extrabold leading-none text-[#33B77E]">
                      &lt; 3 dtk
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-500">
                      Konfirmasi Bayar
                    </p>
                  </div>
                  <div className="flex-1 text-center ">
                    <p className="text-lg font-extrabold leading-none text-[#33B77E]">
                      100%
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-500">
                      Terintegrasi
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute inset-x-8 -bottom-6 h-20 rounded-3xl bg-[#33B77E]/20 blur-2xl" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#33B77E]/15" />
                <div className="pointer-events-none absolute -left-4 -bottom-4 h-16 w-16 rounded-full border border-[#33B77E]/10" />
                <div className="relative w-64 animate-[float_5s_ease-in-out_infinite] md:w-72">
                  <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-[#0E1E14] bg-white shadow-2xl shadow-[#33B77E]/15">
                    <div className="relative flex items-center justify-center bg-[#0E1E14] py-2.5">
                      <div className="h-1.5 w-16 rounded-full bg-zinc-700" />
                    </div>
                    <div className="flex items-center justify-between bg-white px-5 py-1.5">
                      <span className="text-[9px] font-bold text-[#0E1E14]">
                        9:41
                      </span>
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2.5 w-2.5 text-[#0E1E14]"
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
                            d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2.5 w-2.5 text-[#0E1E14]"
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
                            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53l-.53-.53a.75.75 0 0 1 1.06 0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2.5 w-2.5 text-[#0E1E14]"
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
                            d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5zM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-[#33B77E] px-5 pb-5 pt-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-medium text-white/70">
                            QRION Pay
                          </p>
                          <p className="text-sm font-bold text-white">
                            Pilih Metode Bayar
                          </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="iconify iconify--heroicons h-4 w-4 text-white"
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-3 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                        <p className="text-[10px] text-white/70">
                          Total Tagihan SPP
                        </p>
                        <p className="text-xl font-extrabold leading-none text-white">
                          Rp 450.000
                        </p>
                        <p className="mt-0.5 text-[9px] text-white/60">
                          Ahmad Fauzi · X IPA 1
                        </p>
                      </div>
                    </div>
                    <div className="bg-zinc-50 px-4 py-3">
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                        Metode Pembayaran
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 border border-[#33B77E]/40 bg-[#33B77E]/8 shadow-sm shadow-[#33B77E]/10">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#33B77E]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--mdi h-4 w-4 text-white"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M4 4h6v6H4zm16 0v6h-6V4zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zM4 20v-6h6v6zM6 6v2h2V6zm10 0v2h2V6zM6 16v2h2v-2zm-2-5h2v2H4zm5 0h4v4h-2v-2H9zm2-5h2v4h-2zM2 2v4H0V2a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V2h-4V0zM2 18v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold leading-none text-[#33B77E]">
                              QRIS
                            </p>
                            <p className="text-[9px] text-zinc-400">
                              Scan &amp; Bayar
                            </p>
                          </div>
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#33B77E]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-white"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 border border-zinc-100 bg-white">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
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
                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6l9 6m-1.5 12V10.333A48.4 48.4 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold leading-none text-[#0E1E14]">
                              Virtual Account
                            </p>
                            <p className="text-[9px] text-zinc-400">
                              BCA · BRI · Mandiri
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 border border-zinc-100 bg-white">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
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
                                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold leading-none text-[#0E1E14]">
                              GoPay / OVO
                            </p>
                            <p className="text-[9px] text-zinc-400">e-Wallet</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 border border-zinc-100 bg-white">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--ic h-4 w-4 text-zinc-400"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold leading-none text-[#0E1E14]">
                              Tagihan WA
                            </p>
                            <p className="text-[9px] text-zinc-400">
                              Link ke orang tua
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-4 py-3">
                      <div className="flex items-center justify-between rounded-2xl border border-[#33B77E]/20 bg-[#F0FBF7] p-3">
                        <div>
                          <p className="text-[9px] font-bold text-[#33B77E]">
                            QRIS Aktif
                          </p>
                          <p className="text-[8px] text-zinc-400">
                            Berlaku 15 menit
                          </p>
                        </div>
                        <div className="grid grid-cols-4 gap-0.5 opacity-60">
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-transparent" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-transparent" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-transparent" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-transparent" />
                          <div className="h-2 w-2 rounded-[1px] bg-transparent" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                          <div className="h-2 w-2 rounded-[1px] bg-transparent" />
                          <div className="h-2 w-2 rounded-[1px] bg-[#0E1E14]" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-4 pb-5">
                      <div className="flex items-center justify-center gap-2 rounded-2xl bg-[#33B77E] py-3 shadow-lg shadow-[#33B77E]/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--mdi h-4 w-4 text-white"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M4 4h6v6H4zm16 0v6h-6V4zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zM4 20v-6h6v6zM6 6v2h2V6zm10 0v2h2V6zM6 16v2h2v-2zm-2-5h2v2H4zm5 0h4v4h-2v-2H9zm2-5h2v4h-2zM2 2v4H0V2a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V2h-4V0zM2 18v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"
                          />
                        </svg>
                        <span className="text-xs font-bold text-white">
                          Bayar Sekarang
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-6 top-16 z-20 hidden md:flex animate-[floatBadge_3.5s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#33B77E]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      + Rp 450.000
                    </p>
                    <p className="text-[9px] text-zinc-400">Baru saja masuk</p>
                  </div>
                </div>
                <div className="absolute -right-6 top-28 z-20 hidden md:flex animate-[floatBadge_4s_ease-in-out_infinite_0.5s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#33B77E] shadow-sm shadow-[#33B77E]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-4 w-4 text-white"
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
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      10+ Channel
                    </p>
                    <p className="text-[9px] text-[#33B77E] font-medium">
                      Siap digunakan
                    </p>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-28 z-20 hidden md:flex animate-[floatBadge_3.8s_ease-in-out_infinite_1s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#33B77E]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                        d="m3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75L12 13.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Konfirmasi Instan
                    </p>
                    <p className="text-[9px] text-zinc-400">&lt; 3 detik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="notifikasi"
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FBF7] to-[#E8F8F1] py-28"
        >
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(51,183,126,0.14) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />
          <div className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#25D366]/8 blur-[100px]" />
          <div className="pointer-events-none absolute -left-24 bottom-1/4 h-[320px] w-[320px] rounded-full bg-[#33B77E]/10 blur-[80px]" />
          <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full border border-[#25D366]/10" />
          <div className="pointer-events-none absolute -right-8 top-[40%] h-40 w-40 rounded-full border border-[#25D366]/8" />
          <div className="pointer-events-none absolute -left-16 bottom-1/3 h-56 w-56 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute left-[8%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#25D366]/25" />
          <div className="pointer-events-none absolute left-[20%] bottom-[22%] h-2 w-2 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[14%] top-[28%] h-3 w-3 rounded-full bg-[#25D366]/20" />
          <div className="pointer-events-none absolute right-[26%] bottom-[18%] h-2 w-2 rounded-full bg-[#33B77E]/25" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative flex justify-center">
                <div className="absolute inset-x-10 -bottom-6 h-20 rounded-3xl bg-[#25D366]/20 blur-2xl" />
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full border border-[#25D366]/15" />
                <div className="pointer-events-none absolute -right-4 -bottom-4 h-16 w-16 rounded-full border border-[#33B77E]/10" />
                <div className="relative w-64 animate-[float_5s_ease-in-out_infinite] md:w-72">
                  <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-[#0E1E14] bg-[#ECE5DD] shadow-2xl shadow-[#25D366]/15">
                    <div className="flex items-center justify-center bg-[#0E1E14] py-2.5">
                      <div className="h-1.5 w-16 rounded-full bg-zinc-700" />
                    </div>
                    <div className="flex items-center justify-between bg-[#075E54] px-4 py-1">
                      <span className="text-[9px] font-bold text-white">
                        9:41
                      </span>
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2.5 w-2.5 text-white"
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
                            d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2.5 w-2.5 text-white"
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
                            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53l-.53-.53a.75.75 0 0 1 1.06 0"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-2.5 w-2.5 text-white"
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
                            d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5zM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 bg-[#075E54] px-3 pb-3 pt-1">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--ic h-5 w-5 text-white"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold leading-none text-white">
                          QRION Sekolah
                        </p>
                        <p className="text-[9px] text-white/60">online</p>
                      </div>
                      <div className="flex items-center gap-3 text-white/70">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5"
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
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.04 12.04 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5"
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="space-y-2 bg-[#ECE5DD] px-3 py-3"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2325D366" fill-opacity="0.04"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      }}
                    >
                      <div className="flex justify-center">
                        <span className="rounded-full bg-black/10 px-3 py-0.5 text-[8px] text-zinc-600">
                          Hari ini
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
                          <p className="text-[9px] font-bold text-[#075E54]">
                            📋 TAGIHAN SPP - Juli 2025
                          </p>
                          <p className="mt-0.5 text-[9px] leading-relaxed text-zinc-700">
                            Kepada Yth. Orang Tua/Wali
                          </p>
                          <p className="text-[9px] text-zinc-700">
                            Ahmad Fauzi · X IPA 1
                          </p>
                          <div className="mt-1.5 rounded-lg bg-white/70 px-2 py-1.5">
                            <p className="text-[9px] font-bold text-[#0E1E14]">
                              SPP Bulan Juli
                            </p>
                            <p className="text-[10px] font-extrabold text-[#25D366]">
                              Rp 450.000
                            </p>
                            <p className="text-[8px] text-zinc-400">
                              Jatuh tempo: 10 Juli 2025
                            </p>
                          </div>
                          <div className="mt-1 flex items-center justify-end gap-1">
                            <span className="text-[8px] text-zinc-400">
                              09.30
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-[#25D366]"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-[#25D366]"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
                          <p className="text-[9px] font-bold text-amber-600">
                            ⏰ Pengingat Jatuh Tempo
                          </p>
                          <p className="mt-0.5 text-[9px] leading-relaxed text-zinc-700">
                            SPP Juli 2025 jatuh tempo
                          </p>
                          <p className="text-[9px] font-semibold text-zinc-700">
                            besok (10 Juli). Segera bayar!
                          </p>
                          <div className="mt-1 flex items-center justify-end gap-1">
                            <span className="text-[8px] text-zinc-400">
                              08.00
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-[#25D366]"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-[#25D366]"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
                          <p className="text-[9px] font-bold text-[#075E54]">
                            ✅ Pembayaran Berhasil!
                          </p>
                          <p className="mt-0.5 text-[9px] text-zinc-700">
                            SPP Juli 2025 telah lunas.
                          </p>
                          <div className="mt-1.5 flex items-center gap-1.5 rounded-lg bg-[#25D366]/15 px-2 py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-3 w-3 text-[#25D366]"
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
                                d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"
                              />
                            </svg>
                            <p className="text-[9px] font-bold text-[#25D366]">
                              Rp 450.000 · VERIFIED
                            </p>
                          </div>
                          <div className="mt-1 flex items-center justify-end gap-1">
                            <span className="text-[8px] text-zinc-400">
                              10.15
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-[#25D366]"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--heroicons h-2.5 w-2.5 text-[#25D366]"
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
                                d="m4.5 12.75l6 6l9-13.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                          <span
                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"
                            style={{ animationDelay: "0ms" }}
                          />
                          <span
                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"
                            style={{ animationDelay: "150ms" }}
                          />
                          <span
                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-[#F0F0F0] px-3 py-2">
                      <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-400"
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
                            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75S9.168 9 9.375 9s.375.336.375.75m-.375 0h.008v.015h-.008zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75s.168-.75.375-.75s.375.336.375.75m-.375 0h.008v.015h-.008z"
                          />
                        </svg>
                        <span className="flex-1 text-[9px] text-zinc-300">
                          Ketik pesan...
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3 w-3 text-zinc-400"
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
                            d="m18.375 12.739l-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                          />
                        </svg>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-white"
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
                            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 top-14 z-20 hidden md:flex animate-[floatBadge_3.5s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-[#25D366]/20 bg-white px-3 py-2 shadow-xl shadow-[#25D366]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#25D366] shadow-sm shadow-[#25D366]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ic h-4 w-4 text-white"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Terkirim ke 248 WA
                    </p>
                    <p className="text-[9px] text-[#25D366] font-medium">
                      Notif otomatis
                    </p>
                  </div>
                </div>
                <div className="absolute -left-6 top-28 z-20 hidden md:flex animate-[floatBadge_4s_ease-in-out_infinite_0.6s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Terbaca Semua
                    </p>
                    <p className="text-[9px] text-zinc-400">✓✓ 248/248</p>
                  </div>
                </div>
                <div className="absolute -left-6 bottom-24 z-20 hidden md:flex animate-[floatBadge_3.8s_ease-in-out_infinite_1.2s] items-center gap-2 rounded-2xl border border-[#33B77E]/20 bg-white px-3 py-2 shadow-xl shadow-[#33B77E]/10">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-4 w-4 text-amber-500"
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
                        d="M14.857 17.082a24 24 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.97 8.97 0 0 1 5.292 3m13.416 0a8.97 8.97 0 0 1 2.168 4.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold leading-none text-[#0E1E14]">
                      Auto Reminder
                    </p>
                    <p className="text-[9px] text-zinc-400">H-3, H-1, H-0</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ic h-3.5 w-3.5"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                  Notifikasi Otomatis
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-4xl lg:text-5xl">
                    Tagihan Terkirim{" "}
                    <span className="relative inline-block">
                      <span className="text-[#25D366]">Otomatis</span>
                      <svg
                        className="absolute -bottom-1 left-0 w-full"
                        viewBox="0 0 130 8"
                        fill="none"
                      >
                        <path
                          d="M2 6 C32 2, 98 2, 128 6"
                          stroke="#25D366"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          opacity="0.4"
                        />
                      </svg>
                    </span>{" "}
                    via WhatsApp
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
                    Orang tua langsung mendapat notifikasi tagihan, konfirmasi
                    pembayaran, dan pengingat jatuh tempo — semua tanpa perlu
                    admin kirim manual.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#25D366]/25 hover:shadow-md hover:shadow-[#25D366]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-md shadow-[#25D366]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M6 12L3.269 3.125A59.8 59.8 0 0 1 21.486 12a59.8 59.8 0 0 1-18.217 8.875zm0 0h7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Tagihan Otomatis Terkirim
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Setiap tagihan baru langsung dikirim ke WhatsApp orang
                        tua tanpa input manual.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#25D366]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#25D366]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#25D366]/25 hover:shadow-md hover:shadow-[#25D366]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-md shadow-[#25D366]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M14.857 17.082a24 24 0 0 0 5.454-1.31A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.3 24.3 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.97 8.97 0 0 1 5.292 3m13.416 0a8.97 8.97 0 0 1 2.168 4.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Pengingat Jatuh Tempo
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Sistem mengirim reminder otomatis H-3, H-1, dan di hari
                        jatuh tempo.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#25D366]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#25D366]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#25D366]/25 hover:shadow-md hover:shadow-[#25D366]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-md shadow-[#25D366]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Konfirmasi Pembayaran
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Orang tua menerima bukti pembayaran langsung di WhatsApp
                        setelah transaksi berhasil.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#25D366]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#25D366]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#25D366]/25 hover:shadow-md hover:shadow-[#25D366]/8 hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-md shadow-[#25D366]/20 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-5 w-5 text-white"
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
                          d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0E1E14]">
                        Broadcast ke Semua Wali
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                        Kirim pengumuman atau tagihan massal ke seluruh orang
                        tua dalam satu klik.
                      </p>
                    </div>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-[#25D366]/15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-300 transition-colors duration-300 group-hover:text-[#25D366]"
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
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FBF7] to-[#E8F8F1] py-24">
          <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/25 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#33B77E]/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-[#33B77E]/6 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5"
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
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"
                  />
                </svg>
                Ekosistem Digital
              </div>
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-5xl lg:text-6xl">
                Terintegrasi Penuh <br className="hidden md:block" />
                dengan <span className="text-[#33B77E]">Ekosistem QRION</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                Ontuition bukan berdiri sendiri — ia bagian dari ekosistem
                digitalisasi sekolah terlengkap se-Indonesia yang saling
                terhubung.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#33B77E]/35 hover:shadow-lg hover:shadow-[#33B77E]/8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#33B77E]/5 blur-3xl transition-all duration-300 group-hover:bg-[#33B77E]/10" />
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/25 bg-[#33B77E]/8 px-3 py-1 text-xs font-semibold text-[#33B77E]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                    </span>
                    Qrion Ekosistem
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-100 bg-zinc-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-3.5 w-3.5 text-zinc-400"
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
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative flex items-center justify-center rounded-2xl bg-[#F0FBF7] py-4">
                  <img
                    alt="QRION Ekosistem"
                    loading="lazy"
                    width={600}
                    height={400}
                    decoding="async"
                    data-nimg={1}
                    className="h-52 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 md:h-64"
                    style={{ color: "transparent" }}
                    srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection8%2Fcomputer.png&w=640&q=75 1x, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection8%2Fcomputer.png&w=1200&q=75 2x"
                    src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection8%2Fcomputer.png&w=1200&q=75"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="mb-1.5 text-lg font-bold text-[#0E1E14]">
                    Platform Admin Sekolah
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Kelola data siswa, tagihan, laporan keuangan, dan
                    administrasi sekolah dalam satu dashboard terpadu.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/20 bg-gradient-to-br from-[#E8F8F1] to-[#F0FBF7] p-6 transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-lg hover:shadow-[#33B77E]/10">
                <div className="pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-[#33B77E]/10 blur-3xl transition-all duration-300 group-hover:bg-[#33B77E]/15" />
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/25 bg-white/80 px-3 py-1 text-xs font-semibold text-[#33B77E]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#33B77E]" />
                    </span>
                    Qrion Mobile
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#33B77E]/15 bg-white/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative flex items-center justify-center rounded-2xl bg-white/50 py-4">
                  <img
                    alt="QRION Mobile"
                    loading="lazy"
                    width={500}
                    height={400}
                    decoding="async"
                    data-nimg={1}
                    className="h-52 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 md:h-64"
                    style={{ color: "transparent" }}
                    srcSet="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection8%2Fmobile.png&w=640&q=75 1x, https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection8%2Fmobile.png&w=1080&q=75 2x"
                    src="https://ontuition.qrion.id/_next/image?url=%2Fimages%2Fsection8%2Fmobile.png&w=1080&q=75"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="mb-1.5 text-lg font-bold text-[#0E1E14]">
                    Aplikasi Mobile Orang Tua
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Orang tua cek tagihan, bayar, dan pantau aktivitas belajar
                    anak langsung dari genggaman tangan.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm transition-all duration-200 hover:border-[#33B77E]/40 hover:bg-[#33B77E]/8 hover:text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                    d="M4.26 10.147a60 60 0 0 0-.491 6.347A48.6 48.6 0 0 1 12 20.904a48.6 48.6 0 0 1 8.232-4.41a61 61 0 0 0-.491-6.347m-15.482 0a51 51 0 0 0-2.658-.813A60 60 0 0 1 12 3.493a60 60 0 0 1 10.399 5.84q-1.345.372-2.658.814m-15.482 0A51 51 0 0 1 12 13.489a50.7 50.7 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 0v-3.675A55 55 0 0 1 12 8.443m-7.007 11.55A5.98 5.98 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                Manajemen Siswa
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm transition-all duration-200 hover:border-[#33B77E]/40 hover:bg-[#33B77E]/8 hover:text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48 48 0 0 0-1.123-.08m-5.801 0q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125zM6.75 12h.008v.008H6.75zm0 3h.008v.008H6.75zm0 3h.008v.008H6.75z"
                  />
                </svg>
                Tagihan &amp; SPP
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm transition-all duration-200 hover:border-[#33B77E]/40 hover:bg-[#33B77E]/8 hover:text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125z"
                  />
                </svg>
                Laporan Keuangan
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm transition-all duration-200 hover:border-[#33B77E]/40 hover:bg-[#33B77E]/8 hover:text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi h-3.5 w-3.5 text-[#33B77E]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 4h6v6H4zm16 0v6h-6V4zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zM4 20v-6h6v6zM6 6v2h2V6zm10 0v2h2V6zM6 16v2h2v-2zm-2-5h2v2H4zm5 0h4v4h-2v-2H9zm2-5h2v4h-2zM2 2v4H0V2a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V2h-4V0zM2 18v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z"
                  />
                </svg>
                Pembayaran QRIS
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm transition-all duration-200 hover:border-[#33B77E]/40 hover:bg-[#33B77E]/8 hover:text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ic h-3.5 w-3.5 text-[#33B77E]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                  />
                </svg>
                Notif WhatsApp
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 text-xs font-medium text-zinc-500 shadow-sm transition-all duration-200 hover:border-[#33B77E]/40 hover:bg-[#33B77E]/8 hover:text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                Aplikasi Mobile
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimoni"
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FBF7] to-[#E8F8F1] py-24"
        >
          <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/25 to-transparent" />
          <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-[#33B77E]/8 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#33B77E]/6 blur-[80px]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5"
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"
                  />
                </svg>
                Testimoni Mitra
              </div>
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-5xl">
                Dipercaya Ratusan{" "}
                <span className="text-[#33B77E]">Sekolah &amp; Yayasan</span>
              </h2>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-zinc-500 md:text-base">
                Dengarkan langsung dari kepala sekolah dan pimpinan yayasan yang
                telah merasakan manfaatnya.
              </p>
            </div>
            <OntuitionTestimonial />
          </div>
        </section>
        <section id="harga" className="relative overflow-hidden bg-white py-24">
          <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/25 to-transparent" />
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#33B77E]/6 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#33B77E]/6 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-4 py-1.5 text-xs font-semibold text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.1 18.1 0 0 0 5.224-5.223c.54-.827.368-1.908-.33-2.607l-9.583-9.58A2.25 2.25 0 0 0 9.568 3" />
                    <path d="M6 6h.008v.008H6z" />
                  </g>
                </svg>
                Harga Transparan
              </div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0E1E14] md:text-4xl lg:text-5xl">
                Paket &amp; Harga{" "}
                <span className="text-[#33B77E]">yang Fleksibel</span>
              </h2>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-zinc-500 md:text-base">
                Pilih paket yang sesuai kebutuhan sekolah Anda. Tanpa biaya
                tersembunyi, tanpa kontrak panjang.
              </p>
            </div>
            <OntuitionPricing />
          </div>
        </section>
        <section
          id="custom"
          className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0FBF7] to-[#E8F8F1] py-28"
        >
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(51,183,126,0.14) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-[#33B77E]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-[360px] w-[360px] rounded-full bg-[#33B77E]/10 blur-[80px]" />
          <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -left-8 top-[40%] h-40 w-40 rounded-full border border-[#33B77E]/8" />
          <div className="pointer-events-none absolute -right-20 bottom-1/3 h-64 w-64 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute left-[10%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#33B77E]/25" />
          <div className="pointer-events-none absolute left-[22%] bottom-[22%] h-2 w-2 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[14%] top-[25%] h-3 w-3 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[26%] bottom-[20%] h-2 w-2 rounded-full bg-[#33B77E]/25" />
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-3.5 w-3.5"
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
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14q.19.017.384.017a4.5 4.5 0 0 0 4.102-6.352l-3.276 3.276a3 3 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008z"
                  />
                </svg>
                Solusi Lanjutan
              </div>
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-5xl">
                Butuh Solusi yang Lebih{" "}
                <span className="relative inline-block">
                  <span className="text-[#33B77E]">Lengkap atau Custom?</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 340 8"
                    fill="none"
                  >
                    <path
                      d="M2 6 C85 2, 255 2, 338 6"
                      stroke="#33B77E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-zinc-500 md:text-base">
                Tim konsultan kami siap membantu merancang solusi yang tepat —
                dari kebutuhan spesifik hingga ekosistem digital penuh.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/20 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-xl hover:shadow-[#33B77E]/10 hover:-translate-y-1.5">
                <div className="absolute top-0 left-0 h-1 w-0 rounded-br-full bg-gradient-to-r from-[#33B77E] to-[#5ECBA0] transition-all duration-500 group-hover:w-full" />
                <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-[#33B77E]/8 blur-2xl transition-all duration-300 group-hover:bg-[#33B77E]/15" />
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full border border-[#33B77E]/10" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#33B77E]/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:bg-[#33B77E] group-hover:ring-[#33B77E] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#33B77E]/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-7 w-7 text-[#33B77E] transition-colors duration-300 group-hover:text-white"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z" />
                          <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                        </g>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#33B77E]">
                        Paket Custom
                      </p>
                      <h3 className="text-xl font-extrabold text-[#0E1E14]">
                        Solusi Khusus Sekolah Anda
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Kebutuhan berbeda tiap sekolah. Kami merancang solusi yang
                    disesuaikan.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-zinc-600">
                        Konfigurasi Fleksibel sesuai kebutuhan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                            d="M14.25 6.087c0-.355.186-.676.401-.959c.221-.29.349-.634.349-1.003c0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003c.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643a48 48 0 0 1-4.163-.3q.28 2.42.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.65 1.65 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349c.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48 48 0 0 1-.642 5.056q2.278.286 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.65 1.65 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875c1.243 0 2.25.84 2.25 1.875c0 .369-.128.713-.349 1.003c-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48 48 0 0 0 5.427-.63a48 48 0 0 0 .582-4.717a.53.53 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401c-.29.221-.634.349-1.003.349c-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349c.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663a48 48 0 0 0-.37-5.36q-2.83.515-5.766.689a.58.58 0 0 1-.61-.58"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-zinc-600">
                        Pilih modul yang relevan saja
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                            d="M4.26 10.147a60 60 0 0 0-.491 6.347A48.6 48.6 0 0 1 12 20.904a48.6 48.6 0 0 1 8.232-4.41a61 61 0 0 0-.491-6.347m-15.482 0a51 51 0 0 0-2.658-.813A60 60 0 0 1 12 3.493a60 60 0 0 1 10.399 5.84q-1.345.372-2.658.814m-15.482 0A51 51 0 0 1 12 13.489a50.7 50.7 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 0v-3.675A55 55 0 0 1 12 8.443m-7.007 11.55A5.98 5.98 0 0 0 6.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-zinc-600">
                        Onboarding &amp; pelatihan tim khusus
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10 transition-all duration-300 group-hover:bg-[#33B77E]/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-3.5 w-3.5 text-[#33B77E]"
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
                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-zinc-600">
                        Integrasi dengan sistem yang sudah ada
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20keuangan%20Ontuition.%20Boleh%20dibantu?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ic h-5 w-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                    Konsultasi Gratis
                  </a>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-[#33B77E]/30 bg-gradient-to-br from-[#E8F8F1] via-[#F0FBF7] to-white p-8 shadow-sm transition-all duration-300 hover:border-[#33B77E]/60 hover:shadow-xl hover:shadow-[#33B77E]/12 hover:-translate-y-1.5">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#33B77E] via-[#5ECBA0] to-[#33B77E]" />
                <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-[#33B77E]/12 blur-3xl transition-all duration-300 group-hover:bg-[#33B77E]/20" />
                <div className="pointer-events-none absolute left-4 top-8 h-28 w-28 rounded-full border border-[#33B77E]/15" />
                <div className="pointer-events-none absolute left-10 top-12 h-12 w-12 rounded-full border border-[#33B77E]/10" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33B77E]/15 ring-1 ring-[#33B77E]/25 transition-all duration-300 group-hover:bg-[#33B77E] group-hover:ring-[#33B77E] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#33B77E]/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--heroicons h-7 w-7 text-[#33B77E] transition-colors duration-300 group-hover:text-white"
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
                          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#33B77E]">
                        Ekosistem Penuh
                      </p>
                      <h3 className="text-xl font-extrabold text-[#0E1E14]">
                        Qrion Ekosistem
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Versi terlengkap platform Qrion — gabungkan semua modul
                    dalam satu ekosistem digital sekolah yang saling terhubung
                    dan terintegrasi penuh.
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2.5 rounded-xl border border-[#33B77E]/20 bg-white px-3 py-2.5 transition-all duration-200 hover:border-[#33B77E]/40 hover:shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none text-[#0E1E14]">
                          Oncard
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          Kartu digital siswa
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl border border-[#33B77E]/20 bg-white px-3 py-2.5 transition-all duration-200 hover:border-[#33B77E]/40 hover:shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                            d="M2.25 18.75a60 60 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m3 0h.008v.008H18zm-12 0h.008v.008H6z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none text-[#0E1E14]">
                          Ontuition
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          Keuangan sekolah
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl border border-[#33B77E]/20 bg-white px-3 py-2.5 transition-all duration-200 hover:border-[#33B77E]/40 hover:shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none text-[#0E1E14]">
                          Ontime
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          Absensi otomatis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl border border-[#33B77E]/20 bg-white px-3 py-2.5 transition-all duration-200 hover:border-[#33B77E]/40 hover:shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                            d="M4.26 10.147a60 60 0 0 0-.491 6.347A48.6 48.6 0 0 1 12 20.904a48.6 48.6 0 0 1 8.232-4.41a61 61 0 0 0-.491-6.347m-15.482 0a51 51 0 0 0-2.658-.813A60 60 0 0 1 12 3.493a60 60 0 0 1 10.399 5.84q-1.345.372-2.658.814m-15.482 0A51 51 0 0 1 12 13.489a50.7 50.7 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 0v-3.675A55 55 0 0 1 12 8.443m-7.007 11.55A5.98 5.98 0 0 0 6.75 15.75v-1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none text-[#0E1E14]">
                          Onclass
                        </p>
                        <p className="text-[10px] text-zinc-400">
                          Manajemen kelas
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20keuangan%20Ontuition.%20Boleh%20dibantu?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ic h-5 w-5"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                    Konsultasi Gratis
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-[#33B77E]/15 bg-white px-8 py-5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.04 12.04 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-600">
                  Respon &lt; 5 Menit
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-600">
                  Konsultasi 100% Gratis
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-600">
                  Tim Ahli Berpengalaman
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0" />
                    </g>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-600">
                  Layanan Seluruh Indonesia
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FBF7] via-white to-[#E8F8F1] py-24 md:py-28">
          <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(51,183,126,0.15) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="pointer-events-none absolute -top-32 left-1/3 h-[480px] w-[480px] rounded-full bg-[#33B77E]/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[360px] w-[360px] rounded-full bg-[#33B77E]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -left-10 top-1/3 h-44 w-44 rounded-full border border-[#33B77E]/8" />
          <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full border border-[#33B77E]/10" />
          <div className="pointer-events-none absolute -right-6 bottom-1/3 h-36 w-36 rounded-full border border-[#33B77E]/8" />
          <div className="pointer-events-none absolute left-[8%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#33B77E]/25" />
          <div className="pointer-events-none absolute left-[18%] bottom-[25%] h-2 w-2 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[10%] top-[30%] h-3 w-3 rounded-full bg-[#33B77E]/20" />
          <div className="pointer-events-none absolute right-[22%] bottom-[20%] h-2 w-2 rounded-full bg-[#33B77E]/25" />
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-[#33B77E]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33B77E] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#33B77E]" />
                </span>
                Mulai Sekarang — Gratis
              </div>
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-5xl lg:text-6xl">
                Coba Ontuition{" "}
                <span className="text-[#33B77E]">Gratis 14 Hari</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
                Bergabung bersama sekolah yang sudah mempercayai Ontuition.
              </p>
            </div>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <a href="https://demo-admin.ontuition.qrion.id/logindemo">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#33B77E] px-9 py-4 text-sm font-bold text-white shadow-xl shadow-[#33B77E]/30 transition-all duration-300 hover:bg-[#2a9666] hover:scale-105 hover:shadow-2xl hover:shadow-[#33B77E]/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-5 w-5"
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
                      d="M15.59 14.37q.159.666.16 1.38a6 6 0 0 1-6 6v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.9 14.9 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.9 14.9 0 0 0-2.58 5.84m2.699 2.7q-.155.032-.311.06a15 15 0 0 1-2.448-2.448l.06-.312m-2.24 2.39a4.49 4.49 0 0 0-1.757 4.306q.341.054.696.054a4.5 4.5 0 0 0 3.61-1.812M16.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
                    />
                  </svg>
                  Mulai Trial Gratis
                </button>
              </a>
              <a
                href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20keuangan%20Ontuition.%20Boleh%20dibantu?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 rounded-full border border-[#33B77E]/30 bg-white px-9 py-4 text-sm font-bold text-[#33B77E] shadow-sm transition-all duration-300 hover:border-[#33B77E] hover:bg-[#33B77E]/5 hover:scale-105 hover:shadow-lg hover:shadow-[#33B77E]/15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ic h-5 w-5 text-[#25D366]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                  Tanya Dulu
                </button>
              </a>
            </div>
            <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                    d="M8.625 9.75a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227q1.63.24 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332a48 48 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                  />
                </svg>
                <span className="text-xs font-semibold text-zinc-600">
                  Support 24/7
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-white px-4 py-2 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25"
                  />
                </svg>
                <span className="text-xs font-semibold text-zinc-600">
                  Data Aman &amp; Terenkripsi
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl border border-[#33B77E]/20 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-lg hover:shadow-[#33B77E]/10 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#33B77E]/0 to-[#33B77E]/0 transition-all duration-300 group-hover:from-[#33B77E]/5" />
                <div className="relative">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:bg-[#33B77E] group-hover:ring-[#33B77E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-6 w-6 text-[#33B77E] transition-colors duration-300 group-hover:text-white"
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
                        d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold leading-none text-[#33B77E]">
                    99.9%
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0E1E14]">
                    Akurasi Data
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-400">
                    tercatat otomatis
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[#33B77E]/20 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#33B77E]/40 hover:shadow-lg hover:shadow-[#33B77E]/10 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#33B77E]/0 to-[#33B77E]/0 transition-all duration-300 group-hover:from-[#33B77E]/5" />
                <div className="relative">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#33B77E]/10 ring-1 ring-[#33B77E]/20 transition-all duration-300 group-hover:bg-[#33B77E] group-hover:ring-[#33B77E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--heroicons h-6 w-6 text-[#33B77E] transition-colors duration-300 group-hover:text-white"
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold leading-none text-[#33B77E]">
                    24/7
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#0E1E14]">
                    Support Aktif
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-400">
                    siap membantu Anda
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-[#33B77E]/15 bg-gradient-to-r from-[#F0FBF7] to-white px-8 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Dipercaya oleh
              </p>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M4.26 10.147a60 60 0 0 0-.491 6.347A48.6 48.6 0 0 1 12 20.904a48.6 48.6 0 0 1 8.232-4.41a61 61 0 0 0-.491-6.347m-15.482 0a51 51 0 0 0-2.658-.813A60 60 0 0 1 12 3.493a60 60 0 0 1 10.399 5.84q-1.345.372-2.658.814m-15.482 0A51 51 0 0 1 12 13.489a50.7 50.7 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 0v-3.675A55 55 0 0 1 12 8.443m-7.007 11.55A5.98 5.98 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-500">
                  SMA &amp; SMK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008zm0 3h.008v.008h-.008zm0 3h.008v.008h-.008z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-500">
                  SMP &amp; SD
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-500">
                  Pesantren
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#33B77E]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-4 w-4 text-[#33B77E]"
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
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-zinc-500">
                  Yayasan Pendidikan
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="relative overflow-hidden bg-gradient-to-b from-[#F0FBF7] to-white py-24"
        >
          <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#33B77E]/30 to-transparent" />
          <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#33B77E]/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#33B77E]/5 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.7fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#33B77E]/20 bg-[#33B77E]/8 px-4 py-1.5 text-xs font-semibold text-[#33B77E]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--heroicons h-3.5 w-3.5"
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
                      d="M9.879 7.519c1.172-1.025 3.071-1.025 4.243 0c1.171 1.025 1.171 2.687 0 3.712q-.308.268-.67.442c-.746.361-1.452.999-1.452 1.827v.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 5.25h.008v.008H12z"
                    />
                  </svg>
                  FAQ
                </div>
                <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0E1E14] md:text-4xl">
                  Pertanyaan yang{" "}
                  <span className="text-[#33B77E]">Sering Diajukan</span>
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-zinc-500">
                  Belum menemukan jawaban? Tim kami siap membantu langsung kapan
                  saja.
                </p>
                <a
                  href="https://wa.me/628216195202?text=Halo%20Min,%20saya%20ingin%20konsultasi%20gratis%20terkait%20sistem%20keuangan%20Ontuition.%20Boleh%20dibantu?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all duration-200 hover:bg-[#20BA5A] hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ic h-4 w-4"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                  Tanya via WhatsApp
                </a>
                <div className="my-8 h-px bg-zinc-100" />
              </div>
              <OntuitionFaq />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const ontuition: ProductDesign = {
  page: () => <OntuitionPage />,
};
