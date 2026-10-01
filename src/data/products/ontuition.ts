import { Wallet, Receipt, LineChart, BadgeCheck, History, Table2, BarChart3 } from "lucide-react";

import type { Product } from "./types";
import { sharedRoles } from "./shared";

export const ontuition: Product = {
  slug: "ontuition",
  name: "Ontuition",
  category: "Digital School Payment",
  tagline: "Pembayaran pendidikan yang lebih tertata.",
  headline: "Kelola Pembayaran Sekolah dengan Lebih Mudah",
  description:
    "ONTUITION membantu sekolah mengelola tagihan, pembayaran SPP, monitoring transaksi, dan laporan keuangan secara lebih terstruktur dan mudah ditelusuri.",
  summary:
    "Sistem pembayaran pendidikan yang membantu sekolah mengelola tagihan, pembayaran SPP, monitoring transaksi, dan laporan keuangan secara lebih terstruktur.",
  icon: Wallet,
  accent: {
    iconWrap: "bg-brand-mint border-brand-mint-medium",
    icon: "text-brand",
    chip: "border-brand-mint-medium bg-brand-mint text-brand-dark",
    gradient: "from-brand/12 via-brand-green/5 to-transparent",
    dot: "bg-brand",
    bar: "bg-brand",
    ring: "group-hover:border-brand-mint-medium",
  },
  highlights: [
    "Tagihan tersusun per siswa",
    "Monitoring pembayaran",
    "Riwayat transaksi",
  ],
  cardBenefits: [
    "Pengelolaan tagihan siswa",
    "Monitoring pembayaran",
    "Riwayat transaksi",
    "Laporan pembayaran",
    "Notifikasi pembayaran",
  ],
  problems: [
    {
      title: "Pencatatan pembayaran manual",
      description:
        "Pembayaran tercatat di buku, spreadsheet, dan pesan pribadi sehingga sulit direkap ulang.",
    },
    {
      title: "Status pembayaran tidak jelas",
      description:
        "Sekolah dan orang tua tidak selalu memiliki gambaran status tagihan yang sama.",
    },
    {
      title: "Laporan keuangan lambat",
      description:
        "Rekap bulanan membutuhkan waktu karena data harus dikumpulkan dari beberapa sumber.",
    },
  ],
  features: [
    {
      title: "Tagihan siswa",
      description:
        "Menyusun tagihan per siswa maupun per jenjang sesuai kebijakan sekolah.",
      icon: Receipt,
    },
    {
      title: "Monitoring pembayaran",
      description:
        "Memantau pembayaran yang sudah masuk dan yang masih berjalan.",
      icon: LineChart,
    },
    {
      title: "Status pembayaran",
      description:
        "Mengetahui posisi setiap tagihan melalui status yang mudah dipahami.",
      icon: BadgeCheck,
    },
    {
      title: "Riwayat transaksi",
      description:
        "Menyimpan jejak transaksi sehingga dapat ditelusuri kembali saat dibutuhkan.",
      icon: History,
    },
    {
      title: "Rekap pembayaran",
      description:
        "Menyajikan rangkuman pembayaran per periode, kelas, atau jenis tagihan.",
      icon: Table2,
    },
    {
      title: "Laporan",
      description:
        "Menyediakan laporan yang siap digunakan untuk kebutuhan internal sekolah.",
      icon: BarChart3,
    },
  ],
  workflow: [
    {
      title: "Sekolah membuat tagihan",
      description: "Jenis tagihan dan periode ditentukan sesuai kebutuhan institusi.",
    },
    {
      title: "Tagihan siswa tercatat",
      description: "Tagihan tersimpan pada data siswa yang bersangkutan.",
    },
    {
      title: "Pembayaran dilakukan",
      description: "Orang tua atau siswa melakukan pembayaran sesuai alur sekolah.",
    },
    {
      title: "Transaksi terverifikasi",
      description: "Pembayaran dikonfirmasi dan dicatat di dalam sistem.",
    },
    {
      title: "Dashboard diperbarui",
      description: "Ringkasan pembayaran sekolah ikut terbarui secara otomatis.",
    },
    {
      title: "Laporan tersedia",
      description: "Rekap dan laporan dapat diakses kembali kapan dibutuhkan.",
    },
  ],
  benefits: [
    {
      title: "Proses lebih konsisten",
      description: "Semua tagihan mengikuti alur yang sama di setiap periode.",
    },
    {
      title: "Informasi mudah diakses",
      description: "Status pembayaran dapat dilihat tanpa mencari berkas lama.",
    },
    {
      title: "Rekap lebih cepat",
      description: "Mengurangi waktu penyusunan laporan pembayaran bulanan.",
    },
    {
      title: "Data tercatat rapi",
      description: "Riwayat transaksi tersimpan teratur dan mudah ditelusuri.",
    },
    {
      title: "Komunikasi lebih jelas",
      description: "Informasi pembayaran dapat disampaikan kepada orang tua.",
    },
    {
      title: "Siap untuk audit internal",
      description:
        "Dokumentasi pembayaran tersusun agar memudahkan pemeriksaan internal.",
    },
  ],
  roles: [
    sharedRoles.admin,
    sharedRoles.management,
    sharedRoles.parent,
    sharedRoles.student,
  ],
  faq: [
    {
      question: "Apakah Ontuition menggantikan sistem pembayaran yang sudah berjalan?",
      answer:
        "Ontuition dapat digunakan sebagai sistem utama, atau disesuaikan dengan alur pembayaran yang sudah berjalan di sekolah. Konfigurasi dilakukan bersama tim QRION pada tahap implementasi.",
    },
    {
      question: "Jenis tagihan apa saja yang dapat dikelola?",
      answer:
        "Jenis tagihan bersifat fleksibel dan dapat disesuaikan dengan kebijakan sekolah, misalnya tagihan bulanan, tagihan kegiatan, maupun tagihan berkala lainnya.",
    },
    {
      question: "Apakah orang tua dapat melihat status pembayaran?",
      answer:
        "Informasi pembayaran dapat diteruskan kepada orang tua sebagai bagian dari ekosistem QRION, sehingga status tagihan lebih mudah dipahami bersama.",
    },
    {
      question: "Bagaimana dengan data historis sekolah?",
      answer:
        "Data historis dapat diimpor pada tahap persiapan implementasi agar pencatatan berjalan berkesinambungan.",
    },
  ],
  preview: {
    kind: "payments",
    appTitle: "Ontuition",
    appSubtitle: "Rekap pembayaran bulan ini",
    metrics: [
      { label: "Total tagihan", value: "Rp 128.500.000", hint: "Contoh data" },
      { label: "Pembayaran masuk", value: "Rp 96.200.000", hint: "Contoh data" },
      { label: "Menunggu verifikasi", value: "12 transaksi", hint: "Contoh data" },
    ],
    chartTitle: "Pembayaran per minggu",
    series: [
      { label: "Pekan 1", value: 42 },
      { label: "Pekan 2", value: 68 },
      { label: "Pekan 3", value: 54 },
      { label: "Pekan 4", value: 76 },
    ],
    rowsTitle: "Transaksi terbaru",
    rows: [
      {
        label: "Tagihan bulanan — Kelas 7A",
        value: "Rp 4.500.000",
        status: "Terbayar",
        tone: "success",
      },
      {
        label: "Tagihan kegiatan — Kelas 8B",
        value: "Rp 2.150.000",
        status: "Sebagian",
        tone: "warning",
      },
      {
        label: "Tagihan bulanan — Kelas 9C",
        value: "Rp 5.000.000",
        status: "Menunggu",
        tone: "neutral",
      },
    ],
  },
  cta: {
    title: "Tertarik melihat alur pembayaran Ontuition?",
    description:
      "Tim QRION dapat menunjukkan bagaimana tagihan, pembayaran, dan laporan pembayaran sekolah bekerja dalam satu alur.",
    primaryLabel: "Jadwalkan Demo Ontuition",
    secondaryLabel: "Hubungi Tim QRION",
  },
};
