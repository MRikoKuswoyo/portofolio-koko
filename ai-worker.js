/* =====================================================================
   ai-worker.js — CONTOH backend untuk "Tanya AI" (Cloudflare Workers, gratis)
   Dengan ini tombol Tanya AI dijawab model AI sungguhan (Claude), bukan hanya pencarian data lokal.

   KENAPA PERLU BACKEND?  API key tidak boleh ditaruh di file website (siapa pun bisa membacanya
   lalu memakai kuotamu). Key disimpan sebagai "secret" di Worker ini.

   LANGKAH:
   1. Buat akun di https://dash.cloudflare.com → Workers & Pages → Create → Worker.
   2. Tempel isi file ini sebagai kode Worker.
   3. Settings → Variables and Secrets: tambah secret  ANTHROPIC_API_KEY  (isi key dari console.anthropic.com).
   4. (opsional tapi disarankan) ubah ALLOWED_ORIGIN di bawah ke alamat websitemu.
   5. Deploy, salin URL Worker (misal https://tanya-ai.namamu.workers.dev)
      lalu isi di data.js →  ai: { endpoint: "https://tanya-ai.namamu.workers.dev" }
   ===================================================================== */
const ALLOWED_ORIGIN = '*';                 // contoh: 'https://namamu.github.io'
const MODEL = 'claude-haiku-5-5';           // model cepat & hemat; ganti sesuai kebutuhan
const MAX_Q = 300;                          // batas panjang pertanyaan

const cors = { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors });
    try {
      const { question, lang, name, history, context } = await req.json();
      const q = String(question || '').slice(0, MAX_Q).trim();
      if (!q) return json({ answer: '' }, 400);

      const system =
        `You are the assistant on ${name || 'the owner'}'s personal portfolio website. ` +
        `Answer ONLY from the portfolio data below. If the answer is not in the data, say you don't know and suggest contacting the owner. ` +
        `Reply in ${lang === 'en' ? 'English' : 'Indonesian'}, friendly and concise (max ~120 words). Plain text, no markdown.\n\n` +
        `PORTFOLIO DATA:\n${String(context || '').slice(0, 9000)}`;

      const msgs = [...(Array.isArray(history) ? history : []).slice(-6).map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 800) })), { role: 'user', content: q }];

      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: MODEL, max_tokens: 400, system, messages: msgs }),
      });
      if (!r.ok) return json({ answer: '' }, 502);
      const d = await r.json();
      const answer = (d.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
      return json({ answer });
    } catch (e) {
      return json({ answer: '' }, 500);
    }
  },
};
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, 'Content-Type': 'application/json' } });
