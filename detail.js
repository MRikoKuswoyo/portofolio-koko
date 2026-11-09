/* =====================================================================
   🔗 DETAIL.JS — halaman detail (About / Project) dibuka sebagai lapisan di atas beranda
   Tujuan: musik (Spotify) di beranda TIDAK berhenti saat membuka halaman detail.
   Musik hanya berhenti kalau pengunjung menekan tombol jeda sendiri.
   · Di beranda (index.html): klik tautan tentang.html / project.html → dibuka di dalam iframe layar penuh.
   · Di dalam iframe (halaman detail): tombol Back menutup lapisan; tombol Prev/Next mengganti isi iframe.
   · Halaman detail yang dibuka langsung (tanpa beranda) tetap berfungsi seperti biasa.
   ===================================================================== */
(() => {
  const DETAIL = /^(tentang|project)\.html(\?|$)/, HOME = /^index\.html(#|$)/;

  /* ---------- A. Di dalam iframe (halaman detail) ---------- */
  if (window.parent !== window) {
    document.addEventListener('click', e => {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank') return;
      const h = a.getAttribute('href') || '';
      if (HOME.test(h)) { e.preventDefault(); parent.postMessage({ detailClose: true }, '*'); }
      else if (DETAIL.test(h)) { e.preventDefault(); location.replace(h); }   // replace: riwayat browser tetap bersih
    }, true);
    return;
  }

  /* ---------- B. Di beranda ---------- */
  if (document.body.classList.contains('pj')) return;   // halaman detail yang dibuka langsung
  let ov = null;
  const close = () => {
    if (!ov) return;
    ov.remove(); ov = null;
    document.documentElement.classList.remove('detail-open');
  };
  const open = url => {
    if (ov) return;
    ov = document.createElement('div'); ov.className = 'dt-ov';
    const f = document.createElement('iframe'); f.title = 'Detail'; f.src = url;
    ov.appendChild(f); document.body.appendChild(ov);
    document.documentElement.classList.add('detail-open');
    history.pushState({ dt: 1 }, '', location.href);      // tombol Back browser menutup lapisan
  };
  const back = () => { if (!ov) return; if (history.state && history.state.dt) history.back(); else close(); };
  addEventListener('popstate', close);
  addEventListener('message', e => { if (e.data && e.data.detailClose) back(); });
  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank') return;
    const h = a.getAttribute('href') || '';
    if (DETAIL.test(h)) { e.preventDefault(); open(h); }
  }, true);
  window.openDetail = open;
})();
