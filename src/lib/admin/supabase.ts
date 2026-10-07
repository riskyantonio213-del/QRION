/**
 * Koneksi Supabase untuk panel admin — REST (PostgREST) + Storage API
 * memakai service key dari env, server-only. Pola yang sama dengan
 * src/app/actions/form-actions.ts (fetch langsung, tanpa SDK).
 *
 * Env wajib:
 *   NEXT_PUBLIC_SUPABASE_URL  — URL project (publik, aman)
 *   SUPABASE_SECRET_KEY       — service role key; JANGAN pernah NEXT_PUBLIC_
 */

export class SupabaseAdminError extends Error {}

export const ADMIN_BUCKET = "admin-uploads";
const ROW_ID = 1;

export function supabaseAdminConfig(): { url: string; key: string } | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;
  return { url: url.replace(/\/+$/, ""), key };
}

export function requireAdminConfig(): { url: string; key: string } {
  const config = supabaseAdminConfig();
  if (!config) {
    throw new SupabaseAdminError(
      "Supabase belum dikonfigurasi — isi NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SECRET_KEY di .env.local.",
    );
  }
  return config;
}

/** Fetch ke /rest/v1/* dengan service key. */
export async function adminRest(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const config = requireAdminConfig();
  return fetch(`${config.url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      "content-type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

/* ---------------------------------------------------------------
 * Storage (bucket publik admin-uploads)
 * ------------------------------------------------------------- */

let bucketEnsured = false;

async function ensureUploadBucket(config: { url: string; key: string }): Promise<void> {
  if (bucketEnsured) return;

  const headers = {
    apikey: config.key,
    Authorization: `Bearer ${config.key}`,
  };

  const head = await fetch(`${config.url}/storage/v1/bucket/${ADMIN_BUCKET}`, {
    headers,
    cache: "no-store",
  });
  if (head.ok) {
    bucketEnsured = true;
    return;
  }
  if (head.status !== 404) {
    throw new SupabaseAdminError(
      `Gagal memeriksa bucket Storage (HTTP ${head.status}).`,
    );
  }

  const create = await fetch(`${config.url}/storage/v1/bucket`, {
    method: "POST",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify({
      id: ADMIN_BUCKET,
      name: ADMIN_BUCKET,
      public: true,
      file_size_limit: 8 * 1024 * 1024,
    }),
    cache: "no-store",
  });
  // 409 = sudah dibuat oleh proses lain, anggap sukses
  if (!create.ok && create.status !== 409) {
    const detail = await create.text().catch(() => "");
    throw new SupabaseAdminError(
      `Gagal membuat bucket Storage (HTTP ${create.status}): ${detail.slice(0, 200)}`,
    );
  }
  bucketEnsured = true;
}

/** Unggah satu objek ke bucket publik; balas URL publik siap pakai. */
export async function uploadAdminImage(options: {
  name: string;
  bytes: Uint8Array;
  contentType: string;
}): Promise<string> {
  const config = requireAdminConfig();
  await ensureUploadBucket(config);

  const response = await fetch(
    `${config.url}/storage/v1/object/${ADMIN_BUCKET}/${options.name}`,
    {
      method: "POST",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        "content-type": options.contentType,
        // nama unik (timestamp) — menimpa aman bila tabrakan
        "x-upsert": "true",
      },
      body: options.bytes as unknown as BodyInit,
      cache: "no-store",
    },
  );
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new SupabaseAdminError(
      `Unggahan ditolak Storage (HTTP ${response.status}): ${detail.slice(0, 200)}`,
    );
  }
  return `${config.url}/storage/v1/object/public/${ADMIN_BUCKET}/${options.name}`;
}

export { ROW_ID };
