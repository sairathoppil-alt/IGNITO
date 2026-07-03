import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/animations';
import { cn } from '@/utils/cn';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn('relative space-y-8', className)}
    >
      <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-card-border)] md:left-1/2 md:-translate-x-px" />

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={staggerItem}
          className={cn(
            'relative flex flex-col gap-4 md:w-1/2',
            index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12',
          )}
        >
          <div
            className={cn(
              'absolute top-2 h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-[var(--shadow-glow)]',
              index % 2 === 0
                ? 'left-4 md:left-auto md:right-0 md:translate-x-1/2'
                : 'left-4 md:left-0 md:-translate-x-1/2',
            )}
          />
          <div className="ml-10 md:ml-0">
            <span className="text-sm font-medium text-[var(--color-primary)]">
              {item.date}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-[var(--color-foreground)]">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {item.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
