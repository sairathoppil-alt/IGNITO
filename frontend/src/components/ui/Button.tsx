import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { LoaderCircle } from 'lucide-react';
import { cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'group relative isolate inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-full border border-transparent text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[0_10px_30px_rgba(124,58,237,0.16)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]',
        secondary:
          'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(124,58,237,0.12)]',
        outline:
          'border-[var(--color-card-border)] bg-[var(--color-card)]/80 text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-secondary)]',
        ghost:
          'bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]',
        glass:
          'glass text-[var(--color-foreground)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]',
        gradient:
          'bg-gradient-to-r from-[var(--color-accent-gradient-from)] to-[var(--color-accent-gradient-to)] text-white shadow-[0_12px_32px_rgba(124,58,237,0.18)] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition before:duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(124,58,237,0.2)] hover:before:opacity-100',
        danger: 'bg-[var(--color-destructive)] text-white hover:-translate-y-0.5',
        success: 'bg-[var(--color-success)] text-white hover:-translate-y-0.5',
        link: 'h-auto bg-transparent p-0 text-[var(--color-primary)] underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-8 px-3 text-xs rounded-full',
        sm: 'h-9 px-4 text-sm rounded-full',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const content = (
      <>
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : leftIcon}
        <span className="inline-flex items-center gap-2">{children}</span>
        {rightIcon && !loading ? rightIcon : null}
      </>
    );

    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>;

      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          aria-busy={loading || undefined}
          disabled={disabled || loading}
          {...props}
        >
          {cloneElement(child, {
            className: cn(child.props.className, 'inline-flex items-center gap-2'),
          })}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { buttonVariants };
