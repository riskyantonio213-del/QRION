"use client";

import React, { useState } from "react";
import {
  Users,
  UserCheck,
  BookOpen,
  School,
  DoorOpen,
  UserCog,
  Calendar,
  Search,
  Plus,
  Edit,
  Trash2,
  Download,
  Info,
  X,
  FileText,
  ClipboardList,
  Clock,
  CheckCircle2,
  XCircle,
  Sliders,
  Eye,
  EyeOff,
  ShieldCheck,
  MapPin,
  Circle,
  Key,
} from "lucide-react";

// --- DATA MOCK SESUAI SCREENSHOT ---

const siswaList = [
  { no: 1, nis: "100129", kelas: "SMP Kelas 7 1", nama: "Aisyah Maulana" },
  { no: 2, nis: "23", kelas: "-", nama: "Ananta Firdaus" },
  { no: 3, nis: "100011", kelas: "SMP Kelas 7 3", nama: "Andi Lestari" },
  { no: 4, nis: "2978724682735673", kelas: "-", nama: "David Elnoventa" },
  { no: 5, nis: "100016", kelas: "-", nama: "Farhan Nugroho Aja" },
  { no: 6, nis: "567891045", kelas: "-", nama: "Freddy Mercuree" },
  { no: 7, nis: "100113", kelas: "-", nama: "Maya Ramadhan" },
  { no: 8, nis: "100002", kelas: "SMP Kelas 7 1", nama: "Nadia Nugroho" },
  { no: 9, nis: "100006", kelas: "-", nama: "Rafi Permata" },
  { no: 10, nis: "2026306397", kelas: "-", nama: "Risky" },
];

const guruList = [
  { no: 1, nip: "-", nama: "Annesa Famella", telepon: "-" },
  { no: 2, nip: "-", nama: "Eko M", telepon: "6285264397618" },
  { no: 3, nip: "-", nama: "R Hawali F", telepon: "62282132552887" },
];

const mapelList = [
  { no: 1, kode: "BI01", nama: "Bahasa Indonesia", deskripsi: "-", pengajar: 2 },
  { no: 2, kode: "MTK01", nama: "Matematika", deskripsi: "Belajar berhitung", pengajar: 2 },
];

const kelasList = [
  { no: 1, kode: "KUN21", nama: "SMP Kelas 7 1", status: "ACTIVE", level: 7 },
  { no: 2, kode: "IGMIN", nama: "SMP Kelas 7 2", status: "ACTIVE", level: 7 },
  { no: 3, kode: "11M70", nama: "SMP Kelas 7 3", status: "ACTIVE", level: 7 },
];

const ruanganList = [
  { no: 1, kode: "LB01", nama: "Lab Komputer", bersama: "Ya" },
  { no: 2, kode: "RKVII1", nama: "Ruang kelas VII 1", bersama: "Tidak" },
];

const pengajarList = [
  { no: 1, kode: "MTK01", mapel: "Matematika", guru: ["Annesa Famella", "Eko M"] },
  { no: 2, kode: "BI01", mapel: "Bahasa Indonesia", guru: ["Annesa Famella", "R Hawali F"] },
];

// ============================================================================
// PAGE VIEWS
// ============================================================================

function PageTitle({ title, subtitle, actionButton }: { title: string; subtitle: string; actionButton?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
      </div>
      {actionButton}
    </div>
  );
}

