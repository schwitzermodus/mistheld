# Mistheld

Ein Heldengenerator auf Deutsch, mobile first, mit Swipe-Mechanik.

🌐 **Live:** https://schwitzermodus.github.io/mistheld/

## Was das ist

Mistheld ist ein MVP. Der Generator führt dich in vier Phasen durch einen Stapel Karten – Stimmung, Herkunft, Können, Antrieb. Du wischst nach rechts, wenn etwas zu deinem Helden passt, und nach links, wenn nicht. Am Ende generiert Mistheld einen vollständigen Helden mit vier Themes, Power Tags, Weakness Tag und Quest pro Theme. 

## Technik

Single-File-HTML, alles inline. Keine Backends, keine Datenbank, keine Persistenz. Helden gehen verloren, wenn die Session geschlossen wird.

- **PDF-Export:** [jsPDF](https://github.com/parallax/jsPDF) via CDN
- **Fonts:** Cormorant Garamond + Inter via Google Fonts
- **Hosting:** GitHub Pages

## Lokal ausprobieren

```
git clone https://github.com/schwitzermodus/mistheld.git
cd mistheld
# Einfach index.html im Browser öffnen
```

Oder via Mini-Server:

```
python3 -m http.server 8000
# Browser: http://localhost:8000
```

## Status

MVP, bewusst schlank. Erweiterungen wie persistente Heldenliste, Story Tag (Backpack), Heldenname, drei Erstellungsmethoden (Vorgefertigte / Tropes / Detailed) sind in der Full-Blown-Version geplant.

## Lizenz

Code: MIT. Inhalte (Themebooks, Tags, Quest-Ideen) basieren auf *Legend in the Mist* von Son of Oak Game Studio und sind nicht-kommerziell genutzt.
