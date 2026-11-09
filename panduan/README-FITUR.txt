FITUR BARU: TANYA AI · ID/EN · BANTUAN (?) · TEMA TERANG/GELAP
================================================================
Toolbar ada di pojok kanan atas (index.html). File yang terlibat:

  lang.js     bahasa ID/EN + tema terang/gelap + kamus teks antarmuka (tombol, chat, bantuan)
  data-en.js  terjemahan Inggris. Kunci = teks Indonesia PERSIS seperti di data.js.
              Ubah teks di data.js? Tambah/ubah juga barisnya di sini, kalau tidak teks itu tetap Indonesia saat mode EN.
  fitur.js    toolbar, panel chat Tanya AI, jendela bantuan
  style.css   bagian paling bawah: TOOLBAR, PANEL CHAT, BANTUAN, dan TEMA TERANG
  ai-worker.js  (opsional) contoh backend agar Tanya AI dijawab model AI sungguhan

BAHASA
- Pilihan disimpan di browser. Pertama kali: bahasa HP/browser Indonesia -> ID, selain itu -> EN.
- Ganti bahasa memuat ulang halaman (tanpa layar loading) dan kembali ke posisi scroll semula.
- Komentar contoh di komentar.js sengaja tidak diterjemahkan (itu komentar pengunjung).

TANYA AI
- Default: menjawab dari data portofolio (data.js) langsung di browser, tanpa server dan tanpa biaya.
- Mau AI sungguhan: ikuti langkah di ai-worker.js, lalu isi  ai: { endpoint: "..." }  di data.js.
  API key TIDAK boleh ditaruh di data.js / file website mana pun.

TEMA
- Warna tema terang ada di style.css (blok ":root[data-theme=light]").

KOMENTAR PERMANEN (tampil untuk semua pengunjung, tidak hilang saat refresh)
- Buat project di supabase.com, buka SQL Editor, jalankan isi file supabase-komentar.sql.
- Salin Project URL dan anon public key (Project Settings → API) ke data.js → contact → supabaseUrl & supabaseKey.
- Tanpa Supabase, komentar tetap tersimpan di browser pengunjung itu saja (localStorage).
- Hapus komentar spam lewat Supabase → Table Editor → comments.
