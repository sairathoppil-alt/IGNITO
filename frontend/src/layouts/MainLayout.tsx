import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { useLenis } from '@/hooks';

export function MainLayout() {
  useLenis();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setScrollProgress(Math.min(1, window.scrollY / maxScroll));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <motion.div
        initial={false}
        animate={{ opacity: scrollProgress > 0 ? 1 : 0, scaleX: scrollProgress }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}
        className="fixed inset-x-0 top-0 z-[var(--z-navbar,200)] h-[2px] origin-left bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-magic)] shadow-[0_0_16px_rgba(124,58,237,0.3)]"
      />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-[76px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12, scale: 0.995, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, scale: 0.995, filter: 'blur(8px)' }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
