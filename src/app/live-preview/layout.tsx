"use client";

import { Navbar } from "@/components/layout/navbar";
import { LivePreviewSidebar } from "@/components/live-preview/live-preview-sidebar";
import { usePathname } from "next/navigation";

/**
 * Shared layout for the Live Preview section.
 * Sidebar only on service preview pages (hidden on /live-preview overview).
 * Navbar on all pages.
 */
export default function LivePreviewLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/live-preview";

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {showSidebar && <LivePreviewSidebar />}
        <main id="konten-utama" className="min-w-0 flex-1 overflow-y-auto bg-soft">
          {children}
        </main>
      </div>
    </div>
  );
}
