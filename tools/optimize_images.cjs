/* =====================================================
   optimize_images.cjs — Karten-Illustrationen optimieren
   Wandelt abgelegte Quellbilder (NN.png/.jpg/.jpeg) in
   leichtgewichtige NN.webp (max. 1200px Breite, Qualitaet 80).
   Nur Quellen werden gewandelt; bestehende, aktuelle WebPs
   werden uebersprungen. Robust: keine Quellen -> No-op.
   Lauf: node tools/optimize_images.cjs   (auch im pre-commit)
===================================================== */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'public', 'img', 'cards');
const MAX_WIDTH = 1200;
const QUALITY = 80;
const SRC_RE = /\.(png|jpe?g)$/i;

function fmt(bytes) { return (bytes / 1024).toFixed(0) + ' KB'; }

async function main() {
  if (!fs.existsSync(DIR)) { console.log('optimize_images: kein img/cards-Ordner, nichts zu tun.'); return; }

  let sharp;
  try { sharp = require('sharp'); }
  catch (e) {
    console.error('optimize_images: sharp nicht verfuegbar (npm install -D sharp). Uebersprungen.');
    return; // Commit nicht blockieren
  }

  const sources = fs.readdirSync(DIR).filter(f => SRC_RE.test(f));
  if (sources.length === 0) { console.log('optimize_images: keine Quellbilder gefunden.'); return; }

  let done = 0, skipped = 0;
  for (const src of sources) {
    const base = src.replace(SRC_RE, '');
    const srcPath = path.join(DIR, src);
    const outPath = path.join(DIR, base + '.webp');

    // Ueberspringen, wenn WebP existiert und nicht aelter als die Quelle ist
    if (fs.existsSync(outPath)) {
      const s = fs.statSync(srcPath), o = fs.statSync(outPath);
      if (o.mtimeMs >= s.mtimeMs) { skipped++; continue; }
    }

    const before = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .rotate() // EXIF-Orientierung beachten
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);
    const after = fs.statSync(outPath).size;
    console.log('  ' + src + ' -> ' + base + '.webp  (' + fmt(before) + ' -> ' + fmt(after) + ')');
    done++;
  }
  console.log('optimize_images: ' + done + ' optimiert, ' + skipped + ' aktuell.');
}

// Als CLI (pre-commit, npm run optimize:images) direkt ausfuehren;
// als Modul (tools/dev.cjs) nur exportieren.
if (require.main === module) {
  main().catch(err => { console.error('optimize_images Fehler:', err.message); process.exit(1); });
}
module.exports = main;
