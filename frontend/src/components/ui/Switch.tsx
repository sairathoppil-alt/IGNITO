import { forwardRef } from 'react';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, ...props }, ref) => (
  <label className="flex items-center gap-3">
    <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-[var(--color-card-border)] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-ring)]">
      <input type="checkbox" ref={ref} className="peer sr-only" {...props} />
      <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:left-6 peer-checked:bg-[var(--color-primary)]" />
    </span>
    {label ? <span className="text-sm text-[var(--color-foreground)]">{label}</span> : null}
  </label>
));

Switch.displayName = 'Switch';
