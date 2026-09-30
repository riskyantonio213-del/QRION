import type { Metadata } from "next";

import { LivePreviewOverview } from "@/components/live-preview/live-preview-overview";

export const metadata: Metadata = {
  title: "QRION Live Preview",
  description:
    "Jelajahi semua modul ekosistem QRION: pembayaran, kartu siswa, presensi, jurnal, dan penerimaan murid baru.",
  alternates: { canonical: "/live-preview" },
  openGraph: {
    title: "QRION Live Preview",
    description: "Preview semua dashboard layanan QRION dalam satu halaman.",
    url: "/live-preview",
  },
};

export default function LivePreviewPage() {
  return <LivePreviewOverview />;
}
