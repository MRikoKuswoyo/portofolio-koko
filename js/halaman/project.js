/* =====================================================================
   🧩 PROJECT.JS — merender halaman detail dari data.js (portfolio.projects)
   ===================================================================== */
(() => {
  const C = (typeof CONFIG !== 'undefined') ? CONFIG : null, list = (C && C.portfolio && C.portfolio.projects) || [];
  const $ = s => document.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const slug = new URLSearchParams(location.search).get('p');
  const idx = list.findIndex(p => p.slug === slug);
  const root = $('#pj');
  const BACK = 'index.html#portfolio';
  const I = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
    flow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.5 6H14a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6.5"/></svg>',
    gh: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  };
  const top = cur => `<div class="pj-top"><a class="pj-back" href="${BACK}">${I.back}Back</a>
    <div class="crumb" aria-label="Breadcrumb"><a href="${BACK}">Projects</a>${I.chev}<b>${esc(cur)}</b></div></div>`;

  if (idx < 0) {
    document.title = L.t('projNotFound');
    root.innerHTML = top(L.t('notFound')) + `<div class="pj-404"><h1>${L.t('projNotFound')}</h1><p>${L.t('projNotFoundTxt')}</p><a class="btn" href="${BACK}">${L.t('backPortfolio')}</a></div>`;
    return;
  }
  const p = list[idx], d = p.detail || {};
  document.title = `${p.title} — ${C.name || 'Portfolio'}`;
  const tech = (d.tech || p.tags.map(t => [t, ''])).map(([n, ic]) =>
    `<span class="chip">${ic ? `<img src="https://cdn.simpleicons.org/${esc(ic)}/ffffff" alt="" loading="lazy" onerror="this.outerHTML='<i></i>'">` : '<i></i>'}${esc(n)}</span>`).join('');
  const prev = list[idx - 1], next = list[idx + 1];
  const nav = (x, cls, lab) => x ? `<a class="${cls}" href="project.html?p=${esc(x.slug)}"><small>${lab}</small><b>${esc(x.title)}</b></a>` : '';
  const more = nav(prev, 'pv', '← Proyek sebelumnya') + nav(next, 'nx', L.t('nextProject'));

  root.innerHTML = `${top(p.title)}
  <div class="pj-hero">
    <div>
      ${d.kategori ? `<span class="pj-kat">${esc(d.kategori)}</span>` : ''}
      <h1>${esc(p.title)}</h1>
      <p class="pj-intro">${esc(d.intro || p.desc)}</p>
      <h2 class="pj-h">${I.code}Technologies Used</h2>
      <div class="chips">${tech}</div>
      <div class="pj-cta">
        <a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">${I.gh}${L.t('viewGithub')}${I.ext}</a>
        <a class="btn o" href="${BACK}">${L.t('otherProjects')}</a>
      </div>
    </div>
    <figure class="pj-shot">
      <button type="button" id="open-shot" aria-label="Perbesar flyer ${esc(p.title)}"><img src="${esc(p.image)}" alt="Flyer proyek ${esc(p.title)}"></button>
      <figcaption class="pj-shot-bar"><span>${L.t('clickEnlarge')}</span><a href="${esc(p.image)}" download="flyer-${esc(p.slug)}.png">${L.t('dlFlyer')}</a></figcaption>
    </figure>
  </div>
  ${d.sorotan ? `<div class="pj-stats">${d.sorotan.map(s => `<div class="pj-stat"><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join('')}</div>` : ''}
  ${d.fitur ? `<h2 class="pj-h">${I.star}${L.t('secFeatures')}</h2><div class="pj-grid">${d.fitur.map((f, i) => `<div class="pj-feat"><em>${String(i + 1).padStart(2, '0')}</em><div><h3>${esc(f.t)}</h3><p>${esc(f.d)}</p></div></div>`).join('')}</div>` : ''}
  ${d.alur ? `<h2 class="pj-h">${I.flow}${L.t('secFlow')}</h2><ol class="pj-flow">${d.alur.map(a => `<li>${esc(a)}</li>`).join('')}</ol>` : ''}
  ${d.struktur ? `<div class="pj-struct"><b>${L.t('structure')}</b> ${esc(d.struktur)}</div>` : ''}
  <div class="pj-more${prev && next ? '' : ' one'}">${more}</div>`;
  const last = root.querySelector('.pj-more'); if (last.children.length === 1) last.firstElementChild.classList.add('solo');

  const lb = $('#lb'), img = lb.querySelector('img');
  const close = () => { lb.hidden = true; };
  $('#open-shot').onclick = () => { img.src = p.image; img.alt = p.title; lb.hidden = false; };
  lb.onclick = close;
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
