"use client";

import { useState } from "react";
import { OntimeSidebar, type OntimeTab } from "./sidebar";
import { OntimeNavbar } from "./navbar";
import { OntimeDashboard } from "./dashboard";
import {
  SiswaView,
  GuruView,
  MapelView,
  KelasView,
  RuanganView,
  PengajarView,
  LaporanMasukView,
  LaporanMapelView,
  LaporanMengajarView,
  LaporanCustomView,
  JadwalView,
  KoreksiView,
  PengaturanView,
  GantiPasswordView,
} from "./views";

export function OntimeApp() {
  const [active, setActive] = useState<OntimeTab>("dashboard");

  return (
    <div className="flex h-full w-full overflow-hidden bg-[#F8FAFC]">
      <OntimeSidebar active={active} onSelect={setActive} />

      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        <OntimeNavbar />

        <main key={active} className="flex-1 overflow-y-auto p-6">
          {active === "dashboard" && <OntimeDashboard />}

          {/* Master Data */}
          {active === "siswa" && <SiswaView />}
          {active === "guru" && <GuruView />}
          {active === "mata-pelajaran" && <MapelView />}
          {active === "kelas" && <KelasView />}
          {active === "ruangan" && <RuanganView />}
          {active === "pengajar" && <PengajarView />}

          {/* Laporan Presensi */}
          {active === "laporan-masuk-pulang" && <LaporanMasukView />}
          {active === "laporan-mapel" && <LaporanMapelView />}
          {active === "laporan-mengajar" && <LaporanMengajarView />}
          {active === "laporan-custom" && <LaporanCustomView />}

          {/* Menu Lainnya */}
          {active === "jadwal" && <JadwalView />}
          {active === "koreksi-absen" && <KoreksiView />}
          {active === "pengaturan" && <PengaturanView />}
          {active === "ganti-password" && <GantiPasswordView />}
        </main>
      </div>
    </div>
  );
}
