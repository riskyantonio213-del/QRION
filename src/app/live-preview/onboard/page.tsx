import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { OnboardApp } from "@/components/dashboard/dashboard-preview";

export const metadata = {
  title: "ONBOARD | QRION Live Preview",
  description:
    "Dashboard ONBOARD — keuangan, kehadiran, dan aktivitas sekolah dalam satu pandangan.",
};

export default function OnboardPage() {
  return (
    <LivePreviewShell slug="onboard">
      <OnboardApp />
    </LivePreviewShell>
  );
}
