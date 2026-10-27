export const navItems = [
  { label: 'Hem', href: '/' },
  {
    label: 'Tjänster',
    href: '/#tjanster',
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
  { label: 'Så går det till', href: '/#sa-gar-det-till' },
  { label: 'Om oss', href: '/#om-oss' },
  { label: 'Kontakt', href: '/#kontakt', type: 'allman' },
];