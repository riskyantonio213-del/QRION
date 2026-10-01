import { BookOpenCheck, ClipboardList, UserCheck, Search, History, ListChecks, FileText } from "lucide-react";

import type { Product } from "./types";
import { sharedRoles } from "./shared";

export const jurnal: Product = {
  slug: "jurnal",
  name: "Qrion Jurnal",
  category: "Digital Learning Journal",
  tagline: "Catatan pembelajaran yang lebih terstruktur.",
  headline: "Jurnal Pembelajaran yang Lebih Terstruktur",
  description:
    "QRION JURNAL membantu sekolah dan guru mencatat serta memonitor aktivitas pembelajaran secara lebih terstruktur dan terdokumentasi.",
  summary:
    "Sistem jurnal digital untuk membantu sekolah dan guru mencatat serta memonitor aktivitas pembelajaran secara lebih terstruktur.",
  icon: BookOpenCheck,
  accent: {
    iconWrap: "bg-brand-mint-light border-brand-mint-medium",
    icon: "text-brand",
    chip: "border-brand-mint-medium bg-brand-mint text-brand-dark",
    gradient: "from-brand-dark/12 via-brand-green/5 to-transparent",
    dot: "bg-brand-dark",
    bar: "bg-brand-dark",
    ring: "group-hover:border-brand-mint-medium",
  },
  highlights: ["Jurnal guru", "Monitoring kegiatan", "Rekap aktivitas"],
  cardBenefits: [
    "Jurnal pembelajaran",
    "Aktivitas guru",
    "Monitoring kegiatan belajar",
    "Dokumentasi pembelajaran",
    "Rekap aktivitas",
  ],
  problems: [
    {
      title: "Jurnal masih berupa berkas",
      description:
        "Catatan pembelajaran tersimpan dalam buku atau berkas terpisah dan sulit ditelusuri.",
    },
    {
      title: "Monitoring tidak merata",
      description:
        "Sulit mengetahui gambaran umum aktivitas pembelajaran antar kelas.",
    },
    {
      title: "Dokumentasi tidak lengkap",
      description:
        "Riwayat pembelajaran hilang atau tidak terdokumentasi dengan baik.",
    },
  ],
  features: [
    {
      title: "Pencatatan aktivitas pembelajaran",
      description: "Mencatat materi dan aktivitas kelas secara ringkas.",
      icon: ClipboardList,
    },
    {
      title: "Jurnal guru",
      description: "Setiap guru memiliki catatan jurnal yang terstruktur.",
      icon: UserCheck,
    },
    {
      title: "Monitoring kegiatan",
      description: "Memantau aktivitas pembelajaran dari tingkat sekolah.",
      icon: Search,
    },
    {
      title: "Riwayat jurnal",
      description: "Menelusuri kembali jurnal yang pernah dicatat.",
      icon: History,
    },
    {
      title: "Rekap aktivitas",
      description: "Merangkum aktivitas pembelajaran per periode.",
      icon: ListChecks,
    },
    {
      title: "Laporan",
      description: "Menyediakan laporan pembelajaran untuk kebutuhan internal.",
      icon: FileText,
    },
  ],
  workflow: [
    {
      title: "Guru membuka jurnal",
      description: "Guru mencatat aktivitas pembelajaran pada kelas yang diampu.",
    },
    {
      title: "Jurnal tersimpan",
      description: "Catatan tersimpan sebagai dokumentasi pembelajaran.",
    },
    {
      title: "Sekolah memonitor",
      description: "Sekolah dapat melihat gambaran aktivitas pembelajaran.",
    },
    {
      title: "Rekap disusun",
      description: "Aktivitas dirangkum untuk kebutuhan evaluasi internal.",
    },
    {
      title: "Laporan tersedia",
      description: "Dokumentasi pembelajaran dapat ditelusuri kembali.",
    },
  ],
  benefits: [
    {
      title: "Dokumentasi lebih rapi",
      description: "Catatan pembelajaran tersimpan dalam satu tempat.",
    },
    {
      title: "Proses pengisian sederhana",
      description: "Guru mencatat jurnal dengan alur yang singkat.",
    },
    {
      title: "Pemantauan lebih mudah",
      description: "Sekolah dapat melihat aktivitas pembelajaran secara umum.",
    },
    {
      title: "Riwayat tidak hilang",
      description: "Jurnal tersimpan sebagai arsip yang dapat ditelusuri.",
    },
    {
      title: "Evaluasi lebih siap",
      description: "Rekap aktivitas membantu proses evaluasi internal.",
    },
    {
      title: "Sesuai kebutuhan sekolah",
      description: "Format jurnal dapat disesuaikan dengan kebijakan institusi.",
    },
  ],
  roles: [sharedRoles.teacher, sharedRoles.management, sharedRoles.admin],
  faq: [
    {
      question: "Apakah guru dapat mengisi jurnal dari perangkat mobile?",
      answer:
        "Jurnal dirancang agar nyaman digunakan dari berbagai ukuran layar, sehingga pencatatan dapat dilakukan sesuai kenyamanan guru.",
    },
    {
      question: "Apakah format jurnal dapat disesuaikan?",
      answer:
        "Format jurnal dapat menyesuaikan kebutuhan sekolah, termasuk komponen yang wajib diisi pada setiap catatan.",
    },
    {
      question: "Siapa yang dapat melihat jurnal?",
      answer:
        "Hak akses diatur berdasarkan peran, sehingga jurnal hanya dapat dilihat oleh pihak yang berkepentingan.",
    },
    {
      question: "Apakah jurnal dapat diekspor untuk laporan?",
      answer:
        "Rekap aktivitas pembelajaran dapat dihasilkan dari sistem untuk mendukung kebutuhan pelaporan internal sekolah.",
    },
  ],
  preview: {
    kind: "journal",
    appTitle: "Qrion Jurnal",
    appSubtitle: "Aktivitas pembelajaran pekan ini",
    metrics: [
      { label: "Jurnal terisi", value: "186", hint: "Contoh data" },
      { label: "Belum terisi", value: "24", hint: "Contoh data" },
      { label: "Guru aktif", value: "38", hint: "Contoh data" },
    ],
    chartTitle: "Jurnal per hari",
    series: [
      { label: "Sen", value: 42 },
      { label: "Sel", value: 38 },
      { label: "Rab", value: 44 },
      { label: "Kam", value: 36 },
      { label: "Jum", value: 26 },
    ],
    rowsTitle: "Jurnal terbaru",
    rows: [
      {
        label: "Matematika — Kelas 7A",
        value: "Bab 3 · 90 menit",
        status: "Tercatat",
        tone: "success",
      },
      {
        label: "Bahasa Indonesia — Kelas 8B",
        value: "Bab 2 · 90 menit",
        status: "Tercatat",
        tone: "success",
      },
      {
        label: "IPA — Kelas 9C",
        value: "Praktikum · 120 menit",
        status: "Menunggu",
        tone: "warning",
      },
    ],
  },
  cta: {
    title: "Ingin mendokumentasikan pembelajaran dengan lebih rapi?",
    description:
      "Kami dapat menunjukkan bagaimana guru mencatat jurnal dan bagaimana sekolah memonitor aktivitas pembelajaran dari satu tempat.",
    primaryLabel: "Jadwalkan Demo Qrion Jurnal",
    secondaryLabel: "Hubungi Tim QRION",
  },
};
