import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  size = 'md',
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[var(--z-overlay,300)] bg-[var(--color-overlay)] backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-[var(--z-modal,400)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-xl)] backdrop-blur-xl focus:outline-none',
            size === 'sm' && 'max-w-sm',
            size === 'md' && 'max-w-lg',
            size === 'lg' && 'max-w-2xl',
            className,
          )}
        >
          {title && (
            <Dialog.Title className="text-lg font-semibold tracking-[0.01em] text-[var(--color-foreground)]">
              {title}
            </Dialog.Title>
          )}
          {description && (
            <Dialog.Description className="mt-1 text-sm text-[var(--color-muted)]">
              {description}
            </Dialog.Description>
          )}
          <div className="mt-4">{children}</div>
          <Dialog.Close className="absolute right-4 top-4 rounded-lg p-1 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
