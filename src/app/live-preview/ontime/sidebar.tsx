"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Database,
  Users,
  GraduationCap,
  BookOpen,
  MapPin,
  UserCheck,
  BarChart2,
  Clock,
  ListFilter,
  Calendar,
  ClipboardList,
  Settings,
  Key,
  ChevronUp,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type OntimeTab =
  | "dashboard"
  | "siswa"
  | "guru"
  | "mata-pelajaran"
  | "kelas"
  | "ruangan"
  | "pengajar"
  | "laporan-masuk-pulang"
  | "laporan-mapel"
  | "laporan-mengajar"
  | "laporan-custom"
  | "jadwal"
  | "koreksi-absen"
  | "pengaturan"
  | "ganti-password";

interface OntimeSidebarProps {
  active?: OntimeTab;
  onSelect?: (tab: OntimeTab) => void;
}

/** Daftar tab datar untuk tab bar seluler (sidebar hanya tampil di lg ke atas). */
export const ontimeMobileNavItems: { id: OntimeTab; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "siswa", label: "Siswa" },
  { id: "guru", label: "Guru" },
  { id: "mata-pelajaran", label: "Mapel" },
  { id: "kelas", label: "Kelas" },
  { id: "ruangan", label: "Ruangan" },
  { id: "pengajar", label: "Pengajar" },
  { id: "laporan-masuk-pulang", label: "Masuk/Pulang" },
  { id: "laporan-mapel", label: "Lap. Mapel" },
  { id: "laporan-mengajar", label: "Lap. Mengajar" },
  { id: "laporan-custom", label: "Lap. Custom" },
  { id: "jadwal", label: "Jadwal" },
  { id: "koreksi-absen", label: "Koreksi Absen" },
  { id: "pengaturan", label: "Pengaturan" },
  { id: "ganti-password", label: "Ganti Password" },
];

export function OntimeSidebar({
  active = "dashboard",
  onSelect,
}: OntimeSidebarProps) {
  const [masterDataOpen, setMasterDataOpen] = useState(true);
  const [laporanOpen, setLaporanOpen] = useState(true);

  const masterDataTabs: OntimeTab[] = [
    "siswa",
    "guru",
    "mata-pelajaran",
    "kelas",
    "ruangan",
    "pengajar",
  ];
  const laporanTabs: OntimeTab[] = [
    "laporan-masuk-pulang",
    "laporan-mapel",
    "laporan-mengajar",
    "laporan-custom",
  ];
  const masterDataActive = masterDataTabs.includes(active);
  const laporanActive = laporanTabs.includes(active);

  const handleSelect = (tab: OntimeTab) => {
    if (onSelect) onSelect(tab);
  };

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-100 bg-white h-full justify-between lg:flex text-slate-700 text-sm select-none">
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
        {/* Logo & Header */}
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-sm text-white">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-emerald-600 leading-tight">
              OnTime
            </h1>
            <p className="text-[11px] text-slate-400 font-medium">
              Sistem Presensi
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {/* Dashboard */}
          <button
            onClick={() => handleSelect("dashboard")}
            className={cn(
              "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition text-xs",
              active === "dashboard"
                ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <LayoutGrid className="w-4 h-4 text-emerald-600" />
            Dashboard
          </button>

          {/* Master Data Group */}
          <div className="space-y-1">
            <button
              onClick={() => setMasterDataOpen(!masterDataOpen)}
              className={cn(
                "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition",
                masterDataActive && !masterDataOpen
                  ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-3">
                <Database className="w-4 h-4 text-slate-500" />
                <span>Master Data</span>
              </div>
              {masterDataOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {masterDataOpen && (
              <div className="ml-5 pl-3 border-l border-slate-200 space-y-1 my-1">
                <button
                  onClick={() => handleSelect("siswa")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "siswa"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Users className="w-4 h-4 text-slate-400" />
                  Siswa
                </button>
                <button
                  onClick={() => handleSelect("guru")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "guru"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                  Guru
                </button>
                <button
                  onClick={() => handleSelect("mata-pelajaran")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "mata-pelajaran"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Mata Pelajaran
                </button>
                <button
                  onClick={() => handleSelect("kelas")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "kelas"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Kelas
                </button>
                <button
                  onClick={() => handleSelect("ruangan")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "ruangan"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Ruangan
                </button>
                <button
                  onClick={() => handleSelect("pengajar")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "pengajar"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <UserCheck className="w-4 h-4 text-slate-400" />
                  Pengajar
                </button>
              </div>
            )}
          </div>

          {/* Laporan Presensi Group */}
          <div className="space-y-1">
            <button
              onClick={() => setLaporanOpen(!laporanOpen)}
              className={cn(
                "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition",
                laporanActive && !laporanOpen
                  ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-3">
                <BarChart2 className="w-4 h-4 text-slate-500" />
                <span>Laporan Presensi</span>
              </div>
              {laporanOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {laporanOpen && (
              <div className="ml-5 pl-3 border-l border-slate-200 space-y-1 my-1">
                <button
                  onClick={() => handleSelect("laporan-masuk-pulang")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "laporan-masuk-pulang"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Clock className="w-4 h-4 text-slate-400" />
                  Masuk / Pulang
                </button>
                <button
                  onClick={() => handleSelect("laporan-mapel")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "laporan-mapel"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Mata Pelajaran
                </button>
                <button
                  onClick={() => handleSelect("laporan-mengajar")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "laporan-mengajar"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                  Mengajar
                </button>
                <button
                  onClick={() => handleSelect("laporan-custom")}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition",
                    active === "laporan-custom"
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <ListFilter className="w-4 h-4 text-slate-400" />
                  Custom
                </button>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-100 my-2"></div>

          {/* Direct Menu Items */}
          <button
            onClick={() => handleSelect("jadwal")}
            className={cn(
              "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition",
              active === "jadwal"
                ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <Calendar className="w-4 h-4 text-slate-500" />
            Jadwal
          </button>

          <button
            onClick={() => handleSelect("koreksi-absen")}
            className={cn(
              "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition",
              active === "koreksi-absen"
                ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <ClipboardList className="w-4 h-4 text-slate-500" />
            Koreksi Absen
          </button>

          <button
            onClick={() => handleSelect("pengaturan")}
            className={cn(
              "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition",
              active === "pengaturan"
                ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <Settings className="w-4 h-4 text-slate-500" />
            Pengaturan
          </button>

          <button
            onClick={() => handleSelect("ganti-password")}
            className={cn(
              "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition",
              active === "ganti-password"
                ? "bg-[#E8F7F1] text-[#0D7A53] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <Key className="w-4 h-4 text-slate-500" />
            Ganti Password
          </button>
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              D
            </div>
            <div>
              <p className="font-bold text-xs text-slate-800 leading-tight">
                demo
              </p>
              <p className="text-[11px] text-slate-400">Admin</p>
            </div>
          </div>
          <button
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition"
            title="Keluar"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}