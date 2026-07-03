import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.02em] transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]',
        primary: 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]',
        outline: 'border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)]',
        glass: 'glass text-[var(--color-foreground)]',
        gradient: 'bg-gradient-to-r from-[var(--color-accent-gradient-from)] to-[var(--color-accent-gradient-to)] text-white',
      },
      tone: {
        default: '',
        accent: 'bg-[var(--color-accent)]/15 text-[var(--color-accent)]',
        magic: 'bg-[var(--color-magic)]/15 text-[var(--color-magic)]',
        success: 'bg-[var(--color-success)]/15 text-[var(--color-success)]',
        danger: 'bg-[var(--color-destructive)]/15 text-[var(--color-destructive)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      tone: 'default',
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
}

export function Badge({ className, variant, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, tone, className }))} {...props} />;
}

export { badgeVariants };
