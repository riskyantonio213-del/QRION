import type { Metadata } from "next";

import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/admin/session";

export const metadata: Metadata = {
  title: "Panel Admin QRION",
  robots: { index: false, follow: false },
};

/**
 * Guard seluruh route /admin — batal login → redirect /masuk.
 * Tidak memakai middleware/proxy: cukup di sini + verifikasi di
 * server action & endpoint upload.
 */
export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const username = await requireAdmin();

  return <AdminShell username={username}>{children}</AdminShell>;
}
