import { cn } from '@/utils/cn';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  noPadding?: boolean;
  background?: 'default' | 'aurora' | 'cosmic' | 'glass';
  decorative?: boolean;
}

export function Section({
  className,
  containerSize = '2xl',
  noPadding = false,
  background = 'default',
  decorative = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        !noPadding && 'section-padding relative overflow-hidden',
        background === 'aurora' && 'bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_72%)]',
        background === 'cosmic' && 'bg-[linear-gradient(180deg,rgba(124,58,237,0.035),transparent)]',
        background === 'glass' && 'glass',
        className,
      )}
      {...props}
    >
      {decorative ? <div className="pointer-events-none absolute inset-0 cosmic-grid opacity-20" /> : null}
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
