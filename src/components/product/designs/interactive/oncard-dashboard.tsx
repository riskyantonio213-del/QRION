"use client";

import { useEffect, useState } from "react";

type Period = "hari" | "minggu" | "bulan";

const PERIOD_KEYS: Period[] = ["hari", "minggu", "bulan"];

const KAS_PATH_HARI =
  "M 0 130 C 250 130, 320 112, 360 112 C 400 112, 450 130, 500 130";
const KAS_PATH_MINGGU =
  "M 0 130 C 250 130, 320 60, 360 60 C 400 60, 450 130, 500 130";
const KAS_PATH_BULAN =
  "M 0 130 C 250 130, 320 10, 360 10 C 400 10, 450 130, 500 130";

const PERIODS: Record<
  Period,
  {
    label: string;
    masuk: string;
    masukBadge: string;
    masukTxn: string;
    keluar: string;
    margin: string;
    kartuBadge: string;
    unitBar: string;
    rankTotal: string;
    rankVal: string;
    rankTxn: string;
    kasPath: string;
    kasNet: string;
    growthTop: string;
    growthBottom: string;
    freqBar1: string;
    freqBar2: string;
    amtBar1: string;
    amtBar2: string;
    freqBadge: string;
  }
> = {
  hari: {
    label: "Hari ini",
    masuk: "Rp 12.000",
    masukBadge: "+4,1%",
    masukTxn: "2 transaksi tercatat",
    keluar: "Rp 0",
    margin: "Margin laba: 100%",
    kartuBadge: "+1 / 24jam",
    unitBar: "w-[10%]",
    rankTotal: "Rp 12.000",
    rankVal: "Rp 12.000",
    rankTxn: "2 txn",
    kasPath: KAS_PATH_HARI,
    kasNet: "+12.000 net",
    growthTop: "h-5",
    growthBottom: "h-2",
    freqBar1: "w-2 bg-[#107849] h-5 rounded-t",
    freqBar2: "w-2 bg-[#107849] h-3 rounded-t",
    amtBar1: "w-2 bg-[#107849] h-8 rounded-t",
    amtBar2: "w-2 bg-[#107849] h-10 rounded-t",
    freqBadge: "App 0 • Sekolah 2",
  },
  minggu: {
    label: "7 Hari",
    masuk: "Rp 35.000",
    masukBadge: "+8,3%",
    masukTxn: "4 transaksi tercatat",
    keluar: "Rp 5.000",
    margin: "Margin laba: 86%",
    kartuBadge: "+3 / 7hr",
    unitBar: "w-[35%]",
    rankTotal: "Rp 30.000",
    rankVal: "Rp 30.000",
    rankTxn: "4 txn",
    kasPath: KAS_PATH_MINGGU,
    kasNet: "+30.000 net",
    growthTop: "h-7",
    growthBottom: "h-3",
    freqBar1: "w-2 bg-[#107849] h-10 rounded-t",
    freqBar2: "w-2 bg-[#107849] h-7 rounded-t",
    amtBar1: "w-2 bg-[#107849] h-14 rounded-t",
    amtBar2: "w-2 bg-[#107849] h-16 rounded-t",
    freqBadge: "App 0 • Sekolah 4",
  },
  bulan: {
    label: "Bulan ini",
    masuk: "Rp 70.000",
    masukBadge: "+12,5%",
    masukTxn: "5 transaksi tercatat",
    keluar: "Rp 0",
    margin: "Margin laba: 100%",
    kartuBadge: "+3 / 7hr",
    unitBar: "w-[70%]",
    rankTotal: "Rp 70.000",
    rankVal: "Rp 70.000",
    rankTxn: "5 txn",
    kasPath: KAS_PATH_BULAN,
    kasNet: "-2010000 net",
    growthTop: "h-10",
    growthBottom: "h-4",
    freqBar1: "w-2 bg-[#107849] h-16 rounded-t",
    freqBar2: "w-2 bg-[#107849] h-10 rounded-t",
    amtBar1: "w-2 bg-[#107849] h-20 rounded-t",
    amtBar2: "w-2 bg-[#107849] h-24 rounded-t",
    freqBadge: "App 0 • Sekolah 7",
  },
};

