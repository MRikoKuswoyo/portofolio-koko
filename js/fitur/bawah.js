/* =====================================================================
   BAWAH.JS — Bagian paling bawah: Peta + Kontak + Foto (klik = Spotify)
   ✏️ Ganti lokasi / lagu / foto di objek BAWAH di bawah ini.
   ===================================================================== */
(() => {
  const BAWAH = {
    heading: L.ui.bw.title,
    sub: L.ui.bw.kicker,
    map: {
      title: L.ui.bw.mapKicker,
      place: 'Onana Dimsum',
      lat: 3.6952106, lng: 98.6374366,
      link: 'https://maps.app.goo.gl/Nns1dbpJ7LdZcTdD8',
      tz: 'WIB (GMT+7)',
      note: L.ui.bw.reply,
      status: L.ui.bw.avail,
    },
    photo: {
      src: 'assets/foto/foto-nina.webp',
      artist: '.Feast',
      durationSec: 277,
      alt: L.lang === 'en' ? 'Photo of Muhammad Riko Kuswoyo — click to play the song' : 'Foto Muhammad Riko Kuswoyo — klik untuk memutar lagu',
      hint: 'Klik foto untuk memutar lagu',
      song: 'Nina',
      trackId: '1zFaLYA10ImwEejge3F5nm',
      trackUrl: 'https://open.spotify.com/track/1zFaLYA10ImwEejge3F5nm?si=d8cc031d0a1f4be0',
      lyricsLabel: 'Buka lirik di Spotify',
      /* LIRIK: tempel lirik berlisensi milikmu di sini (format LRC, satu baris per lirik, contoh baris: [00:12.50] teks lirik).
         Tanpa timestamp pun boleh (tampil statis). Dikosongkan karena lirik lagu berhak cipta. */
      autoLyrics: true,               // true = ambil lirik otomatis dari LRCLIB kalau lirik/nina.txt kosong
      lyricsFile: 'assets/lirik/nina.txt',   // tempel liriknya di file ini (lebih mudah daripada di sini)
      lrc: ``,
      /* AUDIO: klik foto = langsung putar file lagu di folder "lagu" (ganti nama file di bawah kalau perlu). */
      audio: 'assets/lagu/nina.m4a',
      preview: '',
    },
  };

  const root = document.getElementById('bawah');
  if (!root || typeof CONFIG === 'undefined') return;
  const esc = t => String(t ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const S = CONFIG.socials || [], I = CONFIG.contact.info || [];
  const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const IC = {
    github: svg('<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'),
    email: svg('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m21 8-9 6L3 8"/>'),
    whatsapp: svg('<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>'),
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>'),
    tiktok: svg('<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.4 1.9 4 4.5 4.2"/>'),
    pin: svg('<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    ext: svg('<path d="M7 17 17 7M8 7h9v9"/>'),
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.5-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z"/></svg>',
  };

  const rows = [];
  const gh = S.find(s => /github/i.test(s.name)); if (gh) rows.push({ k: 'github', l: 'GitHub', v: gh.handle, u: gh.url });
  const mail = I.find(r => r.type === 'mail'); if (mail) rows.push({ k: 'email', l: 'Email', v: mail.value, u: 'mailto:' + mail.value });
  const wa = I.find(r => r.type === 'wa'); if (wa) rows.push({ k: 'whatsapp', l: 'WhatsApp', v: wa.value, u: 'https://wa.me/' + wa.number });
  const li = I.find(r => /linkedin/i.test(r.label)); if (li) rows.push({ k: 'linkedin', l: 'LinkedIn', v: li.value, u: li.url });
  const ig = S.find(s => /instagram/i.test(s.name)); if (ig) rows.push({ k: 'instagram', l: 'Instagram', v: ig.handle, u: ig.url });
  const tk = S.find(s => /tiktok/i.test(s.name)); if (tk) rows.push({ k: 'tiktok', l: 'TikTok', v: tk.handle, u: tk.url });

  const M = BAWAH.map, P = BAWAH.photo;
  const mapSrc = `https://maps.google.com/maps?q=${M.lat},${M.lng}&z=16&output=embed`;

  root.innerHTML = `
    <p class="bw-kicker">${esc(BAWAH.sub)}</p>
    <h2 class="bw-h">${esc(BAWAH.heading)}</h2>
    <div class="bw-grid">
      <div class="bw-left">
        <div class="bw-card bw-map">
          <div class="bw-maphead">
            <div><small>${esc(M.title)}</small><b>${esc(M.place)}</b></div>
            <span class="bw-chip">${IC.clock}${esc(M.tz)}</span>
          </div>
          <div class="bw-frame">
            <iframe src="${mapSrc}" title="Peta lokasi ${esc(M.place)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
            <a class="bw-open" href="${esc(M.link)}" target="_blank" rel="noopener">${esc(L.ui.bw.openMaps)} ${IC.ext}</a>
          </div>
          <div class="bw-status"><span>${esc(M.note)}</span><b><i class="dot" aria-hidden="true"></i>${esc(M.status)}</b></div>
        </div>
      </div>
      <div class="bw-right">
        ${rows.map(r => `<a class="bw-row" href="${esc(r.u)}"${/^https?:/.test(r.u) ? ' target="_blank" rel="noopener"' : ''}>
          <span class="bw-ic">${IC[r.k]}</span>
          <span class="bw-tx"><small>${esc(r.l)}</small><b>${esc(r.v)}</b></span>
          <span class="bw-go">${IC.ext}</span></a>`).join('')}
      </div>
    </div>`;


  /* ---------- Foto di kartu "Find Me": klik = langsung putar lagu + tampil lirik di dalam kartu ---------- */
  const slot = document.getElementById('contact-photo');
  if (!slot) return;
  const ICO = {
    prev: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2v14H6zM20 5v14L9.5 12z"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 5h2v14h-2zM4 5v14l10.5-7z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  };
  slot.innerHTML = `
    <div class="cp" id="cp">
      <button type="button" class="cp-open" id="cp-open" aria-label="Putar lagu ${esc(P.song)}">
        <img src="${esc(P.src)}" alt="${esc(P.alt)}" loading="lazy">
        <span class="cp-dot">${ICO.play}</span>
      </button>
      <div class="cp-ly" id="cp-ly" hidden>
        <div class="ly-bg" style="background-image:url('${esc(P.src)}')"></div>
        <button type="button" class="ly-x" id="ly-x" aria-label="Tutup">×</button>
        <div class="ly-lines" id="ly-lines"></div>
        <p class="ly-note" id="ly-note" hidden>Lagu tidak bisa dimuat. Pastikan file lagu ada di folder &quot;lagu&quot;.</p>
        <div class="ly-meta"><b>${esc(P.song)}</b><span>${esc(P.artist)}</span></div>
        <div class="ly-bar"><span id="ly-cur">0:00</span><input id="ly-seek" type="range" min="0" max="1000" value="0" aria-label="Posisi lagu"><span id="ly-dur">0:00</span></div>
        <div class="ly-ctl">
          <button type="button" id="ly-prev" aria-label="Ulang dari awal">${ICO.prev}</button>
          <button type="button" id="ly-play" class="ly-pp" aria-label="Jeda">${ICO.pause}</button>
          <button type="button" id="ly-next" aria-label="Maju 10 detik">${ICO.next}</button>
        </div>
      </div>
    </div>`;
  const $$ = id => document.getElementById(id);
  const panel = $$('cp-ly'), linesEl = $$('ly-lines'), curEl = $$('ly-cur'), durEl = $$('ly-dur'), seekEl = $$('ly-seek'), ppEl = $$('ly-play'), noteEl = $$('ly-note');
  const fmt = t => { t = Math.max(0, Math.floor(t || 0)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };

  /* Lirik: dari lirik/nina.txt (kalau terisi) atau P.lrc. Format LRC; tanpa timestamp = tampil statis. Baris diawali # diabaikan. */
  let parsed = [], timed = false, lineEls = [], active = -1, rawText = String(P.lrc || '');
  const setLyrics = raw => {
    rawText = String(raw || ''); parsed = []; timed = false; active = -1;
    rawText.split(/\r?\n/).forEach(row => {
      if (/^\s*#/.test(row)) return;
      const stamps = [...row.matchAll(/\[(\d+):(\d+(?:\.\d+)?)\]/g)];
      const text = row.replace(/\[[^\]]*\]/g, '').trim();
      if (stamps.length) { timed = true; stamps.forEach(m => parsed.push({ t: +m[1] * 60 + parseFloat(m[2]), text })); }
      else if (text) parsed.push({ t: -1, text });
    });
    if (timed) parsed.sort((a, b) => a.t - b.t);
    linesEl.innerHTML = parsed.length
      ? parsed.map((l, i) => `<p data-i="${i}">${esc(l.text) || '&nbsp;'}</p>`).join('')
      : `<p class="ly-empty">Lirik tidak ditemukan.</p>`;
    lineEls = [...linesEl.querySelectorAll('p[data-i]')];
  };
  const setActive = pos => {
    if (!timed || !lineEls.length) return;
    let n = -1; for (let i = 0; i < parsed.length; i++) { if (parsed[i].t <= pos + .2) n = i; else break; }
    if (n === active) return; active = n;
    lineEls.forEach((el, i) => { el.classList.toggle('on', i === n); el.classList.toggle('past', i < n); });
    if (n >= 0) { const el = lineEls[n]; linesEl.scrollTo({ top: el.offsetTop - linesEl.clientHeight / 2 + el.clientHeight / 2, behavior: 'smooth' }); }
  };
  setLyrics(P.lrc);
  const fileReady = P.lyricsFile
    ? fetch(P.lyricsFile).then(r => r.ok ? r.text() : '').then(t => { if (/\S/.test(String(t).replace(/^\s*#.*$/gm, ''))) setLyrics(t); }).catch(() => {})
    : Promise.resolve();
  /* Lirik OTOMATIS: kalau lirik/nina.txt & P.lrc kosong, ambil lirik tersinkron dari LRCLIB (lrclib.net) saat foto pertama kali diklik. */
  let autoTried = false;
  const autoLyrics = () => {
    if (autoTried || parsed.length || !P.autoLyrics) return; autoTried = true;
    linesEl.innerHTML = '<p class="ly-empty">Memuat lirik…</p>';
    const pick = d => (d && (d.syncedLyrics || d.plainLyrics)) || '';
    const q = o => new URLSearchParams(o).toString();
    fetch('https://lrclib.net/api/get?' + q({ track_name: P.song, artist_name: P.artist, duration: Math.round(P.durationSec || 0) }))
      .then(r => r.ok ? r.json() : null)
      .then(d => pick(d) || fetch('https://lrclib.net/api/search?' + q({ track_name: P.song, artist_name: P.artist }))
        .then(r => r.ok ? r.json() : []).then(a => pick((a || []).find(x => x.syncedLyrics) || (a || [])[0])))
      .then(t => setLyrics(t || ''))
      .catch(() => setLyrics(''));
  };

  /* Pemutar: <audio> biasa, jadi langsung bunyi saat diklik (tidak lewat iframe Spotify) */
  const srcs = [P.audio, P.preview].filter(Boolean);
  const audio = new Audio(); audio.preload = 'none';
  let si = 0, dragging = false, dur = P.audio ? (P.durationSec || 0) : 30;
  const paintPlay = p => { ppEl.innerHTML = p ? ICO.pause : ICO.play; ppEl.setAttribute('aria-label', p ? 'Jeda' : 'Putar'); };
  const paintTime = () => { const pos = audio.currentTime || 0; curEl.textContent = fmt(pos); durEl.textContent = fmt(dur); if (!dragging && dur) seekEl.value = Math.round(Math.min(1, pos / dur) * 1000); setActive(pos); };
  const start = () => {
    noteEl.hidden = true;
    if (!audio.src) audio.src = srcs[si];
    try { window.__spPlaylist && window.__spPlaylist.pause(); } catch (e) {}
    const r = audio.play(); if (r && r.catch) r.catch(() => { if (audio.error) return; paintPlay(false); });
  };
  audio.addEventListener('play', () => paintPlay(true));
  audio.addEventListener('pause', () => paintPlay(false));
  audio.addEventListener('timeupdate', paintTime);
  audio.addEventListener('loadedmetadata', () => { if (isFinite(audio.duration) && audio.duration > 0) { dur = audio.duration; paintTime(); } });
  audio.addEventListener('ended', () => { audio.currentTime = 0; paintPlay(false); paintTime(); });
  audio.addEventListener('error', () => {
    if (si < srcs.length - 1) { si++; audio.src = srcs[si]; audio.play().catch(() => {}); }
    else { paintPlay(false); noteEl.hidden = false; }
  });
  paintTime();

  $$('cp-open').addEventListener('click', () => { panel.hidden = false; start(); fileReady.then(autoLyrics); $$('ly-x').focus({ preventScroll: true }); });
  $$('ly-x').addEventListener('click', () => { audio.pause(); audio.currentTime = 0; panel.hidden = true; paintTime(); $$('cp-open').focus({ preventScroll: true }); });
  ppEl.addEventListener('click', () => { if (audio.paused) start(); else audio.pause(); });
  $$('ly-prev').addEventListener('click', () => { audio.currentTime = 0; paintTime(); });
  $$('ly-next').addEventListener('click', () => { audio.currentTime = Math.min(dur, (audio.currentTime || 0) + 10); paintTime(); });
  seekEl.addEventListener('input', () => { dragging = true; curEl.textContent = fmt(seekEl.value / 1000 * dur); });
  seekEl.addEventListener('change', () => { dragging = false; if (dur) { audio.currentTime = seekEl.value / 1000 * dur; paintTime(); } });

  /* ---------- Mode SYNC (buka index.html?sync): bikin timestamp lirik dengan "tap" saat lagu diputar ---------- */
  if (/[?&]sync\b/.test(location.search)) {
    const box = document.createElement('div'); box.className = 'ly-sync';
    box.innerHTML = `<p id="sy-next" class="sy-next"></p><div class="sy-btns"><button type="button" id="sy-tap">Tap (Spasi)</button><button type="button" id="sy-undo">Mundur</button><button type="button" id="sy-copy">Salin LRC</button></div><textarea id="sy-out" rows="3" readonly placeholder="Hasil LRC muncul di sini"></textarea>`;
    panel.insertBefore(box, panel.querySelector('.ly-meta'));
    const nextEl = $$('sy-next'), outEl = $$('sy-out');
    let items = [], stamps = [];
    const stampFmt = t => String(Math.floor(t / 60)).padStart(2, '0') + ':' + (t % 60).toFixed(2).padStart(5, '0');
    const load = () => { items = rawText.split(/\r?\n/).filter(r => !/^\s*#/.test(r)).map(r => r.replace(/\[[^\]]*\]/g, '').trim()).filter(Boolean); stamps = []; };
    const show = () => {
      outEl.value = stamps.map((t, i) => '[' + stampFmt(t) + '] ' + items[i]).join('\n');
      nextEl.textContent = !items.length ? 'Isi dulu assets/lirik/nina.txt' : stamps.length >= items.length ? 'Selesai — salin hasilnya ke assets/lirik/nina.txt' : 'Berikutnya: ' + items[stamps.length];
    };
    load(); show();
    const tap = () => {
      if (!items.length || stamps.length >= items.length || audio.paused) return;
      stamps.push(audio.currentTime); show();
      if (stamps.length >= items.length) setLyrics(outEl.value);
    };
    $$('sy-tap').addEventListener('click', tap);
    $$('sy-undo').addEventListener('click', () => { stamps.pop(); show(); });
    $$('sy-copy').addEventListener('click', () => { outEl.select(); try { navigator.clipboard.writeText(outEl.value); } catch (e) { document.execCommand('copy'); } });
    document.addEventListener('keydown', e => { if (e.code === 'Space' && !panel.hidden && !/^(INPUT|TEXTAREA|BUTTON)$/.test(e.target.tagName)) { e.preventDefault(); tap(); } });
    panel.addEventListener('click', () => {}, { passive: true });
    $$('cp-open').addEventListener('click', () => { rawText && stamps.length === 0 && load(); show(); });
  }
})();
