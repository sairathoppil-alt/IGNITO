export interface ImagePromptEntry {
  id: string;
  title: string;
  prompt: string;
  variant: 'robotics' | 'hackathon' | 'ai' | 'cyber' | 'web' | 'drone' | 'cad' | 'treasure' | 'ux' | 'quiz' | 'default';
}

export const eventImagePrompts: ImagePromptEntry[] = [
  {
    id: 'e-001',
    title: 'Autonomous Systems Sprint',
    prompt: 'Minimal observatory blueprint of a robot navigating orbital checkpoints with luminous waypoints.',
    variant: 'robotics',
  },
  {
    id: 'e-002',
    title: 'Future Interfaces Challenge',
    prompt: 'A calm holographic interface sphere surrounded by thin orbital rings and constellation lines.',
    variant: 'hackathon',
  },
  {
    id: 'e-003',
    title: 'Neural Mesh Lab',
    prompt: 'An elegant neural sphere threaded with delicate orbit paths and subtle purple glow.',
    variant: 'ai',
  },
  {
    id: 'e-004',
    title: 'Quantum Security Vault',
    prompt: 'A luminous cyber vault with concentric shields and a starfield backdrop.',
    variant: 'cyber',
  },
  {
    id: 'e-005',
    title: 'Constellation Web Studio',
    prompt: 'Floating browser windows linked by thin constellation lines over a pale nebula.',
    variant: 'web',
  },
  {
    id: 'e-006',
    title: 'Orbital Drone Relay',
    prompt: 'Autonomous drones tracing precise orbital routes between glowing checkpoints.',
    variant: 'drone',
  },
  {
    id: 'e-007',
    title: 'Blueprint Assembly Lab',
    prompt: 'A satellite assembly schematic laid over a precision grid and soft stellar glow.',
    variant: 'cad',
  },
  {
    id: 'e-008',
    title: 'Cosmic Relic Hunt',
    prompt: 'An ancient relic suspended above a minimal celestial landscape with subtle magical light.',
    variant: 'treasure',
  },
  {
    id: 'e-009',
    title: 'Holo UX Sprint',
    prompt: 'Floating wireframes and soft holographic layers arranged in a refined observatory scene.',
    variant: 'ux',
  },
  {
    id: 'e-010',
    title: 'Knowledge Cube',
    prompt: 'A luminous cube of knowledge with thin rings and a calm cosmic background.',
    variant: 'quiz',
  },
];

export const competitionImagePrompts: ImagePromptEntry[] = [
  {
    id: 'c-001',
    title: 'Space UX Studio',
    prompt: 'A polished UI concept board floating in a serene observatory with subtle celestial geometry.',
    variant: 'ux',
  },
  {
    id: 'c-002',
    title: 'Security Capture the Flag',
    prompt: 'A minimal cyber vault encased in glowing shields and fine starline details.',
    variant: 'cyber',
  },
  {
    id: 'c-003',
    title: 'Orbital AI Sprint',
    prompt: 'A refined neural sphere orbiting a minimal constellation network with soft purple accents.',
    variant: 'ai',
  },
  {
    id: 'c-004',
    title: 'Autonomous Relay Challenge',
    prompt: 'An elegant robotics platform tracing orbital paths across a calm blueprint field.',
    variant: 'robotics',
  },
  {
    id: 'c-005',
    title: 'Constellation Web Jam',
    prompt: 'An artful web interface composition suspended over a subtle nebula glow.',
    variant: 'web',
  },
  {
    id: 'c-006',
    title: 'Cosmic Drone Dash',
    prompt: 'Thin-lined drones following luminous checkpoints through an observatory atmosphere.',
    variant: 'drone',
  },
  {
    id: 'c-007',
    title: 'Blueprint Build-Off',
    prompt: 'A precise satellite schematic drawn with quiet celestial geometry and blueprint lines.',
    variant: 'cad',
  },
  {
    id: 'c-008',
    title: 'Nova Hack Relay',
    prompt: 'A delicate holographic terminal with orbiting panels and a restrained space-tech mood.',
    variant: 'hackathon',
  },
];
