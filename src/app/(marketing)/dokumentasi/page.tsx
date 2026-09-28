import type { Metadata } from "next";

import { ContentPage } from "@/components/sections/content-page";

export const metadata: Metadata = {
  title: "Dokumentasi",
  description:
    "Dokumentasi teknis dan panduan integrasi QRION untuk tim teknologi sekolah yang menghubungkan sistem internal dengan ekosistem QRION.",
  alternates: { canonical: "/dokumentasi" },
};

export default function DokumentasiPage() {
  return (
    <ContentPage
      eyebrow="Dokumentasi"
      title="Dokumentasi & Integrasi"
      description="Ruang untuk panduan teknis, referensi integrasi, dan catatan rilis ekosistem QRION."
      breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Dokumentasi" }]}
      note="Dokumentasi teknis dipublikasikan setelah API dan proses integrasi QRION siap digunakan secara umum. Saat ini belum ada referensi API yang dapat dibagikan."
      blocks={[
        {
          title: "Rencana isi dokumentasi",
          bullets: [
            "Referensi fungsi utama pada setiap modul QRION",
            "Panduan integrasi dengan sistem internal sekolah",
            "Catatan perubahan (changelog) untuk setiap pembaruan",
            "Praktik yang disarankan saat menyiapkan data sekolah",
          ],
        },
        {
          title: "Untuk tim teknis sekolah",
          paragraphs: [
            "Jika institusi Anda memiliki tim teknologi internal dan ingin membahas kebutuhan integrasi lebih awal, sampaikan konteksnya melalui halaman Kontak agar dapat dibahas bersama tim QRION.",
          ],
        },
      ]}
    />
  );
}
