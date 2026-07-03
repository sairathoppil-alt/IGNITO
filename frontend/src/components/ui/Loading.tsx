import { cn } from '@/utils/cn';

export function Spinner({ className }: { className?: string }) {
  return <div className={cn('h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-primary)] border-t-transparent', className)} />;
}

export function Shimmer({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-2xl bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.2),rgba(255,255,255,0.08))] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.1),rgba(255,255,255,0.05))]', className)} />;
}

export function ProgressBar({ className, value = 60 }: { className?: string; value?: number }) {
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-[var(--color-card-border)]', className)}>
      <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-magic)]" style={{ width: `${value}%` }} />
    </div>
  );
}

export function PulseLoader({ className }: { className?: string }) {
  return <div className={cn('h-3 w-3 animate-pulse rounded-full bg-[var(--color-primary)]', className)} />;
}
