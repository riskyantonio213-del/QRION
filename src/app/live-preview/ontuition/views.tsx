import { useState } from "react";
import { 
  ArrowRight, 
  Plus, 
  Search, 
  Megaphone, 
  Settings, 
  Send, 
  Users, 
  FileText, 
  Wallet, 
  TrendingDown, 
  CreditCard,
  Edit,
  Trash2,
  ChevronRight,
  Calendar, 
  Filter, 
  RotateCw, 
  Download, 
  FileSpreadsheet, 
  ChevronDown,
  Camera, Eye, Info
} from "lucide-react";

function PageHeader({ title, subtitle, buttonText }: { title: string; subtitle?: string; buttonText?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>
      <button className="flex items-center gap-2 bg-[#3DBA86] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#35a77a] transition">
        <Plus className="w-4 h-4" />
        {buttonText || "Tambah Baru"}
      </button>
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
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30"
      />
    </div>
  );
}

function EmptyTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-[#E8F7F1] text-slate-700 font-semibold">
            <tr>
              {headers.map((h) => (
                <th key={h} className="p-4 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50">
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? "p-4 font-semibold text-slate-800" : "p-4 whitespace-nowrap"}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 text-xs text-slate-400 bg-[#E8F7F1]/30">
        Menampilkan 1 - {rows.length} dari {rows.length} data
      </div>
    </div>
  );
}

export function OnTuitionManajemenBiaya() {
  const [activeTab, setActiveTab] = useState<"biaya" | "beasiswa">("biaya");

  const biayaHeaders = [
    "Nama Biaya",
    "Total Biaya",
    "Biaya Per Siswa",
    "Jumlah Siswa",
    "Total Diskon",
    "Biaya yang Harus Dibayarkan",
    "Diterima",
    "Prog(%)",
    "Jatuh Tempo",
    "Aksi"
  ];

  const biayaRowsData = [
    { nama: "Umum", total: "Rp 574.091.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 574.091.000", diterima: "Rp 27.406.000", prog: "4.77%", val: 4.77 },
    { nama: "Jul 2026", total: "Rp 222.310.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 222.310.000", diterima: "Rp 3.550.000", prog: "1.6%", val: 1.6 },
    { nama: "Agu 2026", total: "Rp 222.200.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 222.200.000", diterima: "Rp 3.150.000", prog: "1.42%", val: 1.42 },
    { nama: "Sep 2026", total: "Rp 22.250.004", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 22.250.004", diterima: "Rp 600.001", prog: "2.7%", val: 2.7 },
    { nama: "Okt 2026", total: "Rp 22.250.004", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 22.250.004", diterima: "Rp 1.000.002", prog: "4.49%", val: 4.49 },
    { nama: "Nov 2026", total: "Rp 20.250.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 20.250.000", diterima: "Rp 0", prog: "0%", val: 0 },
    { nama: "Des 2026", total: "Rp 20.250.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 20.250.000", diterima: "Rp 0", prog: "0%", val: 0 },
    { nama: "Mar 2027", total: "Rp 220.000.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 220.000.000", diterima: "Rp 4.400.000", prog: "2%", val: 2 },
    { nama: "Mei 2027", total: "Rp 222.960.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 222.960.000", diterima: "Rp 4.290.000", prog: "1.92%", val: 1.92 },
    { nama: "Jun 2027", total: "Rp 2.500.000", perSiswa: "-", jumlah: "-", diskon: "-", harusBayar: "Rp 2.500.000", diterima: "Rp 500.000", prog: "20%", val: 20 },
  ];

  const biayaFormattedRows = biayaRowsData.map((item) => [
    <div className="flex items-center gap-1">
      <span>{item.nama}</span>
      <ChevronRight className="w-3 h-3 text-slate-400" />
    </div>,
    item.total,
    item.perSiswa,
    item.jumlah,
    item.diskon,
    item.harusBayar,
    <span className="text-[#3DBA86] font-medium">{item.diterima}</span>,
    <div className="flex items-center gap-2">
      <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden">
        <div className="bg-[#3DBA86] h-full rounded-full" style={{ width: `${Math.min(item.val, 100)}%` }} />
      </div>
      <span className="text-[11px] font-medium">{item.prog}</span>
    </div>,
    "-",
    "-"
  ]);

  const beasiswaHeaders = ["No", "Nama Beasiswa", "Jumlah Siswa", "Aksi"];
  
  const beasiswaRowsData = [
    { no: "1", nama: "Diskon Juara 1", jumlah: "1" },
    { no: "2", nama: "Beasiswa Pemprov", jumlah: "4" },
    { no: "3", nama: "Beasiswa Bersaudara", jumlah: "1" },
    { no: "4", nama: "Anak Guru Assajadah", jumlah: "1" },
    { no: "5", nama: "BEASISWA JALAN JALAN KE SUMBAR", jumlah: "1" },
    { no: "6", nama: "tes bayar utk tagihan yg sudah terbayarkan", jumlah: "2" },
    { no: "7", nama: "Tes Beasiswa Tes Biaya Umum 2", jumlah: "12" },
    { no: "8", nama: "Diskon Anak Guru", jumlah: "2" },
  ];

  const beasiswaFormattedRows = beasiswaRowsData.map((item) => [
    item.no,
    item.nama,
    item.jumlah,
    <div className="flex items-center gap-2 text-slate-400">
      <button className="p-1 hover:text-slate-600 transition"><FileText className="w-4 h-4" /></button>
      <button className="p-1 hover:text-[#3DBA86] transition"><Edit className="w-4 h-4" /></button>
      <button className="p-1 hover:text-red-500 transition"><Trash2 className="w-4 h-4" /></button>
    </div>
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Manajemen Biaya</h2>
          <p className="text-xs text-slate-400 mt-1">Senin, 28 September 2026 - 10.30 WIB</p>
        </div>
        <button className="flex items-center gap-2 bg-[#3DBA86] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#35a77a] transition">
          <Plus className="w-4 h-4" />
          {activeTab === "biaya" ? "Tambah Biaya" : "Tambah Beasiswa"}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit text-xs font-medium text-slate-500">
        <button
          onClick={() => setActiveTab("biaya")}
          className={`px-5 py-2 rounded-xl transition ${
            activeTab === "biaya"
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Biaya Pendidikan
        </button>
        <button
          onClick={() => setActiveTab("beasiswa")}
          className={`px-5 py-2 rounded-xl transition ${
            activeTab === "beasiswa"
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Beasiswa
        </button>
      </div>

      {/* Render Active Table */}
      {activeTab === "biaya" ? (
        <EmptyTable headers={biayaHeaders} rows={biayaFormattedRows} />
      ) : (
        <EmptyTable headers={beasiswaHeaders} rows={beasiswaFormattedRows} />
      )}
    </div>
  );
}

export function OnTuitionPembayaran() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header Info & Select Tahun Ajaran */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Pembayaran Siswa</h2>
          <p className="text-xs text-slate-400 mt-1">
            Senin, 28 September 2026 - 14.21 WIB
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Home • Pembayaran Siswa
          </p>
        </div>

        {/* Dropdown Tahun Ajaran */}
        <button className="flex items-center gap-6 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition">
          <span>2026/2027</span>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Main Container Card */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col gap-6 min-h-[520px]">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ketik min. 3 huruf untuk mencari Nama/NISN"
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-emerald-100/80 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30 focus:border-[#3DBA86] transition"
          />
        </div>

        {/* Empty Search State */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4">
          <div className="w-16 h-16 rounded-full bg-[#E8F7F1] flex items-center justify-center text-[#3DBA86] mb-4">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-slate-800 text-sm mb-1.5">
            Cari Data Pembayaran Siswa
          </h3>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Masukkan nama atau NISN siswa pada kolom pencarian di atas untuk melihat riwayat dan status pembayaran
          </p>
        </div>
      </div>
    </div>
  );
}


export function OnTuitionPenarikan() {
  const [activeTab, setActiveTab] = useState<"transit" | "sekolah">("transit");

  const transitData = [
    {
      no: "1",
      waktu: "2026-07-28 10:38:36",
      nominal: "Rp946.000",
      keterangan: "Request penarikan saldo [Auto-cancelled]: New withdrawal request initiated.",
      status: "Dibatalkan",
      invoice: "-",
      aksi: "-",
    },
    {
      no: "2",
      waktu: "2026-07-26 16:28:53",
      nominal: "Rp15.000.000",
      keterangan: "butuh aja [Approver note]: oke dilanjutkan",
      status: "Berhasil",
      invoice: "PHNX-ONT-20260726162945-2691",
      aksi: "-",
    },
    {
      no: "3",
      waktu: "2026-07-23 09:57:04",
      nominal: "Rp15.000.000",
      keterangan: "Request pencairan dana [Auto-cancelled]: New withdrawal request initiated.",
      status: "Dibatalkan",
      invoice: "-",
      aksi: "-",
    },
    {
      no: "4",
      waktu: "2026-06-20 14:44:13",
      nominal: "Rp1.000.000",
      keterangan: "Request pencairan dana",
      status: "Dibatalkan",
      invoice: "-",
      aksi: "-",
    },
    {
      no: "5",
      waktu: "2026-05-29 11:33:08",
      nominal: "Rp5.000",
      keterangan: "Test uji coba",
      status: "Dibatalkan",
      invoice: "-",
      aksi: "-",
    },
  ];

  const sekolahData = [
    {
      no: "1",
      waktu: "2026-09-13 21:43:09",
      nominal: "Rp1.000",
      keterangan: "test withdrawal",
      status: "Berhasil",
      invoice: "INV-WD-20260913214309-4193",
      aksi: "-",
    },
    {
      no: "2",
      waktu: "2026-07-28 10:39:21",
      nominal: "Rp946.000",
      keterangan: "Request penarikan saldo",
      status: "Berhasil",
      invoice: "INV-WD-20260728103921-7748",
      aksi: "-",
    },
    {
      no: "3",
      waktu: "2026-07-23 09:59:52",
      nominal: "Rp10.000.000",
      keterangan: "KIRIM KE BENDAHARA",
      status: "Berhasil",
      invoice: "INV-WD-20260723095952-4286",
      aksi: "-",
    },
    {
      no: "4",
      waktu: "2026-06-20 14:45:04",
      nominal: "Rp4.000.000",
      keterangan: "diminta bendahara",
      status: "Berhasil",
      invoice: "INV-WD-20260620144504-1368",
      aksi: "-",
    },
    {
      no: "5",
      waktu: "2026-05-29 11:34:25",
      nominal: "Rp852.002",
      keterangan: "Cairkan",
      status: "Berhasil",
      invoice: "INV-WD-20260529113425-3839",
      aksi: "-",
    },
  ];

  const isTransit = activeTab === "transit";
  const currentData = isTransit ? transitData : sekolahData;
  const totalData = isTransit ? 7 : 10;
  const saldoAmount = isTransit ? "Rp106.246.000" : "Rp45.816.001";
  const buttonText = isTransit ? "Request Penarikan" : "Penarikan";
  const historyTitle = isTransit ? "Riwayat Penarikan Saldo Transit" : "Riwayat Penarikan Saldo Kas";

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">Penarikan</h2>
        <p className="text-xs text-slate-400 mt-1">Senin, 28 September 2026 - 10.31 WIB</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit text-xs font-medium text-slate-500">
        <button
          onClick={() => setActiveTab("transit")}
          className={`px-5 py-2 rounded-xl transition ${
            isTransit
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Kas Transit
        </button>
        <button
          onClick={() => setActiveTab("sekolah")}
          className={`px-5 py-2 rounded-xl transition ${
            !isTransit
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Kas Sekolah
        </button>
      </div>

      {/* Saldo Banner Card */}
      <div className="bg-[#282B4A] text-white p-6 rounded-2xl space-y-4">
        <div className="text-xs text-slate-300 font-medium">Saldo</div>
        <div className="text-3xl font-bold">{saldoAmount}</div>
        <button className="bg-[#3DBA86] hover:bg-[#35a77a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition">
          {buttonText}
        </button>
      </div>

      {/* Table Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-800">{historyTitle}</h3>

        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#E8F7F1] text-slate-700 font-semibold">
                <tr>
                  <th className="p-4 whitespace-nowrap">No ⇅</th>
                  <th className="p-4 whitespace-nowrap">Waktu & Tanggal ⇅</th>
                  <th className="p-4 whitespace-nowrap">Nominal tagihan ⇅</th>
                  <th className="p-4 whitespace-nowrap">Keterangan</th>
                  <th className="p-4 whitespace-nowrap">Status ⇅</th>
                  <th className="p-4 whitespace-nowrap">Invoice</th>
                  {isTransit && <th className="p-4 whitespace-nowrap">Aksi</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {currentData.map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-500">{row.no}</td>
                    <td className="p-4 whitespace-nowrap">{row.waktu}</td>
                    <td className="p-4 font-medium text-slate-800 whitespace-nowrap">{row.nominal}</td>
                    <td className="p-4 max-w-sm">{row.keterangan}</td>
                    <td className="p-4 whitespace-nowrap">
                      {row.status === "Berhasil" ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600">
                          <span className="w-3.5 h-3.5 rounded-full border border-emerald-500 flex items-center justify-center text-[9px] font-bold">✓</span>
                          Berhasil
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-red-50 text-red-500">
                          <span className="w-3.5 h-3.5 rounded-full border border-red-400 flex items-center justify-center text-[9px] font-bold">✕</span>
                          Dibatalkan
                        </span>
                      )}
                    </td>
                    <td className="p-4 whitespace-nowrap text-slate-500">{row.invoice}</td>
                    {isTransit && <td className="p-4 whitespace-nowrap text-slate-400">{row.aksi}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="p-4 text-xs text-slate-500 bg-[#E8F7F1]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              Menampilkan 1 - {currentData.length} dari {totalData} data
            </div>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 text-xs">
                Previous
              </button>
              <button className="px-3 py-1.5 rounded-xl bg-[#3DBA86] text-white font-semibold text-xs">
                1
              </button>
              <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs">
                2
              </button>
              <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OnTuitionJurnal() {
  const [activeTab, setActiveTab] = useState<"monitoring" | "pembayaran" | "transit" | "sekolah">("monitoring");

  // Data 1: Jurnal Monitoring
  const monitoringData = [
    { no: "1", nis: "100129", kelas: "SMP Kelas 7", nama: "Aisyah Maulana", kategori: "Umum", item: "Tes multiple aisyah maulana", bulan: "September", tglPenagihan: "25/09/2026", jatuhTempo: "25/09/2026", nominal: "Rp5.000", dibayarkan: "Rp5.000", belumDibayar: "Rp0", status: "Lunas", tunggakan: "-" },
    { no: "2", nis: "100129", kelas: "SMP Kelas 7", nama: "Aisyah Maulana", kategori: "Umum", item: "Tes", bulan: "Mei", tglPenagihan: "23/05/2026", jatuhTempo: "30/05/2026", nominal: "Rp12.000", dibayarkan: "Rp12.000", belumDibayar: "Rp0", status: "Lunas", tunggakan: "-" },
    { no: "3", nis: "100030", kelas: "-", nama: "Intan Permata", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "Desember", tglPenagihan: "01/12/2026", jatuhTempo: "21/12/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Belum Lunas", tunggakan: "-" },
    { no: "4", nis: "100005", kelas: "SMP Kelas 7", nama: "Rina Wijaya Kurma", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "Desember", tglPenagihan: "01/12/2026", jatuhTempo: "21/12/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Belum Lunas", tunggakan: "-" },
    { no: "5", nis: "100030", kelas: "-", nama: "Intan Permata", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "November", tglPenagihan: "01/11/2026", jatuhTempo: "21/11/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Belum Lunas", tunggakan: "-" },
    { no: "6", nis: "100005", kelas: "SMP Kelas 7", nama: "Rina Wijaya Kurma", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "November", tglPenagihan: "01/11/2026", jatuhTempo: "21/11/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Belum Lunas", tunggakan: "-" },
    { no: "7", nis: "100030", kelas: "-", nama: "Intan Permata", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "Oktober", tglPenagihan: "01/10/2026", jatuhTempo: "21/10/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Belum Lunas", tunggakan: "-" },
    { no: "8", nis: "100005", kelas: "SMP Kelas 7", nama: "Rina Wijaya Kurma", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "Oktober", tglPenagihan: "01/10/2026", jatuhTempo: "21/10/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Belum Lunas", tunggakan: "-" },
    { no: "9", nis: "100030", kelas: "-", nama: "Intan Permata", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "September", tglPenagihan: "01/09/2026", jatuhTempo: "21/09/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Tunggakan", tunggakan: "Ya" },
    { no: "10", nis: "100005", kelas: "SMP Kelas 7", nama: "Rina Wijaya Kurma", kategori: "Bulanan", item: "SPP Bulanan Bersaudara", bulan: "September", tglPenagihan: "01/09/2026", jatuhTempo: "21/09/2026", nominal: "Rp125.000", dibayarkan: "Rp0", belumDibayar: "Rp125.000", status: "Tunggakan", tunggakan: "Ya" },
  ];

  // Data 2: Jurnal Pembayaran
  const pembayaranData = [
    { no: "1", nis: "100129", kelas: "SMP Kelas 7", nama: "Aisyah Maulana", kategori: "Tes", item: "Tes a.n Aisyah Maulana", waktu: "25/09/2026, 14.55", channel: "Cash", nominal: "Rp12.000", invoice: "PHNX-ONT-20260925145522-...", detail: "Lunas" },
    { no: "2", nis: "100129", kelas: "SMP Kelas 7", nama: "Aisyah Maulana", kategori: "Tes", item: "Tes multiple aisyah maulana a.n Aisyah Maulana", waktu: "25/09/2026, 14.55", channel: "Cash", nominal: "Rp5.000", invoice: "PHNX-ONT-20260925145522-...", detail: "Lunas" },
    { no: "3", nis: "567891045", kelas: "-", nama: "Freddy Mercuree", kategori: "SPP Testing Argeo", item: "SPP Testing Argeo Bulan 2026-10 a.n Freddy Mercuree", waktu: "25/09/2026, 10.46", channel: "Cash", nominal: "Rp500.001", invoice: "PHNX-ONT-20260925104616-...", detail: "Lunas" },
    { no: "4", nis: "567891045", kelas: "-", nama: "Freddy Mercuree", kategori: "SPP Assajadah", item: "SPP Assajadah Bulan 2027-03 a.n Freddy Mercuree [Bank Mandiri | Kode: 05569691]", waktu: "17/09/2026, 12.26", channel: "Transfer Mandiri", nominal: "Rp2.200.000", invoice: "PHNX-ONT-20260917122628-...", detail: "Lunas" },
    { no: "5", nis: "567891045", kelas: "-", nama: "Freddy Mercuree", kategori: "SPP Assajadah", item: "SPP Assajadah Bulan 2027-05 a.n Freddy Mercuree [Bank Mandiri | Kode: 05569691]", waktu: "17/09/2026, 12.26", channel: "Transfer Mandiri", nominal: "Rp2.200.000", invoice: "PHNX-ONT-20260917122628-...", detail: "Lunas" },
    { no: "6", nis: "100113", kelas: "-", nama: "Maya Ramadhan", kategori: "SPP Assajadah", item: "SPP Assajadah Bulan 2026-08 a.n Maya Ramadhan", waktu: "14/09/2026, 13.10", channel: "Payment Gateway", nominal: "Rp2.200.000", invoice: "PHNX-ONT-20260914131031-...", detail: "Lunas" },
    { no: "7", nis: "100113", kelas: "-", nama: "Maya Ramadhan", kategori: "SPP Assajadah", item: "SPP Assajadah Bulan 2026-07 a.n Maya Ramadhan", waktu: "14/09/2026, 13.00", channel: "Payment Gateway", nominal: "Rp2.200.000", invoice: "PHNX-ONT-20260914130032-...", detail: "Lunas" },
    { no: "8", nis: "100113", kelas: "-", nama: "Maya Ramadhan", kategori: "SPP Bulanan", item: "SPP Bulanan Bulan 2026-09 a.n Maya Ramadhan", waktu: "14/09/2026, 12.55", channel: "Payment Gateway", nominal: "Rp200.000", invoice: "PHNX-ONT-20260914125526-...", detail: "Lunas" },
    { no: "9", nis: "100016", kelas: "-", nama: "Farhan Nugroho Aja", kategori: "SPP Bulanan", item: "SPP Bulanan Bulan 2026-09 a.n Farhan Nugroho Aja", waktu: "14/09/2026, 12.51", channel: "Payment Gateway", nominal: "Rp200.000", invoice: "PHNX-ONT-20260914125105-...", detail: "Lunas" },
    { no: "10", nis: "100113", kelas: "-", nama: "Maya Ramadhan", kategori: "Uang Ujian", item: "Uang Ujian a.n Maya Ramadhan", waktu: "11/09/2026, 15.55", channel: "Payment Gateway", nominal: "Rp50.000", invoice: "PHNX-ONT-20260911115505-...", detail: "Lunas" },
  ];

  // Data 3: Jurnal Rekening Transit
  const transitData = [
    { no: "1", idTx: "PHNX-ONT-20260914131031-6108", ket: "(1 tagihan) a.n Maya Ramadhan", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp2.200.000", saldo: "Rp106.246.000", waktu: "14/09/2026, 13.10" },
    { no: "2", idTx: "PHNX-ONT-20260914130032-5267", ket: "(1 tagihan) a.n Maya Ramadhan", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp2.200.000", saldo: "Rp104.046.000", waktu: "14/09/2026, 13.00" },
    { no: "3", idTx: "PHNX-ONT-20260914125526-9108", ket: "(1 tagihan) a.n Maya Ramadhan", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp200.000", saldo: "Rp101.846.000", waktu: "14/09/2026, 12.55" },
    { no: "4", idTx: "PHNX-ONT-20260914125105-6096", ket: "(1 tagihan) a.n Farhan Nugroho Aja", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp200.000", saldo: "Rp101.646.000", waktu: "14/09/2026, 12.51" },
    { no: "5", idTx: "PHNX-ONT-20260911115505-8534", ket: "(1 tagihan) a.n Maya Ramadhan", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp50.000", saldo: "Rp101.446.000", waktu: "11/09/2026, 15.55" },
    { no: "6", idTx: "PHNX-ONT-20260911152603-8369", ket: "(1 tagihan) a.n Farhan Nugroho Aja", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp50.000", saldo: "Rp101.396.000", waktu: "11/09/2026, 15.26" },
    { no: "7", idTx: "PHNX-ONT-20260728115757-2373", ket: "(2 tagihan) a.n Farhan Nugroho", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp400.000", saldo: "Rp101.346.000", waktu: "28/07/2026, 11.57" },
    { no: "8", idTx: "PHNX-ONT-20260726162945-2691", ket: "Withdrawal request #6 approved by Qrion Super Admin", jenis: "Debit", debit: "1337485954 - BILLING", kredit: "1362586287 - CASH", nominal: "Rp15.000.000", saldo: "Rp100.946.000", waktu: "26/07/2026, 16.29" },
    { no: "9", idTx: "PHNX-ONT-20260724131231-2297", ket: "(1 tagihan) a.n Farhan Nugroho", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp25.000", saldo: "Rp115.946.000", waktu: "24/07/2026, 13.12" },
    { no: "10", idTx: "PHNX-ONT-20260724083346-8543", ket: "(1 tagihan) a.n Farhan Nugroho", jenis: "Kredit", debit: "-", kredit: "1337485954 - BILLING", nominal: "Rp50.000", saldo: "Rp115.921.000", waktu: "24/07/2026, 08.33" },
  ];

  // Data 4: Jurnal Rekening Sekolah
  const sekolahData = [
    { no: "1", idTx: "PHNX-ONT-20260925145522-5997", ket: "(2 tagihan) a.n Aisyah Maulana", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp17.000", saldo: "Rp45.816.001", waktu: "25/09/2026, 14.55" },
    { no: "2", idTx: "PHNX-ONT-20260925104616-7810", ket: "(1 tagihan) a.n Freddy Mercuree", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp500.001", saldo: "Rp45.799.001", waktu: "25/09/2026, 10.46" },
    { no: "3", idTx: "PHNX-ONT-20260917122628-2749", ket: "(2 tagihan) a.n Freddy Mercuree", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp4.400.000", saldo: "Rp45.299.000", waktu: "17/09/2026, 12.26" },
    { no: "4", idTx: "INV-WD-20260913214309-4193", ket: "test withdrawal", jenis: "Debit", debit: "1362586287 - CASH", kredit: "-", nominal: "Rp1.000", saldo: "Rp40.899.000", waktu: "13/09/2026, 21.43" },
    { no: "5", idTx: "PHNX-ONT-20260904102953-5922", ket: "Uang Pembangunan a.n Rina Wijaya Kurma", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp4.000.000", saldo: "Rp40.900.000", waktu: "04/09/2026, 10.29" },
    { no: "6", idTx: "PHNX-ONT-20260901112838-4250", ket: "Uang Pembangunan a.n Risky Antonio Pauji", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp1.000.000", saldo: "Rp36.900.000", waktu: "01/09/2026, 11.28" },
    { no: "7", idTx: "PHNX-ONT-20260901112724-8024", ket: "(2 tagihan) a.n Risky Antonio Pauji", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp1.300.000", saldo: "Rp35.900.000", waktu: "01/09/2026, 11.27" },
    { no: "8", idTx: "PHNX-ONT-20260827103128-8000", ket: "(1 tagihan) a.n Risky Antonio Pauji", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp3.500.000", saldo: "Rp34.600.000", waktu: "27/08/2026, 10.31" },
    { no: "9", idTx: "PHNX-ONT-20260821095153-7412", ket: "Spp Bulan 2027-05 a.n Risky Antonio Pauji", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp100.000", saldo: "Rp31.100.000", waktu: "21/08/2026, 09.51" },
    { no: "10", idTx: "PHNX-ONT-20260819223852-3604", ket: "School Trip to Bangla a.n Risky Antonio Pauji", jenis: "Kredit", debit: "-", kredit: "1362586287 - CASH", nominal: "Rp5.000.000", saldo: "Rp31.000.000", waktu: "19/08/2026, 22.38" },
  ];

  const getTotalCount = () => {
    switch (activeTab) {
      case "monitoring": return 1224;
      case "pembayaran": return 65;
      case "transit": return 42;
      case "sekolah": return 57;
    }
  };

  const getMaxPages = () => {
    switch (activeTab) {
      case "monitoring": return 123;
      case "pembayaran": return 7;
      case "transit": return 5;
      case "sekolah": return 6;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Jurnal</h2>
          <p className="text-xs text-slate-400 mt-1">
            {activeTab === "transit" 
              ? "Senin, 28 September 2026 - 10.32 WIB" 
              : activeTab === "sekolah" 
              ? "Senin, 28 September 2026 - 10.32 WIB" 
              : "Senin, 28 September 2026 - 10.31 WIB"}
          </p>
        </div>

        {/* Academic Year Dropdown */}
        <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-1.5 text-xs bg-white text-slate-700 font-medium">
          <span>2026/2027</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-2xl w-fit text-xs font-medium text-slate-500">
        <button
          onClick={() => setActiveTab("monitoring")}
          className={`px-4 py-2 rounded-xl transition ${
            activeTab === "monitoring"
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Jurnal Monitoring
        </button>
        <button
          onClick={() => setActiveTab("pembayaran")}
          className={`px-4 py-2 rounded-xl transition ${
            activeTab === "pembayaran"
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Jurnal Pembayaran
        </button>
        <button
          onClick={() => setActiveTab("transit")}
          className={`px-4 py-2 rounded-xl transition ${
            activeTab === "transit"
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Jurnal Rekening Transit
        </button>
        <button
          onClick={() => setActiveTab("sekolah")}
          className={`px-4 py-2 rounded-xl transition ${
            activeTab === "sekolah"
              ? "bg-white text-[#3DBA86] font-semibold shadow-sm"
              : "hover:text-slate-800"
          }`}
        >
          Jurnal Rekening Sekolah
        </button>
      </div>

      {/* Action / Filter Bar */}
      <div className="space-y-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-2 rounded-xl text-xs text-slate-600 hover:bg-slate-50">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Pilih Tanggal dan Hari</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-2 rounded-xl text-xs text-slate-600 hover:bg-slate-50">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Filter Data</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 border border-[#3DBA86] text-[#3DBA86] bg-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-50 transition">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Refresh Data</span>
            </button>
            <button className="flex items-center gap-1.5 bg-[#2E335A] text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#25294a] transition">
              <Download className="w-3.5 h-3.5" />
              <span>Request Data</span>
            </button>
            <button className="flex items-center gap-1.5 bg-[#2E335A] text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#25294a] transition">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Export Excel</span>
            </button>
          </div>
        </div>
        <p className="text-[11px] italic text-slate-400">
          {activeTab === "monitoring" && "Pencarian berdasarkan tanggal penagihan"}
          {activeTab === "pembayaran" && "Pencarian berdasarkan tanggal transaksi"}
          {activeTab === "transit" && "Pencarian berdasarkan waktu transaksi jurnal"}
          {activeTab === "sekolah" && "Pencarian berdasarkan waktu transaksi jurnal"}
        </p>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          {/* TAB 1: JURNAL MONITORING */}
          {activeTab === "monitoring" && (
            <table className="w-full text-xs text-left">
              <thead className="bg-[#E8F7F1] text-slate-700 font-semibold whitespace-nowrap">
                <tr>
                  <th className="p-4">No ⇅</th>
                  <th className="p-4">NIS ⇅</th>
                  <th className="p-4">Kelas ⇅</th>
                  <th className="p-4">Nama Siswa ⇅</th>
                  <th className="p-4">Kategori ⇅</th>
                  <th className="p-4">Item Biaya ⇅</th>
                  <th className="p-4">Bulan ⇅</th>
                  <th className="p-4">Tgl Penagihan ⇅</th>
                  <th className="p-4">Jatuh Tempo ⇅</th>
                  <th className="p-4">Nominal Tagihan ⇅</th>
                  <th className="p-4">Dibayarkan ⇅</th>
                  <th className="p-4">Belum Dibayarkan ⇅</th>
                  <th className="p-4">Status ⇅</th>
                  <th className="p-4">Tunggakan ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 whitespace-nowrap">
                {monitoringData.map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-500">{row.no}</td>
                    <td className="p-4">{row.nis}</td>
                    <td className="p-4">{row.kelas}</td>
                    <td className="p-4 font-medium text-slate-800">{row.nama}</td>
                    <td className="p-4">{row.kategori}</td>
                    <td className="p-4 max-w-xs truncate">{row.item}</td>
                    <td className="p-4">{row.bulan}</td>
                    <td className="p-4">{row.tglPenagihan}</td>
                    <td className="p-4">{row.jatuhTempo}</td>
                    <td className="p-4 font-medium text-slate-800">{row.nominal}</td>
                    <td className="p-4 text-emerald-600 font-medium">{row.dibayarkan}</td>
                    <td className="p-4 text-red-500 font-medium">{row.belumDibayar}</td>
                    <td className="p-4">
                      {row.status === "Lunas" && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600">
                          Lunas
                        </span>
                      )}
                      {row.status === "Belum Lunas" && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-500">
                          Belum Lunas
                        </span>
                      )}
                      {row.status === "Tunggakan" && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-red-50 text-red-500">
                          Tunggakan
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      {row.tunggakan === "Ya" ? (
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-red-100 text-red-600">
                          Ya
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* TAB 2: JURNAL PEMBAYARAN */}
          {activeTab === "pembayaran" && (
            <table className="w-full text-xs text-left">
              <thead className="bg-[#E8F7F1] text-slate-700 font-semibold whitespace-nowrap">
                <tr>
                  <th className="p-4">No ⇅</th>
                  <th className="p-4">NIS ⇅</th>
                  <th className="p-4">Kelas ⇅</th>
                  <th className="p-4">Nama Siswa ⇅</th>
                  <th className="p-4">Kategori ⇅</th>
                  <th className="p-4">Item Biaya ⇅</th>
                  <th className="p-4">Tanggal & Waktu ⇅</th>
                  <th className="p-4">Channel ⇅</th>
                  <th className="p-4">Pembayaran ⇅</th>
                  <th className="p-4">Invoice</th>
                  <th className="p-4">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 whitespace-nowrap">
                {pembayaranData.map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-500">{row.no}</td>
                    <td className="p-4">{row.nis}</td>
                    <td className="p-4">{row.kelas}</td>
                    <td className="p-4 font-medium text-slate-800">{row.nama}</td>
                    <td className="p-4">{row.kategori}</td>
                    <td className="p-4 max-w-xs truncate">{row.item}</td>
                    <td className="p-4">{row.waktu}</td>
                    <td className="p-4">{row.channel}</td>
                    <td className="p-4 font-medium text-emerald-600">{row.nominal}</td>
                    <td className="p-4 text-slate-500 font-mono text-[11px]">{row.invoice}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600">
                        {row.detail}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* TAB 3: JURNAL REKENING TRANSIT */}
          {activeTab === "transit" && (
            <table className="w-full text-xs text-left">
              <thead className="bg-[#E8F7F1] text-slate-700 font-semibold whitespace-nowrap">
                <tr>
                  <th className="p-4">No ⇅</th>
                  <th className="p-4">ID Transaksi ⇅</th>
                  <th className="p-4">Keterangan ⇅</th>
                  <th className="p-4">Jenis Transaksi ⇅</th>
                  <th className="p-4">Akun Debit ⇅</th>
                  <th className="p-4">Akun Kredit ⇅</th>
                  <th className="p-4">Nominal Transaksi ⇅</th>
                  <th className="p-4">Saldo ⇅</th>
                  <th className="p-4">Waktu & Tanggal ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 whitespace-nowrap">
                {transitData.map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-500">{row.no}</td>
                    <td className="p-4 font-mono text-[11px] text-slate-600">{row.idTx}</td>
                    <td className="p-4 max-w-xs truncate">{row.ket}</td>
                    <td className="p-4">{row.jenis}</td>
                    <td className="p-4">{row.debit}</td>
                    <td className="p-4 text-slate-700">{row.kredit}</td>
                    <td className="p-4 font-medium text-slate-800">{row.nominal}</td>
                    <td className="p-4 font-medium text-slate-800">{row.saldo}</td>
                    <td className="p-4">{row.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* TAB 4: JURNAL REKENING SEKOLAH */}
          {activeTab === "sekolah" && (
            <table className="w-full text-xs text-left">
              <thead className="bg-[#E8F7F1] text-slate-700 font-semibold whitespace-nowrap">
                <tr>
                  <th className="p-4">No ⇅</th>
                  <th className="p-4">ID Transaksi ⇅</th>
                  <th className="p-4">Keterangan ⇅</th>
                  <th className="p-4">Jenis Transaksi ⇅</th>
                  <th className="p-4">Akun Debit ⇅</th>
                  <th className="p-4">Akun Kredit ⇅</th>
                  <th className="p-4">Nominal Transaksi ⇅</th>
                  <th className="p-4">Saldo ⇅</th>
                  <th className="p-4">Waktu & Tanggal ⇅</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 whitespace-nowrap">
                {sekolahData.map((row) => (
                  <tr key={row.no} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-500">{row.no}</td>
                    <td className="p-4 font-mono text-[11px] text-slate-600">{row.idTx}</td>
                    <td className="p-4 max-w-xs truncate">{row.ket}</td>
                    <td className="p-4">{row.jenis}</td>
                    <td className="p-4">{row.debit}</td>
                    <td className="p-4 text-slate-700">{row.kredit}</td>
                    <td className="p-4 font-medium text-slate-800">{row.nominal}</td>
                    <td className="p-4 font-medium text-slate-800">{row.saldo}</td>
                    <td className="p-4">{row.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Table Footer / Pagination */}
        <div className="p-4 text-xs text-slate-500 bg-[#E8F7F1]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Menampilkan 1 - 10 dari {getTotalCount()} data
          </div>
          <div className="flex items-center gap-1.5">
            <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 text-xs">
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-xl bg-[#3DBA86] text-white font-semibold text-xs">
              1
            </button>
            <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs">
              2
            </button>
            <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs">
              3
            </button>
            {getMaxPages() > 3 && (
              <>
                <span className="text-slate-400 px-1">...</span>
                <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs">
                  {getMaxPages()}
                </button>
              </>
            )}
            <button className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OnTuitionBroadcast() {
  const [searchQuery, setSearchQuery] = useState("");

  const broadcastHistory = [
    { id: 1, title: "Closing Statement", countText: "2 Siswa", ratio: "2/2" },
    { id: 2, title: "Selamat Pagi", countText: "2 Siswa", ratio: "2/2" },
    { id: 3, title: "Selamat Pagi", countText: "2 Siswa", ratio: "2/2" },
    { id: 4, title: "Bayar SPP", countText: "1 Siswa", ratio: "1/1" },
    { id: 5, title: "REMINDER PEMBAYARAN SPP BULAN MEI", countText: "1 Siswa", ratio: "1/1" },
    { id: 6, title: "Reminder SPP Juli", countText: "1 Siswa", ratio: "1/1" },
    { id: 7, title: "Reminder SPP Mei 2026", countText: "1 Siswa", ratio: "1/1" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Broadcast</h2>
          <p className="text-xs text-slate-400 mt-1">
            Senin, 28 September 2026 - 10.32 WIB
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">Home › Broadcast</p>
        </div>

        {/* Academic Year Dropdown */}
        <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-1.5 text-xs bg-white text-slate-700 font-medium cursor-pointer">
          <span>2026/2027</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Terkirim */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs text-slate-500 font-medium">Total Terkirim</p>
            <p className="text-2xl font-bold text-slate-800">58</p>
            <p className="text-[11px] text-slate-400">
              <span className="text-emerald-500 font-semibold">100%</span> dari total keseluruhan broadcast
            </p>
          </div>
          <div className="p-3 bg-[#E8F7F1] text-[#3DBA86] rounded-full">
            <Send className="w-5 h-5" />
          </div>
        </div>

        {/* Broadcast Penagihan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs text-slate-500 font-medium">Broadcast Penagihan</p>
            <p className="text-2xl font-bold text-slate-800">36</p>
            <p className="text-[11px] text-slate-400">
              <span className="text-purple-500 font-semibold">62%</span> dari total keseluruhan broadcast
            </p>
          </div>
          <div className="p-3 bg-purple-50 text-purple-500 rounded-full">
            <Send className="w-5 h-5" />
          </div>
        </div>

        {/* Broadcast Informasi */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs text-slate-500 font-medium">Broadcast Informasi</p>
            <p className="text-2xl font-bold text-slate-800">0</p>
            <p className="text-[11px] text-slate-400">
              <span className="text-amber-500 font-semibold">0%</span> dari total keseluruhan broadcast
            </p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-500 rounded-full">
            <Send className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari broadcast..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30 text-slate-700"
          />
        </div>
        <button className="bg-[#3DBA86] text-white px-8 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#35a77a] transition">
          Cari
        </button>
      </div>

      {/* Riwayat Broadcast Container */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
        <div className="flex items-center justify-between pb-2">
          <h3 className="font-bold text-slate-800 text-sm">Riwayat Broadcast</h3>
          <button className="flex items-center gap-1.5 bg-[#3DBA86] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#35a77a] transition">
            <Plus className="w-4 h-4" />
            Buat Broadcast
          </button>
        </div>

        {/* Broadcast List */}
        <div className="divide-y divide-slate-100">
          {broadcastHistory.map((item) => (
            <div
              key={item.id}
              className="py-3.5 flex items-center justify-between hover:bg-slate-50/50 px-2 rounded-xl transition"
            >
              <div className="space-y-1">
                <p className="font-bold text-slate-800 text-xs">{item.title}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Users className="w-3.5 h-3.5" />
                  <span>{item.countText}</span>
                </div>
              </div>
              <div className="bg-[#E8F7F1] text-[#3DBA86] text-xs font-semibold px-3 py-1.5 rounded-xl">
                {item.ratio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OnTuitionPengaturan() {
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showPinCurrent, setShowPinCurrent] = useState(false);

  const paymentHistory = [
    {
      invoice: "PHNX-ONT-20260923235034-6598",
      tanggal: "23 Sep 2026",
      total: "Rp5.838.931,58",
      status: "Berhasil",
    },
    {
      invoice: "D2418026NEBD0P2IV85ZENN",
      tanggal: "23 Sep 2026",
      total: "Rp5.838.931,58",
      status: "Belum Dibayar",
    },
    {
      invoice: "D2418026BZ52X2LAB4QJXER",
      tanggal: "23 Sep 2026",
      total: "Rp6.560.597,28",
      status: "Belum Dibayar",
    },
    {
      invoice: "D2418026T5AJ65BD52CW6D1",
      tanggal: "23 Sep 2026",
      total: "Rp6.560.597,28",
      status: "Belum Dibayar",
    },
    {
      invoice: "D2418026QE640V6G2CMRHPR",
      tanggal: "23 Sep 2026",
      total: "Rp6.560.597,28",
      status: "Belum Dibayar",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">Pengaturan</h2>
        <p className="text-xs text-slate-400 mt-1">
          Senin, 28 September 2026 - 10.33 WIB
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">Home » Pengaturan</p>
      </div>

      {/* 1. Profil Section */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="bg-[#4A4D73] text-white p-4 px-6">
          <h3 className="font-bold text-sm">Profil</h3>
          <p className="text-xs text-slate-200 font-light mt-0.5">
            Kelola informasi profil Anda
          </p>
        </div>

        <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Container */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#18A0A4] flex items-center justify-center text-white font-bold text-lg shadow-inner overflow-hidden border-2 border-white">
                <div className="text-center">
                  <span className="text-xs tracking-wider opacity-80 block">orion</span>
                  <span className="text-[10px] font-normal block opacity-60">by qrion</span>
                </div>
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-emerald-500 text-white rounded-full border-2 border-white shadow hover:bg-emerald-600 transition">
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center max-w-[130px] leading-tight">
              Klik ikon kamera untuk mengunggah foto
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex-1 space-y-4 w-full">
            <div>
              <label className="text-xs font-semibold text-slate-700">Nama Lengkap</label>
              <input
                type="text"
                defaultValue="Argeomerta"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">No. Telepon</label>
              <input
                type="text"
                defaultValue="6285264397615"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">Institusi</label>
              <input
                type="text"
                defaultValue="SMP N RND 1 PKU"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30"
              />
            </div>
            <div>
              <button className="bg-[#393A5B] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#2d2e49] transition">
                Edit Profil
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Ubah Password Section */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="bg-[#4A4D73] text-white p-4 px-6">
          <h3 className="font-bold text-sm">Ubah Password</h3>
          <p className="text-xs text-slate-200 font-light mt-0.5">
            Perbarui password akun Anda
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700">Password Saat Ini</label>
            <div className="relative mt-1">
              <input
                type={showPasswordCurrent ? "text" : "password"}
                placeholder="Masukkan password saat ini"
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30 text-slate-700"
              />
              <button
                type="button"
                onClick={() => setShowPasswordCurrent(!showPasswordCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 flex items-start gap-2.5 text-sky-600 text-[11px]">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Jika Anda belum pernah mengubah password (masih menggunakan password bawaan sistem), kosongkan field "Password Saat Ini" dan langsung isi password baru.
            </span>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">Password Baru</label>
            <div className="relative mt-1">
              <input
                type={showPasswordNew ? "text" : "password"}
                placeholder="Masukkan password baru (min. 6 karakter)"
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30 text-slate-700"
              />
              <button
                type="button"
                onClick={() => setShowPasswordNew(!showPasswordNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">Konfirmasi Password Baru</label>
            <div className="relative mt-1">
              <input
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="Masukkan ulang password baru"
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30 text-slate-700"
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <button className="bg-[#3DBA86] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#35a77a] transition">
              Ubah Password
            </button>
          </div>
        </div>
      </div>

      {/* 3. Ubah PIN Section */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="bg-[#4A4D73] text-white p-4 px-6">
          <h3 className="font-bold text-sm">Ubah PIN</h3>
          <p className="text-xs text-slate-200 font-light mt-0.5">
            Ubah PIN 6 digit Anda
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700">Password Saat Ini</label>
            <div className="relative mt-1">
              <input
                type={showPinCurrent ? "text" : "password"}
                placeholder="Masukkan password saat ini"
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30 text-slate-700"
              />
              <button
                type="button"
                onClick={() => setShowPinCurrent(!showPinCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 flex items-start gap-2.5 text-sky-600 text-[11px]">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Jika Anda belum pernah mengubah password (masih menggunakan password bawaan sistem), kosongkan field "Password Saat Ini" dan langsung isi PIN baru.
            </span>
          </div>

          {/* PIN Baru Inputs */}
          <div>
            <label className="text-xs font-semibold text-slate-700">PIN Baru</label>
            <div className="flex gap-2 mt-1.5">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="password"
                  maxLength={1}
                  className="w-9 h-9 border border-slate-200 rounded-xl text-center text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30"
                />
              ))}
            </div>
          </div>

          {/* Konfirmasi PIN Baru Inputs */}
          <div>
            <label className="text-xs font-semibold text-slate-700">Konfirmasi PIN Baru</label>
            <div className="flex gap-2 mt-1.5">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="password"
                  maxLength={1}
                  className="w-9 h-9 border border-slate-200 rounded-xl text-center text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3DBA86]/30"
                />
              ))}
            </div>
          </div>

          <div>
            <button className="bg-[#3DBA86] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#35a77a] transition">
              Ubah PIN
            </button>
          </div>
        </div>
      </div>

      {/* 4. Riwayat Pembayaran Section */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="bg-[#4A4D73] text-white p-4 px-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm">Riwayat Pembayaran</h3>
            <p className="text-xs text-slate-200 font-light mt-0.5">
              5 transaksi terakhir
            </p>
          </div>
          <button className="bg-[#5C5F88] text-white px-3.5 py-1.5 rounded-xl text-xs font-medium hover:bg-[#6b6e9b] transition">
            Lihat Semua
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="p-4 pl-6">Invoice</th>
                <th className="p-4">Tanggal</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 whitespace-nowrap">
              {paymentHistory.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-mono text-[11px] text-slate-700 font-medium">
                    {item.invoice}
                  </td>
                  <td className="p-4 text-slate-500">{item.tanggal}</td>
                  <td className="p-4 font-semibold text-slate-800">{item.total}</td>
                  <td className="p-4">
                    {item.status === "Berhasil" ? (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-600">
                        Berhasil
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-50 text-amber-600">
                        Belum Dibayar
                      </span>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="text-[#3DBA86] font-semibold text-xs hover:underline">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}