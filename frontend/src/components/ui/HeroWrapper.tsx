import { cn } from '@/utils/cn';

interface HeroWrapperProps extends React.HTMLAttributes<HTMLElement> {
  fullHeight?: boolean;
  background?: 'default' | 'aurora' | 'cosmic';
}

export function HeroWrapper({ className, fullHeight = true, background = 'default', children, ...props }: HeroWrapperProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        fullHeight && 'min-h-screen',
        background === 'aurora' && 'bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_40%)]',
        background === 'cosmic' && 'bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.14),transparent_35%)]',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
