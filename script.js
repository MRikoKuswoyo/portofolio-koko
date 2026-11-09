/* =====================================================================
   ⚙️  SCRIPT.JS — MENGISI KONTEN DARI data.js
   Biasanya tidak perlu diubah.
   Latar titik → latar.js · Kartu ID 3D → kartu3d.js
   ===================================================================== */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const C_ = CONFIG;
const get = (o, path) => path.split('.').reduce((a, k) => a?.[k], o);

/* Amankan teks agar karakter khusus tidak merusak HTML */
const esc = t => String(t ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let toastT; const toast = (t, ms = 2200) => { const e = $('#toast'); e.textContent = t; e.classList.add('s'); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove('s'), ms); };
const ARROW_S = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

/* ---------- Umum ---------- */
document.title = C_.siteTitle;
// Isi otomatis semua elemen bertanda data-text="..." / data-placeholder="..." dari CONFIG
$$('[data-text]').forEach(e => e.textContent = get(C_, e.dataset.text));
$$('[data-placeholder]').forEach(e => e.placeholder = get(C_, e.dataset.placeholder));
const NAV_ICONS = {
  '#home':      '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  '#about':     '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  '#portfolio': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
  '#contact':   '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/>',
};
$('#nav').innerHTML =
  C_.nav.map((n, i) => `<a href="${esc(n.target)}"${i === 0 ? ' class="on"' : ''}><svg class="nav-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${NAV_ICONS[n.target] || '<circle cx="12" cy="12" r="3"/>'}</svg><span>${esc(n.label)}</span></a>`).join('') +
  `<button id="snd" aria-label="${esc(C_.labels.soundButton)}">🔇</button>`;

