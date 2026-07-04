import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  BrainCircuit,
  Cpu,
  Flame,
  Globe2,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Watch,
  Book,
  Bug,
  Smartphone,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ObservatoryIllustration } from '@/components/illustrations/CosmicIllustrations';
import {
  featuredEvents,
  categoryCards,
  aboutCards,
  timelineSteps,
  sponsorTiers,
  testimonials,
  faqs,
} from '@/constants/mock/home';

const iconMap = {
  Atom: <Atom className="h-6 w-6" />,
  BrainCircuit: <BrainCircuit className="h-6 w-6" />,
  Bug: <Bug className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  DeviceMobile: <Smartphone className="h-6 w-6" />,
  Flame: <Flame className="h-6 w-6" />,
  Globe2: <Globe2 className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Star: <Star className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Watch: <Watch className="h-6 w-6" />,
  Book: <Book className="h-6 w-6" />,
};

const statItems = [
  { label: 'Events', value: 30, suffix: '+' },
  { label: 'Participants', value: 6000, suffix: '+' },
  { label: 'Colleges', value: 150, suffix: '+' },
  { label: 'Prize Pool', value: 10, suffix: 'L+' },
  { label: 'Speakers', value: 40, suffix: '+' },
];

function eventImagePlaceholder(index: number) {
  const gradients = [
    'from-violet-500/10 via-fuchsia-300/10 to-sky-300/10',
    'from-sky-500/10 via-cyan-300/10 to-violet-300/10',
    'from-fuchsia-500/10 via-purple-300/10 to-pink-200/10',
    'from-emerald-500/10 via-slate-300/10 to-cyan-200/10',
    'from-rose-500/10 via-orange-300/10 to-yellow-200/10',
    'from-indigo-500/10 via-sky-300/10 to-white/20',
  ];
  return gradients[index % gradients.length];
}

