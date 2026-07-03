export interface FeaturedEvent {
  id: string;
  category: string;
  title: string;
  description: string;
  venue: string;
  duration: string;
  difficulty: string;
  image: string;
  badge: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutCard {
  id: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SponsorTier {
  id: string;
  label: string;
  partners: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  college: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const featuredEvents: FeaturedEvent[] = [
  {
    id: 'event-1',
    category: 'Technical Showcase',
    title: 'Autonomous Systems Sprint',
    description: 'Build and deploy AI-driven robots that navigate a dynamic campus environment.',
    venue: 'Innovation Lab A',
    duration: '3 days',
    difficulty: 'Advanced',
    image: '',
    badge: 'Featured',
  },
  {
    id: 'event-2',
    category: 'Hackathon',
    title: 'Future Interfaces Challenge',
    description: 'Design elegant human-centered interfaces with futuristic controls and voice flows.',
    venue: 'Tech Pavilion',
    duration: '24 hrs',
    difficulty: 'Intermediate',
    image: '',
    badge: 'Featured',
  },
  {
    id: 'event-3',
    category: 'Design Sprint',
    title: 'Space UX Studio',
    description: 'Prototype immersive experiences for exploration, collaboration, and presentation.',
    venue: 'Design Forum',
    duration: '2 days',
    difficulty: 'Beginner',
    image: '',
    badge: 'Featured',
  },
  {
    id: 'event-4',
    category: 'Build Lab',
    title: 'Green Circuits Workshop',
    description: 'Create sustainable hardware prototypes with motion, sensors, and power efficiency.',
    venue: 'Electronics Hub',
    duration: '1 day',
    difficulty: 'All levels',
    image: '',
    badge: 'Featured',
  },
  {
    id: 'event-5',
    category: 'Cyber Quest',
    title: 'Security Capture the Flag',
    description: 'Solve real-world cyber defense challenges with practical attack and protection tactics.',
    venue: 'Cyber Studio',
    duration: '12 hrs',
    difficulty: 'Advanced',
    image: '',
    badge: 'Limited',
  },
  {
    id: 'event-6',
    category: 'Networking Lab',
    title: 'Collaborative Innovation Forum',
    description: 'Meet industry mentors and peers through curated discovery sessions and roundtables.',
    venue: 'Galaxy Hall',
    duration: '4 hrs',
    difficulty: 'Open',
    image: '',
    badge: 'Live',
  },
];

export const categoryCards: CategoryCard[] = [
  { id: 'ai', title: 'Artificial Intelligence', description: 'Machine learning, vision, and intelligent systems.', icon: 'BrainCircuit' },
  { id: 'robotics', title: 'Robotics', description: 'Autonomous vehicles, manipulators, and mechatronics.', icon: 'Bug' },
  { id: 'hackathons', title: 'Hackathons', description: 'Fast-paced product design and collaborative problem solving.', icon: 'Cpu' },
  { id: 'cyber', title: 'Cyber Security', description: 'Secure systems, cryptography, and threat response.', icon: 'ShieldCheck' },
  { id: 'workshops', title: 'Workshops', description: 'Hands-on learning for tools, hardware, and design craft.', icon: 'Lightbulb' },
  { id: 'design', title: 'Design', description: 'UX, product, motion, and brand storytelling labs.', icon: 'Sparkles' },
  { id: 'gaming', title: 'Gaming', description: 'Immersive gameplay, AR, and interactive systems.', icon: 'Flame' },
  { id: 'electronics', title: 'Electronics', description: 'Circuit design, sensors, and embedded innovation.', icon: 'Atom' },
  { id: 'iot', title: 'IoT', description: 'Connected devices, smart systems, and real-time data.', icon: 'DeviceMobile' },
  { id: 'quiz', title: 'Quiz', description: 'High-energy knowledge rounds with interactive prizes.', icon: 'Star' },
];

export const aboutCards: AboutCard[] = [
  { id: 'mission', title: 'Mission', description: 'Empower future leaders through collaborative tech experiences and real-world projects.' },
  { id: 'vision', title: 'Vision', description: 'Create a world-class forum where innovation, engineering, and creativity converge.' },
  { id: 'values', title: 'Core Values', description: 'Curiosity, craft, community, integrity, and impact drive every moment.' },
];

export const timelineSteps: TimelineStep[] = [
  { id: 'learn', title: 'Learn', description: 'Discover emerging fields and sharpen new skills.', icon: 'Book' },
  { id: 'build', title: 'Build', description: 'Create bold concepts with hands-on development support.', icon: 'Cpu' },
  { id: 'compete', title: 'Compete', description: 'Showcase solutions and test your abilities on stage.', icon: 'Rocket' },
  { id: 'network', title: 'Network', description: 'Connect with mentors, peers, and recruiting partners.', icon: 'Users' },
  { id: 'innovate', title: 'Innovate', description: 'Push boundaries with research-driven prototypes.', icon: 'Lightbulb' },
  { id: 'launch', title: 'Launch', description: 'Share your work through presentations and showcases.', icon: 'Globe2' },
];

export const sponsorTiers: SponsorTier[] = [
  { id: 'gold', label: 'Gold Partners', partners: ['AstroTech Labs', 'Nova Systems', 'Quantum Forge'] },
  { id: 'silver', label: 'Silver Partners', partners: ['Orbit Works', 'Luna Dynamics', 'Velocity Stack'] },
  { id: 'community', label: 'Community Allies', partners: ['Kochi Makers', 'CodeCampus', 'Design Hive'] },
];

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Ananya Menon', college: 'Model Engineering College', quote: 'IGNITO transformed the way I think about technology. The workshops were inspiring and the mentors were incredibly supportive.', rating: 5 },
  { id: 't2', name: 'Rohan Sharma', college: 'College of Engineering Trivandrum', quote: 'The energy of the community and the hands-on sessions made this the most memorable techfest I have attended.', rating: 5 },
  { id: 't3', name: 'Priya Nair', college: 'GEC Thrissur', quote: 'From AI to design, every event felt polished and ambitious. It was a perfect blend of learning and exploration.', rating: 4 },
];

export const faqs: FAQItem[] = [
  { id: 'faq1', question: 'How can I register for IGNITO 2026?', answer: 'Visit the registration page, choose the events you want to participate in, and complete the ticket form. Confirmation is sent instantly via email.' },
  { id: 'faq2', question: 'Who can participate in the competitions?', answer: 'Students from all disciplines are welcome. Events are designed for beginners through advanced participants, with special tracks for teams and solo entries.' },
  { id: 'faq3', question: 'Is accommodation available for attendees?', answer: 'Yes. We offer nearby accommodation recommendations and partner hostel options for visiting students.' },
  { id: 'faq4', question: 'Will I receive a certificate?', answer: 'All participants receive participation certificates, and top performers earn recognition awards and exclusive opportunities.' },
  { id: 'faq5', question: 'What is the team size requirement?', answer: 'Team sizes vary by event. Most competitions allow 2–4 members, while some hackathons also support solo participation.' },
  { id: 'faq6', question: 'What is the schedule format?', answer: 'IGNITO 2026 features keynote sessions, parallel workshops, and showcase hours across four days, with clear start and end times for each event.' },
  { id: 'faq7', question: 'Where is the venue located?', answer: 'The main venue is Model Engineering College, Kochi, with select events held across connected campus spaces and partner labs.' },
];
