/**
 * Glue sesi ke cookie Next (server components / server actions).
 */
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  SESSION_TTL_SECONDS,
  createSessionToken,
  verifySessionToken,
} from "@/lib/admin/store";

export const SESSION_COOKIE = "qrion_admin_session";

/** Username admin dari cookie sesi, atau null. */
export async function getSessionUsername(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token)?.username ?? null;
}

/** Guard halaman: batal login → arahkan ke /masuk. */
export async function requireAdmin(): Promise<string> {
  const username = await getSessionUsername();
  if (!username) redirect("/masuk");
  return username;
}

export async function setSessionCookie(username: string): Promise<void> {
  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
