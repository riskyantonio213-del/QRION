"use client";

import { useState } from "react";

const ANSWERS = [
  "Ya, Ontuition dirancang untuk semua jenjang pendidikan mulai dari TK, SD, SMP, SMA, hingga Perguruan Tinggi dan Pesantren. Sistem kami fleksibel dan dapat disesuaikan dengan kebutuhan spesifik setiap jenjang.",
  "Keamanan data adalah prioritas utama kami. Ontuition menggunakan enkripsi tingkat enterprise, backup otomatis harian, dan server yang tersertifikasi internasional. Data sekolah Anda dijamin aman dan hanya dapat diakses oleh pihak yang berwenang.",
  "Tidak perlu! Ontuition adalah sistem berbasis cloud yang dapat diakses melalui browser web. Anda hanya membutuhkan koneksi internet dan browser modern seperti Chrome, Firefox, atau Safari.",
  "Tidak ada biaya setup atau biaya tersembunyi! Harga yang tertera sudah termasuk setup awal, training untuk admin sekolah, migrasi data, dan support teknis. Anda hanya membayar biaya langganan sesuai paket yang dipilih.",
];

export function OntuitionFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      <div
        className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${open === 0 ? "border-[#33B77E]/25 bg-white shadow-md shadow-[#33B77E]/8" : "border-zinc-100 bg-white hover:border-[#33B77E]/20 hover:shadow-sm"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(open === 0 ? null : 0)}
          className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${open === 0 ? "bg-[#33B77E]" : "bg-[#33B77E]/8 group-hover:bg-[#33B77E]/15"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-5 w-5 transition-colors duration-300 ${open === 0 ? "text-white" : "text-[#33B77E]"}`}
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
          <span
            className={`flex-1 text-sm font-semibold leading-snug md:text-base ${open === 0 ? "text-[#33B77E]" : "text-[#0E1E14]"}`}
          >
            Apakah Ontuition cocok untuk semua jenjang sekolah?
          </span>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open === 0 ? "bg-[#33B77E]/10 rotate-45" : "bg-zinc-50"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-4 w-4 transition-colors duration-300 ${open === 0 ? "text-[#33B77E]" : "text-zinc-400"}`}
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
        </button>
        {open === 0 && (
          <div className="border-t border-[#33B77E]/10 px-6 py-4 pl-20">
            <p className="text-sm leading-relaxed text-zinc-500">
              {ANSWERS[0]}
            </p>
          </div>
        )}
      </div>
      <div
        className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${open === 1 ? "border-[#33B77E]/25 bg-white shadow-md shadow-[#33B77E]/8" : "border-zinc-100 bg-white hover:border-[#33B77E]/20 hover:shadow-sm"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(open === 1 ? null : 1)}
          className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${open === 1 ? "bg-[#33B77E]" : "bg-[#33B77E]/8 group-hover:bg-[#33B77E]/15"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-5 w-5 transition-colors duration-300 ${open === 1 ? "text-white" : "text-[#33B77E]"}`}
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
          <span
            className={`flex-1 text-sm font-semibold leading-snug md:text-base ${open === 1 ? "text-[#33B77E]" : "text-[#0E1E14]"}`}
          >
            Apakah data sekolah saya aman?
          </span>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open === 1 ? "bg-[#33B77E]/10 rotate-45" : "bg-zinc-50"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-4 w-4 transition-colors duration-300 ${open === 1 ? "text-[#33B77E]" : "text-zinc-400"}`}
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
        </button>
        {open === 1 && (
          <div className="border-t border-[#33B77E]/10 px-6 py-4 pl-20">
            <p className="text-sm leading-relaxed text-zinc-500">
              {ANSWERS[1]}
            </p>
          </div>
        )}
      </div>
      <div
        className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${open === 2 ? "border-[#33B77E]/25 bg-white shadow-md shadow-[#33B77E]/8" : "border-zinc-100 bg-white hover:border-[#33B77E]/20 hover:shadow-sm"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(open === 2 ? null : 2)}
          className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${open === 2 ? "bg-[#33B77E]" : "bg-[#33B77E]/8 group-hover:bg-[#33B77E]/15"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-5 w-5 transition-colors duration-300 ${open === 2 ? "text-white" : "text-[#33B77E]"}`}
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
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775a5.25 5.25 0 0 1 10.233-2.33a3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5z"
              />
            </svg>
          </div>
          <span
            className={`flex-1 text-sm font-semibold leading-snug md:text-base ${open === 2 ? "text-[#33B77E]" : "text-[#0E1E14]"}`}
          >
            Apakah saya perlu instal aplikasi di komputer sekolah?
          </span>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open === 2 ? "bg-[#33B77E]/10 rotate-45" : "bg-zinc-50"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-4 w-4 transition-colors duration-300 ${open === 2 ? "text-[#33B77E]" : "text-zinc-400"}`}
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
        </button>
        {open === 2 && (
          <div className="border-t border-[#33B77E]/10 px-6 py-4 pl-20">
            <p className="text-sm leading-relaxed text-zinc-500">
              {ANSWERS[2]}
            </p>
          </div>
        )}
      </div>
      <div
        className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${open === 3 ? "border-[#33B77E]/25 bg-white shadow-md shadow-[#33B77E]/8" : "border-zinc-100 bg-white hover:border-[#33B77E]/20 hover:shadow-sm"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(open === 3 ? null : 3)}
          className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${open === 3 ? "bg-[#33B77E]" : "bg-[#33B77E]/8 group-hover:bg-[#33B77E]/15"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-5 w-5 transition-colors duration-300 ${open === 3 ? "text-white" : "text-[#33B77E]"}`}
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
          <span
            className={`flex-1 text-sm font-semibold leading-snug md:text-base ${open === 3 ? "text-[#33B77E]" : "text-[#0E1E14]"}`}
          >
            Apakah ada biaya setup?
          </span>
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open === 3 ? "bg-[#33B77E]/10 rotate-45" : "bg-zinc-50"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`iconify iconify--heroicons h-4 w-4 transition-colors duration-300 ${open === 3 ? "text-[#33B77E]" : "text-zinc-400"}`}
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
        </button>
        {open === 3 && (
          <div className="border-t border-[#33B77E]/10 px-6 py-4 pl-20">
            <p className="text-sm leading-relaxed text-zinc-500">
              {ANSWERS[3]}
            </p>
          </div>
        )}
      </div>
      <div className="pt-4 text-center">
        <p className="text-xs text-zinc-400">
          Masih ada pertanyaan lain?{" "}
          <a
            href="https://wa.me/628216195202"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#33B77E] hover:underline"
          >
            Hubungi kami langsung
          </a>
        </p>
      </div>
    </div>
  );
}
