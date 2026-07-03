import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GlowBlobProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionStart' | 'onTransitionEnd'> {
  color?: string;
}

export function GlowBlob({ color = 'rgba(124,58,237,0.25)', className, ...props }: GlowBlobProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('absolute h-28 w-28 rounded-full blur-3xl', className)}
      style={{ backgroundColor: color }}
      animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      {...props}
    />
  );
}
