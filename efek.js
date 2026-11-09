/* =====================================================================
   🎆  EFEK.JS — EFEK KETIK SUBTITLE + EFEK SAAT KLIK / TIDAK KLIK
   Daftar subtitle   → data.js → hero.subtitles (maksimal 5)
   Hidup/mati efek   → data.js → effects
   ===================================================================== */
(() => {
  const ROOT = (typeof CONFIG !== 'undefined') ? CONFIG : {};
  const FX = Object.assign({ clickBurst: true, ripple: true, spotlight: true, reveal: true, countUp: true, clickSound: true }, ROOT.effects || {});
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $$ = s => [...document.querySelectorAll(s)];
  const rnd = (a, b) => a + Math.random() * (b - a);

  /* ---------- 1. Efek ketik: sapaan besar + subtitle ---------- */
  function typer(el, list, T, startDelay) {
    list = list.map(s => (s || '').trim()).filter(Boolean);
    if (!el || !list.length) return;
    if (still) { el.textContent = list[0]; return; }
    el.textContent = '';
    let i = 0, n = 0, adding = true;
    const go = () => (function tick() {
      const full = list[i];
      if (adding) {
        el.textContent = full.slice(0, ++n);
        if (n >= full.length) { adding = false; return setTimeout(tick, T.pause); }
        return setTimeout(tick, T.typeSpeed * rnd(.6, 1.4));
      }
      el.textContent = full.slice(0, --n);
      if (n <= 0) { adding = true; i = (i + 1) % list.length; return setTimeout(tick, T.gap); }
      setTimeout(tick, T.deleteSpeed);
    })();
    // mulai mengetik setelah layar loading selesai
    const start = () => setTimeout(go, startDelay);
    if (window.__ready === false) window.addEventListener('portfolio:ready', () => start(), { once: true }); else start();
  }
  (function typing() {
    const H = ROOT.hero || {};
    // sapaan besar (mulai duluan)
    const G = Object.assign({ typeSpeed: 80, deleteSpeed: 40, pause: 1900, gap: 400 }, H.greetingTyping || {});
    const gl = (Array.isArray(H.greetings) ? H.greetings : []).slice(0, 6);
    typer(document.getElementById('typed-h'), gl, G, 500);
    // subtitle (menyusul setelah sapaan pertama selesai diketik)
    const T = Object.assign({ typeSpeed: 70, deleteSpeed: 35, pause: 1500, gap: 350 }, H.typing || {});
    const sl = (Array.isArray(H.subtitles) ? H.subtitles : [H.subtitle]).slice(0, 5);
    typer(document.getElementById('typed'), sl, T, 500 + (gl[0] ? gl[0].length * G.typeSpeed + 300 : 0));
  })();

  /* ---------- 2. Bunyi "tik" (hanya jika tombol suara aktif) ---------- */
  function tick() {
    if (!FX.clickSound) return;
    try {
      if (typeof ac === 'undefined' || !ac || typeof soundOn === 'undefined' || !soundOn) return;
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
      o.type = 'sine'; o.frequency.setValueAtTime(900, t); o.frequency.exponentialRampToValueAtTime(420, t + .09);
      g.gain.setValueAtTime(.06, t); g.gain.exponentialRampToValueAtTime(.001, t + .11);
      o.connect(g).connect(ac.destination); o.start(t); o.stop(t + .12);
    } catch (e) {}
  }

  /* ---------- 3. Percikan saat klik di mana saja ---------- */
  function burst(x, y, n = 10) {
    if (still) return;
    const ring = document.createElement('div');
    ring.className = 'fx-ring'; ring.style.left = x + 'px'; ring.style.top = y + 'px';
    document.body.appendChild(ring);
    ring.animate([{ transform: 'scale(.4)', opacity: .9 }, { transform: 'scale(5)', opacity: 0 }],
      { duration: 520, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => ring.remove();
    for (let i = 0; i < n; i++) {
      const d = document.createElement('div'), a = (i / n) * 6.2832 + rnd(-.3, .3), r = rnd(26, 62);
      d.className = 'fx-dot'; d.style.left = x + 'px'; d.style.top = y + 'px';
      d.style.background = i % 2 ? 'var(--ac)' : 'var(--ember)';
      document.body.appendChild(d);
      d.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 },
                 { transform: `translate(${Math.cos(a) * r}px,${Math.sin(a) * r}px) scale(0)`, opacity: 0 }],
        { duration: rnd(420, 700), easing: 'ease-out' }).onfinish = () => d.remove();
    }
  }
  window.fxBurst = burst; window.fxTick = tick;

  /* ---------- 4. Riak pada tombol / menu / tab ---------- */
  const RIPPLE = '.btn,.tabs button,nav a,nav button,.find a,.soc,.cmenu-item';
  document.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    if (FX.clickBurst) burst(e.clientX, e.clientY);
    tick();
    if (!FX.ripple || still) return;
    const t = e.target.closest(RIPPLE); if (!t) return;
    const b = t.getBoundingClientRect(), s = Math.max(b.width, b.height) * 2, r = document.createElement('span');
    r.className = 'rip'; r.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - b.left - s / 2}px;top:${e.clientY - b.top - s / 2}px`;
    t.appendChild(r); setTimeout(() => r.remove(), 650);
  }, { passive: true });

  /* ---------- 5. Cahaya mengikuti kursor di kartu ---------- */
  if (FX.spotlight) document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.card'); if (!c) return;
    const b = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - b.left) + 'px'); c.style.setProperty('--my', (e.clientY - b.top) + 'px');
  }, { passive: true });

  /* ---------- 6. Muncul halus saat di-scroll ---------- */
  const REVEAL = 'section > h2, .ah-left, .ah-stage, .ah-right, .g2 > div, .stat, .music, .tabs, .cw > .card, #tab > .card';
  if (FX.reveal && !still) {
    const io = new IntersectionObserver(es => {
      let k = 0;
      es.filter(e => e.isIntersecting).forEach(e => {
        const el = e.target, d = k++ * 90;
        el.style.transitionDelay = d + 'ms'; el.classList.add('in'); io.unobserve(el);
        setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.transitionDelay = ''; }, 900 + d);
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    $$(REVEAL).forEach(el => { el.classList.add('reveal'); io.observe(el); });

    // Kartu baru di tab Portfolio muncul satu per satu setiap tab diklik
    const tab = document.getElementById('tab');
    if (tab) new MutationObserver(() => {
      [...tab.children].forEach((c, i) => { c.classList.remove('reveal', 'in'); c.style.animationDelay = i * 90 + 'ms'; c.classList.add('pop'); });
    }).observe(tab, { childList: true });
  }

  /* ---------- 7. Angka statistik menghitung naik ---------- */
  if (FX.countUp && !still) {
    const io2 = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io2.unobserve(e.target);
      const n = e.target.querySelector('i'), to = parseInt(n && n.textContent, 10);
      if (!n || isNaN(to) || to <= 0) return;
      const t0 = performance.now(), dur = 1000;
      (function f(t) { const k = Math.min(1, (t - t0) / dur); n.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t0);
    }), { threshold: .5 });
    $$('.stat').forEach(s => io2.observe(s));
  }
})();
