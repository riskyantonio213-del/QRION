import type { LucideIcon } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

import { products, type Product, type ProductSlug, type StatusTone } from "@/data/products";
import { onboard } from "@/data/onboard";

/**
 * Content for the QRION Live Experience (/live-preview).
 *
 * Product names, categories, taglines, metrics and activity rows are reused
 * from `src/data/products.ts` so the app view can never drift from the public
 * website. Only the app-specific extras live here.
 *
 * Everything is illustrative interface copy: every number is a placeholder
 * labelled "Contoh data" in the UI. No real school data is invented.
 */

/** Chart slot in the shared QRION data-visualisation palette. */
export type ChartSlot = "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";

/** Kartu dashboard di sidebar, overview, dan menu seluler Live Preview. */
export type LivePreviewProduct = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  icon: LucideIcon;
};

/**
 * Daftar lengkap dashboard di ekosistem Live Preview: ONBOARD (dashboard
 * induk sekolah) diikuti seluruh modul produk. Dipakai sidebar, overview,
 * menu seluler, dan shell — ONBOARD tampil di live-preview saja dan sengaja
 * tidak ikut katalog publik /produk.
 */
export const livePreviewProducts: LivePreviewProduct[] = [
  {
    slug: "onboard",
    name: "ONBOARD",
    category: "Dashboard Sekolah",
    summary: onboard.description,
    icon: LayoutDashboard,
  },
  ...products.map((product) => ({
    slug: product.slug,
    name: product.name,
    category: product.category,
    summary: product.summary,
    icon: product.icon,
  })),
];

export const chartPalette: Record<ChartSlot, string> = {
  "chart-1": "var(--qrion-chart-1)",
  "chart-2": "var(--qrion-chart-2)",
  "chart-3": "var(--qrion-chart-3)",
  "chart-4": "var(--qrion-chart-4)",
  "chart-5": "var(--qrion-chart-5)",
};

export type LiveSlice = {
  name: string;
  value: number;
  slot: ChartSlot;
};

export type LiveActivityRow = {
  label: string;
  detail: string;
  time: string;
  status: string;
  tone: StatusTone;
};

export type LiveModuleExtra = {
  /** Uppercase label used in the sidebar, e.g. ONCARD. */
  code: string;
  breakdownTitle: string;
  breakdown: LiveSlice[];
  activityTitle: string;
  activity: LiveActivityRow[];
  /** "Cocok untuk" line in the knowledge panel. */
  bestFor: string;
};

