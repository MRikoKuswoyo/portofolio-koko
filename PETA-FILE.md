# 🗺️ PETA FILE — Portofolio Muhammad Riko Kuswoyo

Panduan "mau ubah X, buka file Y". Buka `index.html` untuk menjalankan situs.

> **Aturan emas:** hampir semua perubahan isi cukup dilakukan di **`js/data/data.js`**
> (dan `js/data/data-en.js` untuk versi Inggris). Folder dan file lain tidak perlu disentuh.
> Hanya file di dalam folder `css/`, `js/`, `assets/` yang dipakai situs.

## Struktur

```
portofolio-koko/
├── index.html        Halaman utama (Home, About, Portfolio, Contact)
├── project.html      Detail proyek                (project.html?p=<slug>)
├── tentang.html      Detail pendidikan/organisasi (tentang.html?i=<slug>)
├── README.md         Halaman depan GitHub
├── PETA-FILE.md      File ini
│
├── css/              🎨 TAMPILAN
│   ├── style.css       Gaya utama, toolbar, chat AI, tema terang (paling bawah)
│   ├── project.css     Gaya project.html
│   └── tentang.css     Gaya tentang.html
│
├── js/
│   ├── data/         ✏️ ISI KONTEN (paling sering diedit)
│   │   ├── data.js       SEMUA teks, proyek, sertifikat, skill, kontak (Bahasa Indonesia)
│   │   ├── data-en.js    Terjemahan Inggris (kunci = teks Indonesia PERSIS di data.js)
│   │   └── komentar.js   Komentar contoh pengunjung
│   ├── inti/         ⚙️ LOGIKA UTAMA   script.js, lang.js, loader.js, detail.js, flip.js
│   ├── fitur/        ✨ FITUR          fitur.js (toolbar, Tanya AI, bantuan), bawah.js (peta, kontak, pemutar lagu)
│   ├── visual/       🌌 EFEK           efek.js, latar.js, kartu3d.js (kartu ID 3D)
│   ├── halaman/      📄 HALAMAN DETAIL project.js, tentang.js
│   └── lib/          📦 JANGAN DIEDIT  qrcode.js, foto-kartu.js
│
├── assets/           🖼️ SEMUA GAMBAR/MEDIA
│   ├── foto/           foto profil dan foto kartu 3D
│   ├── dokumen/        cv.pdf
│   ├── logo/           logo kampus/organisasi (xxx.png = kecil, xxx-full.png = besar)
│   ├── flyer/          flyer/poster proyek dan liputan
│   ├── avatar/         avatar SVG untuk komentar
│   ├── lagu/ lirik/    nina.m4a dan nina.txt (pemutar lagu)
│   └── sertifikat/     .webp = tampil di web · .pdf/.png = file unduhan
│       ├── penghargaan/  juara, achievement DRN, penulis terbaik, keynote
│       ├── organisasi/   HIMASI, Kejar Mimpi, Superteam, DRN, OSIS, kepanitiaan, kepala suku
│       ├── pendidikan/   TOEFL, transkrip, kelulusan, PMM, magang/kerja praktik
│       └── webinar/      semua webinar dan seminar
│
└── backend/          🔌 OPSIONAL (di luar situs, boleh diabaikan)
    ├── ai-worker.js          Contoh backend Cloudflare Worker untuk Tanya AI
    └── supabase-komentar.sql SQL tabel komentar Supabase
```

## "Kalau mau ... buka ..."

| Mau ubah | Buka |
|---|---|
| Teks, nama, bio, link sosmed, proyek, sertifikat, pengalaman | `js/data/data.js` (+ `js/data/data-en.js` untuk versi Inggris) |
| Warna, font, ukuran, tema terang | `css/style.css` |
| Tampilan halaman detail proyek / tentang | `css/project.css` / `css/tentang.css` |
| Ganti foto profil / foto kartu | timpa file di `assets/foto/` (nama sama) |
| Ganti CV | timpa `assets/dokumen/cv.pdf` |
| Tambah logo / flyer proyek | taruh di `assets/logo/` atau `assets/flyer/`, tulis path `assets/...` di `data.js` |
| Ganti lagu / lirik | `assets/lagu/` dan `assets/lirik/`, pengaturan di `js/fitur/bawah.js` |
| Perilaku chat Tanya AI | `js/fitur/fitur.js` (endpoint di `data.js` → `ai`) |
| Perilaku kartu 3D | `js/visual/kartu3d.js` |
| Bug tab portfolio / lightbox / form kontak | `js/inti/script.js` |

## ➕ Cara menambah sertifikat baru

1. **Taruh file** di subfolder `assets/sertifikat/` yang cocok.
   Contoh: `assets/sertifikat/organisasi/nama-sertifikat.webp` (untuk tampil, lebar ± 1600px)
   dan `nama-sertifikat.png` atau `.pdf` (untuk diunduh, opsional).
2. **Daftarkan** di `js/data/data.js`, di dalam daftar `const SRT = { ... }` paling atas:
   ```js
   namaKunci: { title: "Judul sertifikat", desc: "Deskripsi singkat.",
                image: "assets/sertifikat/organisasi/nama-sertifikat.webp",
                file:  "assets/sertifikat/organisasi/nama-sertifikat.png" },
   ```
   `namaKunci` bebas, tanpa spasi, tidak boleh sama dengan kunci lain.
3. **Tampilkan** di tempat yang diinginkan (cukup tulis `"namaKunci"`):
   - Tab *Certificates*: tambahkan di `certificates: rel(...)`
   - Tab *Achievements*: di dalam `achievements: [ ... rel(...) ]`
   - Tab *Webinar*: di `webinars: rel(...)`
   - Halaman detail organisasi/pendidikan: di `sertifikat: ["namaKunci"]` pada entri itu
   - Daftar capaian: tambahkan `cert: "namaKunci"` pada baris capaiannya
4. **Terjemahan** (opsional tapi disarankan): salin `title`, `desc` ke `js/data/data-en.js`
   sebagai `"teks Indonesia": "English text",`.

Ubah **teks** di `data.js`? Ubah juga barisnya di `data-en.js`, kalau tidak teks itu tetap
Indonesia saat mode EN.

## 🚀 Cara update ke GitHub dan Vercel

```bash
git add -A
git commit -m "pesan perubahan"
git push
```
Vercel otomatis men-deploy dari branch `main`. Setelah status *Ready*, buka situs dengan
`Ctrl+Shift+R`. `git add -A` (huruf besar) juga ikut mencatat file yang dihapus.

## Catatan fitur

- **Bahasa ID/EN**: pilihan tersimpan di browser. Pertama kali, bahasa HP Indonesia → ID, selain itu → EN.
- **Tema terang/gelap**: warna tema terang ada di `css/style.css`, blok `:root[data-theme=light]`.
- **Tanya AI**: default menjawab dari data portofolio di browser (gratis, tanpa server).
  Untuk AI sungguhan, ikuti langkah di `backend/ai-worker.js`, lalu isi `ai: { endpoint: "..." }` di `data.js`.
  API key **tidak boleh** ditaruh di file situs mana pun.
- **Komentar permanen**: buat project di supabase.com, jalankan `backend/supabase-komentar.sql`,
  lalu isi `supabaseUrl` dan `supabaseKey` (publishable key) di `data.js` → `contact`.
  Tanpa Supabase, komentar hanya tersimpan di browser pengunjung itu.
