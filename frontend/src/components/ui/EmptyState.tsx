export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card)] p-8 text-center text-sm text-[var(--color-muted)] shadow-[var(--shadow-card)]">
      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3>
      {description ? <p className="mt-2">{description}</p> : null}
    </div>
  );
}
