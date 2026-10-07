/**
 * Zentrale Studio-Daten.
 * Alles, was sich ändern kann (Telefon, Zeiten, Bewertung …), steht NUR hier.
 */

const phoneRaw = '+491606397158';

export const site = {
  name: 'Beauty Salon & Nails',
  owner: 'Huong Pham',
  city: 'Passau',
  claim: 'Nagelstudio & Wimpern in der Passauer Innenstadt',

  address: {
    street: 'Theresienstraße 32',
    zip: '94032',
    city: 'Passau',
    region: 'Bayern',
    country: 'DE',
    /** Kurzer, ehrlicher Hinweis zur Lage – keine erfundenen Park- oder Busangaben */
    hint: 'Mitten in der Passauer Innenstadt',
  },

  geo: { lat: 48.5732705, lng: 13.4619606 },

  phone: {
    display: '+49 160 6397158',
    href: `tel:${phoneRaw}`,
    raw: phoneRaw,
  },

  whatsapp: {
    href: 'https://wa.me/491606397158?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.',
  },

  instagram: {
    handle: '@beauty_salon_nail_passau',
    href: 'https://www.instagram.com/beauty_salon_nail_passau/',
  },

  googleMaps: {
    href: 'https://maps.app.goo.gl/5yvkA2oNBNos3DEX6',
    /** Wird erst nach Klick auf „Karte laden“ geladen (Zwei-Klick-Lösung, DSGVO) */
    embed:
      'https://www.google.com/maps?q=Beauty+Salon+%26+Nail,+Theresienstra%C3%9Fe+32,+94032+Passau&output=embed',
  },

  /**
   * Google-Bewertung – einfach die Zahlen aktualisieren.
   * showInSchema: Bewertung zusätzlich als strukturierte Daten (JSON-LD) ausgeben.
   * Standard „false“, weil Google eigene Bewertungen auf der eigenen Seite nicht als
   * Sterne-Snippet anzeigt und die Werte sonst bei jeder Änderung gepflegt werden müssen.
   */
  rating: {
    value: 4.4,
    count: 27,
    showInSchema: false,
  },

  /**
   * Öffnungszeiten. day: 1 = Montag … 7 = Sonntag.
   * open/close im Format HH:MM, closed: true für Ruhetage.
   */
  openingHours: [
    { day: 1, label: 'Montag', open: '09:00', close: '19:00' },
    { day: 2, label: 'Dienstag', open: '09:00', close: '19:00' },
    { day: 3, label: 'Mittwoch', open: '09:00', close: '19:00' },
    { day: 4, label: 'Donnerstag', open: '09:00', close: '19:00' },
    { day: 5, label: 'Freitag', open: '09:00', close: '19:00' },
    { day: 6, label: 'Samstag', open: '09:00', close: '19:00' },
    { day: 7, label: 'Sonntag', closed: true },
  ] as OpeningDay[],

  /** Kurzform für Hero/Footer */
  openingHoursShort: 'Mo–Sa 09:00–19:00 Uhr',
} as const;

export type OpeningDay =
  | { day: number; label: string; open: string; close: string; closed?: false }
  | { day: number; label: string; closed: true; open?: undefined; close?: undefined };
