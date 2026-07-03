import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface MeteorProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionStart' | 'onTransitionEnd'> {
  size?: number;
}

export function Meteor({ size = 2, className, ...props }: MeteorProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('absolute rounded-full bg-white/80 blur-[0.5px]', className)}
      style={{ width: size, height: size }}
      animate={prefersReducedMotion ? undefined : { x: [0, 80, 120], y: [0, 60, 120], opacity: [0.2, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      {...props}
    />
  );
}
