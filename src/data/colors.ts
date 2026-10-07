/**
 * Farbauswahl-Band: Bilder aus `src/assets/bilder/farben/`.
 */
export interface ColorCard {
  file: string;
  alt: string;
  label: string;
  position?: string;
}

export const colorCards: ColorCard[] = [
  {
    file: 'farbauswahl-farbkarte.jpg',
    alt: 'Große Farbkarte mit Gel-Farben in Grün-, Blau- und Erdtönen',
    label: 'Erdtöne',
    position: '60% 50%',
  },
  {
    file: 'farbauswahl-glitzer.jpg',
    alt: 'Farbkarte mit Glitzer-Gels in Silber, Rosa, Rot und Blau',
    label: 'Glitzer',
    position: '50% 45%',
  },
  {
    file: 'farbauswahl-jelly.jpg',
    alt: 'Farbkarte mit transparenten Jelly-Farben von Rot über Orange bis Oliv',
    label: 'Jelly',
    position: '50% 40%',
  },
  {
    file: 'farbauswahl-gruen-blau.jpg',
    alt: 'Farbkarte mit Gel-Farben in Grün-, Blau- und Nudetönen',
    label: 'Grün & Blau',
    position: '50% 55%',
  },
];
