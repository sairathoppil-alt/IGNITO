import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

interface CursorGlowProps {
  enabled?: boolean;
  className?: string;
}

export function CursorGlow({ enabled = true, className }: CursorGlowProps) {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 24 });
  const springY = useSpring(y, { stiffness: 180, damping: 24 });

  useEffect(() => {
    setMounted(true);
    if (!enabled || typeof window === 'undefined') return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled, x, y]);

  if (!enabled || !mounted) return null;

  return (
    <motion.div
      className={cn('pointer-events-none fixed left-0 top-0 z-[60] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.28)_0%,rgba(124,58,237,0.12)_35%,transparent_70%)] blur-3xl', className)}
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    />
  );
}

export function MouseFollower({ enabled = true, className }: CursorGlowProps) {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20 });
  const springY = useSpring(y, { stiffness: 250, damping: 20 });

  useEffect(() => {
    setMounted(true);
    if (!enabled || typeof window === 'undefined') return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled, x, y]);

  if (!enabled || !mounted) return null;

  return (
    <motion.div
      className={cn('pointer-events-none fixed left-0 top-0 z-[55] h-3 w-3 rounded-full border border-[var(--color-primary)]/70 bg-[var(--color-primary)]/50 shadow-[0_0_18px_rgba(124,58,237,0.4)]', className)}
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    />
  );
}

export function MagneticHover({ children, className, enabled = true }: React.PropsWithChildren<{ className?: string; enabled?: boolean }>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!enabled) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    setPosition({ x: (x / bounds.width - 0.5) * 6, y: (y / bounds.height - 0.5) * 6 });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      className={cn('transition-transform duration-300', className)}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </div>
  );
}
