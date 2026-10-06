"use client";

import { Moon, LogOut } from "lucide-react";
import type { OncardTab } from "./sidebar";

// Mapping persis dari id OncardTab ke Judul Halaman di Navbar
const tabTitleMap: Record<OncardTab, string> = {
  dashboard: "Dashboard",
  transfer: "Transfer",
  "ganti-password": "Ganti Password",
  "withdraw-institusi": "Withdraw Institusi",
  "withdraw-merchant": "Withdraw Merchant",
  "akun-host": "Akun Host",
  "akun-merchant": "Akun Merchant",
  "akun-user": "Akun User",
  "jurnal-institusi": "Jurnal Institusi",
  "jurnal-pendapatan": "Jurnal Pendapatan",
  "jurnal-host": "Jurnal Host",
  "jurnal-merchant": "Jurnal Merchant",
  "jurnal-user": "Jurnal User",
};

interface OncardNavbarProps {
  activeTab?: OncardTab;
  title?: string;
  date?: string;
}

export function OncardNavbar({
  activeTab = "dashboard",
  title,
  date = "Senin, 28 September 2026",
}: OncardNavbarProps) {
  // Menggunakan prop 'title' jika diisi, jika tidak otomatis mengambil dari mapping 'activeTab'
  const displayTitle = title || tabTitleMap[activeTab] || "Dashboard";

  return (
    <header className="h-20 bg-white border-b border-slate-100 px-3 sm:px-6 flex items-center justify-between gap-3 sticky top-0 z-30 shrink-0">
      {/* Sisi Kiri: Judul Halaman & Tanggal */}
      <div className="flex flex-col justify-center min-w-0">
        <h1 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight leading-snug truncate">
          {displayTitle}
        </h1>
        <p className="hidden sm:block text-xs text-slate-400 font-medium">{date}</p>
      </div>

      {/* Sisi Kanan: Action Buttons & Profil User */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        {/* Tombol Theme / Dark Mode */}
        <button
          type="button"
          className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition shadow-2xs cursor-pointer"
          aria-label="Toggle theme"
        >
          <Moon className="w-4 h-4 text-slate-600" />
        </button>

        {/* Profil Admin */}
        <div className="flex items-center gap-2.5 px-1">
          <div className="w-9 h-9 rounded-xl bg-[#0F5A31] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
            AD
          </div>
          <div className="hidden sm:flex flex-col text-left leading-tight">
            <span className="font-bold text-xs text-slate-800">Admin Demo</span>
            <span className="text-[10px] text-slate-400 font-medium">
              Super Admin
            </span>
          </div>
        </div>

        {/* Tombol Logout */}
        <button
          type="button"
          className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition shadow-2xs cursor-pointer"
          aria-label="Logout"
        >
          <LogOut className="w-4 h-4 text-slate-600" />
        </button>
      </div>
    </header>
  );
}