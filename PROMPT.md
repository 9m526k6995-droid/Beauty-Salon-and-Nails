# Prompt für Claude Code – Website „Beauty Salon & Nails" Passau

> Die Bilder liegen bereits im Repo unter `src/assets/bilder/`. Alles unterhalb der Linie in Claude Code einfügen. Platzhalter in [ECKIGEN KLAMMERN] vorher ausfüllen oder Claude Code fragen lassen.

---

Du bist ein erfahrener Webdesigner und Frontend-Entwickler. Baue eine hochwertige, professionelle und moderne Website für ein Nagel- und Beautystudio in Passau. Die Seite soll edel, ruhig und vertrauenswürdig wirken – wie ein Premium-Studio, nicht wie ein Baukasten-Template. Ziel: Neukundinnen in Passau überzeugen und sie zu einem Anruf, einer WhatsApp-Nachricht oder einer Terminbuchung bringen.

## 1. Fakten zum Studio (aus Google-Profil, Instagram und Visitenkarte)

- **Name:** Beauty Salon & Nails (so steht es am Leuchtschild im Studio und im Logo; bei Google heißt der Eintrag „Beauty Salon & Nail", auf der Visitenkarte „Beauty & Nails Salon Passau" – auf der Website einheitlich „Beauty Salon & Nails" verwenden)
- **Inhaberin:** Huong Pham (stellt sich auf Instagram persönlich vor: „Hallo ihr Lieben! Ich heiße Huong Pham und liebe es, eure Nägel zu …")
- **Adresse:** [BESTÄTIGEN: Google sagt Theresienstraße **32**, die Visitenkarte von 2024 sagt Theresienstraße **21**], 94032 Passau (Innenstadt)
- **Telefon:** Mobil +49 160 6397158 (Google) · Festnetz 0851/78410… [vollständige Nummer von der Visitenkarte ergänzen] · WhatsApp-Button auf die Mobilnummer: [JA/NEIN]
- **Öffnungszeiten:** Montag–Samstag 09:00–19:00 Uhr, Sonntag geschlossen
- **Google-Bewertung:** 4,4 Sterne aus 27 Bewertungen (als dynamisch änderbaren Wert in einer Config-Datei ablegen, nicht hart im Text)
- **Instagram:** https://www.instagram.com/beauty_salon_nail_passau/
- **Google Maps:** https://maps.app.goo.gl/5yvkA2oNBNos3DEX6
- **Domain:** [z. B. beautysalon-nail-passau.de]

## 2. Positionierung (abgeleitet aus echten Kundenbewertungen)

Diese Stärken nennen Kundinnen immer wieder – sie sind der rote Faden für alle Texte:
- **Ruhige, entspannte und herzliche Atmosphäre**, Massagesessel bei der Behandlung
- **Sorgfalt:** Wunsch-Designs nach Foto werden genau angeschaut und präzise umgesetzt
- **Hygiene & moderne Geräte** – sauberer als viele andere Studios
- **Langlebige Ergebnisse** (Nägel und Wimpern halten lange)
- **Kurzfristige Termine oft möglich**, wenig Wartezeit
- **Faire Preise**, jede Farbe und jedes Design möglich, Beratung zu aktuellen Trends
- **Wimpernverlängerung** wird ebenfalls angeboten
- **Persönlich geführt:** Huong Pham arbeitet selbst am Tisch (weißer Kittel, Handschuhe, also professionell und hygienisch). Das gehört in den „Über mich"-Bereich.
- **Riesige Farbauswahl:** Auf Instagram sieht man viele Farbkarten mit Hunderten Gel-Farben (Glitzer, Cat-Eye, Jelly, Rot-Töne, Grün-/Blau-Töne, Nude). Das ist ein eigener Vorteil: „Über 500 Farben zur Auswahl" [Zahl bestätigen lassen, sonst „große Farbauswahl"]
- **Nail Art auf hohem Niveau:** Blumenmotive (auch 3D), French in vielen Varianten (klassisch, Farbe, Swirl/Wellen), Gold- und Chrome-Linien, Ombré/Babyboomer, Steinchen und Saison-Designs (Weihnachten, Valentinstag)

Texte selbst formulieren (keine Bewertungen wörtlich kopieren, außer im Bewertungsbereich mit Erlaubnis). Tonalität: warm, persönlich, Du-Form, kurz und hochwertig. Sprache: Deutsch.

## 3. Leistungen

Lege die Leistungen in einer zentralen Datendatei an (`src/data/services.ts` o. ä.), damit Preise später einfach geändert werden können:

Die Preisliste liegt noch nicht vor und wird später nachgereicht. Lege deshalb diese Struktur an und zeige statt Preisen vorerst „Preis auf Anfrage“ (KEINE erfundenen Preise). Sobald ich die Preise in `services.ts` eintrage, sollen sie automatisch erscheinen. Ist ein Preis gesetzt, wird er als „ab XX €“ angezeigt, sonst „auf Anfrage“:
- Nägel: Neumodellage Gel, Auffüllen, Shellac/Gellack, Nageldesign & Nail Art, French, Chrome/Trends
- Maniküre
- Pediküre (mit/ohne Shellac)
- Wimpernverlängerung (Neuset, Auffüllen)
- [weitere: Augenbrauen? Kosmetik?]

## 4. Seitenstruktur (One-Pager + Rechtsseiten)

1. **Header:** Logo/Schriftzug, Navigation, sticky „Termin anfragen"-Button
2. **Hero:** dunkle, edle Sektion (Nachtblau + Gold, wie das Leuchtschild im Studio). Headline z. B. „Dein Nagelstudio in der Passauer Innenstadt", zwei CTAs: Anrufen / WhatsApp. Bild: `studio/studio-leuchtschild` oder eine Collage aus 3 Nagelbildern (siehe Abschnitt 9 – KEIN Vollbild-Hintergrund aus einem kleinen Foto)
3. **Vorteile:** 4 Kacheln (Hygiene, Präzision nach Wunschfoto, entspannte Atmosphäre mit Massagesesseln, riesige Farbauswahl)
3b. **Farbauswahl-Band:** schmale Sektion mit den 4 Farbkarten-Bildern (`farben/`) als horizontaler Streifen/Slider: „Hunderte Farben – von Nude bis Glitzer"
4. **Leistungen & Preise:** übersichtliche Karten oder Tabs (Nägel / Füße / Wimpern)
5. **Galerie „Unsere Arbeiten":** Bilder aus `src/assets/bilder/galerie/`, Filter-Chips (Alle / French / Blumen & Art / Natur & Nude / Saison), Lightbox, am Ende Link „Mehr auf Instagram"
6. **Über mich – Huong Pham:** Foto `studio/inhaberin-huong-pham` groß, daneben persönlicher Text in Ich-Form (warm, kurz; nichts erfinden außer allgemeiner Leidenschaft für Nägel – Erfahrung/Jahre als [PLATZHALTER]). Darunter zwei kleinere Bilder `studio/studio-arbeitsplatz` und `studio/studio-lackregal-gold` als Einblick ins Studio
7. **Bewertungen:** 3–4 ausgewählte Kundenstimmen (nur positive, echte, gekürzt), Sternbewertung, Link „Alle Bewertungen auf Google"
8. **Öffnungszeiten & Anfahrt:** Zeiten, Adresse, Karte (siehe Datenschutz unten), Hinweis zu Parken/ÖPNV [ergänzen]
9. **Kontakt / Termin:** Anrufen, WhatsApp, optional Kontaktformular [Ja/Nein]
10. **Footer:** Kontakt, Instagram, Impressum, Datenschutz
11. Seiten **/impressum** und **/datenschutz** (Platzhaltertexte klar markieren, nicht erfinden)

Mobil zuerst denken: Die meisten Besucherinnen kommen über Instagram und Google auf dem Handy. Auf Mobil eine feste untere Leiste mit „Anrufen" und „WhatsApp".

## 5. Design

- Look: Premium, clean, feminin aber nicht kitschig. Viel Weißraum, große Bilder, feine Linien.
- **Markenidentität aus dem echten Studio (Analyse der Instagram-Bilder):**
  - Logo: Silhouette eines Frauenprofils mit fließendem Haar und Schmetterling, dazu Schreibschrift „Beauty", darunter „Salon & Nails". Auf Instagram in **Gold auf Petrol/Teal (Kreis)**, auf der Visitenkarte **Gold auf Weiß** in dünner Kreislinie
  - Studio: **sehr dunkle Wand (fast Schwarz/Nachtblau)** mit warm hinterleuchtetem Logo-Schild, weiße Möbel und Arbeitstische, beleuchtete Regale mit **gold-verschlossenen Lackflaschen**, Holzdecke. Wirkt edel, „Abendlicht", Gold-Akzente
  - Daraus diese Palette (Feinabstimmung erlaubt):
    - Off-White/Creme Hintergrund `#FAF7F2`
    - Tiefes Nacht-Schwarzblau für dunkle Sektionen (z. B. Hero/Footer) `#141A22`
    - Gold-Akzent `#C2A15F` (Linien, Icons, Überschriften-Details, Buttons-Hover; Kontrast auf Hell prüfen, für Text auf Weiß dunkleres Gold `#8E7340`)
    - Petrol/Teal aus dem Logo `#0E606B` sparsam als Zweitakzent (z. B. Buttons, Badges)
    - Nude/Rosé `#EBD3C8` für weiche Flächen (passt zu den Nagelbildern)
    - Text `#1F1F1F`
  - Stimmung: dunkle, edle Hero-Sektion mit Gold (wie das Leuchtschild) im Wechsel mit hellen, luftigen Sektionen für Leistungen und Galerie
- **Logo (liegt bei, `src/assets/bilder/logo/`):** Das echte Logo zeigt ein Frauenprofil mit fließendem Haar, „Beauty“ in Schreibschrift und „Salon & Nails“. Es wurde aus dem Instagram-Profilbild freigestellt:
  - `logo-gold-transparent.png`: Gold, transparenter Hintergrund, **für dunkle Flächen** (Hero, Footer, dunkler Header)
  - `logo-dunkelgold-transparent.png`: dunkles Gold `#8E7340`, transparent, **für helle Flächen** (heller Header beim Scrollen)
  - `logo-rund.png`: Original-Kreis Gold auf Petrol, für Favicon, Social-Share-Bild und ggf. Kontaktbereich
  - `favicon-512.png` und `apple-touch-icon.png` sind schon fertig
  - Logo nicht verzerren, nicht umfärben und nicht mit Effekten versehen. Im Header ca. 44–56 px hoch, im Hero größer (max. ca. 260 px breit, Quelle ist ~1050 px). Das Logo ist ein Pixelbild, also nicht über die Quellgröße hinaus skalieren. Ein Wechsel auf eine Vektordatei (`logo.svg`) soll später möglich sein, indem nur die Datei getauscht wird.
- Schriften: elegante Serif für Überschriften (z. B. Cormorant Garamond oder Playfair Display) + klare Sans für Text (z. B. Inter oder Jost) – **lokal einbinden** (self-hosted), NICHT über das Google-Fonts-CDN (DSGVO)
- Dezente Animationen beim Scrollen (fade/slide), respektiere `prefers-reduced-motion`
- Ausgezeichnete Bildqualität: Bilder als WebP/AVIF, responsive Größen, Lazy Loading

## 6. Technik

- **Framework:** Astro (statische Seite) + Tailwind CSS, TypeScript
- Kein unnötiges JavaScript; Lighthouse-Ziel ≥ 95 in allen Kategorien
- Alle Inhalte (Kontakt, Zeiten, Leistungen, Bewertungen) in Datendateien, nicht im Markup verstreut
- Bilder über Astros Image-Optimierung
- Barrierefreiheit: Alt-Texte, Kontraste, Tastaturbedienung, semantisches HTML

## 7. SEO (lokal)

- Title/Description pro Seite, Fokus-Keywords: „Nagelstudio Passau", „Nageldesign Passau", „Wimpernverlängerung Passau", „Maniküre Pediküre Passau"
- Schema.org JSON-LD: `NailSalon`/`BeautySalon` mit Adresse, Geo-Koordinaten (48.5732705, 13.4619606), Telefon, Öffnungszeiten, `sameAs` (Instagram, Google), AggregateRating nur wenn erlaubt
- Open-Graph-Bild, Favicon, `sitemap.xml`, `robots.txt`
- `lang="de"`

## 8. Datenschutz / Recht (Deutschland)

- Google Maps **nicht direkt einbetten**: Zwei-Klick-Lösung (Platzhalterbild + Button „Karte laden"), oder nur statisches Bild mit Link zu Google Maps
- Instagram-Feed nicht per Embed laden (Tracking) – stattdessen lokale Bilder + Link
- Keine Cookies/Tracker ohne Einwilligung; wenn Analytics, dann Cloudflare Web Analytics (cookielos)
- Impressum und Datenschutzerklärung als Seiten anlegen, mit klar markierten Platzhaltern zum Ausfüllen

## 9. Bilder – WICHTIG: hochwertig präsentieren, nicht wie Instagram-Screenshots

Die Bilder liegen in `src/assets/bilder/` und wurden schon aus Instagram-Screenshots herausgeschnitten: Die App-Oberfläche ist weg, die Bilder sind leicht nachgeschärft und farbkorrigiert. Es sind aber Handyfotos mit ca. 900 px Breite. Die Website muss sie so inszenieren, dass sie wie ein professionelles Portfolio wirken. Eine Seite, die einfach Instagram-Kacheln aneinanderreiht, ist **nicht** gewollt.

**Bestand:**
| Ordner/Datei | Inhalt | Einsatz |
|---|---|---|
| `studio/studio-leuchtschild.jpg` | hinterleuchtetes Logo-Schild an dunkler Wand, Nail-Art-Tisch | Hero oder „Willkommen"-Sektion |
| `studio/inhaberin-huong-pham.jpg` | Inhaberin im weißen Kittel bei der Arbeit, Regal mit Gold-Flaschen | Über-mich |
| `studio/studio-arbeitsplatz.jpg` | Studio-Totale mit Schild und Lackwand | Über-mich / Anfahrt |
| `studio/studio-lackregal-gold.jpg` | Gel-Flaschen mit Goldkappen im beleuchteten Regal | Detailbild, Hintergrund-Akzent |
| `farben/*.jpg` (4) | Farbkarten (Jelly, Glitzer, Grün/Blau, große Farbkarte) | Farbauswahl-Band |
| `galerie/*.jpg` (14) | Nagel-Designs; die Dateinamen beschreiben das Design | Galerie |

Zuordnung für die Galerie-Filter: French = `french-*`, `babyblau-swirl-french`, `rosa-french-blumenstrauss`, `nude-rote-spitzen`, `nude-schwarze-linien` · Blumen & Art = `stiletto-gold-blume`, `rosa-blumen-3d`, `pastell-orchideen`, `gelb-rot-design`, `rosa-kirschen` · Natur & Nude = `ombre-babyboomer`, `gruen-glanz` · Saison = `weihnachten-rot-glitzer`

**Regeln für die Präsentation:**
1. **Nie größer anzeigen als die echte Auflösung erlaubt.** Galeriebilder maximal ca. 450 CSS-px breit (das ergibt auf Retina-Displays scharfe 2x). Kein Bild als Vollbild-Hintergrund über die ganze Breite.
2. **Einheitliche Formate:** Alle Galeriebilder im selben Seitenverhältnis (4:5 Hochformat) mit `object-fit: cover`. `object-position` pro Bild in der Datendatei festlegen, damit die Nägel immer im Bild sind. Ein ruhiges, gleichmäßiges Raster wirkt hochwertiger als Masonry mit wild gemischten Höhen.
3. **Editorial-Look statt Feed:** großzügige Abstände, feine Gold-Rahmenlinie oder ein Passepartout-Effekt (heller Rand), dezente runde Ecken (4–8 px), weiche Schatten. Ein oder zwei Bilder gezielt größer als „Feature" einsetzen (z. B. `stiletto-gold-blume`, `french-weisse-blumen-gold`).
4. **Einheitliche Farbstimmung:** Die Fotos haben unterschiedliches Licht. Lege per CSS einen ganz leichten, gleichen Look darüber (z. B. `filter: saturate(1.03) contrast(1.02)` oder ein warmer Overlay mit 3–5 % Deckkraft), damit die Galerie wie aus einem Guss wirkt. Dezent bleiben, nicht künstlich.
5. **Hero ohne Riesenfoto:** Die Wirkung kommt aus dem Design (Nachtblau, Gold-Typografie, feine Linien). Dazu Bilder in Formaten, die zur Auflösung passen, z. B. 3 versetzte Hochformat-Karten oder das Leuchtschild-Bild in einem gerahmten Hochformat neben der Headline.
6. **Hover/Interaktion:** sanfter Zoom (scale 1.03) und Gold-Rahmen beim Hover, Lightbox mit dunklem Hintergrund und Pfeiltasten. Die Lightbox zeigt das Bild höchstens in Originalgröße, kein Hochskalieren.
7. **Technik:** Astro `<Image>`/`<Picture>` mit AVIF + WebP, `srcset`/`sizes`, Lazy Loading (außer im Hero), feste Breite/Höhe gegen Layout-Sprünge, verschwommener Platzhalter beim Laden.
8. **Alt-Texte** auf Deutsch und beschreibend, z. B. „Nude-Mandelnägel mit weißem French und goldenen 3D-Blumen".
9. Das Bild `studio/studio-leuchtschild` zeigt das Logo. Benutze es als Foto, **nicht** als Ersatz-Logo im Header.
10. Baue die Bilddaten so (`src/data/gallery.ts`: Datei, Alt, Kategorie, object-position, featured), dass ich später einfach bessere Originalfotos austauschen kann, ohne Code anzufassen.
11. Gib mir am Ende eine kurze Liste, welche Bilder sich am meisten lohnen, durch Originalfotos ersetzt zu werden (vor allem Hero und Über-mich).

## 10. Deployment: GitHub → Cloudflare

1. Git-Repository initialisieren, sinnvolle `.gitignore`, README mit Anleitung
2. Das GitHub-Repo existiert bereits: **https://github.com/9m526k6995-droid/Beauty-Salon-and-Nails** (öffentlich). Klonen bzw. als Remote setzen, vorhandene Dateien im Repo prüfen und nicht blind überschreiben, dann auf `main` pushen
3. Deployment auf Cloudflare mit automatischem Build bei jedem Push auf `main`:
   - Nutze den aktuell von Cloudflare empfohlenen Weg für statische Seiten (Workers mit Static Assets bzw. Pages) und lege die nötige Konfiguration an (`wrangler.jsonc` o. ä.)
   - Build-Befehl `npm run build`, Output `dist`
4. Schritt-für-Schritt-Anleitung für mich: Cloudflare-Dashboard → GitHub verbinden → Repo wählen → Custom Domain verbinden
5. Security-Header (z. B. `_headers`-Datei) und Weiterleitung www → ohne www

## 11. Arbeitsweise

- Stelle mir zuerst kurz deinen Plan vor (Struktur, Farbwahl, Komponenten), dann bau.
- Frag nach, wenn Infos fehlen – erfinde keine Preise, Namen, Zertifikate oder Bewertungen.
- Teste am Ende Build, Mobil-Ansicht und Links; gib mir eine Liste mit allem, was ich noch ausfüllen muss (Platzhalter).
