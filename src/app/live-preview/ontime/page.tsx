import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { OntimeApp } from "./view";

export const metadata = {
  title: "Qrion OnTime | QRION Live Preview",
  description: "Dashboard Qrion OnTime — presensi digital.",
};

export default function OnTimePage() {
  return (
    <LivePreviewShell slug="ontime">
      <OntimeApp />
    </LivePreviewShell>
  );
}
