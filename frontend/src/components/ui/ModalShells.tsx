import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Drawer({ open, onOpenChange, children, title, className }: DrawerProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[350] bg-[var(--color-overlay)]" onClick={() => onOpenChange(false)} />
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className={cn('fixed right-0 top-0 z-[360] flex h-full w-full max-w-md flex-col border-l border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-xl)] backdrop-blur-xl', className)}>
            <div className="mb-6 flex items-center justify-between">
              {title ? <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3> : null}
              <button type="button" onClick={() => onOpenChange(false)} className="rounded-lg p-2 text-[var(--color-muted)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]">
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function BottomSheet({ open, onOpenChange, children, title, className }: BottomSheetProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[350] bg-[var(--color-overlay)]" onClick={() => onOpenChange(false)} />
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className={cn('fixed inset-x-0 bottom-0 z-[360] rounded-t-[1.75rem] border-t border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-xl)] backdrop-blur-xl', className)}>
            <div className="mb-4 flex items-center justify-between">
              {title ? <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3> : null}
              <button type="button" onClick={() => onOpenChange(false)} className="rounded-lg p-2 text-[var(--color-muted)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]">
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
}

export function ConfirmDialog({ open, onOpenChange, title, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', onConfirm }: ConfirmDialogProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[360] bg-[var(--color-overlay)]" />
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="fixed left-1/2 top-1/2 z-[370] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-xl)] backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{description}</p>
            <div className="mt-6 flex justify-end gap-3">
              <button type="button" onClick={() => onOpenChange(false)} className="rounded-full border border-[var(--color-card-border)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)]">
                {cancelLabel}
              </button>
              <button type="button" onClick={() => { onConfirm(); onOpenChange(false); }} className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white">
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
