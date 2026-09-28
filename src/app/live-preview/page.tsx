import type { Metadata } from "next";

import { LivePreviewExperience } from "@/components/live-preview/live-preview-experience";

export const metadata: Metadata = {
  title: "QRION Live Experience",
  description:
    "Jelajahi ekosistem QRION langsung dari peramban: modul pembayaran, kartu siswa, presensi, jurnal pembelajaran, dan penerimaan murid baru dalam satu pengalaman demo.",
  alternates: { canonical: "/live-preview" },
  openGraph: {
    title: "QRION Live Experience",
    description:
      "Coba langsung ekosistem QRION dan lihat bagaimana satu sistem menangani operasional sekolah.",
    url: "/live-preview",
  },
};

export default function LivePreviewPage() {
  return <LivePreviewExperience />;
}
