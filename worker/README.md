# Tag-Feedback-Worker — Einrichtung (einmalig)

Dieser Cloudflare Worker nimmt das Feedback der Review-Seite entgegen, prüft ein
Passwort und schreibt es in den Branch `tag-feedback` dieses Repos (Datei
`tools/tag-feedback.json`). GitHub-Token + Passwort liegen **nur** im Worker, nie
im Seitencode.

Alles unten geht im Browser über die Cloudflare- bzw. GitHub-Oberfläche — **kein
Terminal nötig**.

## 1. GitHub-Token erstellen (fine-grained, minimal)
1. GitHub → Settings → Developer settings → **Fine-grained tokens** → *Generate new token*.
2. **Resource owner:** dein Account. **Repository access:** *Only select repositories* → **mistheld**.
3. **Permissions → Repository permissions → Contents: Read and write** (sonst nichts).
4. Ablauf nach Wunsch (z.B. 90 Tage). Token generieren und **kopieren**.
   - Den Token **nicht** in den Chat posten — gleich nur in Cloudflare einfügen.

## 2. Worker anlegen
1. Cloudflare-Account erstellen (gratis) → Dashboard → **Workers & Pages** → *Create* → *Create Worker*.
2. Namen vergeben (z.B. `mistheld-feedback`) → *Deploy* (erst der Vorlage).
3. *Edit code* → den gesamten Inhalt von `worker/feedback-worker.js` einfügen → *Deploy*.
4. Die **Worker-URL** notieren (z.B. `https://mistheld-feedback.<dein-name>.workers.dev`).

## 3. Variablen & Secrets setzen
Im Worker → **Settings → Variables and Secrets**:

| Name | Typ | Wert |
|---|---|---|
| `REVIEW_PASSWORD` | Secret (encrypt) | dein gewähltes Passwort |
| `GITHUB_TOKEN` | Secret (encrypt) | der Token aus Schritt 1 |
| `GITHUB_REPO` | Text | `schwitzermodus/mistheld` |
| `BRANCH` | Text | `tag-feedback` |
| `FILE_PATH` | Text | `tools/tag-feedback.json` |
| `ALLOW_ORIGIN` | Text | `https://schwitzermodus.github.io` |

Nach dem Setzen erneut **Deploy**.

## 4. Mir die Worker-URL geben
Schick mir die URL aus Schritt 2.4. Ich trage sie in der Review-Seite ein und
deploye das Frontend. Danach: Seite öffnen → Passwort eingeben → Feedback wird
automatisch gespeichert und landet im Branch `tag-feedback`.

## Test
- `POST <URL>/load` mit `{"password":"falsch"}` → `401`.
- Mit richtigem Passwort → `{"feedback":{...}}`.
- Eine Bewertung auf der Seite → nach wenigen Sekunden neuer Commit im Branch `tag-feedback`.

## Sicherheit
- Token ist auf dieses eine Repo + nur „Contents" beschränkt — er kann nichts anderes.
- Passwort schützt Lesen und Schreiben. Bei Verdacht: Token in GitHub *Revoke*, Passwort im Worker ändern.
