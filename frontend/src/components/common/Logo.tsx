import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/constants';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      to="/"
      className={cn('group flex items-center gap-3', className)}
      aria-label={`${SITE_CONFIG.name} Home`}
    >
      <motion.div
        initial={false}
        animate={reduceMotion ? undefined : { rotate: [0, 8, -4, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-glass-border)] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),rgba(248,247,255,0.4))] text-[var(--color-primary)] shadow-[var(--shadow-glow)] dark:bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.3),rgba(17,24,39,0.2))]"
      >
        <div className="absolute inset-0 rounded-2xl border border-[var(--color-primary)]/20" />
        <Sparkles className="relative h-4.5 w-4.5" />
      </motion.div>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.82rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
            {SITE_CONFIG.name.split(' ')[0]}
          </span>
          <span className="mt-1 text-base font-semibold tracking-[0.1em] text-[var(--color-foreground)]">
            {SITE_CONFIG.year}
          </span>
        </span>
      )}
    </Link>
  );
}
