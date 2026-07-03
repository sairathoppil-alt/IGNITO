export type Theme = 'light' | 'dark' | 'system';

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  year: number;
  registerUrl: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