type ViewKey =
  | "dashboard"
  | "transfer"
  | "ganti"
  | "wd-inst"
  | "wd-merch"
  | "j-inst"
  | "j-host"
  | "j-merch"
  | "j-user"
  | "a-host"
  | "a-merch"
  | "a-user";

const MENU: { label: string; items: { key: ViewKey; text: string }[] }[] = [
  { label: "MENU UTAMA", items: [{ key: "dashboard", text: "Dashboard" }] },
  {
    label: "MANAJEMEN",
    items: [
      { key: "transfer", text: "Transfer" },
      { key: "ganti", text: "Ganti Password" },
    ],
  },
  {
    label: "WITHDRAW",
    items: [
      { key: "wd-inst", text: "Institusi" },
      { key: "wd-merch", text: "Merchant" },
    ],
  },
  {
    label: "JURNAL",
    items: [
      { key: "j-inst", text: "Institusi" },
      { key: "j-host", text: "Host" },
      { key: "j-merch", text: "Merchant" },
      { key: "j-user", text: "User" },
    ],
  },
  {
    label: "AKUN",
    items: [
      { key: "a-host", text: "Host" },
      { key: "a-merch", text: "Merchant" },
      { key: "a-user", text: "User" },
    ],
  },
];

type MockViewKey = Exclude<ViewKey, "dashboard">;

const VIEW_INFO: Record<
  MockViewKey,
  {
    title: string;
    sub: string;
    kind: "table" | "form" | "list";
    cols?: string[];
    rows?: string[][];
  }
