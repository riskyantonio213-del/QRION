"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import JellyRadio from "@/components/ui/jelly-radio";

type Float = {
  chip?: string;
  title?: string;
  text: string;
  check?: boolean;
};

type Feature = { title: string; text: string };

type Slide = {
  label: string;
  image: string;
  width: number;
  height: number;
  href: string;
  linkLabel: string;
  phone?: boolean;
  floats: Float[];
};

const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

/** Keterangan resmi per produk: intro + daftar fitur (judul + penjelasan). */
const floatCopy: Record<string, { intro: string; features: Feature[] }> = {
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
      "Kartu pintar untuk mendukung identitas dan berbagai aktivitas digital siswa dalam ekosistem sekolah.",
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
      "Sistem jurnal digital untuk membantu sekolah dan guru mencatat serta memonitor aktivitas pembelajaran secara lebih terstruktur.",
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
};

const floatsFor = (slug: string): Float[] => {
  const product = productBySlug[slug];
  const copy = floatCopy[slug];
  return [
    { chip: product.category, title: product.name, text: copy.intro },
    ...copy.features.map((feature) => ({
      title: feature.title,
      text: feature.text,
      check: true,
    })),
  ];
};

const slides: Slide[] = [
  {
    label: "Ontuition",
    image: "/images/dahsboard-ontuition.png",
    width: 1220,
    height: 724,
    href: "/produk/ontuition",
    linkLabel: "Lihat detail Ontuition",
    floats: floatsFor("ontuition"),
  },
  {
    label: "Oncard",
    image: "/images/dashboard-oncar.png",
    width: 1214,
    height: 724,
    href: "/produk/oncard",
    linkLabel: "Lihat detail Oncard",
    floats: floatsFor("oncard"),
  },
  {
    label: "Ontime",
    image: "/images/dashboard-ontime.png",
    width: 1218,
    height: 728,
    href: "/produk/ontime",
    linkLabel: "Lihat detail Ontime",
    floats: floatsFor("ontime"),
  },
  {
    label: "Qrion Jurnal",
    image: "/images/dashboard-jurnal.png",
    width: 1217,
    height: 698,
    href: "/produk/jurnal",
    linkLabel: "Lihat detail Qrion Jurnal",
    floats: floatsFor("jurnal"),
  },
  {
    label: "QRION Mobile",
    image: "/images/qrion-mobile.png",
    width: 328,
    height: 676,
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

/** Vektor awal emerge: kartu keluar dari belakang gambar (kiri → kanan, kanan → kiri). */
const emergeVector = (index: number) => ({
  fx: index % 2 === 0 ? "360px" : "-360px",
  fy: ["140px", "0px", "-140px"][Math.min(Math.floor(index / 2), 2)],
});

export function ProductsShowcase() {
  const [active, setActive] = useState(0);
  const current = slides[active];
  // Distribusi kartu: genap → kolom kiri, ganjil → kolom kanan (tinggi seimbang).
  const leftFloats = current.floats.filter((_, i) => i % 2 === 0);
  const rightFloats = current.floats.filter((_, i) => i % 2 === 1);

  // Preload semua gambar slide supaya transisi pill tidak kedip.
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const renderFloat = (float: Float, index: number) => {
    const { fx, fy } = emergeVector(index);
    return (
      <div
        key={`${active}-${index}`}
        className="relative z-0 w-full animate-[qrion-emerge_0.65s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
        style={
          {
            "--fx": fx,
            "--fy": fy,
            animationDelay: `${0.6 + index * 0.07}s`,
          } as CSSProperties
        }
      >
        {/* Lapisan dalam: melayang terus setelah selesai emerge */}
        <div
          className="animate-[qrion-float_4.5s_ease-in-out_infinite] motion-reduce:animate-none"
          style={{ animationDelay: `${1.5 + (index % 3) * 0.45}s` }}
        >
          {float.check ? (
            <div className="rounded-xl border border-border bg-background/95 p-4 shadow-[0_12px_36px_rgba(48,46,89,0.12)]">
              <div className="flex items-start gap-2.5">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-brand"
                />
                <div className="min-w-0">
                  {float.title && (
                    <p className="text-[13px] font-semibold leading-snug text-foreground">
                      {float.title}
                    </p>
                  )}
                  <p
                    className={cn(
                      float.title
                        ? "mt-1 text-[12.5px] leading-relaxed text-muted-foreground"
                        : "text-[13px] leading-snug text-foreground/85",
                    )}
                  >
                    {float.text}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-background/95 p-4 shadow-[0_12px_36px_rgba(48,46,89,0.12)]">
              {float.chip && (
                <span className="inline-block rounded-full border border-brand-mint-medium bg-brand-mint px-2.5 py-1 text-[11px] font-medium text-brand-dark">
                  {float.chip}
                </span>
              )}
              {float.title && (
                <h4 className="mt-2.5 font-display text-[17px] font-bold text-foreground">
                  {float.title}
                </h4>
              )}
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {float.text}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-12">
      <div className="flex w-full overflow-x-auto">
        <JellyRadio
          items={slides.map((slide) => ({
            value: slide.label,
            label: slide.label,
          }))}
          value={current.label}
          onChange={(_, index) => setActive(index)}
          ariaLabel="Pilih produk QRION"
          chipColor="#ffffff"
          activeColor="#35bb82"
          textColor="#475569"
          activeTextColor="#ffffff"
          gap={10}
          radius={999}
          className="mx-auto"
        />
      </div>

      {/* Stage: flow 3 kolom — kartu mengikuti lebar gambar, tidak pernah overlap */}
      <div className="mt-10 flex w-full items-center justify-center gap-5 xl:gap-6">
        {/* Kolom kiri */}
        <div className="hidden w-[248px] shrink-0 flex-col gap-4 xl:flex">
          {leftFloats.map((float, i) => renderFloat(float, i * 2))}
        </div>

        {/* Gambar utama */}
        <Image
          key={`img-${active}`}
          src={current.image}
          alt={`Tampilan ${current.label} — QRION`}
          width={current.width}
          height={current.height}
          priority
          className={cn(
            "z-10 h-auto min-w-0 animate-[qrion-fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none",
            current.phone
              ? "w-[190px] rounded-3xl shadow-[0_24px_60px_rgba(48,46,89,0.22)] sm:w-[230px] xl:w-[260px]"
              : "w-[90%] rounded-xl shadow-[0_24px_60px_rgba(48,46,89,0.18)] sm:w-[75%] xl:w-full xl:max-w-[1080px]",
          )}
        />

        {/* Kolom kanan */}
        <div className="hidden w-[248px] shrink-0 flex-col gap-4 xl:flex">
          {rightFloats.map((float, i) => renderFloat(float, i * 2 + 1))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href={current.href}
          className="group inline-flex items-center gap-2 rounded-lg bg-brand-indigo-dark px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand"
        >
          {current.linkLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}

export default ProductsShowcase;
