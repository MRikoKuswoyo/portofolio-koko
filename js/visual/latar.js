/* =====================================================================
   ✨  LATAR.JS — LATAR BELAKANG POLOS DENGAN TITIK HALUS
   Pengaturan (warna, kerapatan, jarak garis) ada di data.js → background.
   ===================================================================== */
(() => {
  const cv = document.getElementById('bg');
  if (!cv) return;
  const CFG = (typeof CONFIG !== 'undefined' && CONFIG.background) || {};
  if (CFG.enabled === false) { cv.style.display = 'none'; return; }

  const ctx = cv.getContext('2d');
  const color   = CFG.dotColor || '143, 240, 207';
  const maxDist = CFG.lineDistance || 130;
  const density = CFG.density || 1;
  const speed   = CFG.speed || 2.2;
  const still   = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = 0, H = 0, dots = [], raf = 0;
  const rnd = (a, b) => a + Math.random() * (b - a);

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.round((W * H) / 20000 * density));
    dots = Array.from({ length: n }, () => ({
      x: rnd(0, W), y: rnd(0, H),
      vx: rnd(-.12, .12), vy: rnd(-.12, .12),
      r: rnd(.7, 1.6), a: rnd(.25, .6),
    }));
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < dots.length; i++) {
      const p = dots[i];
      for (let j = i + 1; j < dots.length; j++) {
        const q = dots[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
        if (d < maxDist) {
          ctx.strokeStyle = `rgba(${color},${(1 - d / maxDist) * .13})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    for (const p of dots) {
      ctx.fillStyle = `rgba(${color},${p.a})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
    }
  }

  function tick() {
    for (const p of dots) {
      p.x += p.vx * speed; p.y += p.vy * speed;
      if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;
    }
    draw();
    raf = requestAnimationFrame(tick);
  }

  addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (!document.hidden && !still) tick();
  });
  resize();
  if (!still) tick();
})();