> = {
  transfer: {
    title: "Transfer",
    sub: "Riwayat transfer saldo antar unit usaha",
    kind: "table",
    cols: ["Waktu", "Dari", "Ke", "Status", "Nominal"],
    rows: [
      ["27 Agu 14:20", "Kantin Riski", "Kas Sekolah", "Berhasil", "Rp 15.000"],
      ["27 Agu 11:05", "Toko Daud", "Kas Sekolah", "Berhasil", "Rp 12.000"],
      ["26 Agu 16:40", "SR Cafe", "Kantin Ridho", "Pending", "Rp 8.000"],
      ["26 Agu 09:12", "Barber", "Kas Sekolah", "Berhasil", "Rp 5.000"],
    ],
  },
  ganti: {
    title: "Ganti Password",
    sub: "Perbarui password akun admin",
    kind: "form",
  },
  "wd-inst": {
    title: "Withdraw Institusi",
    sub: "Penarikan dana ke rekening institusi",
    kind: "table",
    cols: ["Tanggal", "Bank", "Status", "Nominal"],
    rows: [
      ["26 Agu 2026", "BRI", "Diproses", "Rp 1.200.000"],
      ["20 Agu 2026", "BRI", "Selesai", "Rp 950.000"],
      ["13 Agu 2026", "BRI", "Selesai", "Rp 1.500.000"],
      ["06 Agu 2026", "BRI", "Selesai", "Rp 800.000"],
    ],
  },
  "wd-merch": {
    title: "Withdraw Merchant",
    sub: "Penarikan saldo merchant ke rekening",
    kind: "table",
    cols: ["Tanggal", "Merchant", "Status", "Nominal"],
    rows: [
      ["27 Agu 2026", "Kantin Riski", "Diproses", "Rp 240.000"],
      ["25 Agu 2026", "Toko Daud", "Selesai", "Rp 180.000"],
      ["22 Agu 2026", "SR Cafe", "Selesai", "Rp 150.000"],
      ["18 Agu 2026", "Barber", "Gagal", "Rp 60.000"],
    ],
  },
  "j-inst": {
    title: "Jurnal Institusi",
    sub: "Buku besar kas institusi",
    kind: "table",
    cols: ["Waktu", "Ref", "Keterangan", "Debit", "Kredit"],
    rows: [
      ["27 Agu", "JV-1024", "Pemasukan SPP Agustus", "Rp 2.400.000", "-"],
      ["27 Agu", "JV-1023", "Beli ATK", "-", "Rp 320.000"],
      ["26 Agu", "JV-1022", "Pembayaran listrik", "-", "Rp 780.000"],
      ["25 Agu", "JV-1021", "Donasi orang tua", "Rp 500.000", "-"],
    ],
  },
  "j-host": {
    title: "Jurnal Host",
    sub: "Buku besar operasional host",
    kind: "table",
    cols: ["Waktu", "Ref", "Keterangan", "Debit", "Kredit"],
    rows: [
      ["27 Agu", "JV-0912", "Settlement payment gateway", "Rp 1.100.000", "-"],
      ["26 Agu", "JV-0911", "Biaya layanan bulanan", "-", "Rp 250.000"],
      ["25 Agu", "JV-0910", "Top-up saldo merchant", "-", "Rp 640.000"],
      ["24 Agu", "JV-0909", "Pendapatan fee trx", "Rp 96.000", "-"],
    ],
  },
  "j-merch": {
    title: "Jurnal Merchant",
    sub: "Buku besar transaksi merchant",
    kind: "table",
    cols: ["Waktu", "Ref", "Keterangan", "Debit", "Kredit"],
    rows: [
      ["27 Agu", "TRX-8841", "Penjualan kantin siang", "-", "Rp 45.000"],
      ["27 Agu", "TRX-8840", "Penjualan toko kelontong", "-", "Rp 32.000"],
      ["26 Agu", "TRX-8839", "Restock bahan baku", "Rp 120.000", "-"],
      ["26 Agu", "TRX-8838", "Penjualan cafe sore", "-", "Rp 27.000"],
    ],
  },
  "j-user": {
    title: "Jurnal User",
    sub: "Riwayat transaksi pelajar & guru",
    kind: "table",
    cols: ["Waktu", "User", "Keterangan", "Saldo"],
    rows: [
      ["27 Agu 10:31", "Nanta", "Beli makanan kantin", "Rp 118.000"],
      ["27 Agu 09:14", "Rizky", "Top-up via orang tua", "Rp 240.000"],
      ["26 Agu 13:02", "Alya", "Beli buku tulis", "Rp 86.000"],
      ["26 Agu 08:47", "Fajar", "Absensi + snack", "Rp 154.000"],
    ],
  },
  "a-host": {
    title: "Akun Host",
    sub: "Daftar akun pengelola host",
    kind: "list",
    rows: [
      ["H-001", "Admin Host", "Aktif"],
      ["H-002", "Bendahara Sekolah", "Aktif"],
      ["H-003", "Operator", "Aktif"],
      ["H-004", "Auditor", "Nonaktif"],
    ],
  },
  "a-merch": {
    title: "Akun Merchant",
    sub: "Daftar akun merchant terdaftar",
    kind: "list",
    rows: [
      ["M-014", "Kantin Riski", "Aktif"],
      ["M-015", "Toko Daud", "Aktif"],
      ["M-016", "SR Cafe", "Aktif"],
      ["M-017", "Barber", "Pending"],
    ],
  },
  "a-user": {
    title: "Akun User",
    sub: "Daftar akun pelajar & guru",
    kind: "list",
    rows: [
      ["U-0483", "Nanta Ramadhan", "Aktif"],
      ["U-0482", "Alya Putri", "Aktif"],
      ["U-0481", "Rizky Pratama", "Aktif"],
      ["U-0480", "Fajar Nugroho", "Arsip"],
    ],
  },
};

