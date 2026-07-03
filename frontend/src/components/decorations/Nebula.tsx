import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface NebulaProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionStart' | 'onTransitionEnd'> {
  from?: string;
  to?: string;
}

export function Nebula({ from = 'rgba(124,58,237,0.24)', to = 'rgba(236,72,153,0.16)', className, ...props }: NebulaProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('absolute h-60 w-60 rounded-full blur-[140px]', className)}
      style={{ background: `radial-gradient(circle, ${from} 0%, ${to} 45%, transparent 70%)` }}
      animate={prefersReducedMotion ? undefined : { x: [0, 24, 0], y: [0, -14, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      {...props}
    />
  );
}
