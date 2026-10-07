/**
 * Texte der Website, die sich gelegentlich ändern könnten.
 */

export const navigation = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#ueber-mich', label: 'Über mich' },
  { href: '/#bewertungen', label: 'Bewertungen' },
  { href: '/#anfahrt', label: 'Anfahrt' },
];

export const hero = {
  eyebrow: 'Nagelstudio · Wimpern · Passau',
  title: 'Dein Nagelstudio in der Passauer Innenstadt',
  text: 'Lehn Dich zurück, entspann Dich im Massagesessel – und geh mit Nägeln nach Hause, die genau so aussehen, wie Du sie Dir vorgestellt hast.',
};

export const benefits: { icon: 'shield' | 'sparkle' | 'leaf' | 'palette'; title: string; text: string }[] = [
  {
    icon: 'shield',
    title: 'Hygiene, auf die Du Dich verlassen kannst',
    text: 'Saubere Arbeitsplätze, Handschuhe, moderne Geräte – sorgfältig bei jedem Termin.',
  },
  {
    icon: 'sparkle',
    title: 'Präzise nach Deinem Wunschfoto',
    text: 'Zeig mir Dein Lieblingsdesign. Ich schaue genau hin und setze es Detail für Detail um.',
  },
  {
    icon: 'leaf',
    title: 'Entspannte Atmosphäre',
    text: 'Ruhig, herzlich, persönlich – und Du sitzt bequem im Massagesessel.',
  },
  {
    icon: 'palette',
    title: 'Riesige Farbauswahl',
    text: 'Hunderte Farben von Nude bis Glitzer, dazu Cat-Eye, Jelly und Chrome.',
  },
];

export const about = {
  greeting: 'Hallo ihr Lieben!',
  paragraphs: [
    'Ich heiße Huong Pham und liebe es, eure Nägel zu gestalten. In meinem Studio in der Theresienstraße arbeite ich selbst für Dich am Tisch – mit viel Ruhe, Sorgfalt und einem Auge fürs Detail.',
    'Bring gern ein Foto Deines Wunsch-Designs mit oder lass Dich von den neuesten Trends inspirieren. Gemeinsam finden wir Form, Farbe und Look, der zu Dir passt – ob ganz natürlich oder mit aufwendiger Nail Art.',
    'Mir ist wichtig, dass Du Dich bei mir wohlfühlst, dass alles sauber und hygienisch ist und dass Deine Nägel lange schön bleiben.',
  ],
  signature: 'Huong Pham',
};
