import { motion, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/constants';
import { cn } from '@/utils/cn';

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
  vertical?: boolean;
}

export function NavLinks({
  className,
  onLinkClick,
  vertical = false,
}: NavLinksProps) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        vertical ? 'flex flex-col gap-1.5' : 'hidden items-center gap-1.5 lg:flex',
        className,
      )}
      aria-label="Main navigation"
    >
      {NAV_LINKS.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            to={link.href}
            onClick={onLinkClick}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'group relative overflow-hidden rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]',
              vertical && 'px-4 py-3 text-base',
              active
                ? 'text-[var(--color-foreground)]'
                : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
            )}
          >
            <motion.span
              initial={false}
              animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.96 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
              className="absolute inset-0 rounded-full bg-[var(--color-secondary)]"
            />
            <span className="relative z-10">{link.label}</span>
            <motion.span
              initial={false}
              animate={{ width: active ? '100%' : 0, opacity: active ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
              className="absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-magic)] shadow-[0_0_12px_rgba(124,58,237,0.3)]"
            />
          </Link>
        );
      })}
    </nav>
  );
}
