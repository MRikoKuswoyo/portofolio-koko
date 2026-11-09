/* =====================================================================
   🌐 LANG.JS — BAHASA (ID/EN) + TEMA (gelap/terang)
   Dimuat tepat setelah data.js, sebelum halaman dirender.
   · Bahasa Inggris: kunci = teks Indonesia di data.js, nilai = terjemahan (lihat data-en.js).
   · Pilihan pengunjung disimpan di browser (localStorage) dan diingat saat berkunjung lagi.
   · Teks antarmuka tambahan (tombol, chat, bantuan) ada di kamus UI di bawah ini.
   ===================================================================== */
(function () {
  'use strict';
  var KEY = 'pf-lang', TKEY = 'pf-theme', root = document.documentElement;
  var lang = null, theme = null;
  try { lang = localStorage.getItem(KEY); theme = localStorage.getItem(TKEY); } catch (e) {}
  if (lang !== 'id' && lang !== 'en') lang = /^id/i.test(navigator.language || 'id') ? 'id' : 'en';   // otomatis: HP berbahasa Indonesia → ID, selain itu → EN
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  root.lang = lang;
  root.setAttribute('data-theme', theme);

  /* ---------- Teks antarmuka (ID / EN) ---------- */
  var UI = {
    id: {
      ask: 'Tanya AI', askAria: 'Buka Tanya AI', help: 'Bantuan', theme: 'Ganti tema', themeLight: 'Beralih ke tema terang', themeDark: 'Beralih ke tema gelap',
      langAria: 'Pilih bahasa', close: 'Tutup',
      chatTitle: 'Tanya AI', chatSub: 'Asisten portofolio · jawab seputar profil Riko',
      chatHello: 'Halo! Aku asisten portofolio ini. Tanyakan apa saja tentang pendidikan, pengalaman, proyek, skill, atau cara menghubungi {name}.',
      chatPh: 'Tulis pertanyaanmu…', chatSend: 'Kirim', typing: 'Mengetik…', chatReset: 'Mulai ulang',
      chips: ['Siapa {first}?', 'Apa saja proyeknya?', 'Pengalaman kerja', 'Skill utama', 'Cara menghubungi'],
      noAnswer: 'Maaf, aku belum menemukan jawabannya di portofolio ini. Coba tanya soal pendidikan, pengalaman, proyek, skill, sertifikat, atau kontak {first}.',
      aiError: 'Koneksi ke asisten AI sedang bermasalah, ini jawaban dari data portofolio:',
      eduHead: 'Pendidikan {first}:', expHead: 'Pengalaman kerja & magang:', orgHead: 'Organisasi & komunitas:', projHead: 'Proyek yang dibuat {first}:', skillHead: 'Skill utama:',
      techHead: 'Teknikal', persHead: 'Personal', langHead: 'Bahasa', certHead: 'Sertifikat & penghargaan:', contactHead: 'Kontak {first}:', moreInfo: 'Selengkapnya ada di bagian {sec} halaman ini.',
      cvAnswer: 'CV bisa diunduh lewat tombol “Lihat CV” di bagian About atau menu “Hubungi Saya” → “Unduh CV”.',
      musicAnswer: 'Playlist favorit {first} ada di bagian musik di halaman Contact (“{pl}”). Tombol putar di kiri bawah juga bisa memutar lagunya.',
      openAnswer: 'Ya, {first} sedang {status}. Kirim pesan lewat formulir di bagian Contact atau lewat sosial media.',
      helpTitle: 'Cara menjelajah portofolio', helpIntro: 'Beberapa hal yang bisa kamu coba di sini:',
      helpItems: [
        ['Kartu ID 3D', 'Tarik dan ayunkan kartu di bagian Home. Ketuk kartu untuk membaliknya.'],
        ['Tanya AI', 'Ketuk tombol biru “Tanya AI” untuk bertanya soal profil, proyek, dan pengalaman.'],
        ['Bahasa', 'Pilih ID atau EN untuk mengganti bahasa seluruh halaman.'],
        ['Tema', 'Ketuk ikon matahari/bulan untuk beralih antara tema gelap dan terang.'],
        ['Menu', 'Gunakan menu navigasi untuk lompat ke Home, About, Portfolio, atau Contact.'],
        ['Detail & sertifikat', 'Ketuk pengalaman, proyek, atau sertifikat untuk melihat detailnya.'],
        ['Musik', 'Tombol putar di kiri bawah memutar musik latar.']
      ],
      // teks lain dalam halaman
      viewDetail: 'Lihat detail', viewDetailAria: ' — lihat detail', openDetail: 'Buka detail', viewCert: 'Lihat sertifikat', cert: 'Sertifikat', download: 'Unduh', dlPdf: 'Unduh PDF', dlImg: 'Unduh gambar', openSource: 'Buka sumber', open: 'Buka',
      viewCV: 'Lihat CV', minAgo: 'menit lalu', hourAgo: 'jam lalu', dayAgo: 'hari lalu', playMusic: 'Putar musik', pauseMusic: 'Jeda musik', nowPlaying: 'Sedang diputar',
      pageNotFound: 'Halaman tidak ditemukan', pageNotFoundTxt: 'Link ini tidak ada di daftar About.', back: 'Kembali', next: 'Berikutnya →', secAbout: 'Tentang', secRoles: 'Peran & Kegiatan', secSkills: 'Keahlian & Topik', secLinks: 'Tautan', secRelCerts: 'Sertifikat Terkait',
      nextProject: 'Proyek berikutnya →', otherProjects: 'Proyek lainnya', clickEnlarge: 'Klik gambar untuk memperbesar', dlFlyer: 'Unduh flyer', structure: 'Struktur:', secFeatures: 'Fitur Utama', secFlow: 'Alur Penggunaan',
      iAm: 'Saya adalah', viewGithub: 'Lihat di GitHub',
      projNotFound: 'Proyek tidak ditemukan', projNotFoundTxt: 'Link proyek ini tidak ada di daftar portofolio.', backPortfolio: 'Kembali ke Portfolio', notFound: 'Tidak ditemukan',
      bw: { kicker: 'GET IN TOUCH', title: 'Temukan saya', mapKicker: 'LOKASI DI GOOGLE MAPS', openMaps: 'Buka di Maps', reply: 'Respon cepat: maksimal 1×24 jam kerja', avail: 'Tersedia' }
    },
    en: {
      ask: 'Ask AI', askAria: 'Open Ask AI', help: 'Help', theme: 'Switch theme', themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme',
      langAria: 'Choose language', close: 'Close',
      chatTitle: 'Ask AI', chatSub: 'Portfolio assistant · ask about Riko’s profile',
      chatHello: 'Hi! I’m this portfolio’s assistant. Ask me anything about {name}’s education, experience, projects, skills, or how to get in touch.',
      chatPh: 'Type your question…', chatSend: 'Send', typing: 'Typing…', chatReset: 'Start over',
      chips: ['Who is {first}?', 'What projects has he built?', 'Work experience', 'Main skills', 'How to contact'],
      noAnswer: 'Sorry, I couldn’t find that in this portfolio yet. Try asking about {first}’s education, experience, projects, skills, certificates, or contact details.',
      aiError: 'The AI assistant is having connection issues, so here is an answer from the portfolio data:',
      eduHead: '{first}’s education:', expHead: 'Work & internship experience:', orgHead: 'Organizations & communities:', projHead: 'Projects {first} has built:', skillHead: 'Main skills:',
      techHead: 'Technical', persHead: 'Personal', langHead: 'Languages', certHead: 'Certificates & awards:', contactHead: '{first}’s contact:', moreInfo: 'More in the {sec} section of this page.',
      cvAnswer: 'You can download the CV with the “View CV” button in the About section, or via “Contact Me” → “Download CV”.',
      musicAnswer: '{first}’s favorite playlist is in the music section on the Contact page (“{pl}”). The play button at the bottom left can also play the music.',
      openAnswer: 'Yes, {first} is {status}. Send a message through the form in the Contact section or via social media.',
      helpTitle: 'How to explore this portfolio', helpIntro: 'A few things you can try here:',
      helpItems: [
        ['3D ID card', 'Drag and swing the card in the Home section. Tap the card to flip it.'],
        ['Ask AI', 'Tap the blue “Ask AI” button to ask about the profile, projects, and experience.'],
        ['Language', 'Choose ID or EN to change the language of the whole page.'],
        ['Theme', 'Tap the sun/moon icon to switch between dark and light themes.'],
        ['Menu', 'Use the navigation menu to jump to Home, About, Portfolio, or Contact.'],
        ['Details & certificates', 'Tap an experience, project, or certificate to see its details.'],
        ['Music', 'The play button at the bottom left plays background music.']
      ],
      viewDetail: 'View details', viewDetailAria: ' — view details', openDetail: 'Open details', viewCert: 'View certificate', cert: 'Certificate', download: 'Download', dlPdf: 'Download PDF', dlImg: 'Download image', openSource: 'Open source', open: 'Open',
      viewCV: 'View CV', minAgo: 'min ago', hourAgo: 'h ago', dayAgo: 'd ago', playMusic: 'Play music', pauseMusic: 'Pause music', nowPlaying: 'Now playing',
      pageNotFound: 'Page not found', pageNotFoundTxt: 'This link isn’t in the About list.', back: 'Back', next: 'Next →', secAbout: 'About', secRoles: 'Roles & Activities', secSkills: 'Skills & Topics', secLinks: 'Links', secRelCerts: 'Related Certificates',
      nextProject: 'Next project →', otherProjects: 'Other projects', clickEnlarge: 'Click the image to enlarge', dlFlyer: 'Download flyer', structure: 'Structure:', secFeatures: 'Key Features', secFlow: 'Usage Flow',
      iAm: 'I am a', viewGithub: 'View on GitHub',
      projNotFound: 'Project not found', projNotFoundTxt: 'This project link isn’t in the portfolio list.', backPortfolio: 'Back to Portfolio', notFound: 'Not found',
      bw: { kicker: 'GET IN TOUCH', title: 'Find me', mapKicker: 'LOCATION ON GOOGLE MAPS', openMaps: 'Open in Maps', reply: 'Quick reply: within 1 working day', avail: 'Available' }
    }
  };

  /* ---------- Terapkan terjemahan Inggris ke CONFIG & SRT ---------- */
  var SKIP = /^(image|file|url|logo|logoFull|color|slug|target|icon|type|saveAs|missing|social|mono|photo|photoReveal|src|href|id|handle|back|sertifikat|trackId|trackUrl|embed|qrUrl|strapColor|strapText|photoAlt|key|toeflKey|cert|source|comments|detailKey)$/;
  function translate(o, seen) {
    if (!o || typeof o !== 'object' || seen.indexOf(o) > -1) return;
    seen.push(o);
    for (var k in o) {
      if (!Object.prototype.hasOwnProperty.call(o, k) || SKIP.test(k)) continue;
      var v = o[k];
      if (typeof v === 'string') { if (Object.prototype.hasOwnProperty.call(I18N_EN, v)) o[k] = I18N_EN[v]; }
      else if (v && typeof v === 'object') translate(v, seen);
    }
  }
  if (lang === 'en' && typeof I18N_EN !== 'undefined') {
    var seen = [];
    if (typeof CONFIG !== 'undefined') translate(CONFIG, seen);
    if (typeof SRT !== 'undefined') translate(SRT, seen);
    if (typeof CONFIG !== 'undefined' && CONFIG.siteTitle) document.title = CONFIG.siteTitle;
  }

  /* ---------- API publik: window.L ---------- */
  function fmt(s, vars) { return String(s).replace(/\{(\w+)\}/g, function (m, k) { return vars && vars[k] != null ? vars[k] : m; }); }
  var L = window.L = {
    lang: lang, theme: theme,
    ui: UI[lang],
    t: function (k, vars) { var v = UI[lang][k]; return typeof v === 'string' ? fmt(v, vars) : v; },
    setLang: function (l) {
      if (l === lang || (l !== 'id' && l !== 'en')) return;
      try { localStorage.setItem(KEY, l); sessionStorage.setItem('pf-sw', '1'); sessionStorage.setItem('pf-sy', String(window.scrollY || 0)); } catch (e) {}
      location.reload();   // muat ulang tanpa layar loading, posisi scroll dipulihkan
    },
    setTheme: function (t) {
      if (t !== 'light' && t !== 'dark') return;
      theme = L.theme = t; root.setAttribute('data-theme', t);
      try { localStorage.setItem(TKEY, t); } catch (e) {}
      var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', t === 'light' ? '#f4f7f6' : '#06090b');
      window.dispatchEvent(new CustomEvent('pf:theme', { detail: t }));
    },
    toggleTheme: function () { L.setTheme(theme === 'light' ? 'dark' : 'light'); }
  };
})();
