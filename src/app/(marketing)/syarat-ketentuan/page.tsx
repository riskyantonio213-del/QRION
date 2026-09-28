import type { Metadata } from "next";

import { ContentPage } from "@/components/sections/content-page";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan situs serta layanan QRION bagi institusi pendidikan.",
  alternates: { canonical: "/syarat-ketentuan" },
  robots: { index: true, follow: true },
};

export default function SyaratKetentuanPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Syarat & Ketentuan"
      description="Ketentuan yang berlaku ketika Anda menggunakan situs dan layanan QRION."
      breadcrumb={[
        { label: "Beranda", href: "/" },
        { label: "Syarat & Ketentuan" },
      ]}
      note="Dokumen ini masih berupa kerangka dan BELUM ditinjau oleh tim hukum. Ganti isi halaman ini dengan syarat & ketentuan resmi QRION sebelum situs dipublikasikan."
      blocks={[
        {
          title: "Penggunaan situs",
          paragraphs: [
            "Informasi pada situs ini disediakan untuk keperluan pengenalan produk. Isi situs dapat diperbarui sewaktu-waktu, termasuk penyesuaian fitur dan modul QRION.",
          ],
        },
        {
          title: "Layanan QRION",
          bullets: [
            "Cakupan layanan, biaya, dan tingkat layanan diatur dalam perjanjian terpisah dengan setiap institusi",
            "Kewajiban sekolah sebagai pengguna layanan akan dijelaskan pada dokumen perjanjian",
            "Ketentuan mengenai ketersediaan layanan dan pemeliharaan sistem akan dicantumkan pada versi final",
          ],
        },
        {
          title: "Kekayaan intelektual",
          paragraphs: [
            "Nama, logo, dan materi QRION tidak dapat digunakan tanpa izin tertulis. Ketentuan lengkap akan dituangkan pada versi final dokumen ini.",
          ],
        },
        {
          title: "Pertanyaan",
          paragraphs: [
            "Pertanyaan mengenai ketentuan ini dapat disampaikan melalui halaman Kontak.",
          ],
        },
      ]}
    />
  );
}
