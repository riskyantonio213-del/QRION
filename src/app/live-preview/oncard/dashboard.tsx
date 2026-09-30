"use client";

import {
  Users,
  QrCode,
  Store,
  CreditCard,
  Wallet,
  Building2,
  TrendingUp,
} from "lucide-react";

export function OncardDashboard() {
  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Senin, 28 September 2026
        </p>
      </div>

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0F5338] p-6 text-white shadow-sm">
        {/* Decorative Background Circles */}
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div>
            <span className="text-xs text-emerald-200/80 font-medium">
              Selamat datang kembali,
            </span>
            <h2 className="text-2xl font-bold text-white mt-0.5">
              Admin Demo
            </h2>
            <p className="text-xs text-emerald-100/70 mt-1 max-w-xl">
              Pantau kinerja <span className="font-semibold text-white">5 unit usaha</span> di sekolah{" "}
              <span className="font-semibold text-white">SMP N RND 1 PKU</span> dalam satu dashboard.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
              <Store className="h-3.5 w-3.5 text-emerald-300" />
              <span>
                Unit Aktif <strong className="font-semibold">5</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
              <CreditCard className="h-3.5 w-3.5 text-emerald-300" />
              <span>
                Kartu Terkoneksi <strong className="font-semibold">1</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
              <Building2 className="h-3.5 w-3.5 text-emerald-300" />
              <span>
                Cakupan <strong className="font-semibold">4%</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Cards (6 Metric Cards) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Card 1: Orang Tua Terkoneksi */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-indigo-50 p-2 text-indigo-500">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-indigo-600">6</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">
              Orang Tua Terkoneksi
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 text-[11px] text-slate-400">
            dari 23 user
          </div>
        </div>

        {/* Card 2: Saldo Wallet QRION */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
              <QrCode className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500 border border-slate-100">
              <TrendingUp className="h-3 w-3 text-slate-400" />
              Bulan ini
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-red-500">-Rp 799.000</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">
              Saldo Wallet QRION
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-[11px] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
            Pending withdraw: <strong className="font-semibold text-slate-700">Rp 0</strong>
          </div>
        </div>

        {/* Card 3: Total Saldo Merchant */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-blue-50 p-2 text-blue-500">
              <Store className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500 border border-slate-100">
              5 unit
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-blue-600">Rp 360.000</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">
              Total Saldo Merchant
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 opacity-0 text-[11px]">
            &nbsp;
          </div>
        </div>

        {/* Card 4: Total Saldo User */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-purple-50 p-2 text-purple-600">
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500 border border-slate-100">
              23 user
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-indigo-600">Rp 797.000</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">
              Total Saldo User
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 opacity-0 text-[11px]">
            &nbsp;
          </div>
        </div>

        {/* Card 5: Pendapatan Institusi */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-teal-50 p-2 text-teal-600">
              <Wallet className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-teal-600">Rp 11.000</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">
              Pendapatan Institusi
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 text-[11px] text-slate-400">
            Total pendapatan dari institusi
          </div>
        </div>

        {/* Card 6: Kartu Terkoneksi */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-orange-50 p-2 text-orange-500">
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-600">
              +0 / 7hr
            </span>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-800">
              1 <span className="text-sm font-normal text-slate-400">/ 23</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">
              Kartu Terkoneksi
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-50 text-[11px] text-slate-400">
            Cakupan: <strong className="font-semibold text-slate-700">4%</strong> dari 23 user
          </div>
        </div>
      </div>

      {/* Distribusi Saldo Merchant Chart / Section */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800">
              Distribusi Saldo Merchant
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Perbandingan saldo merchant dari yang tertinggi
            </p>
          </div>
          <span className="rounded-xl bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            Total Rp 360.000
          </span>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-600 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            <span>1 merchant aktif</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium text-slate-700">
              <span>Kantin Berkah</span>
              <span className="font-bold text-slate-800">Rp 360.000</span>
            </div>
            {/* Progress Bar */}
            <div className="relative h-6 w-full rounded-lg bg-indigo-500 overflow-hidden flex items-center justify-end pr-2 text-[10px] font-bold text-white">
              100.0%
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}