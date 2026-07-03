import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-8xl font-bold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold text-[var(--color-foreground)]">
          Page Not Found
        </h1>
        <p className="mt-2 text-[var(--color-muted)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Section>
  );
}
