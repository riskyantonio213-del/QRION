"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wallet,
  Eye,
  EyeOff,
  Clock,
  Plus,
  ArrowUpDown,
  CreditCard,
  Heart,
  FileText,
  ChevronRight,
  Home,
  Bell,
  Settings,
} from "lucide-react";

// --- TIPE DATA & INTERFACE ---
export type MobileTab = "home" | "notifikasi" | "riwayat" | "setting";
export type SubView =
  | "donasi"
  | "berita"
  | "transfer-uang-saku"
  | "siswa-detail"
  | "topup"
  | "edit-profil"
  | "ubah-pin"
  | "ganti-password"
  | "pusat-bantuan"
  | "kebijakan-privasi"
  | "tentang-aplikasi"
  | null;

// --- KOMPONEN BOTTOM TAB BAR ---
export function MobileTabBar({
  active,
  onSelect,
}: {
  active: MobileTab;
  onSelect: (tab: MobileTab) => void;
}) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "notifikasi", label: "Notifikasi", icon: Bell },
    { id: "riwayat", label: "Riwayat", icon: Clock },
    { id: "setting", label: "Setting", icon: Settings },
  ] as const;

  return (
    <div className="bg-white border-t border-slate-100 flex justify-around items-center px-2 py-3 z-30 pb-6 shrink-0">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab.id)}
            className="flex flex-col items-center gap-1.5 w-16 transition cursor-pointer"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isActive
                  ? "bg-[#E8F8F5] text-[#008A83]"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Icon className="h-5 w-5 stroke-[1.75]" />
            </div>
            <span
              className={`text-[10px] font-medium ${
                isActive ? "text-[#008A83]" : "text-slate-400"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// --- KOMPONEN MOBILE DASHBOARD ---
interface MobileDashboardProps {
  onOpenView?: (view: SubView) => void;
  onSelectTab?: (tab: MobileTab) => void;
  onBayar?: () => void;
}

export function MobileDashboard({
  onOpenView,
  onSelectTab,
  onBayar,
}: MobileDashboardProps) {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="relative font-sans text-slate-800 space-y-6">
      {/* Header Profile */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full shadow-xs">
          <Image
            src="/images/foto.jpeg"
            alt="Foto profil"
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-normal text-slate-500">
            Hai, Selamat siang
          </p>
          <h1 className="text-lg font-bold text-[#1E1B4B]">Firdaus</h1>
        </div>
      </div>

      {/* Saldo Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#008A83] via-[#00A896] to-[#4ADE80] p-5 text-white shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-white/90" />
            <span className="text-sm font-medium text-white/90">
              Saldo saya
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowBalance(!showBalance)}
            className="text-white/80 transition hover:text-white cursor-pointer"
          >
            {showBalance ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="mt-4">
          <p className="text-[10px] font-medium tracking-wider text-white/80 uppercase">
            TOTAL SALDO
          </p>
          <p className="mt-1 text-2xl font-bold tracking-wide text-white">
            {showBalance ? "Rp 1.500.000" : "Rp●●●●●●"}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onSelectTab?.("riwayat")}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/20 py-2 text-xs font-semibold text-white backdrop-blur-xs transition hover:bg-white/30 cursor-pointer"
          >
            <Clock className="h-4 w-4" />
            Riwayat
          </button>
          <button
            type="button"
            onClick={() => onOpenView?.("topup")}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/20 py-2 text-xs font-semibold text-white backdrop-blur-xs transition hover:bg-white/30 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            Top Up
          </button>
        </div>
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-4 gap-2 pt-2 text-center">
        {[
          { label: "Transfer", icon: ArrowUpDown, slug: "transfer-uang-saku" },
          { label: "Bayar", icon: CreditCard, slug: "bayar" },
          { label: "Donasi", icon: Heart, slug: "donasi" },
          { label: "Berita", icon: FileText, slug: "berita" },
        ].map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              type="button"
              onClick={() => {
                if (action.slug === "bayar") {
                  onBayar?.();
                } else {
                  onOpenView?.(action.slug as SubView);
                }
              }}
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F8F5] text-[#008A83] transition group-hover:bg-[#d2f3ed]">
                <Icon className="h-6 w-6 stroke-[1.75]" />
              </div>
              <span className="text-xs font-medium text-slate-700">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Siswa yang Terhubung */}
      <div className="space-y-3 pt-2">
        <h2 className="text-base font-bold text-[#1E1B4B]">
          Siswa yang terhubung
        </h2>

        <button
          type="button"
          onClick={() => onOpenView?.("siswa-detail")}
          className="w-full text-left rounded-2xl border border-slate-100 bg-white p-4 shadow-xs transition hover:shadow-md cursor-pointer"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
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
                <p className="mt-0.5 text-xs text-slate-400">
                  SMP N RND 1 PKU
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-[#008A83]" />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-[11px] text-slate-400">Saldo uang saku</p>
              <p className="mt-0.5 text-sm font-bold text-slate-800">
                Rp17.000
              </p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400">Tagihan</p>
              <p className="mt-0.5 text-sm font-bold text-slate-800">
                Rp30.000.000
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// --- KOMPONEN BAYAR SHEET ---
export function BayarSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-t-[32px] bg-white p-5 pb-8 shadow-2xl animate-in slide-in-from-bottom duration-300 z-10">
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-200" />
        <div>
          <h3 className="text-base font-bold text-[#1E1B4B]">Pilih Siswa</h3>
          <p className="mt-0.5 text-xs text-slate-400">
            Pilih siswa untuk membayar tagihan
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xs transition hover:border-[#10B981] hover:bg-slate-50/50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="/images/foto.jpeg"
                  alt="Foto Ananta Firdaus"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#1E1B4B]">
                  Ananta Firdaus
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  SMP N RND 1 PKU
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </button>
        </div>
      </div>
    </div>
  );
}