const extras: Record<ProductSlug, LiveModuleExtra> = {
  ontuition: {
    code: "ONTUITION",
    breakdownTitle: "Status Tagihan",
    breakdown: [
      { name: "Terbayar", value: 74, slot: "chart-1" },
      { name: "Sebagian", value: 16, slot: "chart-2" },
      { name: "Belum bayar", value: 10, slot: "chart-4" },
    ],
    activityTitle: "Transaksi Terbaru",
    activity: [
      {
        label: "SPP bulan berjalan",
        detail: "Pembayaran diterima melalui kanal digital",
        time: "08:12",
        status: "Terbayar",
        tone: "success",
      },
      {
        label: "Tagihan kegiatan semester",
        detail: "Pembayaran sebagian diterima",
        time: "09:40",
        status: "Sebagian",
        tone: "warning",
      },
      {
        label: "Rekap tagihan kelas IX",
        detail: "Menunggu konfirmasi orang tua",
        time: "10:05",
        status: "Menunggu",
        tone: "neutral",
      },
      {
        label: "Laporan harian",
        detail: "Ringkasan transaksi siap ditinjau",
        time: "15:30",
        status: "Selesai",
        tone: "success",
      },
    ],
    bestFor:
      "Sekolah yang ingin merapikan penagihan, pembayaran, dan pelaporan keuangan dalam satu alur.",
  },
  oncard: {
    code: "ONCARD",
    breakdownTitle: "Status Kartu",
    breakdown: [
      { name: "Aktif", value: 82, slot: "chart-1" },
      { name: "Menunggu cetak", value: 12, slot: "chart-3" },
      { name: "Nonaktif", value: 6, slot: "chart-4" },
    ],
    activityTitle: "Aktivitas Kartu",
    activity: [
      {
        label: "Kartu siswa baru",
        detail: "Kartu berhasil didaftarkan ke sistem",
        time: "07:55",
        status: "Aktif",
        tone: "success",
      },
      {
        label: "Percobaan tap ganda",
        detail: "Sistem menolak tap berulang pada perangkat",
        time: "08:03",
        status: "Ditolak",
        tone: "warning",
      },
      {
        label: "Penggantian kartu",
        detail: "Permohonan penggantian kartu dicatat",
        time: "11:20",
        status: "Diproses",
        tone: "info",
      },
      {
        label: "Sinkronisasi identitas",
        detail: "Data kartu diselaraskan dengan modul presensi",
        time: "16:10",
        status: "Selesai",
        tone: "success",
      },
    ],
    bestFor:
      "Institusi yang membutuhkan identitas siswa digital yang terhubung langsung dengan presensi.",
  },
  ontime: {
    code: "ONTIME",
    breakdownTitle: "Kehadiran Hari Ini",
    breakdown: [
      { name: "Hadir", value: 91, slot: "chart-1" },
      { name: "Terlambat", value: 5, slot: "chart-3" },
      { name: "Belum tercatat", value: 4, slot: "chart-4" },
    ],
    activityTitle: "Presensi Terbaru",
    activity: [
      {
        label: "Kelas VII A",
        detail: "Presensi pagi tercatat melalui perangkat",
        time: "06:58",
        status: "Hadir",
        tone: "success",
      },
      {
        label: "Kelas VIII B",
        detail: "Terdapat keterlambatan yang perlu ditinjau",
        time: "07:26",
        status: "Terlambat",
        tone: "warning",
      },
      {
        label: "Kelas IX C",
        detail: "Menunggu konfirmasi wali kelas",
        time: "07:40",
        status: "Menunggu",
        tone: "neutral",
      },
      {
        label: "Rekap harian",
        detail: "Ringkasan kehadiran siap dibagikan",
        time: "15:00",
        status: "Selesai",
        tone: "success",
      },
    ],
    bestFor:
      "Sekolah yang ingin memantau kehadiran harian secara real-time tanpa rekap manual.",
  },
  jurnal: {
    code: "QRION JURNAL",
    breakdownTitle: "Kelengkapan Jurnal",
    breakdown: [
      { name: "Terisi", value: 78, slot: "chart-1" },
      { name: "Menunggu", value: 15, slot: "chart-3" },
      { name: "Belum diisi", value: 7, slot: "chart-2" },
    ],
    activityTitle: "Jurnal Terbaru",
    activity: [
      {
        label: "Catatan pembelajaran",
        detail: "Materi dan aktivitas kelas tersimpan",
        time: "09:15",
        status: "Terisi",
        tone: "success",
      },
      {
        label: "Jurnal mata pelajaran",
        detail: "Menunggu kelengkapan catatan guru",
        time: "12:30",
        status: "Menunggu",
        tone: "warning",
      },
      {
        label: "Rekap mingguan",
        detail: "Ringkasan aktivitas kelas disiapkan",
        time: "14:05",
        status: "Diproses",
        tone: "info",
      },
      {
        label: "Monitoring kepala sekolah",
        detail: "Jurnal siap ditinjau manajemen",
        time: "16:45",
        status: "Selesai",
        tone: "success",
      },
    ],
    bestFor:
      "Guru dan manajemen sekolah yang ingin mendokumentasikan kegiatan pembelajaran dengan rapi.",
  },
  spmb: {
    code: "QRION SPMB",
    breakdownTitle: "Tahapan Pendaftaran",
    breakdown: [
      { name: "Terverifikasi", value: 68, slot: "chart-1" },
      { name: "Menunggu verifikasi", value: 22, slot: "chart-3" },
      { name: "Berkas kurang", value: 10, slot: "chart-4" },
    ],
    activityTitle: "Pendaftaran Terbaru",
    activity: [
      {
        label: "Pendaftaran baru",
        detail: "Formulir daring diterima melalui laman SPMB",
        time: "08:20",
        status: "Baru",
        tone: "info",
      },
      {
        label: "Verifikasi berkas",
        detail: "Kelengkapan berkas sedang diperiksa panitia",
        time: "09:05",
        status: "Diproses",
        tone: "warning",
      },
      {
        label: "Berkas perlu dilengkapi",
        detail: "Panitia meminta dokumen tambahan",
        time: "10:35",
        status: "Perlu tindakan",
        tone: "warning",
      },
      {
        label: "Pengumuman tahap 1",
        detail: "Hasil seleksi disiapkan untuk dipublikasikan",
        time: "13:50",
        status: "Selesai",
        tone: "success",
      },
    ],
    bestFor:
      "Panitia penerimaan murid baru yang ingin mengelola pendaftaran dan verifikasi secara digital.",
  },
};

