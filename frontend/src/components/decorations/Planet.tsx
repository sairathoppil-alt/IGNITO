import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface PlanetProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionStart' | 'onTransitionEnd'> {
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-16 w-16',
  lg: 'h-24 w-24',
};

export function Planet({ size = 'md', glow = true, className, ...props }: PlanetProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('relative rounded-full bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-magic)]', sizeMap[size], glow && 'shadow-[0_0_45px_rgba(124,58,237,0.24)]', className)}
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      {...props}
    >
      <div className="absolute inset-2 rounded-full border border-white/20" />
    </motion.div>
  );
}
