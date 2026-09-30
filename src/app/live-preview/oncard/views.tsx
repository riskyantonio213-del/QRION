"use client";

import {
  Plus,
  Search,
  CheckCircle,
  XCircle,
  Send,
  Lock,Eye, Check,
  Landmark,
  Store,
  User,
  BookOpen,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  ShieldCheck,
  CreditCard,
  ArrowLeftRight,
  Clock,
  Banknote,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Shield,
  Pencil,
  FileSpreadsheet,
  Users,
  Plug,
  MoreVertical,
  Download,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* REUSABLE UI COMPONENTS                                                     */
/* -------------------------------------------------------------------------- */

function PageHeader({
  title,
  subtitle,
  actionText = "Tambah Baru",
  onAction,
  showAction = true,
}: {
  title: string;
  subtitle?: string;
  actionText?: string;
  onAction?: () => void;
  showAction?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {showAction && (
        <button
          onClick={onAction}
          className="flex items-center gap-2 bg-[#0E8345] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#0b6b38] transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          {actionText}
        </button>
      )}
    </div>
  );
}

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
      />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isSuccess =
    status === "Aktif" || status === "Berhasil" || status === "Selesai";
  const isPending = status === "Pending" || status === "Proses";

  if (isSuccess) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#EBF6F1] text-[#0E8345]">
        <CheckCircle className="w-3.5 h-3.5" />
        {status}
      </span>
    );
  }

  if (isPending) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-600">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        {status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-500">
      <XCircle className="w-3.5 h-3.5" />
      {status}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* MANAJEMEN VIEWS                                                            */
/* -------------------------------------------------------------------------- */


