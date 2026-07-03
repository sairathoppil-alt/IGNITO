import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ErrorState({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-8 text-center text-sm text-red-300">
      <div className="mb-3 flex justify-center">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <p className="font-medium">{message || 'Something went wrong while loading this content.'}</p>
      {onRetry ? (
        <div className="mt-4 flex justify-center">
          <Button size="sm" variant="outline" onClick={onRetry}>
            Retry
          </Button>
        </div>
      ) : null}
    </div>
  );
}
