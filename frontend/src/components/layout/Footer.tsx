import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Twitter, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Container } from '@/components/ui/Container';
import { FOOTER_LINK_GROUPS, SITE_CONFIG, SOCIAL_LINKS } from '@/constants';
import { cn } from '@/utils/cn';

const socialIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--color-card-border)] bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_24%),linear-gradient(135deg,rgba(248,247,255,0.96),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_26%),linear-gradient(135deg,rgba(8,12,24,0.98),rgba(5,8,22,0.96))]">
      <div className="absolute inset-0">
        <div className="absolute left-[-4rem] top-12 h-36 w-36 rounded-full bg-[var(--color-primary)]/8 blur-3xl" />
        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[var(--color-accent)]/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/25 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.8fr_0.8fr] lg:gap-10 lg:py-16">
          <div className="relative">
            <motion.div
              initial={false}
              animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-0 h-20 w-20 rounded-full border border-[var(--color-primary)]/10 bg-[var(--color-card)]/70 shadow-[0_12px_28px_rgba(124,58,237,0.08)] backdrop-blur-xl"
            />
            <div className="relative z-10">
              <Logo className="mb-5" />
              <p className="max-w-xs text-sm leading-7 text-[var(--color-muted)]">
                {SITE_CONFIG.tagline}. Join us for an unforgettable tech experience at Model Engineering College, Kochi.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)]/80 text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-[var(--shadow-glow)]',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-foreground)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINK_GROUPS[0]?.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-all duration-300 hover:text-[var(--color-primary)]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-foreground)]">
              Support
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINK_GROUPS[1]?.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-all duration-300 hover:text-[var(--color-primary)]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-foreground)]">
              Connect
            </h3>
            <div className="rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/70 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                info@ignito2026.org
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                +91 98765 43210
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Model Engineering College, Kochi
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-card-border)] py-6 sm:flex-row">
          <p className="text-sm text-[var(--color-muted)]">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[var(--shadow-glow)]" />
            12–15 March {SITE_CONFIG.year}
          </div>
        </div>
      </Container>
    </footer>
  );
}
