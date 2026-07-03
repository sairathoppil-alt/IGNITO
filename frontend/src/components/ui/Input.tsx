import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = 'text', startIcon, endIcon, ...props }, ref) => (
    <div className="relative w-full">
      {startIcon ? (
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[var(--color-muted)]">
          {startIcon}
        </span>
      ) : null}
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-2xl border border-[var(--color-input-border)] bg-[var(--color-input)] px-4 py-2 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
          startIcon && 'pl-11',
          endIcon && 'pr-11',
          error && 'border-[var(--color-destructive)] focus-visible:ring-[var(--color-destructive)]',
          className,
        )}
        ref={ref}
        {...props}
      />
      {endIcon ? (
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-muted)]">
          {endIcon}
        </span>
      ) : null}
    </div>
  ),
);

Input.displayName = 'Input';
