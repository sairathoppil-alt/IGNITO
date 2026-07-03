import { useState, useEffect } from 'react';

export function Toast({ message, show = true }: { message: string; show?: boolean }) {
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    setVisible(show);
    if (show) {
      const t = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(t);
    }
  }, [show]);
  if (!visible) return null;
  return (
    <div className="fixed right-6 bottom-6 z-50 rounded-lg bg-[var(--color-card)] border border-[var(--color-card-border)] p-4 shadow-[var(--shadow-card)]">
      {message}
    </div>
  );
}
