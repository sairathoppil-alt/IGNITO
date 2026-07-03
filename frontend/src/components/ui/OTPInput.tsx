import { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

export interface OTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  count?: number;
}

export const OTPInput = forwardRef<HTMLInputElement, OTPInputProps>(({ className, count = 6, ...props }, ref) => {
  const id = useId();

  return (
    <div className="flex gap-2" role="group" aria-label="One-time password">
      {Array.from({ length: count }).map((_, index) => (
        <input
          key={`${id}-${index}`}
          ref={index === 0 ? ref : null}
          maxLength={1}
          className={cn(
            'h-12 w-11 rounded-2xl border border-[var(--color-input-border)] bg-[var(--color-input)] text-center text-lg text-[var(--color-foreground)] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]',
            className,
          )}
          {...props}
        />
      ))}
    </div>
  );
});

OTPInput.displayName = 'OTPInput';
