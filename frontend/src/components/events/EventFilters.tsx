import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function EventFilters({ onSearch }: { onSearch?: (q: string) => void }) {
  const [q, setQ] = useState('');
  return (
    <div className="grid gap-4 sm:grid-cols-3 items-center">
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search events, keywords..." />
      <div className="flex gap-2">
        <Badge tone="accent">AI</Badge>
        <Badge tone="accent">Robotics</Badge>
        <Badge tone="accent">Design</Badge>
      </div>
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={() => onSearch?.(q)}>Search</Button>
      </div>
    </div>
  );
}
