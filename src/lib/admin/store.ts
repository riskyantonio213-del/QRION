/**
 * Penyimpanan panel admin via Supabase (server-only).
 *
 * - `admin_content`  — satu baris jsonb, override konten homepage
 * - `admin_accounts` — satu baris, username + hash scrypt
 * - sesi             — cookie HMAC stateless (QRION_ADMIN_SESSION_SECRET,
 *                      fallback SUPABASE_SECRET_KEY)
 *
 * Baca yang gagal jatuh ke default (homepage tetap tampil);
 * tulis yang gagal melempar SupabaseAdminError → ditangkap server action.
 */
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

import {
  ROW_ID,
  SupabaseAdminError,
  adminRest,
  supabaseAdminConfig,
} from "@/lib/admin/supabase";
import { serializeDefaults } from "@/lib/admin/defaults";
import { deepMerge } from "@/lib/admin/merge";

export { SupabaseAdminError };

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";

export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

/* ---------------------------------------------------------------
 * Konten (override per modul data)
 * ------------------------------------------------------------- */

export async function readContentOverrides(): Promise<Record<string, unknown>> {
  try {
    const response = await adminRest(
      `admin_content?select=data&id=eq.${ROW_ID}`,
    );
    if (!response.ok) {
      // Tabel belum dibuat / error jaringan → pakai default agar situs tetap tampil.
      console.error(
        `[QRION] supabase readContentOverrides gagal (HTTP ${response.status})`,
      );
      return {};
    }
    const rows = (await response.json()) as { data?: unknown }[];
    const data = rows[0]?.data;
    if (data && typeof data === "object" && !Array.isArray(data)) {
      const existing = data as Record<string, unknown>;
      // Lengkapi namespace yang belum pernah disimpan, supaya SEMUA konten
      // yang tampil ikut tercatat di Supabase. Override lama tetap menang.
      const defaultsSnapshot = serializeDefaults();
      const missing = Object.keys(defaultsSnapshot).filter(
        (key) => !(key in existing),
      );
      if (missing.length > 0) {
        const merged = deepMerge(defaultsSnapshot, existing);
        try {
          await writeContentOverrides(merged);
          console.info(
            `[QRION] admin_content dilengkapi: +${missing.join(", ")}`,
          );
          return merged;
        } catch (error) {
          console.error(
            "[QRION] gagal melengkapi admin_content:",
            error instanceof Error ? error.message : "unknown",
          );
        }
      }
      return existing;
    }
    if (rows.length > 0) {
      // baris sudah ada tapi kosong → biarkan (default tetap tampil via merge)
      return {};
    }

    // Belum ada baris sama sekali → seed seluruh konten yang sedang tampil
    // ke Supabase, supaya admin_content jadi sumber kebenaran utama.
    const seeded = serializeDefaults();
    const seedResponse = await adminRest(`admin_content?on_conflict=id`, {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ id: ROW_ID, data: seeded }),
    });
    if (seedResponse.ok) {
      console.info("[QRION] admin_content ter-seed dari konten default.");
      return seeded;
    }
    const detail = await seedResponse.text().catch(() => "");
    console.error(
      `[QRION] gagal seed admin_content (HTTP ${seedResponse.status}): ${detail.slice(0, 200)}`,
    );
    return {};
  } catch (error) {
    console.error(
      "[QRION] supabase readContentOverrides error:",
      error instanceof Error ? error.message : "unknown",
    );
    return {};
  }
}

