export const navItems = [
  { label: 'Hem', href: '#home' },
  {
    label: 'Tjänster',
    href: '#services',
    dropdown: [
      { label: 'Dödsbotömning', href: '/dodsbotomning' },
      { label: 'Städning', href: '/stadning' },
      {
        label: 'Gräsklippning och röjning',
        href: '/tradgardsservice',
      },
      {
        label: 'Övrig fastighetsservice',
        href: '/fastighetsservice',
      },
    ],
  },
  { label: 'Så går det till', href: '#how-it-works' },
  { label: 'Om oss', href: '#about-us' },
  { label: 'Kontakt', href: '#contact', type: 'allman' },
];
