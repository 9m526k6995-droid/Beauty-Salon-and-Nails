/**
 * Galerie „Unsere Arbeiten“.
 *
 * BILDER AUSTAUSCHEN: Neue Datei nach `src/assets/bilder/galerie/` legen und hier
 * bei `file` den Dateinamen eintragen. Kein weiterer Code nötig.
 *
 * - alt:       Beschreibung für Screenreader & Google (Deutsch, konkret)
 * - category:  french | art | natur | saison  (Filter-Chips)
 * - position:  CSS object-position, damit die Nägel im 4:5-Ausschnitt bleiben
 *              (z. B. 'center', '50% 30%', 'left center')
 * - featured:  true = wird größer als „Signature“-Bild gezeigt (sparsam: 1–2 Bilder)
 */

export type GalleryCategory = 'french' | 'art' | 'natur' | 'saison';

export interface GalleryItem {
  file: string;
  alt: string;
  category: GalleryCategory;
  position?: string;
  featured?: boolean;
}

export const galleryCategories: { id: GalleryCategory | 'alle'; label: string }[] = [
  { id: 'alle', label: 'Alle' },
  { id: 'french', label: 'French' },
  { id: 'art', label: 'Blumen & Art' },
  { id: 'natur', label: 'Natur & Nude' },
  { id: 'saison', label: 'Saison' },
];

export const gallery: GalleryItem[] = [
  {
    file: 'stiletto-gold-blume.jpg',
    alt: 'Stiletto-Nägel in Nude mit goldenen Chrome-Linien, schwarzem Akzent und zarter 3D-Blüte',
    category: 'art',
    position: '42% 50%',
    featured: true,
  },
  {
    file: 'french-weisse-blumen-gold.jpg',
    alt: 'Nude-Mandelnägel mit weißem French, goldenen Linien und weißen 3D-Blumen',
    category: 'french',
    position: '62% 50%',
    featured: true,
  },
  {
    file: 'babyblau-swirl-french.jpg',
    alt: 'Mandelnägel in Nude mit babyblauem Swirl-French',
    category: 'french',
    position: '50% 55%',
  },
  {
    file: 'french-blumen-karo.jpg',
    alt: 'Eckige Nägel mit weißem French, gemalter Blüte und dunkelrotem Kroko-Akzentnagel',
    category: 'french',
    position: '55% 45%',
  },
  {
    file: 'rosa-blumen-3d.jpg',
    alt: 'Zartrosa Mandelnägel mit weißen und rosa 3D-Blüten und Goldakzenten',
    category: 'art',
    position: '50% 40%',
  },
  {
    file: 'ombre-babyboomer.jpg',
    alt: 'Ombré-Nägel im Babyboomer-Look von Rosé zu Weiß mit feinen Blütenmotiven',
    category: 'natur',
    position: '50% 60%',
  },
  {
    file: 'pastell-orchideen.jpg',
    alt: 'Nägel in Pastell-Gelb und Rosé mit Blütenmotiven vor weißen Orchideen',
    category: 'art',
    position: '40% 60%',
  },
  {
    file: 'rosa-french-blumenstrauss.jpg',
    alt: 'Nude-Nägel mit feinem rosa French, gehalten an einem kleinen Blumenstrauß',
    category: 'french',
    position: '50% 55%',
  },
  {
    file: 'nude-schwarze-linien.jpg',
    alt: 'Nude-Mandelnägel mit grafischen schwarzen und weißen Linien',
    category: 'french',
    position: '45% 50%',
  },
  {
    file: 'gruen-glanz.jpg',
    alt: 'Glänzende Nägel in dunklem Salbeigrün mit goldenem Akzent',
    category: 'natur',
    position: '50% 30%',
  },
  {
    file: 'nude-rote-spitzen.jpg',
    alt: 'Natürliche Nude-Nägel mit feinen dunkelroten French-Spitzen',
    category: 'french',
    position: '55% 50%',
  },
  {
    file: 'gelb-rot-design.jpg',
    alt: 'Mandelnägel mit verspieltem Design in Gelb und Rot mit Punkten und Herzen',
    category: 'art',
    position: '50% 35%',
  },
  {
    file: 'rosa-kirschen.jpg',
    alt: 'Rosa Nägel mit kleinen gemalten Kirschen als Akzent',
    category: 'art',
    position: '60% 55%',
  },
  {
    file: 'weihnachten-rot-glitzer.jpg',
    alt: 'Weihnachtliche Nägel mit rotem Glitzer, Herzen und Rentier-Motiv auf Nude',
    category: 'saison',
    position: '50% 50%',
  },
];
