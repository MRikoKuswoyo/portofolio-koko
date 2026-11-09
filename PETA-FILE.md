# 🗺️ PETA FILE — Portfolio Muhammad Riko Kuswoyo

Panduan "mau ubah X, bukalah file Y". Kode TIDAK diubah, hanya dipindah ke folder
dan path-nya disesuaikan. Buka `index.html` untuk menjalankan.

## Struktur

```
portofolio koko/
├── index.html          Halaman utama (Home, About, Portfolio, Contact)
├── project.html        Halaman detail proyek      (project.html?p=<slug>)
├── tentang.html        Halaman detail pendidikan/pengalaman/organisasi (tentang.html?i=<slug>)
├── PETA-FILE.md        File ini
│
├── css/                🎨 TAMPILAN
│   ├── style.css         Gaya utama + toolbar, chat AI, bantuan, TEMA TERANG (paling bawah)
│   ├── project.css       Gaya halaman project.html
│   └── tentang.css       Gaya halaman tentang.html
│
├── js/
│   ├── data/           ✏️ ISI KONTEN (paling sering diedit)
│   │   ├── data.js         SEMUA teks, proyek, sertifikat, skill, kontak, setting (Bahasa Indonesia)
│   │   ├── data-en.js      Terjemahan Inggris (kunci = teks Indonesia PERSIS di data.js)
│   │   └── komentar.js     Komentar contoh pengunjung
│   ├── inti/           ⚙️ LOGIKA UTAMA
│   │   ├── script.js       Render halaman utama, tab portfolio, lightbox sertifikat, form kontak
│   │   ├── lang.js         Bahasa ID/EN + tema terang/gelap + kamus teks tombol
│   │   ├── loader.js       Layar loading
│   │   ├── detail.js       Pembantu halaman detail
│   │   └── flip.js         Sertifikat dua sisi (depan ⇄ belakang)
│   ├── fitur/          ✨ FITUR TAMBAHAN
│   │   ├── fitur.js        Toolbar, chat "Tanya AI", jendela bantuan (?)
│   │   └── bawah.js        Peta + kontak + foto pemutar lagu & lirik
│   ├── visual/         🌌 EFEK VISUAL
│   │   ├── efek.js         Efek-efek halaman
│   │   ├── latar.js        Latar belakang canvas
│   │   └── kartu3d.js      Kartu ID 3D (Three.js)
│   ├── halaman/        📄 LOGIKA HALAMAN DETAIL
│   │   ├── project.js      untuk project.html
│   │   └── tentang.js      untuk tentang.html
│   └── lib/            📦 JANGAN DIEDIT
│       ├── qrcode.js       Library QR code
│       └── foto-kartu.js   Cadangan foto kartu (dibuat otomatis dari foto.jpg)
│
├── assets/             🖼️ SEMUA FILE GAMBAR/MEDIA
│   ├── foto/             foto.jpg (kartu 3D), foto-about.webp, foto-about-hero.webp, foto-nina.webp
│   ├── dokumen/          cv.pdf
│   ├── logo/             logo kampus/organisasi (xxx.png = kecil, xxx-full.png = besar)
│   ├── flyer/            flyer/poster proyek
│   ├── sertifikat/       sertifikat (.webp tampil, .pdf/.png untuk unduh) + webinar/
│   ├── avatar/           avatar svg komentar
│   ├── lagu/             nina.m4a
│   ├── lirik/            nina.txt
│   └── _arsip-tidak-terpakai/   file yang TIDAK dipanggil kode manapun (aman dihapus kalau mau)
│
├── backend/            🔌 OPSIONAL (di luar website)
│   ├── ai-worker.js        Contoh backend Cloudflare Worker untuk Tanya AI
│   └── supabase-komentar.sql   SQL tabel komentar Supabase
│
└── panduan/
    └── README-FITUR.txt    Catatan fitur lama (nama file di dalamnya = nama lama, lokasinya lihat peta ini)
```

## "Kalau mau ... buka ..."

| Mau ubah | Buka |
|---|---|
| Teks, nama, bio, link sosmed, proyek, sertifikat | `js/data/data.js` (+ `js/data/data-en.js` untuk versi Inggris) |
| Warna, font, ukuran, tema terang | `css/style.css` |
| Tampilan halaman detail proyek / tentang | `css/project.css` / `css/tentang.css` |
| Ganti foto profil / foto kartu | timpa file di `assets/foto/` (nama sama) atau ubah path di `data.js` |
| Ganti CV | timpa `assets/dokumen/cv.pdf` |
| Tambah sertifikat baru | taruh gambar di `assets/sertifikat/`, lalu daftarkan di `data.js` dengan path `assets/sertifikat/namafile.webp` |
| Tambah logo / flyer proyek | taruh di `assets/logo/` atau `assets/flyer/`, path di `data.js` diawali `assets/...` |
| Ganti lagu / lirik | `assets/lagu/` dan `assets/lirik/`, setting di `js/fitur/bawah.js` |
| Perilaku chat Tanya AI | `js/fitur/fitur.js` (endpoint di `data.js`) |
| Perilaku kartu 3D | `js/visual/kartu3d.js` |
| Latar bergerak | `js/visual/latar.js` |
| Bug di tab portfolio / lightbox / form | `js/inti/script.js` |

## Aturan path (penting!)
Semua path aset ditulis **dari folder tempat index.html berada**, bukan dari lokasi file JS-nya.
Contoh di `data.js`: `"assets/logo/unimal.png"` (bukan `"../assets/logo/unimal.png"`).
