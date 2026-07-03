import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface MagicSparklesProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart'> {
  count?: number;
}

export function MagicSparkles({ count = 8, className, ...props }: MagicSparklesProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} {...props}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-[var(--color-magic)]"
          style={{ top: `${10 + (index % 6) * 12}%`, left: `${10 + (index * 9) % 80}%` }}
          animate={prefersReducedMotion ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.6 + index * 0.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
        />
      ))}
    </div>
  );
}
