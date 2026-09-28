import {
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  LayoutDashboard,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/**
 * MOCK DATA — visual product demonstration only.
 *
 * Every value below is a realistic placeholder that exists purely to render the
 * marketing dashboard mock-ups. Nothing here represents real QRION, school or
 * user data. When the product API is ready, replace the exported constants with
 * fetchers (server components / route handlers) keeping the same shapes.
 */

export const dashboardNav: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Siswa", icon: Users },
  { label: "Kehadiran", icon: CalendarCheck },
  { label: "Pembayaran", icon: Wallet },
  { label: "Jurnal", icon: BookOpenCheck },
  { label: "Laporan", icon: BarChart3 },
  { label: "Pengaturan", icon: Settings },
];

export type StatTone = "blue" | "cyan" | "indigo" | "emerald";

export const dashboardStats: {
  label: string;
  value: string;
  hint: string;
  tone: StatTone;
}[] = [
  { label: "Total Siswa", value: "964", hint: "Contoh data", tone: "blue" },
  { label: "Kehadiran Hari Ini", value: "91%", hint: "Contoh data", tone: "indigo" },
  {
    label: "Pembayaran Bulan Ini",
    value: "Rp 96,2 jt",
    hint: "Contoh data",
    tone: "cyan",
  },
  { label: "Jurnal Tercatat", value: "186", hint: "Contoh data", tone: "emerald" },
];

/** Attendance trend used by the dashboard area chart. */
export const attendanceSeries = [
  { day: "Sen", hadir: 88, terlambat: 6 },
  { day: "Sel", hadir: 92, terlambat: 4 },
  { day: "Rab", hadir: 86, terlambat: 8 },
  { day: "Kam", hadir: 94, terlambat: 3 },
  { day: "Jum", hadir: 90, terlambat: 5 },
  { day: "Sab", hadir: 78, terlambat: 7 },
];

/** Payment status breakdown used by the dashboard bar chart. */
export const paymentStatus = [
  { name: "Terbayar", value: 74, fill: "var(--qrion-chart-1)" },
  { name: "Sebagian", value: 16, fill: "var(--qrion-chart-2)" },
  { name: "Belum bayar", value: 10, fill: "var(--qrion-chart-4)" },
];

export type ActivityTone = "success" | "warning" | "info";

export const recentActivity: {
  activity: string;
  detail: string;
  time: string;
  status: string;
  tone: ActivityTone;
}[] = [
  {
    activity: "Pembayaran SPP terverifikasi",
    detail: "Kelas 7A",
    time: "08:12",
    status: "Selesai",
    tone: "success",
  },
  {
    activity: "Presensi masuk tercatat",
    detail: "Kelas 8B",
    time: "06:58",
    status: "Otomatis",
    tone: "info",
  },
  {
    activity: "Jurnal pembelajaran diisi",
    detail: "Matematika · Kelas 9C",
    time: "09:40",
    status: "Tercatat",
    tone: "success",
  },
  {
    activity: "Tagihan menunggu verifikasi",
    detail: "Kelas 9A",
    time: "10:05",
    status: "Menunggu",
    tone: "warning",
  },
];

/* -------------------------------------------------------------------------- */
/*  Homepage hero mock-up                                                      */
/* -------------------------------------------------------------------------- */

export const heroStats: { label: string; value: string; hint: string }[] = [
  { label: "Total Siswa", value: "964", hint: "Contoh data" },
  { label: "Kehadiran Hari Ini", value: "91%", hint: "Contoh data" },
  { label: "Pembayaran SPP", value: "74%", hint: "Contoh data" },
];

export const heroActivity: { label: string; detail: string; tone: ActivityTone }[] = [
  {
    label: "Aktivitas Hari Ini",
    detail: "Presensi, pembayaran, dan jurnal terpantau dari satu dashboard.",
    tone: "info",
  },
  {
    label: "Notifikasi Orang Tua",
    detail: "Informasi kehadiran dan pembayaran siap diteruskan.",
    tone: "success",
  },
];

export const heroFloatingCards = [
  { product: "Ontime", label: "Siswa hadir", tone: "indigo" as const },
  { product: "Ontuition", label: "Pembayaran berhasil", tone: "blue" as const },
  { product: "Oncard", label: "Kartu aktif", tone: "cyan" as const },
  { product: "Jurnal", label: "Jurnal pembelajaran tercatat", tone: "emerald" as const },
];