function FeaturedEventCard({
  category,
  title,
  description,
  venue,
  duration,
  difficulty,
  badge,
  index,
}: typeof featuredEvents[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/35 hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)]"
    >
      <div
        className={`relative h-56 overflow-hidden rounded-t-[2rem] bg-gradient-to-br ${eventImagePlaceholder(index)}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-primary)] shadow-[0_8px_24px_rgba(124,58,237,0.08)]">
          {badge}
        </div>
        <div className="absolute left-4 bottom-4 rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.14)] px-4 py-3 text-sm text-[var(--color-muted)] backdrop-blur-xl">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{title}</h3>
          <Badge variant="default" tone="accent">{difficulty}</Badge>
        </div>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      </div>
      <div className="border-t border-[var(--color-card-border)] p-6 pt-0">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-[var(--color-background)]/70 p-3 text-sm text-[var(--color-foreground)] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">Venue</p>
            <p className="mt-1 font-semibold">{venue}</p>
          </div>
          <div className="rounded-3xl bg-[var(--color-background)]/70 p-3 text-sm text-[var(--color-foreground)] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">Duration</p>
            <p className="mt-1 font-semibold">{duration}</p>
          </div>
          <Button asChild size="sm" variant="outline" className="w-full text-[var(--color-foreground)]">
            <Link to="/events">View Details</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function CategoryTile({ title, description, icon }: { title: string; description: string; icon: string }) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? <Star className="h-6 w-6" />;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-[var(--color-primary)]/35 hover:shadow-[0_16px_40px_rgba(124,58,237,0.1)]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] shadow-[0_10px_30px_rgba(124,58,237,0.08)]">
        {Icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[var(--color-foreground)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </motion.div>
  );
}

function AboutIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_28%)]" />
      <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      <div className="absolute right-8 top-16 h-20 w-20 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      <div className="relative rounded-[2rem] border border-[var(--color-card-border)] bg-[rgba(255,255,255,0.12)] p-4 shadow-[0_20px_60px_rgba(124,58,237,0.08)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%)]" />
        <ObservatoryIllustration className="w-full" animated />
      </div>
    </motion.div>
  );
}

function TimelineCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? <Star className="h-6 w-6" />;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)] hover:border-[var(--color-primary)]/35 hover:shadow-[0_16px_40px_rgba(124,58,237,0.1)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] shadow-[0_10px_30px_rgba(124,58,237,0.08)]">
        {Icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </motion.div>
  );
}

function SponsorBar() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-card)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.1),transparent_35%)]" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-card-border)] bg-[rgba(255,255,255,0.05)] p-5 shadow-[inset_0_0_20px_rgba(124,58,237,0.06)]">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {['AstroTech Labs', 'Nova Systems', 'Quantum Forge', 'Orbit Works', 'Luna Dynamics', 'Velocity Stack', 'Kochi Makers', 'CodeCampus', 'Design Hive'].map((name) => (
            <span key={name} className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-[rgba(255,255,255,0.08)] px-4 text-sm text-[var(--color-foreground)] shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              {name}
            </span>
          ))}
          {['AstroTech Labs', 'Nova Systems', 'Quantum Forge', 'Orbit Works', 'Luna Dynamics', 'Velocity Stack', 'Kochi Makers', 'CodeCampus', 'Design Hive'].map((name) => (
            <span key={`${name}-2`} className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-2xl border border-[var(--color-card-border)] bg-[rgba(255,255,255,0.08)] px-4 text-sm text-[var(--color-foreground)] shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function GalleryItem() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-purple-200/30 via-violet-200/10 to-sky-100/20" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.08)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-3xl bg-[rgba(15,23,42,0.75)] p-4 text-sm text-white backdrop-blur-xl">View image</div>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ name, college, quote, rating }: { name: string; college: string; quote: string; rating: number }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(124,58,237,0.1)]"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          <span className="text-lg font-semibold">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-foreground)]">{name}</p>
          <p className="text-sm text-[var(--color-muted)]">{college}</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-[var(--color-muted)]">“{quote}”</p>
      <div className="mt-6 flex gap-1 text-[var(--color-primary)]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} className={`h-4 w-4 ${idx < rating ? 'opacity-100' : 'opacity-30'}`} />
        ))}
      </div>
    </motion.div>
  );
}

export function HomeSections() {
  const stats = useMemo(() => statItems, []);

  return (
    <>
      <Section className="bg-[var(--color-background)]">
        <SectionHeading
          title="Featured Events"
          subtitle="Discover the flagship experiences of IGNITO 2026."
          eyebrow="Featured Events"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <FeaturedEventCard key={event.id} {...event} index={index} />
          ))}
        </div>
      </Section>

      <Section className="bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_80%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.06),transparent_70%)]">
        <SectionHeading title="Event Categories" subtitle="Explore the themes that shape IGNITO 2026." eyebrow="Categories" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {categoryCards.map((category) => (
            <CategoryTile key={category.id} {...category} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-background)]">
        <SectionHeading title="Beyond The Event Horizon" subtitle="A curated journey through innovation, engineering, and creative discovery." eyebrow="About IGNITO" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AboutIllustration />
          <div className="space-y-6">
            <p className="text-base uppercase tracking-[0.35em] text-[var(--color-primary)]">A premium vision for modern exploration</p>
            <div className="space-y-4 text-[var(--color-muted)]">
              <p>IGNITO 2026 combines innovation, engineering, creativity, networking, and learning into one polished conference experience.</p>
              <p>Each element is designed to help students build, compete, discover, and connect with leading minds from across the region.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutCards.map((card) => (
                <GlassCard key={card.id} className="hover:glow-purple hover:shadow-[var(--shadow-card-hover)]">
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{card.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--color-background)]">
        <SectionHeading title="Statistics" subtitle="The scale, engagement, and impact of IGNITO 2026." eyebrow="By the Numbers" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-card)]"
            >
              <p className="text-4xl font-bold text-[var(--color-foreground)]">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_80%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.06),transparent_70%)]">
        <SectionHeading title="Why IGNITO" subtitle="A step-by-step journey through the IGNITO experience." eyebrow="Why Choose IGNITO" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="hidden lg:block">
            <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--color-card-border)]" />
          </div>
          <div className="grid gap-6">
              {timelineSteps.map((step) => (
                <TimelineCard key={step.id} {...step} />
              ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--color-background)]">
        <SectionHeading title="Sponsors Preview" subtitle="A premium partner showcase built for long-term collaboration." eyebrow="Sponsors" />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <SponsorBar />
          <div className="space-y-5 rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-card)]">
            {sponsorTiers.map((tier) => (
              <div key={tier.id}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">{tier.label}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {tier.partners.map((name) => (
                    <span key={name} className="rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-background)] px-4 py-2 text-sm text-[var(--color-foreground)]">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <Button asChild size="lg" variant="gradient" className="w-full">
              <Link to="/contact">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_84%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.06),transparent_86%)]">
        <SectionHeading title="Gallery Preview" subtitle="A refined glimpse at the moments and presentations coming to IGNITO." eyebrow="Gallery" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <GalleryItem />
            <GalleryItem />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/events">View Gallery</Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-[var(--color-background)]">
        <SectionHeading title="Student Testimonials" subtitle="Hear from participants who experienced the IGNITO momentum." eyebrow="Testimonials" />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section className="bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_80%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.06),transparent_70%)]">
        <SectionHeading title="FAQ" subtitle="Get the answers you need before attending IGNITO 2026." eyebrow="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)]">
              <AccordionTrigger className="px-6 py-5 text-[var(--color-foreground)]">{faq.question}</AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-[var(--color-muted)]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section className="relative overflow-hidden bg-[var(--color-background)]">
        <AnimatedBackground variant="stars" className="opacity-40" />
        <div id="register" className="relative rounded-[3rem] border border-[var(--color-card-border)] bg-[var(--color-card)]/90 p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-primary)]">Final Call</p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl">
                Ready to Explore IGNITO 2026?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                Join the next generation of innovators for an unforgettable conference experience built around creative technology and thoughtful exploration.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" variant="gradient" className="w-full sm:w-auto">
                  <Link to="#register">Register Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link to="/events">Explore Events</Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,rgba(124,58,237,0.16),rgba(236,72,153,0.08))] p-8">
              <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-[rgba(255,255,255,0.18)] blur-2xl" />
              <div className="absolute right-8 bottom-10 h-16 w-16 rounded-full bg-[rgba(255,255,255,0.16)] blur-2xl" />
              <div className="relative h-56 rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.18)] p-6">
                <div className="h-full rounded-[1.75rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
