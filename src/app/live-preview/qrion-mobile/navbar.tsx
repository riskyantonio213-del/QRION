"use client";

import { Wifi, Signal, BatteryFull, Bell, School } from "lucide-react";

export function MobileNavbar() {
  return (
    <header className="relative z-30 shrink-0 border-b border-slate-100 bg-white">
      {/* Status Bar */}
      <div className="relative flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold text-slate-900">
        <span>9:41</span>

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-1.5 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0F172A]" />

        <div className="flex items-center gap-1.5">
          <Signal className="h-3.5 w-3.5" />
          <Wifi className="h-3.5 w-3.5" />
          <BatteryFull className="h-4 w-4" />
        </div>
      </div>

      {/* App Header */}
      <div className="flex items-center justify-between px-4 pb-3 pt-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3DBA86] text-[11px] font-bold text-white shadow-sm">
            A
          </div>
          <div>
            <p className="text-[13px] font-bold leading-tight text-slate-800">
              Argeomerta
            </p>
            <p className="flex items-center gap-1 text-[10px] text-slate-400">
              <School className="h-3 w-3" />
              SMP N RND 1 PKU
            </p>
          </div>
        </div>

        <button
          aria-label="Notifikasi"
          className="relative rounded-full border border-slate-100 bg-white p-2 text-slate-500 shadow-sm transition hover:bg-slate-50"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}