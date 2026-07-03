export interface EventItem {
  id: number | string;
  title: string;
  slug: string;
  description: string;
  short_description?: string | null;
  category: string;
  venue: string;
  duration: string;
  difficulty: string;
  featured: boolean;
  is_upcoming: boolean;
  date?: string;
  registration_fee?: string;
  seats_remaining?: number | string;
  tags?: string[];
  coordinator_id?: number | null;
  coordinators?: Array<{ name: string; phone?: string; email?: string }>;
  schedule?: Array<{ day: string; time: string; activity: string }>;
  rules?: string[];
  image?: string;
  image_path?: string;
  image_prompt?: string;
}

export interface CompetitionItem {
  id: number | string;
  title: string;
  slug: string;
  description: string;
  category: string;
  prize_pool: string;
  duration: string;
  featured: boolean;
  difficulty?: string;
  team_size?: string;
  leaderboard?: Array<{ college: string; rank: string }>;
  organizer_id?: number | null;
  rules?: string[];
  judges?: Array<{ name: string; role?: string }>;
  resources?: Array<{ label: string; url?: string }>;
  image_path?: string;
  image_prompt?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface RegistrationPayload {
  entity_type: string;
  entity_slug: string;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
}
