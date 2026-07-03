import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

export function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card)] px-5 py-3 text-sm text-[var(--color-muted)] shadow-[var(--shadow-card)]"
      >
        <LoaderCircle className="h-4 w-4 animate-spin text-[var(--color-primary)]" />
        Loading live content...
      </motion.div>
    </div>
  );
}