export type LiveModule = LiveModuleExtra & {
  product: Product;
  slug: ProductSlug;
  name: string;
  category: string;
  tagline: string;
  appTitle: string;
  summary: string;
  metrics: Product["preview"]["metrics"];
  chartTitle: string;
  series: Product["preview"]["series"];
  connectedTo: string[];
};

export const liveModules: LiveModule[] = products.map((product) => {
  const extra = extras[product.slug];

  return {
    ...extra,
    product,
    slug: product.slug,
    name: product.name,
    category: product.category,
    tagline: product.tagline,
    appTitle: product.preview.appTitle,
    summary: product.summary,
    metrics: product.preview.metrics,
    chartTitle: product.preview.chartTitle,
    series: product.preview.series,
    // Every module is shared with the rest of the ecosystem by definition.
    connectedTo: products
      .filter((item) => item.slug !== product.slug)
      .map((item) => item.name),
  };
});

export function getLiveModule(slug: string): LiveModule | undefined {
  return liveModules.find((module) => module.slug === slug);
}

/** Headline KPI strip shown above the per-module dashboard. */
export const liveOverview = [
  {
    label: "Modul aktif",
    value: "5",
    hint: "Satu ekosistem terintegrasi",
    slot: "chart-1" as ChartSlot,
  },
  {
    label: "Data tersinkron",
    value: "100%",
    hint: "Antar modul QRION",
    slot: "chart-2" as ChartSlot,
  },
  {
    label: "Akses peran",
    value: "5",
    hint: "Manajemen hingga siswa",
    slot: "chart-5" as ChartSlot,
  },
  {
    label: "Status demo",
    value: "Aktif",
    hint: "Lingkungan contoh",
    slot: "chart-3" as ChartSlot,
  },
];

/**
 * Steps of the guided tour. Targets are matched to `data-tour` attributes in
 * the Live Experience shell; copy is written once and reused for every module.
 */
export const tourSteps = [
  {
    target: "sidebar",
    title: "Pilih modul QRION",
    body: "Setiap modul dalam ekosistem QRION dibuka dari sini. Modul aktif ditandai garis hijau.",
  },
  {
    target: "metrics",
    title: "Pantau angka penting",
    body: "Kartu ringkasan menampilkan indikator utama modul yang sedang dibuka.",
  },
  {
    target: "chart",
    title: "Lihat perkembangan",
    body: "Grafik membantu manajemen membaca tren tanpa menggabungkan laporan manual.",
  },
  {
    target: "activity",
    title: "Telusuri aktivitas terbaru",
    body: "Setiap kejadian tercatat rapi beserta statusnya, sehingga mudah ditindaklanjuti.",
  },
  {
    target: "knowledge",
    title: "Pelajari modul ini",
    body: "Panel pengetahuan menjelaskan fungsi modul dan keterkaitannya dengan modul lain.",
  },
  {
    target: "support",
    title: "Butuh pendampingan?",
    body: "Hubungi tim QRION kapan saja untuk membahas kebutuhan sekolah Anda.",
  },
] as const;

export type TourTarget = (typeof tourSteps)[number]["target"];
