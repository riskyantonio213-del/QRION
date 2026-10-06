"use client";

import { cn } from "@/lib/utils";

export type MobileTabItem<T extends string> = {
  id: T;
  label: string;
  icon?: React.ElementType;
};

/**
 * Tab bar horizontal untuk navigasi antar view di mobile (pengganti sidebar
 * internal produk yang hanya tampil di lg ke atas). Disisipkan antara navbar
 * internal dan area konten.
 */
export function MobileTabBar<T extends string>({
  items,
  active,
  onSelect,
}: {
  items: ReadonlyArray<MobileTabItem<T>>;
  active: T;
  onSelect: (tab: T) => void;
}) {
  return (
    <nav
      aria-label="Navigasi tab"
      className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-slate-100 bg-white px-3 py-2.5 lg:hidden [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
    >
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition",
              isActive
                ? "bg-[#3DBA86] text-white shadow-sm"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100",
            )}
          >
            {Icon ? <Icon aria-hidden="true" className="size-3.5" /> : null}
            {label}
          </button>
        );
      })}
    </nav>
  );
}
