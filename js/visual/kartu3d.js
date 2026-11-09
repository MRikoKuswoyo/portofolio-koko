/* =====================================================================
   🪪  KARTU3D.JS — KARTU ID 3D (tali elastis, kilau, QR di belakang)
   • Tarik kartu ke mana saja (melewati teks & tombol), tali meregang lalu
     menyentak kembali · Klik kartu untuk membalik (tali ikut terpuntir)
   • Teks, foto, QR, kecepatan & jumlah bulir → data.js → card
   Biasanya file ini tidak perlu diubah.
   ===================================================================== */
(() => {
  const host = document.getElementById('hero-card');
  const cv   = document.getElementById('card3d');
  const hero = document.getElementById('home');
  if (!host || !cv || !window.THREE) { window.__cardReady = true; window.dispatchEvent(new Event('card:ready')); return; }

  const ROOT = (typeof CONFIG !== 'undefined') ? CONFIG : {};
  const CFG  = ROOT.card || {};
  const cardReady = () => { window.__cardReady = true; window.dispatchEvent(new Event('card:ready')); };   // kabari layar loading
  if (CFG.enabled === false || !window.WebGLRenderingContext) {
    host.style.display = 'none'; hero.classList.add('no-card'); cardReady(); return;
  }

  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NAME  = ROOT.name || 'Nama Kamu';
  const ROLE  = CFG.role || (ROOT.about && ROOT.about.role) || 'Developer';
  const S     = Math.max(.5, Math.min(3, CFG.speed != null ? CFG.speed : 1.7));   // pengali kecepatan
  const PN    = CFG.particles != null ? CFG.particles : 110;                       // jumlah bulir
  const SHINE = CFG.sparkle !== false;

  /* ---------- ukuran kartu (satuan dunia 3D) ---------- */
  const CARD_W = 2.3, CARD_H = 3.2, DEPTH = 0.05;
  const LC = CARD_H / 2 + 0.18;             // jarak titik gantung → pusat kartu
  const SEG = 5;                            // jumlah ruas tali
  const PXW = 736, PXH = 1024;              // resolusi tekstur (320 px / unit)

  /* ---------- renderer, kamera, cahaya ---------- */
  const R = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
  R.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  R.outputEncoding = THREE.sRGBEncoding;
  const scene = new THREE.Scene();
  const FOV = 32, tanH = Math.tan(FOV * Math.PI / 360);
  const cam = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 0.55); key.position.set(3, 4, 6); scene.add(key);
  const rim = new THREE.PointLight(0x34d3a1, 0.55, 20); rim.position.set(-4, -1, 3); scene.add(rim);
  const warm = new THREE.PointLight(0xf0b35a, 0.3, 20); warm.position.set(4, 2, 3); scene.add(warm);

  /* ---------- util gambar ---------- */
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function spaced(ctx, text, x, y, gap, align) {
    let w = 0; for (const c of text) w += ctx.measureText(c).width + gap; w -= gap;
    let cx = align === 'right' ? x - w : align === 'center' ? x - w / 2 : x;
    ctx.textAlign = 'left';
    for (const c of text) { ctx.fillText(c, cx, y); cx += ctx.measureText(c).width + gap; }
  }
  const loadImg = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
  const untainted = im => {
    try { const c = document.createElement('canvas'); c.width = c.height = 2;
      const x = c.getContext('2d'); x.drawImage(im, 0, 0, 2, 2); x.getImageData(0, 0, 1, 1); return true;
    } catch (e) { return false; }
  };
  async function getPhoto() {
    let img = CFG.photo ? await loadImg(CFG.photo) : null;
    if (img && untainted(img)) return img;
    // Dibuka langsung dari file (file://) → browser memblokir foto sebagai tekstur 3D.
    // Pakai cadangan dari foto-kartu.js agar foto tetap tampil.
    if (typeof CARD_PHOTO_FALLBACK !== 'undefined') { const f = await loadImg(CARD_PHOTO_FALLBACK); if (f) return f; }
    return null;
  }
  async function waitFonts() {
    try { await Promise.race([
      Promise.all([document.fonts.load('700 40px Outfit'), document.fonts.load('500 26px Outfit')]),
      new Promise(r => setTimeout(r, 1500))]); } catch (e) {}
  }
  const initials = () => NAME.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const F = (w, s) => `${w} ${s}px Outfit, system-ui, sans-serif`;

  /* ---------- link untuk QR ---------- */
  function qrTarget() {
    const isHttp = u => /^https?:\/\//i.test(u || '');
    if (isHttp(CFG.qrUrl)) return CFG.qrUrl;
    const soc = (ROOT.socials || []).find(s => isHttp(s.url));
    if (soc) return soc.url;
    return isHttp(location.href) ? location.href : 'https://github.com';
  }
  function qrMatrix(text) {
    try {
      const q = qrcode(0, 'M'); q.addData(text); q.make();
      const n = q.getModuleCount(), m = [];
      for (let r = 0; r < n; r++) { const row = []; for (let c = 0; c < n; c++) row.push(q.isDark(r, c)); m.push(row); }
      return m;
    } catch (e) { return null; }
  }

  /* ---------- tekstur muka depan & belakang ---------- */
  function slotCut(ctx) {   // lubang tali di bagian atas
    ctx.save(); ctx.globalCompositeOperation = 'destination-out';
    rrect(ctx, PXW / 2 - 80, 46, 160, 38, 19); ctx.fill(); ctx.restore();
  }
  function frontTexture(photo) {
    const W = PXW, H = PXH, c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    x.save(); rrect(x, 0, 0, W, H, 52); x.clip();
    let g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#142126'); g.addColorStop(1, '#070c0f');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    g = x.createRadialGradient(W * .95, H * .04, 0, W * .95, H * .04, W * .95);
    g.addColorStop(0, 'rgba(52,211,161,.22)'); g.addColorStop(1, 'rgba(52,211,161,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    g = x.createRadialGradient(0, H, 0, 0, H, W);
    g.addColorStop(0, 'rgba(240,179,90,.12)'); g.addColorStop(1, 'rgba(240,179,90,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.restore();

    x.fillStyle = '#f0b35a'; x.font = F(700, 24); x.textBaseline = 'alphabetic';
    spaced(x, (CFG.label || 'DEVELOPER ID').toUpperCase(), 52, 142, 5, 'left');
    x.fillStyle = 'rgba(255,255,255,.5)'; x.font = F(500, 24);
    spaced(x, String(CFG.year || new Date().getFullYear()), W - 52, 142, 3, 'right');

    const px = 48, py = 170, pw = W - 96, ph = 500;
    x.save(); rrect(x, px, py, pw, ph, 30); x.clip();
    if (photo) {
      const s = pw / photo.width, dh = photo.height * s, oy = Math.max(0, (dh - ph) * 0.1);
      x.drawImage(photo, px, py - oy, pw, dh);
    } else {
      x.fillStyle = '#10201f'; x.fillRect(px, py, pw, ph);
      x.fillStyle = '#34d3a1'; x.font = F(700, 200); x.textAlign = 'center'; x.fillText(initials(), W / 2, py + ph / 2 + 70);
    }
    g = x.createLinearGradient(0, py + ph - 120, 0, py + ph); g.addColorStop(0, 'rgba(7,12,15,0)'); g.addColorStop(1, 'rgba(7,12,15,.75)');
    x.fillStyle = g; x.fillRect(px, py + ph - 120, pw, 120); x.restore();
    x.strokeStyle = 'rgba(52,211,161,.55)'; x.lineWidth = 3; rrect(x, px, py, pw, ph, 30); x.stroke();

    x.textAlign = 'left'; x.fillStyle = '#fff';
    let fs = 52; x.font = F(700, fs);
    while (x.measureText(NAME).width > pw && fs > 24) { fs -= 2; x.font = F(700, fs); }
    x.fillText(NAME, px, 740);
    x.fillStyle = '#34d3a1'; x.font = F(500, 30); x.fillText(ROLE, px, 785);
    if (CFG.organization) { x.fillStyle = 'rgba(255,255,255,.5)'; x.font = F(500, 22); x.fillText(CFG.organization, px, 824); }
    x.fillStyle = '#f0b35a'; rrect(x, px, 850, 64, 5, 2.5); x.fill();

    g = x.createLinearGradient(px, 0, px + 330, 0); g.addColorStop(0, '#34d3a1'); g.addColorStop(1, '#f0b35a');
    x.fillStyle = g; x.font = F(700, 58); spaced(x, (CFG.footer || 'PORTFOLIO').toUpperCase(), px, 940, 3, 'left');
    let seed = 0; for (const ch of NAME) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
    x.fillStyle = 'rgba(255,255,255,.55)';
    for (let i = 0, bx = W - 48 - 120; i < 22; i++) { seed = (seed * 1664525 + 1013904223) >>> 0; const bw = 2 + (seed % 4); x.fillRect(bx, 912, bw, 30); bx += bw + 3; if (bx > W - 48) break; }
    if (CFG.tagline) { x.fillStyle = 'rgba(255,255,255,.45)'; x.font = F(500, 21); spaced(x, CFG.tagline, px, 988, 2, 'left'); }
    x.strokeStyle = 'rgba(255,255,255,.12)'; x.lineWidth = 3; rrect(x, 3, 3, W - 6, H - 6, 49); x.stroke();
    slotCut(x); return c;
  }
  function backTexture() {
    const W = PXW, H = PXH, c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    x.save(); rrect(x, 0, 0, W, H, 52); x.clip();
    let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#111c21'); g.addColorStop(1, '#070c0f');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    g = x.createRadialGradient(W, 0, 0, W, 0, W); g.addColorStop(0, 'rgba(240,179,90,.16)'); g.addColorStop(1, 'rgba(240,179,90,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    g = x.createRadialGradient(0, H, 0, 0, H, W); g.addColorStop(0, 'rgba(52,211,161,.18)'); g.addColorStop(1, 'rgba(52,211,161,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.restore();

    // garis miring dekoratif
    x.fillStyle = '#f0b35a';
    for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(W - 230 + i * 36, 118); x.lineTo(W - 206 + i * 36, 118); x.lineTo(W - 226 + i * 36, 160); x.lineTo(W - 250 + i * 36, 160); x.closePath(); x.fill(); }

    x.textBaseline = 'alphabetic'; x.fillStyle = '#f0b35a'; x.font = F(700, 66);
    spaced(x, (CFG.backTitle || 'SCAN ME').toUpperCase(), 52, 160, 6, 'left');
    x.fillStyle = '#34d3a1'; x.font = F(500, 24);
    spaced(x, (CFG.backSubtitle || 'CONNECT WITH ME').toUpperCase(), 52, 202, 5, 'left');

    // QR (modul gelap di atas pelat terang agar mudah dipindai)
    const url = qrTarget(), m = qrMatrix(url), size = 480, qx = (W - size) / 2, qy = 236;
    x.fillStyle = '#f4f6f5'; rrect(x, qx, qy, size, size, 36); x.fill();
    if (m) {
      const pad = 30, area = size - pad * 2, cell = area / m.length;
      x.fillStyle = '#0a1215';
      for (let r = 0; r < m.length; r++) for (let cc = 0; cc < m.length; cc++)
        if (m[r][cc]) x.fillRect(Math.floor(qx + pad + cc * cell), Math.floor(qy + pad + r * cell), Math.ceil(cell), Math.ceil(cell));
    } else { x.fillStyle = '#0a1215'; x.font = F(700, 120); x.textAlign = 'center'; x.fillText('QR', W / 2, qy + size / 2 + 40); }
    x.strokeStyle = 'rgba(52,211,161,.7)'; x.lineWidth = 4; rrect(x, qx, qy, size, size, 36); x.stroke();

    x.textAlign = 'left'; x.fillStyle = 'rgba(255,255,255,.55)'; x.font = F(500, 24);
    let label = url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
    while (x.measureText(label).width > W - 120 && label.length > 8) label = label.slice(0, -2);
    x.textAlign = 'center'; x.fillText(label, W / 2, 780);

    x.fillStyle = '#fff'; let fs = 50; x.font = F(700, fs);
    while (x.measureText(NAME).width > W - 100 && fs > 24) { fs -= 2; x.font = F(700, fs); }
    x.fillText(NAME, W / 2, 858);
    x.fillStyle = '#34d3a1'; x.font = F(500, 30); x.fillText(ROLE, W / 2, 902);
    x.fillStyle = '#f0b35a'; rrect(x, W / 2 - 32, 930, 64, 5, 2.5); x.fill();
    if (CFG.tagline) { x.fillStyle = 'rgba(255,255,255,.45)'; x.font = F(500, 21); x.textAlign = 'left'; spaced(x, CFG.tagline, W / 2, 988, 2, 'center'); }
    x.strokeStyle = 'rgba(255,255,255,.12)'; x.lineWidth = 3; rrect(x, 3, 3, W - 6, H - 6, 49); x.stroke();
    slotCut(x); return c;
  }
  function strapTexture() {   // tali ganda biru + logo bintang + nama (gaya lanyard)
    const W = 256, Ht = 2048, c = document.createElement('canvas'); c.width = W; c.height = Ht;
    const x = c.getContext('2d'); x.clearRect(0, 0, W, Ht);          // sela di tengah dibiarkan transparan
    const label = (CFG.strapText || NAME).toUpperCase();
    const base = /^#[0-9a-f]{6}$/i.test(CFG.strapColor || '') ? CFG.strapColor : '#ff8a2b';   // warna tali dari data.js → card.strapColor
    const edge = '#' + [1, 3, 5].map(i => Math.round(parseInt(base.slice(i, i + 2), 16) * .78).toString(16).padStart(2, '0')).join('');   // sisi tali sedikit lebih gelap
    const star = (cx, cy, r) => {
      x.beginPath();
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .42 : r; x[i ? 'lineTo' : 'moveTo'](cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); }
      x.closePath(); x.fill();
    };
    [[6, 112], [138, 112]].forEach(([bx, bw]) => {
      const g = x.createLinearGradient(bx, 0, bx + bw, 0);
      g.addColorStop(0, edge); g.addColorStop(.5, base); g.addColorStop(1, edge);
      x.fillStyle = g; x.fillRect(bx, 0, bw, Ht);
      x.fillStyle = 'rgba(255,255,255,.22)'; x.fillRect(bx + 7, 0, 2, Ht); x.fillRect(bx + bw - 9, 0, 2, Ht);   // jahitan
      x.fillStyle = '#fff'; x.textBaseline = 'middle';
      [340, 990, 1640].forEach(y => {
        x.save(); x.translate(bx + bw / 2, y); x.rotate(Math.PI / 2);
        x.font = F(700, 30); const w = x.measureText(label).width + 4 * (label.length - 1);
        spaced(x, label, 0, 0, 4, 'center');
        star(-(w / 2) - 34, 0, 16); star(w / 2 + 34, 0, 16);        // bintang di kedua sisi nama
        x.restore();
      });
    });
    return c;
  }
  const tex = cnv => { const t = new THREE.CanvasTexture(cnv); t.encoding = THREE.sRGBEncoding; t.anisotropy = R.capabilities.getMaxAnisotropy(); return t; };

  /* ---------- objek 3D ---------- */
  const cardGroup = new THREE.Group();          // titik gantung (berputar mengikuti tali)
  const pivot     = new THREE.Group();          // pusat kartu (berputar pada sumbu tegak)
  pivot.position.set(0, -LC, 0);
  cardGroup.add(pivot); scene.add(cardGroup);

  const shape = new THREE.Shape(), rr = 0.17, hw = CARD_W / 2, hh = CARD_H / 2;
  shape.moveTo(-hw + rr, -hh); shape.lineTo(hw - rr, -hh); shape.quadraticCurveTo(hw, -hh, hw, -hh + rr);
  shape.lineTo(hw, hh - rr); shape.quadraticCurveTo(hw, hh, hw - rr, hh); shape.lineTo(-hw + rr, hh);
  shape.quadraticCurveTo(-hw, hh, -hw, hh - rr); shape.lineTo(-hw, -hh + rr); shape.quadraticCurveTo(-hw, -hh, -hw + rr, -hh);
  const hole = new THREE.Path(), sx = 0.25, sy = hh - 0.2, sh = 0.06;
  hole.moveTo(-sx, sy - sh); hole.lineTo(sx, sy - sh); hole.lineTo(sx, sy + sh); hole.lineTo(-sx, sy + sh); hole.lineTo(-sx, sy - sh);
  shape.holes.push(hole);
  const bodyGeo = new THREE.ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.008, bevelSegments: 2, curveSegments: 10 });
  bodyGeo.translate(0, 0, -DEPTH / 2);
  const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0x0b1215, metalness: .3, roughness: .5 }));
  pivot.add(body);

  const frontMat = new THREE.MeshStandardMaterial({ roughness: .4, metalness: .05, transparent: true, alphaTest: .5 });
  const backMat  = new THREE.MeshStandardMaterial({ roughness: .45, metalness: .05, transparent: true, alphaTest: .5 });
  const front = new THREE.Mesh(new THREE.PlaneGeometry(CARD_W, CARD_H), frontMat); front.position.z = DEPTH / 2 + 0.012;
  const back  = new THREE.Mesh(new THREE.PlaneGeometry(CARD_W, CARD_H), backMat);  back.position.z = -(DEPTH / 2 + 0.012); back.rotation.y = Math.PI;
  pivot.add(front, back);

  const metal = new THREE.MeshStandardMaterial({ color: 0xc4ccd0, metalness: .65, roughness: .3 });
  const clip = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.2, 0.09), metal); clip.position.y = -0.04;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 10, 28), metal); ring.position.y = -0.27; ring.rotation.y = 1.1;
  cardGroup.add(clip, ring);
  const pin = new THREE.Group();   // pengait tali (terlihat di layar HP; di desktop ada di atas halaman)
  pin.add(new THREE.Mesh(new THREE.TorusGeometry(.13, .035, 10, 24), metal), new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 12), metal));
  scene.add(pin);

  /* ---------- kilau / kerlip di permukaan kartu (shader) ---------- */
  const SHINE_FRAG = `
    uniform float uTime, uAngle, uStrength; uniform sampler2D uMask; varying vec2 vUv;
    float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main(){
      float m = texture2D(uMask, vUv).a; if (m < 0.05) discard;
      float d = vUv.x * 0.75 + (1.0 - vUv.y) * 0.65;
      float pos = fract(uTime * 0.2 + uAngle * 0.15) * 2.6 - 0.6;
      float dist = abs(d - pos);
      float band = smoothstep(0.10, 0.0, dist), halo = smoothstep(0.40, 0.0, dist) * 0.22;
      vec3 holo = mix(vec3(0.20, 0.83, 0.63), vec3(0.94, 0.70, 0.35), clamp(d - pos + 0.5, 0.0, 1.0));
      vec3 col = holo * (band * 0.85 + halo) + vec3(1.0) * band * 0.35;
      vec2 g = vUv * vec2(26.0, 36.0), id = floor(g), f = fract(g) - 0.5;
      float r = h21(id);
      vec2 off = (vec2(h21(id + 7.1), h21(id + 3.7)) - 0.5) * 0.5, q = f - off;
      float tw = pow(max(0.0, sin(uTime * (1.5 + r * 3.5) + r * 40.0)), 12.0);
      float dotp = smoothstep(0.11, 0.0, length(q));
      float star = smoothstep(0.035, 0.0, abs(q.x)) * smoothstep(0.32, 0.0, abs(q.y)) + smoothstep(0.035, 0.0, abs(q.y)) * smoothstep(0.32, 0.0, abs(q.x));
      float gl = step(0.74, r) * tw * (dotp + star * 0.9);
      gl *= 0.6 + band * 2.2 + (0.4 + 0.6 * sin(uAngle * 3.0 + r * 20.0));
      col += vec3(1.0, 0.96, 0.88) * gl;
      gl_FragColor = vec4(col * uStrength, m);
    }`;
  const shines = [];
  function makeShine(mask, z, ry, strength) {
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uAngle: { value: 0 }, uStrength: { value: strength }, uMask: { value: mask } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: SHINE_FRAG,
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(CARD_W, CARD_H), mat);
    m.position.z = z; m.rotation.y = ry; m.renderOrder = 3; pivot.add(m); shines.push(mat);
  }

  /* ---------- tali ---------- */
  const SAMPLES = 40;
  const strapGeo = new THREE.BufferGeometry();
  strapGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((SAMPLES + 1) * 6), 3));
  strapGeo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((SAMPLES + 1) * 4), 2));
  const nrm = new Float32Array((SAMPLES + 1) * 6); for (let i = 2; i < nrm.length; i += 3) nrm[i] = 1;
  strapGeo.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  const idx = []; for (let i = 0; i < SAMPLES; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  strapGeo.setIndex(idx);
  const strapMat = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: .62, metalness: 0, alphaTest: .5 });
  const strap = new THREE.Mesh(strapGeo, strapMat); strap.frustumCulled = false; scene.add(strap);
  const STRAP_W = 0.62, TILE = 4.8;

  /* ---------- bulir cahaya melayang + percikan + lingkar cahaya ---------- */
  const uScale = { value: 800 };
  const PV = `attribute float aSize, aAlpha, aMix; uniform float uScale; varying float vA, vM;
    void main(){ vA = aAlpha; vM = aMix; vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`;
  const PF = `precision highp float; varying float vA, vM;
    void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a;
      vec3 c = mix(vec3(0.2, 0.83, 0.63), vec3(0.94, 0.7, 0.35), vM);
      c = mix(c, vec3(1.0), smoothstep(0.18, 0.0, d) * 0.8); gl_FragColor = vec4(c, a * vA); }`;
  function makePoints(n) {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3), size = new Float32Array(n), alpha = new Float32Array(n), mix = new Float32Array(n);
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
    g.setAttribute('aMix', new THREE.BufferAttribute(mix, 1));
    const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uScale }, vertexShader: PV, fragmentShader: PF });
    const p = new THREE.Points(g, mat); p.frustumCulled = false; scene.add(p);
    return { p, g, pos, size, alpha, mix, n };
  }
  const amb = PN > 0 ? makePoints(PN) : null, ambV = [];
  const SN = 80, spk = makePoints(SN), spkV = Array.from({ length: SN }, () => ({ vx: 0, vy: 0, life: 0, max: 1, s: .15 }));

  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: (() => { const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
      const g = x.createRadialGradient(128, 128, 0, 128, 128, 128); g.addColorStop(0, 'rgba(52,211,161,.5)'); g.addColorStop(.5, 'rgba(52,211,161,.12)'); g.addColorStop(1, 'rgba(52,211,161,0)');
      x.fillStyle = g; x.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(c); })(),
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: .5 }));
  halo.scale.set(6.5, 6.5, 1); halo.renderOrder = -1; scene.add(halo);

  let ambCx = 0, ambSpread = 3;
  function initAmbient() {
    if (!amb) return;
    ambV.length = 0; ambCx = anchorX; ambSpread = Math.min(halfW * .9, 4.5);
    for (let i = 0; i < amb.n; i++) {
      amb.pos[i * 3] = ambCx + (Math.random() - .5) * ambSpread * 2.2; amb.pos[i * 3 + 1] = (Math.random() - .5) * halfH * 2.2; amb.pos[i * 3 + 2] = -3 + Math.random() * 4.2;
      amb.size[i] = .05 + Math.random() * .12; amb.mix[i] = Math.random() < .35 ? 1 : Math.random() * .3;
      ambV.push({ vy: .3 + Math.random() * .7, ph: Math.random() * 6.28, sp: .6 + Math.random() * 1.6, sw: .2 + Math.random() * .5, base: .35 + Math.random() * .65 });
    }
    amb.g.attributes.position.needsUpdate = true; amb.g.attributes.aSize.needsUpdate = true; amb.g.attributes.aMix.needsUpdate = true;
  }
  function updateAmbient(dt, t) {
    if (!amb) return;
    for (let i = 0; i < amb.n; i++) {
      const v = ambV[i], k = i * 3;
      amb.pos[k + 1] += v.vy * dt * S;
      amb.pos[k] += Math.sin(t * v.sp * S + v.ph) * v.sw * dt * S;
      if (amb.pos[k + 1] > halfH * 1.1) { amb.pos[k + 1] = -halfH * 1.1; amb.pos[k] = ambCx + (Math.random() - .5) * ambSpread * 2.2; }
      const edge = Math.max(0, Math.min(1, (ambSpread * 1.05 - Math.abs(amb.pos[k] - ambCx)) / (ambSpread * .4)));
      amb.alpha[i] = edge * v.base * (.3 + .7 * (.5 + .5 * Math.sin(t * (1 + v.sp) * S + v.ph)));
    }
    amb.g.attributes.position.needsUpdate = true; amb.g.attributes.aAlpha.needsUpdate = true;
  }
  function spawn(x, y, n, speed) {
    let made = 0;
    for (let i = 0; i < SN && made < n; i++) {
      const v = spkV[i]; if (v.life > 0) continue;
      const a = Math.random() * 6.2832, sp = speed * (.4 + Math.random() * .8);
      spk.pos[i * 3] = x + (Math.random() - .5) * .5; spk.pos[i * 3 + 1] = y + (Math.random() - .5) * .8; spk.pos[i * 3 + 2] = .2 + Math.random() * .4;
      v.vx = Math.cos(a) * sp; v.vy = Math.sin(a) * sp; v.max = v.life = .6 + Math.random() * .7; v.s = .1 + Math.random() * .12;
      spk.mix[i] = Math.random() < .5 ? 1 : .1; made++;
    }
    spk.g.attributes.aMix.needsUpdate = true;
  }
  function updateSparks(dt) {
    for (let i = 0; i < SN; i++) {
      const v = spkV[i];
      if (v.life <= 0) { spk.alpha[i] = 0; continue; }
      v.life -= dt; v.vx *= 1 - 1.4 * dt; v.vy = v.vy * (1 - 1.4 * dt) - 1.4 * dt;
      spk.pos[i * 3] += v.vx * dt; spk.pos[i * 3 + 1] += v.vy * dt;
      const k = Math.max(0, v.life / v.max); spk.alpha[i] = k; spk.size[i] = v.s * (.4 + .6 * k);
    }
    ['position', 'aAlpha', 'aSize'].forEach(n => spk.g.attributes[n].needsUpdate = true);
  }

  /* ---------- fisika: tali ELASTIS (rantai Verlet yang bisa meregang) ---------- */
  const REST_L_DESK = 2.3, REST_L_MOB = 2.0;                  // panjang tali: laptop · HP (makin kecil = makin pendek)
  let REST_L = REST_L_DESK;
  const K_STRETCH = .14, ITER = 12, MAXS = 3.2;               // kekenyalan, iterasi, batas regang (×)
  let pts = [], cons = [], halfH = 3.5, halfW = 5, vw = 1, vh = 1, pxw = .01, anchorX = 0, anchorY = 5;
  let rotY = 0, rotVel = 0, t = 0, cardSpeed = 0, stretch = 1, lastVw = 0, lastVh = 0;
  let drag = false, dragOff = { x: 0, y: 0 }, dragTarget = { x: 0, y: 0 };
  let flipped = false, flip = 0, flipVel = 0, hover = false, shineT = 0;
  const CARD = SEG + 1, GRAV = -20 * S * S;
  let SEGLEN = REST_L / SEG;

  function setup() {
    pts = []; cons = [];
    pts.push({ x: anchorX, y: anchorY, px: anchorX, py: anchorY, w: 0 });
    const fold = still ? 1 : .22;                              // awal: tali terlipat, kartu "jatuh" saat halaman terbuka
    for (let i = 1; i <= SEG; i++) pts.push({ x: anchorX, y: anchorY - i * SEGLEN * fold, px: anchorX, py: anchorY - i * SEGLEN * fold, w: 1 });
    const cy = anchorY - SEG * SEGLEN * fold - LC;
    pts.push({ x: anchorX + 0.5, y: cy, px: anchorX + 0.5, py: cy, w: .6 });
    for (let i = 0; i < SEG; i++) cons.push([i, i + 1, SEGLEN, 0]);
    cons.push([SEG, CARD, LC, 1]);                           // sambungan klip → kartu (kaku)
  }

  function step(dt) {
    t += dt;
    pts[0].x = anchorX; pts[0].y = anchorY;
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i];
      if (drag && i === CARD) { p.px = p.x; p.py = p.y; continue; }
      const vx = (p.x - p.px) * .995, vy = (p.y - p.py) * .995;
      p.px = p.x; p.py = p.y;
      const wind = Math.sin(t * .9 * S + i) * (i === CARD ? .7 : .15) * S * S;
      p.x += vx + wind * dt * dt; p.y += vy + GRAV * dt * dt;
    }
    if (drag) {                                              // kartu mengikuti kursor, tanpa batas layar
      const p = pts[CARD], mx = .8 * S;
      p.x += Math.max(-mx, Math.min(mx, (dragTarget.x - p.x) * .45));
      p.y += Math.max(-mx, Math.min(mx, (dragTarget.y - p.y) * .45));
    }
    for (let it = 0; it < ITER; it++) {
      for (const [a, b, rest, rigid] of cons) {
        const A = pts[a], B = pts[b], wa = (drag && a === CARD) ? 0 : A.w, wb = (drag && b === CARD) ? 0 : B.w, ws = wa + wb;
        if (!ws) continue;
        const dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy) || 1e-6;
        const k = rigid ? 1 : (d > rest * MAXS ? 1 : (d > rest ? K_STRETCH : K_STRETCH * .4));
        const df = (d - rest) / d * k;
        A.x += dx * df * wa / ws; A.y += dy * df * wa / ws; B.x -= dx * df * wb / ws; B.y -= dy * df * wb / ws;
      }
    }
    const c = pts[CARD], vx = (c.x - c.px) / dt;
    cardSpeed += (Math.hypot(c.x - c.px, c.y - c.py) / dt - cardSpeed) * .25;
    const target = Math.max(-.8, Math.min(.8, vx * .1)) + Math.sin(t * .6 * S) * .22;
    rotVel += (target - rotY) * 38 * S * dt; rotVel *= .93; rotY += rotVel * dt * 4;
    rotY = Math.max(-1.1, Math.min(1.1, rotY));
    const goal = flipped ? Math.PI : 0;                      // pegas membalik kartu
    flipVel += ((goal - flip) * 140 - flipVel * 13) * dt; flip += flipVel * dt;
  }

  /* ---------- render ---------- */
  const curveTmp = [], sm = x => x * x * (3 - 2 * x);
  function camSync() { cam.position.y = -(window.scrollY || 0) * pxw; cam.updateMatrixWorld(); }
  function render() {
    camSync();
    const cl = pts[SEG], c = pts[CARD];
    cardGroup.position.set(cl.x, cl.y, 0);
    const zr = Math.atan2(c.x - cl.x, -(c.y - cl.y));
    cardGroup.rotation.z = zr; pivot.rotation.y = flip + rotY;
    pin.position.set(anchorX, anchorY, 0);
    halo.position.set(c.x, c.y, -1); halo.material.opacity = .42 + .14 * Math.sin(t * 1.7 * S);
    if (amb) amb.p.position.y = cam.position.y;
    shines.forEach(m => { m.uniforms.uTime.value = shineT; m.uniforms.uAngle.value = rotY + zr * 2; });

    // tali: pita yang meregang (menipis) dan terpuntir mengikuti putaran kartu
    curveTmp.length = 0; let len = 0;
    for (let i = 0; i <= SEG; i++) { curveTmp.push(new THREE.Vector3(pts[i].x, pts[i].y, 0)); if (i) len += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y); }
    stretch += (len / REST_L - stretch) * .25;
    const curve = new THREE.CatmullRomCurve3(curveTmp, false, 'catmullrom', .5);
    const pos = strapGeo.attributes.position.array, uv = strapGeo.attributes.uv.array, nm = strapGeo.attributes.normal.array;
    const half = STRAP_W / 2 * Math.max(.5, Math.min(1.05, 1 / Math.sqrt(stretch / 1.15))), twistEnd = flip + rotY;
    for (let i = 0; i <= SAMPLES; i++) {
      const s = i / SAMPLES, p = curve.getPoint(s), tg = curve.getTangent(s);
      const tw = twistEnd * sm(Math.max(0, (s - .3) / .7)), cs = Math.cos(tw), sn = Math.sin(tw);
      const wx = -tg.y * cs, wy = tg.x * cs, wz = sn, o = i * 6, u = i * 4, v = 1 - s * (REST_L / TILE);
      pos[o] = p.x + wx * half; pos[o + 1] = p.y + wy * half; pos[o + 2] = wz * half;
      pos[o + 3] = p.x - wx * half; pos[o + 4] = p.y - wy * half; pos[o + 5] = -wz * half;
      const nx = tg.y * wz, ny = -tg.x * wz, nz = tg.x * wy - tg.y * wx;
      nm[o] = nm[o + 3] = nx; nm[o + 1] = nm[o + 4] = ny; nm[o + 2] = nm[o + 5] = nz;
      uv[u] = 0; uv[u + 1] = v; uv[u + 2] = 1; uv[u + 3] = v;
    }
    strapGeo.attributes.position.needsUpdate = true; strapGeo.attributes.uv.needsUpdate = true; strapGeo.attributes.normal.needsUpdate = true;
    R.render(scene, cam);
  }

  /* ---------- ukuran & posisi: kanvas memenuhi layar, tali digantung di kolom kartu ---------- */
  function resize() {
    vw = window.innerWidth; vh = window.innerHeight;
    R.setSize(vw, vh, false);
    const aspect = vw / vh;
    halfH = Math.max(3.5, 2.5 / aspect); halfW = halfH * aspect; pxw = 2 * halfH / vh;
    cam.aspect = aspect; cam.position.set(0, 0, halfH / tanH); cam.updateProjectionMatrix();
    uScale.value = R.getDrawingBufferSize(new THREE.Vector2()).y / (2 * tanH);
    const b = host.getBoundingClientRect(), top = b.top + (window.scrollY || 0);
    anchorX = (b.left + b.width / 2 - vw / 2) * pxw;
    const mob = vw <= 820;   // layar HP: kartu di paling atas, tali muncul dari tepi layar
    const rl = mob ? REST_L_MOB : REST_L_DESK, lenChanged = rl !== REST_L;   // panjang tali menyesuaikan HP / laptop
    if (lenChanged) { REST_L = rl; SEGLEN = rl / SEG; }
    if (mob) host.style.height = Math.round((REST_L + LC + CARD_H / 2 - 1) / pxw + 36) + 'px'; else host.style.height = '';   // tinggi mengikuti panjang tali + kartu
    anchorY = halfH - top * pxw + (getComputedStyle(host).position === 'absolute' || mob ? 1.0 : 0);
    const hs = Math.min(6.5, halfW * 1.85); halo.scale.set(hs, hs, 1);
    const big = !pts.length || lenChanged || Math.abs(vw - lastVw) > 2 || Math.abs(vh - lastVh) > 150;   // abaikan perubahan kecil (bar alamat HP)
    lastVw = vw; lastVh = vh;
    if (big) { setup(); initAmbient(); } else { pts[0].x = anchorX; pts[0].y = anchorY; }
    render();
  }

  /* ---------- interaksi: tarik ke mana saja · klik = balik ---------- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), hit = new THREE.Vector3();
  function worldAt(e) {
    camSync(); ndc.set((e.clientX / vw) * 2 - 1, -(e.clientY / vh) * 2 + 1);
    ray.setFromCamera(ndc, cam); ray.ray.intersectPlane(plane, hit); return hit;
  }
  const overCard = e => { worldAt(e); return ray.intersectObjects([body, front, back]).length > 0; };
  const onNav = e => e.target && e.target.closest && e.target.closest('nav');

  let hintEl = null;
  if (CFG.hint) { hintEl = document.createElement('div'); hintEl.className = 'card-hint'; hintEl.textContent = CFG.hint; host.appendChild(hintEl); }

  /* tombol "Balik kartu" (hanya tampil di layar HP, lewat CSS) */
  const flipBtn = document.createElement('button'); flipBtn.type = 'button'; flipBtn.className = 'flip-btn';
  flipBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg><span></span>';
  flipBtn.lastChild.textContent = CFG.flipLabel;
  flipBtn.addEventListener('click', () => flipCard());
  if (CFG.flipLabel) host.appendChild(flipBtn);   // flipLabel kosong = tanpa tombol (kartu tetap bisa diketuk untuk dibalik)

  function flipCard() {
    flipped = !flipped;
    if (hintEl) hintEl.classList.add('gone');
    const c = pts[CARD]; spawn(c.x, c.y, 34, 4.2);
    if (window.fxTick) window.fxTick();
    if (still) { flip = flipped ? Math.PI : 0; render(); }
  }

  let down = null, suppress = false;
  window.addEventListener('pointerdown', e => {
    if (e.button > 0 || (!running && !still) || onNav(e) || !overCard(e)) return;
    e.stopImmediatePropagation(); e.preventDefault();
    const w = worldAt(e), c = pts[CARD];
    drag = true; suppress = true; dragOff = { x: c.x - w.x, y: c.y - w.y }; dragTarget = { x: c.x, y: c.y };
    down = { x: e.clientX, y: e.clientY, t: performance.now() };
    document.body.classList.add('card-drag'); document.body.classList.remove('card-hover');
  }, true);
  window.addEventListener('pointermove', e => {
    if (drag) { const w = worldAt(e); dragTarget = { x: w.x + dragOff.x, y: w.y + dragOff.y }; return; }
    if (e.pointerType !== 'mouse' || !running) return;
    const h = !onNav(e) && overCard(e);
    if (h !== hover) { hover = h; document.body.classList.toggle('card-hover', h); }
  }, { passive: true });
  function endDrag(e, allowFlip) {
    if (!drag) return;
    drag = false; document.body.classList.remove('card-drag');
    if (allowFlip && down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 8 && performance.now() - down.t < 600) flipCard();
    down = null; setTimeout(() => { suppress = false; }, 60);
  }
  window.addEventListener('pointerup', e => endDrag(e, true), true);
  window.addEventListener('pointercancel', e => endDrag(e, false), true);
  window.addEventListener('blur', () => endDrag({}, false));
  window.addEventListener('click', e => { if (suppress) { e.stopPropagation(); e.preventDefault(); } }, true);   // jangan menekan tombol di bawah kartu
  window.addEventListener('touchstart', e => {          // di HP: menyentuh kartu tidak menggulir halaman
    const tc = e.touches[0]; if (running && tc && !onNav(e) && overCard(tc)) e.preventDefault();
  }, { passive: false });

  /* ---------- loop animasi (berhenti saat tidak terlihat) ---------- */
  let running = false, visible = true, last = 0, acc = 0;
  function frame(now) {
    if (!running) return;
    requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, .05); last = now; acc += dt;
    while (acc >= 1 / 60) { step(1 / 60); acc -= 1 / 60; }
    shineT += dt * (hover || drag ? 2.4 : 1) * (.8 + S * .3);
    if (cardSpeed > 2.2 * S && Math.random() < .7) { const c = pts[CARD]; spawn(c.x, c.y, 1, 1.6); }
    updateAmbient(dt, t); updateSparks(dt);
    render();
  }
  function start() { if (running || still || window.__ready === false) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; document.body.classList.remove('card-hover'); hover = false; }
  new IntersectionObserver(es => { visible = es[0].isIntersecting; visible && !document.hidden ? start() : stop(); }, { rootMargin: '300px 0px' }).observe(hero);
  document.addEventListener('visibilitychange', () => { document.hidden ? stop() : (visible && start()); });
  window.addEventListener('portfolio:ready', () => setTimeout(() => { if (visible) start(); }, 350), { once: true });   // kartu jatuh setelah loading selesai
  let rz = 0; const onResize = () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(resize); };
  new ResizeObserver(onResize).observe(hero); window.addEventListener('resize', onResize);
  if (still) window.addEventListener('scroll', () => render(), { passive: true });

  /* ---------- mulai: siapkan tekstur lalu tampilkan ---------- */
  (async () => {
    await waitFonts();
    const photo = await getPhoto();
    const fT = tex(frontTexture(photo)), bT = tex(backTexture());
    frontMat.map = fT; frontMat.needsUpdate = true; backMat.map = bT; backMat.needsUpdate = true;
    strapMat.map = tex(strapTexture()); strapMat.needsUpdate = true;
    if (SHINE) { makeShine(fT, DEPTH / 2 + 0.024, 0, 1); makeShine(bT, -(DEPTH / 2 + 0.024), Math.PI, .55); }
    resize();
    if (still) { for (let i = 0; i < 240; i++) step(1 / 60); render(); } else start();
    cardReady();
  })();
})();
