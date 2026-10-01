import { CalendarCheck, ScanLine, Clock, Table2, Siren, Megaphone, IdCard } from "lucide-react";

import type { Product } from "./types";
import { sharedRoles } from "./shared";

export const ontime: Product = {
  slug: "ontime",
  name: "Ontime",
  category: "Digital Attendance System",
  tagline: "Presensi digital yang tercatat otomatis.",
  headline: "Presensi Digital yang Terhubung dengan Ekosistem Sekolah",
  description:
    "ONTIME membantu sekolah mencatat, mengelola, dan memantau kehadiran siswa, guru, serta staf secara otomatis dan real-time.",
  summary:
    "Sistem presensi digital terpadu untuk mencatat dan memantau kehadiran siswa, guru, serta staf secara otomatis dan real-time.",
  icon: CalendarCheck,
  accent: {
    iconWrap: "bg-brand-mint border-brand-mint-medium",
    icon: "text-brand-dark",
    chip: "border-brand-mint-medium bg-brand-mint text-brand-indigo",
    gradient: "from-brand-indigo/10 via-brand-indigo/4 to-transparent",
    dot: "bg-brand-indigo",
    bar: "bg-brand-indigo",
    ring: "group-hover:border-brand-mint-medium",
  },
  highlights: ["Presensi otomatis", "Monitoring real-time", "Notifikasi orang tua"],
  cardBenefits: [
    "Presensi digital",
    "Monitoring kehadiran",
    "Informasi kedatangan dan kepulangan",
    "Rekap presensi",
    "Notifikasi kepada orang tua",
  ],
  problems: [
    {
      title: "Presensi dicatat manual",
      description:
        "Kehadiran dicatat di kertas atau aplikasi terpisah sehingga rawan selisih data.",
    },
    {
      title: "Kehadiran sulit dipantau",
      description:
        "Sekolah kesulitan melihat kondisi kehadiran secara cepat pada hari berjalan.",
    },
    {
      title: "Orang tua menunggu informasi",
      description:
        "Informasi kedatangan dan kepulangan siswa tidak selalu tersampaikan dengan cepat.",
    },
  ],
  features: [
    {
      title: "Presensi Digital",
      description: "Mencatat kehadiran melalui perangkat presensi yang terhubung.",
      icon: ScanLine,
    },
    {
      title: "Monitoring Real-Time",
      description: "Melihat kehadiran hari berjalan langsung dari dashboard.",
      icon: Clock,
    },
    {
      title: "Rekap Kehadiran",
      description: "Merangkum kehadiran per kelas, per periode, dan per siswa.",
      icon: Table2,
    },
    {
      title: "Pengelolaan Keterlambatan",
      description: "Mencatat keterlambatan dan membantu penanganannya.",
      icon: Siren,
    },
    {
      title: "Notifikasi Kehadiran",
      description: "Meneruskan informasi kehadiran kepada pihak yang berkepentingan.",
      icon: Megaphone,
    },
    {
      title: "Integrasi ONCARD",
      description: "Mendukung penggunaan kartu siswa sebagai media presensi.",
      icon: IdCard,
    },
  ],
  workflow: [
    {
      title: "Siswa datang",
      description: "Siswa tiba di lingkungan sekolah pada waktu kedatangan.",
    },
    {
      title: "Tap kartu / perangkat presensi",
      description: "Kehadiran dicatat melalui kartu atau perangkat yang tersedia.",
    },
    {
      title: "Data tercatat di ONTIME",
      description: "Waktu dan identitas tercatat otomatis di dalam sistem.",
    },
    {
      title: "Dashboard sekolah diperbarui",
      description: "Ringkasan kehadiran langsung terbarui tanpa rekap manual.",
    },
    {
      title: "Informasi diteruskan",
      description:
        "Informasi kehadiran dapat diteruskan kepada orang tua sebagai bagian ekosistem.",
    },
  ],
  benefits: [
    {
      title: "Pencatatan lebih cepat",
      description: "Kehadiran tercatat tanpa proses tulis ulang di akhir hari.",
    },
    {
      title: "Data lebih konsisten",
      description: "Satu sumber data untuk seluruh kebutuhan rekap kehadiran.",
    },
    {
      title: "Pemantauan langsung",
      description: "Sekolah dapat melihat kondisi kehadiran pada hari berjalan.",
    },
    {
      title: "Laporan lebih siap",
      description: "Rekap kehadiran tersedia tanpa pengumpulan berkas manual.",
    },
    {
      title: "Komunikasi lebih cepat",
      description: "Informasi kehadiran lebih mudah sampai ke orang tua.",
    },
    {
      title: "Terhubung dengan ONCARD",
      description: "Kartu siswa dapat dimanfaatkan sebagai media presensi.",
    },
  ],
  roles: [
    sharedRoles.admin,
    sharedRoles.management,
    sharedRoles.teacher,
    sharedRoles.parent,
    sharedRoles.student,
  ],
  faq: [
    {
      question: "Media presensi apa yang didukung ONTIME?",
      answer:
        "ONTIME dirancang untuk mendukung perangkat presensi sekolah, termasuk pemanfaatan kartu siswa ONCARD. Kebutuhan perangkat dibahas pada tahap implementasi.",
    },
    {
      question: "Apakah kehadiran guru dan staf juga dapat dicatat?",
      answer:
        "Ya. ONTIME dapat digunakan untuk mencatat kehadiran siswa, guru, maupun staf sesuai kebijakan sekolah.",
    },
    {
      question: "Bagaimana jika siswa lupa membawa kartu?",
      answer:
        "Sekolah dapat menentukan alur alternatif pencatatan. Sistem mendukung pencatatan manual oleh petugas sebagai penyesuaian.",
    },
    {
      question: "Apakah orang tua menerima notifikasi?",
      answer:
        "Informasi kehadiran dapat diteruskan kepada orang tua sebagai bagian dari ekosistem QRION, dengan cakupan dan waktu pengiriman yang dapat disesuaikan.",
    },
  ],
  preview: {
    kind: "attendance",
    appTitle: "Ontime",
    appSubtitle: "Kehadiran hari ini",
    metrics: [
      { label: "Hadir", value: "812", hint: "Contoh data" },
      { label: "Terlambat", value: "27", hint: "Contoh data" },
      { label: "Belum tercatat", value: "51", hint: "Contoh data" },
    ],
    chartTitle: "Kehadiran per jam kedatangan",
    series: [
      { label: "06:30", value: 34 },
      { label: "06:45", value: 62 },
      { label: "07:00", value: 88 },
      { label: "07:15", value: 46 },
      { label: "07:30", value: 18 },
    ],
    rowsTitle: "Aktivitas presensi terbaru",
    rows: [
      {
        label: "Ahmad Fauzan — Kelas 7A",
        value: "06:48",
        status: "Hadir",
        tone: "success",
      },
      {
        label: "Nur Aisyah — Kelas 8B",
        value: "07:12",
        status: "Terlambat",
        tone: "warning",
      },
      {
        label: "Rizky Pratama — Kelas 9C",
        value: "06:55",
        status: "Hadir",
        tone: "success",
      },
    ],
  },
  cta: {
    title: "Siap melihat presensi sekolah secara real-time?",
    description:
      "Kami dapat menunjukkan bagaimana kehadiran siswa, guru, dan staf tercatat otomatis dan terhubung dengan modul QRION lainnya.",
    primaryLabel: "Jadwalkan Demo Ontime",
    secondaryLabel: "Hubungi Tim QRION",
  },
};
