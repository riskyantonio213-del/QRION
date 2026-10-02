"use client";

import { cn } from "@/lib/utils";

type ExternalImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Kelas yang dipasang saat gambar gagal dimuat (fallback ke logo QRION). */
  fallbackClassName?: string;
  fallbackSrc?: string;
};

/**
 * `<img>` untuk gambar dari domain eksternal (qrion.id) dengan fallback otomatis
 * ke aset lokal bila URL asal tidak bisa dimuat.
 */
export function ExternalImage({
  src,
  alt,
  className,
  fallbackClassName,
  fallbackSrc = "/images/qrion-logo2.png",
}: ExternalImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(className)}
      onError={(event) => {
        const element = event.currentTarget;
        if (element.dataset.fallback) return;
        element.dataset.fallback = "1";
        element.src = fallbackSrc;
        if (fallbackClassName) element.className = fallbackClassName;
      }}
    />
  );
}
