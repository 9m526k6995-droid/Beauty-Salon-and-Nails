/**
 * Kundenstimmen für den Bereich „Bewertungen“.
 *
 * WICHTIG: Nur echte Bewertungen eintragen (z. B. aus Google), gekürzt und nur
 * mit Erlaubnis der Verfasserin. Nichts erfinden.
 *
 * Solange die Liste leer ist, zeigt die Website automatisch nur die
 * Google-Sternebewertung (aus `src/config/site.ts`), die Stärken unten und den
 * Link „Alle Bewertungen auf Google“.
 *
 * Beispiel-Format (Kommentarzeichen entfernen und echte Daten einsetzen):
 *
 *   { text: 'Gekürzter Originaltext der Bewertung …', author: 'Vorname N.', stars: 5, source: 'Google' },
 */

export interface Review {
  text: string;
  author: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source?: string;
}

export const reviews: Review[] = [
  // 3–4 echte, positive Bewertungen hier eintragen
];

/**
 * Was Kundinnen in ihren Bewertungen immer wieder hervorheben
 * (zusammengefasst, keine wörtlichen Zitate).
 */
export const reviewHighlights: string[] = [
  'Ruhige, herzliche Atmosphäre – mit Massagesesseln',
  'Wunsch-Designs nach Foto, genau umgesetzt',
  'Sauber, hygienisch, moderne Geräte',
  'Nägel und Wimpern halten lange',
  'Oft auch kurzfristig Termine frei',
  'Faire Preise und ehrliche Beratung zu Trends',
];
