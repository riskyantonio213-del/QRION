"use client";

import {
  LayoutGrid,
  Send,
  Lock,
  Landmark,
  Store,
  User,
  BookOpen,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type OncardTab =
  | "dashboard"
  | "transfer"
  | "ganti-password"
  | "withdraw-institusi"
  | "withdraw-merchant"
  | "akun-host"
  | "akun-merchant"
  | "akun-user"
  | "jurnal-institusi"
  | "jurnal-pendapatan"
  | "jurnal-host"
  | "jurnal-merchant"
  | "jurnal-user";

interface NavSection {
  sectionTitle: string;
  items: {
    id: OncardTab;
    label: string;
    icon: React.ElementType;
  }[];
}

const navSections: NavSection[] = [
  {
    sectionTitle: "MENU UTAMA",
    items: [{ id: "dashboard", label: "Dashboard", icon: LayoutGrid }],
  },
  {
    sectionTitle: "MANAJEMEN",
    items: [
      { id: "transfer", label: "Transfer", icon: Send },
      { id: "ganti-password", label: "Ganti Password", icon: Lock },
    ],
  },
  {
    sectionTitle: "WITHDRAW",
    items: [
      { id: "withdraw-institusi", label: "Institusi", icon: Landmark },
      { id: "withdraw-merchant", label: "Merchant", icon: Store },
    ],
  },
  {
    sectionTitle: "AKUN",
    items: [
      { id: "akun-host", label: "Host", icon: User },
      { id: "akun-merchant", label: "Merchant", icon: Store },
      { id: "akun-user", label: "User", icon: User },
    ],
  },
  {
    sectionTitle: "JURNAL",
    items: [
      { id: "jurnal-institusi", label: "Institusi", icon: BookOpen },
      { id: "jurnal-pendapatan", label: "Pendapatan", icon: BookOpen },
      { id: "jurnal-host", label: "Host", icon: BookOpen },
      { id: "jurnal-merchant", label: "Merchant", icon: BookOpen },
      { id: "jurnal-user", label: "User", icon: BookOpen },
    ],
  },
];

/** Daftar tab datar untuk tab bar seluler (sidebar hanya tampil di lg ke atas). */
export const oncardMobileNavItems: { id: OncardTab; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "transfer", label: "Transfer" },
  { id: "ganti-password", label: "Ganti Password" },
  { id: "withdraw-institusi", label: "WD Institusi" },
  { id: "withdraw-merchant", label: "WD Merchant" },
  { id: "akun-host", label: "Akun Host" },
  { id: "akun-merchant", label: "Akun Merchant" },
  { id: "akun-user", label: "Akun User" },
  { id: "jurnal-institusi", label: "Jurnal Institusi" },
  { id: "jurnal-pendapatan", label: "Jurnal Pendapatan" },
  { id: "jurnal-host", label: "Jurnal Host" },
  { id: "jurnal-merchant", label: "Jurnal Merchant" },
  { id: "jurnal-user", label: "Jurnal User" },
];

export function OncardSidebar({
  active,
  onSelect,
}: {
  active: OncardTab;
  onSelect: (tab: OncardTab) => void;
}) {
  return (
    <aside className="hidden w-64 shrink-0 h-screen bg-white border-r border-slate-100 flex flex-col justify-between select-none lg:flex">
      {/* Upper Area (Logo & Navigation) */}
      <div className="flex-1 overflow-y-auto flex flex-col min-h-0">
        {/* Header Logo */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-[#00875A] flex items-center justify-center text-white shadow-sm">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base text-slate-800 tracking-tight leading-tight">
              ON<span className="text-[#00875A]">CARD</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">
              Manajemen Unit Usaha Sekolah
            </p>
          </div>
        </div>

        {/* Grouped Menu List */}
        <div className="px-3 py-3 space-y-4">
          {navSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                {section.sectionTitle}
              </h3>

              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition cursor-pointer text-left",
                      isActive
                        ? "bg-[#EAF6ED] text-[#00875A]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="flex-1 truncate">{item.label}</span>

                    {/* Active Green Dot Indicator */}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#00875A] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Assistance Card */}
      <div className="p-3 shrink-0 border-t border-slate-50">
        <div className="bg-[#EAF6ED]/80 border border-emerald-100/60 rounded-2xl p-4 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
            <HelpCircle className="w-4 h-4 text-[#00875A]" />
            <span>Butuh bantuan?</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Pelajari cara mengelola unit usaha sekolah dengan panduan ONCARD.
          </p>
          <a
            href="#panduan"
            className="text-xs font-bold text-[#00875A] hover:underline inline-flex items-center gap-1 mt-1 transition"
          >
            Buka panduan <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
}