export interface Coordinator {
  id: string;
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  department?: string;
}

export const coordinators: Coordinator[] = [
  { id: 'co-1', name: 'Dr. Meera Iyer', role: 'Robotics Lead', email: 'meera@ignito.org', phone: '+91-944-000-1111' },
  { id: 'co-2', name: 'Ravi Kumar', role: 'Events Head', email: 'ravi@ignito.org', phone: '+91-944-000-2222' },
  { id: 'co-3', name: 'Ananya Menon', role: 'Design Lead', email: 'ananya@ignito.org', phone: '+91-944-000-3333' },
];

export const departments = [
  { id: 'd-1', name: 'Logistics', email: 'logistics@ignito.org', phone: '+91-944-000-4444' },
  { id: 'd-2', name: 'Sponsorship', email: 'sponsor@ignito.org', phone: '+91-944-000-5555' },
];

export const socials = [
  { id: 's-1', label: 'Instagram', url: 'https://instagram.com/ignito' },
  { id: 's-2', label: 'Twitter', url: 'https://twitter.com/ignito' },
  { id: 's-3', label: 'YouTube', url: 'https://youtube.com/ignito' },
];

export default { coordinators, departments, socials };
