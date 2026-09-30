import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { OncardApp } from "./view";

export const metadata = {
  title: "Qrion OnCard | QRION Live Preview",
  description: "Dashboard Qrion OnCard — smart school card.",
};

export default function OnCardPage() {
  return (
    <LivePreviewShell slug="oncard">
      <OncardApp />
    </LivePreviewShell>
  );
}
