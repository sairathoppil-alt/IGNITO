import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, error, children, ...props }, ref) => (
  <div className="relative w-full">
    <select
      className={cn(
        'flex h-11 w-full appearance-none rounded-2xl border border-[var(--color-input-border)] bg-[var(--color-input)] px-4 py-2 pr-10 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-[var(--color-destructive)] focus-visible:ring-[var(--color-destructive)]',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]" />
  </div>
));

Select.displayName = 'Select';
