import {
  BookOpen,
  ClipboardList,
  Clock,
  CreditCard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Konten section "Ekosistem" (header + bento grid).
 * Nilai literal dipindahkan utuh dari ecosystem-diagram.tsx.
 */

export type BentoCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  /** Ubah warna judul kartu di sini (class Tailwind). */
  titleClassName?: string;
  /** Ubah warna deskripsi kartu di sini (class Tailwind). */
  descriptionClassName?: string;
  /** Ubah warna icon kartu di sini (class Tailwind). */
  iconClassName?: string;
  /** object-position tambahan (mis. object-top) */
  position?: string;
  /** tampil selebar 2 kolom */
  wide?: boolean;
  sizes: string;
};

export const ecosystemHeader = {
  eyebrow: "Ekosistem QRION",
  titleBefore: "Semua yang sekolah butuhkan dalam",
  titleHighlight: "satu ekosistem",
  description:
    "Platform terintegrasi untuk membantu sekolah mengelola operasional, pembelajaran, keuangan, absensi, dan layanan orang tua dengan lebih efisien.",
  cta: { label: "Lihat semua fitur", href: "/produk" },
};

export const bentoCards: BentoCard[] = [
  {
    title: "Oncard",
    description: "Pembayaran sekolah lebih mudah dan aman.",
    icon: CreditCard,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/1.png",
    alt: "Kartu QRION di-tap ke mesin pembayaran",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Ontime",
    description: "Absensi siswa dalam satu platform.",
    icon: Clock,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/2.png",
    alt: "Dashboard kehadiran harian siswa QRION",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Ekosistem terintegrasi",
    description: "Seluruh kebutuhan sekolah berjalan selaras.",
    icon: Sparkles,
    titleClassName: "text-white",
    descriptionClassName: "text-white/75",
    iconClassName: "text-white",
    image: "/bento/3.png",
    alt: "Ilustrasi seluruh aplikasi QRION yang saling terhubung",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Ontuition & QRION Jurnal",
    description:
      "Pembelajaran dan administrasi keuangan dalam satu alur yang terintegrasi.",
    icon: BookOpen,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/4.png",
    alt: "Kelas online dan dashboard keuangan sekolah",
    wide: true,
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  {
    title: "SPMB & POS",
    description:
      "Kelola penerimaan siswa baru dan operasional kantin dalam satu sistem.",
    icon: ClipboardList,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/5.png",
    alt: "Kartu pendaftaran siswa baru dan transaksi kantin",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];
