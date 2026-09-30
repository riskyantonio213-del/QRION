"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Trash2,
  BellOff,
  Calendar,
  ArrowRight,
  Clock,
  User,
  Lock,
  KeyRound,
  Headphones,
  FileText,
  Camera,
  Info,
  ChevronRight,
  LogOut,
  CheckCircle2,
  ChevronLeft,
  Building2,
  DollarSign,
  Eye,
  EyeOff,
  PlusCircle,
  Settings2,
  ArrowUp,
  ArrowDown,
  Check,
  SlidersHorizontal,
  QrCode,
  Building,
  Phone,
  Mail,
} from "lucide-react";

// ==========================================
// 1. TAMPILAN TOP UP (ALUR LENGKAP 3 GAMBAR)
// ==========================================
export type TopUpChannel = { id: string; name: string; fee: number };

const topUpChannels: TopUpChannel[] = [
  { id: "qris", name: "QRIS Payment", fee: 0 },
  { id: "bsi", name: "BSI VA", fee: 3500 },
  { id: "bri", name: "BRI VA", fee: 3500 },
  { id: "bni", name: "BNI VA", fee: 3500 },
  { id: "mandiri", name: "MANDIRI VA", fee: 5000 },
  { id: "bnc", name: "BNC VA", fee: 3500 },
];

interface TopUpViewProps {
  onBack?: () => void;
  onSelectChannel?: (channel: TopUpChannel) => void;
}

