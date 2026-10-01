import { GraduationCap, UserPlus, Database, ClipboardCheck, BadgeCheck, BarChart3, Table2 } from "lucide-react";

import type { Product } from "./types";
import { sharedRoles } from "./shared";

export const spmb: Product = {
  slug: "spmb",
  name: "Qrion SPMB",
  category: "Digital Student Admission",
  tagline: "Penerimaan murid baru yang lebih teratur.",
  headline: "Digitalisasi Penerimaan Murid Baru",
  description:
    "QRION SPMB membantu sekolah mengelola proses penerimaan murid baru secara lebih efektif, mulai dari pendaftaran hingga penyampaian hasil.",
  summary:
    "Sistem digital untuk membantu sekolah mengelola proses penerimaan murid baru secara lebih efektif.",
  icon: GraduationCap,
  accent: {
    iconWrap: "bg-qrion-subtle-green border-brand-mint-medium",
    icon: "text-brand-green",
    chip: "border-brand-mint-medium bg-qrion-subtle-green text-brand-dark",
    gradient: "from-brand/10 via-brand-green/5 to-transparent",
    dot: "bg-brand",
    bar: "bg-brand",
    ring: "group-hover:border-brand-mint-medium",
  },
  highlights: ["Pendaftaran online", "Verifikasi data", "Dashboard penerimaan"],
  cardBenefits: [
    "Pendaftaran online",
    "Pengelolaan data calon siswa",
    "Monitoring proses pendaftaran",
    "Informasi penerimaan",
    "Rekap data pendaftar",
  ],
  problems: [
    {
      title: "Formulir menumpuk",
      description:
        "Berkas pendaftaran terkumpul dalam jumlah besar dan sulit ditelusuri.",
    },
    {
      title: "Data pendaftar tidak seragam",
      description:
        "Informasi calon siswa masuk dari berbagai saluran dengan format berbeda.",
    },
    {
      title: "Status pendaftaran tidak jelas",
      description:
        "Calon siswa dan orang tua sulit mengetahui tahapan yang sedang berjalan.",
    },
  ],
  features: [
    {
      title: "Form pendaftaran online",
      description: "Calon siswa mendaftar melalui formulir digital yang terstruktur.",
      icon: UserPlus,
    },
    {
      title: "Database calon siswa",
      description: "Data pendaftar tersimpan dan dapat dicari kembali.",
      icon: Database,
    },
    {
      title: "Verifikasi data",
      description: "Admin memeriksa kelengkapan data sebelum proses berikutnya.",
      icon: ClipboardCheck,
    },
    {
      title: "Status pendaftaran",
      description: "Tahapan setiap pendaftar dapat dilihat dengan jelas.",
      icon: BadgeCheck,
    },
    {
      title: "Dashboard penerimaan",
      description: "Ringkasan proses penerimaan murid baru dalam satu tampilan.",
      icon: BarChart3,
    },
    {
      title: "Rekap data",
      description: "Merangkum data pendaftar untuk kebutuhan laporan sekolah.",
      icon: Table2,
    },
  ],
  workflow: [
    {
      title: "Calon siswa mendaftar",
      description: "Pendaftaran dilakukan melalui formulir online sekolah.",
    },
    {
      title: "Data masuk ke sistem",
      description: "Data pendaftar tersimpan langsung pada basis data penerimaan.",
    },
    {
      title: "Admin melakukan verifikasi",
      description: "Kelengkapan dan kesesuaian data diperiksa oleh admin.",
    },
    {
      title: "Status pendaftaran diperbarui",
      description: "Setiap tahapan tercatat sehingga status selalu terbarui.",
    },
    {
      title: "Informasi hasil disampaikan",
      description: "Hasil penerimaan dapat diteruskan kepada calon siswa.",
    },
  ],
  benefits: [
    {
      title: "Pendaftaran lebih tertata",
      description: "Data masuk melalui satu alur yang konsisten.",
    },
    {
      title: "Berkas lebih mudah dicari",
      description: "Data pendaftar dapat ditelusuri kembali kapan dibutuhkan.",
    },
    {
      title: "Proses verifikasi lebih jelas",
      description: "Tahapan penerimaan tercatat untuk setiap pendaftar.",
    },
    {
      title: "Pemantauan lebih cepat",
      description: "Sekolah dapat melihat perkembangan pendaftaran dari dashboard.",
    },
    {
      title: "Lebih sedikit pekerjaan berulang",
      description: "Data yang sama tidak perlu dimasukkan berkali-kali.",
    },
    {
      title: "Siap untuk periode berikutnya",
      description: "Alur penerimaan dapat digunakan ulang pada tahun ajaran baru.",
    },
  ],
  roles: [sharedRoles.admin, sharedRoles.management, sharedRoles.parent],
  faq: [
    {
      question: "Apakah pendaftaran dapat dibuka untuk beberapa jalur?",
      answer:
        "QRION SPMB dapat menyesuaikan jalur atau kategori pendaftaran sesuai kebijakan sekolah pada periode penerimaan yang berjalan.",
    },
    {
      question: "Apakah dokumen pendukung dapat diunggah?",
      answer:
        "Kelengkapan data dan dokumen pendukung dapat disesuaikan dengan kebutuhan verifikasi sekolah pada tahap implementasi.",
    },
    {
      question: "Apakah calon siswa dapat memantau status pendaftaran?",
      answer:
        "Status pendaftaran dapat ditampilkan sebagai bagian dari informasi yang disampaikan kepada calon siswa, tergantung kebijakan sekolah.",
    },
    {
      question: "Bagaimana data pendaftar digunakan setelah penerimaan selesai?",
      answer:
        "Data pendaftar tersimpan sebagai rekap dan dapat menjadi dasar pemrosesan siswa baru selanjutnya.",
    },
  ],
  preview: {
    kind: "admission",
    appTitle: "Qrion SPMB",
    appSubtitle: "Proses penerimaan murid baru",
    metrics: [
      { label: "Total pendaftar", value: "268", hint: "Contoh data" },
      { label: "Terverifikasi", value: "214", hint: "Contoh data" },
      { label: "Menunggu verifikasi", value: "54", hint: "Contoh data" },
    ],
    chartTitle: "Pendaftar per pekan",
    series: [
      { label: "Pekan 1", value: 28 },
      { label: "Pekan 2", value: 56 },
      { label: "Pekan 3", value: 74 },
      { label: "Pekan 4", value: 62 },
    ],
    rowsTitle: "Pendaftar terbaru",
    rows: [
      {
        label: "Ahmad Fauzan",
        value: "Jalur reguler",
        status: "Terverifikasi",
        tone: "success",
      },
      {
        label: "Nur Aisyah",
        value: "Jalur prestasi",
        status: "Menunggu",
        tone: "warning",
      },
      {
        label: "Rizky Pratama",
        value: "Jalur reguler",
        status: "Terverifikasi",
        tone: "success",
      },
    ],
  },
  cta: {
    title: "Siap mendigitalkan penerimaan murid baru?",
    description:
      "Kami dapat menunjukkan bagaimana pendaftaran, verifikasi, dan status penerimaan dikelola dalam satu alur digital.",
    primaryLabel: "Jadwalkan Demo Qrion SPMB",
    secondaryLabel: "Hubungi Tim QRION",
  },
};
