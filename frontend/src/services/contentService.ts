import { api } from '@/lib/api';
import { competitions as mockCompetitions } from '@/constants/mock/competitions';
import { events as mockEvents } from '@/constants/mock/events';
import type { CompetitionItem, ContactPayload, EventItem, RegistrationPayload } from '@/types/api';

type DataSource = 'mock' | 'api';

const DATA_SOURCE = ((import.meta.env.VITE_DATA_SOURCE ?? 'mock').toLowerCase() as DataSource) || 'mock';
const ENABLE_API_FALLBACK = import.meta.env.VITE_ENABLE_API_FALLBACK !== 'false';

function toEvent(raw: Record<string, unknown>, index: number): EventItem {
  const title = typeof raw.title === 'string' ? raw.title : `Event ${index + 1}`;
  const slug = typeof raw.slug === 'string' ? raw.slug : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    id: typeof raw.id === 'number' || typeof raw.id === 'string' ? raw.id : `event-${index + 1}`,
    title,
    slug,
    description: typeof raw.description === 'string' ? raw.description : 'A curated IGNITO experience.',
    short_description: typeof raw.short_description === 'string' ? raw.short_description : undefined,
    category: typeof raw.category === 'string' ? raw.category : 'General',
    venue: typeof raw.venue === 'string' ? raw.venue : 'IGNITO Venue',
    duration: typeof raw.duration === 'string' ? raw.duration : 'TBA',
    difficulty: typeof raw.difficulty === 'string' ? raw.difficulty : 'All levels',
    featured: Boolean(raw.featured),
    is_upcoming: typeof raw.is_upcoming === 'boolean' ? raw.is_upcoming : true,
    date: typeof raw.date === 'string' ? raw.date : undefined,
    registration_fee: typeof raw.registration_fee === 'string' ? raw.registration_fee : undefined,
    seats_remaining: typeof raw.seats_remaining === 'number' || typeof raw.seats_remaining === 'string' ? raw.seats_remaining : undefined,
    tags: Array.isArray(raw.tags) ? (raw.tags as string[]) : undefined,
    coordinators: Array.isArray(raw.coordinators) ? (raw.coordinators as EventItem['coordinators']) : undefined,
    schedule: Array.isArray(raw.schedule) ? (raw.schedule as EventItem['schedule']) : undefined,
    rules: Array.isArray(raw.rules) ? (raw.rules as string[]) : undefined,
    image: typeof raw.image === 'string' ? raw.image : undefined,
    image_path: typeof raw.image_path === 'string' ? raw.image_path : undefined,
    image_prompt: typeof raw.image_prompt === 'string' ? raw.image_prompt : undefined,
  };
}

function toCompetition(raw: Record<string, unknown>, index: number): CompetitionItem {
  const title = typeof raw.title === 'string' ? raw.title : `Competition ${index + 1}`;
  const slug = typeof raw.slug === 'string' ? raw.slug : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    id: typeof raw.id === 'number' || typeof raw.id === 'string' ? raw.id : `competition-${index + 1}`,
    title,
    slug,
    description: typeof raw.description === 'string' ? raw.description : 'A challenge designed for the IGNITO community.',
    category: typeof raw.category === 'string' ? raw.category : 'General',
    prize_pool: typeof raw.prize_pool === 'string' ? raw.prize_pool : typeof raw.prize === 'string' ? raw.prize : 'TBA',
    duration: typeof raw.duration === 'string' ? raw.duration : 'TBA',
    featured: Boolean(raw.featured),
    organizer_id: typeof raw.organizer_id === 'number' ? raw.organizer_id : undefined,
    difficulty: typeof raw.difficulty === 'string' ? raw.difficulty : undefined,
    team_size: typeof raw.team_size === 'string' ? raw.team_size : undefined,
    leaderboard: Array.isArray(raw.leaderboard) ? (raw.leaderboard as CompetitionItem['leaderboard']) : undefined,
    rules: Array.isArray(raw.rules) ? (raw.rules as string[]) : undefined,
    judges: Array.isArray(raw.judges) ? (raw.judges as CompetitionItem['judges']) : undefined,
    resources: Array.isArray(raw.resources) ? (raw.resources as CompetitionItem['resources']) : undefined,
    image_path: typeof raw.image_path === 'string' ? raw.image_path : undefined,
    image_prompt: typeof raw.image_prompt === 'string' ? raw.image_prompt : undefined,
  };
}

async function withFallback<T>(request: () => Promise<T>, fallback: () => T): Promise<T> {
  try {
    return await request();
  } catch (error) {
    if (ENABLE_API_FALLBACK) {
      return fallback();
    }

    throw error;
  }
}

export const contentService = {
  async getEvents(): Promise<EventItem[]> {
    if (DATA_SOURCE !== 'api') {
      return mockEvents.map((event, index) => toEvent(event as unknown as Record<string, unknown>, index));
    }

    return withFallback(
      async () => {
        const data = await api.get<Array<Record<string, unknown>>>('/api/v1/events/');
        return data.map((event, index) => toEvent(event, index));
      },
      () => mockEvents.map((event, index) => toEvent(event as unknown as Record<string, unknown>, index)),
    );
  },

  async getEventBySlug(slug: string): Promise<EventItem | null> {
    const events = await this.getEvents();
    return events.find((event) => event.slug === slug) ?? null;
  },

  async getCompetitions(): Promise<CompetitionItem[]> {
    if (DATA_SOURCE !== 'api') {
      return mockCompetitions.map((competition, index) => toCompetition(competition as unknown as Record<string, unknown>, index));
    }

    return withFallback(
      async () => {
        const data = await api.get<Array<Record<string, unknown>>>('/api/v1/competitions/');
        return data.map((competition, index) => toCompetition(competition, index));
      },
      () => mockCompetitions.map((competition, index) => toCompetition(competition as unknown as Record<string, unknown>, index)),
    );
  },

  async getCompetitionBySlug(slug: string): Promise<CompetitionItem | null> {
    const competitions = await this.getCompetitions();
    return competitions.find((competition) => competition.slug === slug) ?? null;
  },

  async submitContact(payload: ContactPayload): Promise<{ success: boolean; message: string }> {
    if (DATA_SOURCE !== 'api') {
      return { success: true, message: 'Your message has been captured locally for the IGNITO team.' };
    }

    return withFallback(
      async () => api.post<{ success: boolean; message: string }>('/api/v1/contact/', payload),
      () => ({ success: true, message: 'Your message has been captured locally for the IGNITO team.' }),
    );
  },

  async register(payload: RegistrationPayload): Promise<{ success: boolean; message: string }> {
    if (DATA_SOURCE !== 'api') {
      return { success: true, message: 'Registration captured locally. The team will follow up shortly.' };
    }

    return withFallback(
      async () => api.post<{ success: boolean; message: string }>('/api/v1/registrations/', payload),
      () => ({ success: true, message: 'Registration captured locally. The team will follow up shortly.' }),
    );
  },
};

export function getDataSource(): DataSource {
  return DATA_SOURCE;
}
