"use client";

import { Wallet, BarChart3, CreditCard, TrendingDown, FileText, Megaphone, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OnTuitionTab } from "./view";

export const navItems: { id: OnTuitionTab; icon: typeof Wallet; label: string }[] = [
  { id: "dashboard", icon: Wallet, label: "Dashboard" },
  { id: "manajemen-biaya", icon: BarChart3, label: "Manajemen Biaya" },
  { id: "pembayaran", icon: CreditCard, label: "Pembayaran" },
  { id: "penarikan", icon: TrendingDown, label: "Penarikan" },
  { id: "jurnal", icon: FileText, label: "Jurnal" },
  { id: "broadcast", icon: Megaphone, label: "Broadcast" },
  { id: "pengaturan", icon: Settings, label: "Pengaturan" },
];

export function OnTuitionSidebar({
  active,
  onSelect,
}: {
  active: OnTuitionTab;
  onSelect: (tab: OnTuitionTab) => void;
}) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-100 bg-white lg:flex">
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-3 py-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="size-6 rotate-45 rounded-sm bg-[#3DBA86]" />
            <span className="font-bold text-lg tracking-tight text-slate-900">Ontuition</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition cursor-pointer",
                  isActive
                    ? "bg-[#3DBA86] text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-slate-100 p-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          Keluar
        </button>
      </div>
    </aside>
  );
}
