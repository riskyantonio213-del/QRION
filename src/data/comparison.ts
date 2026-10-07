import {
  BarChart3,
  CalendarCheck,
  CreditCard,
  Eye,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Share2,
  UserPlus,
  UtensilsCrossed,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Konten section "Perbandingan" (Sebelum vs Dengan QRION).
 * Nilai literal dipindahkan utuh dari comparison-section.tsx
 * agar output tidak berubah.
 */

export const comparisonHeading = {
  eyebrow: "SEKOLAH ANDA DENGAN QRION",
  titleBefore: "Bayangkan sekolah yang bekerja",
  titleHighlight: "lebih baik",
  titleAfter: "setiap harinya.",
  description:
    "Bukan sekadar mendigitalisasi pekerjaan yang sudah ada. QRION membantu sekolah menjadi lebih tertata, terhubung, dan mudah dikendalikan—dari ruang pimpinan hingga aktivitas siswa.",
};

export const beforeCard = {
  badge: "Sebelum QRION",
  titleBefore: "Data tersebar,",
  titleAfter: "keputusan jadi lebih lambat.",
  description:
    "Informasi dari berbagai bagian masih terpisah, rekap manual memakan waktu, dan sulit mendapatkan gambaran utuh tentang kondisi sekolah.",
};

/** Foto banding (Sebelum / Dengan QRION) — bisa diganti via admin panel. */
export const images = {
  before: "/images/comparison1.png",
  after: "/images/comparison2.png",
};

export const painPoints = [
  "Data dari berbagai file dan laporan",
  "Rekap manual yang memakan waktu",
  "Sulit melihat kondisi secara keseluruhan",
  "Risiko kesalahan dan keterlambatan informasi",
] as const;

/**
 * Posisi relatif terhadap area foto (kartu "Sebelum").
 * Disesuaikan persis menyerupai gambar referensi, di mana badge
 * Rekap Pembayaran SPP offside ke kiri atas.
 */
export const fileBadges = [
  {
    label: "Rekap Pembayaran SPP.xlsx",
    Icon: FileSpreadsheet,
    tone: "bg-emerald-500",
    position: "-right-[14%] top-[10%] -rotate-6 lg:right-[15%] lg:top-[12%]", // Offside ke kiri
    delay: "[animation-delay:0s]",
  },
  {
    label: "Laporan Kehadiran.pdf",
    Icon: FileText,
    tone: "bg-rose-500",
    position: "right-[8%] top-[22%] rotate-[6deg] lg:right-[1%] lg:top-[25%]",
    delay: "[animation-delay:1s]",
  },
  {
    label: "Data Siswa Baru",
    Icon: FileText,
    tone: "bg-blue-500",
    position: "right-[16%] top-[44%] rotate-[2deg] lg:right-[2%] lg:top-[42%]",
    delay: "[animation-delay:0.5s]",
  },
  {
    label: "Laporan Keuangan.xlsx",
    Icon: FileSpreadsheet,
    tone: "bg-emerald-500",
    position: "bottom-[12%] right-[6%] rotate-[6deg] lg:bottom-[15%] lg:right-[1%]",
    delay: "[animation-delay:1.6s]",
  },
] as const;

export const afterCard = {
  badge: "Dengan QRION",
  titleBefore: "Semua terhubung,",
  titleAfter: "keputusan lebih cepat.",
  description:
    "Seluruh aktivitas sekolah tersaji dalam satu ekosistem, sehingga Anda dapat melihat kondisi sekolah secara utuh dan mengambil keputusan dengan lebih percaya diri.",
};

export const modules: { label: string; Icon: LucideIcon }[] = [
  { label: "Pembayaran", Icon: CreditCard },
  { label: "Akademik", Icon: GraduationCap },
  { label: "Kehadiran", Icon: CalendarCheck },
  { label: "Keuangan", Icon: Wallet },
  { label: "Penerimaan Siswa", Icon: UserPlus },
  { label: "Kantin", Icon: UtensilsCrossed },
];

export const features: {
  Icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    Icon: Eye,
    title: "Semua lebih terlihat",
    description:
      "Informasi penting sekolah tersaji dalam satu tempat, tanpa perlu mencari dari banyak bagian.",
  },
  {
    Icon: Share2,
    title: "Semua lebih terhubung",
    description:
      "Akademik, pembayaran, keuangan, absensi, penerimaan siswa, dan kantin berjalan dalam satu ekosistem.",
  },
  {
    Icon: Zap,
    title: "Keputusan lebih cepat",
    description:
      "Data yang jelas membantu pimpinan sekolah menentukan prioritas dan tindak lanjut dengan lebih cepat.",
  },
  {
    Icon: BarChart3,
    title: "Sekolah lebih siap berkembang",
    description:
      "Tim bekerja lebih efisien, layanan lebih modern, dan sekolah memiliki fondasi yang lebih kuat untuk masa depan.",
  },
];

/** Konten widget dashboard di kartu "Dengan QRION". */
export const comparisonWidgets = {
  paid: {
    title: "Pembayaran SPP",
    percent: "92%",
    caption: "Sudah dibayar",
    legend: [
      { label: "Sudah bayar", value: "342", color: "bg-brand" },
      { label: "Belum lunas", value: "24", color: "bg-amber-400" },
      { label: "Tunggakan", value: "10", color: "bg-rose-500" },
    ] as const,
  },
  attendance: {
    title: "Kehadiran Hari Ini",
    present: "96% hadir",
    delta: "+2% hadir",
  },
  admission: {
    title: "Penerimaan Siswa Baru",
    count: "84",
    captionA: "Pendaftar baru",
    captionB: "minggu ini",
    bars: [34, 48, 40, 66, 100, 58] as const,
  },
  finance: {
    title: "Keuangan Sekolah",
    amount: "Rp 124.500.000",
    delta: "+12% dari bulan lalu",
    bars: [
      { height: 38, tone: "bg-brand/25" },
      { height: 52, tone: "bg-brand/35" },
      { height: 46, tone: "bg-brand/50" },
      { height: 74, tone: "bg-brand/70" },
      { height: 100, tone: "bg-brand" },
    ] as const,
  },
};
