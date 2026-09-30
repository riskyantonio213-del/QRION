"use client";

import {
  House,
  Bell,
  Clock,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type MobileTab = "home" | "notifikasi" | "riwayat" | "setting";

const tabs: { id: MobileTab; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: House },
  { id: "notifikasi", label: "Notifikasi", icon: Bell },
  { id: "riwayat", label: "Riwayat", icon: Clock },
  { id: "setting", label: "Setting", icon: Settings },
];

interface MobileTabBarProps {
  active?: MobileTab;
  onSelect?: (tab: MobileTab) => void;
}

export function MobileTabBar({
  active = "home",
  onSelect,
}: MobileTabBarProps) {
  return (
    <nav className="relative z-30 shrink-0 border-t border-slate-100 bg-white">
      <div className="grid grid-cols-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelect?.(tab.id)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-semibold transition",
                isActive ? "text-[#008A83]" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-14 items-center justify-center rounded-full transition",
                  isActive && "bg-[#E8F8F5]"
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2 pt-1">
        <div className="h-1 w-32 rounded-full bg-slate-900/70" />
      </div>
    </nav>
  );
}