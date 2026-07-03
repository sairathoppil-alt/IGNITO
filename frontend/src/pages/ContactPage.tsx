import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/contact/ContactForm';
import { coordinators, departments, socials } from '@/constants/mock/contact';

export function ContactPage() {
  return (
    <main>
      <Section background="aurora">
        <SectionHeading eyebrow="Contact" title="Get in touch" subtitle="Questions, partnerships, and coordinator contacts for IGNITO 2026." />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="max-w-2xl text-[var(--color-muted)]">Use the form to message the team and we will reply within two business days.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coordinators.map((c) => (
                <div key={c.id} className="rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                  <p className="font-semibold text-[var(--color-foreground)]">{c.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{c.role}</p>
                  <p className="mt-3 text-sm text-[var(--color-primary)]">{c.email}</p>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <div className="rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
              <h4 className="font-semibold text-[var(--color-foreground)]">Departments</h4>
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
                {departments.map((d) => (
                  <li key={d.id} className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-background)]/60 px-3 py-2">{d.name} — {d.email}</li>
                ))}
              </ul>
              <h4 className="mt-6 font-semibold text-[var(--color-foreground)]">Socials</h4>
              <ul className="mt-3 space-y-3 text-sm text-[var(--color-muted)]">
                {socials.map((s) => (
                  <li key={s.id}><a className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]" href={s.url}>{s.label}</a></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
