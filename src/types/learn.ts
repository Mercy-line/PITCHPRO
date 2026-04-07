import { LucideIcon } from 'lucide-react';

export interface Book {
  id: number;
  title: string;
  author: string;
  read: boolean;
  cover: string;
  content: string[];
  quote: string;
}

export interface Game {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface Exercise {
  id: number;
  title: string;
  done: boolean;
}
