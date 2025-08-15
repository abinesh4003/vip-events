export const NAV_LINKS = [
  {
    id: 1,
    path: '/',
    label: 'Home',
    subLinks: null,
  },
  {
    id: 2,
    path: '/about',
    label: 'About Us',
    subLinks: null,
  },
  {
    id: 3,
    path: '/services',
    label: 'Services',
    subLinks: [
      { path: '/services/stage-decoration', label: 'Stage Decoration' },
      { path: '/services/catering', label: 'Catering Services' },
      { path: '/services/entertainment', label: 'Entertainment' },
      { path: '/services/photography', label: 'Photography & Videography' },
    ],
  },
  {
    id: 4,
    path: '/gallery',
    label: 'Gallery',
    subLinks: null,
  },
  {
    id: 5,
    path: '/contact',
    label: 'Contact',
    subLinks: null,
  },
];

export const MOBILE_NAV_LINKS = [
  ...NAV_LINKS,
  {
    id: 6,
    path: 'tel:8778304145',
    label: 'Call Now',
    icon: 'Phone',
  },
];