export const colors = {
  light: {
    background: '#fcfcfe',
    foreground: '#0f172a',
    muted: '#64748b',
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    accent: '#a855f7',
    magic: '#ec4899',
    card: 'rgba(255, 255, 255, 0.82)',
    glass: 'rgba(255, 255, 255, 0.65)',
    footer: '#f8f7ff',
  },
  dark: {
    background: '#050816',
    foreground: '#f8fafc',
    muted: '#94a3b8',
    primary: '#8b5cf6',
    primaryHover: '#a78bfa',
    accent: '#a855f7',
    magic: '#ec4899',
    card: 'rgba(14, 19, 38, 0.76)',
    glass: 'rgba(17, 24, 39, 0.55)',
    footer: '#080c18',
  },
} as const;

export const typography = {
  fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
  heading: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
  body: "'Sora', ui-sans-serif, system-ui, sans-serif",
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
} as const;

export const spacing = {
  section: '5rem',
  sectionLg: '6rem',
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
} as const;

export const radius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(15, 23, 42, 0.05)',
  md: '0 6px 18px rgba(15, 23, 42, 0.08)',
  lg: '0 10px 32px rgba(15, 23, 42, 0.1)',
  xl: '0 20px 60px rgba(15, 23, 42, 0.14)',
  glow: '0 0 24px rgba(124, 58, 237, 0.16)',
  glowDark: '0 0 28px rgba(139, 92, 246, 0.2)',
  card: '0 8px 24px rgba(15, 23, 42, 0.06)',
  cardHover: '0 16px 45px rgba(124, 58, 237, 0.16)',
} as const;

export const transitions = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '800ms',
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

export const breakpoints = {
  mobile: 390,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const;

export const zIndex = {
  dropdown: 50,
  sticky: 100,
  navbar: 200,
  overlay: 300,
  modal: 400,
  tooltip: 500,
} as const;
