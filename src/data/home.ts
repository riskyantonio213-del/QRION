import {
  Activity,
  BarChart3,
  Blocks,
  Building2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  CreditCard,
  Database,
  Eye,
  Gauge,
  GraduationCap,
  Layers,
  MessagesSquare,
  NotebookPen,
  Rocket,
  ScanFace,
  Search,
  Table2,
  UserCheck,
  Users2,
  type LucideIcon,
} from "lucide-react";

/**
 * Editorial copy for the QRION homepage.
 *
 * Kept out of the section components so content can later be sourced from a CMS
 * without touching layout code. No statistics, client names or testimonials are
 * invented here — anything unverifiable is written as a placeholder instead.
 */

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hero = {
  eyebrow: "Partner Digitalisasi Sekolah",
  headline: "Karya Terbaik Kami",
  headline2: "Untuk Sekolah Anda",
  /** Emphasised supporting line, rendered in QRION green. */
  highlight: "Semua terhubung dalam satu ekosistem QRION.",
  // highlight2: "digital yang memudahkan sekolah,guru,siswa, dan orang tua.",
  description:
    "QRION membantu sekolah, madrasah, dan pesantren mengelola administrasi, pembayaran, presensi, kartu digital, jurnal pembelajaran, hingga penerimaan siswa baru dalam satu ekosistem yang terintegrasi.",
  primaryCta: { label: "Coba Live Preview", href: "/live-preview" },
  secondaryCta: { label: "Jadwalkan Demo", href: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
  trustNote:
    "Teknologi yang dirancang untuk membuat operasional sekolah lebih sederhana, transparan, dan terintegrasi.",
  /** Gambar dashboard hero — satu-satunya gambar yang bisa dikustom di hero. */
  dashboardImage: "/images/onboard.png",
};

/** 4 kartu fitur melayang di sekitar dashboard hero. */
export const heroFloatingCards = {
  absensi: {
    icon: ScanFace,
    title: "Absensi",
    description: "Lebih mudah dengan wajah",
    iconBoxClassName: "bg-blue-50",
    iconClassName: "text-blue-500",
  },
  pembayaran: {
    icon: CreditCard,
    title: "Pembayaran",
    description: "Non-tunai di kantin sekolah",
    iconBoxClassName: "bg-emerald-50",
    iconClassName: "text-emerald-500",
  },
  akademik: {
    icon: GraduationCap,
    title: "Akademik",
    description: "Nilai & rapor dalam satu sistem",
    iconBoxClassName: "bg-blue-50",
    iconClassName: "text-blue-600",
  },
  komunikasi: {
    icon: MessagesSquare,
    title: "Komunikasi",
    description: "Sekolah, orang tua dan siswa terhubung",
    iconBoxClassName: "bg-sky-50",
    iconClassName: "text-sky-500",
  },
};

export const trust = {
  eyebrow: "Kepercayaan",
  title: "Dipercaya untuk Mendukung Transformasi Digital Pendidikan",
  description:
    "QRION dikembangkan bersama kebutuhan institusi pendidikan — mulai dari sekolah, madrasah, hingga pesantren.",
};

/**
 * Section 3 — Problems.
 */
export const problems: IconCard[] = [
  {
    title: "Data Terpisah",
    description:
      "Data pembayaran, absensi, siswa, dan administrasi berada di berbagai sistem.",
    icon: Database,
  },
  {
    title: "Proses Manual",
    description:
      "Banyak aktivitas administratif masih membutuhkan pencatatan manual.",
    icon: ClipboardList,
  },
  {
    title: "Informasi Terlambat",
    description:
      "Sekolah dan orang tua tidak selalu mendapatkan informasi secara real-time.",
    icon: Clock,
  },
  {
    title: "Sulit Dimonitor",
    description:
      "Manajemen sekolah membutuhkan waktu untuk menggabungkan berbagai laporan.",
    icon: BarChart3,
  },
];

export const problemTransition = {
  title: "QRION menyatukan proses tersebut dalam satu ekosistem digital.",
  description:
    "Setiap modul QRION dapat digunakan secara mandiri, namun akan bekerja paling optimal ketika saling terhubung dalam satu ekosistem.",
};

/**
 * Section 6 — How QRION works.
 */
export const howItWorks: (IconCard & { step: string })[] = [
  {
    step: "01",
    title: "Pahami Kebutuhan Sekolah",
    description: "Tim QRION memetakan kondisi dan kebutuhan operasional sekolah.",
    icon: Search,
  },
  {
    step: "02",
    title: "Konfigurasi Sistem",
    description: "Produk dan sistem dikonfigurasi sesuai kebutuhan institusi.",
    icon: Blocks,
  },
  {
    step: "03",
    title: "Implementasi & Training",
    description:
      "Admin sekolah mendapatkan pendampingan untuk menggunakan sistem.",
    icon: UserCheck,
  },
  {
    step: "04",
    title: "Operasional & Monitoring",
    description:
      "Sekolah dapat menjalankan dan memonitor proses secara digital.",
    icon: Gauge,
  },
];

/**
 * Section 7 — Benefits.
 */
export const benefits: IconCard[] = [
  {
    title: "Sistem Terintegrasi",
    description: "Berbagai kebutuhan sekolah berada dalam satu ekosistem.",
    icon: Layers,
  },
  {
    title: "Informasi Real-Time",
    description:
      "Sekolah dan pihak terkait mendapatkan informasi dengan lebih cepat.",
    icon: Activity,
  },
  {
    title: "Administrasi Lebih Efisien",
    description: "Kurangi pekerjaan manual dan proses administratif berulang.",
    icon: Gauge,
  },
  {
    title: "Data Lebih Terstruktur",
    description: "Data operasional sekolah dapat dikelola dengan lebih rapi.",
    icon: Table2,
  },
  {
    title: "Mudah Dimonitor",
    description: "Aktivitas penting dapat dipantau melalui sistem.",
    icon: Eye,
  },
  {
    title: "Siap Berkembang",
    description:
      "Sistem dapat digunakan sesuai kebutuhan dan perkembangan sekolah.",
    icon: Rocket,
  },
];

/**
 * Section 9 — User roles.
 * `visual` dipindahkan utuh dari ROLE_VISUALS di roles-section.tsx.
 */
export type RoleVisual = {
  image: string;
  highlight: string;
  subHighlight: string;
  theme: "green" | "blue";
};

export const roles: (IconCard & { visual: RoleVisual })[] = [
  {
    title: "Manajemen Sekolah",
    description:
      "Mendapatkan visibilitas terhadap aktivitas dan operasional sekolah.",
    icon: Building2,
    visual: {
      image: "/UseCase/kepsek.png",
      highlight: "Data Real-time",
      subHighlight: "Kontrol sekolah di satu layar",
      theme: "green",
    },
  },
  {
    title: "Administrator",
    description:
      "Mengelola data serta aktivitas administratif dengan lebih terstruktur.",
    icon: ClipboardCheck,
    visual: {
      image: "/UseCase/admin.png",
      highlight: "Tertata",
      subHighlight: "Administrasi lebih terstruktur",
      theme: "green",
    },
  },
  {
    title: "Guru",
    description: "Mendukung aktivitas pembelajaran dan pencatatan jurnal.",
    icon: NotebookPen,
    visual: {
      image: "/UseCase/guru.png",
      highlight: "+Efisien",
      subHighlight: "Lebih banyak waktu untuk mengajar",
      theme: "blue",
    },
  },
  {
    title: "Orang Tua",
    description: "Mendapatkan informasi penting terkait aktivitas siswa.",
    icon: Users2,
    visual: {
      image: "/UseCase/ortu.png",
      highlight: "Semua Terhubung",
      subHighlight: "Lebih dekat dengan sekolah",
      theme: "green",
    },
  },
  {
    title: "Siswa",
    description:
      "Mendapat pengalaman layanan sekolah yang lebih terintegrasi.",
    icon: GraduationCap,
    visual: {
      image: "/UseCase/murid.png",
      highlight: "Lebih Mandiri",
      subHighlight: "Semangat belajar setiap hari",
      theme: "blue",
    },
  },
];

export const finalCta = {
  title: "Siap Membawa Sekolah Anda ke Ekosistem Digital?",
  description:
    "Diskusikan kebutuhan sekolah Anda bersama tim QRION dan lihat bagaimana teknologi dapat membantu membuat operasional sekolah lebih sederhana.",
  primaryCta: { label: "Jadwalkan Demo", href: "/demo" },
  secondaryCta: { label: "Hubungi Tim QRION", href: "https://api.whatsapp.com/send/?phone=628216195202&text=Halo+Qrion%2C+Saya+mau+konsultasi+gratis&type=phone_number&app_absent=0" },
};

export const dashboardSection = {
  eyebrow: "Dashboard QRION",
  title: "Semua Informasi Penting Sekolah dalam Satu Dashboard",
  description:
    "Pantau kehadiran, pembayaran, jurnal, dan aktivitas sekolah dari satu tampilan yang mudah dipahami — tanpa perlu membuka banyak laporan terpisah.",
  bullets: [
    "Ringkasan operasional harian dalam satu layar",
    "Data dikelompokkan per modul agar mudah ditelusuri",
    "Dapat disesuaikan dengan kebutuhan pelaporan sekolah",
  ],
};

/**
 * Header SectionHeader tiap section homepage.
 * (id `*-heading` tetap di komponen agar ARIA tidak berubah.)
 */
export const insightHeader = {
  eyebrow: "Wawasan",
  title: "Wawasan & Artikel Terbaru",
  description:
    "Berbagai artikel pilihan yang membahas teknologi, manajemen, dan inovasi di lingkungan sekolah.",
};

export const rolesHeader = {
  eyebrow: "Use case",
  title: "Untuk siapa QRION dirancang",
};
