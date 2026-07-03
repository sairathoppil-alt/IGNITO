import { useEffect, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CompetitionCard } from '@/components/competitions/CompetitionCard';
import { PageLoader } from '@/components/ui/PageLoader';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
import { contentService } from '@/services/contentService';
import type { CompetitionItem } from '@/types/api';

export function CompetitionsPage() {
  const [competitions, setCompetitions] = useState<CompetitionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCompetitions() {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage('');

      try {
        const data = await contentService.getCompetitions();
        if (isMounted) {
          setCompetitions(data);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
          setErrorMessage(error instanceof Error ? error.message : 'Unable to load competitions');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadCompetitions();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <Section><PageLoader /></Section>;
  }

  if (isError) {
    return <Section><ErrorState message={errorMessage || 'Unable to load competitions'} onRetry={() => { void contentService.getCompetitions().then(setCompetitions).catch(() => setIsError(true)); }} /></Section>;
  }

  return (
    <main>
      <Section>
        <SectionHeading eyebrow="Competitions" title="Competitions" subtitle="Competitive tracks, prizes, and leaderboards." />
        {competitions.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitions.map((c) => (
              <CompetitionCard key={c.id} item={c} />
            ))}
          </div>
        ) : (
          <EmptyState title="No competitions available yet" description="New competition tracks will appear here soon." />
        )}
      </Section>
    </main>
  );
}
