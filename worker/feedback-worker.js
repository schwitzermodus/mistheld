/* =====================================================
   Mistheld — Tag-Feedback-Worker (Cloudflare Worker, gratis).
   Bruecke zwischen der oeffentlichen Review-Seite (GitHub Pages) und dem Repo:
   - Validiert ein gemeinsames Passwort (Secret REVIEW_PASSWORD).
   - /load: liest das aktuelle Feedback aus dem Repo-Branch.
   - /save: schreibt (committet) das Feedback per GitHub-API in den Repo-Branch.
   GitHub-Token + Passwort liegen NUR als Worker-Secrets vor, nie im Seitencode.

   Deployment + Secrets: siehe worker/README.md. NICHT Teil des Vite-Builds.

   Erwartete Variablen/Secrets (Cloudflare-Dashboard -> Settings -> Variables):
     REVIEW_PASSWORD  (Secret)  gemeinsames Passwort
     GITHUB_TOKEN     (Secret)  fine-grained PAT, nur dieses Repo, Contents R/W
     GITHUB_REPO      (Var)     z.B. "schwitzermodus/mistheld"
     BRANCH           (Var)     z.B. "tag-feedback"
     FILE_PATH        (Var)     z.B. "tools/tag-feedback.json"
     ALLOW_ORIGIN     (Var)     z.B. "https://schwitzermodus.github.io"  (oder "*")
===================================================== */

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOW_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}
function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}
// UTF-8-sichere Base64-Kodierung (Umlaute!) — btoa/atob sind nur latin1.
function toBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
function fromBase64(b64) {
  const bin = atob((b64 || '').replace(/\n/g, ''));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'method not allowed' }, 405, cors);

    let body;
    try { body = await request.json(); } catch (_) { return json({ error: 'bad json' }, 400, cors); }
    if (!body || typeof body.password !== 'string' || body.password !== env.REVIEW_PASSWORD) {
      return json({ error: 'unauthorized' }, 401, cors);
    }

    const repo = env.GITHUB_REPO;
    const branch = env.BRANCH || 'tag-feedback';
    const path = env.FILE_PATH || 'tools/tag-feedback.json';
    const api = `https://api.github.com/repos/${repo}/contents/${encodeURI(path)}`;
    const gh = {
      'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'mistheld-feedback-worker',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    const url = new URL(request.url);

    // ---- /load ----
    if (url.pathname.endsWith('/load')) {
      const r = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers: gh });
      if (r.status === 404) return json({ feedback: {} }, 200, cors);
      if (!r.ok) return json({ error: 'github load failed', status: r.status }, 502, cors);
      const data = await r.json();
      let parsed = {};
      try { parsed = JSON.parse(fromBase64(data.content)); } catch (_) {}
      return json({ feedback: parsed }, 200, cors);
    }

    // ---- /save ----
    if (url.pathname.endsWith('/save')) {
      const feedback = body.feedback;
      if (!feedback || typeof feedback !== 'object') return json({ error: 'no feedback' }, 400, cors);

      let sha;
      const cur = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers: gh });
      if (cur.ok) { try { sha = (await cur.json()).sha; } catch (_) {} }

      const doneCount = Array.isArray(feedback._done) ? feedback._done.length : 0;
      const put = await fetch(api, {
        method: 'PUT',
        headers: { ...gh, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `tag-feedback: ${doneCount} Bündel erledigt`,
          content: toBase64(JSON.stringify(feedback, null, 2)),
          branch,
          ...(sha ? { sha } : {}),
        }),
      });
      if (!put.ok) {
        const detail = await put.text();
        return json({ error: 'github save failed', status: put.status, detail }, 502, cors);
      }
      return json({ ok: true }, 200, cors);
    }

    return json({ error: 'not found' }, 404, cors);
  },
};
