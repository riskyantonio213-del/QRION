"use client";

import { useState } from "react";

const TIERS: Record<string, [string, string]> = {
  "3": ["6.000.000", "7.500.000"],
  "6": ["12.000.000", "15.000.000"],
  "12": ["24.000.000", "30.000.000"],
};

export function OntimePricingTiers() {
  const [d, setD] = useState("6");
  return (
    <>
      <div
        className="
            relative pt-24 md:pt-40 pb-16 md:pb-28 mb-10
            flex flex-col items-center justify-center
            bg-gradient-to-b from-white via-[#e9fff3] to-white
            rounded-2xl md:rounded-3xl
          "
        style={{
          backgroundImage:
            'url("https://ontime.qrion.id/assets/blur-t4gO2Qwf.png")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#33B77E] mb-3 md:mb-4">
          Paket dan Harga
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-12">
          Tingkatkan Manajemen Sekolah Anda
          <br className="block md:hidden" />
          <span className="hidden md:inline"> </span>dengan Harga Terbaik
        </p>
        <div className="flex w-full max-w-md border border-[#33B77E] rounded-xl overflow-hidden">
          <button
            className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition ${d === "3" ? "bg-[#33B77E] text-white" : "text-[#33B77E]"}`}
            type="button"
            onClick={() => setD("3")}
          >
            3 Bulan
          </button>
          <button
            className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition ${d === "6" ? "bg-[#33B77E] text-white" : "text-[#33B77E]"}`}
            type="button"
            onClick={() => setD("6")}
          >
            6 Bulan
          </button>
          <button
            className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition ${d === "12" ? "bg-[#33B77E] text-white" : "text-[#33B77E]"}`}
            type="button"
            onClick={() => setD("12")}
          >
            12 Bulan
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
        <div
          className="
                bg-[#F3FFF9]
                border-2 md:border-4 border-[#33B77E]
                rounded-2xl md:rounded-3xl
                p-4 sm:p-6 md:p-8
                text-left shadow-md
                 w-full max-w-sm mx-auto
              "
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <span className="bg-[#33B77E] text-white px-4 py-1.5 rounded-lg text-sm font-bold">
              Tier 1
            </span>
            <span className="bg-[#DFF5EA] text-[#33B77E] px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold">
              1 - 500 Siswa
            </span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-6">
            Rp{TIERS[d][0]}
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6 md:mb-10">
            <li>• Manajemen Akademik</li>
            <li>• Manajemen Keuangan</li>
            <li>• Absensi &amp; Nilai</li>
            <li>• Support &amp; Update</li>
          </ul>
          <button className="w-full border-2 border-[#33B77E] text-[#33B77E] py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-[#33B77E] hover:text-white transition">
            Pilih Paket
          </button>
        </div>
        <div
          className="
                bg-[#F3FFF9]
                border-2 md:border-4 border-[#33B77E]
                rounded-2xl md:rounded-3xl
                p-4 sm:p-6 md:p-8
                text-left shadow-md
                 w-full max-w-sm mx-auto
              "
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <span className="bg-[#33B77E] text-white px-4 py-1.5 rounded-lg text-sm font-bold">
              Tier 2
            </span>
            <span className="bg-[#DFF5EA] text-[#33B77E] px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold">
              501 - 1000 Siswa
            </span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#33B77E] mb-6">
            Rp{TIERS[d][1]}
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-6 md:mb-10">
            <li>• Manajemen Akademik</li>
            <li>• Manajemen Keuangan</li>
            <li>• Absensi &amp; Nilai</li>
            <li>• Support &amp; Update</li>
          </ul>
          <button className="w-full border-2 border-[#33B77E] text-[#33B77E] py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-[#33B77E] hover:text-white transition">
            Pilih Paket
          </button>
        </div>
      </div>
    </>
  );
}
