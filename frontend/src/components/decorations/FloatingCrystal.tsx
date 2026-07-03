import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface FloatingCrystalProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onTransitionStart' | 'onTransitionEnd'> {
  size?: string;
}

export function FloatingCrystal({ size = '1.25rem', className, ...props }: FloatingCrystalProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('absolute rounded-[0.2rem] border border-white/20 bg-white/10 backdrop-blur-md', className)}
      style={{ width: size, height: size, transform: 'rotate(45deg)' }}
      animate={prefersReducedMotion ? undefined : { y: [0, -10, 0], rotate: [45, 60, 45] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      {...props}
    />
  );
}
