import { defineConfig, type Plugin } from 'vite';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FEEDBACK_PATH = join(__dirname, 'tools', 'tag-feedback.json');

// Dev-only Backoffice-API: liest/schreibt tools/tag-feedback.json.
// Laeuft NUR im `vite` Dev-Server (configureServer) — kein Einfluss auf den Build/Deploy.
function tagFeedbackApi(): Plugin {
  return {
    name: 'tag-feedback-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/tag-feedback', (req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        if (req.method === 'GET') {
          let data = '{}';
          try { if (existsSync(FEEDBACK_PATH)) data = readFileSync(FEEDBACK_PATH, 'utf8') || '{}'; } catch (_) {}
          res.statusCode = 200;
          res.end(data);
          return;
        }
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body || '{}');
              writeFileSync(FEEDBACK_PATH, JSON.stringify(parsed, null, 2), 'utf8');
              res.statusCode = 200;
              res.end('{"ok":true}');
            } catch (e: any) {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false, error: String(e && e.message || e) }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end('{"ok":false,"error":"method not allowed"}');
      });
    },
  };
}

// GitHub Pages serviert von / (Projektseite) — relative Asset-Pfade via base './'.
// Statische Laufzeit-Assets (img/, fonts/, mp3) liegen in public/ und landen 1:1 in dist/.
// backoffice.html ist NICHT als Build-Input gelistet -> bleibt dev-only, wird nie deployed.
export default defineConfig({
  base: './',
  plugins: [tagFeedbackApi()],
  build: {
    outDir: 'dist',
    target: 'es2020',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: join(__dirname, 'index.html'),
    },
  },
});
