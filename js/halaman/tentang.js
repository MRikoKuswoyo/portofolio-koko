/* =====================================================================
   🎓 TENTANG.JS — merender halaman detail Education / Experience / Organisasi dari data.js
   ===================================================================== */
(() => {
  const C = (typeof CONFIG !== 'undefined') ? CONFIG : null, A = (C && C.about) || {};
  const all = [].concat(A.education || [], A.experience || [], A.organization || []);
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const slug = new URLSearchParams(location.search).get('i');
  const BACK = 'index.html#about', root = $('#tt');
  const sec = (list, x) => list.find(e => e.slug === x.slug) ? list : null;
  const I = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
    path: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.5 6H14a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6.5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM8 7h7M8 11h7"/></svg>',
    cert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12 12 20 4 12V4h8z"/><circle cx="8" cy="8" r="1.4"/></svg>',
  };
  const top = cur => `<div class="pj-top"><a class="pj-back" href="${BACK}">${I.back}Back</a><div class="crumb"><a href="${BACK}">About</a>${I.chev}<b>${esc(cur)}</b></div></div>`;
  const x = all.find(e => e.slug === slug);
  if (!x) {
    document.title = L.t('pageNotFound');
    root.innerHTML = top(L.t('notFound')) + `<div class="pj-404"><h1>${L.t('pageNotFound')}</h1><p>${L.t('pageNotFoundTxt')}</p><a class="btn" href="${BACK}">${L.t('back')}</a></div>`;
    return;
  }
  const d = x.detail || {}, idx = all.indexOf(x);
  if (x.color) document.body.style.setProperty('--c', x.color);
  document.title = `${x.title} — ${C.name || 'Portfolio'}`;
  const mono = esc(x.mono || String(x.title).replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase());
  const big = x.logoFull || x.logo;
  const logo = big ? `<div class="in"><img src="${esc(big)}" alt="Logo ${esc(x.title)}" onerror="this.parentNode.classList.add('mono');this.replaceWith(document.createTextNode('${mono}'))"></div>` : `<div class="in mono">${mono}</div>`;
  const certs = (d.sertifikat || []).map(k => (typeof SRT !== 'undefined') && SRT[k]).filter(Boolean);
  const prev = all[idx - 1], next = all[idx + 1];
  const nav = (e, cls, lab) => e ? `<a class="${cls}" href="tentang.html?i=${esc(e.slug)}"><small>${lab}</small><b>${esc(e.title)}</b></a>` : '';
  const more = nav(prev, 'pv', '← Sebelumnya') + nav(next, 'nx', L.t('next'));
  const tb = d.tabel;

  root.innerHTML = `${top(x.title)}
  <div class="tt-hero">
    <div>
      ${d.kategori ? `<span class="pj-kat">${esc(d.kategori)}</span>` : ''}
      <h1>${esc(x.title)}</h1>
      <p class="tt-role">${esc(x.role || x.desc || '')}${x.year ? ` · ${esc(x.year)}` : ''}</p>
      <p class="pj-intro">${esc(d.intro || '')}</p>
    </div>
    <div class="tt-logo">${logo}</div>
  </div>
  ${d.fakta ? `<div class="tt-facts">${d.fakta.map(f => `<div class="tt-fact"><small>${esc(f.l)}</small><b>${esc(f.v)}</b></div>`).join('')}</div>` : ''}
  ${d.sorotan ? `<div class="pj-stats" style="margin-top:36px">${d.sorotan.map(s => `<div class="pj-stat"><b data-n="${esc(s.v)}">${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join('')}</div>` : ''}
  ${d.tentang ? `<h2 class="pj-h">${I.book}${L.t('secAbout')}</h2><p class="tt-about">${esc(d.tentang)}</p>` : ''}
  ${d.peran && d.peran.length ? `<h2 class="pj-h">${I.path}${L.t('secRoles')}</h2><ul class="tt-path">${d.peran.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
  ${tb ? `<h2 class="pj-h">${I.book}${esc(tb.judul)}</h2><div class="tt-wrap"><table class="tt-table"><thead><tr>${tb.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${tb.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>${tb.foot ? `<tfoot><tr>${tb.foot.map(c => `<td>${esc(c)}</td>`).join('')}</tr></tfoot>` : ''}</table></div>` : ''}
  ${d.tags ? `<h2 class="pj-h">${I.tag}${L.t('secSkills')}</h2><div class="chips">${d.tags.map(t => `<span class="chip"><i></i>${esc(t)}</span>`).join('')}</div>` : ''}
  ${d.tautan && d.tautan.length ? `<h2 class="pj-h">${I.path}${L.t('secLinks')}</h2><div class="tt-links">${d.tautan.map(l => `<a class="btn o" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>` : ''}
  ${certs.length ? `<h2 class="pj-h">${I.cert}${L.t('secRelCerts')}</h2><div class="tt-rel">${certs.map((c, i) => `<button type="button" class="tt-cert" data-i="${i}"><img src="${esc(c.image)}" alt="${esc(c.title)}" loading="lazy"><span>${esc(c.title)}</span></button>`).join('')}</div>` : ''}
  <div class="pj-more tt-more">${more}</div>`;
  const last = root.querySelector('.pj-more'); if (last.children.length === 1) last.firstElementChild.classList.add('solo');

  // Hitung naik untuk angka murni (mis. 3,82 / 20 / 500+)
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!still && C.effects?.countUp !== false) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      const t = e.target.dataset.n, m = /^(\d+(?:[.,]\d+)?)(.*)$/.exec(t); if (!m) return;
      const dec = (m[1].split(/[.,]/)[1] || '').length, to = parseFloat(m[1].replace(',', '.')), sep = m[1].includes(',') ? ',' : '.';
      const t0 = performance.now();
      const step = n => { const p = Math.min(1, (n - t0) / 1100), v = to * (1 - Math.pow(1 - p, 3)); e.target.textContent = v.toFixed(dec).replace('.', sep) + m[2]; if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: .6 });
    root.querySelectorAll('.pj-stat b').forEach(b => io.observe(b));
  }
  // Lightbox sertifikat
  root.querySelectorAll('.tt-cert').forEach(b => b.onclick = () => { const c = certs[+b.dataset.i]; openCertPage(c); });
  const lb = document.createElement('div'); lb.className = 'lightbox'; lb.hidden = true;
  lb.innerHTML = '<button type="button" class="lb-x" aria-label="' + L.t('close') + '">×</button><figure class="lb-fig"><img alt=""><figcaption><b></b><a class="btn o" download></a></figcaption></figure>';
  document.body.appendChild(lb);
  function openCertPage(c) {
    const f = c.file || c.image, a = lb.querySelector('a');
    lb.querySelector('img').src = c.image; lb.querySelector('b').textContent = c.title;
    a.href = f; a.textContent = /\.pdf$/i.test(f) ? L.t('dlPdf') : L.t('dlImg');
    a.setAttribute('download', c.title.replace(/[^\w-]+/g, '-') + (/\.pdf$/i.test(f) ? '.pdf' : '.webp'));
    window.CertFlip && CertFlip.mount(lb, c, a);   // sertifikat dua sisi (depan ⇄ belakang)
    lb.hidden = false;
  }
  lb.onclick = e => { if (!e.target.closest('a,.lb-flip,.lb-sides') && e.target.tagName !== 'IMG') lb.hidden = true; };
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
  // Progress bar scroll
  const bar = $('#prog');
  const upd = () => { const h = document.documentElement; bar.style.width = (h.scrollHeight - innerHeight > 0 ? scrollY / (h.scrollHeight - innerHeight) * 100 : 0) + '%'; };
  addEventListener('scroll', upd, { passive: true }); upd();
})();
