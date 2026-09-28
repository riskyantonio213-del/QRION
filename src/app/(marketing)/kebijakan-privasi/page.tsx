import type { Metadata } from "next";

import { ContentPage } from "@/components/sections/content-page";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi QRION mengenai pengumpulan, penggunaan, dan perlindungan data institusi pendidikan serta pengguna layanan QRION.",
  alternates: { canonical: "/kebijakan-privasi" },
  robots: { index: true, follow: true },
};

export default function KebijakanPrivasiPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Kebijakan Privasi"
      description="Dokumen ini menjelaskan bagaimana QRION menangani data yang diberikan melalui situs dan layanan QRION."
      breadcrumb={[
        { label: "Beranda", href: "/" },
        { label: "Kebijakan Privasi" },
      ]}
      note="Dokumen ini masih berupa kerangka dan BELUM ditinjau oleh tim hukum. Ganti isi halaman ini dengan kebijakan privasi resmi QRION sebelum situs dipublikasikan."
      blocks={[
        {
          title: "Data yang dikumpulkan melalui situs ini",
          paragraphs: [
            "Formulir kontak dan permintaan demo mengumpulkan data yang Anda isi sendiri: nama, institusi, jabatan, email, nomor WhatsApp, perkiraan jumlah siswa, produk yang diminati, dan pesan.",
          ],
        },
        {
          title: "Penggunaan data",
          bullets: [
            "Menindaklanjuti permintaan informasi, demo, atau kerja sama yang Anda kirim",
            "Menghubungi Anda kembali melalui email atau WhatsApp yang Anda cantumkan",
            "Menyusun catatan internal mengenai kebutuhan institusi Anda",
          ],
        },
        {
          title: "Data pengguna layanan QRION",
          paragraphs: [
            "Pengelolaan data operasional sekolah pada modul QRION diatur melalui perjanjian tersendiri dengan masing-masing institusi, termasuk hak akses, masa penyimpanan, dan kewajiban masing-masing pihak.",
          ],
        },
        {
          title: "Hak dan pertanyaan",
          paragraphs: [
            "Permintaan terkait data dapat disampaikan melalui halaman Kontak. Rincian hak pengguna akan dicantumkan pada versi final dokumen ini.",
          ],
        },
      ]}
    />
  );
}
