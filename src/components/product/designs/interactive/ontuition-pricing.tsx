"use client";

import { useState } from "react";

const PRICES: Record<string, { amount: string; label: string }> = {
  "3bulan": { amount: "Rp1.500.000", label: "/ 3 bulan" },
  "6bulan": { amount: "Rp3.000.000", label: "/ 6 bulan" },
  "12bulan": { amount: "Rp6.000.000", label: "/ 12 bulan" },
};

export function OntuitionPricing() {
  const [period, setPeriod] = useState("6bulan");
  return (
    <>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-zinc-100 bg-zinc-50 p-1 shadow-sm">
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${period === "3bulan" ? "bg-[#33B77E] text-white shadow-md shadow-[#33B77E]/25" : "text-zinc-500 hover:text-[#33B77E]"}`}
            type="button"
            onClick={() => setPeriod("3bulan")}
          >
            3 Bulan
          </button>
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${period === "6bulan" ? "bg-[#33B77E] text-white shadow-md shadow-[#33B77E]/25" : "text-zinc-500 hover:text-[#33B77E]"}`}
            type="button"
            onClick={() => setPeriod("6bulan")}
          >
            6 Bulan
          </button>
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${period === "12bulan" ? "bg-[#33B77E] text-white shadow-md shadow-[#33B77E]/25" : "text-zinc-500 hover:text-[#33B77E]"}`}
            type="button"
            onClick={() => setPeriod("12bulan")}
          >
            12 Bulan
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#33B77E]/25 bg-gradient-to-br from-[#F0FBF7] to-white shadow-lg shadow-[#33B77E]/8">
          <div className="absolute top-0 left-0 h-1 w-full bg-[#33B77E]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#33B77E]/10 blur-3xl" />
          <div className="relative grid gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center border-b border-[#33B77E]/10 px-8 py-10 md:border-b-0 md:border-r md:py-12">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#33B77E]">
                Paket Semua Sekolah
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#0E1E14] md:text-5xl">
                  {PRICES[period].amount}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">
                {PRICES[period].label}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#33B77E]/10 px-3 py-1.5">
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
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25zm0 2.25h.008v.008H8.25zm0 2.25h.008v.008H8.25zm0 2.25h.008v.008H8.25zm2.498-6.75h.007v.008h-.007zm0 2.25h.007v.008h-.007zm0 2.25h.007v.008h-.007zm0 2.25h.007v.008h-.007zm2.504-6.75h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.498-6.75h.008v.008h-.008zm0 2.25h.008v.008h-.008zM8.25 6h7.5v2.25h-7.5zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A49 49 0 0 0 12 2.25"
                  />
                </svg>
                <span className="text-xs font-semibold text-[#33B77E]">
                  Rp500.000 / bulan
                </span>
              </div>
              <a href="/live-preview/ontuition" className="mt-8">
                <button className="w-full cursor-pointer rounded-full bg-[#33B77E] py-3.5 text-sm font-semibold text-white shadow-md shadow-[#33B77E]/25 transition-all duration-200 hover:bg-[#2a9666] hover:shadow-lg hover:shadow-[#33B77E]/30">
                  Mulai Sekarang →
                </button>
              </a>
              <a
                href="/live-preview/ontuition"
                className="mt-3 block text-center text-xs font-medium text-zinc-400 hover:text-[#33B77E]"
              >
                Coba demo gratis dulu
              </a>
            </div>
            <div className="px-8 py-10 md:py-12">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Yang kamu dapatkan
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
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
                  <span className="text-sm text-zinc-600">
                    Setup &amp; Onboarding Gratis
                  </span>
                </div>
                <div className="flex items-center gap-3">
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
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-600">
                    Laporan Keuangan Real-Time
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#33B77E]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--mdi h-4 w-4 text-[#33B77E]"
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
                  <span className="text-sm text-zinc-600">
                    Multi Channel Pembayaran
                  </span>
                </div>
                <div className="flex items-center gap-3">
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
                        d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-600">
                    Keamanan Data Terenkripsi
                  </span>
                </div>
                <div className="flex items-center gap-3">
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
                        d="M8.625 9.75a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227q1.63.24 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332a48 48 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-600">
                    Support Teknis Responsif
                  </span>
                </div>
                <div className="flex items-center gap-3">
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
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-600">
                    Update Fitur Otomatis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-zinc-400">
          Butuh paket custom untuk lebih dari 1000 siswa?{" "}
          <a
            href="https://wa.me/628216195202"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#33B77E] hover:underline"
          >
            Hubungi kami
          </a>
        </p>
      </div>
    </>
  );
}
