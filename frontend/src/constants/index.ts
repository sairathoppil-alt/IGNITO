import type { FooterLinkGroup, NavLink, SiteConfig, SocialLink } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'IGNITO 2026',
  tagline: "Kerala's Biggest Techfest",
  year: 2026,
  registerUrl: '#register',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Competitions', href: '/competitions' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Events', href: '/events' },
      { label: 'Competitions', href: '/competitions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Timeline', href: '/#timeline' },
      { label: 'Sponsors', href: '/#sponsors' },
      { label: 'About', href: '/#about' },
      { label: 'Register', href: '#register' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
];

export const THEME_STORAGE_KEY = 'ignito-theme';

export const ROUTES = {
  home: '/',
  events: '/events',
  competitions: '/competitions',
  contact: '/contact',
} as const;
