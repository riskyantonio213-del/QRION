"use client";

import { useState } from "react";
import { OnTuitionSidebar, navItems as ontuitionNavItems } from "./sidebar";
import { OnTuitionNavbar } from "./navbar";
import { MobileTabBar } from "@/components/live-preview/mobile-tab-bar";
import { OnTuitionDashboard } from "./dashboard";
import { 
  OnTuitionManajemenBiaya, 
  OnTuitionPembayaran, 
  OnTuitionPenarikan, 
  OnTuitionJurnal, 
  OnTuitionBroadcast, 
  OnTuitionPengaturan 
} from "./views";

export type OnTuitionTab =
  | "dashboard"
  | "manajemen-biaya"
  | "pembayaran"
  | "penarikan"
  | "jurnal"
  | "broadcast"
  | "pengaturan";

export function OnTuitionApp() {
  const [active, setActive] = useState<OnTuitionTab>("dashboard");

  return (
    <div className="flex h-full w-full overflow-hidden bg-[#F8FAFC]">
      {/* 1. Sidebar Kiri */}
      <OnTuitionSidebar active={active} onSelect={setActive} />

      {/* 2. Kolom Kanan (Navbar + Content Area) */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        <OnTuitionNavbar />
        <MobileTabBar
          items={ontuitionNavItems}
          active={active}
          onSelect={setActive}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {active === "dashboard" && <OnTuitionDashboard />}
          {active === "manajemen-biaya" && <OnTuitionManajemenBiaya />}
          {active === "pembayaran" && <OnTuitionPembayaran />}
          {active === "penarikan" && <OnTuitionPenarikan />}
          {active === "jurnal" && <OnTuitionJurnal />}
          {active === "broadcast" && <OnTuitionBroadcast />}
          {active === "pengaturan" && <OnTuitionPengaturan />}
        </main>
      </div>
    </div>
  );
}