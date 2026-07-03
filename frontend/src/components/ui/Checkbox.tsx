import { forwardRef } from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...props }, ref) => (
  <label className="flex items-center gap-3">
    <span className="relative flex h-5 w-5 items-center justify-center">
      <input type="checkbox" ref={ref} className="peer sr-only" {...props} />
      <span className="flex h-5 w-5 items-center justify-center rounded-md border border-[var(--color-input-border)] bg-[var(--color-input)] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-ring)] peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)]">
        <Check className="hidden h-3.5 w-3.5 text-white peer-checked:block" />
      </span>
    </span>
    {label ? <span className="text-sm text-[var(--color-foreground)]">{label}</span> : null}
  </label>
));

Checkbox.displayName = 'Checkbox';
