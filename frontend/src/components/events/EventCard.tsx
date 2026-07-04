import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  AIIllustration,
  CosmicIllustration,
  CyberSecurityIllustration,
  DesignIllustration,
  QuizIllustration,
  RoboticsIllustration,
  SatelliteIllustration,
  TreasureIllustration,
  WebIllustration,
} from '@/components/illustrations/CosmicIllustrations';
import type { EventItem } from '@/types/api';

function EventIllustration({ category }: { category: string }) {
  const normalized = category.toLowerCase();

  if (normalized.includes('ai')) {
    return <AIIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('cyber')) {
    return <CyberSecurityIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('design')) {
    return <DesignIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('robot')) {
    return <RoboticsIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('electro') || normalized.includes('cad')) {
    return <SatelliteIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('quiz')) {
    return <QuizIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('treasure')) {
    return <TreasureIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  if (normalized.includes('hack')) {
    return <WebIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
  }

  return <CosmicIllustration className="mb-5 h-36 w-full rounded-[1.35rem] border border-[var(--color-card-border)] p-2" animated />;
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Card hover className="group overflow-hidden">
      <div className="p-6">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] p-1 shadow-[0_18px_50px_rgba(124,58,237,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_38%)]" />
          <div className="relative rounded-[1.2rem] bg-[var(--color-card)]/70 backdrop-blur-xl">
            <EventIllustration category={event.category} />
          </div>
        </div>
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
