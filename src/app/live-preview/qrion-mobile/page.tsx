import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { QrionMobileApp } from "./view";

export const metadata = {
  title: "QRION Mobile | QRION Live Preview",
  description:
    "Mockup mobile aplikasi QRION — layanan sekolah dalam genggaman.",
};

export default function QrionMobilePage() {
  return (
    <LivePreviewShell slug="qrion-mobile" showBrowserBar={false}>
      <QrionMobileApp />
    </LivePreviewShell>
  );
}
