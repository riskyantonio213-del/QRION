"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import { defaults, type Defaults } from "@/lib/admin/defaults";
import { deepMerge } from "@/lib/admin/merge";

/**
 * Konten homepage ter-merge: default (src/data/*) + override admin
 * (.qrion-admin/content.json). Komponen di luar provider tetap aman —
 * context default-nya adalah data default.
 */
const ContentContext = createContext<Defaults>(defaults);

export function ContentProvider({
  overrides,
  children,
}: {
  overrides: unknown;
  children: ReactNode;
}) {
  const value = useMemo<Defaults>(
    () =>
      overrides === null || overrides === undefined
        ? defaults
        : deepMerge(defaults, overrides),
    [overrides],
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent(): Defaults {
  return useContext(ContentContext);
}
