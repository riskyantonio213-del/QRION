import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { JurnalApp } from "./view";

export const metadata = {
  title: "Qrion Jurnal | QRION Live Preview",
  description: "Dashboard Qrion Jurnal — jurnal pembelajaran digital.",
};

export default function JurnalPage() {
  return (
    <LivePreviewShell slug="jurnal">
      <JurnalApp />
    </LivePreviewShell>
  );
}
