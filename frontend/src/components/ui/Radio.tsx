import { forwardRef } from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ label, ...props }, ref) => (
  <label className="flex items-center gap-3">
    <span className="relative flex h-5 w-5 items-center justify-center">
      <input type="radio" ref={ref} className="peer sr-only" {...props} />
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-input-border)] bg-[var(--color-input)] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-ring)] peer-checked:border-[var(--color-primary)]">
        <span className="hidden h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] peer-checked:block" />
      </span>
    </span>
    {label ? <span className="text-sm text-[var(--color-foreground)]">{label}</span> : null}
  </label>
));

Radio.displayName = 'Radio';
