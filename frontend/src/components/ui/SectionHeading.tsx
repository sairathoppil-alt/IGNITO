import { motion } from 'framer-motion';
import { fadeUp } from '@/animations';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  gradient?: boolean;
  eyebrow?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className,
  gradient = false,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn('mb-12', align === 'center' && 'text-center', className)}
    >
      {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">{eyebrow}</p> : null}
      <h2
        className={cn(
          'font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          gradient ? 'text-gradient' : 'text-[var(--color-foreground)]',
        )}
      >
        {title}
      </h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}
