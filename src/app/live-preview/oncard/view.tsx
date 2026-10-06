"use client";

import { useState } from "react";
import {
  OncardSidebar,
  oncardMobileNavItems,
  type OncardTab,
} from "./sidebar";
import { OncardNavbar } from "./navbar";
import { MobileTabBar } from "@/components/live-preview/mobile-tab-bar";
import { OncardDashboard } from "./dashboard";

// Import komponen view sesuai struktur sidebar baru
import {
  OncardTransfer,
  OncardGantiPassword,
  OncardWithdrawInstitusi,
  OncardWithdrawMerchant,
  OncardAkunHost,
  OncardAkunMerchant,
  OncardAkunUser,
  OncardJurnalInstitusi,
  OncardJurnalPendapatan,
  OncardJurnalHost,
  OncardJurnalMerchant,
  OncardJurnalUser,
} from "./views";

// Re-export type OncardTab langsung dari sidebar agar single source of truth
export type { OncardTab };

export function OncardApp() {
  const [active, setActive] = useState<OncardTab>("dashboard");

  return (
    /* Gunakan h-screen w-screen agar tidak terjadi double scrollbar pada layout */
    <div className="flex h-full w-full overflow-hidden bg-[#F8FAFC]">
      {/* Sidebar Kiri */}
      <OncardSidebar active={active} onSelect={setActive} />

      {/* Area Konten Kanan */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Pass state 'active' ke 'activeTab' navbar */}
        <OncardNavbar activeTab={active} />
        <MobileTabBar
          items={oncardMobileNavItems}
          active={active}
          onSelect={setActive}
        />

        {/* Main View Container */}
        <main className="flex-1 overflow-y-auto p-6">
          {active === "dashboard" && <OncardDashboard />}
          {active === "transfer" && <OncardTransfer />}
          {active === "ganti-password" && <OncardGantiPassword />}
          {active === "withdraw-institusi" && <OncardWithdrawInstitusi />}
          {active === "withdraw-merchant" && <OncardWithdrawMerchant />}
          {active === "akun-host" && <OncardAkunHost />}
          {active === "akun-merchant" && <OncardAkunMerchant />}
          {active === "akun-user" && <OncardAkunUser />}
          {active === "jurnal-institusi" && <OncardJurnalInstitusi />}
          {active === "jurnal-pendapatan" && <OncardJurnalPendapatan />}
          {active === "jurnal-host" && <OncardJurnalHost />}
          {active === "jurnal-merchant" && <OncardJurnalMerchant />}
          {active === "jurnal-user" && <OncardJurnalUser />}
        </main>
      </div>
    </div>
  );
}