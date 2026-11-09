/* =====================================================================
   💬 KOMENTAR.JS — 200 komentar contoh (dummy), terbaru di atas.
   Field: name, text, time (YYYY-MM-DDTHH:mm), photo (kosong = ikon profil bawaan)
   Ganti/hapus sesuka hati; dipakai oleh data.js → contact.comments
   ===================================================================== */
const KOMENTAR = [
 {
  "name": "Bayu Putri",
  "text": "Lanjutkan kak, semangat ngoding!",
  "time": "2026-11-06T11:50",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Aulia Saputra",
  "text": "Suka banget sama tab portfolionya",
  "time": "2026-11-04T10:20",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "devnewbie",
  "text": "Jujur ini keren banget, serius",
  "time": "2026-10-31T19:35",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Nadia Hidayat",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2026-10-30T06:42",
  "photo": ""
 },
 {
  "name": "raka",
  "text": "Animasinya halus banget, pakai apa nih?",
  "time": "2026-10-14T23:43",
  "photo": ""
 },
 {
  "name": "Zaki Saputra",
  "text": "Semoga makin sukses, aamiin",
  "time": "2026-10-13T06:04",
  "photo": ""
 },
 {
  "name": "Yap",
  "text": "Ini sih level senior bang",
  "time": "2026-10-11T07:02",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Catur_dev",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2026-10-03T06:50",
  "photo": ""
 },
 {
  "name": "Devnewbie",
  "text": "Proyek SIM Diklat-nya keren, kepake banget buat instansi",
  "time": "2026-10-02T14:36",
  "photo": ""
 },
 {
  "name": "malik",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2026-09-20T19:32",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Ngoding_pagi",
  "text": "Animasinya halus banget, pakai apa nih?",
  "time": "2026-09-17T23:22",
  "photo": "assets/avatar/a03.svg"
 },
 {
  "name": "Aulia Fauzi",
  "text": "Top markotop",
  "time": "2026-09-16T16:26",
  "photo": ""
 },
 {
  "name": "Ramesh",
  "text": "Izin contek ya abangkuu",
  "time": "2026-09-15T07:52",
  "photo": ""
 },
 {
  "name": "Nadia Nasution",
  "text": "Jujur ini keren banget, serius",
  "time": "2026-09-14T15:36",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Intan Nugroho",
  "text": "Kok bisa semulus ini sih scroll-nya",
  "time": "2026-09-14T05:57",
  "photo": ""
 },
 {
  "name": "Putri Ginting",
  "text": "Nice work!",
  "time": "2026-09-11T11:52",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Vina Amelia",
  "text": "Bikin semangat belajar web nih",
  "time": "2026-09-10T21:11",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Kopi_susu",
  "text": "Hasil kerja keras banget ini, salut",
  "time": "2026-09-10T01:18",
  "photo": ""
 },
 {
  "name": "Nurul Nugroho",
  "text": "Izin inspirasi buat tugas kuliah ya bang",
  "time": "2026-09-09T13:43",
  "photo": ""
 },
 {
  "name": "Salsa Wijaya",
  "text": "Bang boleh collab nggak?",
  "time": "2026-09-07T22:33",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Eko Syahputra",
  "text": "Bang boleh collab nggak?",
  "time": "2026-08-28T02:38",
  "photo": "assets/avatar/a05.svg"
 },
 {
  "name": "sipalingweb",
  "text": "Suka banget sama tab portfolionya",
  "time": "2026-08-22T04:26",
  "photo": "assets/avatar/a07.svg"
 },
 {
  "name": "Wulan Syahputra",
  "text": "Dari Unimal juga nih, bangga lihat karya alumni",
  "time": "2026-08-20T06:09",
  "photo": "assets/avatar/a03.svg"
 },
 {
  "name": "Malik",
  "text": "Ini sih level senior bang",
  "time": "2026-08-13T07:37",
  "photo": ""
 },
 {
  "name": "Aisha",
  "text": "Keren banget portofolionya!",
  "time": "2026-08-09T22:59",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Laras Kurniawan",
  "text": "Sistem Monev-nya kepikiran juga ya, solutif",
  "time": "2026-08-08T12:49",
  "photo": ""
 },
 {
  "name": "Mira Maulana",
  "text": "Kok bisa semulus ini sih scroll-nya",
  "time": "2026-08-04T19:22",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Andre Lubis",
  "text": "Semoga makin sukses, aamiin",
  "time": "2026-08-01T10:14",
  "photo": ""
 },
 {
  "name": "Rafi Syahputra",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2026-07-20T21:05",
  "photo": ""
 },
 {
  "name": "Bayu Harahap",
  "text": "Semangat terus bang, sukses selalu!",
  "time": "2026-07-20T06:17",
  "photo": ""
 },
 {
  "name": "Selvi Kurniawan",
  "text": "Fontnya enak dibaca",
  "time": "2026-07-18T15:45",
  "photo": ""
 },
 {
  "name": "Zaki Pratama",
  "text": "Wah gila sih ini",
  "time": "2026-07-16T08:16",
  "photo": "assets/avatar/a03.svg"
 },
 {
  "name": "kodingkuy",
  "text": "Fontnya enak dibaca",
  "time": "2026-06-30T05:54",
  "photo": ""
 },
 {
  "name": "Nurul Saputra",
  "text": "Bikin semangat belajar web nih",
  "time": "2026-06-26T17:44",
  "photo": ""
 },
 {
  "name": "Farhan Kurniawan",
  "text": "Responsive di HP juga rapi",
  "time": "2026-06-19T06:11",
  "photo": ""
 },
 {
  "name": "Dewi Ginting",
  "text": "Great portfolio, keep it up!",
  "time": "2026-06-19T00:40",
  "photo": ""
 },
 {
  "name": "Aisha",
  "text": "Bot Telegram pengingat absennya ide bagus banget",
  "time": "2026-06-13T11:59",
  "photo": ""
 },
 {
  "name": "Yap",
  "text": "Design systemnya konsisten, mantap",
  "time": "2026-06-10T19:47",
  "photo": ""
 },
 {
  "name": "anak_kos",
  "text": "Bang boleh collab nggak?",
  "time": "2026-05-29T03:12",
  "photo": ""
 },
 {
  "name": "Nadia Kurniawan",
  "text": "Semoga cepat dapat magang di tempat impian ya",
  "time": "2026-05-15T19:09",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Fikri Ramadhan",
  "text": "Bagus banget, jadi pengen belajar Three.js",
  "time": "2026-05-13T10:57",
  "photo": ""
 },
 {
  "name": "Devnewbie",
  "text": "Fresh graduate IPK 3,82 mantul",
  "time": "2026-05-11T00:13",
  "photo": ""
 },
 {
  "name": "Tiara Maulana",
  "text": "Sukses terus kak, ditunggu karya berikutnya",
  "time": "2026-05-04T19:41",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Rizky Hidayat",
  "text": "Proyek SIM Diklat-nya keren, kepake banget buat instansi",
  "time": "2026-04-29T20:25",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "anak_kos",
  "text": "Bagus banget, jadi pengen belajar Three.js",
  "time": "2026-04-26T14:58",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Mira Lubis",
  "text": "Suka banget sama tab portfolionya",
  "time": "2026-04-22T19:09",
  "photo": ""
 },
 {
  "name": "Kopi_susu",
  "text": "Keren bgt sumpah bang, ijin inspirasi buat tugas sekolah yaa",
  "time": "2026-04-22T04:42",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Ilham Harahap",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2026-04-15T23:56",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Priya S.",
  "text": "Lanjutkan kak, semangat ngoding!",
  "time": "2026-04-15T18:21",
  "photo": ""
 },
 {
  "name": "Maya Ramadhan",
  "text": "Design systemnya konsisten, mantap",
  "time": "2026-04-04T20:42",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Hendra Hasibuan",
  "text": "Suka banget sama tab portfolionya",
  "time": "2026-04-02T11:35",
  "photo": ""
 },
 {
  "name": "Rani Fauzi",
  "text": "Proyek SIM Diklat-nya keren, kepake banget buat instansi",
  "time": "2026-03-30T06:54",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "Fikri Nugroho",
  "text": "Lanjutkan kak, semangat ngoding!",
  "time": "2026-03-17T11:15",
  "photo": "assets/avatar/a09.svg"
 },
 {
  "name": "Ilham Ginting",
  "text": "Fresh graduate IPK 3,82 mantul",
  "time": "2026-03-17T03:02",
  "photo": "assets/avatar/a09.svg"
 },
 {
  "name": "Fajar Saputra",
  "text": "Dari Unimal juga nih, bangga lihat karya alumni",
  "time": "2026-03-14T15:51",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Intan Amelia",
  "text": "Suka banget sama tab portfolionya",
  "time": "2026-03-13T16:51",
  "photo": ""
 },
 {
  "name": "Tom W.",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2026-02-28T19:38",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Farhan Hidayat",
  "text": "Portofolio terbaik yang pernah kulihat minggu ini",
  "time": "2026-02-24T01:19",
  "photo": ""
 },
 {
  "name": "Salsa Pratama",
  "text": "Portofolio terbaik yang pernah kulihat minggu ini",
  "time": "2026-02-21T00:23",
  "photo": ""
 },
 {
  "name": "Intan Siregar",
  "text": "Warna mint-nya enak dipandang",
  "time": "2026-02-09T17:06",
  "photo": ""
 },
 {
  "name": "Ilham Nugroho",
  "text": "Bang boleh collab nggak?",
  "time": "2026-02-07T14:22",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Priya S.",
  "text": "Spotify playlist-nya selera bagus juga hehe",
  "time": "2026-01-30T22:23",
  "photo": ""
 },
 {
  "name": "Intan Pratama",
  "text": "Jujur ini keren banget, serius",
  "time": "2026-01-27T22:42",
  "photo": ""
 },
 {
  "name": "Dina Rahman",
  "text": "Suka banget sama tab portfolionya",
  "time": "2026-01-19T15:09",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Aldi Harahap",
  "text": "Dari Unimal juga nih, bangga lihat karya alumni",
  "time": "2025-12-27T20:39",
  "photo": ""
 },
 {
  "name": "ngoding_pagi",
  "text": "toop",
  "time": "2025-12-26T02:20",
  "photo": ""
 },
 {
  "name": "Benebene",
  "text": "Portofolio terbaik yang pernah kulihat minggu ini",
  "time": "2025-12-24T22:58",
  "photo": ""
 },
 {
  "name": "Selvi Kurniawan",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2025-12-24T13:58",
  "photo": ""
 },
 {
  "name": "Jahid Hasan",
  "text": "Desainnya bersih, suka banget",
  "time": "2025-12-21T23:34",
  "photo": "assets/avatar/a08.svg"
 },
 {
  "name": "Mira Ginting",
  "text": "Responsive di HP juga rapi",
  "time": "2025-12-20T14:04",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Ramesh",
  "text": "Layoutnya rapi, mudah dinavigasi",
  "time": "2025-11-28T11:07",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "kodingkuy",
  "text": "Bikin semangat belajar web nih",
  "time": "2025-11-21T22:13",
  "photo": ""
 },
 {
  "name": "devnewbie",
  "text": "Dari kemarin buka terus, saking kerennya",
  "time": "2025-11-14T11:13",
  "photo": ""
 },
 {
  "name": "Eko Putri",
  "text": "Spotify playlist-nya selera bagus juga hehe",
  "time": "2025-11-12T15:53",
  "photo": "assets/avatar/a05.svg"
 },
 {
  "name": "Arif Fauzi",
  "text": "Responsive di HP juga rapi",
  "time": "2025-11-11T22:20",
  "photo": ""
 },
 {
  "name": "Sinta Nugroho",
  "text": "Bot Telegram pengingat absennya ide bagus banget",
  "time": "2025-11-10T16:52",
  "photo": ""
 },
 {
  "name": "sipalingweb",
  "text": "Kartu ID 3D-nya keren parah",
  "time": "2025-11-09T17:47",
  "photo": ""
 },
 {
  "name": "Hendra Pratama",
  "text": "Love the design, clean and modern",
  "time": "2025-11-09T14:04",
  "photo": "assets/avatar/a07.svg"
 },
 {
  "name": "Anak_kos",
  "text": "Jujur ini keren banget, serius",
  "time": "2025-11-01T13:57",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Galih Fauzi",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2025-10-28T01:10",
  "photo": ""
 },
 {
  "name": "Rafi Putri",
  "text": "Bro can you give it to us?",
  "time": "2025-10-16T07:54",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "bangjago",
  "text": "Kok bisa semulus ini sih scroll-nya",
  "time": "2025-10-09T06:02",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "Tom W.",
  "text": "Kartu ID 3D-nya keren parah",
  "time": "2025-10-04T04:57",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Maya Amelia",
  "text": "Responsive di HP juga rapi",
  "time": "2025-10-01T13:45",
  "photo": ""
 },
 {
  "name": "Neneyy",
  "text": "Desainnya bersih, suka banget",
  "time": "2025-09-29T16:57",
  "photo": "assets/avatar/a07.svg"
 },
 {
  "name": "Yap",
  "text": "Bang boleh collab nggak?",
  "time": "2025-09-28T13:08",
  "photo": "assets/avatar/a05.svg"
 },
 {
  "name": "Priya S.",
  "text": "Fontnya enak dibaca",
  "time": "2025-09-07T20:42",
  "photo": ""
 },
 {
  "name": "Kopi_susu",
  "text": "Kok bisa semulus ini sih scroll-nya",
  "time": "2025-09-06T00:46",
  "photo": ""
 },
 {
  "name": "Ramesh",
  "text": "Bang boleh collab nggak?",
  "time": "2025-08-31T00:01",
  "photo": ""
 },
 {
  "name": "ival",
  "text": "Tutorial dong bang, gimana bikin efek latarnya",
  "time": "2025-08-30T04:26",
  "photo": ""
 },
 {
  "name": "Daniel K.",
  "text": "Wah ini bikin sendiri? Hebat",
  "time": "2025-08-21T03:49",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Malik",
  "text": "Jujur ini keren banget, serius",
  "time": "2025-08-20T17:26",
  "photo": ""
 },
 {
  "name": "Intan Harahap",
  "text": "good very",
  "time": "2025-07-29T17:57",
  "photo": ""
 },
 {
  "name": "Bagas Syahputra",
  "text": "Hasil kerja keras banget ini, salut",
  "time": "2025-07-23T09:23",
  "photo": ""
 },
 {
  "name": "Wulan Amelia",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2025-07-22T01:49",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Putri Nugroho",
  "text": "Portofolio terbaik yang pernah kulihat minggu ini",
  "time": "2025-07-19T00:10",
  "photo": ""
 },
 {
  "name": "Aldi Rahman",
  "text": "Nice work!",
  "time": "2025-07-16T15:08",
  "photo": ""
 },
 {
  "name": "kopi_susu",
  "text": "Semangat terus bang, sukses selalu!",
  "time": "2025-07-16T03:55",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Lucas M.",
  "text": "Izin inspirasi buat tugas kuliah ya bang",
  "time": "2025-07-06T08:03",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "Salsa Kurniawan",
  "text": "wow",
  "time": "2025-07-05T02:22",
  "photo": ""
 },
 {
  "name": "Anisa Lestari",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2025-07-03T02:09",
  "photo": ""
 },
 {
  "name": "Reza Kurniawan",
  "text": "Dari Unimal juga nih, bangga lihat karya alumni",
  "time": "2025-06-24T17:34",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Kodingkuy",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2025-06-10T15:31",
  "photo": ""
 },
 {
  "name": "Dewi Ramadhan",
  "text": "Bikin semangat belajar web nih",
  "time": "2025-06-09T12:23",
  "photo": ""
 },
 {
  "name": "sipalingweb",
  "text": "Mohon izin referensi untuk skripsi ya",
  "time": "2025-06-02T20:10",
  "photo": ""
 },
 {
  "name": "Aulia Maulana",
  "text": "Gokil! React + Three.js emang beda",
  "time": "2025-06-01T08:11",
  "photo": ""
 },
 {
  "name": "ival",
  "text": "Great portfolio, keep it up!",
  "time": "2025-05-08T21:30",
  "photo": "assets/avatar/a03.svg"
 },
 {
  "name": "Aulia Pratama",
  "text": "Keren 👍",
  "time": "2025-05-07T18:27",
  "photo": "assets/avatar/a09.svg"
 },
 {
  "name": "Arif Rahman",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2025-05-04T08:18",
  "photo": ""
 },
 {
  "name": "Vina Saputra",
  "text": "Bikin semangat belajar web nih",
  "time": "2025-04-19T12:35",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "Vina Rahman",
  "text": "Portofolio terbaik yang pernah kulihat minggu ini",
  "time": "2025-04-15T06:01",
  "photo": ""
 },
 {
  "name": "mie_ayam",
  "text": "Tampilannya profesional banget",
  "time": "2025-04-14T21:11",
  "photo": "assets/avatar/a09.svg"
 },
 {
  "name": "Rafi Lestari",
  "text": "Love the design, clean and modern",
  "time": "2025-03-22T20:37",
  "photo": "assets/avatar/a10.svg"
 },
 {
  "name": "User404",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2025-03-17T05:17",
  "photo": ""
 },
 {
  "name": "Mie_ayam",
  "text": "wow",
  "time": "2025-03-15T02:29",
  "photo": ""
 },
 {
  "name": "malik",
  "text": "Nice work!",
  "time": "2025-03-12T20:26",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Dewi Ginting",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2025-03-10T12:52",
  "photo": ""
 },
 {
  "name": "Benebene",
  "text": "Sukses terus kak, ditunggu karya berikutnya",
  "time": "2025-03-10T11:37",
  "photo": ""
 },
 {
  "name": "Pixel.mu",
  "text": "Semoga makin sukses, aamiin",
  "time": "2025-03-08T07:30",
  "photo": "assets/avatar/a09.svg"
 },
 {
  "name": "Intan Saputra",
  "text": "Loading screen-nya kreatif!",
  "time": "2025-03-05T07:13",
  "photo": ""
 },
 {
  "name": "mie_ayam",
  "text": "Keren 👍",
  "time": "2025-03-05T01:55",
  "photo": "assets/avatar/a10.svg"
 },
 {
  "name": "Selvi Putri",
  "text": "Detail halamannya lengkap banget",
  "time": "2025-02-14T12:27",
  "photo": ""
 },
 {
  "name": "Putri Hidayat",
  "text": "Jujur ini keren banget, serius",
  "time": "2025-02-04T17:49",
  "photo": ""
 },
 {
  "name": "Daniel K.",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2025-01-28T16:32",
  "photo": ""
 },
 {
  "name": "Galih Siregar",
  "text": "Top markotop",
  "time": "2025-01-23T12:11",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Intan Ginting",
  "text": "Proyek SIM Diklat-nya keren, kepake banget buat instansi",
  "time": "2025-01-16T11:40",
  "photo": ""
 },
 {
  "name": "pixel.mu",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2025-01-14T04:41",
  "photo": ""
 },
 {
  "name": "Kevin Syahputra",
  "text": "Design systemnya konsisten, mantap",
  "time": "2025-01-13T17:55",
  "photo": ""
 },
 {
  "name": "Fajar Hasibuan",
  "text": "Sistem Monev-nya kepikiran juga ya, solutif",
  "time": "2025-01-13T11:11",
  "photo": ""
 },
 {
  "name": "Maya Ramadhan",
  "text": "Warna mint-nya enak dipandang",
  "time": "2025-01-11T08:31",
  "photo": "assets/avatar/a10.svg"
 },
 {
  "name": "Zaki Siregar",
  "text": "Kurir Paket Matriks seru, level 10 susah banget haha",
  "time": "2025-01-11T01:11",
  "photo": ""
 },
 {
  "name": "Tiara Lubis",
  "text": "Layoutnya rapi, mudah dinavigasi",
  "time": "2025-01-10T12:55",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Bayu Nugroho",
  "text": "Dari Unimal juga nih, bangga lihat karya alumni",
  "time": "2025-01-09T02:43",
  "photo": ""
 },
 {
  "name": "Hendra Rahman",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2025-01-08T13:28",
  "photo": ""
 },
 {
  "name": "Yoga Ramadhan",
  "text": "Desainnya bersih, suka banget",
  "time": "2025-01-06T08:07",
  "photo": "assets/avatar/a02.svg"
 },
 {
  "name": "Sarah Lim",
  "text": "toop",
  "time": "2025-01-05T10:58",
  "photo": ""
 },
 {
  "name": "neneyy",
  "text": "Bro can you give it to us?",
  "time": "2024-12-26T11:09",
  "photo": ""
 },
 {
  "name": "Eko Saputra",
  "text": "wow",
  "time": "2024-12-16T15:48",
  "photo": ""
 },
 {
  "name": "Nurul Wijaya",
  "text": "Mohon izin referensi untuk skripsi ya",
  "time": "2024-12-08T23:52",
  "photo": ""
 },
 {
  "name": "Kodingkuy",
  "text": "Sukses terus kak, ditunggu karya berikutnya",
  "time": "2024-12-04T20:35",
  "photo": "assets/avatar/a07.svg"
 },
 {
  "name": "Rani Lestari",
  "text": "Detail halamannya lengkap banget",
  "time": "2024-11-26T22:21",
  "photo": ""
 },
 {
  "name": "Dimas Nugroho",
  "text": "Kurir Paket Matriks seru, level 10 susah banget haha",
  "time": "2024-11-26T12:22",
  "photo": ""
 },
 {
  "name": "Andre Harahap",
  "text": "Izin contek ya abangkuu",
  "time": "2024-11-16T23:28",
  "photo": ""
 },
 {
  "name": "Intan Lestari",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2024-11-11T06:17",
  "photo": ""
 },
 {
  "name": "Rizky Lubis",
  "text": "Sistem Monev-nya kepikiran juga ya, solutif",
  "time": "2024-10-30T01:57",
  "photo": ""
 },
 {
  "name": "Mei Ling",
  "text": "Layoutnya rapi, mudah dinavigasi",
  "time": "2024-10-22T04:39",
  "photo": "assets/avatar/a08.svg"
 },
 {
  "name": "Ryan Pratama",
  "text": "Hasil kerja keras banget ini, salut",
  "time": "2024-10-13T08:23",
  "photo": ""
 },
 {
  "name": "Jahid Hasan",
  "text": "Wah ini bikin sendiri? Hebat",
  "time": "2024-10-10T01:28",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Aldi Wijaya",
  "text": "toop",
  "time": "2024-10-04T10:47",
  "photo": ""
 },
 {
  "name": "Mie_ayam",
  "text": "Ini sih level senior bang",
  "time": "2024-10-03T02:45",
  "photo": "assets/avatar/a03.svg"
 },
 {
  "name": "devnewbie",
  "text": "good very",
  "time": "2024-09-25T16:30",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Malik",
  "text": "Semoga makin sukses, aamiin",
  "time": "2024-09-15T18:03",
  "photo": ""
 },
 {
  "name": "Aldi Siregar",
  "text": "Bagus banget, jadi pengen belajar Three.js",
  "time": "2024-09-14T07:02",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Vina Pratama",
  "text": "Desainnya bersih, suka banget",
  "time": "2024-09-08T13:02",
  "photo": ""
 },
 {
  "name": "Rafi Siregar",
  "text": "Dari Unimal juga nih, bangga lihat karya alumni",
  "time": "2024-09-02T08:10",
  "photo": ""
 },
 {
  "name": "Wulan Saputra",
  "text": "Game Coder-Bot cocok banget buat adik-adik SD",
  "time": "2024-08-11T12:43",
  "photo": ""
 },
 {
  "name": "Nabila Syahputra",
  "text": "Proyek SIM Diklat-nya keren, kepake banget buat instansi",
  "time": "2024-08-06T19:54",
  "photo": ""
 },
 {
  "name": "Arif Hidayat",
  "text": "Izin contek ya abangkuu",
  "time": "2024-08-06T05:49",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Darkmode_fans",
  "text": "Portofolionya kece badai",
  "time": "2024-07-31T02:25",
  "photo": ""
 },
 {
  "name": "Benebene",
  "text": "Bang boleh collab nggak?",
  "time": "2024-07-30T04:00",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Aisha",
  "text": "Top markotop",
  "time": "2024-07-28T09:41",
  "photo": ""
 },
 {
  "name": "Sarah Lim",
  "text": "good very",
  "time": "2024-07-27T16:40",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Mei Ling",
  "text": "Izin inspirasi buat tugas kuliah ya bang",
  "time": "2024-07-24T03:55",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "Dewi Hidayat",
  "text": "Wah gila sih ini",
  "time": "2024-07-18T09:14",
  "photo": ""
 },
 {
  "name": "Mei Ling",
  "text": "Fresh graduate IPK 3,82 mantul",
  "time": "2024-07-17T07:01",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "pixel.mu",
  "text": "good very",
  "time": "2024-07-12T04:58",
  "photo": ""
 },
 {
  "name": "Nabila Wijaya",
  "text": "Sukses terus kak, ditunggu karya berikutnya",
  "time": "2024-07-11T06:30",
  "photo": ""
 },
 {
  "name": "Priya S.",
  "text": "Kartu ID 3D-nya keren parah",
  "time": "2024-07-05T01:32",
  "photo": "assets/avatar/a08.svg"
 },
 {
  "name": "Galih Hasibuan",
  "text": "Love the design, clean and modern",
  "time": "2024-06-26T08:38",
  "photo": ""
 },
 {
  "name": "Dewi Saputra",
  "text": "Layoutnya rapi, mudah dinavigasi",
  "time": "2024-06-25T06:55",
  "photo": "assets/avatar/a10.svg"
 },
 {
  "name": "Wulan Lestari",
  "text": "Salam kenal bang, keren karyanya",
  "time": "2024-06-20T07:31",
  "photo": ""
 },
 {
  "name": "Dina Harahap",
  "text": "Animasinya halus banget, pakai apa nih?",
  "time": "2024-06-19T16:42",
  "photo": "assets/avatar/a05.svg"
 },
 {
  "name": "Aisha",
  "text": "Portofolio terbaik yang pernah kulihat minggu ini",
  "time": "2024-06-19T16:04",
  "photo": ""
 },
 {
  "name": "Rani Rahman",
  "text": "Sistem Monev-nya kepikiran juga ya, solutif",
  "time": "2024-06-14T13:53",
  "photo": "assets/avatar/a04.svg"
 },
 {
  "name": "Jahid Hasan",
  "text": "Bikin semangat belajar web nih",
  "time": "2024-06-14T13:40",
  "photo": "assets/avatar/a07.svg"
 },
 {
  "name": "Hendra Rahman",
  "text": "Wah gila sih ini",
  "time": "2024-06-12T16:39",
  "photo": ""
 },
 {
  "name": "Rafi Fauzi",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2024-06-09T01:00",
  "photo": ""
 },
 {
  "name": "Fikri Fauzi",
  "text": "Animasinya halus banget, pakai apa nih?",
  "time": "2024-06-08T04:21",
  "photo": "assets/avatar/a11.svg"
 },
 {
  "name": "Sinta Amelia",
  "text": "Detail halamannya lengkap banget",
  "time": "2024-06-06T16:53",
  "photo": "assets/avatar/a07.svg"
 },
 {
  "name": "Citra Pratama",
  "text": "Semoga makin sukses, aamiin",
  "time": "2024-06-05T13:21",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "sipalingweb",
  "text": "Jujur ini keren banget, serius",
  "time": "2024-06-05T02:06",
  "photo": ""
 },
 {
  "name": "Nadia Amelia",
  "text": "Sukses selalu buat kariernya ya 🙌",
  "time": "2024-06-03T08:53",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "pixel.mu",
  "text": "Jujur ini keren banget, serius",
  "time": "2024-06-01T08:00",
  "photo": ""
 },
 {
  "name": "Mie_ayam",
  "text": "Baru nemu portofolio sekeren ini",
  "time": "2024-05-18T13:45",
  "photo": ""
 },
 {
  "name": "Selvi Lubis",
  "text": "Semoga cepat dapat magang di tempat impian ya",
  "time": "2024-05-18T06:41",
  "photo": ""
 },
 {
  "name": "Fajar Lubis",
  "text": "Auto bookmark 🔖",
  "time": "2024-05-11T13:20",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Putri Amelia",
  "text": "Bot Telegram pengingat absennya ide bagus banget",
  "time": "2024-05-11T01:08",
  "photo": ""
 },
 {
  "name": "Citra Hidayat",
  "text": "Semangat terus bang, sukses selalu!",
  "time": "2024-05-09T22:05",
  "photo": "assets/avatar/a12.svg"
 },
 {
  "name": "Tiara Nasution",
  "text": "Fresh graduate IPK 3,82 mantul",
  "time": "2024-05-06T10:47",
  "photo": ""
 },
 {
  "name": "Fikri Saputra",
  "text": "Jujur ini keren banget, serius",
  "time": "2024-05-02T14:30",
  "photo": ""
 },
 {
  "name": "Rizky Lubis",
  "text": "Dari kemarin buka terus, saking kerennya",
  "time": "2024-03-30T08:09",
  "photo": ""
 },
 {
  "name": "Selvi Putri",
  "text": "Inspiratif banget, makasih udah share",
  "time": "2024-03-29T19:03",
  "photo": "assets/avatar/a08.svg"
 },
 {
  "name": "Raka",
  "text": "Great portfolio, keep it up!",
  "time": "2024-03-28T22:16",
  "photo": "assets/avatar/a06.svg"
 },
 {
  "name": "Ilham Saputra",
  "text": "Salam kenal bang, keren karyanya",
  "time": "2024-03-26T06:58",
  "photo": "assets/avatar/a10.svg"
 },
 {
  "name": "Ival",
  "text": "Izin inspirasi buat tugas kuliah ya bang",
  "time": "2024-03-19T14:47",
  "photo": ""
 },
 {
  "name": "Farhan Fauzi",
  "text": "Gokil! React + Three.js emang beda",
  "time": "2024-03-16T04:27",
  "photo": ""
 },
 {
  "name": "Ilham Syahputra",
  "text": "Baru nemu portofolio sekeren ini",
  "time": "2024-03-14T00:33",
  "photo": "assets/avatar/a05.svg"
 },
 {
  "name": "Ngoding_pagi",
  "text": "Sistem Monev-nya kepikiran juga ya, solutif",
  "time": "2024-03-10T08:38",
  "photo": "assets/avatar/a01.svg"
 },
 {
  "name": "Priya S.",
  "text": "Great portfolio, keep it up!",
  "time": "2024-02-27T17:13",
  "photo": ""
 },
 {
  "name": "ramesh",
  "text": "Keren banget portofolionya!",
  "time": "2024-02-04T16:34",
  "photo": ""
 }
];
