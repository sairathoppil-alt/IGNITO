import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { useApiQuery } from '@/hooks/useApiQuery';
import { PageLoader } from '@/components/ui/PageLoader';
import { ErrorState } from '@/components/ui/ErrorState';

export function AdminPage() {
  const { data, isLoading, isError, error, refetch } = useApiQuery<{ events: number; competitions: number; registrations: number; contact_messages: number; coordinators: number }>('admin', '/api/v1/admin/dashboard');

  if (isLoading) return <Section><PageLoader /></Section>;
  if (isError) return <Section><ErrorState message={error instanceof Error ? error.message : 'Unable to load admin dashboard'} onRetry={() => refetch()} /></Section>;

  return (
    <Section>
      <SectionHeading eyebrow="Admin" title="Operations dashboard" subtitle="Manage upcoming content and attendance in one place." />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: 'Events', value: data?.events ?? 0 },
          { label: 'Competitions', value: data?.competitions ?? 0 },
          { label: 'Registrations', value: data?.registrations ?? 0 },
          { label: 'Messages', value: data?.contact_messages ?? 0 },
          { label: 'Coordinators', value: data?.coordinators ?? 0 },
        ].map((item) => (
          <Card key={item.label} className="p-6">
            <p className="text-sm text-[var(--color-muted)]">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
