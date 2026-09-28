import type { Metadata } from "next";

import { ContentPage } from "@/components/sections/content-page";

export const metadata: Metadata = {
  title: "Karier",
  description:
    "Informasi peluang karier di QRION untuk siapa saja yang ingin berkontribusi membangun teknologi pendidikan di Indonesia.",
  alternates: { canonical: "/karier" },
};

export default function KarierPage() {
  return (
    <ContentPage
      eyebrow="Karier"
      title="Berkontribusi untuk Pendidikan Indonesia"
      description="QRION membangun produk yang digunakan institusi pendidikan dalam menjalankan proses penting setiap hari. Kami mencari orang yang peduli pada dampak tersebut."
      breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Karier" }]}
      note="Belum ada posisi yang dibuka saat ini. Kami tidak menampilkan lowongan fiktif — halaman ini akan diperbarui ketika rekrutmen dibuka."
      blocks={[
        {
          title: "Bidang yang biasa kami kembangkan",
          bullets: [
            "Rekayasa perangkat lunak (web, backend, dan integrasi sistem)",
            "Implementasi dan pendampingan sekolah",
            "Desain produk dan pengalaman pengguna",
            "Dukungan operasional dan layanan pengguna",
          ],
        },
        {
          title: "Cara menyampaikan minat",
          paragraphs: [
            "Jika Anda ingin berdiskusi lebih dulu, kirimkan perkenalan singkat melalui halaman Kontak dengan memilih topik yang paling relevan. Kami akan menyimpan informasi tersebut untuk dihubungi ketika posisi yang sesuai tersedia.",
          ],
        },
      ]}
    />
  );
}
