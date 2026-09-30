"use client";

import {
  RotateCw,
  Info,
  TrendingUp,
  TrendingDown,
  Wallet,
  Landmark,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Sprout,
  HandHeart,
} from "lucide-react";

export function JurnalDashboard() {
  return (
    <div className="space-y-6 select-none font-sans">
      {/* Page Header & Breadcrumb */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Dashboard Kas
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            <span className="text-slate-500">Home</span> &gt; Dashboard
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 shadow-2xs transition cursor-pointer"
        >
          <RotateCw className="w-3.5 h-3.5 text-slate-500" />
          <span>Refresh</span>
        </button>
      </div>

      {/* 3 Metrics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Total Uang Masuk */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00875A] flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Total Uang Masuk
              </span>
            </div>
            <Info className="w-4 h-4 text-slate-300 cursor-pointer hover:text-slate-400 transition" />
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-800 tracking-tight">
              229.574.002
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span>Total pemasukan</span>
            </div>
          </div>
        </div>

        {/* Card 2: Total Uang Keluar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Total Uang Keluar
              </span>
            </div>
            <Info className="w-4 h-4 text-slate-300 cursor-pointer hover:text-slate-400 transition" />
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-800 tracking-tight">
              38.775.001
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-1">
              <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
              <span>Total pengeluaran</span>
            </div>
          </div>
        </div>

        {/* Card 3: Saldo Rekening */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Saldo Rekening
              </span>
            </div>
            <Info className="w-4 h-4 text-slate-300 cursor-pointer hover:text-slate-400 transition" />
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-800 tracking-tight">
              190.799.001
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span>Saldo saat ini</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arus Kas Per Bulan (Chart & Table Container) */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-base font-bold text-slate-800 tracking-tight">
            Arus Kas Per Bulan
          </h2>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 font-medium">( 6 Bulan Terakhir )</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00875A]" />
              <span className="text-slate-600 font-medium">Uang Masuk</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-slate-600 font-medium">Uang Keluar</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Visual Bar Chart (Left Side) */}
          <div className="lg:col-span-5 flex flex-col justify-end h-[240px] pt-4">
            <div className="flex items-end justify-between gap-2 h-full px-2 border-b border-slate-100 pb-2">
              {/* Apr 2026 */}
              <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  <div className="w-3.5 bg-[#00875A] rounded-t-xs h-[65%]" />
                  <div className="w-3.5 bg-rose-500 rounded-t-xs h-[3%]" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  Apr 2026
                </span>
              </div>

              {/* Mei 2026 */}
              <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  <div className="w-3.5 bg-[#00875A] rounded-t-xs h-[3%]" />
                  <div className="w-3.5 bg-rose-500 rounded-t-xs h-[8%]" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  Mei 2026
                </span>
              </div>

              {/* Jun 2026 */}
              <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  <div className="w-3.5 bg-[#00875A] rounded-t-xs h-[6%]" />
                  <div className="w-3.5 bg-rose-500 rounded-t-xs h-[0%]" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  Jun 2026
                </span>
              </div>

              {/* Jul 2026 */}
              <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  <div className="w-3.5 bg-[#00875A] rounded-t-xs h-[14%]" />
                  <div className="w-3.5 bg-rose-500 rounded-t-xs h-[2%]" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  Jul 2026
                </span>
              </div>

              {/* Agu 2026 */}
              <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  <div className="w-3.5 bg-[#00875A] rounded-t-xs h-[85%]" />
                  <div className="w-3.5 bg-rose-500 rounded-t-xs h-[28%]" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  Agu 2026
                </span>
              </div>

              {/* Sep 2026 */}
              <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  <div className="w-3.5 bg-[#00875A] rounded-t-xs h-[2%]" />
                  <div className="w-3.5 bg-rose-500 rounded-t-xs h-[2%]" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                  Sep 2026
                </span>
              </div>
            </div>
          </div>

          {/* Arus Kas Table (Right Side) */}
          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-100 text-slate-700 font-bold">
                  <th className="py-2.5 px-2">Bulan</th>
                  <th className="py-2.5 px-2 text-right">Pemasukan</th>
                  <th className="py-2.5 px-2 text-right">Pengeluaran</th>
                  <th className="py-2.5 px-2 text-right">Saldo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-600 font-medium">
                <tr>
                  <td className="py-2.5 px-2 text-slate-800">Sep 2026</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">1.000</td>
                  <td className="py-2.5 px-2 text-right text-rose-500">500.000</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600 font-bold">
                    +190.799.001
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-slate-800">Agu 2026</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">111.000.000</td>
                  <td className="py-2.5 px-2 text-right text-rose-500">32.275.001</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600 font-bold">
                    +191.298.001
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-slate-800">Jul 2026</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">13.446.000</td>
                  <td className="py-2.5 px-2 text-right text-rose-500">150.000</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600 font-bold">
                    +112.573.002
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-slate-800">Jun 2026</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">4.000.000</td>
                  <td className="py-2.5 px-2 text-right text-rose-500">0</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600 font-bold">
                    +99.277.002
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-slate-800">Mei 2026</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">1.112.002</td>
                  <td className="py-2.5 px-2 text-right text-rose-500">5.500.000</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600 font-bold">
                    +95.277.002
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-slate-800">Apr 2026</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">100.015.000</td>
                  <td className="py-2.5 px-2 text-right text-rose-500">350.000</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600 font-bold">
                    +99.665.000
                  </td>
                </tr>
                <tr className="font-bold border-t border-slate-100 text-slate-800">
                  <td className="py-3 px-2">Total 6 Bulan</td>
                  <td className="py-3 px-2 text-right text-emerald-600">229.574.002</td>
                  <td className="py-3 px-2 text-right text-rose-500">38.775.001</td>
                  <td className="py-3 px-2 text-right text-emerald-600">
                    +190.799.001
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Program Fundraising Aktif Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HandHeart className="w-5 h-5 text-[#00875A]" />
            <h2 className="text-base font-bold text-slate-800">
              Program Fundraising Aktif
            </h2>
            <span className="text-xs text-slate-400 font-normal">
              (5 program aktif)
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <button
              type="button"
              className="p-1 rounded-lg hover:bg-slate-200/50 text-slate-400 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span>1 / 2</span>
            <button
              type="button"
              className="p-1 rounded-lg hover:bg-slate-200/50 text-slate-700 transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Program 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[#00875A] text-[10px] font-bold">
                <Sprout className="w-3 h-3" /> Donasi
              </span>
              <h3 className="font-bold text-slate-800 text-sm">Wakaf Produktif</h3>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>20 Jun 2026 - 20 Jan 2027</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Target</span>
                <span className="font-bold text-slate-800">100.000.000</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Terkumpul</span>
                <span className="font-bold text-slate-800">250.000</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-[#00875A] w-[1%]" />
              </div>
              <div className="text-right text-[10px] text-slate-400 font-medium">
                0% tercapai
              </div>
            </div>

            <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-3.5 h-3.5" />
                <span>0 donatur</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Aktif</span>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[#00875A] text-[10px] font-bold">
                <Sprout className="w-3 h-3" /> Donasi
              </span>
              <h3 className="font-bold text-slate-800 text-sm">
                10 Ekor Ternak Qurban
              </h3>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>6 Mei 2026 - 8 Jul 2026</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Target</span>
                <span className="font-bold text-slate-800">150.000.000</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Terkumpul</span>
                <span className="font-bold text-slate-800">0</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-[#00875A] w-0" />
              </div>
              <div className="text-right text-[10px] text-slate-400 font-medium">
                0% tercapai
              </div>
            </div>

            <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-3.5 h-3.5" />
                <span>0 donatur</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-rose-500">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Berakhir</span>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[#00875A] text-[10px] font-bold">
                <Sprout className="w-3 h-3" /> Donasi
              </span>
              <h3 className="font-bold text-slate-800 text-sm">
                Study Tour Sumbar 2026
              </h3>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>6 Mei 2026 - 8 Jul 2026</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Target</span>
                <span className="font-bold text-slate-800">250.000.000</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Terkumpul</span>
                <span className="font-bold text-slate-800">1.000.000</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-[#00875A] w-[1%]" />
              </div>
              <div className="text-right text-[10px] text-slate-400 font-medium">
                0% tercapai
              </div>
            </div>

            <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-3.5 h-3.5" />
                <span>0 donatur</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-rose-500">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Berakhir</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}