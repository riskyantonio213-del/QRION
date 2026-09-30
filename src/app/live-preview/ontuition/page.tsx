import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { OnTuitionApp } from "./view";

export const metadata = {
  title: "Qrion OnTuition | QRION Live Preview",
  description: "Dashboard Qrion OnTuition — manajemen keuangan sekolah.",
};

export default function OnTuitionPage() {
  return (
    <LivePreviewShell slug="ontuition">
      <OnTuitionApp />
    </LivePreviewShell>
  );
}
