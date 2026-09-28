import type { Metadata } from "next";

import { ContentPage } from "@/components/sections/content-page";

export const metadata: Metadata = {
  title: "Insight",
  description:
    "Catatan dan panduan QRION mengenai digitalisasi sekolah, pengelolaan operasional pendidikan, dan penerapan teknologi di institusi pendidikan.",
  alternates: { canonical: "/insight" },
};

export default function InsightPage() {
  return (
    <ContentPage
      eyebrow="Insight"
      title="Catatan tentang Transformasi Digital Pendidikan"
      description="Tempat QRION membagikan panduan praktis dan catatan lapangan mengenai pengelolaan operasional sekolah yang lebih terstruktur."
      breadcrumb={[{ label: "Beranda", href: "/" }, { label: "Insight" }]}
      note="Belum ada artikel yang dipublikasikan. Halaman ini disiapkan sebagai struktur awal—artikel akan ditambahkan setelah materi editorial QRION siap, bukan sebagai contoh fiktif."
      blocks={[
        {
          title: "Tema yang akan dibahas",
          paragraphs: [
            "Konten Insight akan berfokus pada hal-hal yang dapat langsung diterapkan sekolah, bukan sekadar berita industri.",
          ],
          bullets: [
            "Merapikan pencatatan pembayaran sekolah tanpa proses yang rumit",
            "Menyusun alur presensi digital yang mudah diterima guru dan siswa",
            "Memanfaatkan data kehadiran dan aktivitas untuk pengambilan keputusan sekolah",
            "Menyesuaikan penerapan teknologi dengan kebijakan masing-masing institusi",
          ],
        },
        {
          title: "Untuk siapa konten ini",
          paragraphs: [
            "Materi disusun untuk manajemen sekolah, administrator, dan guru yang ingin memahami langkah praktis digitalisasi tanpa harus menjadi ahli teknologi.",
          ],
        },
      ]}
    />
  );
}
