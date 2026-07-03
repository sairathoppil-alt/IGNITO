import { motion } from 'framer-motion';
import { fadeUp } from '@/animations';
import { cn } from '@/utils/cn';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, className, eyebrow }: PageHeaderProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className={cn('mb-12 pt-8', className)}>
      {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">{eyebrow}</p> : null}
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">{description}</p> : null}
    </motion.div>
  );
}
