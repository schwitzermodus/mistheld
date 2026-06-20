/* =====================================================
   dev.cjs — Instant-Vorschau fuer Karten-Illustrationen
   Optimiert abgelegte Bilder automatisch und serviert die
   App lokal. Bild in img/cards/ ablegen -> sofort als WebP
   optimiert -> im Browser (localhost / WLAN-IP) sichtbar.
   Lauf: npm run dev
===================================================== */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const optimize = require('./optimize_images.cjs');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'img', 'cards');
const SRC_RE = /\.(png|jpe?g)$/i;
const PORT = process.env.PORT || '3000';

let building = false, again = false;
async function build() {
  if (building) { again = true; return; }   // laeuft schon -> danach erneut
  building = true;
  try { await optimize(); } catch (e) { console.error('optimize Fehler:', e.message); }
  building = false;
  if (again) { again = false; build(); }
}

(async () => {
  await build();

  // Quellbilder beobachten und bei Aenderung neu optimieren (entprellt)
  if (fs.existsSync(DIR)) {
    let t = null;
    fs.watch(DIR, (_ev, file) => {
      if (file && !SRC_RE.test(file)) return; // nur Quellbilder, WebP-Schreibvorgaenge ignorieren
      clearTimeout(t);
      t = setTimeout(build, 400);
    });
    console.log('Beobachte img/cards/ — neue/geaenderte Bilder werden automatisch optimiert.');
  }

  // Lokalen Server starten (serve bindet auf 0.0.0.0 -> im WLAN per PC-IP erreichbar)
  console.log('Starte lokalen Server auf Port ' + PORT + ' (Network-URL fuers Handy beachten)...');
  const srv = spawn('npx', ['serve', '.', '-p', PORT, '--no-clipboard'],
    { stdio: 'inherit', shell: true, cwd: ROOT });
  srv.on('exit', code => process.exit(code || 0));
})();
