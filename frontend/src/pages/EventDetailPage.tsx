import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PageLoader } from '@/components/ui/PageLoader';
import { ErrorState } from '@/components/ui/ErrorState';
import { contentService } from '@/services/contentService';
import type { EventItem } from '@/types/api';

export default function EventDetailPage() {
  const { slug } = useParams();
  const [registered, setRegistered] = useState(false);
  const [event, setEvent] = useState<EventItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadEvent() {
      if (!slug) return;
      setIsLoading(true);
      setIsError(false);
      setErrorMessage('');

      try {
        const current = await contentService.getEventBySlug(slug);
        if (isMounted) {
          setEvent(current);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
          setErrorMessage(error instanceof Error ? error.message : 'Event not found');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadEvent();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleRegister = async () => {
    if (!event) return;
    try {
      await contentService.register({ entity_type: 'event', entity_slug: event.slug, name: 'Guest Participant', email: 'guest@example.com' });
      setRegistered(true);
    } catch {
      setRegistered(true);
    }
  };

  if (isLoading) {
    return <Section><PageLoader /></Section>;
  }

  if (isError || !event) {
    return (
      <Section>
        <ErrorState message={errorMessage || 'Event not found'} onRetry={() => { void contentService.getEventBySlug(slug ?? '').then(setEvent); }} />
      </Section>
    );
  }

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <SectionHeading title={event.title} subtitle={event.short_description ?? event.category} />
          <div className="prose max-w-none text-[var(--color-muted)]">{event.description}</div>
        </div>
        <aside>
          <div className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)]">
            <p className="text-sm text-[var(--color-muted)]">Venue</p>
            <p className="font-semibold">{event.venue}</p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">Duration</p>
            <p className="font-semibold">{event.duration}</p>
            <div className="mt-6">
              <Button size="lg" variant="gradient" onClick={handleRegister}>
                {registered ? 'Registered' : 'Register'}
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
