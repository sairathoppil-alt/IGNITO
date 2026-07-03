import { Badge } from './Badge';

export function Status({ children, className }: React.HTMLAttributes<HTMLSpanElement>) {
  return <Badge className={className} variant="glass" tone="success">{children}</Badge>;
}

export function Category({ children, className }: React.HTMLAttributes<HTMLSpanElement>) {
  return <Badge className={className} variant="outline">{children}</Badge>;
}

export function Difficulty({ children, className }: React.HTMLAttributes<HTMLSpanElement>) {
  return <Badge className={className} variant="gradient">{children}</Badge>;
}

export function Prize({ children, className }: React.HTMLAttributes<HTMLSpanElement>) {
  return <Badge className={className} variant="glass" tone="accent">{children}</Badge>;
}
