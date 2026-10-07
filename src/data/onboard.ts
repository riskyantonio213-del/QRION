import { AlertCircle, Eye, Zap, type LucideIcon } from "lucide-react";

/**
 * Konten section "Onboard" (dashboard sebagai latar bleed penuh).
 * Nilai literal dipindahkan utuh dari onboard-section.tsx.
 */

export type OnboardCard = {
  Icon: LucideIcon;
  tone: string;
  title: string;
  description: string;
};

export const onboard = {
  eyebrow: "QRION ONBOARD",
  titleBefore: "Lihat seluruh kondisi sekolah",
  titleHighlight: "dari satu dashboard.",
  description:
    "Onboard dirancang khusus untuk pimpinan sekolah agar pembayaran, keuangan, kehadiran, penerimaan siswa, dan aktivitas penting sekolah dapat dipantau dalam satu pandangan.",
  callout: "Tidak perlu menunggu laporan untuk tahu kondisi sekolah.",
  cta: { label: "Lihat Cara Kerjanya", href: "/live-preview" },
  /** Latar dashboard bleed di belakang section. */
  image: "/images/bg-onboard.png",
};

export const onboardCards: OnboardCard[] = [
  {
    Icon: Eye,
    tone: "bg-brand-mint text-brand",
    title: "Semua lebih terlihat",
    description: "Pantau indikator penting sekolah dalam satu pandangan.",
  },
  {
    Icon: AlertCircle,
    tone: "bg-amber-100 text-amber-600",
    title: "Tahu apa yang perlu perhatian",
    description:
      "Masalah terlihat lebih awal sebelum mengganggu operasional.",
  },
  {
    Icon: Zap,
    tone: "bg-brand-mint text-brand",
    title: "Keputusan lebih cepat",
    description:
      "Data yang jelas membantu pimpinan menentukan langkah berikutnya.",
  },
];
