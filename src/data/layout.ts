import { LayoutDashboard, FileText, BookOpen, Mic, Users } from 'lucide-react';
import { NavItem } from '../types/layout';

export const navItems: NavItem[] = [
  { to: '/app', icon: LayoutDashboard, label: 'DASHBOARD', exact: true },
  { to: '/app/pitchprep', icon: FileText, label: 'PITCH PREP' },
  { to: '/app/learn', icon: BookOpen, label: 'LEARN & GROW' },
  { to: '/app/practice', icon: Mic, label: 'PRACTICE STUDIO' },
  { to: '/app/community', icon: Users, label: 'COMMUNITY' },
];
