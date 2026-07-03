import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  bordered?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = false, glow = false, bordered = true, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass-card rounded-[1.5rem] p-6',
        bordered && 'border border-[var(--color-glass-border)]',
        glow && 'glow-purple',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

GlassCard.displayName = 'GlassCard';
