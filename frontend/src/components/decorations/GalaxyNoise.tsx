import { cn } from '@/utils/cn';

export function GalaxyNoise({ className, ...props }: Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart'>) {
  return <div className={cn('noise absolute inset-0 rounded-[inherit]', className)} {...props} />;
}
