import { useEffect, useMemo, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EventCard } from '@/components/events/EventCard';
import { EventFilters } from '@/components/events/EventFilters';
import { PageLoader } from '@/components/ui/PageLoader';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
import { contentService } from '@/services/contentService';
import type { EventItem } from '@/types/api';

export function EventsPage() {
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadEvents() {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage('');

      try {
        const data = await contentService.getEvents();
        if (isMounted) {
          setEvents(data);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
          setErrorMessage(error instanceof Error ? error.message : 'Unable to load events');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const source = events ?? [];
    return source.filter((event) => {
      const haystack = `${event.title} ${event.description} ${event.category}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [events, query]);

  return (
    <main>
      <Section>
        <SectionHeading eyebrow="Events" title="Explore Events" subtitle="Discover workshops, competitions, and showcases." />
        <EventFilters onSearch={(q) => setQuery(q)} />
        {isLoading ? (
          <PageLoader />
        ) : isError ? (
          <ErrorState message={errorMessage || 'Unable to load events'} onRetry={() => { void contentService.getEvents().then(setEvents).catch(() => setIsError(true)); }} />
        ) : filtered.length === 0 ? (
          <EmptyState title="No events matched your search" description="Try a broader search term or check back later." />
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
