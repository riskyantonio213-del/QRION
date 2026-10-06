"use client";

import { useState } from "react";
import { JurnalSidebar, navItems as jurnalNavItems, type JurnalTab } from "./sidebar";
import { JurnalNavbar } from "./navbar";
import { MobileTabBar } from "@/components/live-preview/mobile-tab-bar";
import { JurnalDashboard } from "./dashboard";
import {
  ManajemenKas,
  FundraisingView,
  JurnalView,
  JurnalPengaturan,
} from "./views";

export function JurnalApp() {
  const [active, setActive] = useState<JurnalTab>("dashboard");

  const handleLogout = () => {
    // Tambahkan logika logout di sini jika diperlukan
    console.log("User logged out");
  };

  return (
    <div className="flex h-full w-full overflow-hidden bg-[#F8FAFC]">
      {/* Sidebar */}
      <JurnalSidebar
        active={active}
        onSelect={setActive}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        <JurnalNavbar />
        <MobileTabBar
          items={jurnalNavItems}
          active={active}
          onSelect={setActive}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {active === "dashboard" && <JurnalDashboard />}
          {active === "manajemen-kas" && <ManajemenKas />}
          {active === "fundraising" && <FundraisingView />}
          {active === "jurnal" && <JurnalView />}
          {active === "pengaturan" && <JurnalPengaturan />}
        </main>
      </div>
    </div>
  );
}