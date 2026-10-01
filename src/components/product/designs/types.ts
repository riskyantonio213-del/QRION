import type { CSSProperties, ReactNode } from "react";

import type { Product } from "@/data/products";

/**
 * Design khusus per produk — file .tsx terpisah di folder ini, satu file
 * per slug (ontuition.tsx, oncard.tsx, ...). Data produk tetap berada di
 * src/data/products/*.ts; slot di sini hanya untuk tampilan yang bentuknya
 * beda-beda antar produk.
 *
 * Semua properti bersifat opsional — biarkan kosong untuk memakai tampilan
 * default situs QRION.
 */
export type ProductDesign = {
  /**
   * Ganti SELURUH isi halaman produk (menggantikan semua section default).
   * Dipakai saat design halaman benar-benar beda dari template QRION.
   * Jika diisi, slot themeVars tetap dipakai, heroDecor/heroVisual diabaikan.
   */
  page?: (product: Product) => ReactNode;

  /**
   * CSS variables untuk halaman produk ini (warna khusus produk).
   * Contoh: { "--product-primary": "#2563eb" }
   * Dipakai pada wrapper halaman di product-page.tsx.
   */
  themeVars?: CSSProperties & Record<`--${string}`, string | number>;

  /**
   * Dekorasi tambahan di dalam hero (di atas gradient default).
   * Parent hero bersifat `relative`, jadi absolute-position bebas.
   */
  heroDecor?: ReactNode;

  /**
   * Ganti visual kanan hero (kartu preview default).
   * Return undefined/null untuk memakai ProductPreview bawaan.
   * Contoh: heroVisual: (product) => <MilikProduk product={product} />
   */
  heroVisual?: (product: Product) => ReactNode;
};
