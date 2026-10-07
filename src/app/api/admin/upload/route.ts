import { NextResponse } from "next/server";

import { getSessionUsername } from "@/lib/admin/session";
import {
  SupabaseAdminError,
  uploadAdminImage,
} from "@/lib/admin/supabase";

const MAX_BYTES = 8 * 1024 * 1024;

const ALLOWED_TYPES: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "image/avif": ".avif",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
};

/**
 * Upload gambar konten admin → Supabase Storage (bucket publik
 * `admin-uploads`), URL publik dikembalikan ke ImageField.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const username = await getSessionUsername();
  if (!username) {
    return NextResponse.json(
      { error: "Sesi berakhir. Silakan masuk kembali." },
      { status: 401 },
    );
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File tidak ditemukan." }, { status: 400 });
  }

  const extension = ALLOWED_TYPES[file.type];
  if (!extension) {
    return NextResponse.json(
      { error: "Format harus PNG, JPG, WEBP, AVIF, GIF, atau SVG." },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Ukuran maksimal 8 MB." },
      { status: 413 },
    );
  }

  const safeBase =
    file.name
      .toLowerCase()
      .replace(/\.[a-z0-9]+$/, "")
      .replace(/[^a-z0-9._-]+/g, "-")
      .replace(/^[.-]+/, "")
      .slice(0, 60) || "gambar";

  const filename = `${Date.now()}-${safeBase}${extension}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  try {
    const url = await uploadAdminImage({
      name: filename,
      bytes,
      contentType: file.type,
    });
    return NextResponse.json({ url });
  } catch (error) {
    const message =
      error instanceof SupabaseAdminError
        ? error.message
        : "Unggah gambar gagal — periksa koneksi/konfigurasi Supabase.";
    console.error("[QRION] upload admin gagal:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
