"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { SheetClose } from "@/components/ui/sheet";
import type { NavItem } from "@/config/site";
import { cn } from "@/lib/utils";

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = isActivePath(pathname, item.href);

  const hasChildren = !!item.children?.length;
  // Dropdown terbuka otomatis bila pengunjung berada di salah satu halaman anaknya.
  const [open, setOpen] = useState(
    () => item.children?.some((child) => isActivePath(pathname, child.href)) ?? false,
  );

  if (item.children && item.children.length > 0) {
    return (
      <li>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={cn(
            "flex min-h-11 w-full items-center justify-between gap-2 rounded-lg px-3 text-[15px] font-medium transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            active ? "text-brand" : "text-foreground",
          )}
        >
          {item.title}
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>
        {open ? (
          <ul className="mb-1 ml-3 mt-0.5 grid gap-0.5 border-l border-border pl-3">
            {item.children.map((child) => {
              const childActive = isActivePath(pathname, child.href);
              return (
                <li key={child.href}>
                  <SheetClose asChild>
                    <Link
                      href={child.href}
                      aria-current={childActive ? "page" : undefined}
                      className={cn(
                        "flex min-h-10 items-center rounded-lg px-3 text-sm transition-colors hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                        childActive
                          ? "font-semibold text-brand"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {child.title}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        ) : null}
      </li>
    );
  }

  return (
    <li>
      <SheetClose asChild>
        <Link
          href={item.href}
          className={cn(
            "flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium transition-colors hover:bg-soft",
            active ? "text-brand" : "text-foreground",
          )}
          aria-current={active ? "page" : undefined}
        >
          {item.title}
        </Link>
      </SheetClose>
    </li>
  );
}
