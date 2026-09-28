import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  CardSim,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Database,
  FileText,
  Fingerprint,
  GraduationCap,
  History,
  IdCard,
  LineChart,
  ListChecks,
  Megaphone,
  QrCode,
  Receipt,
  ScanLine,
  Search,
  Siren,
  Table2,
  UserCheck,
  UserPlus,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/**
 * QRION product catalogue — the single source of truth for the product grid,
 * the ecosystem diagram, the navbar dropdown and every product detail page.
 *
 * To add a new product: append an entry here and it becomes available at
 * `/produk/<slug>` automatically (static params are generated from this array).
 *
 * All numbers inside `preview` are illustrative UI placeholders for the
 * marketing mock-ups — replace them with API data when the product is wired up.
 */

export const productSlugs = [
  "ontuition",
  "oncard",
  "ontime",
  "jurnal",
  "spmb",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export type StatusTone = "success" | "warning" | "neutral" | "info";

export type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductStep = {
  title: string;
  description: string;
};

export type ProductTextItem = {
  title: string;
  description: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

/** Per-product Tailwind accent classes (written literally so Tailwind sees them). */
export type ProductAccent = {
  iconWrap: string;
  icon: string;
  chip: string;
  gradient: string;
  dot: string;
  bar: string;
  ring: string;
};

export type ProductPreview = {
  kind: "attendance" | "payments" | "cards" | "journal" | "admission";
  appTitle: string;
  appSubtitle: string;
  metrics: { label: string; value: string; hint: string }[];
  chartTitle: string;
  series: { label: string; value: number }[];
  rowsTitle: string;
  rows: { label: string; value: string; status: string; tone: StatusTone }[];
};

export type Product = {
  slug: ProductSlug;
  name: string;
  category: string;
  /** One-liner for cards and the ecosystem diagram. */
  tagline: string;
  /** Product page hero headline. */
  headline: string;
  /** Product page hero paragraph. */
  description: string;
  /** Card description (homepage product grid). */
  summary: string;
  icon: LucideIcon;
  accent: ProductAccent;
  highlights: string[];
  /** Five headline benefits shown on the homepage product card. */
  cardBenefits: string[];
  problems: ProductTextItem[];
  features: ProductFeature[];
  workflow: ProductStep[];
  benefits: ProductTextItem[];
  roles: ProductTextItem[];
  faq: ProductFaq[];
  preview: ProductPreview;
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

const sharedRoles = {
  management: {
    title: "Manajemen Sekolah",
    description:
      "Memantau ringkasan aktivitas dan laporan tanpa perlu menggabungkan berkas manual.",
  },
  admin: {
    title: "Administrator",
    description: "Menjalankan proses harian dengan alur kerja yang terstruktur.",
  },
  teacher: {
    title: "Guru",
    description: "Terhubung dengan aktivitas kelas dan kebutuhan pencatatan.",
  },
  parent: {
    title: "Orang Tua",
    description: "Menerima informasi penting terkait aktivitas siswa.",
  },
  student: {
    title: "Siswa",
    description: "Menggunakan layanan sekolah yang lebih terintegrasi.",
  },
} satisfies Record<string, ProductTextItem>;

export const products: Product[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<ProductSlug, Product>;

export function getProduct(slug: string): Product | undefined {
  return productBySlug[slug as ProductSlug];
}

export const ecosystemProducts = products.map((product) => ({
  slug: product.slug,
  name: product.name,
  tagline: product.tagline,
  icon: product.icon,
  accent: product.accent,
}));
