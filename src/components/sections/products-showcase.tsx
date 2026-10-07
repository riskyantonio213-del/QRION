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

import type { Slide } from "@/data/showcase";
import { useContent } from "@/components/admin/content-provider";
import { cn } from "@/lib/utils";
import JellyRadio from "@/components/ui/jelly-radio";

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
      className={cn(
        "relative flex w-full flex-col items-center gap-6 lg:w-7/12",
        current.phone && "lg:flex-row lg:justify-center",
      )}
    >
      <div
        key={`img-${active}`}
        onMouseMove={handleTiltMove}
        onMouseLeave={() => setTilt(null)}
        className={cn(
          "z-10 w-full animate-[qrion-fade-up_0.7s_cubic-bezier(0.22,1,0.36,1)_both]",
          current.phone ? "max-w-[280px] lg:shrink-0" : "max-w-[920px]",
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
  const { slides } = useContent().showcase;
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
              
            <Image
              src={current.icon}
              alt={current.label}
              width={current.iconWidth}
              height={current.iconHeight}
              sizes="140px"
              className="h-10 mb-5 gap-10 w-auto"
            />

          {/* Heading - Dirancang menyamai gaya referensi "Terhubung, Tanpa Batas" */}
          <h2 className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-[42px] xl:text-5xl">
            {current.heading}
          </h2>

          {/* Paragraf */}
          <p className="mb-10 text-base leading-relaxed text-slate-600 md:text-lg">
            {introFloat.text}
          </p>

          {/* Tombol Action (Bentuk Pil Hijau sesuai referensi) */}
          <Link
            href={current.href}
            target={current.href.startsWith("http") ? "_blank" : undefined}
            rel={current.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

          {/* Floating Card Checklist — dashboard: nimpa dekat sudut kanan atas (agak offside keluar), phone: di samping, mobile: di bawah */}
          <div
            className={cn(
              "relative z-20 w-full max-w-[340px] animate-[qrion-emerge_0.65s_cubic-bezier(0.22,1,0.36,1)_both] lg:w-[280px] lg:max-w-none lg:shrink-0",
              !current.phone && "lg:absolute lg:-top-20 lg:-right-45",
            )}
          >
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
