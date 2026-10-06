"use client";

import {
  PieChart,
  Folder,
  HandHeart,
  FileText,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type JurnalTab =
  | "dashboard"
  | "manajemen-kas"
  | "fundraising"
  | "jurnal"
  | "pengaturan";

export const navItems: { id: JurnalTab; icon: typeof PieChart; label: string }[] = [
  { id: "dashboard", icon: PieChart, label: "Dashboard" },
  { id: "manajemen-kas", icon: Folder, label: "Manajemen Kas" },
  { id: "fundraising", icon: HandHeart, label: "Fundraising" },
  { id: "jurnal", icon: FileText, label: "Jurnal" },
  { id: "pengaturan", icon: Settings, label: "Pengaturan" },
];

export function JurnalSidebar({
  active,
  onSelect,
  onLogout,
}: {
  active: JurnalTab;
  onSelect: (tab: JurnalTab) => void;
  onLogout?: () => void;
}) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-100 bg-white h-full lg:flex font-sans select-none">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Header Logo & Menu Toggle */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6 px-1">
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-0.5">
              <span className="font-extrabold text-2xl tracking-tight text-[#2D2261]">
                qrion
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#3DBA86] tracking-wider pl-6 -mt-1">
              Jurnal
            </span>
          </div>
          <button
            type="button"
            className="text-slate-700 hover:text-slate-900 transition p-1 cursor-pointer"
          >
            <Menu className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={cn(
                  "w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition cursor-pointer",
                  isActive
                    ? "bg-[#3DBA86] text-white shadow-xs"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                <Icon className="w-5 h-5 shrink-0 stroke-[2.2]" />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Keluar Button */}
          <button
            type="button"
            onClick={onLogout}
            className="w-full flex items-center gap-3.5 px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-2xl text-sm font-semibold transition cursor-pointer mt-2"
          >
            <LogOut className="w-5 h-5 shrink-0 stroke-[2.2]" />
            <span>Keluar</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}