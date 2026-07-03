import { cn } from '@/utils/cn';

interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  asButton?: boolean;
  variant?: 'default' | 'outline' | 'glass';
}

export function Chip({
  className,
  active = false,
  asButton = true,
  variant = 'default',
  children,
  ...props
}: ChipProps) {
  const classes = cn(
    'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
    active
      ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[var(--shadow-glow)]'
      : variant === 'glass'
        ? 'glass text-[var(--color-foreground)]'
        : variant === 'outline'
          ? 'border border-[var(--color-card-border)] bg-transparent text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
          : 'border border-[var(--color-card-border)] bg-[var(--color-card)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]',
    className,
  );

  if (asButton) {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }

  return (
    <span className={classes} {...(props as React.HTMLAttributes<HTMLSpanElement>)}>
      {children}
    </span>
  );
}
