import { cn } from '@/utils/cn';

interface OrbitRingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart'> {
  size?: string;
  thickness?: string;
}

export function OrbitRing({ size = '10rem', thickness = '1px', className, ...props }: OrbitRingProps) {
  return (
    <div
      className={cn('rounded-full border border-[var(--color-card-border)]/70', className)}
      style={{ width: size, height: size, borderWidth: thickness }}
      {...props}
    />
  );
}
