import {
  BookOpen,
  CreditCard,
  Gift,
  Layers,
  Package,
  PlayCircle,
  Settings,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * FAQ homepage (section utama di landing page).
 * Data FAQ di src/data/faq.ts tidak disentuh.
 * Nilai literal dipindahkan utuh dari faq-section.tsx.
 */

export type FaqTone = "emerald" | "blue" | "violet" | "rose" | "orange";

/**
 * Jawaban FAQ. String biasa dirender apa adanya; objek `{intro, bullets}`
 * dirender sebagai paragraf + daftar berbutir (markup ada di faq-section).
 */
export type FaqAnswer =
  | string
  | { intro: string; bullets: string[] };

export type FaqItem = {
  question: string;
  answer: FaqAnswer;
  icon?: LucideIcon;
  tone?: FaqTone;
};

export const homeFaq: FaqItem[] = [
  {
    question: "Apa itu QRION?",
    icon: Package,
    tone: "emerald",
    answer:
      "QRION adalah ekosistem digital sekolah yang mengintegrasikan seluruh operasional sekolah dalam satu platform, mulai dari pembayaran, absensi, pembelajaran, manajemen keuangan, penerimaan siswa, hingga sistem kasir kantin.",
  },
  {
    question: "Berapa harga paket QRION?",
    icon: CreditCard,
    tone: "blue",
    answer: {
      intro:
        "QRION tersedia dalam beberapa pilihan paket yang dapat disesuaikan dengan kebutuhan sekolah. Untuk informasi harga terbaru dan kebutuhan implementasi, silakan hubungi tim QRION.",
      bullets: [
        "Paket Ontuition + QRION Jurnal",
        "Paket Oncard + Ontime",
        "Paket Komplit (semua ekosistem)",
      ],
    },
  },
  {
    question: "Apa saja yang termasuk dalam Paket Komplit?",
    icon: Layers,
    tone: "violet",
    answer:
      "Paket Komplit menggabungkan layanan utama QRION dalam satu ekosistem terintegrasi untuk operasional, akademik, pembayaran, komunikasi, dan kebutuhan administrasi sekolah.",
  },
  {
    question: "Apakah QRION SPMB benar-benar gratis?",
    icon: Gift,
    tone: "rose",
    answer:
      "QRION menyediakan solusi SPMB yang dapat digunakan sekolah untuk membantu proses penerimaan siswa baru. Detail program dan ketentuannya dapat dikonfirmasi kepada tim QRION.",
  },
  {
    question: "Berapa lama proses implementasi QRION?",
    icon: Settings,
    tone: "orange",
    answer:
      "Waktu implementasi menyesuaikan ukuran sekolah, kebutuhan modul, proses migrasi data, serta pelatihan tim sekolah.",
  },
  {
    question: "Apakah tersedia pelatihan untuk sekolah?",
    icon: BookOpen,
    tone: "emerald",
    answer:
      "Ya. Tim QRION dapat membantu proses onboarding dan pelatihan agar admin, guru, dan pihak sekolah dapat menggunakan sistem dengan nyaman.",
  },
  {
    question: "Apakah data sekolah aman di QRION?",
    icon: ShieldCheck,
    tone: "blue",
    answer:
      "QRION dirancang dengan perhatian terhadap keamanan dan pengelolaan data agar informasi sekolah dapat dikelola secara terstruktur dan terlindungi.",
  },
  {
    question: "Apakah bisa mencoba sistem terlebih dahulu?",
    icon: PlayCircle,
    tone: "rose",
    answer:
      "Ya. Sekolah dapat mencoba pengalaman QRION melalui demo atau live preview sebelum menentukan implementasi.",
  },
  {
    question: "Siapa saja yang bisa menggunakan QRION?",
    icon: Users,
    tone: "violet",
    answer:
      "QRION dirancang untuk kepala sekolah, admin, guru, orang tua, siswa, serta pihak lain yang terlibat dalam ekosistem operasional sekolah.",
  },
];

/** Header + kartu kontak section FAQ (markup gradient/br ada di komponen). */
export const faqHeader = {
  pill: "FAQ",
  line1: "Pertanyaan",
  line2Before: "yang",
  line2Highlight: "Sering",
  line3: "Ditanyakan",
  description:
    "Temukan jawaban cepat untuk pertanyaan umum seputar produk, harga, implementasi, dan penggunaan QRION.",
};

export const faqContact = {
  title: "Masih ada pertanyaan?",
  description:
    "Tim kami siap membantu Anda menemukan solusi terbaik untuk sekolah Anda.",
  ctaLabel: "Hubungi tim kami",
};

/** Foto sekolah di sudut kiri-bawah section FAQ. */
export const faqImage = "/images/faq-school.jpg";
