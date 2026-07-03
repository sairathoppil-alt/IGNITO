import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Globe2, Sparkles, Star, Rocket, Flag, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';

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

const COUNTDOWN_TARGET = new Date('2026-03-12T00:00:00');

function useCountdown() {
  return useMemo(() => {
    const now = Date.now();
    const distance = Math.max(0, COUNTDOWN_TARGET.getTime() - now);
    const seconds = Math.floor((distance / 1000) % 60);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }, []);
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
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative isolate w-full overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.06),transparent_25%)]" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[rgba(124,58,237,0.1)] blur-3xl" />
      <div className="absolute right-10 top-16 h-20 w-20 rounded-full border border-[var(--color-primary)]/15" />
      <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[rgba(255,255,255,0.05)] blur-3xl" />
      <div className="relative grid gap-4 sm:grid-cols-[1fr]">
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mx-auto h-[280px] w-[280px] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] shadow-[0_28px_80px_rgba(124,58,237,0.12)]"
        >
          <div className="absolute inset-x-6 top-8 h-28 rounded-[1.5rem] bg-[rgba(255,255,255,0.1)] shadow-inner" />
          <div className="absolute left-6 top-24 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.2)] blur-2xl" />
          <div className="absolute right-6 top-20 h-28 w-28 rounded-full bg-[rgba(124,58,237,0.22)] blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-36 rounded-b-[2rem] bg-[rgba(15,23,42,0.55)]" />
          <div className="absolute left-8 top-24 h-20 w-20 rounded-full border border-[var(--color-primary)]/40 bg-[rgba(255,255,255,0.18)] shadow-[var(--shadow-glow)]" />
          <div className="absolute right-10 top-32 h-24 w-24 rounded-full border border-[var(--color-accent)]/30 bg-[rgba(236,72,153,0.16)] blur-xl" />
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.35)] shadow-[0_0_40px_rgba(255,255,255,0.2)]" />
          <div className="absolute left-4 top-10 h-14 w-14 rounded-full bg-[rgba(255,255,255,0.34)] shadow-[0_0_25px_rgba(255,255,255,0.18)]" />
          <div className="absolute right-8 bottom-12 h-24 w-24 rounded-full bg-[rgba(255,255,255,0.08)] border border-white/10" />

          <motion.div
            animate={reduceMotion ? undefined : { x: [0, 4, 0], y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-8 top-32 h-24 w-24 rounded-full bg-[var(--color-background)]/90 shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
          >
            <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_70%)]" />
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { rotate: [0, 2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-16 h-20 w-20 -translate-x-1/2 rounded-full border border-[var(--color-primary)]/30 bg-[rgba(255,255,255,0.1)]"
          />

          <div className="absolute left-0 right-0 top-8 mx-auto h-0.5 w-24 rounded-full bg-white/20" />
          <div className="absolute left-14 top-40 h-10 w-10 rounded-full bg-[rgba(255,255,255,0.22)] shadow-[0_0_20px_rgba(255,255,255,0.12)]" />
          <div className="absolute right-14 top-48 h-12 w-12 rounded-full bg-[rgba(255,255,255,0.24)] border border-white/10" />

          <div className="absolute left-8 bottom-10 flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(255,255,255,0.18)] shadow-[0_12px_30px_rgba(124,58,237,0.16)]">
            <Star className="h-8 w-8 text-[var(--color-primary)]" />
          </div>

          <div className="absolute bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] backdrop-blur-xl">
            <div className="h-3 w-3 rounded-full bg-[var(--color-accent)] shadow-[var(--shadow-glow)]" />
          </div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-8 h-24 w-24 rounded-full border border-[var(--color-primary)]/25 bg-[rgba(255,255,255,0.08)] shadow-[0_0_40px_rgba(124,58,237,0.16)]"
        />
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-16 bottom-10 h-28 w-28 rounded-full border border-[var(--color-accent)]/25 bg-[rgba(255,255,255,0.08)] shadow-[0_0_40px_rgba(236,72,153,0.12)]"
        />
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
                <p className="mt-3 text-xl font-semibold text-[var(--color-foreground)]">12–15 March 2026</p>
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
