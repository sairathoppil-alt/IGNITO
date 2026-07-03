import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  image?: React.ReactNode;
  footer?: React.ReactNode;
  tags?: string[];
  actionLabel?: string;
  href?: string;
}

export function FeatureCard({ title, description, image, footer, tags, actionLabel = 'Explore', href, className, ...props }: BaseCardProps) {
  return (
    <Card variant="glass" hover className={cn('p-0', className)} {...props}>
      {image ? <div className="aspect-video overflow-hidden rounded-t-[1.5rem] border-b border-[var(--color-card-border)]">{image}</div> : null}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <p className="text-sm text-[var(--color-muted)]">{description}</p> : null}
      </CardHeader>
      {tags ? <CardContent className="flex flex-wrap gap-2 pt-0">
        {tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
      </CardContent> : null}
      <CardFooter className="justify-between">
        {footer ? <div>{footer}</div> : <span className="text-sm text-[var(--color-muted)]">Premium experience</span>}
        {href ? <Button variant="ghost" size="sm" rightIcon={<ArrowUpRight className="h-4 w-4" />}>{actionLabel}</Button> : null}
      </CardFooter>
    </Card>
  );
}

export function EventCard(props: BaseCardProps) {
  return <FeatureCard {...props} />;
}

export function CompetitionCard(props: BaseCardProps) {
  return <FeatureCard {...props} />;
}

export function TimelineCard({ title, description, footer, className, ...props }: BaseCardProps) {
  return (
    <Card variant="outline" hover className={cn('relative overflow-visible', className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <p className="text-sm text-[var(--color-muted)]">{description}</p> : null}
      </CardHeader>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  );
}

export function SpeakerCard({ title, description, image, footer, className, ...props }: BaseCardProps) {
  return (
    <Card variant="glass" hover className={cn('text-center', className)} {...props}>
      {image ? <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">{image}</div> : null}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <p className="text-sm text-[var(--color-muted)]">{description}</p> : null}
      </CardHeader>
      {footer ? <CardFooter className="justify-center">{footer}</CardFooter> : null}
    </Card>
  );
}

export function SponsorCard({ title, description, footer, className, ...props }: BaseCardProps) {
  return (
    <Card variant="default" hover className={cn('text-center', className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <p className="text-sm text-[var(--color-muted)]">{description}</p> : null}
      </CardHeader>
      {footer ? <CardFooter className="justify-center">{footer}</CardFooter> : null}
    </Card>
  );
}

export function StatCard({ title, description, className, ...props }: BaseCardProps) {
  return (
    <Card variant="gradient" hover className={cn('text-center', className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <p className="text-sm text-[var(--color-muted)]">{description}</p> : null}
      </CardHeader>
    </Card>
  );
}
