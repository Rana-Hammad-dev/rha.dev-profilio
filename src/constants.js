import {
  Code,
  Layers,
  Globe,
  History,
  Mail,
  Terminal,
  Database,
  Cpu,
} from 'lucide-react';


export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About', icon: Code },
  { id: 'stack', label: 'Tech Stack', icon: Layers },
  { id: 'projects', label: 'Projects', icon: Globe },
  { id: 'journey', label: 'Journey', icon: History },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const stats = [
  { value: '12+', label: 'Projects Built', color: 'text-primary' },
  { value: '10+', label: 'Technologies', color: 'text-tertiary' },
  { value: '1+', label: 'Years Exp.', color: 'text-secondary' },
];

export const techStack = [
  {
    category: 'Frontend',
    icon: Globe,
    color: 'text-primary',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Context API', 'Framer'],
    para: "Pixel-perfect UIs that perform"
  },
  {
    category: 'Backend',
    icon: Terminal,
    color: 'text-tertiary',
    skills: ['Node.js', 'Express.js', 'Socket.io', 'REST'],
    para: "APIs built for scale"
  },
  {
    category: 'Storage',
    icon: Database,
    color: 'text-green-400',
    skills: ['MongoDB', 'Redis', 'Firebase'],
    para: "Data layers that never sleep"
  },
  {
    category: 'AI & Tools',
    icon: Cpu,
    color: 'text-primary-container',
    skills: ['AI prompt engineering ', 'Versel', 'Railway', 'GitHub/Git'],
    para: "Shipped faster, deployed smarter"
  }
];

export const projects = [
  {
    title: "Notify",
    description: "A full-stack notes app with favorites, search, and real-time sync — deployed on Vercel.",
    problem: "No simple distraction-free note app with persistent storage.",
    solution: "Built with React + Node.js, featuring dark UI, favorites filter, and instant search.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    liveUrl: "https://notify-app-six.vercel.app/",
    image: "/project1.png",
    color: 'text-tertiary'
  },
  {
    title: 'LuxeCart',
    description: 'A headless commerce solution built with Next.js and Stripe, optimized for performance and user experience.',
    problem: 'Low conversion rates due to slow checkout processes.',
    solution: 'Developed a headless commerce solution using Next.js and Stripe.',
    techStack: ['Next.js', 'PostgreSQL', 'Stripe'],
    liveUrl: "https://notify-app-six.vercel.app/",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB09se6inziAmBMqDQgDETVVOlo2NyDxcD01BpqIt3xYfG5IQFlmo1W7ZxvPfXqAiZAEDZymsCDw07-chXNOVqxymBB9KIgpqii6k9porBZNSjKhiG1f4VHDlETTeMI5q8x13YQYlV4NqcLoTA9bxVIyiyveKY2a5BkNQneMDNqLCjtSt0Q_hXyVFi6eikOeZByIeAgAD-DJmLw06F-WRf_NMlUi4z4yhL3NmbObPiW3fskLotGxgVLl-ijLayNDbEX9egEV8k3jOk',
    color: 'text-tertiary',
  }
];

export const timeline = [
  {
    period: '2026 - Present',
    role: 'Full Stack MERN Developer',
    description: 'Building production-ready web applications with React, Node.js, and MongoDB. Integrating AI APIs into real-world projects.',
    color: 'bg-primary'
  },
  {
    period: '2024 - 2025',
    role: 'Backend Developer',
    description: 'Focused on RESTful API design, Express.js architecture, and database optimization with MongoDB.',
    color: 'bg-secondary'
  },
  {
    period: '2023 - 2024',
    role: 'Frontend Developer',
    description: 'Started the MERN journey — mastering React, Tailwind CSS, and component-based UI architecture.',
    color: 'bg-tertiary'
  }
];