export async function writeContentOverrides(
  data: Record<string, unknown>,
): Promise<void> {
  const response = await adminRest(`admin_content?on_conflict=id`, {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({ id: ROW_ID, data }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new SupabaseAdminError(
      `Gagal menyimpan konten ke Supabase (HTTP ${response.status}): ${detail.slice(0, 200)}`,
    );
  }
}

/* ---------------------------------------------------------------
 * Akun admin (username + hash scrypt)
 * ------------------------------------------------------------- */

export type AdminAccount = {
  username: string;
  salt: string;
  passwordHash: string;
};

type AccountRow = {
  username: string;
  password_hash: string;
  salt: string;
};

function hashPassword(password: string, salt: string): string {
  return scryptSync(password, salt, 64).toString("hex");
}

async function fetchAccount(): Promise<AdminAccount | null> {
  const response = await adminRest(
    `admin_accounts?select=username,password_hash,salt&id=eq.${ROW_ID}`,
  );
  if (!response.ok) {
    if (response.status === 404) return null; // tabel belum ada → seed di bawah
    const detail = await response.text().catch(() => "");
    throw new SupabaseAdminError(
      `Gagal membaca akun admin (HTTP ${response.status}): ${detail.slice(0, 200)}`,
    );
  }
  const rows = (await response.json()) as AccountRow[];
  const row = rows[0];
  if (!row) return null;
  return {
    username: row.username,
    salt: row.salt,
    passwordHash: row.password_hash,
  };
}

async function seedAccount(): Promise<AdminAccount> {
  const salt = randomBytes(16).toString("hex");
  const account: AdminAccount = {
    username: DEFAULT_USERNAME,
    salt,
    passwordHash: hashPassword(DEFAULT_PASSWORD, salt),
  };
  const response = await adminRest(`admin_accounts?on_conflict=id`, {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      id: ROW_ID,
      username: account.username,
      password_hash: account.passwordHash,
      salt: account.salt,
    }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new SupabaseAdminError(
      `Gagal membuat akun admin default — apakah migration sudah dijalankan? (HTTP ${response.status}): ${detail.slice(0, 200)}`,
    );
  }
  return account;
}

/** Baca akun; bila belum ada, buat default (admin / admin123). */
export async function readAccount(): Promise<AdminAccount> {
  const existing = await fetchAccount();
  if (existing) return existing;
  return seedAccount();
}

export async function verifyCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const account = await readAccount();
  if (username !== account.username) return false;
  try {
    const candidate = Buffer.from(hashPassword(password, account.salt), "hex");
    const stored = Buffer.from(account.passwordHash, "hex");
    if (candidate.length !== stored.length) return false;
    return timingSafeEqual(candidate, stored);
  } catch {
    return false;
  }
}

/** Ganti username — tanpa verifikasi (sesuai permintaan). */
export async function updateUsername(username: string): Promise<void> {
  await readAccount(); // pastikan baris akun sudah ada
  const response = await adminRest(`admin_accounts?id=eq.${ROW_ID}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ username }),
  });
  if (!response.ok) {
    throw new SupabaseAdminError(
      `Gagal mengubah username (HTTP ${response.status}).`,
    );
  }
}

/** Ganti password — tanpa verifikasi password lama (sesuai permintaan). */
export async function updatePassword(password: string): Promise<void> {
  await readAccount();
  const salt = randomBytes(16).toString("hex");
  const response = await adminRest(`admin_accounts?id=eq.${ROW_ID}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ password_hash: hashPassword(password, salt), salt }),
  });
  if (!response.ok) {
    throw new SupabaseAdminError(
      `Gagal mengubah password (HTTP ${response.status}).`,
    );
  }
}

/* ---------------------------------------------------------------
 * Sesi (token HMAC-SHA256: `exp|username.sig`)
 * ------------------------------------------------------------- */

let fallbackSecret: string | null = null;

function sessionSecret(): string {
  const fromEnv =
    process.env.QRION_ADMIN_SESSION_SECRET || process.env.SUPABASE_SECRET_KEY;
  if (fromEnv) return fromEnv;
  // Terakhir: rahasia per-proses (cukup untuk dev; sesi hilang saat restart).
  fallbackSecret ??= randomBytes(32).toString("hex");
  return fallbackSecret;
}

function sign(payload: string): string {
  return createHmac("sha256", sessionSecret()).update(payload).digest("hex");
}

export function createSessionToken(username: string): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${exp}|${username}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string): { username: string } | null {
  const separator = token.lastIndexOf(".");
  if (separator <= 0) return null;
  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  try {
    const expected = Buffer.from(sign(payload), "hex");
    const given = Buffer.from(signature, "hex");
    if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
      return null;
    }
  } catch {
    return null;
  }
  const pipe = payload.indexOf("|");
  if (pipe <= 0) return null;
  const exp = Number(payload.slice(0, pipe));
  const username = payload.slice(pipe + 1);
  if (!Number.isFinite(exp) || Math.floor(Date.now() / 1000) > exp) return null;
  if (!username) return null;
  return { username };
}

/** Info konfigurasi (untuk cek cepat/diagnostik). */
export function adminStorageReady(): boolean {
  return supabaseAdminConfig() !== null;
}
