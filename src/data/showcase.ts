import { products } from "@/data/products";

/**
 * Konten section "Produk" (header + showcase slide interaktif).
 * Nilai literal dipindahkan utuh dari products-showcase.tsx
 * agar output tidak berubah.
 */

type Float = {
  chip?: string;
  title?: string;
  text: string;
  check?: boolean;
};

type Feature = { title: string; text: string };

export type Slide = {
  label: string;
  image: string;
  width: number;
  height: number;
  /** Gambar label badge (logo transparan) */
  icon: string;
  iconWidth: number;
  iconHeight: number;
  /** Judul h2 per produk — tulis manual di sini. */
  heading: string;
  href: string;
  linkLabel: string;
  phone?: boolean;
  floats: Float[];
};

const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

/** Keterangan resmi per produk: intro + daftar fitur (judul + penjelasan). */
const floatCopy: Record<
  string,
  { intro: string; chip?: string; title?: string; features: Feature[] }
> = {
  ontuition: {
    intro:
      "Sistem pembayaran pendidikan yang membantu sekolah mengelola tagihan, pembayaran SPP, monitoring transaksi, dan laporan keuangan secara lebih terstruktur.",
    features: [
      {
        title: "Pengelolaan tagihan siswa",
        text: "Mempermudah pembuatan, penjadwalan, serta pendistribusian rincian tagihan biaya pendidikan kepada masing-masing wali murid secara otomatis dan transparan.",
      },
      {
        title: "Monitoring pembayaran",
        text: "Memungkinkan pihak tata usaha dan keuangan sekolah untuk mengawasi status pelunasan iuran secara real-time guna meminimalisir keterlambatan.",
      },
      {
        title: "Riwayat transaksi",
        text: "Menyimpan seluruh catatan aliran dana masuk dan keluar secara digital dengan basis data yang aman serta mudah ditelusuri kembali kapan saja.",
      },
      {
        title: "Laporan pembayaran",
        text: "Menyediakan rekapitulasi finansial periodik yang akurat dan komprehensif untuk mendukung proses audit serta evaluasi manajemen sekolah.",
      },
      {
        title: "Notifikasi pembayaran",
        text: "Mengirimkan pesan pemberitahuan otomatis kepada orang tua setiap kali transaksi atau pembayaran berhasil diproses oleh sistem.",
      },
    ],
  },
  oncard: {
    intro:
      "Sistem cashless untuk memudahkan siswa bertransaksi di kantin dan berbagai merchant dalam lingkungan sekolah.",
    features: [
      {
        title: "Identitas siswa",
        text: "Berfungsi sebagai kartu pengenal resmi berteknologi modern yang memuat informasi data diri pelajar secara aman dan terenkripsi.",
      },
      {
        title: "Integrasi dengan sistem QRION",
        text: "Terhubung secara langsung dengan ekosistem digital sekolah untuk mendukung kelancaran berbagai layanan operasional harian.",
      },
      {
        title: "Mendukung aktivitas sekolah",
        text: "Memfasilitasi mobilitas dan keterlibatan siswa dalam berbagai kegiatan di lingkungan institusi secara lebih praktis.",
      },
      {
        title: "Pengelolaan kartu",
        text: "Memberikan kemudahan bagi administrator sekolah dalam melakukan aktivasi, pemblokiran, maupun pembaruan data kartu secara terpusat.",
      },
    ],
  },
  ontime: {
    intro:
      "Sistem presensi digital terpadu untuk mencatat dan memantau kehadiran siswa, guru, serta staf secara otomatis dan real-time.",
    features: [
      {
        title: "Presensi digital",
        text: "Memanfaatkan teknologi pemindaian modern untuk menggantikan absensi manual yang kurang efektif.",
      },
      {
        title: "Monitoring kehadiran",
        text: "Memungkinkan pengawas atau guru piket untuk memantau siapa saja yang hadir, izin, atau alpa secara langsung pada hari tersebut.",
      },
      {
        title: "Informasi kedatangan dan kepulangan",
        text: "Mencatat secara presisi waktu persis saat siswa tiba di gerbang sekolah hingga jam kepulangan mereka.",
      },
      {
        title: "Rekap presensi",
        text: "Menyusun laporan kehadiran bulanan secara otomatis yang langsung terintegrasi dengan database administrasi sekolah.",
      },
      {
        title: "Notifikasi kepada orang tua",
        text: "Memberikan informasi instan ke ponsel orang tua mengenai status kehadiran anak mereka di sekolah.",
      },
    ],
  },
  jurnal: {
    intro:
      "Sistem pencatatan keuangan sekolah untuk mengelola kas, donasi, dan berbagai transaksi secara praktis dan terstruktur.",
    features: [
      {
        title: "Jurnal pembelajaran",
        text: "Media pencatatan harian kurikulum dan materi ajar yang disampaikan oleh guru di dalam kelas secara sistematis.",
      },
      {
        title: "Aktivitas guru",
        text: "Membantu tenaga pendidik merangkum seluruh tugas mengajar dan progres akademis harian dengan lebih terorganisir.",
      },
      {
        title: "Monitoring kegiatan belajar",
        text: "Memudahkan kepala sekolah dalam mengawasi efektivitas dan kelancaran proses kegiatan belajar mengajar dari waktu ke waktu.",
      },
      {
        title: "Dokumentasi pembelajaran",
        text: "Tempat penyimpanan digital untuk melampirkan berkas, foto kegiatan, atau media pendukung kelas lainnya.",
      },
      {
        title: "Rekap aktivitas",
        text: "Menyajikan ringkasan laporan kegiatan belajar secara berkala untuk keperluan evaluasi mutu pendidikan institusi.",
      },
    ],
  },
  spmb: {
    intro:
      "Sistem digital untuk membantu sekolah mengelola proses penerimaan murid baru secara lebih efektif.",
    features: [
      {
        title: "Pendaftaran online",
        text: "Membuka akses seluas-luasnya bagi calon pendaftar untuk mengisi formulir dan mendaftarkan diri secara daring dari mana saja.",
      },
      {
        title: "Pengelolaan data calon siswa",
        text: "Menyimpan dan merapikan seluruh berkas serta informasi pendaftar di dalam satu database terpusat yang aman.",
      },
      {
        title: "Monitoring proses pendaftaran",
        text: "Membantu panitia sekolah melacak sejauh mana tahapan seleksi atau kelengkapan berkas yang telah diselesaikan oleh setiap pendaftar.",
      },
      {
        title: "Informasi penerimaan",
        text: "Sarana pengumuman hasil seleksi dan status kelulusan secara transparan dan cepat kepada calon siswa.",
      },
      {
        title: "Rekap data pendaftar",
        text: "Menghasilkan laporan statistik total pendaftar secara otomatis guna memudahkan analisis kuota penerimaan sekolah.",
      },
    ],
  },
  pos: {
    chip: "Digital School POS",
    title: "Qrion POS",
    intro:
      "Sistem digital untuk membantu sekolah mengelola proses penerimaan murid baru secara lebih efektif.",
    features: [
      {
        title: "Pendaftaran online",
        text: "Membuka akses seluas-luasnya bagi calon pendaftar untuk mengisi formulir dan mendaftarkan diri secara daring dari mana saja.",
      },
      {
        title: "Pengelolaan data calon siswa",
        text: "Menyimpan dan merapikan seluruh berkas serta informasi pendaftar di dalam satu database terpusat yang aman.",
      },
      {
        title: "Monitoring proses pendaftaran",
        text: "Membantu panitia sekolah melacak sejauh mana tahapan seleksi atau kelengkapan berkas yang telah diselesaikan oleh setiap pendaftar.",
      },
      {
        title: "Informasi penerimaan",
        text: "Sarana pengumuman hasil seleksi dan status kelulusan secara transparan dan cepat kepada calon siswa.",
      },
      {
        title: "Rekap data pendaftar",
        text: "Menghasilkan laporan statistik total pendaftar secara otomatis guna memudahkan analisis kuota penerimaan sekolah.",
      },
    ],
  },
};

