import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { EventItem } from '@/types/api';

function EventIllustration({ category }: { category: string }) {
  const palette = category.includes('AI') || category.includes('Hackathon')
    ? 'from-violet-500/20 via-fuchsia-400/10 to-sky-400/10'
    : category.includes('Cyber') || category.includes('Design')
      ? 'from-slate-500/15 via-indigo-400/10 to-violet-400/10'
      : 'from-indigo-400/15 via-slate-400/10 to-fuchsia-400/10';

  return (
    <div className={`relative mb-5 h-32 overflow-hidden rounded-[1.25rem] border border-[var(--color-card-border)] bg-gradient-to-br ${palette}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_35%)]" />
      <div className="absolute left-5 top-5 h-10 w-10 rounded-full border border-[var(--color-primary)]/30" />
      <div className="absolute right-6 top-6 h-14 w-14 rounded-full border border-[var(--color-primary)]/20" />
      <div className="absolute bottom-4 left-6 right-6 h-px bg-[var(--color-primary)]/20" />
      <div className="absolute bottom-5 left-8 h-10 w-16 rounded-[999px] border border-[var(--color-primary)]/20" />
      <div className="absolute bottom-5 right-8 h-10 w-16 rounded-[999px] border border-[var(--color-accent)]/20" />
    </div>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <EventIllustration category={event.category} />
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">{event.category}</Badge>
              {event.featured ? <Badge variant="gradient">Featured</Badge> : null}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">{event.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{event.short_description ?? event.category}</p>
          </div>
          <div className="text-right text-sm text-[var(--color-muted)]">
            <div>{event.duration}</div>
            <div className="mt-2">{event.venue}</div>
          </div>
        </div>
        <div className="mt-6 rounded-[1.25rem] border border-[var(--color-card-border)] bg-[var(--color-background)]/70 p-4 text-sm text-[var(--color-muted)]">
          <div className="flex items-center justify-between gap-3">
            <span>Difficulty</span>
            <span className="font-medium text-[var(--color-foreground)]">{event.difficulty}</span>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span>Seats</span>
            <span className="font-medium text-[var(--color-foreground)]">{event.seats_remaining ?? (event.is_upcoming ? 'Open' : 'Closed')}</span>
          </div>
          {event.registration_fee ? (
            <div className="mt-3 flex items-center justify-between gap-3">
              <span>Fee</span>
              <span className="font-medium text-[var(--color-foreground)]">{event.registration_fee}</span>
            </div>
          ) : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to={`/events/${event.slug}`}>View details</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to={`/events/${event.slug}`}>Reserve</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
