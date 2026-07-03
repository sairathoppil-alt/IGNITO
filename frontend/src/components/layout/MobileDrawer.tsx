import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { drawerVariants, overlayVariants } from '@/animations';
import { Logo } from '@/components/common/Logo';
import { NavLinks } from '@/components/layout/NavLinks';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SITE_CONFIG } from '@/constants';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX ?? null;

    if (start !== null && end !== null && start - end > 70) {
      onClose();
    }

    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[var(--z-overlay,300)] bg-[var(--color-overlay)] backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed right-0 top-0 z-[var(--z-modal,400)] flex h-full w-[min(320px,85vw)] flex-col border-l border-[var(--color-glass-border)] bg-[var(--color-glass)] shadow-[0_24px_80px_rgba(2,6,23,0.4)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] p-4">
              <Logo showText={false} />
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-card-border)] text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-4 rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)]/70 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Observatory navigation
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Explore the event universe with effortless motion.
                </p>
              </div>
              <NavLinks vertical onLinkClick={onClose} />
            </div>

            <div className="border-t border-[var(--color-card-border)] p-4">
              <Button asChild className="w-full" size="lg" variant="gradient">
                <Link to={SITE_CONFIG.registerUrl} onClick={onClose}>
                  Register Now
                </Link>
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
