import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PageLoader } from '@/components/ui/PageLoader';
import { ErrorState } from '@/components/ui/ErrorState';
import { contentService } from '@/services/contentService';
import type { CompetitionItem } from '@/types/api';

export default function CompetitionDetailPage() {
  const { slug } = useParams();
  const [registered, setRegistered] = useState(false);
  const [competition, setCompetition] = useState<CompetitionItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCompetition() {
      if (!slug) return;
      setIsLoading(true);
      setIsError(false);
      setErrorMessage('');

      try {
        const current = await contentService.getCompetitionBySlug(slug);
        if (isMounted) {
          setCompetition(current);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
          setErrorMessage(error instanceof Error ? error.message : 'Competition not found');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadCompetition();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleRegister = async () => {
    if (!competition) return;
    try {
      await contentService.register({ entity_type: 'competition', entity_slug: competition.slug, name: 'Guest Participant', email: 'guest@example.com' });
      setRegistered(true);
    } catch {
      setRegistered(true);
    }
  };

  if (isLoading) {
    return <Section><PageLoader /></Section>;
  }

  if (isError || !competition) {
    return (
      <Section>
        <ErrorState message={errorMessage || 'Competition not found'} onRetry={() => { void contentService.getCompetitionBySlug(slug ?? '').then(setCompetition); }} />
      </Section>
    );
  }

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <SectionHeading title={competition.title} subtitle={competition.category} />
          <div className="prose max-w-none text-[var(--color-muted)]">{competition.description}</div>
          <div className="mt-6">
            <h4 className="font-semibold">Prize Pool</h4>
            <p className="text-sm text-[var(--color-muted)]">{competition.prize_pool}</p>
          </div>
        </div>
        <aside>
          <div className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)]">
            <p className="text-sm text-[var(--color-muted)]">Duration</p>
            <p className="font-semibold">{competition.duration}</p>
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
