/**
 * Leistungen & Preise.
 *
 * PREISE EINTRAGEN: Bei einer Leistung einfach `price: 35` setzen.
 *   → Auf der Website erscheint dann automatisch „ab 35 €“.
 *   → Ohne `price` steht dort „auf Anfrage“.
 * Optional: `duration: 'ca. 90 Min.'` – wird dann klein darunter angezeigt.
 */

export interface Service {
  name: string;
  description?: string;
  /** Preis in Euro (Startpreis). Leer lassen = „auf Anfrage“. */
  price?: number;
  duration?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  intro: string;
  icon: 'hand' | 'foot' | 'eye';
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'naegel',
    title: 'Nägel',
    intro: 'Von natürlich-elegant bis aufwendige Nail Art – jede Farbe, jedes Design.',
    icon: 'hand',
    services: [
      { name: 'Neumodellage Gel', description: 'Neues Set in Deiner Wunschform und Wunschlänge' },
      { name: 'Auffüllen', description: 'Nachwachsenden Bereich auffüllen, Form auffrischen' },
      { name: 'Shellac / Gellack', description: 'Glänzende Farbe auf dem Naturnagel' },
      { name: 'Nageldesign & Nail Art', description: 'Blumen, 3D-Motive, Steinchen, Linien – auch nach Deinem Foto' },
      { name: 'French', description: 'Klassisch, farbig, als Swirl oder mit Akzenten' },
      { name: 'Chrome & Trends', description: 'Chrome, Cat-Eye, Ombré/Babyboomer und Saison-Looks' },
      { name: 'Maniküre', description: 'Pflege für Hände, Nagelhaut und Form' },
    ],
  },
  {
    id: 'fuesse',
    title: 'Füße',
    intro: 'Gepflegte Füße und Farbe, die lange hält.',
    icon: 'foot',
    services: [
      { name: 'Pediküre ohne Shellac', description: 'Fußpflege, Nagelhaut und Form' },
      { name: 'Pediküre mit Shellac', description: 'Fußpflege plus langanhaltende Farbe' },
    ],
  },
  {
    id: 'wimpern',
    title: 'Wimpern',
    intro: 'Ausdrucksstarker Blick, natürlich oder mit mehr Volumen.',
    icon: 'eye',
    services: [
      { name: 'Wimpernverlängerung Neuset', description: 'Komplettes Set, abgestimmt auf Deine Augenform' },
      { name: 'Wimpern Auffüllen', description: 'Auffrischen Deines bestehenden Sets' },
    ],
  },
];

export function formatPrice(price?: number): string {
  if (price === undefined || price === null || Number.isNaN(price)) return 'auf Anfrage';
  const formatted = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
  return `ab ${formatted} €`;
}
