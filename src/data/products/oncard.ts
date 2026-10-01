import { IdCard, Fingerprint, ScanLine, CardSim, BadgeCheck, LineChart, QrCode } from "lucide-react";

import type { Product } from "./types";
import { sharedRoles } from "./shared";

export const oncard: Product = {
  slug: "oncard",
  name: "Oncard",
  category: "Smart School Card",
  tagline: "Satu kartu untuk aktivitas digital siswa.",
  headline: "Satu Kartu untuk Ekosistem Digital Sekolah",
  description:
    "ONCARD adalah kartu pintar yang mendukung identitas siswa sekaligus menghubungkan berbagai aktivitas digital di dalam ekosistem sekolah.",
  summary:
    "Kartu pintar untuk mendukung identitas dan berbagai aktivitas digital siswa dalam ekosistem sekolah.",
  icon: IdCard,
  accent: {
    iconWrap: "bg-brand-soft border-border",
    icon: "text-brand-green",
    chip: "border-border bg-brand-soft text-brand-indigo",
    gradient: "from-brand-green/12 via-brand-mint-medium/20 to-transparent",
    dot: "bg-brand-green",
    bar: "bg-brand-green",
    ring: "group-hover:border-brand-mint-medium",
  },
  highlights: ["Identitas siswa", "Terhubung ONTIME", "Pengelolaan kartu"],
  cardBenefits: [
    "Identitas siswa",
    "Integrasi dengan sistem QRION",
    "Mendukung aktivitas sekolah",
    "Pengelolaan kartu",
  ],
  problems: [
    {
      title: "Identitas siswa tersebar",
      description:
        "Data identitas tersimpan di tempat berbeda dan tidak selalu mudah diverifikasi.",
    },
    {
      title: "Kartu terpisah dari sistem",
      description:
        "Kartu siswa tidak terhubung dengan aktivitas digital yang berjalan di sekolah.",
    },
    {
      title: "Pengelolaan kartu manual",
      description:
        "Aktivasi dan pemantauan kartu dilakukan secara manual sehingga rawan tidak tercatat.",
    },
  ],
  features: [
    {
      title: "Identitas siswa",
      description: "Kartu berfungsi sebagai identitas resmi di lingkungan sekolah.",
      icon: Fingerprint,
    },
    {
      title: "Integrasi ONTIME",
      description: "Mendukung penggunaan kartu untuk proses presensi digital.",
      icon: ScanLine,
    },
    {
      title: "Pengelolaan kartu",
      description: "Mengatur data kartu dan keterkaitannya dengan siswa.",
      icon: CardSim,
    },
    {
      title: "Aktivasi kartu",
      description: "Kartu baru dapat diaktifkan dan disiapkan sesuai data siswa.",
      icon: BadgeCheck,
    },
    {
      title: "Monitoring penggunaan",
      description: "Memantau penggunaan kartu pada aktivitas yang terhubung.",
      icon: LineChart,
    },
    {
      title: "Kode kartu",
      description:
        "Setiap kartu membawa penanda unik yang dapat dibaca perangkat pendukung.",
      icon: QrCode,
    },
  ],
  workflow: [
    {
      title: "Data siswa disiapkan",
      description: "Data siswa yang akan menerima kartu disiapkan di sistem.",
    },
    {
      title: "Kartu diterbitkan",
      description: "Kartu dihasilkan dan dihubungkan dengan identitas siswa.",
    },
    {
      title: "Kartu diaktifkan",
      description: "Kartu diaktifkan agar dapat digunakan pada perangkat sekolah.",
    },
    {
      title: "Kartu digunakan",
      description: "Siswa menggunakan kartu pada aktivitas yang terhubung.",
    },
    {
      title: "Penggunaan tercatat",
      description: "Aktivitas kartu terekam dan dapat dipantau oleh sekolah.",
    },
  ],
  benefits: [
    {
      title: "Identitas yang konsisten",
      description: "Satu kartu mewakili siswa di seluruh layanan digital sekolah.",
    },
    {
      title: "Alur lebih sederhana",
      description: "Mengurangi proses pencatatan identitas secara manual.",
    },
    {
      title: "Terhubung dengan modul lain",
      description: "Kartu menjadi pintu masuk aktivitas pada ekosistem QRION.",
    },
    {
      title: "Lebih mudah dipantau",
      description: "Pengelolaan kartu dapat dilihat dan ditelusuri dari sistem.",
    },
    {
      title: "Siap dikembangkan",
      description: "Penggunaan kartu dapat diperluas mengikuti kebutuhan sekolah.",
    },
    {
      title: "Mendukung ketertiban",
      description: "Membantu tertib administrasi kartu di lingkungan sekolah.",
    },
  ],
  roles: [
    sharedRoles.admin,
    sharedRoles.student,
    sharedRoles.teacher,
    sharedRoles.management,
  ],
  faq: [
    {
      question: "Apakah Oncard dapat digunakan tanpa produk QRION lain?",
      answer:
        "Oncard berfungsi sebagai identitas digital siswa dan akan lebih optimal ketika dihubungkan dengan modul lain seperti ONTIME untuk presensi.",
    },
    {
      question: "Bagaimana proses penerbitan kartu?",
      answer:
        "Penerbitan mengikuti data siswa yang ada di sistem. Tim QRION mendampingi proses persiapan hingga kartu siap digunakan.",
    },
    {
      question: "Apakah kartu yang hilang dapat dinonaktifkan?",
      answer:
        "Status kartu dapat dikelola dari sistem, termasuk menonaktifkan kartu yang tidak lagi digunakan, sebagai bagian dari kontrol administrasi sekolah.",
    },
    {
      question: "Apakah kartu bersifat wajib untuk semua siswa?",
      answer:
        "Kebijakan penggunaan kartu diserahkan kepada sekolah. Sistem mendukung penerapan bertahap sesuai kebutuhan tiap angkatan.",
    },
  ],
  preview: {
    kind: "cards",
    appTitle: "Oncard",
    appSubtitle: "Pengelolaan kartu siswa",
    metrics: [
      { label: "Kartu aktif", value: "842", hint: "Contoh data" },
      { label: "Menunggu aktivasi", value: "36", hint: "Contoh data" },
      { label: "Kartu nonaktif", value: "14", hint: "Contoh data" },
    ],
    chartTitle: "Aktivasi kartu per pekan",
    series: [
      { label: "Pekan 1", value: 30 },
      { label: "Pekan 2", value: 45 },
      { label: "Pekan 3", value: 38 },
      { label: "Pekan 4", value: 52 },
    ],
    rowsTitle: "Kartu terbaru",
    rows: [
      {
        label: "Ahmad Fauzan — Kelas 7A",
        value: "Kartu #4821",
        status: "Aktif",
        tone: "success",
      },
      {
        label: "Nur Aisyah — Kelas 8B",
        value: "Kartu #4822",
        status: "Menunggu",
        tone: "warning",
      },
      {
        label: "Rizky Pratama — Kelas 9C",
        value: "Kartu #4823",
        status: "Aktif",
        tone: "success",
      },
    ],
  },
  cta: {
    title: "Ingin melihat Oncard di lingkungan sekolah Anda?",
    description:
      "Kami dapat menjelaskan bagaimana kartu siswa terhubung dengan identitas dan aktivitas digital di ekosistem QRION.",
    primaryLabel: "Jadwalkan Demo Oncard",
    secondaryLabel: "Hubungi Tim QRION",
  },
};
