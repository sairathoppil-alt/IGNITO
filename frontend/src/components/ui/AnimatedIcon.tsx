import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AnimatedIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionStart' | 'onTransitionEnd'> {
  icon: React.ReactNode;
  hoverGlow?: boolean;
}

export function AnimatedIcon({ icon, hoverGlow = true, className, ...props }: AnimatedIconProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] text-[var(--color-primary)] shadow-[var(--shadow-card)]', hoverGlow && 'hover:shadow-[var(--shadow-glow)]', className)}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.06, rotate: 6, y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      {...props}
    >
      {icon}
    </motion.div>
  );
}
