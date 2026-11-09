/* ---------- Daftar sertifikat (dipakai ulang di Certificates, Achievements, Education & Experience) ----------
   image = pratinjau (webp) · file = PDF asli untuk diunduh. Tambah sertifikat baru di sini, lalu panggil dengan rel("namaKunci"). */
const SRT = {
  toeflIneo:    { title: "TOEFL Prediction Test · Ineo Academy",   desc: "TOEFL Prediction Test: skor total 647 (Listening 61, Structure 67, Reading 66). Tes 26 Juli 2026, berlaku sampai 26 Juli 2028.", image: "assets/sertifikat/toefl-ineo-academy.webp", file: "assets/sertifikat/toefl-ineo-academy.pdf" },
  toeflCentral: { title: "TOEFL Prediction Test · Central Course", desc: "TOEFL Prediction Test: skor total 600 (Listening 55, Structure 65, Reading 60). Tes 25 Juli 2026, berlaku sampai 25 Juli 2028.", image: "assets/sertifikat/toefl-central-course.webp", file: "assets/sertifikat/toefl-central-course.pdf" },
  mentor8:      { title: "Mentor Superteam Academy · Divisi Programmer Batch 8", desc: "UPTBKK Universitas Malikussaleh · 18 Feb – 15 Jul 2025.", image: "assets/sertifikat/mentor-superteam-academy.webp" },
  ketua7:       { title: "Ketua Superteam Academy UPTBKK Batch 7", desc: "Penghargaan kepemimpinan tim peserta Superteam Academy, UPTBKK Universitas Malikussaleh (2024).", image: "assets/sertifikat/ketua-superteam-batch7.webp", file: "assets/sertifikat/ketua-superteam-batch7.pdf" },
  peserta7:     { title: "Peserta Superteam Academy UPTBKK Batch 7", desc: "Sertifikat dan daftar nilai magang (MBKM) sebagai peserta Superteam Academy, UPTBKK Universitas Malikussaleh, 26 Agustus – 26 Desember 2024. Nilai rata-rata 91,57 (Sangat Memuaskan).", image: "assets/sertifikat/peserta-superteam-batch7.webp",
                  /* sisi belakang saat sertifikat diklik: tampil bergantian otomatis (depan ⇄ belakang), klik gambar = berhenti & bisa diunduh */
                  back: { label: "Daftar Nilai", image: "assets/sertifikat/nilai-magang-superteam-batch7.webp", file: "assets/sertifikat/nilai-magang-superteam-batch7.png" } },
  kpBkpsdm:     { title: "Kerja Praktik · BKPSDM Kota Medan", desc: "Sertifikat magang UI/UX Designer, Badan Kepegawaian dan Pengembangan Sumber Daya Manusia Kota Medan (Jan – Feb 2025).", image: "assets/sertifikat/kerja-praktik-bkpsdm-medan.webp" },
  kepsukPmm:    { title: "Kepala Suku · Pertukaran Mahasiswa Merdeka Batch 3", desc: "Perwakilan Universitas Malikussaleh sebagai Kepala Suku PMM Batch 3 (2023).", image: "assets/sertifikat/kepala-suku-pmm3.webp", file: "assets/sertifikat/kepala-suku-pmm3.pdf" },
  pesertaPmm:   { title: "Peserta Pertukaran Mahasiswa Merdeka Batch 3", desc: "Program PMM Batch 3 di Universitas Amikom Yogyakarta, Prodi Sistem Informasi (2023).", image: "assets/sertifikat/peserta-pmm3.webp", file: "assets/sertifikat/peserta-pmm3.pdf" },
  keynote:      { title: "Keynote Speaker · Malam Pelantikan Duta Ekobudaya Indonesia Batch 1", desc: "Pembicara utama pada malam pelantikan Duta Ekobudaya Indonesia Batch 1 (2026).", image: "assets/sertifikat/keynote-duta-ekobudaya.webp", file: "assets/sertifikat/keynote-duta-ekobudaya.pdf" },
  harapan1:     { title: "Harapan 1 · The Script of Untold Feelings", desc: "Juara Harapan 1 Nasional kompetisi penulisan naskah yang digagas Titik Tumbuh Pustaka dan Lutfi Gilang (2026).", image: "assets/sertifikat/achievement-harapan1-puisi.webp", file: "assets/sertifikat/achievement-harapan1-puisi.pdf" },
  juri3:        { title: "Juri Program Duta Ragam Nusantara Batch 3", desc: "Dewan juri seleksi Duta Ragam Nusantara Batch 3, PT. Tri Ragam Nusantara.", image: "assets/sertifikat/achievement-juri-drn-batch3.webp", file: "assets/sertifikat/achievement-juri-drn-batch3.pdf" },
  topLeader:    { title: "The Top Leader Award · Duta Ragam Nusantara Batch 2", desc: "Penghargaan atas peran memimpin, memotivasi, dan mengarahkan peserta selama program.", image: "assets/sertifikat/achievement-top-leader-drn-batch2.webp", file: "assets/sertifikat/achievement-top-leader-drn-batch2.pdf" },
  winner:       { title: "Winner Putera · Duta Ragam Nusantara Batch 2", desc: "Pemenang kategori Putera Duta Ragam Nusantara Batch 2.", image: "assets/sertifikat/achievement-winner-putera-drn-batch2.webp", file: "assets/sertifikat/achievement-winner-putera-drn-batch2.pdf" },
  penulisNov:   { title: "Penulis Terbaik Nasional · Selaksa Asa di Ujung Pena", desc: "Penulis terbaik tingkat nasional pada antologi Selaksa Asa di Ujung Pena (2025).", image: "assets/sertifikat/achievement-penulis-terbaik-nov-2025.webp", file: "assets/sertifikat/achievement-penulis-terbaik-nov-2025.pdf" },
  penulisJun:   { title: "Penulis Terbaik Nasional · Di Negeri Para Penyair", desc: "Penulis terbaik tingkat nasional pada antologi Di Negeri Para Penyair (2025).", image: "assets/sertifikat/achievement-penulis-terbaik-jun-agu-2025.webp", file: "assets/sertifikat/achievement-penulis-terbaik-jun-agu-2025.pdf" },
  /* --- Sekolah, kampus, organisasi --- */
  ketuaOsis:    { title: "Ketua Umum OSIS · SMA Dharmawangsa", desc: "Piagam penghargaan sebagai Ketua Umum OSIS SMA Swasta Dharmawangsa, masa bakti 2020 – 2021 (Medan, 14 Februari 2022).", image: "assets/sertifikat/ketua-osis-dharmawangsa.webp", file: "assets/sertifikat/ketua-osis-dharmawangsa.png" },
  hilo:         { title: "Juara 1 · Hilo Teen Creative Challenge", desc: "Juara 1 Hilo Teen Creative Challenge Design Thinking mewakili SMA Dharmawangsa Medan, 8 April 2021.", image: "assets/sertifikat/juara1-hilo-teen.webp", file: "assets/sertifikat/juara1-hilo-teen.png" },
  asc:          { title: "Panitia · Analyst Study Camp 2024", desc: "Panitia Analyst Study Camp 2024, Himpunan Mahasiswa Sistem Informasi Universitas Malikussaleh periode 2024 – 2025, Kabinet Cakrawala.", image: "assets/sertifikat/panitia-analyst-study-camp-2024.webp", file: "assets/sertifikat/panitia-analyst-study-camp-2024.pdf" },
  paragon:      { title: "Panitia · Superteam Academy x Paragon Campus Visit & Fun Talk", desc: "Sertifikat apresiasi sebagai panitia sosialisasi Career Preparation “Superteam Academy X Paragon Campus Visit & Fun Talk” oleh Superteam Academy, UPTBKK Universitas Malikussaleh, Lhokseumawe, 14 Oktober 2024.", image: "assets/sertifikat/panitia-paragon-campus-visit-2024.webp" },
  himasiHumas:  { title: "Anggota Bidang Hubungan Masyarakat · HIMASI Unimal", desc: "Sertifikat atas komitmen dan dedikasi selama satu periode sebagai Anggota Bidang Hubungan Masyarakat, Himpunan Mahasiswa Sistem Informasi Universitas Malikussaleh, Kabinet Rajut Aksara periode 2023 – 2024.", image: "assets/sertifikat/himasi-anggota-humas-rajut-aksara-2023-2024.webp" },
  pkkmbSi:      { title: "Mentor · PKKMB Sistem Informasi 2024", desc: "Sertifikat sebagai mentor kegiatan PKKMB Sistem Informasi 2024, Himpunan Mahasiswa Sistem Informasi Universitas Malikussaleh periode 2024 – 2025, Kabinet Cakrawala.", image: "assets/sertifikat/himasi-mentor-pkkmb-si-2024.webp" },
  transkrip:    { title: "Transkrip Nilai · Universitas Amikom Yogyakarta", desc: "Salinan nilai kumulatif PMM Batch 3: 7 mata kuliah, 20 SKS, semua nilai A, indeks prestasi 4,00 (30 Januari 2024).", image: "assets/sertifikat/transkrip-amikom-pmm3.webp", file: "assets/sertifikat/transkrip-amikom-pmm3.pdf" },

  kelulusan:    { title: "Surat Pengumuman Kelulusan · SMA Dharmawangsa", desc: "Pengumuman kelulusan SMA Swasta Dharmawangsa Medan: dinyatakan lulus, Medan, 5 Mei 2022.", image: "assets/sertifikat/kelulusan-sma-dharmawangsa.webp", file: "assets/sertifikat/kelulusan-sma-dharmawangsa.pdf" },

  /* --- Duta Ragam Nusantara (PT. Tri Ragam Nusantara) --- */
  projectDir3:  { title: "Project Director · Duta Ragam Nusantara Batch 3", desc: "Project Director kepanitiaan Duta Ragam Nusantara Batch 3, 1 Februari – 9 Maret 2026.", image: "assets/sertifikat/achievement-project-director-drn-batch3.webp", file: "assets/sertifikat/achievement-project-director-drn-batch3.pdf" },
  ketuaDrn2:    { title: "Ketua Umum · Duta Ragam Nusantara Batch 2", desc: "Ketua Umum Badan Pengurus Harian Duta Ragam Nusantara Batch 2 (SK 13 November 2025), masa pengabdian November 2025 – Maret 2026.", image: "assets/sertifikat/achievement-ketua-umum-drn-batch2.webp", file: "assets/sertifikat/achievement-ketua-umum-drn-batch2.pdf" },
  penulisDrn:   { title: "Penulis Buku · Kita, Kelana, dan Seisi Nusantara", desc: "Sertifikat apresiasi sebagai penulis pada event nulis buku Duta Ragam Nusantara berjudul “Kita, Kelana, dan Seisi Nusantara”.", image: "assets/sertifikat/achievement-penulis-buku-drn.webp", file: "assets/sertifikat/achievement-penulis-buku-drn.png" },
  pemilihanDrn2:{ title: "Peserta Pemilihan · Duta Ragam Nusantara Batch 2", desc: "Certificate of Participation sebagai peserta pemilihan Duta Ragam Nusantara Batch 2 (2025).", image: "assets/sertifikat/drn-peserta-pemilihan-batch2.webp", file: "assets/sertifikat/drn-peserta-pemilihan-batch2.png" },

  /* --- Webinar & Seminar (folder khusus: sertifikat/webinar/) --- */
  wbEkowisata:  { title: "Webinar Nasional · Ekowisata Berkelanjutan", desc: "Peserta webinar nasional “Peran Generasi Muda dalam Upaya Mewujudkan Ekowisata Berkelanjutan” oleh Duta Ragam Nusantara, 23 Desember 2025.", image: "assets/sertifikat/webinar/drn-webinar-ekowisata-2025.webp", file: "assets/sertifikat/webinar/drn-webinar-ekowisata-2025.png" },
  wbCoaching:   { title: "Coaching · Shine with Confidence", desc: "Peserta Coaching Exclusive kolaborasi Duta Ragam Nusantara dan Certified TikTokShop Indonesia by Tokopedia: “Shine with Confidence” (personal branding dan public speaking), 11 Oktober 2025.", image: "assets/sertifikat/webinar/drn-coaching-tokopedia-2025.webp", file: "assets/sertifikat/webinar/drn-coaching-tokopedia-2025.png" },
  wbBireuenkut: { title: "Panitia · Aksi Pilah Sampah PT PIM x Bireuenkut", desc: "Panitia kegiatan kolaborasi PT PIM dan Komunitas Bireuenkut: aksi pilah sampah, pengolahan sampah organik menjadi pupuk, dan mewarnai dengan sampah di Ekoduwisata Paya Nie, 4 Oktober 2025.", image: "assets/sertifikat/webinar/panitia-bireuenkut-pim-2025.webp", file: "assets/sertifikat/webinar/panitia-bireuenkut-pim-2025.pdf" },
  wbBireuenkutPeserta: { title: "Peserta · Aksi Bersih Lingkungan, Bireuen Bebas Sampah", desc: "Peserta kegiatan “Aksi Bersih Lingkungan, Bireuen Bebas Sampah” oleh Bireuenkut di Bukit Cinta Santewan Indah, Kota Juang, Kabupaten Bireuen: pembersihan area dan pengolahan sampah organik menjadi kompos, 9 November 2025.", image: "assets/sertifikat/webinar/peserta-bireuenkut-bersih-lingkungan-2025.webp" },
  wbNarsum:     { title: "Narasumber · Gen Z Unlocked", desc: "Narasumber pertama acara “Gen Z Unlocked: Hacks Kepemimpinan dan Personal Branding”, UPT Bimbingan Karir dan Kewirausahaan Universitas Malikussaleh, 1 November 2024.", image: "assets/sertifikat/webinar/narasumber-gen-z-unlocked-2024.webp", file: "assets/sertifikat/webinar/narasumber-gen-z-unlocked-2024.png" },
  wbSuper1:     { title: "Webinar · Quarter Life Crisis", desc: "Peserta webinar “Quarter Life Crisis” oleh Superteam Academy, UPT Bimbingan Karir dan Kewirausahaan Universitas Malikussaleh, 9 November 2024.", image: "assets/sertifikat/webinar/superteam-webinar-quarter-life-crisis.webp", file: "assets/sertifikat/webinar/superteam-webinar-quarter-life-crisis.pdf" },
  wbSuper2:     { title: "Webinar · A New Era of Gen Z", desc: "Peserta webinar “A New Era of Gen Z: Meraih Prestasi Menginspirasi Generasi” oleh Superteam Academy, 16 November 2024.", image: "assets/sertifikat/webinar/superteam-webinar-new-era-gen-z.webp", file: "assets/sertifikat/webinar/superteam-webinar-new-era-gen-z.pdf" },
  wbSuper3:     { title: "Webinar · The Power of Gen Z", desc: "Peserta webinar “The Power of Gen Z: CV Menarik, Karir Asyik” oleh Superteam Academy, 30 November 2024.", image: "assets/sertifikat/webinar/superteam-webinar-cv-menarik.webp", file: "assets/sertifikat/webinar/superteam-webinar-cv-menarik.pdf" },
  wbMandiri:    { title: "Webinar · Speak Confident in English", desc: "Peserta webinar “Speak Confident in English: How to Speak Naturally Like a Native Speaker” oleh Beasiswa Bintang Mandiri, MAI Institute, dan Mandiri Amal Insani Foundation.", image: "assets/sertifikat/webinar/mandiri-speak-confident-english.webp", file: "assets/sertifikat/webinar/mandiri-speak-confident-english.png" },
  wbMhRamadhan: { title: "Mental Health Advocate · Ramadhan Special Campaign", desc: "Peserta kampanye Ramadhan Special Campaign oleh MentalHealing.id, 11 Mei 2021.", image: "assets/sertifikat/webinar/mentalhealing-ramadhan-2021.webp", file: "assets/sertifikat/webinar/mentalhealing-ramadhan-2021.pdf" },
  wbPkVolunteer:{ title: "Volunteer · Produktifkuy Campaign", desc: "Peserta Produktifkuy’s Campaign: Volunteer Produktif, Kuy!, 26 April – 2 Mei 2021.", image: "assets/sertifikat/webinar/produktifkuy-volunteer-2021.webp", file: "assets/sertifikat/webinar/produktifkuy-volunteer-2021.pdf" },
  wbPkVideo:    { title: "Short Video Challenge · Produktifkuy", desc: "Peserta lomba Short Video Challenge bertema “Stay Productive & Creative during Pandemic”, 20 Januari – 10 Februari 2021.", image: "assets/sertifikat/webinar/produktifkuy-video-challenge-2021.webp", file: "assets/sertifikat/webinar/produktifkuy-video-challenge-2021.pdf" },
  wbPkWebinar8: { title: "Webinar · Lulus SNMPTN, Susah Gak Sih?", desc: "Peserta Produktifkuy Webinar #8 “Lulus SNMPTN, Susah Gak Sih?” Vol. 2, 23 Desember 2020.", image: "assets/sertifikat/webinar/produktifkuy-webinar-8-2020.webp", file: "assets/sertifikat/webinar/produktifkuy-webinar-8-2020.png" },
  wbMhResolution:{ title: "Mental Health Advocate · Mental Health Resolution 2021", desc: "Peserta kampanye Mental Health Resolution 2021 oleh MentalHealing.id, 30 Desember 2020.", image: "assets/sertifikat/webinar/mentalhealing-resolution-2021.webp", file: "assets/sertifikat/webinar/mentalhealing-resolution-2021.pdf" },
  wbDesa:       { title: "Seminar Nasional · Rural Development", desc: "Peserta seminar nasional Influencer Desa Indonesia dan Jaringan Alumni Luar Negeri: “Apa Sumbangsih Pemuda di Desa untuk Menuju Indonesia Maju 2045?”, 19 Desember 2020.", image: "assets/sertifikat/webinar/influencer-desa-2020.webp", file: "assets/sertifikat/webinar/influencer-desa-2020.pdf" },
  wbCampusFair: { title: "Campus Fair 2020 · Akademis.id", desc: "Sertifikat apresiasi sebagai peserta Campus Fair 2020 oleh Akademis.id.", image: "assets/sertifikat/webinar/campus-fair-2020.webp", file: "assets/sertifikat/webinar/campus-fair-2020.pdf" },
};
const rel = (...k) => k.map(x => SRT[x]).filter(Boolean);

