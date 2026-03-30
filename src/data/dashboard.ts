// data.ts
import { Sparkles, Mic, BookOpen, PlayCircle } from 'lucide-react';
import { DashboardCardProps } from './types';

export const dashboardCards: DashboardCardProps[] = [
  {
    title: "PITCH PREP",
    description: "AI-powered pitch generator from your technical docs.",
    icon: Sparkles,
    to: "/app/prep",
    color: "text-lime-600 dark:text-lime-400",
    bg: "bg-lime-500/10",
  },
  {
    title: "PRACTICE STUDIO",
    description: "Record, time, and review your pitch delivery.",
    icon: Mic,
    to: "/app/practice",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "LEARN & GROW",
    description: "Books, interactive games, and daily routines.",
    icon: BookOpen,
    to: "/app/learn",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    title: "COMMUNITY",
    description: "Watch top speakers and share your progress.",
    icon: PlayCircle,
    to: "/app/community",
    color: "text-yellow-600 dark:text-yellow-500",
    bg: "bg-yellow-500/10",
  },
];

export const whyPitchCraftPoints: string[] = [
  'Understand complex systems in minutes',
  'Get catchy introductions tailored to your audience',
  'Learn the dos and don\'ts with concrete examples',
  'Practice with a built-in timer and interactive games'
];