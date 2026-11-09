/* =====================================================================
   ⏳  LOADER.JS — LAYAR LOADING 0 → 100
   Tampilan minimalis: nama besar, label kecil, bar tipis, status + persen.
   Teks & lama loading (warna otomatis mengikuti mode terang/gelap) → data.js → loader
   ===================================================================== */
(() => {
  const root = document.documentElement;
  const el = document.getElementById('loader');
  window.__ready = false;
  const markReady = () => {
    if (window.__ready) return;
    window.__ready = true;
    root.classList.remove('is-loading'); root.classList.add('is-ready');
    window.dispatchEvent(new Event('portfolio:ready'));
  };

  const ROOT = (typeof CONFIG !== 'undefined') ? CONFIG : {};
  const CFG = Object.assign({
    enabled: true, minDuration: 2800, oncePerSession: false, skipButton: true, skipLabel: 'Lewati', title: (typeof CONFIG !== 'undefined' && CONFIG.name) || 'Portfolio', subtitle: 'Portfolio Loading',
    messages: ['Sistem memuat'], doneMessage: 'Selamat datang',
  }, ROOT.loader || {});

  let seen = false;
  try { seen = CFG.oncePerSession && sessionStorage.getItem('ld-seen'); } catch (e) {}
  try { if (sessionStorage.getItem('pf-sw')) seen = true; } catch (e) {}   // ganti bahasa = muat ulang tanpa layar loading
  if (/(project|tentang)\.html/.test(document.referrer)) seen = true;   // kembali dari halaman detail: lewati loading
  if (!el || CFG.enabled === false || seen) { if (el) el.remove(); markReady(); return; }
  try { sessionStorage.setItem('ld-seen', '1'); } catch (e) {}

  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);
  $('ld-name').textContent = CFG.title; $('ld-sub').textContent = CFG.subtitle;
  $('ld-skip').textContent = CFG.skipLabel;
  if (!CFG.skipButton) $('ld-skip').style.display = 'none';
  const pctEl = $('ld-pct'), statusEl = $('ld-status'), bar = $('ld-bar');
  statusEl.textContent = CFG.messages[0];

  /* ---------- progres nyata ---------- */
  const T = { dom: false, load: false, fonts: false, photo: false, card: false };
  const W = { dom: .18, load: .14, fonts: .18, photo: .10, card: .40 };
  addEventListener('DOMContentLoaded', () => { T.dom = true; });
  if (document.readyState === 'complete') { T.dom = T.load = true; } else addEventListener('load', () => { T.load = true; });
  const fonts = document.fonts;
  Promise.race([
    fonts ? Promise.all([fonts.load('300 20px Outfit'), fonts.load('500 20px Outfit'), fonts.load('700 20px Outfit')]) : Promise.resolve(),
    new Promise(r => setTimeout(r, 3500)),
  ]).catch(() => {}).then(() => { T.fonts = true; });
  const photo = ROOT.card && ROOT.card.photo;
  if (photo) { const im = new Image(); im.onload = im.onerror = () => { T.photo = true; }; im.src = photo; } else T.photo = true;
  if ((ROOT.card && ROOT.card.enabled === false) || window.__cardReady) T.card = true;
  else addEventListener('card:ready', () => { T.card = true; });
  const target = () => Math.min(1, Object.keys(T).reduce((s, k) => s + (T[k] ? W[k] : 0), 0));

    /* ---------- hitung 0 → 100 ---------- */
  const t0 = performance.now(), minD = still ? 700 : CFG.minDuration;
  let d = 0, last = t0, lastInt = -1, lastMsg = -1, forced = false, finishing = false;
  const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  const setMsg = i => {
    if (i === lastMsg) return; lastMsg = i; statusEl.style.opacity = 0;
    setTimeout(() => { statusEl.textContent = i >= CFG.messages.length ? CFG.doneMessage : CFG.messages[i]; statusEl.style.opacity = 1; }, 160);
  };
  function finish() {
    if (finishing) return; finishing = true;
    setTimeout(() => {
      el.classList.add('ld-done');
      setTimeout(() => {
        el.classList.add('ld-out'); markReady();
        setTimeout(() => el.remove(), 1150);
      }, 380);
    }, 320);
  }
  $('ld-skip').addEventListener('click', () => { forced = true; });
  setTimeout(() => { forced = true; }, 10000);                       // pengaman: jangan pernah tertahan

  function tick(now) {
    const dt = Math.min((now - last) / 1000, .05); last = now;
    if (window.__threeFailed) T.card = true;
    const want = forced ? 1 : Math.min(target(), ease(Math.min(1, (now - t0) / minD)));
    d += (want - d) * Math.min(1, (forced ? .22 : .08) * dt * 60);
    if (want >= 1 && d > .996) d = 1;
    const n = Math.min(100, Math.round(d * 100));
    if (n !== lastInt) {
      lastInt = n; pctEl.textContent = n + '%'; bar.style.transform = `scaleX(${d})`;
      setMsg(n >= 100 ? CFG.messages.length : Math.min(CFG.messages.length - 1, Math.floor(d * CFG.messages.length)));
    }
    if (d >= 1) finish();
    if (el.isConnected) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