/* =====================================================================
   ✏️  DATA.JS — ISI KONTEN (EDIT DI SINI SAJA)
   Semua teks, link, dan data portfolio ada di objek CONFIG ini.
   Tidak perlu menyentuh index.html / style.css / script.js untuk mengganti isi.
   ===================================================================== */
const CONFIG = {

  /* ---------- Umum ---------- */
  siteTitle: "Muhammad Riko Kuswoyo — Portfolio",
  name: "Muhammad Riko Kuswoyo",
  brand: "mdrkksy",                       // nama di footer
  nav: [                                     // menu navigasi atas
    { label: "Home",      target: "#home" },
    { label: "About",     target: "#about" },
    { label: "Portfolio", target: "#portfolio" },
    { label: "Contact",   target: "#contact" },
  ],

  /* ---------- Home / Hero ---------- */
  hero: {
    // Sapaan besar di atas: diketik → dihapus → diketik lagi (sama seperti subtitle). Maksimal 6, usahakan ≤ 20 huruf.
    greetings: [
      "Hai, pengunjung!",
      "Salam kenal ya!",
      "Selamat datang!",
      "Senang kamu mampir!",
      "Yuk, intip karyaku!",
    ],
    greetingTyping: { typeSpeed: 80, deleteSpeed: 40, pause: 1900, gap: 400 },
    // titleLight + titleBold dipakai sebagai sapaan di layar loading
    titleLight: "Hai,",
    titleBold:  "pengunjung!",
    // Subtitle berganti otomatis: diketik → dihapus mundur → diketik lagi, berulang terus.
    // Maksimal 5. Kosongkan ("") atau hapus baris yang tidak dipakai.
    subtitles: [
      "React & Three.js Enthusiast",
      "Junior Developer",
      "Web Developer",
      "3D Web Creator",
      "Problem Solver",
    ],
    typing: { typeSpeed: 70, deleteSpeed: 35, pause: 1500, gap: 350 },   // dalam milidetik
    text: "Berawal dari rasa penasaran, sekarang jadi passion. Aku suka bereksperimen dengan kode, mengeksplorasi teknologi baru, dan mengubah ide menjadi sesuatu yang nyata. Dari tampilan web yang menarik sampai interaksi 3D yang seru, aku selalu berusaha bikin sesuatu yang bukan cuma keren dilihat, tapi juga nyaman digunakan.",
    buttonPrimary:   { label: "Lihat Projek",  target: "#portfolio" },
    buttonSecondary: { label: "Hubungi Saya",  target: "#contact" },

    // Lencana status di samping ikon sosial media (enabled:false = sembunyikan)
    availability: { enabled: true, label: "Terbuka untuk kolaborasi", target: "#contact" },

    // Menu yang muncul saat tombol "Hubungi Saya" diklik.
    // type: "scroll" (menuju bagian halaman) · "download" (unduh file) · "link" (buka tautan)
    contactMenu: [
      { icon: "mail",     label: "Kirim Pesan",  desc: "Tulis pesan lewat formulir",  type: "scroll",   target: "#contact" },
      { icon: "download", label: "Unduh CV",     desc: "Format PDF · siap dibaca",    type: "download", file: "assets/dokumen/cv.pdf", saveAs: "CV-Muhammad-Riko-Kuswoyo.pdf",
        missing: "File CV belum ditaruh. Simpan CV kamu sebagai cv.pdf di folder assets/dokumen/" },
      { icon: "chat",     label: "Chat Instagram", desc: "Balas paling cepat di sini", type: "link",   social: "Instagram" },
    ],
  },

  /* ---------- Link sosial media (dipakai di Home & Contact) ----------
     Ganti url "#" dengan link asli, contoh: "https://github.com/alfariyusuff" */
  socials: [
    { name: "Instagram", handle: "@mdrkksy", url: "https://www.instagram.com/mdrkksy?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==" },
    { name: "TikTok",    handle: "@mdrkksy",  url: "https://www.tiktok.com/@mdrkksy?is_from_webapp=1&sender_device=pc" },
    { name: "GitHub",    handle: "@MRikoKuswoyo",  url: "https://github.com/MRikoKuswoyo" },
  ],

  /* ---------- About ---------- */
  about: {
    heading:  "About Me",
    greeting: "Hi, I’m",
    cvButton:   { label: "Lihat CV",      file: "assets/dokumen/cv.pdf" },        // tombol di bawah nama
    projButton: { label: "Lihat Projek",  target: "#portfolio" },     // tombol di bawah teks
    photo:    "assets/foto/foto-about.webp",         // foto utama (latar sudah transparan)
    photoReveal: "assets/foto/foto-about-hero.webp", // foto yang muncul di bawah kursor (kosong = tanpa efek)
    photoAlt: "Foto Muhammad Riko Kuswoyo",   // teks alternatif foto
    photoPlaceholder: "Ganti dengan fotomu",
    role:     "Fresh Graduate S1 Sistem Informasi",
    text: "dari Universitas Malikussaleh (IPK 3,82) yang berfokus pada pengembangan sistem dan web: mulai dari dokumentasi proses dan perancangan database (MySQL, PostgreSQL), desain UI/UX, hingga aplikasi dengan HTML, CSS, JavaScript, dan PHP (Laravel). Saat ini mencari kesempatan magang di bidang web development.",
    // Kalimat akan tampil: "Saya adalah [role] [text]"

    /* Education & Experience: klik item → halaman detail (tentang.html?i=slug). logo = file di folder logo/. color = warna aksen halaman detail. */
    education: [
      { slug: "unimal", title: "Universitas Malikussaleh", role: "S1 Sistem Informasi · Fakultas Teknik", meta: "Lhokseumawe, Aceh", tag: "IPK 3,82", year: "2022 – 2026",
        logo: "assets/logo/unimal.png", logoFull: "assets/logo/unimal-full.png", color: "#12a150",
        desc: "S1 Sistem Informasi · IPK 3,82",
        detail: {
          kategori: "Pendidikan Tinggi · S1",
          intro: "Kampus utama tempat aku menempuh S1 Sistem Informasi di Fakultas Teknik. Di sini aku belajar perancangan sistem, basis data, dan pengembangan web, sekaligus aktif memimpin angkatan, menjadi mentor mahasiswa baru, dan terlibat di komunitas serta organisasi.",
          fakta: [{ l: "Institusi", v: "Universitas Malikussaleh" }, { l: "Program", v: "S1 Sistem Informasi" }, { l: "Fakultas", v: "Teknik" }, { l: "Lokasi", v: "Lhokseumawe, Aceh" }, { l: "Periode", v: "2022 – 2026" }, { l: "Berdiri", v: "1969" }],
          sorotan: [{ v: "3,82", l: "IPK" }, { v: "4", l: "Tahun studi" }, { v: "2", l: "Mentor PKKMB" }, { v: "1", l: "Skripsi Naive Bayes" }],
          tentang: "Universitas Malikussaleh (Unimal) adalah perguruan tinggi negeri di Lhokseumawe, Aceh, yang berdiri sejak 1969. Program Studi Sistem Informasi berada di Fakultas Teknik dan memadukan ilmu komputer dengan kebutuhan organisasi: analisis kebutuhan, perancangan basis data, rekayasa perangkat lunak, hingga pengembangan aplikasi web.",
          peran: [
            "Ketua Angkatan Sistem Informasi (2022)",
            "Koordinator TDO Divisi Acara Mubes (2023)",
            "Kepala Suku Pertukaran Mahasiswa Merdeka Batch 3 mewakili Unimal (2023)",
            "Mentor PKKMB Teknik dan PKKMB Prodi Sistem Informasi (2024)",
            "Finalis Duta HUMAS Universitas Malikussaleh (2024)",
            "Skripsi: Analisis Sentimen Instagram Unimal dengan Naive Bayes Classifier (2026)"],
          tags: ["Sistem Informasi", "MySQL", "PostgreSQL", "Laravel", "UI/UX", "Analisis Sentimen"],
          sertifikat: ["kepsukPmm"] } },
      { slug: "amikom", title: "Universitas Amikom Yogyakarta", role: "Pertukaran Mahasiswa Merdeka Batch 3", meta: "Yogyakarta, DIY", tag: "IPS 4,00", year: "2023",
        logo: "assets/logo/amikom.png", logoFull: "assets/logo/amikom-full.png", color: "#9b27af",
        desc: "S1 Sistem Informasi · Fakultas Ilmu Komputer · IPS 4,00",
        detail: {
          kategori: "Pertukaran Mahasiswa Merdeka · Batch 3",
          intro: "Satu semester belajar di Universitas Amikom Yogyakarta lewat program Pertukaran Mahasiswa Merdeka (PMM) Batch 3. Aku mengambil 7 mata kuliah (20 SKS) dengan nilai A di semuanya, indeks prestasi semester 4,00.",
          fakta: [{ l: "Institusi", v: "Universitas Amikom Yogyakarta" }, { l: "Program", v: "S1 Sistem Informasi" }, { l: "Fakultas", v: "Ilmu Komputer" }, { l: "Lokasi", v: "Yogyakarta, DIY" }, { l: "Skema", v: "PMM Batch 3" }, { l: "Periode", v: "2023" }],
          sorotan: [{ v: "4,00", l: "IPS" }, { v: "7", l: "Mata kuliah" }, { v: "20", l: "SKS" }, { v: "A", l: "Semua nilai" }],
          tentang: "Universitas Amikom Yogyakarta berlokasi di Condong Catur, Sleman, dan dikenal dengan bidang komputer, teknologi informasi, dan multimedia. Lewat PMM, mahasiswa dari berbagai kampus belajar bersama, mengikuti modul kebangsaan (Modul Nusantara), dan mengenal keberagaman budaya dari dekat.",
          peran: [
            "Mahasiswa PMM Batch 3, Prodi Sistem Informasi (2023)",
            "Kepala Suku PMM Batch 3 mewakili Universitas Malikussaleh (2023)",
            "Kepala Suku terpilih mewakili kampus pada Kampus Merdeka Fair UGM, Graha Sabha (2023)",
            "Narasumber Podcast Lintas Budaya Sabang – Merauke (2023)"],
          tags: ["PMM Batch 3", "Pemrograman Web", "UI/UX", "Rekayasa Perangkat Lunak", "Multimedia"],
          tabel: { judul: "Mata kuliah yang diambil", head: ["Kode", "Mata Kuliah", "SKS", "Nilai"],
            rows: [["SI113", "Fotografi", "2", "A"], ["SI135", "Keamanan Perangkat Lunak", "2", "A"], ["CS031", "Modul Nusantara", "4", "A"], ["SI028", "Multimedia", "2", "A"],
                   ["SI118", "Pemrograman Web Lanjut", "4", "A"], ["SI040", "Rekayasa Perangkat Lunak", "4", "A"], ["TI103", "UI UX", "2", "A"]],
            foot: ["", "Total", "20", "IPS 4,00"] },
          sertifikat: ["pesertaPmm", "kepsukPmm", "transkrip"] } },
      { slug: "dharmawangsa", title: "SMA Dharmawangsa Medan", role: "Sekolah Menengah Atas · Jurusan MIPA", meta: "Medan, Sumatera Utara", tag: "MIPA", year: "2019 – 2022",
        logo: "assets/logo/dharmawangsa.png", color: "#e0262c",
        desc: "Sekolah Menengah Atas · Jurusan MIPA",
        detail: {
          kategori: "Pendidikan Menengah · SMA",
          intro: "Tempat aku menempuh pendidikan menengah atas di jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam). Dari sini kebiasaan berpikir logis, menulis, dan berbicara di depan umum mulai terbentuk, termasuk saat dipercaya menjadi Ketua Umum OSIS masa bakti 2020 – 2021.",
          fakta: [{ l: "Institusi", v: "SMA Dharmawangsa" }, { l: "Jurusan", v: "MIPA" }, { l: "Lokasi", v: "Medan, Sumatera Utara" }, { l: "Periode", v: "2019 – 2022" }, { l: "Status", v: "Lulus · 5 Mei 2022" }],
          sorotan: [{ v: "3", l: "Tahun" }, { v: "MIPA", l: "Jurusan" }, { v: "2021", l: "Juara 1 Hilo Teen" }, { v: "2020–21", l: "Ketua Umum OSIS" }, { v: "2022", l: "Lulus SMA" }],
          tentang: "SMA Dharmawangsa adalah sekolah menengah atas di Medan, Sumatera Utara. Jurusan MIPA membekali siswa dengan matematika, fisika, kimia, dan biologi, fondasi yang melatih logika dan ketelitian dan kemudian sangat terpakai di dunia pemrograman.",
          peran: ["Ketua Umum OSIS SMA Swasta Dharmawangsa, masa bakti 2020 – 2021", "Juara 1 Hilo Teen Creative Challenge Design Thinking (2021)", "Dinyatakan lulus SMA Dharmawangsa Medan (5 Mei 2022)"],
          tags: ["Matematika", "Fisika", "Kimia", "Biologi", "Menulis", "OSIS", "Design Thinking"],
          sertifikat: ["kelulusan", "ketuaOsis", "hilo"] } },
    ],
    experience: [
      { slug: "berbagia", title: "Intern · Berbagia.id", role: "Intern (belajar lintas bidang)", meta: "Yayasan Cipta Muda Berbagia", tag: "Magang", year: "10 Okt 2025 – 10 Okt 2026",
        logo: "assets/logo/berbagia.png", logoFull: "assets/logo/berbagia-full.png", color: "#2fb5a3",
        desc: "Yayasan Cipta Muda Berbagia (Berbagia.id)",
        detail: {
          kategori: "Magang Setahun · Kepemudaan, Volunteerism & Pemberdayaan Masyarakat",
          intro: "Magang selama satu tahun di Yayasan Cipta Muda Berbagia (Berbagia.id), lembaga nonprofit yang menggerakkan pemuda lewat kegiatan sukarela, edukasi kreatif, dan aksi sosial. Divisiku belajar semua bidang kerja yayasan.",
          fakta: [{ l: "Organisasi", v: "Yayasan Cipta Muda Berbagia (Berbagia.id)" }, { l: "Bidang", v: "Kepemudaan, volunteerism, pemberdayaan masyarakat" }, { l: "Posisi", v: "Intern, divisi belajar semua bidang" }, { l: "Periode", v: "10 Oktober 2025 – 10 Oktober 2026" }],
          sorotan: [{ v: "1 thn", l: "Durasi" }, { v: "3", l: "Fokus kegiatan" }, { v: "Semua", l: "Bidang dipelajari" }],
          tentang: "Berbagia.id adalah identitas digital Yayasan Cipta Muda Berbagia, lembaga nonprofit yang berfokus pada gerakan kepemudaan, volunteerism, dan pemberdayaan masyarakat. Wadah ini melatih pemuda menjadi pelopor perubahan lewat pengembangan diri, kreativitas, edutainment, dan aksi sosial nyata demi Indonesia yang lebih berdaya. Program unggulannya, Berbagia Take Over (BTO), adalah inkubasi kepemimpinan: pemuda dan mahasiswa dipercaya memimpin, menyusun, dan mengeksekusi proyek sosial serta edukasi secara mandiri, dan sudah berjalan dalam beberapa angkatan (seperti Batch II dan Batch III).",
          peran: [
            "Belajar semua bidang kerja yayasan selama satu tahun, dari perencanaan program sampai pelaksanaan kegiatan di lapangan",
            "Pemberdayaan dan pelatihan pemuda: melatih kerja sama tim, kepemimpinan, cara menghadapi tantangan, dan tanggung jawab berorganisasi secara praktis",
            "Proyek edukasi kreatif: terlibat dalam kelas keterampilan praktis untuk masyarakat, misalnya kelas lingkungan D.I.Y Class: Ecoprint Totebag pada acara Ramadan Fest",
            "Ruang diskusi publik (Berbagi Live On Stage): mendukung talkshow dan panggung edukasi interaktif tentang isu pemuda, dunia mahasiswa, kesehatan mental, dan realitas berorganisasi",
            "Beradaptasi dengan kebutuhan tiap bidang dan berkolaborasi dengan tim lintas divisi"],
          tags: ["Youth Empowerment", "Volunteerism", "Kepemimpinan", "Edukasi Kreatif", "Edutainment", "Aksi Sosial"],
          tautan: [{ label: "Lihat di Instagram", url: "https://www.instagram.com/p/DeeAxcsIDB3/" }] } },
      { slug: "duta-ragam-nusantara", title: "Juri · Duta Ragam Nusantara Batch 3", role: "Juri Program & Project Director", meta: "PT. Tri Ragam Nusantara, Yogyakarta", tag: "Juri", year: "Nov 2025 – Mar 2026",
        logo: "assets/logo/drn.png", logoFull: "assets/logo/drn-full.png", color: "#d4a017",
        desc: "PT. Tri Ragam Nusantara, Yogyakarta",
        detail: {
          kategori: "Budaya & Kepemudaan · Juri",
          intro: "Dipercaya sebagai juri sekaligus Project Director pada program Duta Ragam Nusantara Batch 3, ajang yang mengangkat keberagaman budaya Indonesia dan melibatkan anak muda sebagai duta edukasi. Sebelumnya aku menjadi peserta Batch 2 (Winner Putera dan The Top Leader Award), lalu dipercaya sebagai Ketua Umum Batch 2 periode November 2025 – Maret 2026.",
          fakta: [{ l: "Penyelenggara", v: "PT. Tri Ragam Nusantara" }, { l: "Posisi", v: "Juri Program & Project Director (Batch 3) · Ketua Umum (Batch 2)" }, { l: "Lokasi", v: "Yogyakarta" }, { l: "Program", v: "Duta Ragam Nusantara Batch 2 & 3" }],
          sorotan: [{ v: "9", l: "Sertifikat DRN" }, { v: "Batch 3", l: "Juri & Project Director" }, { v: "Batch 2", l: "Ketua Umum & peserta" }, { v: "4 bln", l: "Masa jabatan Ketua Umum" }],
          tentang: "Duta Ragam Nusantara adalah program yang menyatukan anak muda dari berbagai daerah untuk mengenal, merawat, dan mempromosikan keberagaman budaya Indonesia melalui edukasi, konten, dan pelibatan komunitas.",
          peran: ["Project Director kepanitiaan Duta Ragam Nusantara Batch 3 (1 Februari – 9 Maret 2026)", "Ketua Umum Badan Pengurus Harian Duta Ragam Nusantara Batch 2 (SK 13 November 2025, November 2025 – Maret 2026)", "Menilai peserta berdasarkan wawasan, komunikasi, dan kepemimpinan", "Memberi masukan yang membangun kepada peserta", "Menjaga objektivitas dan keadilan selama penjurian", "Penulis pada buku “Kita, Kelana, dan Seisi Nusantara”; peserta coaching personal branding dan webinar ekowisata berkelanjutan"],
          tags: ["Penjurian", "Project Director", "Ketua Umum", "Komunikasi Publik", "Keberagaman Budaya", "Kepemimpinan"],
          sertifikat: ["projectDir3", "juri3", "ketuaDrn2", "topLeader", "winner", "pemilihanDrn2", "penulisDrn", "wbCoaching", "wbEkowisata"] } },
      { slug: "superteam-academy", title: "Mentor Programmer · Superteam Academy", role: "Mentor Divisi Programmer Batch 8", meta: "UPTBKK Universitas Malikussaleh", tag: "Mentor", year: "18 Feb – 15 Jul 2025",
        logo: "assets/logo/superteam.png", logoFull: "assets/logo/superteam-full.png", color: "#34d3a1",
        desc: "UPTBKK Universitas Malikussaleh (Batch 8)",
        detail: {
          kategori: "Pendidikan & Pelatihan · Mentoring",
          intro: "Menjadi mentor divisi Programmer di Superteam Academy Batch 8, setelah sebelumnya ikut sebagai peserta dan Ketua pada Batch 7. Aku menyusun materi, membimbing tim, dan menilai kemajuan peserta.",
          fakta: [{ l: "Program", v: "Superteam Academy" }, { l: "Penyelenggara", v: "UPTBKK Universitas Malikussaleh" }, { l: "Posisi", v: "Mentor Divisi Programmer" }, { l: "Periode", v: "18 Feb – 15 Jul 2025" }],
          sorotan: [{ v: "Batch 8", l: "Sebagai mentor" }, { v: "Batch 7", l: "Sebagai Ketua" }, { v: "5 bln", l: "Durasi mentoring" }],
          tentang: "Superteam Academy adalah program pelatihan dan magang berbasis proyek di UPTBKK Universitas Malikussaleh yang menyiapkan mahasiswa menghadapi dunia kerja.",
          peran: [
            "Menyusun dan menyampaikan materi pemrograman web (HTML, CSS, JavaScript) serta pengantar basis data sesuai kebutuhan peserta",
            "Membimbing tim peserta dalam proyek berbasis masalah: perencanaan, implementasi, uji fungsional, dan dokumentasi",
            "Melakukan code review berkala dan memberi umpan balik terstruktur: kualitas kode, keamanan data dasar, praktik CRUD yang baik",
            "Mengelola evaluasi pembelajaran dan laporan kemajuan; mengoordinasikan jadwal klinik kode lewat surel dan WhatsApp"],
          tags: ["HTML", "CSS", "JavaScript", "Basis Data", "Code Review", "CRUD"],
          sertifikat: ["mentor8", "ketua7", "peserta7", "paragon"] } },
      { slug: "melofest", title: "Show Management & Logistik · Melofest.id", role: "Show Management dan Logistik", meta: "Melofest.id by omarjayaid", tag: "Event", year: "Mar 2025 – Mei 2025",
        logo: "assets/logo/melofest.png", logoFull: "assets/logo/melofest-full.png", color: "#ff7a45", mono: "ME",
        desc: "Melofest.id by omarjayaid",
        detail: {
          kategori: "Penyelenggaraan Acara · Show Management",
          intro: "Terlibat di balik panggung festival musik Melofest.id: memastikan logistik, jadwal teknis, dan koordinasi penampil berjalan sesuai rundown.",
          fakta: [{ l: "Acara", v: "Melofest.id by omarjayaid" }, { l: "Posisi", v: "Show Management dan Logistik" }, { l: "Periode", v: "Maret – Mei 2025" }],
          sorotan: [{ v: "3 bln", l: "Durasi" }, { v: "Panggung", l: "Area kerja" }],
          tentang: "Melofest.id adalah acara musik yang diselenggarakan oleh omarjayaid. Peranku menjaga alur panggung dan belakang panggung agar setiap segmen tampil tepat waktu.",
          peran: [
            "Membantu persiapan dan pelaksanaan logistik acara, mencakup area panggung dan belakang panggung",
            "Berkoordinasi dengan kebutuhan penampil serta penjadwalan kru teknis saat gladi dan saat pertunjukan berlangsung",
            "Bekerja di bawah tenggat ketat agar setiap segmen berjalan sesuai rundown resmi",
            "Menjalin komunikasi dengan vendor, MC, dan tim produksi agar transisi antarsesi lancar",
            "Mendukung evaluasi pascaacara terkait alur pelaksanaan, logistik, dan dukungan teknis di lokasi"],
          tags: ["Show Management", "Logistik", "Rundown", "Koordinasi Vendor", "Gladi"],
          tautan: [{ label: "Instagram @melofest.id", url: "https://www.instagram.com/melofest.id" }] } },
      { slug: "bkpsdm-medan", title: "UI/UX Designer · BKPSDM Kota Medan", role: "UI/UX Designer", meta: "BKPSDM Kota Medan", tag: "Magang", year: "Jan 2025 – Feb 2025",
        logo: "assets/logo/bkpsdm.png", logoFull: "assets/logo/bkpsdm-full.jpg", color: "#2f6bff",
        desc: "BKPSDM Kota Medan",
        detail: {
          kategori: "Pemerintahan · UI/UX Design",
          intro: "Magang di Badan Kepegawaian dan Pengembangan Sumber Daya Manusia Kota Medan sebagai UI/UX Designer untuk sistem informasi kepegawaian, dari riset kebutuhan sampai prototype di Figma.",
          fakta: [{ l: "Instansi", v: "BKPSDM Kota Medan" }, { l: "Posisi", v: "UI/UX Designer" }, { l: "Periode", v: "Jan – Feb 2025" }, { l: "Alat", v: "Figma" }],
          sorotan: [{ v: "2 bln", l: "Durasi" }, { v: "Figma", l: "Prototype" }, { v: "UX", l: "Usability testing" }],
          tentang: "BKPSDM Kota Medan mengelola kepegawaian dan pengembangan SDM aparatur Pemerintah Kota Medan. Sistem informasinya perlu antarmuka yang konsisten dan mudah dipakai.",
          peran: [
            "Merancang antarmuka dan alur pengguna (user flow) untuk sistem informasi kepegawaian, dari riset kebutuhan sampai prototype di Figma",
            "Membuat wireframe dan mockup dengan memperhatikan konsistensi tata letak, tipografi, dan skema warna sesuai identitas instansi",
            "Melakukan usability testing bersama pengguna internal dan iterasi desain berdasarkan umpan balik",
            "Berkoordinasi dengan developer agar implementasi sesuai spesifikasi teknis dan kebutuhan pengguna"],
          tags: ["Figma", "Wireframe", "Mockup", "User Flow", "Usability Testing"],
          sertifikat: ["kpBkpsdm"] } },
      { slug: "uptbkk-unimal", title: "Programmer · UPTBKK Universitas Malikussaleh", role: "Programmer", meta: "UPTBKK Universitas Malikussaleh", tag: "Magang", year: "26 Agu – 26 Des 2024",
        logo: "assets/logo/uptbkk.png", logoFull: "assets/logo/uptbkk-full.png", color: "#f0b35a",
        desc: "UPTBKK Universitas Malikussaleh",
        detail: {
          kategori: "Pengembangan Perangkat Lunak · Programmer",
          intro: "Mengembangkan portal karier dan pelatihan UPTBKK Universitas Malikussaleh: pendaftaran acara, e-sertifikat, pengingat otomatis, manajemen lowongan dan kemitraan, hingga dashboard pelaporan.",
          fakta: [{ l: "Unit", v: "UPTBKK Universitas Malikussaleh" }, { l: "Posisi", v: "Programmer" }, { l: "Periode", v: "26 Agustus – 26 Desember 2024" }],
          sorotan: [{ v: "4", l: "Area kerja" }, { v: "API", l: "Integrasi formulir" }, { v: "4 bln", l: "Durasi" }],
          tentang: "UPTBKK (Unit Pelaksana Teknis Bursa Kerja Khusus) menjembatani mahasiswa dan alumni dengan dunia kerja lewat lowongan, pelatihan, dan kemitraan perusahaan.",
          peran: [
            "Mengembangkan fitur portal karier dan pelatihan: pendaftaran acara, e-sertifikat, serta pengingat lewat surel dan WhatsApp",
            "Membangun modul manajemen lowongan dan kemitraan perusahaan (CRUD), termasuk pencarian dan penyaringan",
            "Merancang skema basis data dan API untuk integrasi formulir; mengotomatisasi rekap kehadiran dan penerbitan sertifikat",
            "Menyusun dashboard pelaporan kegiatan bagi pimpinan, disertai pengujian fungsional, perbaikan bug, dan dokumentasi teknis"],
          tags: ["CRUD", "Basis Data", "REST API", "Dashboard", "E-Sertifikat", "Otomasi"],
          sertifikat: ["peserta7", "paragon"] } },
    ],

    /* Pengalaman organisasi (dari CV) */
    organization: [
      { slug: "kejar-mimpi", title: "Kejar Mimpi Lhokseumawe by CIMB Niaga", role: "Anggota Public Relation", meta: "Komunitas", tag: "PR", year: "",
        logo: "assets/logo/kejar-mimpi.png", logoFull: "assets/logo/kejar-mimpi-full.png", color: "#e5282b",
        desc: "Anggota Public Relation",
        detail: {
          kategori: "Komunitas · Public Relation",
          intro: "Anggota Public Relation di komunitas Kejar Mimpi Lhokseumawe by CIMB Niaga: mengelola sponsor, promosi acara, dan menjadi penghubung antara panitia, peserta, dan pihak eksternal.",
          fakta: [{ l: "Organisasi", v: "Kejar Mimpi Lhokseumawe by CIMB Niaga" }, { l: "Posisi", v: "Anggota Public Relation" }, { l: "Lokasi", v: "Lhokseumawe" }],
          sorotan: [{ v: "3+", l: "Sponsor utama" }, { v: "3+", l: "Acara dipromosikan" }, { v: "~30%", l: "Kenaikan partisipasi" }, { v: "50+", l: "Permintaan ditangani" }],
          tentang: "Kejar Mimpi adalah komunitas anak muda di Lhokseumawe. Aku juga menjadi pembawa acara pada perayaan ulang tahun komunitas ini (2025).",
          peran: [
            "Memimpin komunikasi dengan lebih dari tiga sponsor utama; mencakup negosiasi paket manfaat (benefit) dan pemenuhan kewajiban kontrak kerja sama",
            "Mengoordinasikan promosi lebih dari tiga acara lewat strategi multikanal (online dan offline); partisipasi peserta naik sekitar 30% dibanding acara sebelumnya",
            "Menjadi penghubung utama panitia, peserta, dan pihak eksternal; menangani lebih dari lima puluh permintaan khusus (perubahan jadwal, akses, dukungan teknis, informasi sponsorship)"],
          tags: ["Public Relation", "Sponsorship", "Negosiasi", "Promosi Multikanal", "Event"] } },
      { slug: "hmsi-unimal", title: "Himpunan Mahasiswa Sistem Informasi", role: "Anggota Public Relation", meta: "Universitas Malikussaleh", tag: "PR", year: "",
        logo: "assets/logo/himasi.png", logoFull: "assets/logo/himasi-full.png", color: "#1f3fbf",
        desc: "Anggota Public Relation · Universitas Malikussaleh",
        detail: {
          kategori: "Organisasi Mahasiswa · Public Relation",
          intro: "Mengelola komunikasi publik himpunan lewat Instagram resmi dan menjadi koordinator lapangan acara tahunan jurusan dengan lebih dari 500 peserta.",
          fakta: [{ l: "Organisasi", v: "Himpunan Mahasiswa Sistem Informasi" }, { l: "Kampus", v: "Universitas Malikussaleh" }, { l: "Posisi", v: "Anggota Public Relation (Bidang Hubungan Masyarakat)" }, { l: "Kabinet", v: "Rajut Aksara 2023 – 2024 · Cakrawala 2024 – 2025" }],
          sorotan: [{ v: "~40%", l: "Naik engagement" }, { v: "500+", l: "Peserta acara" }, { v: "Mingguan", l: "Kalender konten" }],
          tentang: "Himpunan Mahasiswa Sistem Informasi adalah wadah mahasiswa Prodi Sistem Informasi Universitas Malikussaleh untuk berorganisasi dan berkegiatan.",
          peran: [
            "Mengelola komunikasi publik di Instagram resmi: kalender konten mingguan, copywriting, merespons DM/komentar, dan memantau insight; engagement naik sekitar 40% dibanding rata-rata tiga bulan sebelumnya (total interaksi per unggahan dan engagement rate)",
            "Koordinator lapangan acara tahunan jurusan dengan lebih dari 500 peserta: perizinan lokasi, alur registrasi, brief relawan, koordinasi vendor, serta pengaturan FOH dan BOH agar transisi sesi sesuai rundown",
            "Anggota Bidang Hubungan Masyarakat selama satu periode, Himpunan Mahasiswa Sistem Informasi Universitas Malikussaleh, Kabinet Rajut Aksara 2023 – 2024",
            "Mentor kegiatan PKKMB Sistem Informasi 2024, Kabinet Cakrawala periode 2024 – 2025",
            "Panitia Analyst Study Camp 2024, Himpunan Mahasiswa Sistem Informasi Universitas Malikussaleh periode 2024 – 2025, Kabinet Cakrawala"],
          tags: ["Instagram", "Copywriting", "Insight", "Koordinator Lapangan", "FOH/BOH"],
          sertifikat: ["himasiHumas", "pkkmbSi", "asc"] } },
    ],

    /* Capaian (dari CV). slug = tautan ke halaman detail · cert = kunci SRT (membuka sertifikat) */
    capaian: [
      { title: "Keynote Speaker · Malam Pelantikan Duta Ekobudaya Indonesia Batch 1", year: "2026", cert: "keynote" },
      { title: "Project Director Duta Ragam Nusantara Batch 3", year: "2026", cert: "projectDir3" },
      { title: "Narasumber Talkshow Sore Ceria · RRI Pro 2 FM Lhokseumawe", year: "2025", url: "https://rri.co.id/lhokseumawe/berita-lain/2048861/muhammad-riko-kuswoyo-si-paling-aktif-berprestasi" },
      { title: "Ketua Umum Duta Ragam Nusantara Batch 2", year: "2025", cert: "ketuaDrn2" },
      { title: "Winner Putera Duta Ragam Nusantara Batch 2", year: "2025", cert: "winner" },
      { title: "Juri Program Duta Ragam Nusantara Batch 3", year: "2025", cert: "juri3" },
      { title: "Pembawa Acara Perayaan Ulang Tahun Komunitas Kejar Mimpi Lhokseumawe", year: "2025", slug: "kejar-mimpi" },
      { title: "Mentor Superteam Academy UPTBKK Divisi Programmer Batch 8", year: "2025", cert: "mentor8" },
      { title: "Narasumber Head of Superteam Academy", year: "2025", slug: "superteam-academy" },
      { title: "Terbit Jurnal Pertama di Google Scholar: Strategi Perlindungan Tenaga Kerja di Era Kecerdasan Artifisial, Studi Kasus pada Sektor Industri Manufaktur", year: "2025", url: "https://garuda.kemdiktisaintek.go.id/documents/detail/5295899" },
      { title: "Finalis Duta HUMAS Universitas Malikussaleh", year: "2024", url: "https://www.instagram.com/p/C7vPWVfywko/" },
      { title: "Mentor PKKMB Teknik, Universitas Malikussaleh", year: "2024" },
      { title: "Mentor PKKMB Prodi Sistem Informasi, Universitas Malikussaleh", year: "2024", cert: "pkkmbSi" },
      { title: "Narasumber Gen Z Unlocked: Hacks Kepemimpinan dan Personal Branding, UPT Bimbingan Karir dan Kewirausahaan Unimal", year: "2024", cert: "wbNarsum" },
      { title: "Panitia Analyst Study Camp 2024, HIMASI Universitas Malikussaleh", year: "2024", cert: "asc" },
      { title: "Panitia Superteam Academy x Paragon Campus Visit & Fun Talk, UPTBKK Universitas Malikussaleh", year: "2024", cert: "paragon" },
      { title: "Ketua Superteam Academy UPTBKK Batch 7", year: "2024", cert: "ketua7" },
      { title: "Koordinator TDO Divisi Acara Mubes", year: "2023" },
      { title: "Anggota Bidang Hubungan Masyarakat HIMASI Universitas Malikussaleh, Kabinet Rajut Aksara", year: "2023 – 2024", cert: "himasiHumas" },
      { title: "Kepala Suku Pertukaran Mahasiswa Merdeka Batch 3, Universitas Malikussaleh", year: "2023", cert: "kepsukPmm" },
      { title: "Mahasiswa Pertukaran Mahasiswa Merdeka (PMM) Batch 3, Prodi Sistem Informasi, Universitas Amikom Yogyakarta", year: "2023", cert: "pesertaPmm" },
      { title: "Narasumber Podcast Lintas Budaya Sabang – Merauke", year: "2023" },
      { title: "Kepala Suku Terpilih Mewakili Kampus Merdeka Fair UGM, Graha Sabha", year: "2023" },
      { title: "Ketua Angkatan Sistem Informasi", year: "2022" },
      { title: "Pendiri dan Host Ratapih Podcast (eksklusif di Spotify)", year: "2022", url: "https://open.spotify.com/show/6uITyPk1veynyR6tZI57zs" },
      { title: "Ketua Umum OSIS SMA Dharmawangsa Medan, masa bakti 2020 – 2021", year: "2021", cert: "ketuaOsis" },
      { title: "Juara 1 Hilo Teen Creative Challenge Design Thinking", year: "2021", cert: "hilo" },
      { title: "Lulus SMA Swasta Dharmawangsa Medan", year: "2022", cert: "kelulusan" },
    ],

    /* Kemampuan & bahasa (dari CV) */
    skills: {
      personalTitle: "Kemampuan Personal",
      personal: ["Kepemimpinan & koordinasi tim", "Komunikasi efektif, lisan dan tulisan", "Berbicara di depan umum: presentasi, MC, moderator", "Kerja sama tim & kolaborasi lintas fungsi", "Pemecahan masalah & keputusan cepat", "Adaptif di lingkungan dinamis"],
      technicalTitle: "Kemampuan Teknikal",
      technical: [
        "Perencanaan kampanye komunikasi dan publikasi (strategi, tujuan, kalender eksekusi)",
        "Pembuatan konten podcast dan vlog: riset, naskah, produksi, penyuntingan",
        "Pengelolaan media sosial Instagram dan TikTok: kalender konten, optimasi jangkauan dan interaksi",
        "Copywriting dan naskah untuk pembawa acara serta moderator",
        "Materi promosi dengan Canva yang konsisten dengan identitas acara/brand",
        "Penyuntingan video (CapCut, Adobe Premiere) dan audio (Audacity, Anchor)",
        "Analisis performa media sosial dan laporan engagement (jangkauan, interaksi, rasio keterlibatan)",
        "Microsoft Office dan Google Workspace (Docs, Sheets, Slides), laporan profesional dan tabel pivot",
        "Dasar pengembangan web dan CMS WordPress, HTML dan CSS yang aplikatif",
        "SQL: kueri sederhana untuk kebutuhan pelaporan",
        "Manajemen proyek dan acara: Trello, Notion, Asana",
        "Dokumen operasional acara: TOR, susunan acara, SOP"],
      languageTitle: "Penguasaan Bahasa",
      languages: [
        { name: "Bahasa Indonesia", level: "Penutur asli · mahir tulis-lisan, presentasi, dan moderasi" },
        { name: "Bahasa Inggris", level: "Menengah–atas · korespondensi, presentasi, diskusi kerja" }],
      toefl: [{ label: "TOEFL 647 · Ineo Academy", cert: "toeflIneo" }, { label: "TOEFL 600 · Central Course", cert: "toeflCentral" }],
    },

    // Angka statistik. Kosongkan "value" ("auto") untuk dihitung otomatis dari data portfolio di bawah.
    stats: [
      { value: "auto", label: "PROJECTS",     desc: "Karya yang dibuat",      source: "projects" },
      { value: "auto", label: "CERTIFICATES", desc: "Skill yang divalidasi",  source: "certificates" },
      { value: "auto", label: "AWARDS",       desc: "Pencapaian diraih",      source: "achievements" },
    ],
  },

  /* ---------- Musik ---------- */
  music: {
    titleLine1: "A little music.",
    titleLine2: "A lot of ideas.",
    text: "Musik yang menemani proses saya mengubah ide menjadi sesuatu yang nyata. Intip playlist yang sedang sering saya putar.",
    // Link playlist Spotify (tinggal tempel link "Share" dari Spotify; pemutarnya muncul otomatis)
    spotifyUrl: "https://open.spotify.com/playlist/6qTTqWCkRHQ0d9WGW3S64q?si=37f73a38d8e74bcb",
    button: { label: "Daily Rotation di Spotify", url: "https://open.spotify.com/playlist/6qTTqWCkRHQ0d9WGW3S64q?si=37f73a38d8e74bcb" },
    // (tidak ditampilkan lagi — daftar lagu diambil langsung dari Spotify)
    playlistName: "NgodingTime",
    playlistOwner: "Gyzeennnpro",
    tracks: [
      { title: "Right Now",                     artist: "One Direction",         time: "03:20" },
      { title: "Love Story (Taylor’s Version)", artist: "Taylor Swift",          time: "03:55" },
      { title: "Payphone",                      artist: "Maroon 5, Wiz Khalifa", time: "03:51" },
    ],
  },

  /* ---------- Portfolio (isi tab) ---------- */
  portfolio: {
    heading: "Portfolio",
    tabs: [                                   // label tab
      { key: "projects",     label: "Projects" },
      { key: "certificates", label: "Certificates" },
      { key: "achievements", label: "Achievements" },
      { key: "webinars",     label: "Webinar & Seminar" },
      { key: "techStack",    label: "Tech Stack" },
    ],

    // Diambil dari github.com/MRikoKuswoyo. slug = alamat halaman detail (project.html?p=slug). image = flyer di folder flyer/. detail = isi halaman detail.
    projects: [
      { slug: "sim-diklat", title: "SIM Diklat",
        desc:  "Sistem Informasi Manajemen Diklat BBGTK Provinsi Sumatera Utara: kelola judul diklat, materi, kelas, peserta, narasumber, dan panitia, lengkap dengan portal peserta, import/export Excel, dan sertifikat digital PDF. Next.js, Tailwind CSS, Prisma, MySQL.",
        tags:  ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
        image: "assets/flyer/sim-diklat.png", url: "https://github.com/MRikoKuswoyo/sim-diklat",
        detail: {
          kategori: "Web App · Manajemen Diklat",
          intro: "Sistem informasi untuk mengelola seluruh siklus diklat di BBGTK Provinsi Sumatera Utara, mulai dari judul diklat dan materi, pembuatan kelas lewat wizard 4 langkah, pengelolaan peserta, narasumber, dan panitia, sampai penerbitan sertifikat digital dalam format PDF.",
          tech: [["Next.js", "nextdotjs"], ["Tailwind CSS", "tailwindcss"], ["Prisma", "prisma"], ["MySQL", "mysql"], ["JWT", "jsonwebtokens"], ["pdf-lib", ""]],
          sorotan: [{ v: "4", l: "Langkah wizard kelas" }, { v: "5", l: "Modul data utama" }, { v: "PDF", l: "Sertifikat digital" }, { v: "XLSX", l: "Import / export peserta" }],
          fitur: [
            { t: "Dashboard", d: "Ringkasan data diklat, kelas, dan peserta dalam satu layar." },
            { t: "Judul Diklat & Materi", d: "Kelola daftar judul diklat beserta materi pembelajarannya." },
            { t: "Wizard Kelas Baru", d: "Buat kelas lewat 4 langkah: judul, jadwal & lokasi, narasumber & panitia, kuota & review." },
            { t: "Peserta, Narasumber, Panitia", d: "Data terpusat dengan peran yang jelas untuk tiap kelas." },
            { t: "Portal Peserta", d: "Peserta melihat kelas dan mengakses sertifikatnya sendiri." },
            { t: "Import / Export Excel", d: "Unggah dan unduh data peserta dalam format .xlsx." },
            { t: "Sertifikat Digital PDF", d: "Sertifikat diterbitkan otomatis dalam PDF dengan nomor sertifikat." },
            { t: "Autentikasi JWT", d: "Akses dibatasi berdasarkan login dan peran pengguna." }],
          alur: ["Admin login dan menyiapkan judul diklat serta materi", "Membuat kelas baru lewat wizard 4 langkah", "Peserta, narasumber, dan panitia ditambahkan (bisa import Excel)", "Kelas berjalan dan peserta mengakses portal", "Sertifikat digital PDF diterbitkan"],
          struktur: "Next.js (App Router) · Prisma ORM · MySQL · Tailwind CSS · pdf-lib" } },
      { slug: "monev-notification-engine", title: "Monev Notification Engine",
        desc:  "Sistem monitoring absen & logbook peserta MagangHub dengan notifikasi real-time dan pengingat Telegram. Next.js 14 + Supabase (PostgreSQL), jadwal Senin–Jumat 08.00–00.00 WIB.",
        tags:  ["Next.js", "Supabase", "PostgreSQL", "Telegram Bot"],
        image: "assets/flyer/monev-notification-engine.png", url: "https://github.com/MRikoKuswoyo/monev-notification-engine",
        detail: {
          kategori: "Otomasi · Monitoring",
          intro: "Mesin pemantau absen dan logbook peserta MagangHub. Sistem mengecek status secara berkala, menampilkannya di dashboard real-time, dan mengirim pengingat ke Telegram supaya tidak ada absen atau logbook yang terlewat.",
          tech: [["Next.js 14", "nextdotjs"], ["Supabase", "supabase"], ["PostgreSQL", "postgresql"], ["Telegram Bot", "telegram"], ["Tailwind CSS", "tailwindcss"]],
          sorotan: [{ v: "5", l: "Hari aktif (Sen–Jum)" }, { v: "16 jam", l: "Jendela 08.00–00.00 WIB" }, { v: "10 mnt", l: "Interval pengingat ulang" }, { v: "3/5/10", l: "Streak pencapaian" }],
          fitur: [
            { t: "Monitor Real-time", d: "Status absen dan logbook peserta tampil langsung di dashboard." },
            { t: "Pengingat Telegram", d: "Bot mengirim notifikasi tepat waktu lengkap dengan tombol aksi." },
            { t: "Jadwal WIB", d: "Absen masuk 08.00–09.00, logbook 15.30 dan 20.00, absen pulang 16.30–17.00." },
            { t: "Deadline Logbook", d: "Pengingat 23.00–00.00, satu jam sebelum jendela ditutup." },
            { t: "Pengulangan Otomatis", d: "Pengingat diulang tiap 10 menit sampai tugas selesai." },
            { t: "Tunda 30 Menit", d: "Tombol untuk mengingatkan lagi setengah jam kemudian." },
            { t: "Perintah /status", d: "Cek kondisi hari ini langsung dari chat Telegram." },
            { t: "Streak Pencapaian", d: "Lencana untuk rangkaian 3, 5, dan 10 hari berturut-turut." }],
          alur: ["Penjadwal berjalan Senin–Jumat 08.00–00.00 WIB", "Sistem membaca status absen dan logbook peserta", "Data disimpan di Supabase (PostgreSQL)", "Bot Telegram mengirim pengingat sesuai jadwal", "Dashboard memperbarui status dan streak"],
          struktur: "Next.js 14 · Supabase (PostgreSQL) · Telegram Bot API · Tailwind CSS" } },
      { slug: "misi-coder-bot", title: "Misi Coder-Bot",
        desc:  "Game edukasi dasar pemrograman untuk anak SD. Susun kartu perintah, jalankan robot, capai finish!",
        tags:  ["React", "PHP", "MySQL", "Game"],
        image: "assets/flyer/misi-coder-bot.png", url: "https://github.com/MRikoKuswoyo/game-programmer-robot",
        detail: {
          kategori: "Game Edukasi · Dasar Pemrograman",
          intro: "Game untuk mengenalkan berpikir logis dan dasar pemrograman kepada anak SD. Pemain menyusun kartu perintah, menjalankan robot di peta, dan berusaha mencapai finish dengan langkah seefisien mungkin.",
          tech: [["React 18", "react"], ["Vite", "vite"], ["Supabase", "supabase"], ["Vercel", "vercel"], ["PHP", "php"], ["MySQL", "mysql"]],
          sorotan: [{ v: "15", l: "Level" }, { v: "7", l: "Kartu perintah" }, { v: "4", l: "Peringkat" }, { v: "SD", l: "Target pemain" }],
          fitur: [
            { t: "Kartu Perintah", d: "Maju, Mundur, Kanan, Kiri, Balik, Ambil, dan Ulangi disusun seperti puzzle." },
            { t: "15 Level", d: "Tantangan bertahap, dari jalur lurus sampai rintangan dan item." },
            { t: "Eksekusi Robot", d: "Robot menjalankan kartu satu per satu sehingga hasilnya langsung terlihat." },
            { t: "Peringkat", d: "Kadet, Letnan, Kapten, dan Laksamana sesuai poin yang dikumpulkan." },
            { t: "Rekor Waktu", d: "Waktu terbaik tiap level tercatat untuk memacu pemain." },
            { t: "Kartu Ulangi", d: "Mengenalkan konsep perulangan (loop) secara visual." },
            { t: "Rintangan & Item", d: "Hindari dinding dan ambil item sebelum mencapai finish." },
            { t: "Data Tersimpan", d: "Progres dan skor disimpan di basis data." }],
          alur: ["Pilih level yang tersedia", "Susun kartu perintah untuk robot", "Tekan jalankan dan amati robot bergerak", "Perbaiki urutan kartu bila gagal", "Capai finish, dapatkan poin dan peringkat"],
          struktur: "React 18 + Vite · Supabase · Vercel · PHP & MySQL" } },
      { slug: "kurir-paket-matriks", title: "Kurir Paket Matriks",
        desc:  "Game edukasi logika & dasar pemrograman: kendalikan truk kurir dengan perintah teks di peta grid 6×6. Dibangun dengan Next.js, TypeScript, Tailwind CSS, dan Supabase.",
        tags:  ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "assets/flyer/kurir-paket-matriks.png", url: "https://github.com/MRikoKuswoyo/maganghub-kurirpaketmatriks",
        detail: {
          kategori: "Game Edukasi · Logika & Pemrograman",
          intro: "Pemain menjadi kurir yang mengendalikan truk lewat perintah teks di peta grid 6×6: maju, belok, ambil paket, dan serahkan. Semakin efisien kodenya, semakin banyak bintang yang didapat.",
          tech: [["Next.js 14", "nextdotjs"], ["TypeScript", "typescript"], ["Tailwind CSS", "tailwindcss"], ["Supabase", "supabase"], ["Zustand", ""]],
          sorotan: [{ v: "10", l: "Level (Pemula → Legenda)" }, { v: "6×6", l: "Ukuran peta" }, { v: "★★★", l: "Kode efisien" }, { v: "4", l: "Tema tampilan" }],
          fitur: [
            { t: "Editor Perintah Teks", d: "Tulis MAJU, BELOK KANAN, AMBIL, SERAH, dan komentar langsung di editor." },
            { t: "Perulangan ULANGI", d: "Sintaks ULANGI n { … } mengenalkan konsep loop." },
            { t: "Peta Grid 6×6", d: "Jalan, rintangan, titik ambil, dan titik serah di peta matriks." },
            { t: "10 Level", d: "Dari Pemula sampai Legenda dengan kesulitan bertahap." },
            { t: "Penilaian Bintang", d: "Hingga ★★★ untuk solusi dengan kode paling efisien." },
            { t: "4 Tema", d: "Logistik Klasik, Cyberpunk Neon, Pastel Soft, dan Dark Mode." },
            { t: "State Management", d: "Zustand menjaga alur permainan tetap ringan dan responsif." },
            { t: "Penyimpanan Supabase", d: "Progres dan skor pemain tersimpan di basis data." }],
          alur: ["Pilih level dan baca misi pengiriman", "Tulis kode perintah di editor", "Tekan Jalankan, truk bergerak di peta", "Perbaiki kode jika paket belum terkirim", "Selesaikan dan dapatkan bintang"],
          struktur: "Next.js 14 · TypeScript · Tailwind CSS · Zustand · Supabase" } },
    ],

    // Sertifikat: judul, deskripsi, gambar, dan file PDF diambil dari daftar SRT di atas.
    certificates: rel("toeflIneo", "toeflCentral", "mentor8", "ketua7", "peserta7", "kpBkpsdm", "kepsukPmm", "pesertaPmm", "pemilihanDrn2"),

    achievements: [
      { title: "Skripsi: Analisis Sentimen Instagram Unimal", desc: "Analisis sentimen opini publik pada akun Instagram resmi Universitas Malikussaleh dengan Naive Bayes Classifier berbasis web: akurasi 77,55%, SUS 73,17 (2026).", image: "assets/flyer/skripsi-sentimen-unimal.png", url: "https://rama.unimal.ac.id/id/eprint/21933/", urlLabel: "Buka di Repositori Unimal" },
      ...rel("keynote", "harapan1", "projectDir3", "juri3", "ketuaDrn2", "topLeader", "penulisNov", "winner", "penulisJun", "penulisDrn"),
      { title: "Narasumber Talkshow Sore Ceria · RRI Pro 2 FM Lhokseumawe", desc: "Dialog live di 95,2 RRI Pro 2 FM Lhokseumawe bersama host Eghi Poetra (Rabu, 17 Desember 2025). Diliput RRI dengan judul “Muhammad Riko Kuswoyo, si Paling Aktif Berprestasi”.", image: "assets/flyer/liputan-rri-sore-ceria.png", url: "https://rri.co.id/lhokseumawe/berita-lain/2048861/muhammad-riko-kuswoyo-si-paling-aktif-berprestasi", urlLabel: "Baca di RRI.co.id" },
      { title: "Terbit Jurnal di Google Scholar", desc: "Strategi Perlindungan Tenaga Kerja di Era Kecerdasan Artifisial: Studi Kasus pada Sektor Industri Manufaktur. Multiverse Vol. 4 No. 1 (2025).", image: "assets/flyer/jurnal-perlindungan-tenaga-kerja-ai.png", url: "https://garuda.kemdiktisaintek.go.id/documents/detail/5295899", urlLabel: "Buka di Garuda" },
      { title: "Finalis Duta HUMAS Universitas Malikussaleh", desc: "Finalis seleksi Duta HUMAS Universitas Malikussaleh (2024).", image: "assets/flyer/duta-humas-logo.png", url: "https://www.instagram.com/p/C7vPWVfywko/", urlLabel: "Lihat di Instagram" },
      { title: "Pendiri dan Host Ratapih Podcast", desc: "Podcast di Spotify tentang mood booster dan memori perjalanan, dituangkan lewat suara. Tayang setiap malam Senin pukul 21.00 WIB (2022).", image: "assets/flyer/ratapih-podcast.png", url: "https://open.spotify.com/show/6uITyPk1veynyR6tZI57zs", urlLabel: "Dengarkan di Spotify" },
      ...rel("hilo"),
    ],

    // Webinar & Seminar: semua file ada di folder sertifikat/webinar/ (tambah baru: taruh webp + pdf di sana, daftarkan di SRT di atas, lalu tambahkan kuncinya di sini).
    webinars: rel("wbEkowisata", "wbCoaching", "wbBireuenkut", "wbBireuenkutPeserta", "wbNarsum", "wbSuper1", "wbSuper2", "wbSuper3", "wbMandiri", "wbMhRamadhan", "wbPkVolunteer", "wbPkVideo", "wbPkWebinar8", "wbMhResolution", "wbDesa", "wbCampusFair"),

    // Tech stack dikelompokkan (dari CV + proyek)
    techStack: [
      { group: "Web & Pemrograman", items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Three.js", "PHP (Laravel)", "WordPress", "Node.js"] },
      { group: "Database & Backend", items: ["MySQL", "PostgreSQL", "Supabase", "Prisma", "SQL", "REST API"] },
      { group: "Desain & Media", items: ["Figma", "Canva", "CapCut", "Adobe Premiere", "Audacity", "Anchor"] },
      { group: "Produktivitas & Manajemen", items: ["Microsoft Office", "Google Workspace", "Trello", "Notion", "Asana"] },
    ],
  },

  /* ---------- Contact ---------- */
  contact: {
    heading: "Hubungi saya",
    formTitle: "Hubungi",
    formText: "Ada yang mau didiskusikan? Langsung kirim pesan aja ya…",
    sendLabel: "Kirim Pesan",
    // Pesan dari formulir dikirim ke emailmu lewat Web3Forms (web3forms.com). Access key ini boleh publik.
    web3formsKey: "33ddf8c8-30ac-4779-844a-efe2c2854c12",
    // Komentar permanen untuk semua pengunjung: isi dari Supabase (Project Settings → API). Panduan: supabase-komentar.sql
    // Kosong = komentar hanya tersimpan di browser pengunjung itu sendiri (tidak hilang saat refresh).
    supabaseUrl: "https://oyfwwmsjuuabbgpdfazj.supabase.co",
    supabaseKey: "sb_publishable_o5fAx_j8aS7sf-KjEWFfNg_ob6ZPmUO",   // Publishable key (aman di website). JANGAN pakai secret key.
    // Info kontak (dari CV). type: "mail" · "wa" · "text"
    info: [
      { label: "Lokasi",    value: "Lhokseumawe, Aceh", type: "text" },
      { label: "Email",     value: "muhammadrikokuswoyo5104@gmail.com", type: "mail" },
      { label: "WhatsApp",  value: "+62 821-8165-7489", type: "wa", number: "6282181657489" },
      { label: "LinkedIn",  value: "Muhammad Riko Kuswoyo", type: "link", url: "https://www.linkedin.com/in/mrikokuswoyo/" },
    ],
    findMeLabel: "FIND ME",

    commentsTitle: "Komentar",
    commentsCountStart: 200,                  // angka awal jumlah komentar (= jumlah komentar contoh di komentar.js)
    commentLabel: "Kirim Komentar",
    comments: KOMENTAR,                       // 200 komentar contoh, ada di komentar.js (harus dimuat sebelum data.js)
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "Membangun pengalaman web modern dengan presisi kode, tipografi tajam, dan dimensi 3D interaktif.",
    copyright: "© 2026 Muhammad Riko Kuswoyo™. All Rights Reserved.",   // nama di antara © dan ™ otomatis ditebalkan
    backToTop: "Kembali ke Atas",
  },

  /* ---------- Kartu ID 3D (tergantung di halaman Home) ---------- */
  card: {
    enabled: true,                       // false = sembunyikan kartu 3D
    photo: "assets/foto/foto.jpg",                   // foto di kartu (path file)
    label: "DEVELOPER ID",               // teks kecil di atas kartu
    year: "",                            // kosong = tahun sekarang
    role: "Junior Developer",            // teks di kartu ID (kosong = ambil dari about.role)
    organization: "Universitas Amikom Yogyakarta",
    footer: "PORTFOLIO",
    tagline: "Build · Learn · Ship",
    // Sisi belakang kartu (klik kartu untuk membalik)
    backTitle: "SCAN ME",
    backSubtitle: "CONNECT WITH ME",
    qrUrl: "",                           // link di QR; kosong = link sosmed pertama (socials[0])
    flipLabel: "",                       // teks tombol di bawah kartu (HP). Kosong = tombol dihapus; kartu tetap bisa diketuk untuk dibalik
    hint: "Klik kartu untuk membalik · tarik untuk mengayun",   // kosong = tanpa petunjuk
    // Efek 3D
    sparkle: true,                       // kilau/kerlip di permukaan kartu
    particles: 110,                      // jumlah bulir cahaya melayang (0 = mati)
    speed: 1.7,                          // kecepatan ayunan & bulir (1 = pelan, 2.5 = sangat cepat)
    strapText: "",                       // teks di tali; kosong = nama kamu
    strapColor: "#ff8a2b",               // 🎨 WARNA TALI (kode hex). Contoh: biru "#2f6bff", mint "#34d3a1", merah "#e5484d"
  },

  /* ---------- Latar belakang (titik-titik halus) ---------- */
  background: {
    enabled: true,                       // false = latar polos tanpa animasi
    dotColor: "143, 240, 207",           // warna titik (R, G, B)
    lineDistance: 130,                   // jarak maksimum garis penghubung
    density: 1,                          // 0.5 = jarang, 1 = normal, 1.5 = rapat
    speed: 2.2,                          // kecepatan gerak titik (1 = pelan)
  },

  /* ---------- Layar loading (sebelum masuk ke halaman) ---------- */
  loader: {
    enabled: true,                       // false = langsung masuk tanpa loading
    minDuration: 2800,                   // lama minimal loading (ms)
    oncePerSession: false,               // true = hanya tampil sekali per sesi browser
    skipButton: true,                    // tombol "Lewati"
    skipLabel: "Lewati",
    title: "Muhammad Riko Kuswoyo",      // nama besar di tengah layar loading
    subtitle: "Portfolio Loading",       // teks kecil di bawah nama
    // warna otomatis mengikuti mode terang/gelap yang dipilih di web
    messages: ["Sistem memuat"],         // teks status di kiri bawah bar (boleh lebih dari satu)
    doneMessage: "Selamat datang",
  },

  /* ---------- Tanya AI ----------
     endpoint kosong = asisten menjawab dari data portofolio ini (tanpa server, langsung jalan).
     Isi endpoint (URL Cloudflare Worker, lihat ai-worker.js & README-FITUR.txt) agar dijawab model AI sungguhan.
     JANGAN taruh API key di sini: file ini bisa dibaca siapa saja. */
  ai: { endpoint: "" },

  /* ---------- Efek interaksi (true = aktif, false = mati) ---------- */
  effects: {
    clickBurst: true,     // percikan cahaya setiap kali klik di mana saja
    ripple: true,         // riak pada tombol, menu, dan tab saat ditekan
    spotlight: true,      // cahaya mengikuti kursor di atas kartu
    reveal: true,         // elemen muncul halus saat di-scroll
    countUp: true,        // angka statistik menghitung naik
    clickSound: true,     // bunyi "tik" saat klik (hanya jika tombol suara aktif)
  },

  /* ---------- Label teks lain (judul kecil, form, placeholder) ---------- */
  labels: {
    education:  "Education",
    experience: "Experience",
    organization: "Organisasi",
    capaian: "Capaian",
    soundButton: "Suara latar",

    // Form "Hubungi"
    contactName:  "Nama",   contactNamePh:  "Nama Anda",
    contactEmail: "Email",  contactEmailPh: "Email Anda",
    contactMsg:   "Pesan",  contactMsgPh:   "Pesan Anda",

    // Form "Komentar"
    commentName:  "Nama",      commentNamePh: "Masukkan nama kamu",
    commentText:  "Komentar",  commentTextPh: "Tulis komentar kamu di sini…",
    commentPhoto: "Foto Profil (opsional)",
    commentPhotoHint: "Ukuran file maksimal 5 MB",
  },

  /* ---------- Pesan notifikasi ---------- */
  messages: {
    formIncomplete:    "Lengkapi nama, email, dan pesan dulu ya",
    formSent:          "Pesan terkirim",
    formFailed:        "Pesan gagal terkirim",
    formNoKey:         "Access key Web3Forms belum diisi di data.js",
    commentIncomplete: "Isi nama dan komentar dulu ya",
    commentSent:       "Komentar terkirim",
    commentFailed:     "Komentar gagal terkirim, coba lagi ya",
    commentWait:       "Tunggu sebentar sebelum berkomentar lagi",
  },
};
