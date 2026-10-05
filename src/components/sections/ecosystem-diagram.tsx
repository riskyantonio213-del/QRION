"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Clock,
  CreditCard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type BentoCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  /** Ubah warna judul kartu di sini (class Tailwind). */
  titleClassName?: string;
  /** Ubah warna deskripsi kartu di sini (class Tailwind). */
  descriptionClassName?: string;
  /** Ubah warna icon kartu di sini (class Tailwind). */
  iconClassName?: string;
  /** object-position tambahan (mis. object-top) */
  position?: string;
  /** tampil selebar 2 kolom */
  wide?: boolean;
  sizes: string;
};

const bentoCards: BentoCard[] = [
  {
    title: "Oncard",
    description: "Pembayaran sekolah lebih mudah dan aman.",
    icon: CreditCard,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/1.png",
    alt: "Kartu QRION di-tap ke mesin pembayaran",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Ontime",
    description: "Absensi siswa dalam satu platform.",
    icon: Clock,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/2.png",
    alt: "Dashboard kehadiran harian siswa QRION",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Ekosistem terintegrasi",
    description: "Seluruh kebutuhan sekolah berjalan selaras.",
    icon: Sparkles,
    titleClassName: "text-white",
    descriptionClassName: "text-white/75",
    iconClassName: "text-white",
    image: "/bento/3.png",
    alt: "Ilustrasi seluruh aplikasi QRION yang saling terhubung",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    title: "Ontuition & QRION Jurnal",
    description:
      "Pembelajaran dan administrasi keuangan dalam satu alur yang terintegrasi.",
    icon: BookOpen,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/4.png",
    alt: "Kelas online dan dashboard keuangan sekolah",
    wide: true,
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  {
    title: "SPMB & POS",
    description:  
      "Kelola penerimaan siswa baru dan operasional kantin dalam satu sistem.",
    icon: ClipboardList,
    titleClassName: "text-black",
    descriptionClassName: "text-black/65",
    image: "/bento/5.png",
    alt: "Kartu pendaftaran siswa baru dan transaksi kantin",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

export function EcosystemDiagram() {
  return (
    <div className="mt-14 w-full max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint-medium/10 text-brand mb-4 text-xs font-semibold uppercase tracking-wider">
            <span className="size-2 rounded-full bg-brand" />
            Ekosistem QRION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Semua yang sekolah butuhkan dalam{" "}
            <span className="text-brand">satu ekosistem</span>
          </h2>
        </div>
        <div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base mb-4">
            Platform terintegrasi untuk membantu sekolah mengelola operasional,
            pembelajaran, keuangan, absensi, dan layanan orang tua dengan lebih
            efisien.
          </p>
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Lihat semua fitur
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bentoCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "group relative min-h-[300px] overflow-hidden font-bold rounded-3xl shadow-sm transition-shadow hover:shadow-md md:min-h-[340px]",
              card.wide && "md:col-span-2",
            )}
          >
            {/* Gambar full-bleed */}
            <Image
              src={card.image}
              alt={card.alt}
              fill
              quality={76}
              sizes={card.sizes}
              className={cn(
                "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                card.position,
              )}
            />

            {/* Scrim agar teks tetap terbaca di atas gambar */}
            <div
              aria-hidden="true"
              className="absolute inset-0 "
            />

            {/* Teks & icon di-overlay di atas gambar */}
            <div className="relative flex h-full min-h-[300px] flex-col justify-start p-6 md:min-h-[340px] md:p-8">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center  text-xl  ",
                    card.iconClassName,
                  )}
                >
                  <card.icon aria-hidden="true" className="size-8 -mt-10" />
                </div>
                <div className="flex flex-col gap-0 -mt-9 -px-13 ">
                  <h3
                    className={cn(
                      "text-2xl font-bold",
                      card.titleClassName ?? "text-white",
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={cn(
                      "text-xs ",
                      card.descriptionClassName ?? "text-white/75",
                    )}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
