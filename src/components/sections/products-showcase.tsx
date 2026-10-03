"use client";

import {
  useEffect,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
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

/**
 * Sisi kanan showcase: gambar dengan rotasi 3D istirahat + tilt mengikuti
 * kursor saat hover — meniru mockup hero gis-project-web (rest: rotateY(-10deg)
 * rotateX(3deg), perspective 1500px, hanya >=1024px & perangkat hover).
 */
const REST_TILT_CLASS =
  "lg:[transform:perspective(1500px)_rotateY(-10deg)_rotateX(3deg)]";

function TiltStage({
  current,
  active,
  children,
}: {
  current: Slide;
  active: number;
  children: ReactNode;
}) {
  const [tilt, setTilt] = useState<{ rx: number; ry: number } | null>(null);

  const handleTiltMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (
      !window.matchMedia("(hover: hover) and (min-width: 1024px)").matches
    ) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const rx = -((event.clientY - rect.top - rect.height / 2) / 15);
    const ry = (event.clientX - rect.left - rect.width / 2) / 15;
    setTilt((prev) =>
      prev && Math.abs(prev.rx - rx) < 0.05 && Math.abs(prev.ry - ry) < 0.05
        ? prev
        : { rx, ry },
    );
  };

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center lg:w-7/12 lg:flex-row lg:items-center lg:justify-end"
      onMouseMove={handleTiltMove}
      onMouseLeave={() => setTilt(null)}
    >
      <div
        key={`img-${active}`}
        className={cn(
          "z-10 w-full animate-[qrion-fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both]",
          current.phone ? "max-w-[260px] lg:mr-16" : "max-w-[920px]",
        )}
      >
        <Image
          src={current.image}
          alt={`Tampilan ${current.label} — QRION`}
          width={current.width}
          height={current.height}
          priority
          style={
            tilt
              ? {
                  transform: `perspective(1500px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                }
              : undefined
          }
          className={cn(
            "h-auto w-full transition-transform duration-500 ease-out",
            REST_TILT_CLASS,
            current.phone
              ? "rounded-[2.5rem] shadow-[0_24px_60px_rgba(48,46,89,0.22)]"
              : "rounded-2xl border border-slate-100 shadow-[0_24px_60px_rgba(48,46,89,0.12)]",
          )}
        />
      </div>
      {children}
    </div>
  );
}

export function ProductsShowcase() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  // Efek magnetic pada tombol CTA — tombol "menempel" ke kursor (mirip .btn-magnetic)
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  
  // Memisahkan data float intro (untuk deskripsi kiri) dan sisanya (untuk fitur kanan)
  const introFloat = current.floats[0];
  const featureFloats = current.floats.slice(1, 5); // Menampilkan maksimal 4 fitur di kanan

  // Preload semua gambar slide supaya transisi tidak kedip
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div className="mt-12">
      {/* Pilihan Produk (Tabs) */}
      <div className="flex w-full overflow-x-auto pb-6">
        <JellyRadio
          items={slides.map((slide) => ({
            value: slide.label,
            label: slide.label,
          }))}
          value={current.label}
          onChange={(_, index) => setActive(index)}
          ariaLabel="Pilih produk QRION"
          chipColor="#ffffff"
          activeColor="#35bb82" // Menyesuaikan warna indikator tab 
          textColor="#475569"
          activeTextColor="#ffffff"
          gap={10}
          radius={999}
          className="mx-auto"
        />
      </div>

      {/* Area Utama 2 Kolom */}
      <div className="mx-auto mt-10 flex w-full flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-20">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="flex w-full flex-col items-start text-left lg:w-5/12 lg:pr-6 xl:pr-10">
          
          {/* Badge Label */}
          <div className="mb-6 flex items-center gap-3 rounded-full bg-indigo-50 py-1.5 pl-2.5 pr-5 shadow-sm ring-1 ring-indigo-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white shadow-md">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="text-[15px] font-bold text-indigo-700">{current.label}</span>
          </div>

          {/* Heading - Dirancang menyamai gaya referensi "Terhubung, Tanpa Batas" */}
          <h2 className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-[42px] xl:text-5xl">
            {introFloat.title} Terhubung, <br className="hidden lg:block"/> Tanpa Batas
          </h2>

          {/* Paragraf */}
          <p className="mb-10 text-base leading-relaxed text-slate-600 md:text-lg">
            {introFloat.text}
          </p>

          {/* Tombol Action (Bentuk Pil Hijau sesuai referensi) */}
          <Link
            href={current.href}
            style={{ transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)` }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setBtnOffset({
                x: (event.clientX - rect.left - rect.width / 2) * 0.3,
                y: (event.clientY - rect.top - rect.height / 2) * 0.3,
              });
            }}
            onMouseLeave={() => setBtnOffset({ x: 0, y: 0 })}
            className="group relative inline-flex items-center justify-between rounded-full bg-emerald-500 px-7 py-3.5 text-white shadow-[0_8px_30px_rgb(16,185,129,0.25)] ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 ease-out hover:bg-emerald-600 hover:shadow-[0_8px_30px_rgb(16,185,129,0.4)]"
            aria-label={current.linkLabel}
          >
            <span className="pr-6 font-semibold tracking-wide text-[15px]">{current.linkLabel}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Kolom Kanan: Gambar Dashboard & Floating Card */}
        <TiltStage current={current} active={active}>

          {/* Floating Card Checklist — static di mobile (di luar gambar), absolute mulai lg */}
          <div className="relative z-20 mt-6 w-full max-w-[340px] animate-[qrion-emerge_0.65s_cubic-bezier(0.22,1,0.36,1)_both] lg:absolute lg:-right-4 lg:bottom-16 lg:mt-0 lg:w-[280px] lg:max-w-none xl:-right-6 xl:bottom-20">
            {/* Wrapper animasi floating berkelanjutan */}
            <div className="animate-[qrion-float_4.5s_ease-in-out_infinite] rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_20px_50px_rgba(48,46,89,0.15)] backdrop-blur-xl">
              
              {/* Header Card */}
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 20h2V9H4v11zm6 0h2V4h-2v16zm6 0h2v-7h-2v7zm6 0h2v-4h-2v4z"/>
                    </svg>
                  </div>
                  <h4 className="text-[14px] font-bold leading-tight text-slate-800">
                    {introFloat.title} lebih terstruktur
                  </h4>
                </div>
                <ArrowRight className="h-4 w-4 text-emerald-500 shrink-0" strokeWidth={2.5} />
              </div>

              {/* List Checklist (Mengambil dari sub-fitur) */}
              <div className="flex flex-col gap-3.5">
                {featureFloats.map((float, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={3} />
                    <span className="text-[13px] font-medium text-slate-600">
                      {float.title || float.text}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </TiltStage>
      </div>
    </div>
  );
}

export default ProductsShowcase;