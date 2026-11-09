-- =====================================================================
-- KOMENTAR PORTOFOLIO — jalankan SEKALI di Supabase → SQL Editor → New query → Run
-- Setelah itu isi supabaseUrl & supabaseKey (anon public) di data.js → contact
-- =====================================================================
create table if not exists public.comments (
  id         bigint generated always as identity primary key,
  name       text    not null check (char_length(name) between 1 and 60),
  text       text    not null check (char_length(text) between 1 and 500),
  photo      text    not null default '' check (char_length(photo) <= 20000 and (photo = '' or photo like 'data:image/%')),
  approved   boolean not null default true,      -- ganti default ke false jika mau menyetujui komentar manual dulu
  created_at timestamptz not null default now()
);

alter table public.comments enable row level security;

-- pengunjung (anon) hanya boleh MEMBACA komentar yang disetujui dan MENAMBAH komentar baru
create policy "baca komentar"  on public.comments for select to anon using (approved = true);
create policy "kirim komentar" on public.comments for insert to anon with check (approved = true);

-- pengunjung hanya boleh mengisi 3 kolom ini (id, waktu, dan approved diatur server)
revoke insert on public.comments from anon;
grant  insert (name, text, photo) on public.comments to anon;
grant  select on public.comments to anon;

-- Menghapus komentar spam: Supabase → Table Editor → comments → hapus barisnya (tidak bisa dilakukan pengunjung).
