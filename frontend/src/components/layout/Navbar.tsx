import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { NavLinks } from '@/components/layout/NavLinks';
import { MobileDrawer } from '@/components/layout/MobileDrawer';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/constants';
import { useScrollPosition } from '@/hooks';
import { cn } from '@/utils/cn';

export function Navbar() {
  const isScrolled = useScrollPosition();
  const reduceMotion = useReducedMotion();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const nextProgress = Math.min(1, currentY / maxScroll);

      setScrollProgress(nextProgress);
      setIsVisible(currentY <= 72 || currentY < lastScrollY.current - 6);
      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isGlass = isScrolled || scrollProgress > 0.02;

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : -104,
          backgroundColor: isGlass ? 'var(--color-navbar)' : 'transparent',
          backdropFilter: isGlass ? 'blur(18px)' : 'blur(0px)',
          borderBottomColor: isGlass ? 'var(--color-glass-border)' : 'transparent',
          boxShadow: isGlass
            ? '0 16px 48px rgba(15, 23, 42, 0.08)'
            : '0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={cn('fixed inset-x-0 top-0 z-[var(--z-navbar,200)] border-b')}
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/35 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-magic)]" style={{ transform: `scaleX(${scrollProgress})` }} />

        <Container>
          <div className="relative flex h-16 items-center justify-between gap-3 lg:h-[76px]">
            <div className="flex min-w-[120px] items-center lg:min-w-[180px]">
              <Logo />
            </div>

            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <NavLinks />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle className="hidden sm:flex" />

              <Button
                asChild
                size="sm"
                variant="gradient"
                className="hidden sm:inline-flex"
                rightIcon={
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                }
              >
                <Link to={SITE_CONFIG.registerUrl}>Register Now</Link>
              </Button>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)]/80 text-[var(--color-foreground)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
