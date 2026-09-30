"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  FileSpreadsheet,
  Edit2,
  Trash2,
  Eye,
  HandHeart,
  Filter,
  RotateCcw,
  Building2,
  User,
  Lock,
  Fingerprint,
  Upload,
  CheckCircle2,
  KeyRound,
  ArrowUpDown,
  Calendar,
  Tag,
} from "lucide-react";

// Header Halaman dengan Breadcrumb
function PageHeader({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      <p className="text-xs text-slate-400 mt-0.5">{breadcrumb}</p>
    </div>
  );
}

{/* ================= MANAJEMEN KAS ================= */}
export function ManajemenKas() {
  const [activeTab, setActiveTab] = useState<"akun" | "transaksi">("akun");

  return (
    <div className="space-y-4">
      <PageHeader title="Manajemen Kas" breadcrumb="Home › Manajemen Kas" />

      {/* Switch Sub-Tab */}
      <div className="inline-flex p-1 bg-slate-200/60 rounded-full text-xs font-semibold text-slate-600">
        <button
          onClick={() => setActiveTab("akun")}
          className={`px-5 py-1.5 rounded-full transition cursor-pointer ${
            activeTab === "akun"
              ? "bg-white text-[#3EB682] shadow-sm font-bold"
              : "hover:text-slate-900"
          }`}
        >
          Akun
        </button>
        <button
          onClick={() => setActiveTab("transaksi")}
          className={`px-5 py-1.5 rounded-full transition cursor-pointer ${
            activeTab === "transaksi"
              ? "bg-white text-[#3EB682] shadow-sm font-bold"
              : "hover:text-slate-900"
          }`}
        >
          Transaksi Kas
        </button>
      </div>

      {/* TAB 1: AKUN */}
      {activeTab === "akun" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#34a072] transition cursor-pointer shadow-sm">
              <Plus className="w-4 h-4" />
              Tambah Akun
            </button>
            <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#34a072] transition cursor-pointer shadow-sm">
              <FileSpreadsheet className="w-4 h-4" />
              Export ke Excel
            </button>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-semibold text-[#3EB682]">
              <Filter className="w-4 h-4" />
              Filter Akun:
            </div>
            <input
              type="text"
              placeholder="Kode Akun"
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682] w-32"
            />
            <input
              type="text"
              placeholder="Nama Akun"
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682] w-48"
            />
            <input
              type="text"
              placeholder="Keterangan"
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682] w-52"
            />
            <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]">
              <option>Semua Saldo</option>
            </select>
            <button className="flex items-center gap-1 bg-[#3EB682] text-white px-4 py-1.5 rounded-xl font-medium hover:bg-[#34a072] transition cursor-pointer">
              <Search className="w-3.5 h-3.5" /> Terapkan
            </button>
            <button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium hover:bg-slate-200 transition cursor-pointer">
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Tabel Akun */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3.5">
                    <div className="flex items-center gap-1">No <ArrowUpDown className="w-3 h-3 text-slate-400" /></div>
                  </th>
                  <th className="p-3.5">
                    <div className="flex items-center gap-1">Kode Akun <ArrowUpDown className="w-3 h-3 text-slate-400" /></div>
                  </th>
                  <th className="p-3.5">
                    <div className="flex items-center gap-1">Nama Akun <ArrowUpDown className="w-3 h-3 text-slate-400" /></div>
                  </th>
                  <th className="p-3.5">Keterangan</th>
                  <th className="p-3.5">Balance</th>
                  <th className="p-3.5 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["1", "001", "Payroll", "Gaji Karyawan", "Rp 0", "normal"],
                  ["2", "002", "Operasional", "Operasional", "Rp -500.000", "negative"],
                  ["3", "0056", "Token Listrik", "Token Listrik", "Rp -1.000.000", "negative"],
                  ["4", "010", "Tabungan Siswa SMP Teknologi", "Tabungan Siswa SMP Teknologi", "Rp 9.775.000", "positive"],
                  ["5", "102958", "Uang OSIS", "Dibayar mingguan", "Rp 1.354.999", "positive"],
                  ["6", "111", "Dana di Rek BSI", "REK PONDOK BSI", "Rp 0", "normal"],
                  ["7", "1222", "Dana Gaji Guru", "payroll", "Rp 0", "normal"],
                  ["8", "1223", "Dana Operasional", "ops", "Rp 99.950.000", "positive"],
                  ["9", "1234", "Akun Wakaf", "Donasi Cash", "Rp 0", "normal"],
                  ["10", "567810", "Dana BOS 2027", "Deskripsi Dana Bos 2027", "Rp 95.160.000", "positive"],
                ].map(([no, kode, nama, ket, balance, status], idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3.5 font-medium text-slate-500">{no}</td>
                    <td className="p-3.5">{kode}</td>
                    <td className="p-3.5 font-semibold text-slate-800">{nama}</td>
                    <td className="p-3.5 text-slate-500">{ket}</td>
                    <td className={`p-3.5 font-semibold ${
                      status === "positive" ? "text-[#3EB682]" : status === "negative" ? "text-rose-500" : "text-sky-600"
                    }`}>
                      {balance}
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-slate-400 hover:text-sky-600"><Edit2 className="w-3.5 h-3.5" /></button>
                        <button className="text-slate-400 hover:text-rose-500"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: TRANSAKSI KAS */}
      {activeTab === "transaksi" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#34a072] transition cursor-pointer shadow-sm">
              <Plus className="w-4 h-4" />
              Tambah Transaksi
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari transaksi..."
                  className="pl-9 pr-4 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682] w-56"
                />
              </div>
              <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#34a072] transition cursor-pointer shadow-sm">
                <FileSpreadsheet className="w-4 h-4" />
                Export ke Excel
              </button>
            </div>
          </div>

          {/* Filter Bar Transaksi */}
          <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#3EB682]" /> Tanggal:
            </div>
            <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />
            <span className="text-slate-400">-</span>
            <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />
            
            <div className="flex items-center gap-1.5 text-slate-500 font-medium ml-2">
              <Tag className="w-3.5 h-3.5 text-[#3EB682]" /> Jenis:
            </div>
            <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white">
              <option>Semua</option>
            </select>

            <button className="flex items-center gap-1 bg-[#3EB682] text-white px-4 py-1.5 rounded-xl font-medium hover:bg-[#34a072] transition cursor-pointer">
              <Search className="w-3.5 h-3.5" /> Terapkan
            </button>
            <button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium hover:bg-slate-200 transition cursor-pointer">
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Tabel Transaksi Kas */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3.5">No</th>
                  <th className="p-3.5">Tanggal</th>
                  <th className="p-3.5">Akun</th>
                  <th className="p-3.5">Deskripsi</th>
                  <th className="p-3.5">C/D</th>
                  <th className="p-3.5 text-right">Nominal</th>
                  <th className="p-3.5">Sumber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["1", "Jumat, 25 September 2026", "Tagihan Siswa", "(2 tagihan) a.n Aisyah Maulana", "C (Credit)", "Rp 17.000", "BILLING"],
                  ["2", "Jumat, 25 September 2026", "Tagihan Siswa", "(1 tagihan) a.n Freddy Mercuree", "C (Credit)", "Rp 500.001", "BILLING"],
                  ["3", "Kamis, 17 September 2026", "Tagihan Siswa", "(2 tagihan) a.n Freddy Mercuree", "C (Credit)", "Rp 4.400.000", "BILLING"],
                  ["4", "Senin, 14 September 2026", "Tagihan Siswa", "(1 tagihan) a.n Maya Ramadhan", "C (Credit)", "Rp 2.200.000", "BILLING"],
                  ["5", "Senin, 14 September 2026", "Tagihan Siswa", "(1 tagihan) a.n Maya Ramadhan", "C (Credit)", "Rp 2.200.000", "BILLING"],
                ].map(([no, tgl, akun, desk, cd, nominal, sumber], idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3.5 font-medium text-slate-500">{no}</td>
                    <td className="p-3.5">{tgl}</td>
                    <td className="p-3.5 font-bold text-slate-800">{akun}</td>
                    <td className="p-3.5 text-slate-600">{desk}</td>
                    <td className="p-3.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-[#3EB682]">
                        {cd}
                      </span>
                    </td>
                    <td className="p-3.5 text-right font-semibold text-slate-800">{nominal}</td>
                    <td className="p-3.5 text-slate-500 font-medium">{sumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-3.5 text-xs text-slate-500 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <span>Menampilkan 1 - 5 dari 117 Data</span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs">‹ Sebelumnya</button>
                <span className="text-[#3EB682] font-semibold">Halaman 1 dari 24</span>
                <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs">Selanjutnya ›</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{/* ================= FUNDRAISING ================= */}
export function FundraisingView() {
  return (
    <div className="space-y-4">
      <PageHeader title="Fundraising" breadcrumb="Home › Fundraising" />

      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#34a072] transition cursor-pointer shadow-sm">
          <Plus className="w-4 h-4" />
          Tambah Program
        </button>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari program..."
            className="pl-9 pr-4 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682] w-64"
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-600">
        <span className="text-slate-500 font-medium">Status:</span>
        <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white"><option>Semua</option></select>

        <span className="text-slate-500 font-medium ml-2">Dari:</span>
        <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />

        <span className="text-slate-500 font-medium ml-2">Sampai:</span>
        <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />

        <span className="text-slate-500 font-medium ml-2">Progres:</span>
        <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white"><option>Semua</option></select>

        <button className="flex items-center gap-1 bg-[#3EB682] text-white px-4 py-1.5 rounded-xl font-medium hover:bg-[#34a072] transition cursor-pointer">
          <Search className="w-3.5 h-3.5" /> Terapkan
        </button>
        <button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium hover:bg-slate-200 transition cursor-pointer">
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Tabel Fundraising */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
            <tr>
              <th className="p-3.5">No</th>
              <th className="p-3.5">Kode Program</th>
              <th className="p-3.5">Nama Program</th>
              <th className="p-3.5">Masa Program</th>
              <th className="p-3.5">Target</th>
              <th className="p-3.5">Terkumpul</th>
              <th className="p-3.5">Progres</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {[
              ["1", "DON-13-1788853973231", "Pembangunan Masjid Sekolah", "09/09/2026 - 19/09/2026", "Rp 500.000.000", "Rp 0", 0, "Draft"],
              ["2", "DON-12-1788494218039", "Uang Pembangunan Mushola", "01/09/2026 - 31/01/2027", "Rp 100.000.000", "Rp 0", 0, "Draft"],
              ["3", "DON-11-1787281745128", "Uang Pembangunan Mushola", "01/08/2026 - 31/12/2026", "Rp 150.000.000", "Rp 0", 0, "Draft"],
              ["4", "DON-9-1781942445699", "Wakaf Produktif", "20/06/2026 - 20/01/2027", "Rp 100.000.000", "Rp 250.000", 0, "Aktif"],
              ["5", "DON-8-1778172686733", "10 Ekor Ternak Qurban", "06/05/2026 - 08/07/2026", "Rp 150.000.000", "Rp 0", 0, "Berakhir"],
              ["6", "DON-7-1778172581832", "Study Tour Sumbar 2026", "06/05/2026 - 08/07/2026", "Rp 250.000.000", "Rp 1.000.000", 0, "Berakhir"],
              ["7", "DON-6-1778138105233", "Bantuan Sekolah Untuk Rangga", "01/05/2026 - 30/05/2026", "Rp 500.000", "Rp 18.000", 4, "Berakhir"],
              ["8", "DON-1-1775401761263", "Pembangunan Masjid Sekolah", "31/03/2026 - 29/04/2028", "Rp 25.000.000", "Rp 22.250.000", 89, "Aktif"],
            ].map(([no, kode, nama, masa, target, terkumpul, pct, status], idx) => (
              <tr key={idx} className="hover:bg-slate-50/70">
                <td className="p-3.5 font-medium text-slate-500">{no}</td>
                <td className="p-3.5 font-mono text-[10px] text-slate-500">{kode}</td>
                <td className="p-3.5">
                  <div className="font-semibold text-slate-800">{nama}</div>
                  <div className="text-[10px] text-slate-400">by Argeomerta</div>
                </td>
                <td className="p-3.5 text-slate-600">{masa}</td>
                <td className="p-3.5 font-medium">{target}</td>
                <td className="p-3.5 font-medium">{terkumpul}</td>
                <td className="p-3.5 w-36">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1 overflow-hidden">
                    <div className="bg-[#3EB682] h-1.5 rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-400">{pct}% terkumpul</span>
                </td>
                <td className="p-3.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      status === "Aktif"
                        ? "bg-emerald-100 text-[#3EB682]"
                        : status === "Draft"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-rose-100 text-rose-500"
                    }`}
                  >
                    {status}
                  </span>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center justify-center gap-1.5">
                    <button className="text-slate-400 hover:text-sky-600"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="text-slate-400 hover:text-[#3EB682]"><HandHeart className="w-3.5 h-3.5" /></button>
                    <button className="text-slate-400 hover:text-sky-600"><Edit2 className="w-3.5 h-3.5" /></button>
                    <button className="text-slate-400 hover:text-rose-500"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-3.5 text-xs text-slate-500 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <span>Menampilkan 1 - 8 dari 8 data</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs">‹ Sebelumnya</button>
            <span className="text-[#3EB682] font-semibold">Halaman 1 dari 1</span>
            <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs">Selanjutnya ›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ================= JURNAL ================= */}
export function JurnalView() {
  const [activeTab, setActiveTab] = useState<"kas" | "fundraising">("kas");

  return (
    <div className="space-y-4">
      <PageHeader title="Jurnal" breadcrumb="Home › Jurnal Kas" />

      {/* Switch Sub-Tab Jurnal */}
      <div className="inline-flex p-1 bg-slate-200/60 rounded-full text-xs font-semibold text-slate-600">
        <button
          onClick={() => setActiveTab("kas")}
          className={`px-5 py-1.5 rounded-full transition cursor-pointer ${
            activeTab === "kas"
              ? "bg-white text-[#3EB682] shadow-sm font-bold"
              : "hover:text-slate-900"
          }`}
        >
          Jurnal Kas
        </button>
        <button
          onClick={() => setActiveTab("fundraising")}
          className={`px-5 py-1.5 rounded-full transition cursor-pointer ${
            activeTab === "fundraising"
              ? "bg-white text-[#3EB682] shadow-sm font-bold"
              : "hover:text-slate-900"
          }`}
        >
          Jurnal Fundraising
        </button>
      </div>

      {/* JURNAL KAS */}
      {activeTab === "kas" && (
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#3EB682]" /> Tanggal:
            </span>
            <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />
            <span className="text-slate-400">s/d</span>
            <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />

            <span className="text-slate-500 font-medium ml-2">Jenis:</span>
            <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white"><option>Semua</option></select>

            <span className="text-slate-500 font-medium ml-2">Cari:</span>
            <input type="text" placeholder="Akun/Deskripsi..." className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-40 bg-white" />

            <button className="flex items-center gap-1 bg-[#3EB682] text-white px-4 py-1.5 rounded-xl font-medium hover:bg-[#34a072] transition cursor-pointer">
              Terapkan Filter
            </button>
            <button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium hover:bg-slate-200 transition cursor-pointer">
              Reset
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3.5">No</th>
                  <th className="p-3.5">Tanggal</th>
                  <th className="p-3.5">Akun</th>
                  <th className="p-3.5">Deskripsi</th>
                  <th className="p-3.5">C/D</th>
                  <th className="p-3.5">Sumber</th>
                  <th className="p-3.5 text-right">Nominal</th>
                  <th className="p-3.5 text-right">Saldo Awal</th>
                  <th className="p-3.5 text-right">Saldo Akhir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["1", "13/09/2026, 14.43", "-", "Penarikan dana Ontuition ke kas sekolah - INV-WD-20260913214309-4193", "Credit", "ONTUITION_WITHDRAWAL", "Rp 1.000", "Rp -11.491.998", "Rp -11.490.998"],
                  ["2", "04/09/2026, 03.50", "Operasional\n002", "Token Listrik gedung depan", "Debit", "System", "Rp 500.000", "Rp 0", "Rp -500.000"],
                  ["3", "21/08/2026, 03.16", "Tabungan Siswa SMP Teknologi\n010", "SPP atas nama Ani", "Debit", "System", "Rp 225.000", "Rp 10.000.000", "Rp 9.775.000"],
                  ["4", "21/08/2026, 03.15", "Tabungan Siswa SMP Teknologi\n010", "Akumulasi Tabungan siswa SMP kelas 7,8 dan 9", "Credit", "Admin", "Rp 10.000.000", "Rp 0", "Rp 10.000.000"],
                  ["5", "21/08/2026, 03.05", "Token Listrik\n0056", "Pembayaran Token Listrik", "Debit", "System", "Rp 1.000.000", "Rp 0", "Rp -1.000.000"],
                ].map(([no, tgl, akun, desk, cd, sumber, nominal, saldoAwal, saldoAkhir], idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3.5 font-medium text-slate-500">{no}</td>
                    <td className="p-3.5 whitespace-nowrap">{tgl}</td>
                    <td className="p-3.5 whitespace-pre-line font-medium text-slate-800">{akun}</td>
                    <td className="p-3.5 text-slate-600 max-w-xs">{desk}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        cd === "Credit" ? "bg-emerald-100 text-[#3EB682]" : "bg-rose-100 text-rose-500"
                      }`}>
                        {cd}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-500 font-medium">{sumber}</td>
                    <td className="p-3.5 text-right font-semibold text-slate-800">{nominal}</td>
                    <td className={`p-3.5 text-right font-medium ${saldoAwal.includes("-") ? "text-rose-500" : "text-[#3EB682]"}`}>{saldoAwal}</td>
                    <td className={`p-3.5 text-right font-medium ${saldoAkhir.includes("-") ? "text-rose-500" : "text-[#3EB682]"}`}>{saldoAkhir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-3.5 text-xs text-slate-500 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <span>Menampilkan 1 - 5 dari 24 Data</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs">‹ Sebelumnya</button>
                  <span className="text-[#3EB682] font-semibold">Halaman 1 dari 5</span>
                  <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs">Selanjutnya ›</button>
                </div>
                <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-3 py-1.5 rounded-xl font-semibold hover:bg-[#34a072]">
                  <FileSpreadsheet className="w-3.5 h-3.5" /> Export ke Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* JURNAL FUNDRAISING */}
      {activeTab === "fundraising" && (
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#3EB682]" /> Tanggal:
            </span>
            <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />
            <span className="text-slate-400">s/d</span>
            <input type="text" placeholder="mm / dd / yyyy" className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-32 bg-white" />

            <span className="text-slate-500 font-medium ml-2">Program:</span>
            <select className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white"><option>Semua Program</option></select>

            <span className="text-slate-500 font-medium ml-2">Cari:</span>
            <input type="text" placeholder="Donatur/Sumber..." className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs w-40 bg-white" />

            <button className="flex items-center gap-1 bg-[#3EB682] text-white px-4 py-1.5 rounded-xl font-medium hover:bg-[#34a072] transition cursor-pointer">
              Terapkan Filter
            </button>
            <button className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl font-medium hover:bg-slate-200 transition cursor-pointer">
              Reset
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3.5">No</th>
                  <th className="p-3.5">Tanggal</th>
                  <th className="p-3.5">Donatur</th>
                  <th className="p-3.5">Sumber</th>
                  <th className="p-3.5">Kode Program</th>
                  <th className="p-3.5">Nama Program</th>
                  <th className="p-3.5 text-right">Nominal</th>
                  <th className="p-3.5 text-right">Saldo Awal</th>
                  <th className="p-3.5 text-right">Saldo Akhir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["1", "20/06/2026, 08.15", "asdas", "VA", "DON-7-1778172581832", "Study Tour Sumbar 2026", "Rp 500.000", "Rp 500.000", "Rp 1.000.000"],
                  ["2", "20/06/2026, 08.10", "rddsad", "VA", "DON-9-1781942445699", "Wakaf Produktif", "Rp 250.000", "Rp 0", "Rp 250.000"],
                  ["3", "11/05/2026, 06.36", "Pindy", "VA", "DON-7-1778172581832", "Study Tour Sumbar 2026", "Rp 500.000", "Rp 0", "Rp 500.000"],
                  ["4", "07/05/2026, 14.40", "ridho", "VA", "DON-6-1778138105233", "Bantuan Sekolah Untuk Rangga", "Rp 13.000", "Rp 5.000", "Rp 18.000"],
                  ["5", "07/05/2026, 14.23", "ego", "Va", "DON-1-1775401761263", "Pembangunan Masjid Sekolah", "Rp 100.000", "Rp 0", "Rp 100.000"],
                  ["6", "07/05/2026, 07.18", "Benjamin", "mpm", "DON-6-1778138105233", "Bantuan Sekolah Untuk Rangga", "Rp 5.000", "Rp 0", "Rp 5.000"],
                ].map(([no, tgl, donatur, sumber, kode, nama, nominal, saldoAwal, saldoAkhir], idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="p-3.5 font-medium text-slate-500">{no}</td>
                    <td className="p-3.5 whitespace-nowrap">{tgl}</td>
                    <td className="p-3.5 font-bold text-slate-800">{donatur}</td>
                    <td className="p-3.5 text-slate-500">{sumber}</td>
                    <td className="p-3.5 font-mono text-[10px] text-slate-500">{kode}</td>
                    <td className="p-3.5 font-medium">{nama}</td>
                    <td className="p-3.5 text-right font-semibold text-slate-800">{nominal}</td>
                    <td className="p-3.5 text-right font-medium text-[#3EB682]">{saldoAwal}</td>
                    <td className="p-3.5 text-right font-medium text-[#3EB682]">{saldoAkhir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-3.5 text-xs text-slate-500 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <span>Menampilkan 1 - 6 dari 6 Data</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs">‹ Sebelumnya</button>
                  <span className="text-[#3EB682] font-semibold">Halaman 1 dari 1</span>
                  <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs">Selanjutnya ›</button>
                </div>
                <button className="flex items-center gap-1.5 bg-[#3EB682] text-white px-3 py-1.5 rounded-xl font-semibold hover:bg-[#34a072]">
                  <FileSpreadsheet className="w-3.5 h-3.5" /> Export ke Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{/* ================= PENGATURAN ================= */}
export function JurnalPengaturan() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Pengaturan</h1>
        <p className="text-xs text-slate-400 mt-0.5">Kelola konfigurasi aplikasi dan profil Anda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        {/* CARD 1: Profil Institusi */}
        <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4">
          <div className="flex items-center gap-2 text-[#3EB682] font-bold text-xs">
            <Building2 className="w-4 h-4" />
            <span>Profil Institusi</span>
          </div>

          <div className="space-y-3">
            <span className="text-[11px] font-semibold text-slate-600 block">Logo Institusi</span>
            <div className="border border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center text-slate-400">
              <Upload className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-[10px]">Klik untuk upload logo sekolah</p>
              <p className="text-[9px] text-slate-300">Format: JPG, PNG (Max 2MB)</p>
            </div>
            <button className="w-full py-2 rounded-xl bg-[#3EB682] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#34a072] transition">
              <Upload className="w-3.5 h-3.5" /> Upload Logo
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium pt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Logo institusi berhasil diupload!</span>
          </div>
        </div>

        {/* CARD 2: Profil Pengguna */}
        <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4">
          <div className="flex items-center gap-2 text-[#3EB682] font-bold text-xs">
            <User className="w-4 h-4" />
            <span>Profil Pengguna</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-[#3EB682] font-bold text-xs border border-emerald-200">
              orion
            </div>
            <div className="border border-dashed border-slate-200 rounded-xl p-3 w-full text-center text-slate-400">
              <p className="text-[10px]">Klik untuk upload foto profil</p>
              <p className="text-[9px] text-slate-300">Format: JPG, PNG (Max 2MB)</p>
            </div>
            <button className="w-full py-2 rounded-xl bg-[#3EB682] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#34a072] transition">
              <Upload className="w-3.5 h-3.5" /> Upload Avatar
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            <div>
              <label className="text-slate-600 text-[11px] font-medium">Nama Lengkap</label>
              <input
                type="text"
                defaultValue="Argeomerta"
                className="mt-1 w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
              />
            </div>
            <div>
              <label className="text-slate-600 text-[11px] font-medium">Email</label>
              <input
                type="email"
                defaultValue="argeomerta@gmail.com"
                className="mt-1 w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
              />
            </div>
            <div>
              <label className="text-slate-600 text-[11px] font-medium">Nomor Telepon</label>
              <input
                type="text"
                defaultValue="6285264397615"
                className="mt-1 w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
              />
            </div>
            <button className="w-full py-2 rounded-xl bg-[#3EB682] text-white text-xs font-semibold hover:bg-[#34a072] transition mt-1">
              Simpan Perubahan
            </button>
          </div>
        </div>

        {/* CARD 3: Ubah Password */}
        <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4">
          <div className="flex items-center gap-2 text-[#3EB682] font-bold text-xs">
            <Lock className="w-4 h-4" />
            <span>Ubah Password</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-600 text-[11px] font-medium">Password Lama</label>
              <input
                type="password"
                placeholder="Masukkan password lama"
                className="mt-1 w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
              />
            </div>
            <div>
              <label className="text-slate-600 text-[11px] font-medium">Password Baru</label>
              <input
                type="password"
                placeholder="Minimal 6 karakter"
                className="mt-1 w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
              />
            </div>
            <div>
              <label className="text-slate-600 text-[11px] font-medium">Konfirmasi Password Baru</label>
              <input
                type="password"
                placeholder="Ulangi password baru"
                className="mt-1 w-full px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
              />
            </div>
            <button className="w-full py-2 rounded-xl bg-[#3EB682] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#34a072] transition">
              <KeyRound className="w-3.5 h-3.5" /> Ubah Password
            </button>
          </div>
        </div>

        {/* CARD 4: Pengaturan PIN */}
        <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4">
          <div className="flex items-center gap-2 text-[#3EB682] font-bold text-xs">
            <Fingerprint className="w-4 h-4" />
            <span>Pengaturan PIN</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="text-slate-600 text-[11px] font-medium">PIN Transaksi</label>
              <div className="grid grid-cols-6 gap-1.5 mt-1">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    type="password"
                    maxLength={1}
                    className="w-full h-8 text-center rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
                  />
                ))}
              </div>
              <p className="text-[9px] text-slate-400 mt-1">
                ⓘ PIN terdiri dari 6 digit angka. Gunakan untuk verifikasi transaksi penting.
              </p>
            </div>

            <div>
              <label className="text-slate-600 text-[11px] font-medium">Konfirmasi PIN</label>
              <div className="grid grid-cols-6 gap-1.5 mt-1">
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    type="password"
                    maxLength={1}
                    className="w-full h-8 text-center rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-[#3EB682]"
                  />
                ))}
              </div>
            </div>

            <button className="w-full py-2 rounded-xl bg-[#3EB682] text-white text-xs font-semibold hover:bg-[#34a072] transition">
              Simpan PIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}