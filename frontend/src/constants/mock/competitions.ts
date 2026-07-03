export interface CompetitionItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  prize: string;
  duration: string;
  difficulty?: string;
  team_size?: string;
  leaderboard?: { college: string; rank: string }[];
  rules?: string[];
  judges?: { name: string; role?: string }[];
  resources?: { label: string; url?: string }[];
  image_path?: string;
  image_prompt?: string;
}

export const competitions: CompetitionItem[] = [
  {
    id: 'c-001',
    slug: 'space-ux-studio',
    category: 'Design',
    title: 'Space UX Studio',
    description: 'Prototype immersive user experiences for exploration and collaboration tools with a polished presentation layer.',
    prize: '₹50,000',
    duration: '2 days',
    difficulty: 'Intermediate',
    team_size: '2–3 members',
    leaderboard: [
      { college: 'MEC Kochi', rank: '1st' },
      { college: 'CET Trivandrum', rank: '2nd' },
      { college: 'NIT Calicut', rank: '3rd' },
    ],
    rules: ['Teams up to 3', 'Prototype required', 'Presentation: 10 minutes'],
    image_prompt: 'A polished UI concept board floating in a serene observatory with subtle celestial geometry.',
  },
  {
    id: 'c-002',
    slug: 'security-capture-the-flag',
    category: 'Cyber',
    title: 'Security Capture the Flag',
    description: 'Solve real-world security challenges across web, crypto, and forensic domains under timed pressure.',
    prize: '₹75,000',
    duration: '12 hrs',
    difficulty: 'Advanced',
    team_size: 'Solo or duo',
    leaderboard: [
      { college: 'GEC Thrissur', rank: '1st' },
      { college: 'MACE Kothamangalam', rank: '2nd' },
      { college: 'SCMS Cochin', rank: '3rd' },
    ],
    rules: ['Solo or teams up to 2', 'Respect the judge environment'],
    image_prompt: 'A minimal cyber vault encased in glowing shields and fine starline details.',
  },
  {
    id: 'c-003',
    slug: 'orbital-ai-sprint',
    category: 'AI',
    title: 'Orbital AI Sprint',
    description: 'Design and present a compact AI-driven solution focused on accessibility, reasoning, or creative automation.',
    prize: '₹40,000',
    duration: '1 day',
    difficulty: 'Intermediate',
    team_size: '2–4 members',
    leaderboard: [
      { college: 'RIT Kottayam', rank: '1st' },
      { college: 'CUSAT', rank: '2nd' },
      { college: 'MEC Kochi', rank: '3rd' },
    ],
    image_prompt: 'A refined neural sphere orbiting a minimal constellation network with soft purple accents.',
  },
  {
    id: 'c-004',
    slug: 'autonomous-relay-challenge',
    category: 'Robotics',
    title: 'Autonomous Relay Challenge',
    description: 'Create a reliable autonomous machine that completes a controlled relay sequence with minimal human intervention.',
    prize: '₹60,000',
    duration: '2 days',
    difficulty: 'Advanced',
    team_size: '2–4 members',
    leaderboard: [
      { college: 'MEC Kochi', rank: '1st' },
      { college: 'NIT Calicut', rank: '2nd' },
    ],
    image_prompt: 'An elegant robotics platform tracing orbital paths across a calm blueprint field.',
  },
  {
    id: 'c-005',
    slug: 'constellation-web-jam',
    category: 'Web',
    title: 'Constellation Web Jam',
    description: 'Build a refined web experience around a narrative theme and ship a working prototype under time pressure.',
    prize: '₹35,000',
    duration: '6 hrs',
    difficulty: 'Beginner',
    team_size: '2 members',
    leaderboard: [
      { college: 'MACE Kothamangalam', rank: '1st' },
      { college: 'SCMS Cochin', rank: '2nd' },
    ],
    image_prompt: 'An artful web interface composition suspended over a subtle nebula glow.',
  },
  {
    id: 'c-006',
    slug: 'cosmic-drone-dash',
    category: 'Electronics',
    title: 'Cosmic Drone Dash',
    description: 'Pilot a compact drone system through a precision route with adaptive control and live problem solving.',
    prize: '₹45,000',
    duration: '1 day',
    difficulty: 'Intermediate',
    team_size: '2–3 members',
    leaderboard: [
      { college: 'CUSAT', rank: '1st' },
      { college: 'GEC Thrissur', rank: '2nd' },
    ],
    image_prompt: 'Thin-lined drones following luminous checkpoints through an observatory atmosphere.',
  },
  {
    id: 'c-007',
    slug: 'blueprint-build-off',
    category: 'CAD',
    title: 'Blueprint Build-Off',
    description: 'Turn a design brief into a polished engineering concept with thoughtful structure, clarity, and visual precision.',
    prize: '₹30,000',
    duration: '1 day',
    difficulty: 'Beginner',
    team_size: '2 members',
    leaderboard: [
      { college: 'MEC Kochi', rank: '1st' },
      { college: 'RIT Kottayam', rank: '2nd' },
    ],
    image_prompt: 'A precise satellite schematic drawn with quiet celestial geometry and blueprint lines.',
  },
  {
    id: 'c-008',
    slug: 'nova-hack-relay',
    category: 'Hackathon',
    title: 'Nova Hack Relay',
    description: 'Create a useful product prototype under a creative theme with a strong emphasis on technical execution and narrative.',
    prize: '₹55,000',
    duration: '8 hrs',
    difficulty: 'Intermediate',
    team_size: '2–4 members',
    leaderboard: [
      { college: 'MEC Kochi', rank: '1st' },
      { college: 'NIT Calicut', rank: '2nd' },
      { college: 'CET Trivandrum', rank: '3rd' },
    ],
    image_prompt: 'A delicate holographic terminal with orbiting panels and a restrained space-tech mood.',
  },
];

export default competitions;
