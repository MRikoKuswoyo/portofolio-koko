/* ============================================================
   flip.js — sertifikat dua sisi (depan: sertifikat · belakang: daftar nilai)
   Dipakai oleh lightbox di index.html (script.js) dan tentang.html (tentang.js).
   • Sertifikat yang punya properti `back` di data.js (SRT) otomatis berbalik depan ⇄ belakang.
   • Klik gambar  → berhenti di sisi yang sedang tampil (klik lagi → lanjut berbalik).
   • Tombol "Sertifikat" / "Daftar Nilai" → pilih sisi; tombol Unduh mengikuti sisi yang tampil.
   Ganti kecepatan balik: FLIP_MS di bawah. Tambah sisi belakang ke sertifikat lain: lihat peserta7 di data.js.
   ============================================================ */
(function () {
  const FLIP_MS = 3400;                       // jeda antar balik otomatis (milidetik)
  const state = new WeakMap();
  const ext = f => /\.pdf$/i.test(f) ? '.pdf' : /\.png$/i.test(f) ? '.png' : '.webp';
  const san = s => String(s || 'sertifikat').replace(/[^\w-]+/g, '-');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function unmount(lb) {
    const s = state.get(lb);
    if (s) { clearInterval(s.t); s.wrap.remove(); s.bar.remove(); state.delete(lb); }
    const im = lb.querySelector('.lb-fig > img'); if (im) im.style.display = '';
  }

  /* lb = elemen .lightbox · c = objek sertifikat dari SRT · dl = tombol <a> Unduh */
  function mount(lb, c, dl) {
    unmount(lb);
    if (!c || !c.back || !dl) return;
    const fig = lb.querySelector('.lb-fig'), cap = fig.querySelector('figcaption');
    const orig = [...fig.children].find(n => n.tagName === 'IMG');
    const sides = [
      { label: L.t('cert'), src: c.image, file: c.file || c.image },
      { label: c.back.label || 'Daftar Nilai', src: c.back.image, file: c.back.file || c.back.image }
    ];
    const wrap = document.createElement('div');
    wrap.className = 'lb-flip'; wrap.tabIndex = 0; wrap.setAttribute('role', 'button');
    wrap.innerHTML = `<div class="lb-flip-in"><img class="lb-front" src="${esc(sides[0].src)}" alt="${esc(c.title)} — ${esc(sides[0].label)}" draggable="false"><img class="lb-back" src="${esc(sides[1].src)}" alt="${esc(c.title)} — ${esc(sides[1].label)}" draggable="false"></div>`;
    const bar = document.createElement('div');
    bar.className = 'lb-sides';
    bar.innerHTML = `<div class="lb-tabs">${sides.map((x, i) => `<button type="button" class="btn o lb-side${i ? '' : ' on'}" data-i="${i}">${esc(x.label)}</button>`).join('')}</div><small class="lb-hint"></small>`;
    fig.insertBefore(wrap, cap); fig.insertBefore(bar, cap);
    if (orig) orig.style.display = 'none';

    const s = { i: 0, auto: true, t: 0, wrap, bar };
    state.set(lb, s);
    const hint = bar.querySelector('.lb-hint'), tabs = [...bar.querySelectorAll('.lb-side')];

    const show = i => {
      s.i = i; wrap.classList.toggle('is-back', i === 1);
      tabs.forEach((b, k) => b.classList.toggle('on', k === i));
      const sd = sides[i];
      dl.href = sd.file; dl.textContent = L.t('download') + ' ' + sd.label;
      dl.setAttribute('download', san(c.title) + '-' + san(sd.label) + ext(sd.file));
    };
    const setAuto = on => {
      s.auto = on; clearInterval(s.t);
      if (on) s.t = setInterval(() => { if (lb.hidden) { clearInterval(s.t); return; } show(1 - s.i); }, FLIP_MS);
      hint.textContent = on ? 'Berbalik otomatis · klik gambar untuk berhenti'
                            : 'Berhenti · klik gambar untuk melanjutkan berbalik';
      wrap.setAttribute('aria-label', hint.textContent);
    };
    wrap.addEventListener('click', () => setAuto(!s.auto));
    wrap.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setAuto(!s.auto); } });
    tabs.forEach(b => b.addEventListener('click', () => { show(+b.dataset.i); setAuto(false); }));
    show(0); setAuto(true);
  }

  window.CertFlip = { mount, unmount };
})();
