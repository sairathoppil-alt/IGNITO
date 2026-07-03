import { cn } from '@/utils/cn';

interface GridPatternProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart'> {
  size?: number;
}

export function GridPattern({ size = 24, className, ...props }: GridPatternProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 opacity-20', className)}
      style={{ backgroundSize: `${size}px ${size}px`, backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)' }}
      {...props}
    />
  );
}