export function OncardTransfer() {
  const hosts = [
    {
      name: "Admin Demo",
      username: "@admin",
      balance: "Rp 800.000",
      badge: "Saya",
    },
    {
      name: "Risky",
      username: "@risky",
      balance: "Rp 0",
      badge: "Admin",
    },
    {
      name: "Rispel",
      username: "@rispel",
      balance: "Rp 0",
      badge: "Admin",
    },
    {
      name: "Ustazah Dinda",
      username: "@dina123",
      balance: "Rp 0",
      badge: "Admin",
    },
    {
      name: "Ustazah Rini",
      username: "@rini147",
      balance: "Rp 0",
      badge: "Admin",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader & Button Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-medium">
          Kirim saldo antar akun Host di sistem QRION.
        </p>
        <button className="inline-flex items-center justify-center gap-2 bg-[#2D8A56] hover:bg-[#257348] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer self-start sm:self-auto">
          <Send className="w-3.5 h-3.5" />
          Transfer Saldo
        </button>
      </div>

      {/* Host Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hosts.map((host, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-200 transition"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 bg-[#EBF6F1] text-[#0E8345] rounded-xl">
                <Landmark className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#EBF6F1] text-[#0E8345]">
                {host.badge}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-sm">{host.name}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{host.username}</p>
              <div className="mt-3">
                <p className="text-lg font-bold text-slate-900">{host.balance}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Saldo tunai</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Riwayat Transfer Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {/* Header inside card */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Riwayat Transfer</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Catatan transfer saldo antar akun Host (dari jurnal adminHost)
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
            <ArrowLeftRight className="w-3 h-3" />
            0 transfer
          </span>
        </div>

        {/* Empty State */}
        <div className="py-16 px-4 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <ArrowLeftRight className="w-5 h-5 text-slate-400" />
          </div>
          <h3 className="font-semibold text-slate-800 text-sm">
            Belum ada riwayat transfer
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Lakukan transfer antar host untuk melihat riwayatnya.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}


export function OncardGantiPassword() {
  return (
    <div className="space-y-6 pb-8">
      {/* Subtitle / Deskripsi Atas */}
      <p className="text-xs text-slate-500 font-medium text-center">
        Perbarui password akun Host Anda secara berkala untuk keamanan.
      </p>

      <div className="max-w-xl mx-auto space-y-4">
        {/* Card Profil User */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F5338] text-white flex items-center justify-center font-bold text-xs shrink-0">
            AD
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Admin Demo</h3>
            <p className="text-[11px] text-slate-400">Super Admin · Host</p>
          </div>
        </div>

        {/* Card Form Password */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-4">
          {/* Password Lama */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Password Lama <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Masukkan password lama"
                className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 focus:border-[#0E8345]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Password Baru */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Password Baru <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Minimal 6 karakter"
                className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 focus:border-[#0E8345]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Konfirmasi Password Baru */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Konfirmasi Password Baru <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Ulangi password baru"
                className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 focus:border-[#0E8345]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            >
              Reset
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-[#2D8A56] hover:bg-[#257348] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              Simpan Password
            </button>
          </div>
        </div>

        {/* Card Tips Password Aman */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-start gap-3.5">
          <div className="p-2 bg-[#EBF6F1] text-[#0E8345] rounded-xl shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-800">Tips Password Aman</h4>
            <ul className="text-[11px] text-slate-500 space-y-0.5 list-disc list-inside">
              <li>Gunakan minimal 6 karakter</li>
              <li>Kombinasikan huruf besar, kecil, angka, dan simbol</li>
              <li>Hindari nama, tanggal lahir, atau kata umum</li>
              <li>Ganti password secara berkala (3 bulan sekali)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* WITHDRAW VIEWS                                                             */
/* -------------------------------------------------------------------------- */

export function OncardWithdrawInstitusi() {
  return (
    <div className="space-y-6 pb-8">
      {/* Header Description & Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-medium">
          Penarikan saldo QRION ke rekening institusi sekolah.
        </p>
        <button className="inline-flex items-center justify-center gap-1.5 bg-[#2D8A56] hover:bg-[#257348] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          Ajukan Withdraw
        </button>
      </div>

      {/* Date Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Dari</label>
          <input
            type="date"
            defaultValue="2026-09-01"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Hingga</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-[#EBF6F1] text-[#0E8345] flex items-center justify-center">
            <Landmark className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">-Rp 799.000</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Saldo tersedia untuk withdraw
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">Rp 0</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total withdraw berjalan (Menunggu + Diproses)
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-[#EBF6F1] text-[#0E8345] flex items-center justify-center">
            <Banknote className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">Rp 0</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total withdraw selesai
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-[#EBF6F1] text-[#0E8345] flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">Rp 0</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total withdraw pending (belum diproses)
            </p>
          </div>
        </div>
      </div>

      {/* Riwayat Withdraw Institusi Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">
              Riwayat Withdraw Institusi
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Daftar pengajuan penarikan saldo ke rekening institusi
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
            <Landmark className="w-3 h-3" />
            0 pengajuan
          </span>
        </div>

        {/* Empty State */}
        <div className="py-16 px-4 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <Landmark className="w-5 h-5 text-slate-400" />
          </div>
          <h3 className="font-semibold text-slate-800 text-sm">
            Belum ada pengajuan
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Belum ada penarikan saldo ke rekening institusi.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

export function OncardWithdrawMerchant() {
  const historyData = [
    {
      merchant: "Kantin Boria",
      tanggal: "2 Sep 2026, 13.00",
      status: "Selesai",
      nominal: "Rp 2.000",
    },
    {
      merchant: "Kantin Boria",
      tanggal: "2 Sep 2026, 12.38",
      status: "Selesai",
      nominal: "Rp 3.000",
    },
    {
      merchant: "Pencairan Dana Santri",
      tanggal: "1 Sep 2026, 15.05",
      status: "Selesai",
      nominal: "Rp 25.000",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader */}
      <p className="text-xs text-slate-500 font-medium">
        Penarikan saldo merchant (unit usaha) ke rekening masing-masing.
      </p>

      {/* Date Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Dari</label>
          <input
            type="date"
            defaultValue="2026-09-01"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Hingga</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-[#EBF6F1] text-[#0E8345] flex items-center justify-center">
            <Wallet className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">Rp 800.000</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Saldo host (Admin) saya
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">Rp 0</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total withdraw berjalan (Menunggu + Diproses)
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-[#EBF6F1] text-[#0E8345] flex items-center justify-center">
            <Banknote className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">Rp 30.000</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total withdraw selesai
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="w-8 h-8 rounded-xl bg-[#EBF6F1] text-[#0E8345] flex items-center justify-center">
            <Store className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-900">3</div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Total pengajuan withdraw
            </p>
          </div>
        </div>
      </div>

      {/* Riwayat Withdraw Merchant Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">
              Riwayat Withdraw Merchant
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Daftar pengajuan penarikan saldo merchant ke rekening masing-masing
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
            <Store className="w-3 h-3" />
            3 pengajuan
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-5">MERCHANT</th>
                <th className="py-3 px-5">TANGGAL</th>
                <th className="py-3 px-5">STATUS</th>
                <th className="py-3 px-5">NOMINAL</th>
                <th className="py-3 px-5">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {historyData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-3.5 px-5 font-bold text-slate-800">
                    {item.merchant}
                  </td>
                  <td className="py-3.5 px-5 text-slate-500">{item.tanggal}</td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#EBF6F1] text-[#0E8345]">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800">
                    {item.nominal}
                  </td>
                  <td className="py-3.5 px-5 text-slate-400">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Rows per page:</span>
            <div className="relative inline-block">
              <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 pr-6 text-[11px] font-medium focus:outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1-3 of 3</span>
            <div className="flex items-center gap-1 text-slate-400">
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* AKUN VIEWS                                                                 */
/* -------------------------------------------------------------------------- */

export function OncardAkunHost() {
  const hostList = [
    {
      initials: "AD",
      nama: "Admin Demo",
      username: "admin",
      role: "Super Admin",
      isSuperAdmin: true,
      saldo: "Rp 800.000",
      hasEdit: false,
    },
    {
      initials: "UD",
      nama: "Ustazah Dinda",
      username: "dina123",
      role: "Admin",
      isSuperAdmin: false,
      saldo: "Rp 0",
      hasEdit: true,
    },
    {
      initials: "R",
      nama: "Risky",
      username: "risky",
      role: "Admin",
      isSuperAdmin: false,
      saldo: "Rp 0",
      hasEdit: true,
    },
    {
      initials: "R",
      nama: "Rispel",
      username: "rispel",
      role: "Admin",
      isSuperAdmin: false,
      saldo: "Rp 0",
      hasEdit: true,
    },
    {
      initials: "UR",
      nama: "Ustazah Rini",
      username: "rini147",
      role: "Admin",
      isSuperAdmin: false,
      saldo: "Rp 0",
      hasEdit: true,
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader & Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-medium">
          Host adalah admin yang memegang manajemen sistem sekolah.
        </p>
        <button className="inline-flex items-center justify-center gap-1.5 bg-[#2D8A56] hover:bg-[#257348] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          Tambah Host
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {/* Card Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Daftar Akun Host</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Admin yang memegang manajemen sistem sekolah
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
            <Shield className="w-3 h-3" />
            5 akun
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-5">NAMA</th>
                <th className="py-3.5 px-5">USERNAME</th>
                <th className="py-3.5 px-5">ROLE</th>
                <th className="py-3.5 px-5">SALDO CASH</th>
                <th className="py-3.5 px-5 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {hostList.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EBF6F1] text-[#0E8345] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {item.initials}
                      </div>
                      <span className="font-bold text-slate-800">
                        {item.nama}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-slate-500 font-mono text-[11px]">
                    {item.username}
                  </td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                        item.isSuperAdmin
                          ? "bg-slate-100 text-slate-600 border border-slate-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5 text-slate-400" />
                      {item.saldo}
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-center">
                    {item.hasEdit ? (
                      <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer">
                        <Pencil className="w-4 h-4 mx-auto" />
                      </button>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

export function OncardAkunMerchant() {
  const merchantList = [
    {
      initials: "KB",
      nama: "Kantin Boria",
      saldo: "Rp 0",
      pendingWithdraw: "—",
      limitStatus: "Aktif",
      isAktif: true,
      adminName: "Dila",
      username: "boria",
    },
    {
      initials: "PD",
      nama: "Pencairan Dana Santri",
      saldo: "Rp 0",
      pendingWithdraw: "—",
      limitStatus: "Nonaktif",
      isAktif: false,
      adminName: "Bu Ani",
      username: "ani",
    },
    {
      initials: "S",
      nama: "Sukaria",
      saldo: "Rp 0",
      pendingWithdraw: "—",
      limitStatus: "Nonaktif",
      isAktif: false,
      adminName: "Dillaa",
      username: "kantinsukaria",
    },
    {
      initials: "KB",
      nama: "Kantin Berkah",
      saldo: "Rp 360.000",
      pendingWithdraw: "—",
      limitStatus: "Nonaktif",
      isAktif: false,
      adminName: "Eka / dila",
      username: "kantin-berkah / dila",
    },
    {
      initials: "KD",
      nama: "Kantin Developer",
      saldo: "Rp 0",
      pendingWithdraw: "—",
      limitStatus: "Aktif",
      isAktif: true,
      adminName: "Developer Kantin",
      username: "kantindev",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-medium">
          Daftar merchant (unit usaha) yang menerima pembayaran cashless di QRION.
        </p>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            Export Excel
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 bg-[#2D8A56] hover:bg-[#257348] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer">
            <Plus className="w-4 h-4" />
            Tambah Merchant
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {/* Card Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">
              Daftar Akun Merchant
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Merchant yang terhubung ke sistem QRION beserta saldonya
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
            <Store className="w-3 h-3" />
            5 merchant
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-5">MERCHANT</th>
                <th className="py-3.5 px-5">SALDO</th>
                <th className="py-3.5 px-5">PENDING WITHDRAW</th>
                <th className="py-3.5 px-5">GUNAKAN LIMIT</th>
                <th className="py-3.5 px-5">ADMIN / USERNAME</th>
                <th className="py-3.5 px-5 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {merchantList.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EBF6F1] text-[#0E8345] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {item.initials}
                      </div>
                      <span className="font-bold text-slate-800">
                        {item.nama}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5 text-slate-400" />
                      {item.saldo}
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-slate-400">
                    {item.pendingWithdraw}
                  </td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                        item.isAktif
                          ? "bg-[#EBF6F1] text-[#0E8345]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.limitStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="font-medium text-slate-800">
                      {item.adminName}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {item.username}
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-center">
                    <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer">
                      <Pencil className="w-4 h-4 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

export function OncardAkunUser() {
  const userList = [
    {
      no: 1,
      initials: "AM",
      nama: "Aisyah Maulana",
      subNama: "1",
      noTelp: "6285264397615",
      saldo: "Rp 525.000",
      limit: "Rp 50.000",
      terpakai: "Rp 0",
      userType: "student",
      cardStatus: "Connected",
      isConnected: true,
    },
    {
      no: 2,
      initials: "AF",
      nama: "Ananta Firdaus",
      subNama: "-",
      noTelp: "6282170659282",
      saldo: "Rp 17.000",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "student",
      cardStatus: null,
      isConnected: false,
    },
    {
      no: 3,
      initials: "AL",
      nama: "Andi Lestari",
      subNama: "-",
      noTelp: "6281330814628",
      saldo: "Rp 0",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "student",
      cardStatus: null,
      isConnected: false,
    },
    {
      no: 4,
      initials: "AP",
      nama: "Andi Pratama",
      subNama: "-",
      noTelp: "6285264397615",
      saldo: "Rp 0",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "host_ontuition",
      cardStatus: null,
      isConnected: false,
    },
    {
      no: 5,
      initials: "AF",
      nama: "Annesa Famella",
      subNama: "-",
      noTelp: "6282386857253",
      saldo: "Rp 0",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "teacher",
      cardStatus: "Not Connected",
      isConnected: false,
    },
    {
      no: 6,
      initials: "A",
      nama: "Argeomerta",
      subNama: "-",
      noTelp: "6285264397615",
      saldo: "Rp 0",
      limit: "Rp 25.000",
      terpakai: "Rp 0",
      userType: "host_jurnal",
      cardStatus: "Not Connected",
      isConnected: false,
    },
    {
      no: 7,
      initials: "DE",
      nama: "David Elnoventa",
      subNama: "-",
      noTelp: "6282365830522",
      saldo: "Rp 251.000",
      limit: "Rp 30.000",
      terpakai: "Rp 0",
      userType: "student",
      cardStatus: "Not Connected",
      isConnected: false,
    },
    {
      no: 8,
      initials: "EM",
      nama: "Eko M",
      subNama: "-",
      noTelp: "6285264397618",
      saldo: "Rp 0",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "teacher",
      cardStatus: "Not Connected",
      isConnected: false,
    },
    {
      no: 9,
      initials: "FN",
      nama: "Farhan Nugroho Aja",
      subNama: "-",
      noTelp: "6282172133370",
      saldo: "Rp 0",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "student",
      cardStatus: "Not Connected",
      isConnected: false,
    },
    {
      no: 10,
      initials: "FM",
      nama: "Freddy Mercuree",
      subNama: "-",
      noTelp: "6285264391100",
      saldo: "Rp 0",
      limit: "Rp 0",
      terpakai: "Rp 0",
      userType: "student",
      cardStatus: "Not Connected",
      isConnected: false,
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader Description */}
      <p className="text-xs text-slate-500 font-medium">
        Kelola user pengguna sistem QRION.
      </p>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {/* Card Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Daftar User</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Semua akun user yang terdaftar
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
              <Users className="w-3 h-3" />
              23 user
            </span>
            <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              Export Excel
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter nama, card ID, atau no. telp ortu..."
              className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 placeholder:text-slate-400"
            />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-slate-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-medium text-slate-700 focus:outline-none cursor-pointer">
              <option>Card Status: Semua</option>
              <option>Connected</option>
              <option>Not Connected</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">NO</th>
                <th className="py-3 px-4">NAMA</th>
                <th className="py-3 px-4">NO. TELP ORTU</th>
                <th className="py-3 px-4">SALDO</th>
                <th className="py-3 px-4">LIMIT</th>
                <th className="py-3 px-4">TERPAKAI</th>
                <th className="py-3 px-4">USER TYPE</th>
                <th className="py-3 px-4">CARD STATUS</th>
                <th className="py-3 px-4 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {userList.map((user) => (
                <tr key={user.no} className="hover:bg-slate-50/50 transition">
                  <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">
                    {user.no}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#EBF6F1] text-[#0E8345] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {user.initials}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">
                          {user.nama}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {user.subNama}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">
                    {user.noTelp}
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-800">
                    {user.saldo}
                  </td>
                  <td className="py-3 px-4 text-slate-500">{user.limit}</td>
                  <td className="py-3 px-4 text-slate-500">{user.terpakai}</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                      {user.userType}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {user.isConnected ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#EBF6F1] text-[#0E8345] border border-[#0E8345]/20">
                        <Plug className="w-3 h-3" />
                        Connected
                      </span>
                    ) : user.cardStatus ? (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-500">
                        {user.cardStatus}
                      </span>
                    ) : null}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer p-1">
                      <MoreVertical className="w-4 h-4 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Rows per page:</span>
            <div className="relative inline-block">
              <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 pr-6 text-[11px] font-medium focus:outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1-10 of 23</span>
            <div className="flex items-center gap-1 text-slate-400">
              <button
                disabled
                className="p-1 rounded hover:bg-slate-100 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded hover:bg-slate-100 text-slate-600 cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}
/* -------------------------------------------------------------------------- */
/* JURNAL VIEWS                                                               */
/* -------------------------------------------------------------------------- */


/* ==========================================================================
   1. JURNAL INSTITUSI
   ========================================================================== */
export function OncardJurnalInstitusi() {
  const jurnalData = [
    {
      tanggal: "24 Sep 2026, 09.23",
      keterangan: "Topup Saldo User: Ananta Firdaus oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 10.000",
      saldoAkhir: "-Rp 799.000",
    },
    {
      tanggal: "14 Sep 2026, 13.47",
      keterangan: "Withdraw saldo pendapatan",
      tipe: "Kredit",
      nominal: "+Rp 1.000",
      saldoAkhir: "-Rp 789.000",
    },
    {
      tanggal: "11 Sep 2026, 23.39",
      keterangan: "Topup Saldo User: Ananta Firdaus oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 10.000",
      saldoAkhir: "-Rp 790.000",
    },
    {
      tanggal: "7 Sep 2026, 14.26",
      keterangan: "Topup Saldo User: Aisyah Maulana oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 100.000",
      saldoAkhir: "-Rp 780.000",
    },
    {
      tanggal: "6 Sep 2026, 12.50",
      keterangan: "Topup Saldo User: David Elnoventa oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 50.000",
      saldoAkhir: "-Rp 680.000",
    },
    {
      tanggal: "6 Sep 2026, 12.19",
      keterangan: "Topup Saldo User: David Elnoventa oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 100.000",
      saldoAkhir: "-Rp 630.000",
    },
    {
      tanggal: "6 Sep 2026, 12.18",
      keterangan: "Topup Saldo User: David Elnoventa oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 30.000",
      saldoAkhir: "-Rp 530.000",
    },
    {
      tanggal: "4 Sep 2026, 11.34",
      keterangan: "Topup Saldo User: Aisyah Maulana oleh Admin: Admin Demo",
      tipe: "Debit",
      nominal: "-Rp 500.000",
      saldoAkhir: "-Rp 500.000",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader */}
      <p className="text-xs text-slate-500 font-medium">
        Catatan mutasi keuangan institusi: semua debit dan kredit di akun institusi sekolah.
      </p>

      {/* Filter Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Dari</label>
          <input
            type="date"
            defaultValue="2026-09-01"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Hingga</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        {/* Header Card */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Buku Jurnal Institusi</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Semua mutasi keuangan institusi sekolah di sistem QRION
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Export
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
              <BookOpen className="w-3 h-3" />
              8 entri
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-5">TANGGAL</th>
                <th className="py-3.5 px-5">KETERANGAN</th>
                <th className="py-3.5 px-5">TIPE</th>
                <th className="py-3.5 px-5">NOMINAL</th>
                <th className="py-3.5 px-5">SALDO AKHIR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {jurnalData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-3.5 px-5 text-slate-600 font-medium whitespace-nowrap">
                    {item.tanggal}
                  </td>
                  <td className="py-3.5 px-5 text-slate-800">{item.keterangan}</td>
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    {item.tipe === "Debit" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-600">
                        <ArrowDownLeft className="w-3 h-3" />
                        Debit
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600">
                        <ArrowUpRight className="w-3 h-3" />
                        Kredit
                      </span>
                    )}
                  </td>
                  <td
                    className={`py-3.5 px-5 font-bold whitespace-nowrap ${
                      item.tipe === "Debit" ? "text-rose-600" : "text-emerald-600"
                    }`}
                  >
                    {item.nominal}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800 whitespace-nowrap">
                    {item.saldoAkhir}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Rows per page:</span>
            <div className="relative inline-block">
              <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 pr-6 text-[11px] font-medium focus:outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1-8 of 8</span>
            <div className="flex items-center gap-1 text-slate-400">
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

/* ==========================================================================
   2. JURNAL PENDAPATAN
   ========================================================================== */
export function OncardJurnalPendapatan() {
  const jurnalPendapatanData = [
    {
      tanggal: "25 Sep 2026, 14.26",
      keterangan: "Infak transfer uang saku Transfer dari David ke David Elnoventa",
      tipe: "Kredit",
      nominal: "+Rp 3.000",
      saldoAkhir: "Rp 11.000",
    },
    {
      tanggal: "24 Sep 2026, 09.23",
      keterangan: "Admin topup di host",
      tipe: "Kredit",
      nominal: "+Rp 2.000",
      saldoAkhir: "Rp 8.000",
    },
    {
      tanggal: "15 Sep 2026, 08.16",
      keterangan: "Infak transfer uang saku Transfer dari Ridho ke Nadia Nugroho",
      tipe: "Kredit",
      nominal: "+Rp 3.000",
      saldoAkhir: "Rp 6.000",
    },
    {
      tanggal: "14 Sep 2026, 14.15",
      keterangan: "Infak transfer uang saku Transfer dari Ridho ke Aisyah Maulana",
      tipe: "Kredit",
      nominal: "+Rp 3.000",
      saldoAkhir: "Rp 3.000",
    },
    {
      tanggal: "14 Sep 2026, 13.47",
      keterangan: "Withdraw saldo pendapatan",
      tipe: "Debit",
      nominal: "-Rp 1.000",
      saldoAkhir: "Rp 0",
    },
    {
      tanggal: "11 Sep 2026, 23.39",
      keterangan: "Admin topup di host",
      tipe: "Kredit",
      nominal: "+Rp 1.000",
      saldoAkhir: "Rp 1.000",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader */}
      <p className="text-xs text-slate-500 font-medium">
        Catatan mutasi pendapatan institusi: semua debit dan kredit pada saldo pendapatan.
      </p>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-medium">Total Kredit</span>
            <div className="text-lg font-bold text-emerald-600">Rp 12.000</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <TrendingDown className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-medium">Total Debit</span>
            <div className="text-lg font-bold text-rose-600">Rp 1.000</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-medium">Saldo Pendapatan</span>
              <div className="text-lg font-bold text-blue-600">Rp 11.000</div>
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 bg-[#2D8A56] hover:bg-[#257348] text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer">
            <Wallet className="w-3.5 h-3.5" />
            Withdraw
          </button>
        </div>
      </div>

      {/* Filter Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Dari</label>
          <input
            type="date"
            defaultValue="2026-09-01"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Hingga</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Buku Jurnal Pendapatan</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Semua mutasi pendapatan institusi di sistem
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Export
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
              <BookOpen className="w-3 h-3" />
              6 entri
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-5">TANGGAL</th>
                <th className="py-3.5 px-5">KETERANGAN</th>
                <th className="py-3.5 px-5">TIPE</th>
                <th className="py-3.5 px-5">NOMINAL</th>
                <th className="py-3.5 px-5">SALDO AKHIR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {jurnalPendapatanData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-3.5 px-5 text-slate-600 font-medium whitespace-nowrap">
                    {item.tanggal}
                  </td>
                  <td className="py-3.5 px-5 text-slate-800">{item.keterangan}</td>
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    {item.tipe === "Debit" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-600">
                        <ArrowDownLeft className="w-3 h-3" />
                        Debit
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600">
                        <ArrowUpRight className="w-3 h-3" />
                        Kredit
                      </span>
                    )}
                  </td>
                  <td
                    className={`py-3.5 px-5 font-bold whitespace-nowrap ${
                      item.tipe === "Debit" ? "text-rose-600" : "text-emerald-600"
                    }`}
                  >
                    {item.nominal}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800 whitespace-nowrap">
                    {item.saldoAkhir}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Rows per page:</span>
            <div className="relative inline-block">
              <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 pr-6 text-[11px] font-medium focus:outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1-6 of 6</span>
            <div className="flex items-center gap-1 text-slate-400">
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

/* ==========================================================================
   3. JURNAL HOST
   ========================================================================== */
export function OncardJurnalHost() {
  const hostData = [
    {
      tanggal: "24 Sep 2026, 09.23",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: Ananta Firdaus",
      tipe: "Kredit",
      nominal: "+Rp 10.000",
      saldoAkhir: "Rp 800.000",
    },
    {
      tanggal: "11 Sep 2026, 23.39",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: Ananta Firdaus",
      tipe: "Kredit",
      nominal: "+Rp 10.000",
      saldoAkhir: "Rp 790.000",
    },
    {
      tanggal: "7 Sep 2026, 14.26",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: Aisyah Maulana",
      tipe: "Kredit",
      nominal: "+Rp 100.000",
      saldoAkhir: "Rp 780.000",
    },
    {
      tanggal: "6 Sep 2026, 12.50",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: David Elnoventa",
      tipe: "Kredit",
      nominal: "+Rp 50.000",
      saldoAkhir: "Rp 680.000",
    },
    {
      tanggal: "6 Sep 2026, 12.19",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: David Elnoventa",
      tipe: "Kredit",
      nominal: "+Rp 100.000",
      saldoAkhir: "Rp 630.000",
    },
    {
      tanggal: "6 Sep 2026, 12.18",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: David Elnoventa",
      tipe: "Kredit",
      nominal: "+Rp 30.000",
      saldoAkhir: "Rp 530.000",
    },
    {
      tanggal: "4 Sep 2026, 11.34",
      host: "Admin Demo",
      keterangan: "Topup Saldo User: Aisyah Maulana",
      tipe: "Kredit",
      nominal: "+Rp 500.000",
      saldoAkhir: "Rp 500.000",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Subheader */}
      <p className="text-xs text-slate-500 font-medium">
        Catatan mutasi keuangan host: setoran tunai, pembayaran, dan biaya operasional.
      </p>

      {/* Filter Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari host..."
            className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Dari</label>
          <input
            type="date"
            defaultValue="2026-09-01"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Hingga</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-slate-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-medium text-slate-700 focus:outline-none cursor-pointer">
            <option>Semua host</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Buku Jurnal Host</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Mutasi keuangan seluruh host di sistem QRION
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Export
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
              <BookOpen className="w-3 h-3" />
              7 entri
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-5">TANGGAL</th>
                <th className="py-3.5 px-5">HOST</th>
                <th className="py-3.5 px-5">KETERANGAN</th>
                <th className="py-3.5 px-5">TIPE</th>
                <th className="py-3.5 px-5">NOMINAL</th>
                <th className="py-3.5 px-5">SALDO AKHIR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {hostData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="py-3.5 px-5 text-slate-600 font-medium whitespace-nowrap">
                    {item.tanggal}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800 whitespace-nowrap">
                    {item.host}
                  </td>
                  <td className="py-3.5 px-5 text-slate-800">{item.keterangan}</td>
                  <td className="py-3.5 px-5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600">
                      <ArrowUpRight className="w-3 h-3" />
                      Kredit
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-emerald-600 whitespace-nowrap">
                    {item.nominal}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-slate-800 whitespace-nowrap">
                    {item.saldoAkhir}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Rows per page:</span>
            <div className="relative inline-block">
              <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 pr-6 text-[11px] font-medium focus:outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1-7 of 7</span>
            <div className="flex items-center gap-1 text-slate-400">
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button disabled className="p-1 rounded hover:bg-slate-100 disabled:opacity-40">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

/* ==========================================================================
   4. JURNAL MERCHANT
   ========================================================================== */
export function OncardJurnalMerchant() {
  return (
    <div className="space-y-6 pb-8">
      {/* Subheader */}
      <p className="text-xs text-slate-500 font-medium">
        Catatan mutasi keuangan merchant: pemasukan penjualan dan pengeluaran operasional.
      </p>

      {/* Filter Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari merchant..."
            className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Dari</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[11px] font-medium text-slate-500">Hingga</label>
          <input
            type="date"
            defaultValue="2026-09-28"
            className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-slate-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-medium text-slate-700 focus:outline-none cursor-pointer">
            <option>Semua merchant</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Main Card Empty State */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Buku Jurnal Merchant</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Mutasi keuangan seluruh merchant di sistem QRION
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Export
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
              <BookOpen className="w-3 h-3" />
              0 entri
            </span>
          </div>
        </div>

        {/* Empty State Body */}
        <div className="py-20 px-4 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <BookOpen className="w-5 h-5 text-slate-400" />
          </div>
          <h3 className="font-semibold text-slate-800 text-sm">Belum ada jurnal</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Belum ada mutasi keuangan merchant pada periode ini.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}

/* ==========================================================================
   5. JURNAL USER
   ========================================================================== */
export function OncardJurnalUser() {
  return (
    <div className="space-y-6 pb-8">
      {/* Subheader */}
      <p className="text-xs text-slate-500 font-medium">
        Catatan mutasi saldo siswa: top-up, pembayaran di unit usaha, dan aktivitas kartu.
      </p>

      {/* Filter Bar Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari user..."
              className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-slate-500">Dari</label>
            <input
              type="date"
              defaultValue="2026-09-28"
              className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-medium text-slate-500">Hingga</label>
            <input
              type="date"
              defaultValue="2026-09-28"
              className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <label className="text-[11px] font-medium text-slate-500">Tipe</label>
            <div className="relative">
              <select className="appearance-none bg-white border border-slate-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-medium text-slate-700 focus:outline-none cursor-pointer">
                <option>Semua</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter keterangan..."
              className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E8345]/30 placeholder:text-slate-400"
            />
          </div>
        </div>
        <div className="text-[10px] text-slate-400">Semua user</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">0</div>
            <p className="text-[10px] text-slate-400">Total entri periode ini</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-emerald-600">Rp 0</div>
            <p className="text-[10px] text-slate-400">Total kredit (masuk)</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <ArrowDownLeft className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-rose-600">Rp 0</div>
            <p className="text-[10px] text-slate-400">Total debit (keluar)</p>
          </div>
        </div>
      </div>

      {/* Main Card Empty State */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-start justify-between">
          <div>
            <h2 className="font-bold text-slate-800 text-sm">Buku Jurnal User</h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Mutasi saldo seluruh pengguna (siswa dan Host) di sistem QRION
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium shadow-xs transition cursor-pointer">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Export
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#EBF6F1] text-[#0E8345]">
              <BookOpen className="w-3 h-3" />
              0 entri
            </span>
          </div>
        </div>

        {/* Empty State Body */}
        <div className="py-20 px-4 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <BookOpen className="w-5 h-5 text-slate-400" />
          </div>
          <h3 className="font-semibold text-slate-800 text-sm">Belum ada jurnal</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Belum ada mutasi saldo user pada periode ini.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-center text-[11px] text-slate-400">
        © 2026 ONCARD — Sistem Manajemen Unit Usaha Sekolah
      </div>
    </div>
  );
}