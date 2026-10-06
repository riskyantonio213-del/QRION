"use client";

import React, { useState } from "react";
import {
  MobileDashboard,
  MobileTabBar,
  BayarSheet,
  type MobileTab,
  type SubView,
} from "./dashboard";
import {
  NotifikasiView,
  RiwayatView,
  SettingView,
  DonasiView,
  BeritaView,
  TransferUangSakuView,
  SiswaDetailView,
  TopUpView,
  TopUpSheet,
  EditProfilView,
  UbahPinView,
  GantiPasswordView,
  PusatBantuanView,
  KebijakanPrivasiView,
  TentangAplikasiView,
  type TopUpChannel,
} from "./views";

export function QrionMobileApp() {
  const [activeTab, setActiveTab] = useState<MobileTab>("home");
  const [subView, setSubView] = useState<SubView>(null);
  const [subViewHistory, setSubViewHistory] = useState<SubView[]>([]);
  const [bayarOpen, setBayarOpen] = useState(false);
  const [topupChannel, setTopupChannel] = useState<TopUpChannel | null>(null);

  const openSubView = (view: SubView) => {
    setSubViewHistory((prev) => [...prev, subView]);
    setSubView(view);
  };

  const goBack = () => {
    if (subViewHistory.length === 0) {
      setSubView(null);
      return;
    }
    setSubView(subViewHistory[subViewHistory.length - 1]);
    setSubViewHistory((prev) => prev.slice(0, -1));
  };

  const handleTabSelect = (tab: MobileTab) => {
    setActiveTab(tab);
    setSubView(null);
    setSubViewHistory([]);
    setBayarOpen(false);
    setTopupChannel(null);
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#F1F7F4] to-[#E6EFEA] p-4 font-sans">
      <div className="relative flex h-[780px] lg:h-full lg:max-h-[780px] w-full max-w-[384px] flex-col overflow-hidden rounded-[44px] border-[10px] border-[#0F172A] bg-[#F8FAFC] shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
        
        {/* Region Konten */}
        <div className="relative flex-1 min-h-0 overflow-hidden">
          <main
            key={subView ? subView : activeTab}
            className="h-full overflow-y-auto px-4 py-4"
          >
            {/* Sub-View Routing */}
            {subView === "siswa-detail" && (
              <SiswaDetailView
                onBack={goBack}
                onOpenTopUp={() => openSubView("transfer-uang-saku")}
              />
            )}
            {subView === "transfer-uang-saku" && (
              <TransferUangSakuView onBack={goBack} />
            )}
            {subView === "topup" && (
              <TopUpView
                onBack={goBack}
                onSelectChannel={(channel) => setTopupChannel(channel)}
              />
            )}
            {subView === "donasi" && (
              <DonasiView onBack={goBack} />
            )}
            {subView === "berita" && (
              <BeritaView onBack={goBack} />
            )}
            {subView === "edit-profil" && (
              <EditProfilView onBack={goBack} />
            )}
            {subView === "ubah-pin" && (
              <UbahPinView onBack={goBack} />
            )}
            {subView === "ganti-password" && (
              <GantiPasswordView onBack={goBack} />
            )}
            {subView === "pusat-bantuan" && (
              <PusatBantuanView onBack={goBack} />
            )}
            {subView === "kebijakan-privasi" && (
              <KebijakanPrivasiView onBack={goBack} />
            )}
            {subView === "tentang-aplikasi" && (
              <TentangAplikasiView onBack={goBack} />
            )}

            {/* Bottom Tab Main Views */}
            {!subView && activeTab === "home" && (
              <MobileDashboard
                onOpenView={(view) => openSubView(view)}
                onSelectTab={handleTabSelect}
                onBayar={() => setBayarOpen(true)}
              />
            )}
            {!subView && activeTab === "notifikasi" && <NotifikasiView />}
            {!subView && activeTab === "riwayat" && <RiwayatView />}
            {!subView && activeTab === "setting" && (
              <SettingView onOpen={(view) => openSubView(view)} />
            )}
          </main>
        </div>

        {/* Navigation Bottom Tab */}
        <MobileTabBar active={activeTab} onSelect={handleTabSelect} />

        {/* Modal Sheet Bayar */}
        {bayarOpen && <BayarSheet onClose={() => setBayarOpen(false)} />}

        {/* Modal Sheet Top Up (QRIS Payment dll) */}
        {topupChannel && (
          <TopUpSheet
            channel={topupChannel}
            onClose={() => setTopupChannel(null)}
          />
        )}
      </div>
    </div>
  );
}

export default QrionMobileApp;