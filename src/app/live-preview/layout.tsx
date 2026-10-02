"use client";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { LivePreviewSidebar } from "@/components/live-preview/live-preview-sidebar";
import { LeadModal } from "@/components/live-preview/lead-modal";
import { hasStoredLead, subscribeToLeadChanges } from "@/lib/lead-storage";

/**
 * Shared layout for the Live Preview section.
 * Sidebar only on service preview pages (hidden on /live-preview overview).
 * Navbar on all pages.
 *
 * Product pages (/live-preview/[produk]) are gated: first-time visitors must
 * submit their name, WhatsApp and school once. The answer is remembered in
 * localStorage, so neither later visits to other product pages nor a return
 * to the homepage ever shows the gate again.
 */
export default function LivePreviewLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/live-preview";
  const isProductPreview = showSidebar;
  const product = isProductPreview
    ? pathname.slice("/live-preview/".length)
    : undefined;

  // Server snapshot reports "already stored" so the gate never appears in the
  // server HTML; the client re-checks right after hydration (standard
  // useSyncExternalStore behaviour — no effect, no flash for returning
  // visitors, modal appears for first-time visitors immediately after load).
  const leadStored = useSyncExternalStore(
    subscribeToLeadChanges,
    hasStoredLead,
    () => true,
  );
  const [justSubmitted, setJustSubmitted] = useState(false);

  const showGate = isProductPreview && !leadStored && !justSubmitted;

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {showSidebar && <LivePreviewSidebar />}
        <main
          id="konten-utama"
          className="min-w-0 flex-1 overflow-y-auto bg-soft"
        >
          {children}
        </main>
      </div>
      {showGate ? (
        <LeadModal
          open
          product={product}
          onComplete={() => setJustSubmitted(true)}
        />
      ) : null}
    </div>
  );
}