export function TopUpView({ onBack, onSelectChannel }: TopUpViewProps) {
  const [step, setStep] = useState<"list" | "select-channel">("list");

  return (
    <div className="relative flex h-full flex-col bg-[#F8FAFC] text-slate-800">
      {/* ALUR GAMBAR 1: TAMPILAN AWAL BELUM ADA TOP UP */}
      {step === "list" && (
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <div className="relative flex items-center justify-center py-2">
              <button
                type="button"
                onClick={onBack}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-slate-700 hover:text-slate-900 transition cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h1 className="text-lg font-bold text-[#1E1B4B]">Top Up</h1>
            </div>

            <div className="flex flex-col items-center justify-center pt-48">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
                <DollarSign className="h-10 w-10 stroke-[1.5]" />
              </div>
              <p className="mt-4 text-sm font-bold text-[#1E1B4B]">
                Belum ada top up
              </p>
            </div>
          </div>

          {/* Tombol Hijau + Buat Top Up di Pojok Kanan Bawah */}
          <div className="absolute bottom-4 right-0">
            <button
              type="button"
              onClick={() => setStep("select-channel")}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#0e9f6e] transition cursor-pointer"
            >
              <span className="text-lg font-normal">+</span>
              <span>Buat Top Up</span>
            </button>
          </div>
        </div>
      )}

      {/* ALUR GAMBAR 2 & 3: PILIH CHANNEL PEMBAYARAN & BOTTOM SHEET */}
      {step !== "list" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="relative flex items-center justify-center py-2">
            <button
              type="button"
              onClick={() => setStep("list")}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-slate-700 hover:text-slate-900 transition cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-[#1E1B4B]">
              Pilih Channel Pembayaran
            </h1>
          </div>

          <div className="space-y-3 pt-2">
            {topUpChannels.map((channel) => (
              <button
                key={channel.id}
                type="button"
                onClick={() => onSelectChannel?.(channel)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-xs transition hover:border-[#10B981] hover:bg-slate-50/50 cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-bold text-xs">
                    {channel.id === "qris" ? (
                      <QrCode className="h-5 w-5 text-[#008A83]" />
                    ) : (
                      <Building className="h-5 w-5 text-slate-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1E1B4B]">
                      {channel.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Rp {channel.fee.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export function TopUpSheet({
  channel,
  onClose,
}: {
  channel: TopUpChannel;
  onClose: () => void;
}) {
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [nominalInput, setNominalInput] = useState<string>("");

  const presets = ["Rp10.000", "Rp25.000", "Rp50.000", "Rp100.000"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setNominalInput(val);
    setSelectedPreset("");
  };

  const numericNominal = selectedPreset
    ? parseInt(selectedPreset.replace(/\D/g, ""), 10)
    : nominalInput
      ? parseInt(nominalInput, 10)
      : 0;

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-t-[32px] bg-white p-5 pb-8 shadow-2xl animate-in slide-in-from-bottom duration-300 z-10">
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-200" />
        <div>
          <h3 className="text-base font-bold text-[#1E1B4B]">{channel.name}</h3>
          <p className="mt-0.5 text-xs text-slate-400">
            Masukkan nominal top up
          </p>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-4 gap-2">
            {presets.map((preset) => {
              const isActive = selectedPreset === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setSelectedPreset(preset);
                    setNominalInput("");
                  }}
                  className={`rounded-xl border py-3 text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? "border-[#10B981] bg-emerald-50/40 text-[#10B981]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {preset}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Nominal lainnya"
            value={
              nominalInput
                ? `Rp ${parseInt(nominalInput, 10).toLocaleString("id-ID")}`
                : ""
            }
            onChange={handleInputChange}
            className="w-full rounded-2xl border border-slate-100 bg-slate-100/70 px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 transition focus:border-[#10B981] focus:bg-white focus:outline-hidden"
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            disabled={numericNominal <= 0}
            onClick={onClose}
            className={`w-full rounded-2xl py-3.5 text-sm font-bold transition ${
              numericNominal > 0
                ? "bg-[#10B981] text-white shadow-md hover:bg-[#0e9f6e] cursor-pointer"
                : "bg-slate-200 text-white cursor-not-allowed"
            }`}
          >
            Lanjut Topup Rp{numericNominal.toLocaleString("id-ID")}
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. TAMPILAN SISWA DETAIL (HEADER & TAB GABUNG)
// ==========================================
export function SiswaDetailView({
  onBack,
  onOpenTopUp,
}: {
  onBack?: () => void;
  onOpenTopUp?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    "uang-saku" | "spp" | "presensi" | "profil"
  >("uang-saku");

  const [showSaldo, setShowSaldo] = useState(false);
  const [isSppSelected, setIsSppSelected] = useState(true);

  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC] text-slate-800 pb-12 -mx-4 -my-4 px-4 py-4">
      {/* HEADER UTAMA TERPADU (Profil + 4 Tab Navigasi Menyatu & Sticky) */}
      <div className="sticky -top-4 z-20 bg-white border-b border-slate-100 -mx-4 px-4 pt-3 pb-2 shadow-2xs">
        <div className="flex items-center gap-3 pb-3">
          <button
            type="button"
            onClick={onBack}
            className="p-1 text-slate-700 hover:text-slate-900 transition cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 overflow-hidden rounded-full shadow-xs">
              <Image
                src="/images/foto.jpeg"
                alt="Foto Ananta Firdaus"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#1E1B4B] leading-tight">
                Ananta Firdaus
              </h1>
              <p className="text-[11px] text-slate-400">SMP N RND 1 PKU</p>
            </div>
          </div>
        </div>

        {/* 4 Ikon Tab Navigasi */}
        <div className="grid grid-cols-4 gap-1 pt-1">
          {(
            [
              { id: "uang-saku", icon: DollarSign, label: "Uang Saku" },
              { id: "spp", icon: FileText, label: "SPP/Tagihan" },
              { id: "presensi", icon: CheckCircle2, label: "Presensi" },
              { id: "profil", icon: User, label: "Profil" },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="flex flex-col items-center justify-center gap-1 relative py-1 cursor-pointer"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? "bg-[#E8F8F5] text-[#008A83]"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <Icon className="h-4 w-4 stroke-[2]" />
                </div>
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#008A83] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: UANG SAKU */}
      {activeTab === "uang-saku" && (
        <div className="mt-4 space-y-5 animate-in fade-in duration-200">
          <h2 className="text-base font-bold text-[#1E1B4B]">Uang Saku</h2>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00A896] via-[#10B981] to-[#4ADE80] p-5 text-white shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <DollarSign className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-xs font-semibold text-white/90">
                  Saldo Uang Saku
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowSaldo(!showSaldo)}
                className="text-white/80 hover:text-white transition cursor-pointer"
              >
                {showSaldo ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-3">
              <p className="text-2xl font-bold tracking-wide text-white">
                {showSaldo ? "Rp 17.000" : "Rp●●●●●●"}
              </p>
              <p className="mt-1 text-[11px] text-white/80">
                Hari ini Rp 0 / limit Rp 0
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={onOpenTopUp}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-white/10 py-2 text-xs font-semibold text-white backdrop-blur-xs hover:bg-white/20 transition cursor-pointer"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                Isi uang saku
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-white/10 py-2 text-xs font-semibold text-white backdrop-blur-xs hover:bg-white/20 transition cursor-pointer"
              >
                <Settings2 className="h-3.5 w-3.5" />
                Set limit harian
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <h3 className="text-sm font-bold text-[#1E1B4B]">
              Riwayat Uang Saku
            </h3>

            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white border border-slate-100 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs flex justify-between items-center">
                <span>September</span>
                <span className="text-slate-400 text-[10px]">▼</span>
              </div>
              <div className="flex-1 bg-white border border-slate-100 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs flex justify-between items-center">
                <span>2026</span>
                <span className="text-slate-400 text-[10px]">▼</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-3 space-y-4 shadow-xs">
              {[
                {
                  id: 1,
                  title: "Admin topup di host",
                  date: "24 September 2026 (09:23)",
                  amount: "-Rp 2,000",
                  balance: "Rp 17,000",
                  type: "out",
                },
                {
                  id: 2,
                  title: "Topup Saldo",
                  date: "24 September 2026 (09:23)",
                  amount: "+Rp 10,000",
                  balance: "Rp 19,000",
                  type: "in",
                },
                {
                  id: 3,
                  title: "Topup Saldo",
                  date: "11 September 2026 (23:39)",
                  amount: "+Rp 10,000",
                  balance: "Rp 9,000",
                  type: "in",
                },
                {
                  id: 4,
                  title: "Admin topup di host",
                  date: "11 September 2026 (23:39)",
                  amount: "-Rp 1,000",
                  balance: "Rp -1,000",
                  type: "out",
                },
              ].map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-none last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        tx.type === "in"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {tx.type === "in" ? (
                        <ArrowDown className="h-4 w-4" />
                      ) : (
                        <ArrowUp className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1E1B4B]">
                        {tx.title}
                      </p>
                      <p className="text-[10px] text-slate-400">{tx.date}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p
                      className={`text-xs font-bold ${
                        tx.type === "in" ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {tx.amount}
                    </p>
                    <p className="text-[10px] text-slate-400">{tx.balance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SPP / TAGIHAN */}
      {activeTab === "spp" && (
        <div className="mt-4 space-y-5 animate-in fade-in duration-200">
          <h2 className="text-base font-bold text-[#1E1B4B]">SPP/Tagihan</h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 p-3.5 text-white shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/20 mb-3">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <p className="text-[10px] font-medium text-white/90">
                Total Tagihan Umum
              </p>
              <p className="mt-0.5 text-base font-bold">Rp0</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#00A896] to-[#10B981] p-3.5 text-white shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/20 mb-3">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <p className="text-[10px] font-medium text-white/90">
                Total Tagihan Bulanan
              </p>
              <p className="mt-0.5 text-base font-bold">Rp30.000.000</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                <span className="text-xs font-bold text-[#1E1B4B]">
                  Tagihan Bulanan
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsSppSelected(!isSppSelected)}
                className="flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 cursor-pointer"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>{isSppSelected ? "Batal pilih semua" : "Pilih semua"}</span>
              </button>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => setIsSppSelected(!isSppSelected)}
                  className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full transition cursor-pointer ${
                    isSppSelected
                      ? "bg-emerald-500 text-white"
                      : "border border-slate-300 bg-white"
                  }`}
                >
                  {isSppSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                </button>
                <div>
                  <p className="text-xs font-bold text-[#1E1B4B]">
                    SPP PCR - September 2025
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-red-500">
                    Belum dibayar
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold text-[#1E1B4B]">Rp30.000.000</p>
            </div>
          </div>

          <div className="pt-4">
            <div className="bg-white rounded-2xl border border-slate-100 p-3 shadow-md flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">1 tagihan dipilih</p>
                <p className="text-sm font-bold text-[#1E1B4B]">
                  {isSppSelected ? "Rp30.000.000" : "Rp0"}
                </p>
              </div>
              <button
                type="button"
                disabled={!isSppSelected}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold text-white transition ${
                  isSppSelected
                    ? "bg-[#10B981] hover:bg-[#0e9f6e] shadow-xs cursor-pointer"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRESENSI */}
      {activeTab === "presensi" && (
        <div className="mt-4 space-y-5 animate-in fade-in duration-200">
          <div>
            <h2 className="text-base font-bold text-[#1E1B4B]">Ananta Firdaus</h2>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
              Presensi anak menurut hari masuk sekolah institusi, dari catatan yang
              tersimpan di perangkat ini
            </p>
          </div>

          <div className="flex items-center justify-between bg-white border border-slate-100 rounded-2xl px-4 py-2.5 shadow-xs">
            <button type="button" className="text-slate-400 hover:text-slate-600">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs font-bold text-[#1E1B4B]">
              September 2026
            </span>
            <button type="button" className="text-slate-400 hover:text-slate-600">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1E1B4B]">
                Kehadiran bulan ini
              </h3>
              <span className="text-[11px] text-slate-400">25 hari sekolah</span>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-[#10B981]">0%</p>
              <p className="text-[11px] text-slate-400 font-medium">
                total kehadiran
              </p>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Hadir + terlambat dihitung masuk, dari seluruh hari sekolah yang
              sudah lewat. Hari yang absennya tidak pernah diisi terhitung Alfa.
            </p>

            <p className="text-[11px] font-semibold text-amber-500">
              Hari ini belum ada catatan absennya.
            </p>

            <div className="grid grid-cols-4 gap-1.5 pt-1">
              <div className="bg-emerald-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-emerald-600">0 Hadir</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-amber-600">0 Terlambat</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-indigo-600">1 Izin/Sakit</p>
              </div>
              <div className="bg-red-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-red-500">5 Alfa</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1E1B4B]">
                Kehadiran mata pelajaran
              </h3>
              <span className="text-[11px] text-slate-400">0/0 sesi</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Jadwal mata pelajaran kelasnya belum terbaca. Sesi yang sudah lewat
              tanpa catatan terhitung Alfa.
            </p>

            <div className="grid grid-cols-4 gap-1.5">
              <div className="bg-emerald-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-emerald-600">0 Hadir</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-amber-600">0 Terlambat</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-indigo-600">0 Izin/Sakit</p>
              </div>
              <div className="bg-red-50 rounded-xl p-2 text-center">
                <p className="text-xs font-bold text-red-500">0 Alfa</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1E1B4B]">
                Kalender presensi
              </h3>
              <span className="text-[11px] text-red-400 font-medium flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-400" /> Libur sekolah
              </span>
            </div>

            <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-slate-400">
              <span>Sen</span>
              <span>Sel</span>
              <span>Rab</span>
              <span>Kam</span>
              <span>Jum</span>
              <span>Sab</span>
              <span>Min</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px]">
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                let bgClass = "bg-slate-50 border border-slate-100 text-slate-500";
                let statusText = "belum";

                if (day === 22) {
                  bgClass = "bg-indigo-100 text-indigo-700 font-bold";
                  statusText = "izin";
                } else if ([23, 24, 25, 26, 28].includes(day)) {
                  bgClass = "bg-red-100 text-red-600 font-bold";
                  statusText = "alfa";
                } else if (day === 29) {
                  bgClass = "border-2 border-slate-800 font-bold text-slate-800";
                  statusText = "hari ini";
                }

                return (
                  <div
                    key={day}
                    className={`rounded-xl py-2 flex flex-col items-center justify-center ${bgClass}`}
                  >
                    <span className="text-xs font-semibold">{day}</span>
                    <span className="scale-85 text-[9px] mt-0.5">{statusText}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1E1B4B]">
                Riwayat absen masuk/pulang (25 hari)
              </h3>
              <button
                type="button"
                className="flex items-center gap-1 text-[11px] text-slate-500 font-medium cursor-pointer"
              >
                <SlidersHorizontal className="h-3 w-3" />
                Terbaru dulu
              </button>
            </div>

            <div className="space-y-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-3 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-slate-100 text-[#1E1B4B]">
                    <span className="text-xs font-bold leading-none">29</span>
                    <span className="text-[9px] text-slate-400">Sel</span>
                  </div>
                  <div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      Belum mengisi
                    </span>
                    <p className="mt-1 text-xs text-slate-500">
                      Masuk - Jarak absen tidak tercatat
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-3 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-slate-100 text-[#1E1B4B]">
                    <span className="text-xs font-bold leading-none">28</span>
                    <span className="text-[9px] text-slate-400">Sen</span>
                  </div>
                  <div>
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                      Alfa
                    </span>
                    <p className="mt-1 text-xs text-slate-500">
                      Masuk - Jarak absen tidak tercatat
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PROFIL */}
      {activeTab === "profil" && (
        <div className="mt-4 space-y-4 animate-in fade-in duration-200">
          <h2 className="text-base font-bold text-[#1E1B4B]">Profil Siswa</h2>
          <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3 shadow-xs">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/images/foto.jpeg"
                  alt="Foto Ananta Firdaus"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1E1B4B]">
                  Ananta Firdaus
                </h3>
                <p className="text-xs text-slate-400">NISN: 2355301016</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Sekolah</span>
                <span className="font-semibold text-slate-700">
                  SMP N RND 1 PKU
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Kelas</span>
                <span className="font-semibold text-slate-700">VIII-A</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Status Akun</span>
                <span className="font-semibold text-emerald-600">Aktif</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 3. TAMPILAN TRANSFER UANG SAKU
// ==========================================
export function TransferUangSakuView({ onBack }: { onBack?: () => void }) {
  const [selectedChild, setSelectedChild] = useState<string>("af");
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [nominalInput, setNominalInput] = useState<string>("");

  const presets = ["Rp10.000", "Rp25.000", "Rp50.000", "Rp100.000"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setNominalInput(val);
    setSelectedPreset("");
  };

  const isFormValid = (selectedPreset || nominalInput) && selectedChild;

  return (
    <div className="flex flex-col justify-between min-h-full bg-[#F8FAFC] text-slate-800 pb-4">
      <div>
        <div className="relative flex items-center justify-center py-2">
          <button
            type="button"
            onClick={onBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-slate-700 hover:text-slate-900 transition cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-[#1E1B4B]">
            Transfer Uang Saku
          </h1>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold text-[#1E1B4B]">Pilih Anak</h2>

          <button
            type="button"
            onClick={() => setSelectedChild("af")}
            className={`flex w-full items-center justify-between rounded-2xl border bg-white p-4 text-left transition cursor-pointer ${
              selectedChild === "af"
                ? "border-emerald-500 shadow-xs"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981] text-sm font-bold text-white">
                AF
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">
                  Ananta Firdaus
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  SMP N RND 1 PKU
                </p>
              </div>
            </div>

            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border transition ${
                selectedChild === "af"
                  ? "border-[#10B981] bg-[#10B981]"
                  : "border-slate-300 bg-white"
              }`}
            >
              {selectedChild === "af" && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-bold text-[#1E1B4B]">Jumlah Transfer</h2>

          <div className="grid grid-cols-4 gap-2">
            {presets.map((preset) => {
              const isActive = selectedPreset === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setSelectedPreset(preset);
                    setNominalInput("");
                  }}
                  className={`rounded-xl border py-3 text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? "border-[#10B981] bg-emerald-50/40 text-[#10B981]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {preset}
                </button>
              );
            })}
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Masukkan nominal transfer"
              value={
                nominalInput
                  ? `Rp ${parseInt(nominalInput, 10).toLocaleString("id-ID")}`
                  : ""
              }
              onChange={handleInputChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-100/70 px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 transition focus:border-[#10B981] focus:bg-white focus:outline-hidden"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4">
        <button
          type="button"
          disabled={!isFormValid}
          className={`w-full rounded-2xl py-3.5 text-sm font-bold transition ${
            isFormValid
              ? "bg-[#10B981] text-white shadow-md hover:bg-[#0e9f6e] cursor-pointer"
              : "bg-slate-200 text-white cursor-not-allowed"
          }`}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 4. TAMPILAN NOTIFIKASI
// ==========================================
export function NotifikasiView() {
  return (
    <div className="bg-[#F8FAFC] text-slate-800">
      <div className="flex items-center justify-between py-2">
        <h1 className="text-xl font-bold text-[#1E1B4B]">Notifikasi</h1>
        <button
          aria-label="Hapus notifikasi"
          className="text-red-400 transition hover:text-red-500 cursor-pointer"
        >
          <Trash2 className="h-5 w-5 stroke-[1.75]" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center pt-32 pb-20">
        <BellOff className="h-20 w-20 text-slate-300 stroke-[1.25]" />
        <p className="mt-4 text-sm font-bold text-[#1E1B4B]">
          Tidak ada notifikasi
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 5. TAMPILAN RIWAYAT TRANSAKSI
// ==========================================
export function RiwayatView() {
  return (
    <div className="bg-[#F8FAFC] text-slate-800">
      <div className="py-2">
        <h1 className="text-xl font-bold text-[#1E1B4B]">Riwayat Transaksi</h1>
        <p className="mt-0.5 text-xs text-slate-400">
          Semua aktivitas keuangan akun kamu
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center gap-2.5 rounded-2xl border border-[#D1F2EB] bg-white p-3 shadow-xs">
          <Calendar className="h-5 w-5 text-[#008A83]" />
          <div>
            <p className="text-[10px] text-slate-400">Dari</p>
            <p className="text-xs font-bold text-[#1E1B4B]">01/09/2026</p>
          </div>
        </div>

        <ArrowRight className="h-4 w-4 shrink-0 text-[#008A83]" />

        <div className="flex flex-1 items-center gap-2.5 rounded-2xl border border-[#D1F2EB] bg-white p-3 shadow-xs">
          <Calendar className="h-5 w-5 text-[#008A83]" />
          <div>
            <p className="text-[10px] text-slate-400">Hingga</p>
            <p className="text-xs font-bold text-[#1E1B4B]">29/09/2026</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-28 pb-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300">
          <Clock className="h-8 w-8 stroke-[1.5]" />
        </div>
        <p className="mt-4 text-sm font-bold text-[#1E1B4B]">
          Belum ada transaksi
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 6. TAMPILAN SETTING / PROFIL
// ==========================================
export type SettingSubView =
  | "edit-profil"
  | "ubah-pin"
  | "ganti-password"
  | "pusat-bantuan"
  | "kebijakan-privasi"
  | "tentang-aplikasi";

interface SettingViewProps {
  onOpen?: (view: SettingSubView) => void;
}

export function SettingView({ onOpen }: SettingViewProps) {
  return (
    <div className="bg-[#F8FAFC] text-slate-800">
      <h1 className="py-2 text-xl font-bold text-[#1E1B4B]">Setting</h1>

      <div className="mt-2 overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B4C7E] via-[#008A83] to-[#34D399] p-5 text-white shadow-xs">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-xs">
            <Image
              src="/images/foto.jpeg"
              alt="Foto profil"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">Firdaus</h2>
            <p className="text-xs text-white/80">6282170659282</p>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
              <CheckCircle2 className="h-3 w-3 fill-white text-[#008A83]" />
              <span>Akun Aktif</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="px-1 text-xs font-bold text-slate-400">Akun</h3>
        <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs">
          <button
            type="button"
            onClick={() => onOpen?.("edit-profil")}
            className="flex w-full items-center justify-between p-3.5 text-left transition hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#008A83]">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">Edit Profil</p>
                <p className="text-[11px] text-slate-400">
                  Perbarui informasi pribadi kamu
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </button>

          <button
            type="button"
            onClick={() => onOpen?.("ubah-pin")}
            className="flex w-full items-center justify-between p-3.5 text-left transition hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">
                  Ubah PIN Transaksi
                </p>
                <p className="text-[11px] text-slate-400">
                  Ganti PIN untuk pembayaran
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </button>

          <button
            type="button"
            onClick={() => onOpen?.("ganti-password")}
            className="flex w-full items-center justify-between p-3.5 text-left transition hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#D97706]">
                <KeyRound className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">Ganti Password</p>
                <p className="text-[11px] text-slate-400">Ganti password akun</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="px-1 text-xs font-bold text-slate-400">Informasi</h3>
        <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs">
          <button
            type="button"
            onClick={() => onOpen?.("pusat-bantuan")}
            className="flex w-full items-center justify-between p-3.5 text-left transition hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#008A83]">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">Pusat Bantuan</p>
                <p className="text-[11px] text-slate-400">
                  Hubungi customer service
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </button>

          <button
            type="button"
            onClick={() => onOpen?.("kebijakan-privasi")}
            className="flex w-full items-center justify-between p-3.5 text-left transition hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">
                  Kebijakan Privasi
                </p>
                <p className="text-[11px] text-slate-400">
                  Cara kami menjaga data kamu
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </button>

          <button
            type="button"
            onClick={() => onOpen?.("tentang-aplikasi")}
            className="flex w-full items-center justify-between p-3.5 text-left transition hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#D97706]">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">
                  Tentang Aplikasi
                </p>
                <p className="text-[11px] text-slate-400">
                  Versi aplikasi dan informasi lainnya
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">2026.09.25</span>
              <ChevronRight className="h-4 w-4 text-slate-300" />
            </div>
          </button>
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-[#FFF5F5] py-3.5 text-sm font-bold text-red-500 transition hover:bg-red-100/50 cursor-pointer">
        <LogOut className="h-4 w-4" />
        Keluar
      </button>
    </div>
  );
}

// ==========================================
// 6a. SUB-HALAMAN SETTING
// ==========================================
function SettingSubHeader({
  title,
  onBack,
}: {
  title: string;
  onBack?: () => void;
}) {
  return (
    <div className="relative flex items-center justify-center py-2">
      <button
        type="button"
        onClick={onBack}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-slate-700 hover:text-slate-900 transition cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <h1 className="text-lg font-semibold text-[#1E1B4B]">{title}</h1>
    </div>
  );
}

const settingInputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#008A83] focus:ring-2 focus:ring-[#008A83]/15";

const settingPrimaryClass =
  "w-full rounded-2xl bg-gradient-to-r from-[#2B4C7E] via-[#008A83] to-[#34D399] py-3.5 text-sm font-bold text-white shadow-xs transition hover:opacity-90 cursor-pointer";

// 1. EDIT PROFIL VIEW
export function EditProfilView({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-full bg-[#F8FAFC] pb-6 text-slate-800 px-4 pt-2">
      <SettingSubHeader title="Edit Profil" onBack={onBack} />

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="relative">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md bg-slate-200">
            <Image
              src="/images/foto.jpeg"
              alt="Foto profil"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <button
            type="button"
            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981] text-white shadow-md hover:bg-[#0e9f6e] transition cursor-pointer"
          >
            <Camera className="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          className="mt-1 text-xs font-bold text-[#10B981] hover:underline cursor-pointer"
        >
          Ubah Foto Profil
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1E1B4B]">Nama Lengkap</label>
          <div className="relative flex items-center">
            <User className="absolute left-4 h-4 w-4 text-slate-400" />
            <input
              type="text"
              defaultValue="Firdaus"
              className={`${settingInputClass} pl-11`}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1E1B4B]">Nomor Handphone</label>
          <div className="relative flex items-center">
            <Phone className="absolute left-4 h-4 w-4 text-slate-400" />
            <input
              type="tel"
              defaultValue="6282170659282"
              className={`${settingInputClass} pl-11`}
            />
          </div>
        </div>
      </div>

      <button type="button" className={`${settingPrimaryClass} mt-8`}>
        Simpan
      </button>
    </div>
  );
}

// 2. UBAH PIN TRANSAKSI VIEW
export function UbahPinView({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-full bg-[#F8FAFC] pb-6 text-slate-800 px-4 pt-2">
      <SettingSubHeader title="Ubah PIN Transaksi" onBack={onBack} />

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-xs">
          <Lock className="h-5 w-5" />
        </div>
        <p className="text-[11px] leading-relaxed text-slate-600">
          PIN transaksi digunakan untuk memverifikasi setiap transaksi pembayaran dan transfer.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1E1B4B]">PIN Saat Ini</label>
          <input
            type="password"
            placeholder="••••••"
            maxLength={6}
            className={settingInputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1E1B4B]">PIN Baru</label>
          <input
            type="password"
            placeholder="••••••"
            maxLength={6}
            className={settingInputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#1E1B4B]">Konfirmasi PIN Baru</label>
          <input
            type="password"
            placeholder="••••••"
            maxLength={6}
            className={settingInputClass}
          />
        </div>
      </div>

      <button type="button" className={`${settingPrimaryClass} mt-8`}>
        Simpan
      </button>

      <div className="mt-6 text-center">
        <button
          type="button"
          className="text-xs font-bold text-[#10B981] hover:underline cursor-pointer"
        >
          Lupa PIN? Klik disini
        </button>
      </div>
    </div>
  );
}

// 3. GANTI PASSWORD VIEW
export function GantiPasswordView({ onBack }: { onBack?: () => void }) {
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);

  const fields = [
    { label: "Password Saat Ini", placeholder: "••••••••" },
    { label: "Password Baru", placeholder: "••••••••" },
    { label: "Konfirmasi Password Baru", placeholder: "••••••••" },
  ];

  const toggle = (index: number) =>
    setVisible((prev) => prev.map((v, i) => (i === index ? !v : v)));

  return (
    <div className="min-h-full bg-[#F8FAFC] pb-6 text-slate-800 px-4 pt-2">
      <SettingSubHeader title="Ganti Password" onBack={onBack} />

      <div className="mt-6 space-y-4">
        {fields.map((field, index) => (
          <div key={field.label} className="space-y-1.5">
            <label className="text-xs font-bold text-[#1E1B4B]">{field.label}</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 h-4 w-4 text-slate-400" />
              <input
                type={visible[index] ? "text" : "password"}
                placeholder={field.placeholder}
                className={`${settingInputClass} pl-11 pr-11`}
              />
              <button
                type="button"
                onClick={() => toggle(index)}
                className="absolute right-4 text-slate-400 hover:text-slate-600 transition cursor-pointer"
              >
                {visible[index] ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-2 text-[11px] text-slate-400">Password minimal 6 karakter</p>

      <button type="button" className={`${settingPrimaryClass} mt-8`}>
        Simpan Password Baru
      </button>
    </div>
  );
}

// 4. PUSAT BANTUAN VIEW
export function PusatBantuanView({ onBack }: { onBack?: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Informasi apa yang perlu disampaikan saat menghubungi Customer Support?",
      a: "Silakan sampaikan nama orang tua, nama anak, nomor HP yang terdaftar, dan kendala yang dialami. Untuk kendala pembayaran, mohon lampirkan juga bukti pembayaran.",
    },
    {
      q: "Apa yang harus dilakukan jika metode pembayaran sedang maintenance?",
      a: "Gunakan kanal pembayaran alternatif yang tersedia di aplikasi atau coba beberapa saat lagi.",
    },
    {
      q: "Bagaimana jika kartu anak tidak dapat digunakan?",
      a: "Pastikan kartu tidak rusak atau hubungi pihak sekolah melalui pusat bantuan untuk sinkronisasi ulang.",
    },
    {
      q: "Bagaimana cara transfer saldo dari dompet orang tua ke saldo anak?",
      a: "Pilih menu Transfer Uang Saku, tentukan anak dan nominal, lalu konfirmasi dengan PIN transaksi.",
    },
    {
      q: "Kenapa data anak saya tidak muncul di aplikasi?",
      a: "Pastikan NISN atau nomor handphone yang terdaftar sudah sesuai dengan data di sekolah.",
    },
    {
      q: "Saldo QRION belum masuk, padahal saldo bank sudah terpotong. Bagaimana?",
      a: "Tunggu hingga 1x24 jam atau hubungi Admin dengan melampirkan bukti transaksi bank.",
    },
    {
      q: "Saya lupa kata sandi. Apa yang harus dilakukan?",
      a: "Gunakan fitur pemulihan kata sandi di halaman login atau hubungi admin untuk bantuan reset akun.",
    },
  ];

  return (
    <div className="min-h-full bg-[#F8FAFC] pb-6 text-slate-800 px-4 pt-2">
      <SettingSubHeader title="Pusat Bantuan" onBack={onBack} />

      <div className="mt-5 space-y-2">
        <h3 className="px-1 text-xs font-bold text-[#1E1B4B]">Hubungi Kami</h3>
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-xs transition hover:bg-slate-50 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-400">Whatsapp</p>
              <p className="text-xs font-bold text-[#1E1B4B]">Admin Hawari</p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-300" />
        </button>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="px-1 text-xs font-bold text-[#1E1B4B]">Pertanyaan yang Sering Diajukan</h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left transition hover:bg-slate-50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-[#10B981]">
                    {index + 1}
                  </div>
                  <span className="text-xs font-bold text-[#1E1B4B]">{faq.q}</span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                    openFaq === index ? "rotate-90 text-[#10B981]" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <p className="px-4 pb-4 pt-1 text-[11px] leading-relaxed text-slate-500 border-t border-slate-50">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. KEBIJAKAN PRIVASI VIEW
export function KebijakanPrivasiView({ onBack }: { onBack?: () => void }) {
  const sections = [
    {
      title: "1. Pengumpulan Data",
      body: "Kami mengumpulkan data pribadi yang kamu berikan saat mendaftar dan menggunakan aplikasi, seperti nama, nomor handphone, email, serta data transaksi dan keuangan yang tercatat pada aplikasi QRION.",
    },
    {
      title: "2. Penggunaan Data",
      body: "Data yang kami kumpulkan digunakan untuk mengelola layanan, memproses transaksi, memberikan notifikasi, serta meningkatkan kualitas dan keamanan aplikasi.",
    },
    {
      title: "3. Perlindungan Data",
      body: "Kami melindungi data kamu dengan sistem keamanan berlapis, enkripsi data, dan pembatasan akses. Kami tidak akan membagikan data pribadi kamu kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.",
    },
    {
      title: "4. Hak Pengguna",
      body: "Kamu berhak mengakses, memperbaiki, dan menghapus data pribadi kamu melalui menu pengaturan akun. Kamu juga dapat meminta penjelasan mengenai pengolahan data kepada customer service kami.",
    },
    {
      title: "5. perubahan kebijakan",
      body: "kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Setiap perubahan akan diinformasikan melalui aplikasi dan/atau email. Kami menyarankan untuk secara berkala meninjau kebijakan privasi ini agar tetap mengetahui bagaimana data kamu dikelola.",
    },
    {
      title: "6. kontak",
      body: "apabila kamu ada pertanyaan atau kekhawatiran mengenai kebijakan privasi ini, silakan hubungi customer service kami melalui menu pusat bantuan di aplikasi.",
    },
  ];

  return (
    <div className="min-h-full bg-[#F8FAFC] pb-6 text-slate-800 px-4 pt-2">
      <SettingSubHeader title="Kebijakan Privasi" onBack={onBack} />

      <div className="mt-3">
        <h2 className="text-base font-bold text-[#1E1B4B]">Kebijakan Privasi</h2>
        <p className="mt-0.5 text-[11px] text-slate-400">Terakhir diperbarui: 1 Agustus 2026</p>
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          Selamat datang di QRION. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi kamu saat menggunakan aplikasi QRION.
        </p>
      </div>

      <div className="mt-4 space-y-4">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs"
          >
            <h3 className="text-xs font-bold text-[#1E1B4B]">{section.title}</h3>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 6. TENTANG APLIKASI VIEW
export function TentangAplikasiView({ onBack }: { onBack?: () => void }) {
  const infos = [
    { label: "Pengembang", value: "PT QRION Teknologi Pendidikan", icon: QrCode },
    { label: "Email", value: "support@qrion.id", icon: Mail },
    { label: "Website", value: "www.qrion.id", icon: Headphones },
    { label: "Lisensi", value: "Hak cipta © 2026 QRION", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-full bg-[#F8FAFC] pb-6 text-slate-800 px-4 pt-2">
      <SettingSubHeader title="Tentang Aplikasi" onBack={onBack} />

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#2B4C7E] via-[#008A83] to-[#34D399] text-white shadow-lg">
          <QrCode className="h-9 w-9" />
        </div>
        <p className="mt-2 text-lg font-bold text-[#1E1B4B]">QRION Mobile</p>
        <span className="text-xs text-slate-400">Versi 2026.09.25</span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
        <p className="text-xs leading-relaxed text-slate-600 text-center">
          Kelola Pendidikan, Wujudkan Masa Depan. QRION membantu orang tua dan guru mengelola uang saku, pembayaran tagihan, transfer, donasi, hingga presensi dalam satu aplikasi yang aman dan mudah digunakan.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {infos.map((info) => (
          <div
            key={info.label}
            className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-xs"
          >
            <span className="text-xs text-slate-400">{info.label}</span>
            <span className="text-xs font-bold text-[#1E1B4B]">{info.value}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[11px] text-slate-400">
        © 2026 PT QRION Teknologi Pendidikan. Semua hak dilindungi.
      </p>
    </div>
  );
}
// ==========================================
// 1. DONASI & DETAIL DONASI
// ==========================================
interface DonasiItem {
  id: string;
  image: string;
  timeLeft: string;
  institution: string;
  scope: string;
  scopeColor: string;
  title: string;
  description: string;
  collected: number;
  target: number;
  startDate: string;
  endDate: string;
  donatorsList: { name: string; initial: string; amount: string }[];
}

export function DonasiView({ onBack }: { onBack?: () => void }) {
  const [selectedDonasi, setSelectedDonasi] = useState<DonasiItem | null>(null);

  const donasiList: DonasiItem[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=600",
      timeLeft: "3 hari 02:56:55",
      institution: "SMA Negeri 1 Jakarta",
      scope: "Publik",
      scopeColor: "bg-[#EEF2FF] text-[#4F46E5]",
      title: "Bantu Biaya Operasional Panti Asuhan",
      description:
        "Bantu panti asuhan memenuhi kebutuhan sehari-hari anak-anak asuh.",
      collected: 18300000,
      target: 25000000,
      startDate: "24 September 2026",
      endDate: "2 Oktober 2026",
      donatorsList: [
        { name: "Andi", initial: "A", amount: "Rp500.000" },
        { name: "Budi", initial: "B", amount: "Rp250.000" },
        { name: "Citra", initial: "C", amount: "Rp100.000" },
      ],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600",
      timeLeft: "19 hari 22:56:55",
      institution: "SMP Negeri 2 Bandung",
      scope: "Lokal",
      scopeColor: "bg-[#E8F8F5] text-[#008A83]",
      title: "Renovasi Ruang Belajar Sekolah",
      description:
        "Dukung renovasi ruang belajar agar siswa lebih nyaman belajar.",
      collected: 17500000,
      target: 50000000,
      startDate: "10 September 2026",
      endDate: "18 Oktober 2026",
      donatorsList: [
        { name: "Dewi", initial: "D", amount: "Rp1.000.000" },
        { name: "Eko", initial: "E", amount: "Rp500.000" },
      ],
    },
  ];

  // JIKA KARTU DONASI DIKLIK (HALAMAN DETAIL DONASI)
  if (selectedDonasi) {
    const percentage = Math.min(
      100,
      Math.round((selectedDonasi.collected / selectedDonasi.target) * 100)
    );

    return (
      <div className="bg-[#F8FAFC] text-slate-800 pb-12">
        <SettingSubHeader title="Detail Donasi" onBack={() => setSelectedDonasi(null)} />

        <div className="mt-3 space-y-4">
          <div className="relative h-44 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xs">
            <img
              src={selectedDonasi.image}
              alt={selectedDonasi.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5]">
              <Building2 className="h-4 w-4" />
              <span>{selectedDonasi.institution}</span>
            </div>
            <span
              className={`rounded-full px-3 py-0.5 text-[10px] font-bold ${selectedDonasi.scopeColor}`}
            >
              {selectedDonasi.scope}
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1E1B4B] leading-snug">
              {selectedDonasi.title}
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              {selectedDonasi.description}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-4 space-y-3 shadow-xs">
            <div className="flex justify-between text-xs font-semibold text-slate-400">
              <span>Terkumpul</span>
              <span>Target Rp{selectedDonasi.target.toLocaleString("id-ID")}</span>
            </div>

            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#10B981] transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <p className="text-sm font-bold text-[#10B981]">
              Rp{selectedDonasi.collected.toLocaleString("id-ID")}{" "}
              <span className="font-normal text-slate-400 text-xs">
                dari Rp{selectedDonasi.target.toLocaleString("id-ID")}
              </span>
            </p>

            <div className="space-y-1.5 pt-2 border-t border-slate-50 text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-[#10B981]" />
                <span>Dibuat {selectedDonasi.startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-red-400" />
                <span>Selesai {selectedDonasi.endDate}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <h3 className="text-sm font-bold text-[#1E1B4B]">Donatur</h3>
              <p className="text-[11px] text-slate-400">
                {selectedDonasi.donatorsList.length} orang telah berdonasi
              </p>
            </div>

            <div className="space-y-2">
              {selectedDonasi.donatorsList.map((donor, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#312E81] text-xs font-bold text-white shadow-xs">
                      {donor.initial}
                    </div>
                    <span className="text-xs font-bold text-[#1E1B4B]">
                      {donor.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#10B981]">
                    {donor.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="w-full rounded-2xl bg-[#10B981] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0e9f6e] transition cursor-pointer"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  }

  // TAMPILAN UTAMA DAFTAR DONASI
  return (
    <div className="bg-[#F8FAFC] text-slate-800 pb-6">
      <SettingSubHeader title="Donasi" onBack={onBack} />

      <div className="mt-4 space-y-5">
        {donasiList.map((item) => {
          const percentage = Math.min(
            100,
            Math.round((item.collected / item.target) * 100)
          );

          return (
            <div
              key={item.id}
              onClick={() => setSelectedDonasi(item)}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xs transition hover:shadow-md cursor-pointer"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-amber-500/95 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-xs shadow-xs">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{item.timeLeft}</span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5]">
                    <Building2 className="h-4 w-4" />
                    <span>{item.institution}</span>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${item.scopeColor}`}
                  >
                    {item.scope}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1E1B4B] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] font-medium text-slate-400">
                    <span>Terkumpul</span>
                    <span>Target Rp{item.target.toLocaleString("id-ID")}</span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#10B981] transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <p className="text-xs font-bold text-[#10B981]">
                    Rp{item.collected.toLocaleString("id-ID")}{" "}
                    <span className="font-normal text-slate-400">
                      dari Rp{item.target.toLocaleString("id-ID")}
                    </span>
                  </p>

                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-slate-400">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <div className="flex items-center -space-x-1.5">
                    {item.donatorsList.map((donor, idx) => (
                      <div
                        key={idx}
                        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#312E81] text-[10px] font-bold text-white"
                      >
                        {donor.initial}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#1E1B4B]">
                    {item.donatorsList.length} donatur
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 2. BERITA & DETAIL BERITA
// ==========================================
interface BeritaItem {
  id: string;
  image: string;
  date: string;
  title: string;
  content: string[];
}

export function BeritaView({ onBack }: { onBack?: () => void }) {
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null);

  const beritaList: BeritaItem[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=600",
      date: "Minggu, 13 September 2026",
      title: "Yayasan Pondok Pesantren Modern I'aanatuth Thalibiin (AITI)",
      content: [
        "Pondok Pesantren Modern I'aanatuth Thalibiin (AITI) Resmi Migrasi ke QRION Versi 2",
        "Alhamdulillah, satu lagi mitra QRION telah menyelesaikan proses migrasi ke QRION Versi 2.",
        "Pondok Pesantren Modern I'aanatuth Thalibiin (AITI) kini telah resmi menggunakan QRION Versi 2 dengan berbagai pembaruan sistem dan peningkatan pengalaman bagi pengguna.",
        "Proses migrasi ini merupakan bagian dari langkah QRION untuk terus menghadirkan sistem yang lebih terintegrasi, sederhana, dan nyaman bagi sekolah, pengelola, guru, orang tua, dan santri.",
        "Terima kasih kepada seluruh keluarga besar Pondok Pesantren Modern I'aanatuth Thalibiin (AITI) atas kepercayaan, dukungan, dan kerja samanya selama proses migrasi.",
        "Selamat datang di QRION Versi 2, AITI. Semoga pembaruan ini dapat memberikan manfaat yang lebih besar dan mendukung pengelolaan pendidikan yang semakin baik.",
      ],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
      date: "Minggu, 13 September 2026",
      title: "Anak Tidak Harus Selalu Benar, Tapi Perlu Belajar Berpikir",
      content: [
        "Pendidikan anak di era modern menuntut pendekatan yang lebih interaktif dan terbuka.",
        "Anak-anak perlu diberikan ruang untuk mengeksplorasi pemikiran mereka sendiri dan belajar dari setiap kesalahan kecil yang mereka buat.",
      ],
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      date: "Minggu, 10 September 2026",
      title: "Sosialisasi Sistem Pendidikan Pondok Pesantren Al-Munawwarah Pekanbaru",
      content: [
        "Kegiatan sosialisasi sistem presensi dan keuangan digital sukses dilaksanakan pekan ini bersama para wali santri.",
      ],
    },
  ];

  // JIKA KARTU BERITA DIKLIK (HALAMAN DETAIL BERITA)
  if (selectedBerita) {
    return (
      <div className="bg-[#F8FAFC] text-slate-800 pb-12">
        <SettingSubHeader title="Detail Berita" onBack={() => setSelectedBerita(null)} />

        <div className="mt-3 space-y-4">
          <div className="relative h-44 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xs">
            <img
              src={selectedBerita.image}
              alt={selectedBerita.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
              <Calendar className="h-3.5 w-3.5" />
              <span>{selectedBerita.date}</span>
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B4B] leading-snug">
              {selectedBerita.title}
            </h2>

            <div className="space-y-3 pt-2 text-xs leading-relaxed text-slate-600">
              {selectedBerita.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TAMPILAN UTAMA DAFTAR BERITA
  return (
    <div className="bg-[#F8FAFC] text-slate-800 pb-6">
      <SettingSubHeader title="Berita" onBack={onBack} />

      <div className="mt-4 space-y-4">
        {beritaList.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedBerita(item)}
            className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xs transition hover:shadow-md cursor-pointer"
          >
            <div className="h-44 w-full bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                <Calendar className="h-3.5 w-3.5" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-base font-bold text-[#1E1B4B] leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}