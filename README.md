# Beauty Salon & Nails – Website

Website für das Nagelstudio **Beauty Salon & Nails** in Passau (Inhaberin Huong Pham).
One-Pager mit Leistungen, Galerie, Über mich, Bewertungen, Anfahrt und Kontakt sowie Impressum und Datenschutz.

**Technik:** Astro (statische Seite) + Tailwind CSS + TypeScript · Hosting: Cloudflare Workers (Static Assets) · keine Cookies, kein Tracking, Schriften lokal.

---

## Was muss ich wo ändern?

| Was | Datei |
|---|---|
| **Domain / Website-Adresse** | `astro.config.mjs` → `SITE` (eine Zeile) |
| Telefon, WhatsApp, Instagram, Adresse, **Öffnungszeiten**, **Google-Bewertung** | `src/config/site.ts` |
| **Leistungen & Preise** | `src/data/services.ts` – `price: 35` eintragen → erscheint als „ab 35 €“, ohne Preis steht „auf Anfrage“ |
| **Galerie** (Bilder, Alt-Texte, Filter, Ausschnitt, „Featured“) | `src/data/gallery.ts` + Bilder in `src/assets/bilder/galerie/` |
| Farbkarten-Band | `src/data/colors.ts` + `src/assets/bilder/farben/` |
| **Kundenstimmen** | `src/data/reviews.ts` (nur echte Bewertungen eintragen) |
| Texte (Hero, Vorteile, Über mich, Navigation) | `src/data/content.ts` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` (gelb markierte Stellen ausfüllen) |
| Logo | `src/assets/bilder/logo/` – für ein Vektor-Logo einfach `logo-gold.svg` und `logo-dunkelgold.svg` dazulegen, sie werden automatisch verwendet |
| Security-Header | `public/_headers` |

**Bild austauschen:** neue Datei in den passenden Ordner unter `src/assets/bilder/` legen und in der Datendatei den Dateinamen anpassen. Bilder werden beim Build automatisch in AVIF/WebP und passende Größen umgewandelt.

Jede Änderung, die auf `main` gepusht wird, geht automatisch online (siehe unten).

---

## Lokal starten (optional)

Voraussetzung: [Node.js](https://nodejs.org) ab Version 22.12.

```bash
npm install
npm run dev       # Entwicklungsserver auf http://localhost:4321
npm run build     # Prüfen + fertige Seite in ./dist bauen
npm run preview   # gebaute Seite ansehen
```

---

## Online stellen mit Cloudflare (kostenlos)

Einmalig einrichten, danach wird bei jedem Push auf `main` automatisch neu gebaut und veröffentlicht.

1. **Konto anlegen:** auf [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) kostenlos registrieren und E-Mail bestätigen.
2. **Workers & Pages öffnen:** im Dashboard links auf **Compute (Workers) → Workers & Pages** und dann **Erstellen / Create**.
3. **GitHub verbinden:** **Repository importieren / Import a repository** wählen → **GitHub verbinden** → Cloudflare den Zugriff auf das Repo `Beauty-Salon-and-Nails` erlauben.
4. **Repo wählen:** `9m526k6995-droid/Beauty-Salon-and-Nails` auswählen.
5. **Build-Einstellungen prüfen** (meist schon richtig vorausgefüllt):
   - Projektname: `beauty-salon-and-nails`
   - Produktionszweig: `main`
   - Build-Befehl: `npm run build`
   - Deploy-Befehl: `npx wrangler deploy`
   - (Die Datei `wrangler.jsonc` im Repo sagt Cloudflare, dass der Ordner `dist` veröffentlicht wird.)
6. **Deploy** klicken und 1–3 Minuten warten.
7. **Adresse öffnen:** Cloudflare zeigt die kostenlose Adresse an, z. B. `https://beauty-salon-and-nails.DEIN-NAME.workers.dev`.
   Diese Adresse dann in `astro.config.mjs` bei `SITE` eintragen und pushen – damit stimmen Sitemap, Canonical-Links und Vorschaubilder für Google/WhatsApp.

### Später: eigene Domain

Domain bei Cloudflare registrieren (oder die vorhandene Domain zu Cloudflare umziehen) und im Worker unter **Einstellungen → Domains & Routen → Hinzufügen → Benutzerdefinierte Domain** eintragen – Cloudflare richtet DNS und HTTPS automatisch ein.
Danach die neue Adresse in `astro.config.mjs` bei `SITE` eintragen und pushen.
Für die Weiterleitung **www → ohne www** zusätzlich `www.deine-domain.de` als Domain hinzufügen und unter **Regeln → Redirect Rules** die Vorlage **„Redirect from WWW to Root“** (301) aktivieren.

---

## Datenschutz-Technik

- Keine Cookies, kein Tracking, keine externen Schriften (Fonts lokal über `@fontsource`).
- Google Maps nur per Zwei-Klick-Lösung („Karte laden“).
- Instagram/WhatsApp nur als Links, nichts eingebettet.
- Strenge Security-Header inkl. Content-Security-Policy in `public/_headers`.
- Falls später Statistik gewünscht: Cloudflare Web Analytics (cookielos) im Dashboard aktivieren und in der Datenschutzerklärung ergänzen.

## Projektstruktur

```
src/
  assets/bilder/   Logo, Studio, Farbkarten, Galerie (Originale)
  components/      Sektionen der Seite (Hero, Galerie, Kontakt …)
  config/site.ts   Studio-Daten (Kontakt, Zeiten, Bewertung)
  data/            Leistungen, Galerie, Farben, Bewertungen, Texte
  layouts/         Grundgerüst mit SEO-Tags
  pages/           Startseite, Impressum, Datenschutz, 404, robots.txt
public/            Favicons, Social-Share-Bild, _headers
PROMPT.md          Ursprünglicher Auftrag
```
