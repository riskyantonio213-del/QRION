import type { Metadata } from "next";

import { ContentPage } from "@/components/sections/content-page";
import { contactChannels } from "@/config/site";

export const metadata: Metadata = {
  title: "Pusat Bantuan",
  description:
    "Pusat bantuan QRION untuk sekolah yang membutuhkan pendampingan penggunaan sistem, pelaporan kendala, dan pertanyaan operasional.",
  alternates: { canonical: "/pusat-bantuan" },
};

export default function PusatBantuanPage() {
  return (
    <ContentPage
      eyebrow="Dukungan"
      title="Pusat Bantuan QRION"
      description="Tempat sekolah mencari panduan penggunaan dan jalur bantuan ketika membutuhkan pendampingan."
      breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Pusat Bantuan" }]}
      note={`Pusat bantuan berbasis artikel belum tersedia. Sementara ini, pertanyaan dapat disampaikan melalui halaman Kontak (${contactChannels.email}) dan akan ditindaklanjuti oleh tim QRION.`}
      blocks={[
        {
          title: "Bantuan yang akan tersedia di sini",
          bullets: [
            "Panduan langkah demi langkah untuk setiap modul QRION",
            "Penanganan kendala umum saat penggunaan sistem",
            "Prosedur penambahan pengguna dan pengaturan hak akses",
            "Pertanyaan operasional harian admin sekolah",
          ],
        },
        {
          title: "Jam layanan",
          paragraphs: [
            `Tim QRION tersedia pada ${contactChannels.officeHours}. Permintaan yang masuk di luar jam tersebut akan ditindaklanjuti pada hari kerja berikutnya.`,
          ],
        },
      ]}
    />
  );
}