function DashboardHome({
  period,
  setPeriod,
  onAction,
}: {
  period: Period;
  setPeriod: (p: Period) => void;
  onAction: (msg: string) => void;
}) {
  return (
    <div className="space-y-4 text-slate-800">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d693f] to-[#148f52] p-5 text-white shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-[9px] text-emerald-100 font-medium">
            Selamat datang kembali,
          </p>
          <h3 className="text-base font-extrabold tracking-tight mt-0.5">
            NANTA
          </h3>
          <p className="mt-1 text-[9px] text-emerald-100 max-w-xl leading-relaxed">
            Pantau kinerja 6 unit usaha sekolah dan kelola keuangan QRION dalam
            satu dashboard.
          </p>
          <div className="flex flex-wrap gap-2 mt-3 text-[8px] font-semibold">
            <span className="bg-emerald-900/40 px-2.5 py-1 rounded-md border border-emerald-400/20">
              🏫 Unit Aktif <b>6</b>
            </span>
            <span className="bg-emerald-900/40 px-2.5 py-1 rounded-md border border-emerald-400/20">
              💳 Total Kartu <b>483</b>
            </span>
            <span className="bg-emerald-900/40 px-2.5 py-1 rounded-md border border-emerald-400/20">
              📊 Cakupan <b>32%</b>
            </span>
          </div>
        </div>
        <div className="flex gap-2 self-start sm:self-center">
          <button
            type="button"
            onClick={() => onAction("Form tambah unit baru dibuka (demo)")}
            className="bg-white text-[#107849] font-bold text-[9px] px-3.5 py-1.5 rounded-xl shadow hover:bg-emerald-50"
          >
            + Tambah Unit
          </button>
          <button
            type="button"
            onClick={() => onAction("Membuka laporan keuangan (demo)")}
            className="bg-emerald-900/40 border border-emerald-400/30 text-white font-bold text-[9px] px-3.5 py-1.5 rounded-xl"
          >
            Lihat Laporan
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
        <span className="text-[9px] font-semibold text-slate-500">
          Menampilkan data periode:{" "}
          <b className="text-slate-800">{PERIODS[period].label}</b>
        </span>
        <div className="flex gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-100">
          {PERIOD_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setPeriod(k)}
              className={
                period === k
                  ? "px-2 py-1 text-[8px] font-bold rounded bg-[#107849] text-white shadow-sm"
                  : "px-2 py-1 text-[8px] font-semibold rounded text-slate-600 hover:bg-white"
              }
            >
              {PERIODS[k].label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="p-1.5 rounded-md bg-emerald-50 text-emerald-700 text-xs">
                📈
              </span>
              <span className="text-[7px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full">
                {PERIODS[period].masukBadge}
              </span>
            </div>
            <div className="text-sm font-extrabold text-slate-800 mt-2">
              {PERIODS[period].masuk}
            </div>
            <div className="text-[8px] text-slate-400">Total Pemasukan</div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex justify-between items-end">
            <span className="text-[7px] text-slate-400">
              {PERIODS[period].masukTxn}
            </span>
            <svg
              className="w-16 h-5 text-emerald-600"
              viewBox="0 0 60 20"
              fill="none"
            >
              <path
                d="M2 15 Q 15 15, 30 10 T 58 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="p-1.5 rounded-md bg-red-50 text-red-600 text-xs">
                📉
              </span>
              <span className="text-[7px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">
                —
              </span>
            </div>
            <div className="text-sm font-extrabold text-slate-800 mt-2">
              {PERIODS[period].keluar}
            </div>
            <div className="text-[8px] text-slate-400">Total Pengeluaran</div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex justify-between items-end">
            <span className="text-[7px] text-slate-400">
              {PERIODS[period].margin}
            </span>
            <svg
              className="w-16 h-5 text-red-400"
              viewBox="0 0 60 20"
              fill="none"
            >
              <path
                d="M2 10 Q 30 10, 58 10"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="p-1.5 rounded-md bg-emerald-50 text-emerald-700 text-xs">
                👛
              </span>
              <span className="text-[7px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full">
                {PERIODS[period].label}
              </span>
            </div>
            <div className="text-sm font-extrabold text-slate-800 mt-2">
              -Rp 2.010.000
            </div>
            <div className="text-[8px] text-slate-400">Saldo Wallet QRION</div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex justify-between items-end">
            <span className="text-[7px] text-slate-400">
              Siap di-withdraw: <b className="text-slate-700">-Rp 2.010.000</b>
            </span>
            <div className="w-16 h-1 bg-emerald-500 rounded-full" />
          </div>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="p-1.5 rounded-md bg-amber-50 text-amber-600 text-xs">
                💳
              </span>
              <span className="text-[7px] font-bold bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full">
                {PERIODS[period].kartuBadge}
              </span>
            </div>
            <div className="text-sm font-extrabold text-slate-800 mt-2">
              483{" "}
              <span className="text-[10px] font-normal text-slate-400">
                / 1.500
              </span>
            </div>
            <div className="text-[8px] text-slate-400">Kartu Terkoneksi</div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex justify-between items-end">
            <span className="text-[7px] text-slate-400">
              Cakupan: <b>32%</b> dari total siswa
            </span>
            <svg
              className="w-16 h-5 text-emerald-600"
              viewBox="0 0 60 20"
              fill="none"
            >
              <path
                d="M2 15 Q 20 15, 30 5 T 58 15"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h4 className="text-[10px] font-bold text-slate-700">
                Arus Kas Bulanan
              </h4>
              <p className="text-[7px] text-slate-400">
                Pemasukan vs Pengeluaran bulanan tahun 2026
              </p>
            </div>
            <span className="text-[7px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
              {PERIODS[period].kasNet}
            </span>
          </div>
          <div className="h-[160px] flex border-b border-dashed border-slate-100 pb-1 relative">
            <div className="flex flex-col justify-between text-[6px] text-slate-400 pr-2 pb-2 h-full text-right w-8">
              <span>2.2 jt</span>
              <span>1.6 jt</span>
              <span>1 jt</span>
              <span>500 rb</span>
              <span>0 rb</span>
            </div>
            <div className="flex-1 relative h-full">
              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                viewBox="0 0 500 140"
                preserveAspectRatio="none"
              >
                <path d={PERIODS[period].kasPath} fill="rgba(16,120,73,0.15)" />
                <path
                  d={PERIODS[period].kasPath}
                  stroke="#107849"
                  strokeWidth={2}
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between text-[7px] text-slate-400 px-8 pt-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>Mei</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Agu</span>
            <span>Sep</span>
            <span>Okt</span>
            <span>Nov</span>
            <span>Des</span>
          </div>
          <div className="flex justify-center gap-6 mt-2 text-[8px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#107849]" /> Pemasukan
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-400" /> Pengeluaran
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-[10px] font-bold text-slate-700">
              Distribusi Kategori
            </h4>
            <p className="text-[7px] text-slate-400">
              6 unit usaha berdasarkan jenis
            </p>
          </div>
          <div className="flex items-center justify-center my-auto py-2">
            <div className="w-24 h-24 rounded-full border-[8px] border-[#107849] flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[8px] border-emerald-200 border-t-transparent -rotate-45" />
              <span className="text-[8px] font-bold text-slate-600">
                6 Unit
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-4 text-[8px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#107849]" /> Kantin
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-300" /> Lainnya
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h4 className="text-[10px] font-bold text-slate-700">
                Pendapatan Per Unit Usaha
              </h4>
              <p className="text-[7px] text-slate-400">
                Pemasukan masing-masing unit di periode terpilih
              </p>
            </div>
            <span className="text-[7px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
              1 unit
            </span>
          </div>
          <div className="h-[120px] flex items-end px-2 border-b border-dashed border-slate-100 pb-2">
            <div
              className={`${PERIODS[period].unitBar} bg-[#107849] rounded-t h-4 flex items-center px-2 text-[8px] text-white font-semibold`}
            >
              TOKO DAUD
            </div>
          </div>
          <div className="flex justify-between text-[7px] text-slate-400 mt-1">
            <span>0 jt</span>
            <span>20 jt</span>
            <span>40 jt</span>
            <span>60 jt</span>
            <span>80 jt</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h4 className="text-[10px] font-bold text-slate-700">
                Pertumbuhan Kartu Terkoneksi
              </h4>
              <p className="text-[7px] text-slate-400">
                Akumulasi kartu terkoneksi via aplikasi orang tua vs di sekolah
              </p>
            </div>
            <span className="text-[7px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold">
              32% cakupan
            </span>
          </div>
          <div className="h-[120px] flex items-end border-b border-dashed border-slate-100 pb-2 relative bg-emerald-50/10">
            <div
              className={`absolute inset-x-0 bottom-6 bg-emerald-200/40 ${PERIODS[period].growthTop} border-t border-emerald-500`}
            />
            <div
              className={`absolute inset-x-0 bottom-2 bg-emerald-700/20 ${PERIODS[period].growthBottom} border-t border-emerald-700`}
            />
          </div>
          <div className="flex justify-between text-[6px] text-slate-400 px-1 mt-1">
            <span>11 Agu</span>
            <span>13 Agu</span>
            <span>15 Agu</span>
            <span>17 Agu</span>
            <span>19 Agu</span>
            <span>21 Agu</span>
            <span>23 Agu</span>
            <span>25 Agu</span>
            <span>27 Agu</span>
          </div>
          <div className="flex justify-center gap-6 mt-1 text-[7px]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
              Aplikasi Orang Tua
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" /> Di
              Sekolah
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <h4 className="text-[10px] font-bold text-slate-700">
          Perbandingan Top-Up Saldo
        </h4>
        <p className="text-[7px] text-slate-400 mb-3">
          Aplikasi orang tua vs top-up langsung di sekolah
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="p-3 border border-slate-100 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-slate-700">
                Frekuensi Top-Up
              </span>
              <span className="text-[7px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
                {PERIODS[period].freqBadge}
              </span>
            </div>
            <div className="h-[90px] flex items-end justify-between px-6 border-b border-dashed border-slate-100 pb-1">
              <div className={PERIODS[period].freqBar1} />
              <div className={PERIODS[period].freqBar2} />
            </div>
            <div className="flex justify-between text-[6px] text-slate-400 px-4 mt-1">
              <span>11 Agu</span>
              <span>...</span>
              <span>26 Agu</span>
              <span>27 Agu</span>
            </div>
            <div className="flex justify-center gap-4 mt-1 text-[7px]">
              <span>🟢 Aplikasi Orang Tua</span>
              <span>⬛ Top-Up Langsung di Sekolah</span>
            </div>
          </div>
          <div className="p-3 border border-slate-100 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-slate-700">
                Amount Top-Up
              </span>
              <span className="text-[7px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
                App 0% • Sekolah 100%
              </span>
            </div>
            <div className="h-[90px] flex items-end justify-between px-6 border-b border-dashed border-slate-100 pb-1">
              <div className={PERIODS[period].amtBar1} />
              <div className={PERIODS[period].amtBar2} />
            </div>
            <div className="flex justify-between text-[6px] text-slate-400 px-4 mt-1">
              <span>11 Agu</span>
              <span>...</span>
              <span>26 Agu</span>
              <span>27 Agu</span>
            </div>
            <div className="flex justify-center gap-4 mt-1 text-[7px]">
              <span>🟢 Aplikasi Orang Tua</span>
              <span>⬛ Top-Up Langsung di Sekolah</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h4 className="text-[10px] font-bold text-slate-700">
              Peringkat Saldo Merchant
            </h4>
            <p className="text-[7px] text-slate-400">
              Total saldo = pemasukan – pengeluaran dari transaksi per unit
              usaha
            </p>
          </div>
          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
            {PERIODS[period].rankTotal}
          </span>
        </div>
        <div className="space-y-2">
          <div className="relative overflow-hidden flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-[9px] border border-slate-100">
            <div className="absolute inset-0 bg-emerald-100/60 w-full pointer-events-none transition-all duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[8px]">
                1
              </span>
              <span className="font-bold text-slate-700">kantin riski</span>
              <span className="text-[7px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">
                Kantin
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="font-bold text-slate-800">
                {PERIODS[period].rankVal}
              </div>
              <div className="text-[7px] text-slate-400">
                {PERIODS[period].rankTxn}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-[9px] border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 w-0 pointer-events-none transition-all duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[8px]">
                2
              </span>
              <span className="font-bold text-slate-700">Kantin Ridho</span>
              <span className="text-[7px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">
                Kantin
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="font-bold text-slate-800">Rp 0</div>
              <div className="text-[7px] text-slate-400">0 txn</div>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-[9px] border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 w-0 pointer-events-none transition-all duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[8px]">
                3
              </span>
              <span className="font-bold text-slate-700">Kantin Admin</span>
              <span className="text-[7px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">
                Kantin
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="font-bold text-slate-800">Rp 0</div>
              <div className="text-[7px] text-slate-400">0 txn</div>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-[9px] border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 w-0 pointer-events-none transition-all duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[8px]">
                4
              </span>
              <span className="font-bold text-slate-700">SYAFAATMART</span>
              <span className="text-[7px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">
                Lainnya
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="font-bold text-slate-800">Rp 0</div>
              <div className="text-[7px] text-slate-400">0 txn</div>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-[9px] border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 w-0 pointer-events-none transition-all duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[8px]">
                5
              </span>
              <span className="font-bold text-slate-700">Barber</span>
              <span className="text-[7px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">
                Lainnya
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="font-bold text-slate-800">Rp 0</div>
              <div className="text-[7px] text-slate-400">0 txn</div>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-center justify-between p-2.5 bg-slate-50 rounded-lg text-[9px] border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 w-0 pointer-events-none transition-all duration-500" />
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[8px]">
                6
              </span>
              <span className="font-bold text-slate-700">SR Cafe</span>
              <span className="text-[7px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">
                Lainnya
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="font-bold text-slate-800">Rp 0</div>
              <div className="text-[7px] text-slate-400">0 txn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockView({
  view,
  onAction,
}: {
  view: MockViewKey;
  onAction: (msg: string) => void;
}) {
  const info = VIEW_INFO[view];
  return (
    <div className="space-y-4 text-slate-800">
      <div className="rounded-2xl bg-gradient-to-r from-[#0d693f] to-[#148f52] p-5 text-white shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <p className="text-[9px] text-emerald-100 font-medium">
            Halaman demo
          </p>
          <h3 className="text-base font-extrabold tracking-tight mt-0.5">
            {info.title}
          </h3>
          <p className="mt-1 text-[9px] text-emerald-100 max-w-xl leading-relaxed">
            {info.sub}
          </p>
        </div>
        <span className="bg-emerald-900/40 px-2.5 py-1 rounded-md border border-emerald-400/20 text-[8px] font-semibold">
          Data contoh
        </span>
      </div>

      {info.kind === "table" && (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[9px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70 text-slate-500 uppercase tracking-wider text-[7px]">
                  {(info.cols ?? []).map((c) => (
                    <th key={c} className="px-3 py-2 font-bold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(info.rows ?? []).map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-50 last:border-0 hover:bg-emerald-50/40 transition-colors"
                  >
                    {r.map((cell, j) => (
                      <td
                        key={j}
                        className={
                          j === 0
                            ? "px-3 py-2 text-slate-400 whitespace-nowrap"
                            : j === r.length - 1
                              ? "px-3 py-2 font-bold text-slate-800 whitespace-nowrap"
                              : "px-3 py-2 text-slate-600 whitespace-nowrap"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end gap-2 p-3 border-t border-slate-50">
            <button
              type="button"
              onClick={() => onAction("Mengexport CSV (demo)")}
              className="text-[8px] font-bold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Export CSV
            </button>
            <button
              type="button"
              onClick={() => onAction("Membuat entri baru (demo)")}
              className="text-[8px] font-bold px-3 py-1.5 rounded-lg bg-[#107849] text-white hover:bg-[#0c5f39] transition-colors"
            >
              + Entri Baru
            </button>
          </div>
        </div>
      )}

      {info.kind === "form" && (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 space-y-3 max-w-md">
          {["Password Lama", "Password Baru", "Ulangi Password Baru"].map(
            (label) => (
              <label
                key={label}
                className="block text-[9px] font-semibold text-slate-500"
              >
                {label}
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-[10px] text-slate-700 outline-none focus:border-[#107849] focus:ring-2 focus:ring-emerald-100 transition-all"
                />
              </label>
            ),
          )}
          <button
            type="button"
            onClick={() => onAction("Password berhasil diperbarui (demo)")}
            className="text-[9px] font-bold px-4 py-2 rounded-xl bg-[#107849] text-white hover:bg-[#0c5f39] transition-colors"
          >
            Simpan Perubahan
          </button>
        </div>
      )}

      {info.kind === "list" && (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm divide-y divide-slate-50">
          {(info.rows ?? []).map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-[9px]">
                  {r[1].slice(0, 1)}
                </span>
                <div>
                  <div className="text-[10px] font-bold text-slate-700">
                    {r[1]}
                  </div>
                  <div className="text-[8px] text-slate-400">ID {r[0]}</div>
                </div>
              </div>
              <span
                className={
                  r[2] === "Aktif"
                    ? "text-[7px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700"
                    : r[2] === "Pending"
                      ? "text-[7px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700"
                      : "text-[7px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500"
                }
              >
                {r[2]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function OncardDashboard() {
  const [period, setPeriod] = useState<Period>("bulan");
  const [view, setView] = useState<ViewKey>("dashboard");
  const [sbOpen, setSbOpen] = useState<boolean | null>(null);
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (msg: string) => setToast(msg);
  const toggleSidebar = () =>
    setSbOpen((prev) => {
      if (prev === null) return window.innerWidth < 1024;
      return !prev;
    });
  const title = view === "dashboard" ? "Dashboard" : VIEW_INFO[view].title;

  return (
    <div
      className={
        "relative z-10 mx-auto w-full max-w-[1380px] h-[820px] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.13)] flex flex-col" +
        (dark ? " oc-dark" : "")
      }
    >
      <div className="flex h-[48px] shrink-0 items-center gap-2 border-b border-slate-100 bg-white px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFCC4D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#33C77B]" />
        <div className="ml-3 flex h-7 max-w-[500px] flex-1 items-center rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400">
          <span className="mr-2 text-[8px]">🔒</span>
          admin.oncard.qrion.id/dashboard
        </div>
        <div className="hidden items-center gap-2 text-[9px] text-slate-400 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#107849]" /> Live
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#107849] text-white font-bold">
            O
          </div>
          <div>
            <div className="text-xs font-bold text-slate-700">Dashboard</div>
            <div className="text-[8px] text-slate-400">Super Admin</div>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="relative flex flex-1 overflow-hidden bg-[#F7FAF9]">
        <aside
          className="absolute inset-y-0 left-0 z-30 w-[250px] shrink-0 border-r border-slate-100 bg-white p-4 overflow-y-auto transition-transform duration-300 lg:relative lg:translate-x-0 -translate-x-full"
          style={
            sbOpen === null
              ? undefined
              : sbOpen
                ? { transform: "translateX(0)" }
                : { display: "none" }
          }
        >
          <div className="mb-6 flex items-center gap-2.5 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#107849] text-white font-bold text-sm shadow-sm">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <div className="text-[12px] font-extrabold tracking-tight text-[#071A13]">
                ONCARD
              </div>
              <div className="text-[7px] text-slate-400">
                Manajemen Unit Usaha Sekolah
              </div>
            </div>
          </div>
          {MENU.map((group) => (
            <div className="mb-4" key={group.label}>
              <div className="mb-1.5 px-2 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {group.label}
              </div>
              <nav className="space-y-0.5">
                {group.items.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setView(item.key)}
                    className={
                      view === item.key
                        ? "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[10px] font-semibold transition-all bg-[#E6F4ED] text-[#107849]"
                        : "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[10px] font-semibold transition-all text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  >
                    <span className="flex-1">{item.text}</span>
                    {view === item.key && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#107849]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          ))}
          <div className="mt-6 mb-2 rounded-xl bg-[#F0F7F4] p-3 border border-emerald-100">
            <div className="flex items-center gap-1.5 text-emerald-900 text-[10px] font-bold mb-1">
              <span>❓</span> Butuh bantuan?
            </div>
            <p className="text-[8px] text-slate-500 leading-normal mb-2">
              Pelajari cara mengelola unit usaha sekolah dengan panduan ONCARD.
            </p>
            <span
              className="text-[8px] font-bold text-[#107849] cursor-pointer hover:underline"
              onClick={() => showToast("Panduan ONCARD dibuka (demo)")}
            >
              Buka panduan →
            </span>
          </div>
        </aside>
        <div className="min-w-0 flex-1 overflow-hidden flex flex-col bg-[#FAFAFA]">
          <header className="flex h-[68px] shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 sm:px-7">
            <div>
              <div className="text-[15px] font-extrabold tracking-tight text-[#071A13]">
                {title}
              </div>
              <div className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
                Kamis, 27 Agustus 2026
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle dark"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 text-xs"
              >
                {dark ? "☀️" : "🌙"}
              </button>
              <div className="flex items-center gap-2 bg-[#107849] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold">
                <span className="h-5 w-5 rounded bg-emerald-700 flex items-center justify-center text-xs">
                  N
                </span>
                <span>nanta</span>
                <span className="text-[8px] bg-emerald-800 px-1.5 py-0.5 rounded ml-1">
                  Super Admin
                </span>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]">
            {view === "dashboard" ? (
              <DashboardHome
                period={period}
                setPeriod={setPeriod}
                onAction={showToast}
              />
            ) : (
              <MockView view={view} onAction={showToast} />
            )}
          </div>
        </div>
      </div>
      {toast && (
        <div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-[10px] font-semibold text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
