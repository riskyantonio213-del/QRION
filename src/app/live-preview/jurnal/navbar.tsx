"use client";

import { Layers, ChevronDown, School } from "lucide-react";

export function JurnalNavbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0 overflow-hidden">
          <School className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="font-bold text-slate-800 text-sm tracking-tight">
              SMP N RND 1 PKU
            </h1>
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-600 rounded-md">
              NPSN: 10101010
            </span>
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-600 rounded-md">
              Negeri
            </span>
            <span className="text-xs text-slate-400 ml-1">
              Panam, Pekanbaru
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-50 transition shadow-sm">
          <Layers className="w-4 h-4 text-slate-500" />
          <span>Switch App</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
        </button>
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-100">
          <div className="w-9 h-9 rounded-full bg-[#3DBA86] flex items-center justify-center text-white font-semibold text-[10px] shadow-sm shrink-0">
            orion
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-bold text-xs text-slate-800">Argeomerta</span>
            <span className="text-[10px] text-slate-400 font-medium">USER</span>
            <span className="text-[9px] text-slate-400">6285264397615</span>
          </div>
        </div>
      </div>
    </header>
  );
}
