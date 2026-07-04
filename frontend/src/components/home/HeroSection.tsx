import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, Sparkles, Star, Rocket, Flag, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';
import { HeroIllustration as CosmicHeroIllustration } from '@/components/illustrations/CosmicIllustrations';

const QUICK_ACTIONS = [
  {
    title: 'Workshops',
    description: 'Hands-on learning labs and guided sessions.',
    icon: Sparkles,
  },
  {
    title: 'Competitions',
    description: 'Challenge your skills with prize-winning events.',
    icon: Rocket,
  },
  {
    title: 'Exhibitions',
    description: 'Experience curated technology showcases.',
    icon: Globe2,
  },
  {
    title: 'Networking',
    description: 'Connect with peers, mentors, and industry experts.',
    icon: Flag,
  },
];

const STATS = [
  { value: 30, suffix: '+', label: 'Events' },
  { value: 5000, suffix: '+', label: 'Participants' },
  { value: 100, suffix: '+', label: 'Colleges' },
  { value: 8, prefix: '₹', suffix: 'L+', label: 'Prize Pool' },
];

const COUNTDOWN_TARGET = new Date('2026-07-16T00:00:00');

function getCountdown(now: number) {
  const distance = Math.max(0, COUNTDOWN_TARGET.getTime() - now);
  const seconds = Math.floor((distance / 1000) % 60);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function useCountdown() {
  const [countdown, setCountdown] = useState(() => getCountdown(Date.now()));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdown(Date.now()));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return countdown;
}

function CountdownCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-5 text-center shadow-[var(--shadow-card)] backdrop-blur-xl">
      <p className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[var(--color-muted)]">
        {label}
      </p>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative isolate w-full overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.06),transparent_25%)]" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[rgba(124,58,237,0.1)] blur-3xl" />
      <div className="absolute right-10 top-16 h-20 w-20 rounded-full border border-[var(--color-primary)]/15" />
      <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[rgba(255,255,255,0.05)] blur-3xl" />
      <div className="relative mx-auto flex max-w-[320px] items-center justify-center">
        <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.04))]" />
        <CosmicHeroIllustration className="w-full max-w-[320px]" animated />
      </div>
    </div>
  );
}

export function HeroSection() {
  const countdown = useCountdown();

  return (
    <Section className="relative overflow-hidden px-0 py-0" background="glass" decorative>
      <AnimatedBackground variant="nebula" className="opacity-80" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1440px] flex-col gap-10 px-5 py-20 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <p className="inline-flex items-center justify-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-card)]/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)] shadow-[0_8px_24px_rgba(124,58,237,0.06)] lg:justify-start">
              Kerela&apos;s Biggest Techfest
            </p>

            <div className="space-y-5">
              <h1 className="font-[family-name:var(--font-heading)] text-5xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl xl:text-8xl">
                IGNITO 2026
              </h1>
              <p className="text-xl font-medium tracking-[0.02em] text-transparent bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-primary)] to-[var(--color-magic)] bg-clip-text sm:text-2xl">
                Beyond the event horizon
              </p>
            </div>

            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg lg:mx-0 lg:max-w-xl">
              A premium celebration of innovation, engineering, and creativity at the edge of exploration. Experience a refined fusion of technology, design, and future-focused discovery.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Date</p>
                <p className="mt-3 text-xl font-semibold text-[var(--color-foreground)]">16 July 2026</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-5 shadow-[var(--shadow-card)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Location</p>
                <p className="mt-3 text-xl font-semibold text-[var(--color-foreground)]">Kerala, India</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[auto_1fr] lg:grid-cols-[repeat(2,minmax(0,1fr))]">
              <Button asChild size="lg" variant="gradient" className="w-full">
                <Link to="#register">Register Now</Link>
              </Button>
              <Button asChild size="lg" variant="glass" className="w-full border-[var(--color-glass-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)]">
                <Link to="/events">Explore Events</Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
                <Star className="h-5 w-5 text-[var(--color-primary)]" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Mission</p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-foreground)]">Ignite the future of engineering.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[1.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
                <MapPin className="h-5 w-5 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Focus</p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-foreground)]">Design, innovation, and community.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <HeroIllustration />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 xl:grid-cols-[repeat(2,minmax(0,1fr))]">
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <GlassCard key={action.title} className="group hover:glow-purple hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] shadow-[0_10px_30px_rgba(124,58,237,0.12)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--color-foreground)]">{action.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{action.description}</p>
                </GlassCard>
              );
            })}
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Object.entries(countdown).map(([label, value]) => (
                <CountdownCard key={label} label={label} value={value.toString().padStart(2, '0')} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <GlassCard key={stat.label} className="flex flex-col items-start justify-between gap-3 bg-[var(--color-card)]/95 p-6 text-[var(--color-foreground)] hover:shadow-[var(--shadow-card-hover)]">
                  <div>
                    <p className="text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix ?? ''} />
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">{stat.label}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[160px] flex-col items-center gap-3 text-center">
          <div className="h-16 w-10 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card)]/50 p-2 shadow-[var(--shadow-card)]">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[var(--shadow-glow)] animate-bounce mx-auto" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">Scroll to discover</p>
        </div>
      </div>
    </Section>
  );
}
