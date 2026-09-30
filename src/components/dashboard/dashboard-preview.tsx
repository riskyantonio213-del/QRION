"use client";

import React from "react";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Bell,
  Settings,
  AlertTriangle,
  ArrowRight,
  Wallet,
  Users,
  GraduationCap,
  Activity,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  Building2,
  CreditCard,
  Clock,
  UserCheck,
} from "lucide-react";

import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";

export function DashboardPreview() {
  return (
    <LivePreviewShell slug="onboard" compact size="lg">
      <div className="flex h-full w-full min-w-0 overflow-hidden bg-[#F8FAFC] font-sans text-slate-800">
        {/* ================= SIDEBAR ================= */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-4 lg:flex justify-between">
          <div>
            {/* Logo Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#10B981] font-bold text-white text-sm shadow-xs">
                  Q
                </div>
                <div>
                  <h1 className="font-extrabold text-sm tracking-wider text-[#1E1B4B] leading-none">
                    ONBOARD
                  </h1>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    School Dashboard
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Navigasi */}
            <div className="mt-5">
              <p className="px-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                MENU UTAMA
              </p>
              <nav className="mt-2 space-y-1">
                {/* Active Dashboard */}
                <a
                  href="#dashboard"
                  className="flex items-center gap-3 rounded-xl bg-[#10B981] px-3 py-2.5 text-xs font-bold text-white shadow-xs"
                >
                  <Activity className="h-4 w-4" />
                  <span>Dashboard</span>
                </a>

                {/* Keuangan */}
                <a
                  href="#keuangan"
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Wallet className="h-4 w-4 text-slate-400" />
                    <span>Keuangan</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </a>

                {/* Oncard-Cashless */}
                <a
                  href="#oncard"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  <CreditCard className="h-4 w-4 text-slate-400" />
                  <span>Oncard-Cashless</span>
                </a>

                {/* Ontime-Absensi (Expanded Dropdown) */}
                <div>
                  <a
                    href="#absensi"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>Ontime-Absensi</span>
                    </div>
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                  </a>
                  <div className="ml-7 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                    <a
                      href="#dashboard-absensi"
                      className="block text-[11px] font-semibold text-[#10B981] py-1"
                    >
                      • Dashboard Absensi
                    </a>
                    <a
                      href="#absen-hari-ini"
                      className="block text-[11px] font-medium text-slate-400 hover:text-slate-600 py-1"
                    >
                      • Absen Hari Ini
                    </a>
                  </div>
                </div>

                {/* Siswa */}
                <a
                  href="#siswa"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  <GraduationCap className="h-4 w-4 text-slate-400" />
                  <span>Siswa</span>
                </a>

                {/* Guru */}
                <a
                  href="#guru"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  <UserCheck className="h-4 w-4 text-slate-400" />
                  <span>Guru</span>
                </a>
              </nav>
            </div>
          </div>

          {/* User Profile Footer */}
          <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10B981] font-bold text-white text-xs shadow-xs">
              PS
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-[#1E1B4B] truncate">
                Pak Sugondo
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                Kepala Sekolah
              </p>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Topbar */}
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-6 py-3.5">
            {/* School Selector Dropdown */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-[#1E1B4B] cursor-pointer hover:bg-slate-100 transition">
                <Building2 className="h-4 w-4 text-[#10B981]" />
                <span>Pondok Pesantren Al Ikh...</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  Pekanbaru
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-1" />
              </div>
            </div>

            {/* Right Top Status & Profile */}
            <div className="flex items-center gap-4 text-xs">
              <span className="hidden text-slate-400 md:inline">
                Last Update:{" "}
                <strong className="text-slate-700 font-semibold">
                  Selasa, 29 September 2026, 09.16
                </strong>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Notifikasi"
                  className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 transition cursor-pointer"
                >
                  <Bell className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Pengaturan"
                  className="rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 transition cursor-pointer"
                >
                  <Settings className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981] font-bold text-white text-xs">
                    PS
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-[#1E1B4B] leading-none">
                      Pak Sugondo
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Kepala Sekolah
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Sub Header / Bahasa Selector */}
          <div className="flex justify-end px-6 pt-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
              Bahasa dashboard →{" "}
              <strong className="text-slate-700">Bahasa Indonesia</strong> ▼
            </span>
          </div>

          {/* Body Dashboard Container */}
          <main className="p-6 space-y-6">
            {/* Greeting */}
            <div>
              <h1 className="text-2xl font-extrabold text-[#1E1B4B] flex items-center gap-2">
                Selamat pagi, Pak Sugondo. <span>👋</span>
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Berikut kondisi sekolah Anda bulan ini.
              </p>
            </div>

            {/* Banner Green - Kinerja Sekolah */}
            <div className="rounded-3xl bg-gradient-to-r from-[#00A896] via-[#10B981] to-[#00A896] p-6 text-white shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/20">
                <div>
                  <h2 className="text-lg font-bold">Kinerja Sekolah</h2>
                  <p className="text-xs text-white/80 mt-0.5">
                    Kondisi operasional sekolah bulan ini.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 text-xs font-bold text-[#1E1B4B] shadow-xs">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                    ✓
                  </div>
                  <span>
                    Secara keseluruhan, kondisi sekolah baik.{" "}
                    <span className="text-slate-500 font-normal">
                      3 area perlu perhatian bulan ini.
                    </span>
                  </span>
                </div>
              </div>

              {/* 5 White Cards Inside Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
                {/* Card 1: Keuangan */}
                <div className="rounded-2xl bg-white p-3.5 text-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Wallet className="h-4 w-4 text-[#10B981]" />
                      <span>Keuangan</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">
                      Pembayaran SPP
                    </p>
                    <p className="text-xl font-extrabold text-[#1E1B4B] mt-0.5">
                      85.0%
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[10px]">
                    <span className="text-red-500 font-bold flex items-center gap-0.5">
                      <TrendingDown className="h-3 w-3" /> 10.0% vs bulan lalu
                    </span>
                    <span className="text-amber-500 font-bold">
                      Perlu perhatian
                    </span>
                  </div>
                </div>

                {/* Card 2: Siswa */}
                <div className="rounded-2xl bg-white p-3.5 text-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <GraduationCap className="h-4 w-4 text-[#10B981]" />
                      <span>Siswa</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">Kehadiran</p>
                    <p className="text-xl font-extrabold text-[#1E1B4B] mt-0.5">
                      83.3%
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[10px]">
                    <span className="text-red-500 font-bold flex items-center gap-0.5">
                      <TrendingDown className="h-3 w-3" /> 16.7% vs bulan lalu
                    </span>
                    <span className="text-amber-500 font-bold">
                      Perlu perhatian
                    </span>
                  </div>
                </div>

                {/* Card 3: Guru */}
                <div className="rounded-2xl bg-white p-3.5 text-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <UserCheck className="h-4 w-4 text-[#10B981]" />
                      <span>Guru</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">Kehadiran</p>
                    <p className="text-xl font-extrabold text-[#1E1B4B] mt-0.5">
                      80.0%
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[10px]">
                    <span className="text-red-500 font-bold flex items-center gap-0.5">
                      <TrendingDown className="h-3 w-3" /> 20.0% vs bulan lalu
                    </span>
                    <span className="text-amber-500 font-bold">
                      Perlu perhatian
                    </span>
                  </div>
                </div>

                {/* Card 4: Aktivitas Siswa */}
                <div className="rounded-2xl bg-white p-3.5 text-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Activity className="h-4 w-4 text-[#10B981]" />
                      <span>Aktivitas Siswa</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">
                      Transaksi OnCard
                    </p>
                    <p className="text-xl font-extrabold text-[#1E1B4B] mt-0.5">
                      Rp100M
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[10px]">
                    <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                      <TrendingUp className="h-3 w-3" /> 3.5% vs bulan lalu
                    </span>
                    <span className="text-emerald-600 font-bold">Baik</span>
                  </div>
                </div>

                {/* Card 5: Operasional */}
                <div className="rounded-2xl bg-white p-3.5 text-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                      <span>Operasional</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">
                      Sistem & Operasional
                    </p>
                    <p className="text-base font-extrabold text-[#1E1B4B] mt-0.5 leading-tight">
                      Berjalan baik
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[10px]">
                    <span className="text-slate-400">September 2026</span>
                    <span className="text-emerald-600 font-bold">Baik</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hal yang Perlu Diperhatikan Section */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h2 className="text-base font-bold text-[#1E1B4B]">
                    Hal yang perlu diperhatikan
                  </h2>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-bold text-[#10B981] hover:underline cursor-pointer"
                >
                  <span>Lihat semua</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-400 -mt-2">
                Berdasarkan data terbaru, berikut area yang perlu Anda tindak
                lanjuti.
              </p>

              {/* 3 Red/Amber Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                {/* Action Card 1 */}
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Wallet className="h-4 w-4 text-red-500" />
                      <span>Pembayaran SPP melambat</span>
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-[#1E1B4B]">
                        85.0%
                      </span>
                      <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-bold text-red-500 flex items-center gap-0.5">
                        <TrendingDown className="h-3 w-3" /> 10.0%
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      dari bulan lalu
                    </p>
                    <p className="text-xs font-medium text-slate-600 mt-3">
                      3 siswa memiliki pembayaran tertunggak.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-[#10B981] hover:underline cursor-pointer"
                  >
                    <span>Lihat SPP</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Action Card 2 */}
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <GraduationCap className="h-4 w-4 text-amber-500" />
                      <span>Kehadiran siswa menurun</span>
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-[#1E1B4B]">
                        83.3%
                      </span>
                      <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-bold text-red-500 flex items-center gap-0.5">
                        <TrendingDown className="h-3 w-3" /> 16.7%
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      dari bulan lalu
                    </p>
                    <p className="text-xs font-medium text-slate-600 mt-3">
                      6 data siswa tersedia untuk periode aktif.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-[#10B981] hover:underline cursor-pointer"
                  >
                    <span>Lihat Absensi</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Action Card 3 */}
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Activity className="h-4 w-4 text-amber-500" />
                      <span>Aktivitas belanja siswa menurun</span>
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-[#1E1B4B]">
                        Rp100M
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600 flex items-center gap-0.5">
                        <TrendingUp className="h-3 w-3" /> 3.5%
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      dari bulan lalu
                    </p>
                    <p className="text-xs font-medium text-slate-600 mt-3">
                      Dampak terbesar: transaksi kantin.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-[#10B981] hover:underline cursor-pointer"
                  >
                    <span>Lihat OnCard</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Grid: 3 Ringkasan Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-2">
              {/* Column 1: Ringkasan Keuangan */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-[#10B981]" />
                      <h3 className="text-sm font-bold text-[#1E1B4B]">
                        Ringkasan Keuangan
                      </h3>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                      Bulan ini
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Gambaran kesehatan keuangan sekolah.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-b border-slate-50 pb-3">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Total Pendapatan
                      </p>
                      <p className="text-sm font-bold text-[#1E1B4B] mt-0.5">
                        Rp 120.400.000
                      </p>
                      <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                        <TrendingUp className="h-3 w-3" /> 3.5% vs bulan lalu
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Arus Kas Bersih
                      </p>
                      <p className="text-sm font-bold text-emerald-600 mt-0.5">
                        +Rp 57.700.000
                      </p>
                      <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                        <TrendingUp className="h-3 w-3" /> 0.9% vs bulan lalu
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 text-xs">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-medium text-slate-700">
                        <span className="text-emerald-500">●</span> Ontuition
                      </span>
                      <span className="text-slate-400">
                        Rp 8.500.000 · 7.1%
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-medium text-slate-700">
                        <span className="text-amber-500">●</span> Donasi
                      </span>
                      <span className="text-slate-400">
                        Rp 12.000.000 · 10.0%
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-medium text-slate-700">
                        <span className="text-yellow-400">●</span> Lain-lain
                      </span>
                      <span className="text-slate-400">
                        Rp 99.900.000 · 83.0%
                      </span>
                    </div>
                  </div>

                  {/* Visual Bar Chart */}
                  <div className="mt-4 flex items-end gap-3 h-20 pt-2 border-t border-slate-50 justify-around">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 rounded-t-md bg-emerald-300 h-10" />
                      <span className="text-[9px] text-slate-400">Jul</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 rounded-t-md bg-emerald-400 h-12" />
                      <span className="text-[9px] text-slate-400">Ags</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 rounded-t-md bg-[#10B981] h-16" />
                      <span className="text-[9px] text-slate-400">Sep</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-slate-400">
                      Total Pengeluaran
                    </p>
                    <p className="text-sm font-bold text-[#1E1B4B]">
                      Rp 62.700.000
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Ringkasan Kehadiran */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#10B981]" />
                      <h3 className="text-sm font-bold text-[#1E1B4B]">
                        Ringkasan Kehadiran
                      </h3>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                      Bulan ini
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Performa kehadiran di seluruh sekolah.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Kehadiran Siswa
                      </p>
                      <p className="text-lg font-bold text-[#1E1B4B] mt-0.5">
                        83.3%
                      </p>
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-0.5 mt-0.5">
                        <TrendingDown className="h-3 w-3" /> 16.7%
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Kehadiran Guru
                      </p>
                      <p className="text-lg font-bold text-[#1E1B4B] mt-0.5">
                        80.0%
                      </p>
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-0.5 mt-0.5">
                        <TrendingDown className="h-3 w-3" /> 20.0%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-50 mt-3 text-xs">
                    <p className="text-[11px] font-bold text-[#1E1B4B]">
                      Kehadiran berdasarkan Kelas
                    </p>
                    <div className="space-y-1.5 text-[11px] text-slate-500">
                      <div className="flex justify-between items-center">
                        <span>Kelas VII</span>
                        <span className="font-semibold text-slate-700">
                          0.0%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kelas VIII</span>
                        <span className="font-semibold text-slate-700">
                          0.0%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kelas IX</span>
                        <span className="font-semibold text-slate-700">
                          0.0%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kelas X</span>
                        <span className="font-semibold text-emerald-600">
                          83.3%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1 text-xs">
                  <p className="text-[11px] font-bold text-[#1E1B4B]">
                    Kehadiran berdasarkan Mata Pelajaran
                  </p>
                  <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                    <span>Hadir: 83.3%</span>
                    <span>Terlambat: 14.3%</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Aktivitas Siswa */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 space-y-4 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-[#10B981]" />
                      <h3 className="text-sm font-bold text-[#1E1B4B]">
                        Aktivitas Siswa
                      </h3>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                      Bulan ini
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Ringkasan aktivitas transaksi siswa.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-b border-slate-50 pb-3">
                    <div>
                      <p className="text-[10px] text-slate-400">Siswa Aktif</p>
                      <p className="text-lg font-bold text-[#1E1B4B] mt-0.5">
                        20
                      </p>
                      <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                        <TrendingUp className="h-3 w-3" /> 0.0%
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Siswa dengan Transaksi
                      </p>
                      <p className="text-lg font-bold text-[#1E1B4B] mt-0.5">
                        17
                      </p>
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-0.5 mt-0.5">
                        <TrendingDown className="h-3 w-3" /> 10.0%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Penetrasi Transaksi
                      </p>
                      <p className="text-sm font-bold text-[#1E1B4B] mt-0.5">
                        85.0%
                      </p>
                      <span className="text-[10px] font-semibold text-red-500 flex items-center gap-0.5 mt-0.5">
                        <TrendingDown className="h-3 w-3" /> 10.0%
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Rata-rata Pengeluaran / Siswa / Hari
                      </p>
                      <p className="text-sm font-bold text-[#1E1B4B] mt-0.5">
                        Rp 5.876.471
                      </p>
                      <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                        <TrendingUp className="h-3 w-3" /> 3.5%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400">Nilai Transaksi</p>
                  <p className="text-base font-extrabold text-[#10B981] mt-0.5">
                    Rp 99.900.000
                  </p>
                  <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="h-3 w-3" /> 3.5% vs bulan lalu
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </LivePreviewShell>
  );
}

export default DashboardPreview;