/* ---------- Home ---------- */
const ICONS = {
  github:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>',
  tiktok:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>',
};
const MENU_ICONS = {
  mail:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  chat:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/></svg>',
};
const H = C_.hero, AV = H.availability || {}, MENU = H.contactMenu || [];
const menuUrl = m => m.type === 'link' ? (m.url || (C_.socials.find(s => s.name === m.social) || {}).url || '#') : (m.target || '#');
const AVAIL_HTML = AV.enabled === false ? '' : `<a class="avail" href="${esc(AV.target || '#contact')}"><i class="dot" aria-hidden="true"></i>${esc(AV.label || 'Terbuka untuk kolaborasi')}</a>`;
$('#hero-text').innerHTML = `
  ${AVAIL_HTML ? AVAIL_HTML.replace('class="avail"', 'class="avail avail-top"') : ''}
  <h1 aria-label="${esc((H.greetings && H.greetings[0]) || (H.titleLight + ' ' + H.titleBold))}"><span class="grad" id="typed-h">${esc((H.greetings && H.greetings[0]) || (H.titleLight + ' ' + H.titleBold))}</span><span class="caret caret-h" aria-hidden="true"></span></h1>
  <div class="sub"><span id="typed"></span><span class="caret" aria-hidden="true"></span></div>
  <p>${esc(H.text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')}</p>
  <div class="row">
    <a class="btn" href="${esc(H.buttonPrimary.target)}">${esc(H.buttonPrimary.label)}</a>
    <div class="cmenu" id="cmenu">
      <button type="button" class="btn o" id="cmenu-btn" aria-haspopup="menu" aria-expanded="false" aria-controls="cmenu-list">${esc(H.buttonSecondary.label)}<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
      <div class="cmenu-list" id="cmenu-list" role="menu" hidden>
        ${MENU.map((m, i) => `<a role="menuitem" class="cmenu-item" data-i="${i}" href="${esc(m.type === 'download' ? (m.file || '#') : menuUrl(m))}"${m.type === 'link' ? ' target="_blank" rel="noopener"' : ''}${m.type === 'download' ? ` download="${esc(m.saveAs || '')}"` : ''}><span class="ci">${MENU_ICONS[m.icon] || ''}</span><span class="ct"><b>${esc(m.label)}</b><small>${esc(m.desc || '')}</small></span></a>`).join('')}
      </div>
    </div>
  </div>
  <div class="find">FIND ME ${C_.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" title="${esc(s.name)}">${ICONS[s.name.toLowerCase()] || esc(s.name)}</a>`).join('')}${AVAIL_HTML}</div>`;

/* ---------- Menu "Hubungi Saya" (pilihan: kirim pesan / unduh CV / chat) ---------- */
(() => {
  const wrap = $('#cmenu'), btn = $('#cmenu-btn'), list = $('#cmenu-list');
  if (!wrap) return;
  const open = v => { wrap.classList.toggle('open', v); btn.setAttribute('aria-expanded', v); list.hidden = !v; if (v) list.querySelector('a')?.focus({ preventScroll: true }); };
  btn.addEventListener('click', () => open(!wrap.classList.contains('open')));
  document.addEventListener('pointerdown', e => { if (!wrap.contains(e.target)) open(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && wrap.classList.contains('open')) { open(false); btn.focus(); } });
  list.addEventListener('click', e => {
    const a = e.target.closest('.cmenu-item'); if (!a) return;
    const m = MENU[+a.dataset.i]; open(false);
    if (m.type === 'download') {
      e.preventDefault();
      const go = () => { const t = document.createElement('a'); t.href = m.file; t.download = m.saveAs || ''; document.body.appendChild(t); t.click(); t.remove(); toast('CV sedang diunduh'); };
      // cek dulu filenya ada; kalau tidak ada beri tahu (bukan halaman error)
      fetch(m.file, { method: 'HEAD' }).then(r => r.ok ? go() : toast(m.missing || 'File CV belum tersedia')).catch(go);
    }
  });
})();

/* ---------- About ---------- */
const A = C_.about, P = C_.portfolio;
$('#about-heading').textContent = A.heading;
const DOC_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>';
const CODE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>';
const CVB = A.cvButton || { label: L.t('viewCV'), file: 'cv.pdf' }, PJB = A.projButton || H.buttonPrimary;
$('#about-intro').innerHTML = `
  <h1 class="ah-title"><span class="hi">${esc(A.greeting)}</span><br><b>${esc(C_.name)}</b></h1>
  <p class="ah-btn"><a class="btn ic" href="${esc(CVB.file)}" target="_blank" rel="noopener">${DOC_ICON}${esc(CVB.label)}</a></p>`;
$('#about-photo').innerHTML = A.photo
  ? `<span class="ph-glow" aria-hidden="true"></span><img class="ph-me" src="${esc(A.photo)}" alt="${esc(A.photoAlt || C_.name)}" draggable="false">${A.photoReveal ? `<img class="ph-rev" src="${esc(A.photoReveal)}" alt="" aria-hidden="true" draggable="false"><i class="ph-dot" aria-hidden="true"></i>` : ''}`
  : `<div class="ph-empty">🌿<span>${esc(A.photoPlaceholder)}</span></div>`;
$('#about-text').innerHTML = `${L.t('iAm')} <b>${esc(A.role)}</b> ${esc(A.text)}`;
$('#about-cta').innerHTML = `<a class="btn ic" href="${esc(PJB.target)}">${CODE_ICON}${esc(PJB.label)}</a>`;

/* ---------- Efek foto: foto kedua muncul di bawah kursor ---------- */
(() => {
  const st = $('#about-photo'); if (!st || !st.querySelector('.ph-rev')) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let tx = 0, ty = 0, x = 0, y = 0, on = false, raf = 0, hideT = 0;
  const loop = () => {
    x += (tx - x) * .22; y += (ty - y) * .22;           // gerak halus mengikuti kursor
    st.style.setProperty('--mx', x + 'px'); st.style.setProperty('--my', y + 'px');
    raf = (on || Math.abs(tx - x) > .3 || Math.abs(ty - y) > .3) ? requestAnimationFrame(loop) : 0;
  };
  const move = e => {
    const r = st.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top;
    if (!on) { x = tx; y = ty; }
    on = true; st.classList.add('on'); clearTimeout(hideT);
    if (!raf) raf = requestAnimationFrame(loop);
  };
  const off = (delay = 0) => { clearTimeout(hideT); hideT = setTimeout(() => { on = false; st.classList.remove('on'); }, delay); };
  st.addEventListener('pointerenter', move); st.addEventListener('pointermove', move);
  st.addEventListener('pointerdown', move);
  st.addEventListener('pointerleave', e => off(e.pointerType === 'touch' ? 1200 : 0));
  st.addEventListener('pointerup', e => { if (e.pointerType === 'touch') off(1200); });
  if (still) st.classList.add('still');
})();

/* ---------- Timeline Education & Experience ----------
   Nomor pertama terang, sisanya redup. Arahkan kursor / klik nomor lain -> terang.
   Lebih dari 3 item -> daftar bisa di-scroll ke bawah. */
const TL_VISIBLE = 3; // jumlah item yang terlihat sebelum muncul scroll
const initials = t => String(t || '').replace(/[^A-Za-zÀ-ÿ ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
const tlLogo = x => { const m = esc(x.mono || initials(x.title)); return x.logo
  ? `<span class="tl-logo"><img src="${esc(x.logo)}" alt="Logo ${esc(x.title)}" loading="lazy" draggable="false" onerror="this.parentNode.classList.add('mono');this.replaceWith(document.createTextNode('${m}'))"></span>`
  : `<span class="tl-logo mono" aria-hidden="true">${m}</span>`; };
function timeline(sel, list) {
  const box = $(sel); if (!box) return;
  box.innerHTML = `<div class="tl-scroll">${list.map((x, i) => {
    const tag = x.slug ? 'a' : 'div', attr = x.slug ? ` href="tentang.html?i=${esc(x.slug)}"` : ` tabindex="0" role="button"`;
    return `
    <${tag} class="tl-item${i === 0 ? ' on' : ''}"${attr} aria-label="${esc(x.title)}${x.slug ? L.t('viewDetailAria') : ''}">
      <span class="tl-num">${i + 1}</span>
      <div class="tl-body">
        <div class="tl-head">${tlLogo(x)}<div class="tl-tt"><b>${esc(x.title)}</b>${x.role ? `<span class="tl-role">${esc(x.role)}</span>` : ''}</div></div>
        ${x.meta || x.desc ? `<p class="tl-meta">${esc(x.meta || x.desc)}</p>` : ''}
        <div class="tl-foot">${x.tag ? `<span class="tl-tag">${esc(x.tag)}</span>` : ''}${x.year ? `<small class="tl-year">${esc(x.year)}</small>` : ''}${x.slug ? `<span class="tl-more">${L.t('viewDetail')}${ARROW_S}</span>` : ''}</div>
      </div>
    </${tag}>`; }).join('')}</div>`;
  const sc = box.firstElementChild, items = [...sc.children];
  let sel_ = 0;
  const show = n => items.forEach((it, i) => it.classList.toggle('on', i === n));
  items.forEach((it, i) => {
    it.addEventListener('pointerenter', () => show(i));
    it.addEventListener('focus', () => show(i));
    it.addEventListener('click', () => { sel_ = i; show(i); });
  });
  sc.addEventListener('pointerleave', () => show(sel_));
  sc.addEventListener('focusout', () => show(sel_));
  const fit = () => {
    if (!sc.offsetParent) return;
    if (items.length > TL_VISIBLE) {
      sc.style.maxHeight = (items[TL_VISIBLE].offsetTop - items[0].offsetTop + 40) + 'px';
      sc.classList.add('scrolls');
    } else { sc.style.maxHeight = ''; sc.classList.remove('scrolls'); }
    edge();
  };
  const edge = () => sc.classList.toggle('more', sc.scrollHeight - sc.scrollTop - sc.clientHeight > 4 && sc.classList.contains('scrolls'));
  sc.addEventListener('scroll', edge, { passive: true });
  new ResizeObserver(fit).observe(sc);
  addEventListener('resize', fit); fit();
}
timeline('#edu', A.education);
timeline('#exp', A.experience);
timeline('#org', A.organization || []);

/* ---------- Sertifikat: lightbox (dipakai kartu, folder, capaian, dan chip TOEFL) ---------- */
const LBX = document.createElement('div');
LBX.className = 'lightbox'; LBX.hidden = true;
LBX.innerHTML = '<button type="button" class="lb-x" aria-label="' + L.t('close') + '">×</button><figure class="lb-fig"><img alt=""><figcaption><b></b><a class="btn o" download>' + L.t('download') + '</a><a class="btn o lb-src" target="_blank" rel="noopener" hidden></a></figcaption></figure>';
document.body.appendChild(LBX);
function openCert(src, file, title, url, urlLabel) {
  const im = LBX.querySelector('img'), a = LBX.querySelector('a:not(.lb-src)'), u = LBX.querySelector('.lb-src');
  u.hidden = !url; if (url) { u.href = url; u.textContent = (urlLabel || L.t('openSource')) + ' ↗'; }
  im.src = src; im.alt = title || L.t('cert');
  LBX.querySelector('b').textContent = title || '';
  const f = file || src; a.href = f; a.textContent = /\.pdf$/i.test(f) ? L.t('dlPdf') : L.t('dlImg');
  a.setAttribute('download', (title || 'sertifikat').replace(/[^\w-]+/g, '-') + (/\.pdf$/i.test(f) ? '.pdf' : /\.png$/i.test(f) ? '.png' : '.webp'));
  const two = (typeof SRT !== 'undefined') && Object.values(SRT).find(c => c.back && c.image === src);   // sertifikat dua sisi (depan ⇄ belakang)
  window.CertFlip && CertFlip.mount(LBX, two || null, a);
  LBX.hidden = false;
}
LBX.addEventListener('click', e => { if (!e.target.closest('a,.lb-flip,.lb-sides') && e.target.tagName !== 'IMG') LBX.hidden = true; });
LBX.querySelector('figcaption').style.flexWrap = 'wrap';
addEventListener('keydown', e => { if (e.key === 'Escape') LBX.hidden = true; });
const openKey = k => { const c = SRT[k]; if (c) openCert(c.image, c.file, c.title); };

/* ---------- Organisasi sudah di timeline; Capaian & Kemampuan ---------- */
$('#cap') && ($('#cap').innerHTML = `<ul class="cap-list" id="cap-list">${(A.capaian || []).map(c => `
  <li class="cap-i"><span class="cap-y">${esc(c.year)}</span><span class="cap-t">${esc(c.title)}</span>${c.cert && SRT[c.cert]
    ? `<button type="button" class="cap-b" data-cert="${esc(c.cert)}">${L.t('cert')}</button>`
    : c.slug ? `<a class="cap-b" href="tentang.html?i=${esc(c.slug)}">Detail</a>` : c.url ? `<a class="cap-b" href="${esc(c.url)}" target="_blank" rel="noopener">Sumber ↗</a>` : ''}</li>`).join('')}</ul>`);
$('#cap-list')?.addEventListener('click', e => { const b = e.target.closest('[data-cert]'); if (b) openKey(b.dataset.cert); });
(() => {
  const S = A.skills, box = $('#skills'); if (!S || !box) return;
  box.innerHTML = `<div class="g2 sk-row">
    <div class="card sk"><h3>${esc(S.personalTitle)}</h3><div class="sk-chips">${S.personal.map(t => `<span class="sk-chip">${esc(t)}</span>`).join('')}</div>
      <h3 class="sk-sub">${esc(S.languageTitle)}</h3>
      ${S.languages.map(l => `<p class="sk-lang"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></p>`).join('')}
      <div class="sk-chips">${(S.toefl || []).map(t => `<button type="button" class="sk-chip btn-chip" data-cert="${esc(t.cert)}">${esc(t.label)}</button>`).join('')}</div></div>
    <div class="card sk"><h3>${esc(S.technicalTitle)}</h3><ul class="sk-list">${S.technical.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
  </div>`;
  box.addEventListener('click', e => { const b = e.target.closest('[data-cert]'); if (b) openKey(b.dataset.cert); });
})();

/* ---------- Folder statistik (Projects / Certificates / Awards) ----------
   Hover: isi folder terangkat sedikit. Klik: semua isi terangkat & terbuka (klik lagi / klik di luar = tutup).
   Tombol "ooo" membuka tab Portfolio yang sesuai. Gambar diambil dari field "image" di data.js. */
const FD_BACK = 'M22 40H175C195 40 200 0 225 0H378Q400 0 400 22V298Q400 320 378 320H22Q0 320 0 298V62Q0 40 22 40Z';
const FD_FRONT = 'M22 90H190C215 90 215 120 240 120H378Q400 120 400 142V298Q400 320 378 320H22Q0 320 0 298V112Q0 90 22 90Z';
const FD_ICON = { projects: '</>', certificates: '🏅', achievements: '🏆' };
const FD_DOTS = '<svg viewBox="0 0 40 16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="7" cy="8" r="5"/><circle cx="20" cy="8" r="5"/><circle cx="33" cy="8" r="5"/></svg>';
$('#stats').innerHTML = A.stats.map(s => {
  const list = P[s.source] || [];
  const v = (s.value === 'auto' || s.value === '' || s.value == null) ? list.length : s.value;
  const label = String(s.label || '').charAt(0).toUpperCase() + String(s.label || '').slice(1).toLowerCase();
  // Klik 1x: folder terbuka. Klik 2x pada isi folder: menuju tujuannya (halaman proyek / sertifikat / tab Portfolio)
  const tgt = x => x.slug ? ` data-href="project.html?p=${esc(x.slug)}"` : (x.image && !x.slug) ? ` data-lb="${esc(x.image)}" data-file="${esc(x.file || '')}" data-title="${esc(x.title || '')}" data-url="${esc(x.url || '')}" data-ul="${esc(x.urlLabel || '')}"` : ` data-tab="${esc(s.source)}"`;
  const docs = (list.length ? list : [{}, {}, {}]).slice(0, 4).map((x, i) => x.image
    ? `<div class="fd-doc" style="--i:${i};background-image:url('${esc(x.image)}')"${tgt(x)} title="${esc(x.title || '')}"></div>`
    : `<div class="fd-doc ph" style="--i:${i}"${tgt(x)} title="${esc(x.title || '')}"><span>${esc(FD_ICON[s.source] || '📁')}</span><em>${esc(x.title || '')}</em></div>`).join('');
  return `<div class="stat folder" tabindex="0" role="button" aria-expanded="false" aria-label="${esc(label)}: ${esc(v)}. ${esc(s.desc || '')}">
    <svg class="fd-back" viewBox="0 0 400 320" preserveAspectRatio="none" aria-hidden="true"><path d="${FD_BACK}"/></svg>
    <svg class="fd-glow" viewBox="0 0 400 320" preserveAspectRatio="none" aria-hidden="true"><path class="g-trail" pathLength="100" d="${FD_BACK}"/><path class="g-head" pathLength="100" d="${FD_BACK}"/></svg>
    <div class="fd-docs">${docs}</div>
    <svg class="fd-front" viewBox="0 0 400 320" preserveAspectRatio="none" aria-hidden="true"><path d="${FD_FRONT}"/></svg>
    <div class="fd-info"><i>${esc(v)}</i><b>${esc(label)}</b></div>
    <button class="fd-go" type="button" data-tab="${esc(s.source)}" aria-label="${L.t('open')} ${esc(label)}">${FD_DOTS}</button>
  </div>`;
}).join('');
const folders = $$('.folder');
const setOpen = (f, on) => { f.classList.toggle('open', on); f.setAttribute('aria-expanded', on); };
folders.forEach(f => {
  f.addEventListener('click', e => {
    if (e.target.closest('.fd-go')) return;
    const d = e.target.closest('.fd-doc');
    if (d && f.classList.contains('open')) {           // klik ke-2 pada isi folder
      e.stopPropagation();
      if (d.dataset.href) (window.openDetail || (u => { location.href = u; }))(d.dataset.href);
      else if (d.dataset.lb) openCert(d.dataset.lb, d.dataset.file, d.dataset.title, d.dataset.url, d.dataset.ul);
      else { const k = d.dataset.tab; if (P[k]) showTab(k); $('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }
      return;
    }
    setOpen(f, !f.classList.contains('open'));
  });
  f.addEventListener('keydown', e => {
    if (e.target !== f) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(f, !f.classList.contains('open')); }
    if (e.key === 'Escape') setOpen(f, false);
  });
  f.querySelector('.fd-go').addEventListener('click', e => {
    e.stopPropagation();
    const k = e.currentTarget.dataset.tab;
    if (P[k]) showTab(k);
    $('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('click', e => folders.forEach(f => { if (!f.contains(e.target)) setOpen(f, false); }));

const M = C_.music;
const SP_ID = (String(M.spotifyUrl || M.button.url).match(/playlist\/([A-Za-z0-9]+)/) || [])[1];
const SP_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
const SP_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
$('#music').innerHTML = `
  <div class="mu-text">
    <h3>${esc(M.titleLine1)}<br><em>${esc(M.titleLine2)}</em></h3>
    <p>${esc(M.text)}</p>
    <a class="btn o ic" style="margin-top:18px" href="${esc(M.button.url)}" target="_blank" rel="noopener">${SP_ICON}${esc(M.button.label)}${SP_ARROW}</a>
  </div>
  <div class="mu-player">${SP_ID
    ? `<iframe class="sp-embed" src="https://open.spotify.com/embed/playlist/${esc(SP_ID)}?utm_source=generator&theme=0" title="Playlist Spotify ${esc(M.playlistName || '')}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    : `<b style="font-size:22px">${esc(M.playlistName)}</b><p>${esc(M.playlistOwner)}</p>${M.tracks.map((t, i) => `<div class="trk"><span>${i + 1} &nbsp;${esc(t.title)}<small>${esc(t.artist)}</small></span>${esc(t.time)}</div>`).join('')}`}
  </div>`;

/* ---------- Portfolio (tab) ---------- */
$('#portfolio-heading').textContent = P.heading;
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const TAB_ICON = {
  projects:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
  certificates: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/></svg>',
  achievements: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
  webinars:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/></svg>',
  techStack:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
};
/* Kartu portfolio: gambar -> judul -> deskripsi -> tag -> tombol.
   Proyek (punya slug) → seluruh kartu bisa diklik menuju halaman detail. Sertifikat/penghargaan (punya gambar) → klik membuka sertifikat. */
const pcard = (x, fallback, i = 0) => {
  const href = x.slug ? `project.html?p=${encodeURIComponent(x.slug)}` : '';
  const cert = !x.slug && !!x.image;
  const attrs = href ? ` data-href="${esc(href)}" tabindex="0" role="link" aria-label="${L.t('openDetail')} ${esc(x.title)}"`
    : cert ? ` data-lb="${esc(x.image)}" data-file="${esc(x.file || '')}" data-title="${esc(x.title)}" data-url="${esc(x.url || '')}" data-ul="${esc(x.urlLabel || '')}" tabindex="0" role="button" aria-label="${L.t('viewCert')} ${esc(x.title)}"` : '';
  return `<article class="card pc${href || cert ? ' go' : ''}" style="--n:${i}"${attrs}>
  <svg class="pc-glow" aria-hidden="true"><rect class="g-trail" pathLength="100"/><rect class="g-head" pathLength="100"/></svg>
  <div class="pc-shot">${x.image
    ? `<img src="${esc(x.image)}" alt="${esc(x.title)}" loading="lazy" draggable="false" onerror="this.remove()"><span class="pc-ph" aria-hidden="true">${esc(fallback)}</span>`
    : `<span class="pc-ph" aria-hidden="true">${esc(fallback)}</span>`}</div>
  <h3>${esc(x.title)}</h3>
  <p>${esc(x.desc)}</p>
  ${x.tags && x.tags.length ? `<div class="pc-tags">${x.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
  ${href ? `<a class="btn o ic" href="${esc(href)}">Details${ARROW}</a>`
    : cert ? `<span class="btn o ic">${L.t('viewCert')}${ARROW}</span>`
    : x.url ? `<a class="btn o ic" href="${esc(x.url)}" target="_blank" rel="noopener">Details${ARROW}</a>` : ''}
</article>`;
};
const renderers = {
  projects:     (x, i) => pcard(x, '</>', i),
  certificates: (x, i) => pcard(x, '🏅', i),
  achievements: (x, i) => pcard(x, '🏆', i),
  webinars:     (x, i) => pcard(x, '🎤', i),
  techStack:    x => typeof x === 'string'
    ? `<div class="card"><h3>${esc(x)}</h3></div>`
    : `<div class="card ts"><h3>${esc(x.group)}</h3><div class="sk-chips">${(x.items || []).map(t => `<span class="sk-chip">${esc(t)}</span>`).join('')}</div></div>`,
};
$('#tabs').innerHTML = P.tabs.map((t, i) => `<button${i === 0 ? ' class="on"' : ''} data-t="${esc(t.key)}">${TAB_ICON[t.key] || ''}<span>${esc(t.label)}</span></button>`).join('');
/* Maksimal 3 kartu terlihat; sisanya redup & bisa di-scroll ke bawah (seperti Education / Experience).
   Kartu yang terpotong di tepi area scroll meredup, yang penuh terlihat jadi terang; hover = terang. */
const PC_VISIBLE = 3;   // jumlah kartu yang terlihat sebelum muncul scroll
const PC_PEEK = 120;    // intip sedikit kartu berikutnya (px) sebagai penanda masih ada isi
let pcRO, pcIO;
function setupCards() {
  const sc = $('#tab');
  pcRO?.disconnect(); pcIO?.disconnect();
  sc.style.maxHeight = ''; sc.classList.remove('scrolls', 'more'); sc.scrollTop = 0;
  const items = [...sc.querySelectorAll(':scope > .pc')];
  if (!items.length) return;
  const glow = c => {
    const w = c.offsetWidth, h = c.offsetHeight, g = c.querySelector('.pc-glow');
    if (!g || !w || !h) return;
    g.setAttribute('viewBox', `0 0 ${w} ${h}`);
    g.querySelectorAll('rect').forEach(r => { r.setAttribute('x', .5); r.setAttribute('y', .5); r.setAttribute('width', w - 1); r.setAttribute('height', h - 1); r.setAttribute('rx', 17.5); });
  };
  const edge = () => sc.classList.toggle('more', sc.classList.contains('scrolls') && sc.scrollHeight - sc.scrollTop - sc.clientHeight > 4);
  const fit = () => {
    if (!sc.offsetParent) return;
    if (items.length > PC_VISIBLE) {
      sc.style.maxHeight = (items[PC_VISIBLE].offsetTop + PC_PEEK) + 'px';
      sc.classList.add('scrolls');
    } else { sc.style.maxHeight = ''; sc.classList.remove('scrolls'); }
    edge();
  };
  pcRO = new ResizeObserver(es => { es.forEach(e => glow(e.target)); fit(); });
  items.forEach(c => pcRO.observe(c));
  if (items.length > PC_VISIBLE) {
    pcIO = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('dim', e.intersectionRatio < .9)),
      { root: sc, threshold: [0, .25, .5, .75, .9, 1] });
    items.forEach(c => pcIO.observe(c));
  }
  sc.onscroll = edge;
  fit();
}
addEventListener('resize', () => { const sc = $('#tab'); if (sc.querySelector('.pc')) setupCards(); });
const showTab = k => {
  $('#tab').innerHTML = (P[k] || []).map(renderers[k]).join('');
  $$('.tabs button').forEach(b => b.classList.toggle('on', b.dataset.t === k));
  setupCards();
};
$$('.tabs button').forEach(b => b.onclick = () => showTab(b.dataset.t));
/* Klik kartu: proyek → halaman detail · sertifikat/penghargaan → buka sertifikat */
const cardGo = c => { if (c.dataset.href) (window.openDetail || (u => { location.href = u; }))(c.dataset.href); else if (c.dataset.lb) openCert(c.dataset.lb, c.dataset.file, c.dataset.title, c.dataset.url, c.dataset.ul); };
$('#tab').addEventListener('click', e => { const c = e.target.closest('.pc.go'); if (c && !e.target.closest('a')) cardGo(c); });
$('#tab').addEventListener('keydown', e => { const c = e.target.closest?.('.pc.go'); if (c && e.target === c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); cardGo(c); } });
showTab(P.tabs[0].key);

/* ---------- Contact ---------- */
const K = C_.contact;
$('#contact-heading').textContent = K.heading;
$('#form-title').textContent = K.formTitle;
$('#form-text').textContent = K.formText;
$('#sm').textContent = K.sendLabel;
$('#findme').textContent = K.findMeLabel;
const SOC_LOGO = {
  instagram: '<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#feda75"/><stop offset=".3" stop-color="#fa7e1e"/><stop offset=".55" stop-color="#d62976"/><stop offset=".8" stop-color="#962fbf"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="url(#ig)"/><rect x="11.5" y="11.5" width="25" height="25" rx="7.5" fill="none" stroke="#fff" stroke-width="2.6"/><circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-width="2.6"/><circle cx="31.4" cy="16.6" r="1.7" fill="#fff"/></svg>',
  tiktok: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="#0b0b0f"/><g transform="translate(11 10) scale(1.1)"><path id="tk" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#25f4ee" transform="translate(-.9 .7)"/><use href="#tk" fill="#fe2c55" transform="translate(1.8 -1.4)"/><use href="#tk" fill="#fff"/></g></svg>',
  github: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill="#1b1f24"/><g transform="translate(10 10) scale(1.75)"><path fill="#fff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></g></svg>',
};
$('#contact-socials').innerHTML = C_.socials.map(s => `<a class="soc" href="${esc(s.url)}" target="_blank" rel="noopener"><span class="soc-ic">${SOC_LOGO[s.name.toLowerCase()] || ''}</span><span class="soc-tx"><b>${esc(s.name)}</b><small>${esc(s.handle)}</small></span><svg class="soc-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg></a>`).join('');
$('#cinfo') && ($('#cinfo').innerHTML = (K.info || []).map(r => {
  const v = r.type === 'mail' ? `<a href="mailto:${esc(r.value)}">${esc(r.value)}</a>` : r.type === 'wa' ? `<a href="https://wa.me/${esc(r.number)}" target="_blank" rel="noopener">${esc(r.value)}</a>` : r.type === 'link' ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.value)}</a>` : esc(r.value);
  return `<p><small>${esc(r.label)}</small><span>${v}</span></p>`; }).join(''));

/* Komentar: waktu relatif (< 7 hari) atau tanggal lengkap */
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const when = t => {
  const d = new Date(t); if (isNaN(d)) return '';
  const diff = (Date.now() - d) / 6e4;
  if (diff >= 0 && diff < 1) return 'Baru saja';
  if (diff >= 0 && diff < 60) return `${Math.floor(diff)} ${L.t('minAgo')}`;
  if (diff >= 0 && diff < 1440) return `${Math.floor(diff / 60)} ${L.t('hourAgo')}`;
  if (diff >= 0 && diff < 10080) return `${Math.floor(diff / 1440)} ${L.t('dayAgo')}`;
  const p = n => String(n).padStart(2, '0');
  return `${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()}, ${p(d.getHours())}.${p(d.getMinutes())}`;
};
const AV_DEFAULT = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" fill="#1a2a2c"/><circle cx="20" cy="15" r="7" fill="#5e7f80"/><path d="M6 38c1-9 7-13 14-13s13 4 14 13z" fill="#5e7f80"/></svg>';
const crow = c => `<div class="cmt"><span class="cmt-av">${c.photo ? `<img src="${esc(c.photo)}" alt="" loading="lazy" draggable="false" onerror="this.replaceWith(document.createRange().createContextualFragment(AV_DEFAULT))">` : AV_DEFAULT}</span><div class="cmt-b"><div class="cmt-h"><b>${esc(c.name)}</b><time>${esc(c.when || when(c.time))}</time></div><p>${esc(c.text)}</p></div></div>`;
$('#comments-title').innerHTML = `${esc(K.commentsTitle)} (<span id="cc">0</span>)`;
$('#sc').textContent = K.commentLabel;

/* ---------- Komentar: tersimpan permanen & tampil untuk semua pengunjung ----------
   Jika supabaseUrl + supabaseKey di data.js terisi → disimpan di database Supabase (lihat supabase-komentar.sql).
   Jika kosong → disimpan di browser pengunjung (localStorage) supaya tidak hilang saat refresh. */
const SB = (K.supabaseUrl && K.supabaseKey) ? { u: K.supabaseUrl.replace(/\/+$/, '') + '/rest/v1/comments', h: Object.assign({ apikey: K.supabaseKey, 'Content-Type': 'application/json' }, /^eyJ/.test(K.supabaseKey) ? { Authorization: 'Bearer ' + K.supabaseKey } : {}) } : null;   // key baru (sb_publishable_…) cukup lewat header apikey
const LSK = 'pf-comments', LST = 'pf-comment-last';
const lsGet = () => { try { return JSON.parse(localStorage.getItem(LSK) || '[]'); } catch (e) { return []; } };
const lsSet = a => { try { localStorage.setItem(LSK, JSON.stringify(a.slice(0, 50))); } catch (e) {} };
const okPhoto = p => typeof p === 'string' && /^data:image\/(png|jpe?g|webp|gif);base64,/.test(p);
let extra = [];                                                     // komentar pengunjung, terbaru di atas
const paint = () => { $('#cm').innerHTML = extra.concat(K.comments).map(crow).join(''); $('#cc').textContent = extra.length + K.comments.length; };
paint();
(async () => {
  if (SB) {
    try {
      const r = await fetch(SB.u + '?select=name,text,photo,created_at&order=created_at.desc&limit=100', { headers: SB.h });
      if (r.ok) extra = (await r.json()).map(x => ({ name: x.name, text: x.text, photo: okPhoto(x.photo) ? x.photo : '', time: x.created_at }));
    } catch (e) {}
  } else extra = lsGet();
  paint();
})();
const shrink = f => new Promise(res => {                           // foto profil → kotak 96px (hemat ruang database)
  const r = new FileReader(); r.onerror = () => res('');
  r.onload = () => {
    const im = new Image(); im.onerror = () => res('');
    im.onload = () => { const S = 96, c = document.createElement('canvas'); c.width = c.height = S; const m = Math.min(im.width, im.height);
      c.getContext('2d').drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, 0, 0, S, S); res(c.toDataURL('image/jpeg', .8)); };
    im.src = String(r.result);
  };
  r.readAsDataURL(f);
});

/* Formulir "Hubungi": benar-benar terkirim ke emailmu lewat Web3Forms */
$('#sm').onclick = async () => {
  const n = $('#n1').value.trim(), e = $('#e1').value.trim(), m = $('#m1').value.trim();
  if (!n || !e || !m) return toast(C_.messages.formIncomplete);
  if (!K.web3formsKey) return toast(C_.messages.formNoKey, 4500);
  const b = $('#sm'), old = b.textContent; b.disabled = true; b.textContent = 'Mengirim…';
  try {
    const fd = new FormData();
    fd.append('access_key', K.web3formsKey); fd.append('name', n); fd.append('email', e); fd.append('message', m);
    fd.append('subject', `Pesan baru dari portofolio · ${n}`); fd.append('from_name', `Portofolio ${C_.name}`);
    const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
    const j = await r.json().catch(() => ({}));
    if (r.ok && j.success) { ['n1', 'e1', 'm1'].forEach(i => $('#' + i).value = ''); toast(C_.messages.formSent); }
    else toast(`${C_.messages.formFailed}: ${j.message || r.status}`, 5000);
  } catch (err) { toast(`${C_.messages.formFailed}: ${err.message}`, 5000); }
  finally { b.disabled = false; b.textContent = old; }
};
$('#sc').onclick = async () => {
  const n = $('#n2').value.trim().slice(0, 60), m = $('#m2').value.trim().slice(0, 500), f = $('#p2') && $('#p2').files[0];
  if (!n || !m) return toast(C_.messages.commentIncomplete);
  let last = 0; try { last = +localStorage.getItem(LST) || 0; } catch (e) {}
  if (Date.now() - last < 20000) return toast(C_.messages.commentWait);   // jeda 20 detik antar komentar (anti spam)
  const b = $('#sc'); b.disabled = true;
  try {
    const photo = (f && f.size <= 5 * 1024 * 1024) ? await shrink(f) : '';
    const item = { name: n, text: m, photo, time: new Date().toISOString() };
    if (SB) {
      const r = await fetch(SB.u, { method: 'POST', headers: Object.assign({ Prefer: 'return=minimal' }, SB.h), body: JSON.stringify({ name: n, text: m, photo }) });
      if (!r.ok) throw new Error(r.status);
    } else lsSet([item].concat(lsGet()));
    extra.unshift(item); paint();
    try { localStorage.setItem(LST, String(Date.now())); } catch (e) {}
    $('#n2').value = $('#m2').value = ''; if ($('#p2')) $('#p2').value = '';
    $('#cm').scrollTop = 0; toast(C_.messages.commentSent);
  } catch (err) { toast(C_.messages.commentFailed, 4500); }
  finally { b.disabled = false; }
};

/* ---------- Footer ---------- */
const F = C_.footer;
/* Footer minimalis: garis tipis + satu baris hak cipta (nama ditebalkan) */
$('#footer').innerHTML = `<div class="ft-in"><p>${esc(F.copyright).replace(/©\s*(\d{4})\s+(.+?)(™|\.)/, (m, y, n, e) => `© ${y} <b>${n}</b>${e}`)}</p></div>`;

/* ---------- Menu aktif saat scroll ---------- */
const links = $$('nav a');
C_.nav.forEach(n => {
  const el = $(n.target); if (!el) return;
  new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === n.target));
  }), { threshold: .4 }).observe(el);
});

/* ---------- Suara hutan (dibuat langsung di browser) ---------- */
let ac, soundOn = false;
$('#snd').onclick = () => {
  try {
    if (!ac) {
      ac = new AudioContext();
      const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
      const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 420;
      const g = ac.createGain(); g.gain.value = .05;
      src.connect(f).connect(g).connect(ac.destination); src.start(); ac.g = g;
    }
    soundOn = !soundOn;
    ac.g.gain.value = soundOn ? .05 : 0;
    $('#snd').textContent = soundOn ? '🔊' : '🔇';
  } catch (e) {}
};

/* Kembali dari halaman detail (index.html#portfolio / #about): gulir ke bagian itu setelah konten dirender */
if (location.hash && $(location.hash)) setTimeout(() => $(location.hash).scrollIntoView(), 80);

/* ---------- Pemutar musik melayang ----------
   Klik tombol ▶ untuk memutar playlist Spotify. Musik terus berbunyi saat halaman di-scroll / klik apa pun, sampai tombol dijeda lagi.
   Catatan: Spotify memutar lagu penuh hanya jika browser sedang login Spotify; kalau tidak, yang terdengar cuplikan 30 detik. */
(() => {
  if (!SP_ID) return;
  const dock = document.createElement('div'); dock.className = 'mdock';
  dock.innerHTML = `<button type="button" class="mdock-b" aria-label="${L.t('playMusic')}" aria-pressed="false"><svg class="i-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="i-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg></button><span class="mdock-t"><b>${esc(M.playlistName || 'Playlist')}</b><small>${L.t('playMusic')}</small></span><i class="eq" aria-hidden="true"><u></u><u></u><u></u><u></u></i>`;
  document.body.appendChild(dock);
  const btn = dock.querySelector('.mdock-b'), lab = dock.querySelector('small');
  let ctl = null, playing = false;
  const paint = p => { playing = p; dock.classList.toggle('on', p); btn.setAttribute('aria-pressed', p); btn.setAttribute('aria-label', p ? L.t('pauseMusic') : L.t('playMusic')); lab.textContent = p ? L.t('nowPlaying') : L.t('playMusic'); };
  const host = $('.mu-player'); const frame = host && host.querySelector('iframe');
  window.onSpotifyIframeApiReady = api => {
    window.__spApi = api; window.dispatchEvent(new Event('spotify-api'));
    if (!frame) return;
    const mount = document.createElement('div'); frame.replaceWith(mount);
    api.createController(mount, { uri: 'spotify:playlist:' + SP_ID, width: '100%', height: 380, theme: 0 }, c => {
      ctl = c; window.__spPlaylist = c;
      c.addListener('playback_update', e => paint(!e.data.isPaused));
      c.addListener('ready', () => dock.classList.add('rdy'));
    });
  };
  const sc = document.createElement('script'); sc.src = 'https://open.spotify.com/embed/iframe-api/v1'; sc.async = true;
  sc.onerror = () => { dock.classList.add('err'); };
  document.head.appendChild(sc);
  btn.addEventListener('click', () => {
    if (!ctl) return toast('Pemutar Spotify belum siap — cek koneksi internet', 3500);
    if (playing) { ctl.pause(); paint(false); } else { ctl.togglePlay(); paint(true); }
  });
})();
