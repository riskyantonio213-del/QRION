-- ============================================================
-- QRION Admin Panel — migration (jalankan sekali di Supabase
-- Dashboard → SQL Editor → New query → Run)
-- ============================================================

-- 1. Akun admin (selalu satu baris, id = 1)
create table if not exists public.admin_accounts (
  id            int primary key default 1 check (id = 1),
  username      text not null,
  password_hash text not null, -- scrypt hex
  salt          text not null  -- scrypt salt hex
);

-- 2. Override konten homepage (satu baris berisi seluruh tree jsonb,
--    struktur sama dengan .qrion-admin/content.json lama)
create table if not exists public.admin_content (
  id   int primary key default 1 check (id = 1),
  data jsonb not null default '{}'::jsonb
);

-- 3. Keamanan: RLS aktif tanpa policy → hanya service role
--    (SUPABASE_SECRET_KEY) yang bisa baca/tulis. Key publishable/anon
--    ditolak otomatis.
alter table public.admin_accounts enable row level security;
alter table public.admin_content   enable row level security;

-- 4. Bucket publik untuk gambar yang diunggah dari panel admin
insert into storage.buckets (id, name, public, file_size_limit)
values ('admin-uploads', 'admin-uploads', true, 8388608) -- 8 MB
on conflict (id) do nothing;

-- Selesai. Verifikasi cepat:
--   select * from public.admin_accounts;  -- 0 baris (akan ter-seed admin/admin123 saat login pertama)
--   select * from public.admin_content;    -- 0 baris
