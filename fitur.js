/* =====================================================================
   ✨ FITUR.JS — TOOLBAR: Tanya AI · ID/EN · Bantuan (?) · Tema (matahari/bulan)
   · Tanya AI: panel chat yang menjawab dari data portofolio (CONFIG di data.js), langsung jalan tanpa server.
     Mau dijawab AI sungguhan? Isi CONFIG.ai.endpoint di data.js (lihat ai-worker.js + README-FITUR.txt).
   · ID/EN: memanggil L.setLang() dari lang.js · Tema: L.toggleTheme()
   ===================================================================== */
(function () {
  'use strict';
  if (typeof CONFIG === 'undefined' || !window.L) return;
  var C = CONFIG, A = C.about || {}, P = C.portfolio || {}, T = L.ui, $ = function (s, r) { return (r || document).querySelector(s); };
  var AI = C.ai || {};
  var parts = String(C.name || '').split(' ');
  var FIRST = /^muh(ammad)?$/i.test(parts[0]) && parts[1] ? parts[1] : (parts[0] || '');
  var V = { name: C.name || '', first: FIRST };
  var f = function (s, extra) { var o = {}, k; for (k in V) o[k] = V[k]; for (k in (extra || {})) o[k] = extra[k]; return String(s).replace(/\{(\w+)\}/g, function (m, x) { return o[x] != null ? o[x] : m; }); };

  /* ---------- Pemulihan scroll setelah ganti bahasa ---------- */
  try {
    var sy = sessionStorage.getItem('pf-sy');
    if (sy != null) {
      sessionStorage.removeItem('pf-sy');
      var go = function () { window.scrollTo({ top: +sy, behavior: 'instant' }); };
      window.addEventListener('load', function () { go(); setTimeout(go, 400); setTimeout(go, 1300); });
    }
    window.addEventListener('load', function () { sessionStorage.removeItem('pf-sw'); });
  } catch (e) {}

  /* ---------- Ikon ---------- */
  var I = {
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 3.5 11 8l4.5 1.5L11 11l-1.5 4.5L8 11 3.5 9.5 8 8z"/><path d="M17.5 13.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/><path d="M18 3.5v3M16.5 5h3"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.2"/><path d="M9.3 9.4a2.8 2.8 0 0 1 5.4.9c0 1.9-2.7 2.4-2.7 4"/><circle cx="12" cy="17.2" r=".6" fill="currentColor"/></svg>',
    sun: '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/></svg>',
    moon: '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.3A8.2 8.2 0 0 1 9.7 4 8.6 8.6 0 1 0 20 14.3z"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v4.5h4.5"/></svg>'
  };

  /* ---------- Toolbar ---------- */
  var tb = document.createElement('div');
  tb.className = 'tb'; tb.id = 'tb';
  tb.innerHTML =
    '<button type="button" class="tb-ai" id="tb-ai" aria-haspopup="dialog" aria-label="' + T.askAria + '">' + I.spark + '<span>' + T.ask + '</span></button>' +
    '<div class="tb-lang" role="group" aria-label="' + T.langAria + '"><button type="button" data-l="id"' + (L.lang === 'id' ? ' class="on" aria-pressed="true"' : ' aria-pressed="false"') + '>ID</button><button type="button" data-l="en"' + (L.lang === 'en' ? ' class="on" aria-pressed="true"' : ' aria-pressed="false"') + '>EN</button></div>' +
    '<button type="button" class="tb-ic" id="tb-help" aria-haspopup="dialog" aria-label="' + T.help + '" title="' + T.help + '">' + I.help + '</button>' +
    '<button type="button" class="tb-ic" id="tb-theme" aria-label="' + T.theme + '" title="' + T.theme + '">' + I.sun + I.moon + '</button>';
  document.body.appendChild(tb);

  var themeBtn = $('#tb-theme', tb);
  var paintTheme = function () { var light = L.theme === 'light'; themeBtn.setAttribute('aria-label', light ? T.themeDark : T.themeLight); themeBtn.title = light ? T.themeDark : T.themeLight; };
  paintTheme();
  themeBtn.addEventListener('click', function () { L.toggleTheme(); paintTheme(); });
  tb.querySelectorAll('.tb-lang button').forEach(function (b) { b.addEventListener('click', function () { L.setLang(b.getAttribute('data-l')); }); });

  /* =====================================================================
     📚 BASIS PENGETAHUAN — dibangun dari CONFIG (otomatis ikut bahasa terpilih)
     ===================================================================== */
  var list = function (a) { return (a || []).filter(Boolean); };
  var short = function (s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); if (s.length <= n) return s; var cut = s.slice(0, n), i = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', '), cut.lastIndexOf(' ')); return cut.slice(0, i > 40 ? i : n).replace(/[,.;:]$/, '') + '…'; };
  var bullets = function (arr) { return arr.map(function (x) { return '• ' + x; }).join('\n'); };
  var projects = function () { return list(P.projects); };

  var K = {
    who: function () {
      var role = A.role || '', txt = A.text || '', be = L.lang === 'id' ? 'adalah' : 'is a';
      return f('{first} ') + be + ' ' + role + ' ' + txt;
    },
    edu: function () { return f(T.eduHead) + '\n' + bullets(list(A.education).map(function (e) { return e.title + ' — ' + e.role + (e.year ? ' (' + e.year + ')' : '') + (e.tag ? ' · ' + e.tag : ''); })); },
    exp: function () { return T.expHead + '\n' + bullets(list(A.experience).map(function (e) { return e.title + (e.year ? ' (' + e.year + ')' : ''); })) + '\n\n' + f(T.moreInfo, { sec: 'About' }); },
    org: function () { return T.orgHead + '\n' + bullets(list(A.organization).map(function (e) { return e.title + (e.role ? ' — ' + e.role : '') + (e.year ? ' (' + e.year + ')' : ''); })); },
    proj: function () { return f(T.projHead) + '\n' + bullets(projects().map(function (p) { return p.title + ': ' + short(p.desc, 110); })) + '\n\n' + f(T.moreInfo, { sec: 'Portfolio' }); },
    skill: function () {
      var S = A.skills || {}, out = [f(T.skillHead)];
      var stack = list(P.techStack).map(function (g) { return g.group + ': ' + list(g.items).join(', '); });
      if (stack.length) out.push(bullets(stack));
      var langs = list(S.languages).map(function (l) { return l.name + ' (' + l.level + ')'; }).concat(list(S.toefl).map(function (t) { return t.label; }));
      if (langs.length) out.push('\n' + T.langHead + ': ' + langs.join(' · '));
      var pers = list(S.personal).slice(0, 4);
      if (pers.length) out.push(T.persHead + ': ' + pers.join('; '));
      return out.join('\n');
    },
    lang: function () {
      var S = A.skills || {}, l = list(S.languages).map(function (x) { return x.name + ': ' + x.level; }).concat(list(S.toefl).map(function (t) { return t.label; }));
      return T.langHead + ':\n' + bullets(l);
    },
    cert: function () {
      var a = list(P.achievements), c = list(P.certificates), w = list(P.webinars);
      var head = L.lang === 'id'
        ? c.length + ' sertifikat, ' + a.length + ' penghargaan/capaian, dan ' + w.length + ' webinar & seminar.'
        : c.length + ' certificates, ' + a.length + ' awards/achievements, and ' + w.length + ' webinars & seminars.';
      return T.certHead + '\n' + head + '\n' + bullets(a.slice(0, 5).map(function (x) { return x.title; })) + '\n\n' + f(T.moreInfo, { sec: 'Portfolio' });
    },
    contact: function () {
      var info = list((C.contact || {}).info).map(function (i) { return i.label + ': ' + i.value; });
      var soc = list(C.socials).map(function (s) { return s.name + ': ' + s.handle; });
      return f(T.contactHead) + '\n' + bullets(info.concat(soc));
    },
    cv: function () { return T.cvAnswer; },
    music: function () { var m = C.music || {}; return f(T.musicAnswer, { pl: m.playlistName || m.title || 'playlist' }); },
    open: function () { var av = ((C.hero || {}).availability || {}).label || ''; return f(T.openAnswer, { status: av.toLowerCase() }); }
  };

  /* Pola kata kunci ID + EN. Urutan = prioritas bila skor sama. */
  var RX = [
    ['cv', /\bcv\b|resume|riwayat hidup/],
    ['music', /musik|lagu|playlist|spotify|music|song/],
    ['open', /tersedia|available|hire|rekrut|kolaborasi|collab|lowongan|open to|kerja sama|freelance|butuh developer/],
    ['contact', /kontak|hubungi|email|e-mail|whatsapp|\bwa\b|telepon|nomor|phone|sosial|instagram|linkedin|github|tiktok|contact|reach|social|\bdm\b/],
    ['proj', /proyek|projek|project|karya|aplikasi|\bapp\b|website|\bweb\b|game|dibuat|built|portfolio|portofolio/],
    ['exp', /pengalaman|kerja|magang|intern|experience|work|job|career|karier|karir|jabatan|posisi/],
    ['edu', /pendidikan|kuliah|kampus|universitas|sekolah|\bipk\b|gpa|education|study|university|school|degree|lulus|graduat|jurusan|skripsi|thesis/],
    ['org', /organisasi|komunitas|organi[sz]ation|communit|himpunan|volunteer|relawan/],
    ['lang', /toefl|bahasa inggris|english|language|bahasa asing|speak/],
    ['skill', /skill|keahlian|kemampuan|bisa apa|teknologi|\btech|stack|pemrograman|programming|framework|tools|abilit|expert|menguasai|can he/],
    ['cert', /sertifikat|penghargaan|prestasi|juara|award|certificate|achievement|capaian|webinar|seminar/],
    ['who', /siapa|\bwho\b|tentang|about|kenalan|introduce|profil|profile|perkenal|describe|ceritakan|tell me/]
  ];
  var STOP = /^(dengan|untuk|yang|project|projek|proyek|sistem|informasi|game|edukasi|engine|monitoring|web|app|the|and)$/i;

  function answerLocal(q) {
    var s = ' ' + q.toLowerCase().trim() + ' ';
    if (/^\s*(hai|halo|hi|hello|hey|selamat|assalam|p)\b/.test(s.trim()) && s.trim().split(/\s+/).length <= 3) return f(T.chatHello);
    // proyek tertentu disebut namanya?
    var hit = null;
    projects().forEach(function (p) {
      String(p.title).toLowerCase().split(/[^a-z0-9.+#]+/).forEach(function (tok) { if (tok.length >= 4 && !STOP.test(tok) && s.indexOf(tok) > -1) hit = hit || p; });
    });
    if (hit) return hit.title + '\n' + short((hit.detail && hit.detail.intro) || hit.desc, 380) + (hit.tags && hit.tags.length ? '\n\n' + hit.tags.join(' · ') : '');
    var best = null, bestN = 0;
    RX.forEach(function (r) { var m = s.match(new RegExp(r[1].source, 'g')); if (m && m.length > bestN) { best = r[0]; bestN = m.length; } });
    return best ? K[best]() : f(T.noAnswer);
  }

  function buildContext() {
    return ['who', 'edu', 'exp', 'org', 'proj', 'skill', 'cert', 'contact'].map(function (k) { return K[k](); }).join('\n\n').slice(0, 9000);
  }

  /* ---------- Panel chat ---------- */
  var panel = document.createElement('div');
  panel.className = 'ai'; panel.id = 'ai'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', T.chatTitle); panel.hidden = true;
  panel.innerHTML =
    '<header class="ai-h"><span class="ai-badge">' + I.spark + '</span><div class="ai-ht"><b>' + T.chatTitle + '</b><small>' + T.chatSub + '</small></div>' +
    '<button type="button" class="ai-ib" id="ai-reset" aria-label="' + T.chatReset + '" title="' + T.chatReset + '">' + I.reset + '</button>' +
    '<button type="button" class="ai-ib" id="ai-x" aria-label="' + T.close + '">' + I.x + '</button></header>' +
    '<div class="ai-log" id="ai-log" aria-live="polite"></div>' +
    '<div class="ai-chips" id="ai-chips"></div>' +
    '<div class="ai-form"><input id="ai-in" type="text" autocomplete="off" maxlength="300" placeholder="' + T.chatPh + '" aria-label="' + T.chatPh + '"><button type="button" id="ai-send" aria-label="' + T.chatSend + '">' + I.send + '</button></div>';
  document.body.appendChild(panel);
  var scrim = document.createElement('div'); scrim.className = 'ai-scrim'; scrim.hidden = true; document.body.appendChild(scrim);

  var log = $('#ai-log', panel), input = $('#ai-in', panel), send = $('#ai-send', panel), chips = $('#ai-chips', panel);
  var history = [], busy = false;

  function add(role, text, cls) {
    var d = document.createElement('div'); d.className = 'ai-m ' + role + (cls ? ' ' + cls : ''); d.textContent = text;
    log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
  }
  function fresh() {
    log.innerHTML = ''; history = [];
    add('bot', f(T.chatHello));
    chips.innerHTML = '';
    T.chips.forEach(function (c) { var b = document.createElement('button'); b.type = 'button'; b.textContent = f(c); b.addEventListener('click', function () { ask(b.textContent); }); chips.appendChild(b); });
  }
  function ask(q) {
    q = String(q || '').trim(); if (!q || busy) return;
    busy = true; input.value = ''; chips.hidden = true;
    add('user', q); history.push({ role: 'user', content: q });
    var typing = add('bot', T.typing, 'typing');
    var done = function (txt) { typing.remove(); add('bot', txt); history.push({ role: 'assistant', content: txt }); busy = false; input.focus({ preventScroll: true }); };
    if (AI.endpoint) {
      var ctl = new AbortController(), to = setTimeout(function () { ctl.abort(); }, 25000);
      fetch(AI.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: ctl.signal,
        body: JSON.stringify({ question: q, lang: L.lang, name: C.name, history: history.slice(-7, -1), context: buildContext() }) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { clearTimeout(to); var a = d && (d.answer || d.reply || d.text); if (!a) throw new Error('empty'); done(String(a)); })
        .catch(function () { clearTimeout(to); done(T.aiError + '\n\n' + answerLocal(q)); });
    } else {
      setTimeout(function () { done(answerLocal(q)); }, 380 + Math.random() * 320);
    }
  }
  send.addEventListener('click', function () { ask(input.value); });
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); ask(input.value); } });
  $('#ai-reset', panel).addEventListener('click', function () { fresh(); chips.hidden = false; });

  var aiBtn = $('#tb-ai', tb), lastFocus = null;
  function openAI() { lastFocus = document.activeElement; closeHelp(); panel.hidden = false; scrim.hidden = false; document.documentElement.classList.add('ai-open'); requestAnimationFrame(function () { panel.classList.add('on'); scrim.classList.add('on'); }); aiBtn.setAttribute('aria-expanded', 'true'); setTimeout(function () { input.focus({ preventScroll: true }); }, 120); }
  function closeAI() { if (panel.hidden) return; panel.classList.remove('on'); scrim.classList.remove('on'); document.documentElement.classList.remove('ai-open'); aiBtn.setAttribute('aria-expanded', 'false'); setTimeout(function () { panel.hidden = true; scrim.hidden = true; }, 220); if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); }
  aiBtn.addEventListener('click', function () { panel.hidden ? openAI() : closeAI(); });
  $('#ai-x', panel).addEventListener('click', closeAI);
  scrim.addEventListener('click', closeAI);
  fresh();

  /* ---------- Modal bantuan ---------- */
  var help = document.createElement('div');
  help.className = 'hp'; help.hidden = true; help.setAttribute('role', 'dialog'); help.setAttribute('aria-modal', 'true'); help.setAttribute('aria-label', T.helpTitle);
  help.innerHTML = '<div class="hp-card"><button type="button" class="ai-ib hp-x" aria-label="' + T.close + '">' + I.x + '</button><h3>' + T.helpTitle + '</h3><p>' + T.helpIntro + '</p><ol>' +
    T.helpItems.map(function (it) { return '<li><b>' + it[0] + '</b><span>' + it[1] + '</span></li>'; }).join('') + '</ol></div>';
  document.body.appendChild(help);
  var helpBtn = $('#tb-help', tb), helpFocus = null;
  function openHelp() { closeAI(); helpFocus = document.activeElement; help.hidden = false; requestAnimationFrame(function () { help.classList.add('on'); }); $('.hp-x', help).focus({ preventScroll: true }); }
  function closeHelp() { if (help.hidden) return; help.classList.remove('on'); setTimeout(function () { help.hidden = true; }, 200); if (helpFocus && helpFocus.focus) helpFocus.focus({ preventScroll: true }); }
  helpBtn.addEventListener('click', function () { help.hidden ? openHelp() : closeHelp(); });
  $('.hp-x', help).addEventListener('click', closeHelp);
  help.addEventListener('click', function (e) { if (e.target === help) closeHelp(); });

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAI(); closeHelp(); } });
})();