// 1. SISWA VIEW
export function SiswaView() {
  return (
    <div className="space-y-4">
      <PageTitle title="Siswa" subtitle="Data siswa aktif" />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <Users className="w-4 h-4 text-[#059669]" />
            <span>Daftar Siswa</span>
          </div>
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari siswa..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">NO</th>
              <th className="py-3 px-2">NIS</th>
              <th className="py-3 px-2">KELAS</th>
              <th className="py-3 px-2">NAMA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {siswaList.map((s) => (
              <tr key={s.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{s.no}</td>
                <td className="py-3 px-2 font-medium text-slate-800">{s.nis}</td>
                <td className="py-3 px-2">{s.kelas}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{s.nama}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
          <span>Halaman 1 dari 2</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 border border-slate-200 rounded text-slate-400 hover:bg-slate-50">&lt;</button>
            <button className="px-2.5 py-1 bg-[#059669] text-white rounded font-medium">1</button>
            <button className="px-2.5 py-1 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-2 py-1 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. GURU VIEW
export function GuruView() {
  return (
    <div className="space-y-4">
      <PageTitle title="Guru" subtitle="Data guru mengajar" />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <UserCheck className="w-4 h-4 text-[#059669]" />
            <span>Daftar Guru</span>
          </div>
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari guru..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">NO</th>
              <th className="py-3 px-2">NIP</th>
              <th className="py-3 px-2">NAMA</th>
              <th className="py-3 px-2">TELEPON</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {guruList.map((g) => (
              <tr key={g.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{g.no}</td>
                <td className="py-3 px-2">{g.nip}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{g.nama}</td>
                <td className="py-3 px-2 font-mono text-slate-500">{g.telepon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 3. MATA PELAJARAN VIEW
export function MapelView() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Mata Pelajaran"
        subtitle="Kelola data mata pelajaran"
        actionButton={
          <button className="flex items-center gap-1.5 bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#047857] transition">
            <Plus className="w-4 h-4" />
            Tambah Baru
          </button>
        }
      />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <BookOpen className="w-4 h-4 text-[#059669]" />
            <span>Daftar Mata Pelajaran</span>
          </div>
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari mata pelajaran..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">NO</th>
              <th className="py-3 px-2">KODE</th>
              <th className="py-3 px-2">NAMA</th>
              <th className="py-3 px-2">DESKRIPSI</th>
              <th className="py-3 px-2">PENGAJAR</th>
              <th className="py-3 px-2 text-right">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {mapelList.map((m) => (
              <tr key={m.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{m.no}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{m.kode}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{m.nama}</td>
                <td className="py-3 px-2">{m.deskripsi}</td>
                <td className="py-3 px-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-[#059669] font-bold text-[10px]">
                    {m.pengajar}
                  </span>
                </td>
                <td className="py-3 px-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="p-1 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 4. KELAS VIEW
export function KelasView() {
  return (
    <div className="space-y-4">
      <PageTitle title="Kelas" subtitle="Data kelas" />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <School className="w-4 h-4 text-[#059669]" />
            <span>Daftar Kelas</span>
          </div>
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari kelas..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">NO</th>
              <th className="py-3 px-2">KODE</th>
              <th className="py-3 px-2">NAMA</th>
              <th className="py-3 px-2">STATUS</th>
              <th className="py-3 px-2">LEVEL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {kelasList.map((k) => (
              <tr key={k.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{k.no}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{k.kode}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{k.nama}</td>
                <td className="py-3 px-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-[#059669]">
                    {k.status}
                  </span>
                </td>
                <td className="py-3 px-2">{k.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 5. RUANGAN VIEW
export function RuanganView() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Ruangan"
        subtitle="Kelola data ruangan"
        actionButton={
          <button className="flex items-center gap-1.5 bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#047857] transition">
            <Plus className="w-4 h-4" />
            Tambah Baru
          </button>
        }
      />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <DoorOpen className="w-4 h-4 text-[#059669]" />
            <span>Daftar Ruangan</span>
          </div>
          <div className="relative w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari ruangan..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">NO</th>
              <th className="py-3 px-2">KODE</th>
              <th className="py-3 px-2">NAMA</th>
              <th className="py-3 px-2">BERSAMA</th>
              <th className="py-3 px-2 text-right">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {ruanganList.map((r) => (
              <tr key={r.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{r.no}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{r.kode}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{r.nama}</td>
                <td className="py-3 px-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      r.bersama === "Ya" ? "bg-emerald-50 text-[#059669]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {r.bersama}
                  </span>
                </td>
                <td className="py-3 px-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="p-1 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 6. PENGAJAR VIEW
export function PengajarView() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Pengajar"
        subtitle="Kelola penugasan guru mengajar mata pelajaran"
        actionButton={
          <button className="flex items-center gap-1.5 bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#047857] transition">
            <Plus className="w-4 h-4" />
            Tambah Baru
          </button>
        }
      />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <UserCog className="w-4 h-4 text-[#059669]" />
            <span>Daftar Pengajar</span>
          </div>
          <div className="relative w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari guru atau mata pelajaran..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">NO</th>
              <th className="py-3 px-2">KODE</th>
              <th className="py-3 px-2">MATA PELAJARAN</th>
              <th className="py-3 px-2">GURU</th>
              <th className="py-3 px-2 text-right">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {pengajarList.map((p) => (
              <tr key={p.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{p.no}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{p.kode}</td>
                <td className="py-3 px-2 font-semibold text-slate-800">{p.mapel}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {p.guru.map((g, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[#059669] text-[10px] font-medium border border-emerald-100"
                      >
                        {g}
                        <X className="w-2.5 h-2.5 cursor-pointer hover:text-emerald-800" />
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1 text-emerald-600 hover:bg-emerald-50 rounded"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="p-1 text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 7. LAPORAN MASUK / PULANG VIEW
export function LaporanMasukView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Laporan Presensi Masuk / Pulang</h2>
          <p className="text-xs text-slate-400 mt-0.5">Rekap kehadiran guru dan siswa masuk / pulang</p>
        </div>
        <div className="text-xs text-slate-400">Presensi masuk/pulang siswa dinonaktifkan</div>
      </div>

      {/* Info Banner */}
      <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 flex gap-3 text-slate-600 text-xs">
        <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Presensi masuk/pulang siswa sedang dinonaktifkan di Pengaturan, jadi tombol justifikasinya disembunyikan dan pencatatannya ditolak. Daftar siswa tetap lengkap seperti biasa: yang belum punya catatan berstatus “Presensi belum aktif”, bukan Alfa, dan catatan yang sudah ada ditampilkan apa adanya.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-5 gap-4">
        {[
          { label: "Hadir", count: 0, color: "text-emerald-600" },
          { label: "Terlambat", count: 0, color: "text-amber-500" },
          { label: "Izin", count: 0, color: "text-blue-500" },
          { label: "Sakit", count: 0, color: "text-purple-500" },
          { label: "Alfa", count: 0, color: "text-red-500" },
        ].map((m, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm text-center">
            <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
            <div className={`text-xl font-bold mt-1 ${m.color}`}>{m.count}</div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <span>Rekap Presensi</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Siswa</option>
            </select>
            <input
              type="date"
              defaultValue="2026-09-29"
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
            />
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Kelas</option>
            </select>
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Status</option>
            </select>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari nama atau NIS..."
                className="pl-8 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none w-48"
              />
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50">
              <Download className="w-3.5 h-3.5" /> Excel
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50">
              <Download className="w-3.5 h-3.5" /> PDF
            </button>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-3 px-2">No</th>
              <th className="py-3 px-2">NIS</th>
              <th className="py-3 px-2">Nama</th>
              <th className="py-3 px-2">Kelas</th>
              <th className="py-3 px-2">Jam Masuk</th>
              <th className="py-3 px-2">Status Masuk</th>
              <th className="py-3 px-2">Keterangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {siswaList.map((s) => (
              <tr key={s.no} className="hover:bg-slate-50">
                <td className="py-3 px-2">{s.no}</td>
                <td className="py-3 px-2 font-medium text-slate-800">{s.nis}</td>
                <td className="py-3 px-2 font-semibold text-emerald-600">{s.nama}</td>
                <td className="py-3 px-2">{s.kelas}</td>
                <td className="py-3 px-2">-</td>
                <td className="py-3 px-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500">
                    Presensi belum aktif
                  </span>
                </td>
                <td className="py-3 px-2">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 8. LAPORAN MATA PELAJARAN VIEW
export function LaporanMapelView() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Laporan Presensi Mata Pelajaran"
        subtitle="Rekap kehadiran siswa per mata pelajaran"
        actionButton={
          <button className="flex items-center gap-1.5 bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#047857] transition">
            <UserCheck className="w-4 h-4" />
            Justifikasi
          </button>
        }
      />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6">
        <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
          <BookOpen className="w-4 h-4 text-[#059669]" />
          <span>Rekap Presensi Mata Pelajaran</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Tanggal</label>
            <input
              type="date"
              defaultValue="2026-09-29"
              className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Kelas</label>
            <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Kelas</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Mata Pelajaran</label>
            <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Mata Pelajaran</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Status</label>
            <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Status</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 font-medium block mb-1">Cari</label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama, NIS, atau kode mapel..."
              className="w-full pl-8 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="py-12 text-center space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-slate-600 font-medium">Tidak ada data presensi mata pelajaran untuk filter yang dipilih</p>
          <p className="text-[11px] text-slate-400">
            Kalau tanggal ini memang diliburkan, tandai sebagai libur khusus supaya tidak lagi dihitung di laporan.
          </p>
          <button className="mt-2 border border-[#059669] text-[#059669] px-4 py-1.5 rounded-xl font-semibold hover:bg-emerald-50 transition">
            Tandai libur khusus
          </button>
        </div>
      </div>
    </div>
  );
}

// 9. LAPORAN MENGAJAR VIEW
export function LaporanMengajarView() {
  return (
    <div className="space-y-4">
      <PageTitle title="Laporan Presensi Mengajar" subtitle="Rekap kehadiran guru mengajar sesuai jadwal" />

      {/* Teacher Stats Cards */}
      <div className="grid grid-cols-2 gap-4 max-w-xl">
        <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm text-center">
          <div className="text-xs text-slate-400 font-medium">R Hawali F</div>
          <div className="text-xl font-bold text-emerald-600 mt-1">0/3</div>
          <div className="text-[10px] text-slate-400">0% hadir</div>
          <div className="text-[10px] text-amber-500 mt-1">7j 54m telat</div>
        </div>
        <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm text-center">
          <div className="text-xs text-slate-400 font-medium">Eko M</div>
          <div className="text-xl font-bold text-emerald-600 mt-1">0/1</div>
          <div className="text-[10px] text-slate-400">0% hadir</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6">
        <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
          <UserCog className="w-4 h-4 text-[#059669]" />
          <span>Rekap Presensi Mengajar</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <input
            type="date"
            defaultValue="2026-09-29"
            className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
          />
          <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
            <option>Semua Guru</option>
          </select>
          <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
            <option>Semua Mata Pelajaran</option>
          </select>
          <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
            <option>Semua Status</option>
          </select>
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama guru, mapel, atau kelas..."
            className="w-full pl-8 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
          />
        </div>

        {/* Empty State */}
        <div className="py-12 text-center space-y-3">
          <UserCog className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-slate-600 font-medium">Tidak ada data presensi mengajar untuk filter yang dipilih</p>
          <p className="text-[11px] text-slate-400">
            Kalau tanggal ini memang diliburkan, tandai sebagai libur khusus supaya tidak lagi dihitung di laporan.
          </p>
          <button className="mt-2 border border-[#059669] text-[#059669] px-4 py-1.5 rounded-xl font-semibold hover:bg-emerald-50 transition">
            Tandai libur khusus
          </button>
        </div>
      </div>
    </div>
  );
}

// 10. LAPORAN CUSTOM VIEW
export function LaporanCustomView() {
  return (
    <div className="space-y-4">
      <PageTitle
        title="Laporan Presensi Custom"
        subtitle="Rekap kehadiran untuk jenis absen custom (Ekstrakurikuler, Gotong Royong, dll)"
        actionButton={
          <button className="flex items-center gap-1.5 bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#047857] transition">
            <UserCheck className="w-4 h-4" />
            Justifikasi
          </button>
        }
      />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6">
        <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
          <FileText className="w-4 h-4 text-[#059669]" />
          <span>Rekap Presensi Custom</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Tanggal</label>
            <input
              type="date"
              defaultValue="2026-09-29"
              className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Jenis Absen</label>
            <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Jenis Absen</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Kelas</label>
            <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Kelas</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-medium block mb-1">Status</label>
            <select className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none">
              <option>Semua Status</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 font-medium block mb-1">Cari</label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama, NIS, kelas, atau jenis absen..."
              className="w-full pl-8 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="py-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-slate-600 font-medium">Tidak ada data presensi custom untuk filter yang dipilih</p>
        </div>
      </div>
    </div>
  );
}

export function JadwalView() {
  return (
    <div className="space-y-5">
      <PageTitle
        title="Jadwal"
        subtitle="Kelola jadwal pelajaran"
        actionButton={
          <button className="flex items-center gap-1.5 bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition">
            <Plus className="w-4 h-4" />
            Tambah Baru
          </button>
        }
      />

      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <Calendar className="w-4 h-4 text-[#10b981]" />
            <span>Jadwal Pelajaran</span>
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:outline-none focus:border-[#10b981]">
              <option value="">Pilih Kelas</option>
            </select>
            <select className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:outline-none focus:border-[#10b981]">
              <option value="semua">Semua Hari</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        <div className="py-20 text-center">
          <p className="text-xs text-slate-400 font-medium">
            Pilih kelas terlebih dahulu untuk melihat jadwal
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. KOREKSI VIEW
// ----------------------------------------------------------------------
export function KoreksiView() {
  const [activeTab, setActiveTab] = useState<"Menunggu" | "Diterima" | "Ditolak" | "Semua">("Menunggu");

  return (
    <div className="space-y-5">
      <PageTitle
        title="Koreksi Absen Guru"
        subtitle="Guru tidak bisa mengubah absennya sendiri setelah tersimpan. Pengajuan di halaman ini yang menentukan apakah catatannya diperbaiki."
      />

      {/* Ringkasan Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium">Menunggu keputusan</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
          </div>
          <Clock className="w-5 h-5 text-amber-500" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium">Diterima</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium">Ditolak</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
          </div>
          <XCircle className="w-5 h-5 text-red-500" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium">Total pengajuan</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
          </div>
          <ClipboardList className="w-5 h-5 text-emerald-500" />
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-800 text-sm">Daftar Pengajuan</h2>
          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 text-xs">
            {(["Menunggu", "Diterima", "Ditolak", "Semua"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  activeTab === tab
                    ? "bg-[#10b981] text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            defaultValue="08/30/2026"
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:outline-none focus:border-[#10b981]"
          />
          <input
            type="text"
            defaultValue="09/29/2026"
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:outline-none focus:border-[#10b981]"
          />
          <select className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-white focus:outline-none focus:border-[#10b981]">
            <option value="semua">Semua Guru</option>
          </select>
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama guru..."
              className="w-full pl-8 pr-4 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#10b981]"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="py-16 text-center space-y-2">
          <ClipboardList className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-xs text-slate-400 font-medium">
            Tidak ada pengajuan koreksi yang menunggu keputusan
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. PENGATURAN VIEW
// ----------------------------------------------------------------------
export function PengaturanView() {
  const [presensiSiswa, setPresensiSiswa] = useState(true);
  const [presensiGuru, setPresensiGuru] = useState(true);
  const [presensiMapel, setPresensiMapel] = useState(true);
  const [absenPulang, setAbsenPulang] = useState(true);

  return (
    <div className="space-y-5">
      <PageTitle title="Pengaturan" subtitle="Konfigurasi sistem presensi" />

      {/* 1. Presensi yang Diaktifkan */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
          <Sliders className="w-4 h-4 text-[#10b981]" />
          <span>Presensi yang Diaktifkan</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Jenis presensi yang dimatikan tidak lagi dihitung Alfa maupun belum mengisi di laporan dan skor dashboard, tombol inputnya disembunyikan, dan pencatatannya ditolak. Daftar siswa/guru di laporan tetap lengkap — yang belum punya catatan berstatus “Presensi belum aktif” — dan catatan lama tetap tersimpan dan tetap bisa dibaca. Sakelarnya tersimpan sendiri begitu diklik; pengaturan lain di halaman ini tetap menunggu tombol Simpan.
        </p>

        <div className="space-y-3 pt-2">
          {/* Switch 1 */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition">
            <div>
              <p className="text-xs font-semibold text-slate-800">Presensi Masuk / Pulang Siswa</p>
              <p className="text-[11px] text-slate-400">Absen harian siswa beserta jam pulangnya.</p>
            </div>
            <button
              onClick={() => setPresensiSiswa(!presensiSiswa)}
              className={`w-11 h-6 rounded-full transition-colors relative ${presensiSiswa ? "bg-[#10b981]" : "bg-slate-200"}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${presensiSiswa ? "left-[22px]" : "left-0.5"}`} />
            </button>
          </div>

          {/* Switch 2 */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition">
            <div>
              <p className="text-xs font-semibold text-slate-800">Presensi Masuk / Pulang Guru</p>
              <p className="text-[11px] text-slate-400">Absen harian guru; presensi mengajar per sesi diatur terpisah di laporan Mengajar.</p>
            </div>
            <button
              onClick={() => setPresensiGuru(!presensiGuru)}
              className={`w-11 h-6 rounded-full transition-colors relative ${presensiGuru ? "bg-[#10b981]" : "bg-slate-200"}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${presensiGuru ? "left-[22px]" : "left-0.5"}`} />
            </button>
          </div>

          {/* Switch 3 */}
          <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition">
            <div>
              <p className="text-xs font-semibold text-slate-800">Presensi Mata Pelajaran</p>
              <p className="text-[11px] text-slate-400">Kehadiran siswa per pertemuan mata pelajaran sesuai jadwal.</p>
            </div>
            <button
              onClick={() => setPresensiMapel(!presensiMapel)}
              className={`w-11 h-6 rounded-full transition-colors relative ${presensiMapel ? "bg-[#10b981]" : "bg-slate-200"}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${presensiMapel ? "left-[22px]" : "left-0.5"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Pengaturan Waktu */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6">
        <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
          <Clock className="w-4 h-4 text-[#10b981]" />
          <span>Pengaturan Waktu</span>
        </div>

        {/* Hari Masuk Sekolah */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-800">Hari Masuk Sekolah</p>
          <p className="text-[11px] text-slate-400">Centang hari yang dipakai untuk kegiatan belajar. Hari yang tidak dicentang dianggap libur.</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"].map((day) => (
              <label key={day} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#10b981] focus:ring-[#10b981]" />
                <span>{day}</span>
              </label>
            ))}
            <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300 text-[#10b981] focus:ring-[#10b981]" />
              <span>Minggu</span>
            </label>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">6 hari masuk per minggu: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu.</p>
        </div>

        {/* Mulai Aktif Absen */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-800">Mulai Aktif Absen</p>
          <p className="text-[11px] text-slate-400">
            Tanggal pertama presensi mulai dihitung. Tanggal sebelum ini tidak pernah disebut Alfa di laporan mana pun — di laporan harian, mengajar, absen mapel, maupun absen kegiatan statusnya “Presensi belum aktif” — karena presensinya memang belum dijalankan di sekolah ini. Kosongkan kalau presensi sudah aktif sejak dulu.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <input type="text" defaultValue="Tanggal Mulai Aktif  09/22/2026" className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-[#10b981] min-w-[240px]" />
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 transition">
              <X className="w-3.5 h-3.5 text-slate-400" />
              <span>Aktif sejak dulu</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">Presensi dihitung mulai Selasa, 22 September 2026. Tanggal sebelumnya “Presensi belum aktif”.</p>
        </div>

        {/* Libur Sekolah */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-800">Libur Sekolah (Rentang Tanggal)</p>
          <p className="text-[11px] text-slate-400">
            Tanggal yang diliburkan walau harinya termasuk hari masuk sekolah, mis. tanggal merah, cuti bersama, atau libur semester. Isi tanggal mulai sampai selesai; kosongkan tanggal selesai kalau liburnya cuma sehari. Pada tanggal-tanggal ini aplikasi guru tidak menampilkan absen hari ini dan mata pelajaran hari itu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-1">
            <div>
              <label className="text-[10px] text-slate-400 font-medium block mb-1">Tanggal Mulai</label>
              <input type="text" placeholder="mm/dd/yyyy" className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#10b981]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-medium block mb-1">Tanggal Selesai</label>
              <input type="text" placeholder="mm/dd/yyyy" className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#10b981]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-medium block mb-1">Keterangan (opsional)</label>
              <input type="text" placeholder="Contoh: Libur Semester Ganjil" className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#10b981]" />
            </div>
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center gap-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-1.5 rounded-lg text-xs font-medium transition">
                <Plus className="w-3.5 h-3.5 text-slate-400" />
                Tambah
              </button>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">Belum ada tanggal libur khusus.</p>
        </div>

        {/* Jam Masuk per Hari */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-800">Jam Masuk per Hari</p>
          <p className="text-[11px] text-slate-400">Atur waktu masuk untuk hari masuk sekolah yang dicentang di atas; hari libur tidak perlu diatur.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"].map((day) => (
              <div key={day} className="flex items-center justify-between px-3 py-1.5 border border-slate-200 rounded-lg bg-white">
                <span className="text-xs text-slate-600">{day}</span>
                <input type="text" defaultValue="07:00" className="w-16 text-right text-xs font-mono font-medium text-slate-800 focus:outline-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Gunakan Absen Pulang */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs font-semibold text-slate-800">Gunakan Absen Pulang</p>
            <p className="text-[11px] text-slate-400">Aktifkan pencatatan waktu pulang siswa</p>
          </div>
          <button
            onClick={() => setAbsenPulang(!absenPulang)}
            className={`w-11 h-6 rounded-full transition-colors relative ${absenPulang ? "bg-[#10b981]" : "bg-slate-200"}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${absenPulang ? "left-[22px]" : "left-0.5"}`} />
          </button>
        </div>

        {/* Toleransi Keterlambatan Mengajar */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-800">Toleransi Keterlambatan Mengajar</p>
          <p className="text-[11px] text-slate-400">Guru yang mengisi presensi mengajar dalam rentang menit ini setelah jam mulai mata pelajaran tidak dihitung terlambat.</p>
          <div className="flex items-center gap-2 pt-1">
            <input type="text" defaultValue="0" className="w-16 px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-center focus:outline-none focus:border-[#10b981]" />
            <span className="text-xs text-slate-600">menit</span>
            <span className="text-[11px] text-slate-400 ml-2">Contoh: jadwal mulai 07:00 dengan toleransi 0 menit → presensi sampai 07:00 masih dihitung tepat waktu.</span>
          </div>
        </div>

        {/* Koordinat & Radius Absen */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-800">Koordinat & Radius Absen</p>
          <p className="text-[11px] text-slate-400">
            Selama titik koordinatnya terisi, guru hanya bisa mengisi absen dari dalam radius ini — absen dari luar area ditolak server, bukan cuma diperingatkan. Kosongkan titiknya kalau sekolah tidak ingin membatasi lokasi absen. Perubahan baru berlaku setelah Simpan Pengaturan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div>
              <label className="text-[10px] text-slate-400 font-medium block mb-1">Latitude</label>
              <input type="text" defaultValue="-6.208800" className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-[#10b981]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-medium block mb-1">Longitude</label>
              <input type="text" defaultValue="106.845600" className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-[#10b981]" />
            </div>
            <div>
              <label className="text-[10px] text-slate-400 font-medium block mb-1">Radius (meter)</label>
              <input type="text" defaultValue="100" className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-[#10b981]" />
            </div>
          </div>
          <button className="flex items-center gap-1.5 text-xs text-[#10b981] font-medium border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-emerald-50/50 transition pt-1">
            <MapPin className="w-3.5 h-3.5" />
            Pakai lokasi perangkat ini
          </button>
          <p className="text-[11px] text-slate-400 pt-1">Latitude & longitude masih kosong — absen bisa diisi dari mana saja sampai titiknya diisi.</p>
        </div>

        {/* Ambang Kemiripan Wajah Absen */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-800">Ambang Kemiripan Wajah Absen</p>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Aplikasi guru membandingkan selfie absen dengan foto profil guru di perangkat, lalu menandai absen yang kemiripannya di bawah ambang ini. Absennya tetap tercatat — wajah yang berbeda bukan alasan menolak kehadiran — tapi angkanya disorot kuning di laporan presensi guru supaya bisa ditelusuri. Rentang yang masuk akal 10% - 90%; terlalu lunak menyorot hampir semua absen, terlalu ketat membuat tidak ada satu pun yang tersorot.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <input type="text" defaultValue="36.3" className="w-20 px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-center font-mono focus:outline-none focus:border-[#10b981]" />
            <span className="text-xs text-slate-600">% kemiripan</span>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            Selfie dengan kemiripan 26% akan ditandai di laporan, sedangkan 46% lolos tanpa catatan. Bawaan 36.3% adalah ambang resmi model wajah. Perubahan baru berlaku setelah Simpan Pengaturan.
          </p>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4 border-t border-slate-100">
          <button className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-sm transition">
            Simpan Pengaturan
          </button>
        </div>
      </div>

      {/* 3. Jenis Absen Custom */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <Sliders className="w-4 h-4 text-[#10b981]" />
            <span>Jenis Absen Custom</span>
          </div>
          <button className="flex items-center gap-1.5 bg-[#10b981] hover:bg-[#059669] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition">
            <Plus className="w-3.5 h-3.5" />
            Tambah Baru
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
              <th className="py-2.5 px-2 w-12">NO</th>
              <th className="py-2.5 px-2">NAMA</th>
              <th className="py-2.5 px-2">DESKRIPSI</th>
              <th className="py-2.5 px-2">JADWAL</th>
              <th className="py-2.5 px-2 text-right">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
            <tr>
              <td className="py-3 px-2 font-medium">1</td>
              <td className="py-3 px-2 font-semibold text-slate-800">Gotong Royong</td>
              <td className="py-3 px-2 text-slate-400">-</td>
              <td className="py-3 px-2">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600 font-medium">Sabtu 07:00</span>
              </td>
              <td className="py-3 px-2 text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <button className="p-1 text-slate-400 hover:text-emerald-600 rounded"><Edit className="w-3.5 h-3.5" /></button>
                  <button className="p-1 text-slate-400 hover:text-red-500 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 4. GANTI PASSWORD VIEW
// ----------------------------------------------------------------------
export function GantiPasswordView() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-5">
      <PageTitle
        title="Ganti Password"
        subtitle="Ubah password akun admin yang sedang dipakai"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Left Column: Form Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-5">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <Key className="w-4 h-4 text-[#10b981]" />
            <span>Password Akun</span>
          </div>

          {/* Account Box */}
          <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100 space-y-0.5">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">AKUN YANG DIUBAH</span>
            <p className="text-xs font-bold text-slate-800">demo</p>
            <p className="text-[11px] text-slate-400">SMP N RND 1 PKU</p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Password Saat Ini</label>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  className="w-full px-3 py-2 border border-[#10b981] rounded-lg text-xs focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showCurrent ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Password Baru</label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#10b981]"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showNew ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Ulangi Password Baru</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#10b981]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirm ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Validation Guidelines */}
          <div className="p-3.5 bg-slate-50/50 rounded-xl border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Circle className="w-3 h-3 text-slate-300" />
              <span>Minimal 8 karakter</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Circle className="w-3 h-3 text-slate-300" />
              <span>Maksimal 72 karakter</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Circle className="w-3 h-3 text-slate-300" />
              <span>Berbeda dari password saat ini</span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-2">
            <button className="text-xs font-semibold text-slate-500 hover:text-slate-700 transition">
              Bersihkan
            </button>
            <button className="flex items-center gap-1.5 bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition">
              <Key className="w-3.5 h-3.5" />
              Simpan Password Baru
            </button>
          </div>
        </div>

        {/* Right Column: Info Panel Card */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span>Sebelum Mengganti</span>
          </div>

          <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
            <p>
              Password lama wajib diisi supaya sesi yang terbuka di perangkat ini tidak cukup untuk mengganti password akun. Pencocokannya dilakukan di server.
            </p>
            <p>
              Password disimpan dalam bentuk hash bcrypt, jadi password lamanya tidak bisa ditampilkan kembali — kalau lupa, gantinya lewat akun admin lain atau skrip pembuatan akun di server.
            </p>
            <p>
              Sesi yang sedang berjalan tidak ikut diputus. Di perangkat lain yang masih login, gunakan tombol Keluar bila sekolah ingin memutusnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
