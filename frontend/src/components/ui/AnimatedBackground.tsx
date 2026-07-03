import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AnimatedBackgroundProps {
  variant?: 'stars' | 'gradient' | 'nebula' | 'cosmic';
  className?: string;
}

const stars = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  size: index % 3 === 0 ? 'h-1.5 w-1.5' : 'h-1 w-1',
  delay: index * 0.15,
}));

const particlePoints = Array.from({ length: 12 }, (_, index) => ({
  left: `${(index * 23) % 100}%`,
  top: `${(index * 19) % 100}%`,
  delay: index * 0.2,
}));

export function AnimatedBackground({ variant = 'cosmic', className }: AnimatedBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === 'stars') {
    return (
      <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
        {stars.map((star, index) => (
          <motion.div
            key={`${star.left}-${index}`}
            className={cn('absolute rounded-full bg-white/70', star.size)}
            style={{ top: star.top, left: star.left }}
            animate={prefersReducedMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.7, 1.2, 0.7] }}
            transition={{ duration: 3 + index * 0.1, repeat: Infinity, ease: 'easeInOut', delay: star.delay }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'nebula') {
    return (
      <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
        <motion.div
          className="absolute -right-20 top-0 h-[460px] w-[460px] rounded-full bg-[var(--color-primary)]/20 blur-[120px]"
          animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.04, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-accent)]/15 blur-[100px]"
          animate={prefersReducedMotion ? undefined : { rotate: -360, scale: [1, 1.06, 1] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_100%)] opacity-20" />
      <div className="absolute right-[-12%] top-[-10%] h-72 w-72 rounded-full border border-[var(--color-card-border)]/60" />
      <div className="absolute bottom-[-8%] left-[-8%] h-64 w-64 rounded-full border border-[var(--color-card-border)]/60" />
      {particlePoints.map((particle, index) => (
        <motion.div
          key={`${particle.left}-${index}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/70"
          style={{ top: particle.top, left: particle.left }}
          animate={prefersReducedMotion ? undefined : { opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
          transition={{ duration: 4 + index * 0.1, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
        />
      ))}
      {stars.slice(0, 10).map((star, index) => (
        <motion.div
          key={`cosmic-${star.left}-${index}`}
          className="absolute h-1 w-1 rounded-full bg-white/70"
          style={{ top: star.top, left: star.left }}
          animate={prefersReducedMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
        />
      ))}
    </div>
  );
}
