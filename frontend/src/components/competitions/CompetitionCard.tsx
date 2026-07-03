import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { CompetitionItem } from '@/types/api';

function CompetitionIllustration({ category }: { category: string }) {
  const palette = category.includes('AI') || category.includes('Hackathon')
    ? 'from-violet-500/20 via-fuchsia-400/10 to-sky-400/10'
    : category.includes('Cyber') || category.includes('Design')
      ? 'from-slate-500/15 via-indigo-400/10 to-violet-400/10'
      : 'from-indigo-400/15 via-slate-400/10 to-fuchsia-400/10';

  return (
    <div className={`relative mb-5 h-32 overflow-hidden rounded-[1.25rem] border border-[var(--color-card-border)] bg-gradient-to-br ${palette}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_35%)]" />
      <div className="absolute left-6 top-6 h-14 w-14 rounded-full border border-[var(--color-primary)]/20" />
      <div className="absolute right-6 top-7 h-10 w-10 rounded-full border border-[var(--color-accent)]/20" />
      <div className="absolute bottom-6 left-8 right-8 h-px bg-[var(--color-primary)]/20" />
      <div className="absolute bottom-5 left-10 h-10 w-16 rounded-[999px] border border-[var(--color-primary)]/20" />
      <div className="absolute bottom-5 right-10 h-10 w-16 rounded-[999px] border border-[var(--color-accent)]/20" />
    </div>
  );
}

export function CompetitionCard({ item }: { item: CompetitionItem }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <CompetitionIllustration category={item.category} />
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">{item.category}</Badge>
              <Badge variant="gradient">Prize</Badge>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
          </div>
          <div className="text-right text-sm text-[var(--color-muted)]">
            <div>{item.duration}</div>
            <div className="mt-2">{item.prize_pool}</div>
          </div>
        </div>
        <div className="mt-6 rounded-[1.25rem] border border-[var(--color-card-border)] bg-[var(--color-background)]/70 p-4 text-sm text-[var(--color-muted)]">
          <div className="flex items-center justify-between gap-3">
            <span>Leaderboard</span>
            <span className="font-medium text-[var(--color-foreground)]">{item.leaderboard?.[0]?.college ?? 'Top 3 colleges'}</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span>Team size</span>
            <span className="font-medium text-[var(--color-foreground)]">{item.team_size ?? '2–4'}</span>
          </div>
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" size="sm">
            <Link to={`/competitions/${item.slug}`}>View competition</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
