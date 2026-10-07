"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { deepMerge, setPath } from "@/lib/admin/merge";
import {
  clearSessionCookie,
  getSessionUsername,
  setSessionCookie,
} from "@/lib/admin/session";
import {
  readContentOverrides,
  updatePassword,
  updateUsername,
  verifyCredentials,
  writeContentOverrides,
} from "@/lib/admin/store";

export type LoginState = { error?: string };
export type SaveState = { ok?: boolean; error?: string };
export type AccountState = { ok?: boolean; message?: string; error?: string };

/** Login via form /masuk. Sukses → cookie sesi + redirect. */
export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const nextRaw = String(formData.get("next") ?? "");

  if (!username || !password) {
    return { error: "Isi username dan password terlebih dahulu." };
  }

  let valid = false;
  try {
    valid = await verifyCredentials(username, password);
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Gagal terhubung ke Supabase. Coba lagi.",
    };
  }
  if (!valid) {
    return { error: "Username atau password salah." };
  }

  await setSessionCookie(username);
  const next =
    nextRaw.startsWith("/") && !nextRaw.startsWith("//") ? nextRaw : "/admin";
  redirect(next);
}

/** Keluar dari panel admin. */
export async function logoutAction(): Promise<void> {
  await clearSessionCookie();
  redirect("/masuk");
}

/**
 * Simpan satu section konten ke .qrion-admin/content.json.
 * `path` = dot path root section (mis. "home.hero"), `values` = nilai field
 * sesuai schema. Disimpan via deep-merge agar section lain tidak tersentuh.
 */
export async function saveSectionAction(
  path: string,
  values: Record<string, unknown>,
): Promise<SaveState> {
  const username = await getSessionUsername();
  if (!username) {
    return { error: "Sesi berakhir. Silakan masuk kembali." };
  }
  if (!path || typeof path !== "string" || path.split(".").some((s) => !s)) {
    return { error: "Path konten tidak valid." };
  }
  if (values === null || typeof values !== "object" || Array.isArray(values)) {
    return { error: "Data konten tidak valid." };
  }

  try {
    const content = await readContentOverrides();
    const next = deepMerge(content, setPath({}, path, values));
    await writeContentOverrides(next);
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Gagal menyimpan ke Supabase. Coba lagi.",
    };
  }
  revalidatePath("/", "layout");
  return { ok: true };
}

const USERNAME_RE = /^[A-Za-z0-9._-]{3,32}$/;

/** Ganti username panel admin — tanpa verifikasi. */
export async function changeUsernameAction(
  _prev: AccountState,
  formData: FormData,
): Promise<AccountState> {
  const username = await getSessionUsername();
  if (!username) {
    return { error: "Sesi berakhir. Silakan masuk kembali." };
  }

  const next = String(formData.get("username") ?? "").trim();
  if (!USERNAME_RE.test(next)) {
    return {
      error: "Username 3–32 karakter: huruf, angka, titik, strip, underscore.",
    };
  }

  try {
    await updateUsername(next);
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Gagal mengubah username. Coba lagi.",
    };
  }
  // terbitkan ulang cookie agar sesi mencerminkan username baru
  await setSessionCookie(next);
  revalidatePath("/admin", "layout");
  return { ok: true, message: `Username diganti menjadi "${next}".` };
}

/** Ganti password panel admin — tanpa verifikasi password lama. */
export async function changePasswordAction(
  _prev: AccountState,
  formData: FormData,
): Promise<AccountState> {
  const username = await getSessionUsername();
  if (!username) {
    return { error: "Sesi berakhir. Silakan masuk kembali." };
  }

  const password = String(formData.get("password") ?? "");
  if (password.length < 6) {
    return { error: "Password minimal 6 karakter." };
  }

  try {
    await updatePassword(password);
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Gagal mengubah password. Coba lagi.",
    };
  }
  revalidatePath("/admin", "layout");
  return { ok: true, message: "Password berhasil diganti." };
}