const floatsFor = (slug: string): Float[] => {
  const product = productBySlug[slug];
  const copy = floatCopy[slug];
  if (!copy) return [];
  return [
    {
      chip: product?.category ?? copy.chip,
      title: product?.name ?? copy.title,
      text: copy.intro,
    },
    ...copy.features.map((feature) => ({
      title: feature.title,
      text: feature.text,
      check: true,
    })),
  ];
};

export const slides: Slide[] = [
  {
    label: "Ontuition",
    heading: "Billing & Payment Management System",
    image: "/images/dahsboard-ontuition.png",
    width: 1220,
    height: 724,
    icon: "/images/ontuition.png",
    iconWidth: 828,
    iconHeight: 238,
    href: "/produk/ontuition",
    linkLabel: "Lihat detail Ontuition",
    floats: floatsFor("ontuition"),
  },
  {
    label: "Oncard",
    heading: "Cashless & E-Wallet System",
    image: "/images/dashboard-oncar.png",
    width: 1214,
    height: 724,
    icon: "/images/oncard.png",
    iconWidth: 666,
    iconHeight: 238,
    href: "/produk/oncard",
    linkLabel: "Lihat detail Oncard",
    floats: floatsFor("oncard"),
  },
  {
    label: "Ontime",
    heading: "School Digital Attendance System",
    image: "/images/dashboard-ontime.png",
    width: 1218,
    height: 728,
    icon: "/images/ontime.png",
    iconWidth: 667,
    iconHeight: 252,
    href: "/produk/ontime",
    linkLabel: "Lihat detail Ontime",
    floats: floatsFor("ontime"),
  },
  {
    label: "Qrion Jurnal",
    heading: "Cash Management & Fundraising System",
    image: "/images/dashboard-jurnal.png",
    width: 1217,
    height: 698,
    icon: "/images/jurnal.png",
    iconWidth: 467,
    iconHeight: 206,
    href: "/produk/jurnal",
    linkLabel: "Lihat detail Qrion Jurnal",
    floats: floatsFor("jurnal"),
  },
  {
    label: "Qrion SPMB",
    heading: "School Admission Management System",
    image: "/images/spmb-qrion.png",
    width: 1217,
    height: 698,
    icon: "/images/spmb.png",
    iconWidth: 467,
    iconHeight: 206,
    href: "/produk/spmb",
    linkLabel: "Lihat detail Qrion SPMB",
    floats: floatsFor("spmb"),
  },
  {
    label: "Qrion POS",
    heading: "School Admission Management System",
    image: "/images/pos.jpeg",
    width: 1217,
    height: 698,
    icon: "/images/pos.png",
    iconWidth: 467,
    iconHeight: 206,
    href: "https://play.google.com/store/apps/details?id=id.qrion.pos&hl=id",
    linkLabel: "Lihat detail Qrion POS",
    floats: floatsFor("pos"),
  },
  {
    label: "QRION Mobile",
    heading: "QRION Mobile",
    image: "/images/qrion-mobile.jpeg",
    width: 328,
    height: 676,
    icon: "/images/qrion-logo2.png",
    iconWidth: 1081,
    iconHeight: 347,
    href: "/live-preview/qrion-mobile",
    linkLabel: "Lihat live preview QRION Mobile",
    phone: true,
    floats: [
      {
        chip: "Aplikasi",
        title: "QRION Mobile",
        text: "Aplikasi resmi QRION untuk orang tua dan siswa — pantau uang saku, tagihan, dan transaksi kapan saja.",
      },
      {
        text: "Transfer, Bayar, Donasi & Berita dalam satu aplikasi",
        check: true,
      },
      { text: "Riwayat transaksi dan top up saldo", check: true },
      { text: "Tagihan & uang saku terhubung ke sekolah", check: true },
      { text: "Notifikasi real-time untuk orang tua", check: true },
      { text: "Tampilan ringkas dan aman", check: true },
    ],
  },
];

/** Header section Produk (TitleDashes tetap di komponen). */
export const productsHeader = {
  eyebrow: "Produk",
  title: "Modul yang Dapat Digunakan Sesuai Kebutuhan",
  description:
    "Setiap modul QRION dapat digunakan secara mandiri, dan bekerja paling optimal ketika dihubungkan dalam satu ekosistem.",
};
