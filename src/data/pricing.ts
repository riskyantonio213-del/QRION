import type { LucideIcon } from "lucide-react";
import { CalendarDays, MessageCircle, ShieldCheck } from "lucide-react";

export type PricingModule = {
  /**
   * Produk yang diwakili chip — icon diambil dari
   * /public/icon/icon-<slug>.png (lihat PricingSection).
   */
  slug: "ontuition" | "oncard" | "ontime" | "jurnal" | "pos";
};

export type PricingPlan = {
  id: string;
  /** Optional pill shown on the card, e.g. "Populer" or "Terbaik". */
  badge?: string;
  /** Dark highlight card (middle plan). */
  featured?: boolean;
  name: string;
  description: string;
  price: string;
  period: string;
  modules: PricingModule[];
  features: string[];
  cta: { label: string; href: string };
};

/** Header section Paket (TitleDashes tetap di komponen). */
export const pricingHeader = {
  eyebrow: "Paket Langganan",
  titleBefore: "Pilih Paket Sesuai",
  titleAfter: "Kebutuhan Sekolah",
  description:
    "Solusi praktis untuk mendukung operasional, pembelajaran, absensi, dan keuangan sekolah dalam satu ekosistem QRION.",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Ontuition + QRION Jurnal",
    description:
      "Untuk sekolah yang ingin memulai pembelajaran digital dan pengelolaan keuangan sekolah.",
    price: "Rp500.000",
    period: "/bulan",
    modules: [
      { slug: "ontuition" },
      { slug: "jurnal" },
    ],
    features: [
      "Kelas online & materi pembelajaran",
      "Tugas, penilaian & monitoring siswa",
      "Pengelolaan pemasukan & pengeluaran",
      "Laporan keuangan sekolah",
      "Akses untuk admin & guru",
    ],
    cta: { label: "Pilih Paket", href: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
  },
  {
    id: "growth",
    badge: "Populer",
    featured: true,
    name: "Oncard + Ontime",
    description:
      "Untuk sekolah yang membutuhkan absensi digital dan sistem cashless sekolah.",
    price: "Rp2.500.000",
    period: "/bulan",
    modules: [
      { slug: "oncard" },
      { slug: "ontime" },
    ],
    features: [
      "Absensi digital siswa",
      "Monitoring kehadiran real-time",
      "Transaksi cashless sekolah",
      "Manajemen saldo & pembayaran",
      "Dukungan operasional kantin/sekolah",
    ],
    cta: { label: "Pilih Paket", href: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
  },
  {
    id: "complete",
    badge: "Terbaik",
    name: "Paket Komplit",
    description: "Dapatkan seluruh ekosistem digital sekolah dalam satu paket lengkap.",
    price: "Rp3.000.000",
    period: "/bulan",
    modules: [
      { slug: "ontuition" },
      { slug: "oncard" },
      { slug: "ontime" },
      { slug: "jurnal" },
      { slug: "pos" },
    ],
    features: [
      "Oncard, Ontime, Ontuition & QRION Jurnal",
      "QRION POS untuk operasional kantin",
      "Sistem terintegrasi dalam satu ekosistem",
      "Monitoring operasional sekolah lebih menyeluruh",
      'Bonus "QRION SPMB Gratis"',
    ],
    cta: { label: "Pilih Paket", href: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
  },
];

export const pricingTrust: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarDays, label: "Pembayaran bulanan" },
  { icon: ShieldCheck, label: "Tanpa biaya tersembunyi" },
  { icon: MessageCircle, label: "Bisa konsultasi demo" },
];

export const pricingCallout = {
  title: "Butuh solusi yang lebih spesifik?",
  description:
    "Tim QRION siap membantu menyesuaikan solusi sesuai kebutuhan sekolah Anda.",
  cta: { label: "Hubungi Tim Kami", href: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
  /** Latar gedung di balik kartu callout. */
  image: "/images/bg.png",
};
