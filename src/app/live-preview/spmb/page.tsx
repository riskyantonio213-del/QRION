import { LivePreviewShell } from "@/components/live-preview/live-preview-shell";
import { SpmbSidebar } from "./sidebar";
import { SpmbDashboard } from "./dashboard";

export const metadata = {
  title: "Qrion SPMB | QRION Live Preview",
  description: "Dashboard Qrion SPMB — penerimaan murid baru digital.",
};

export default function SpmbPage() {
  return (
    <LivePreviewShell slug="spmb">
      <SpmbSidebar />
      <SpmbDashboard />
    </LivePreviewShell>
  );
}
