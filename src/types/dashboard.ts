// types.ts
import { Icon } from 'lucide-react';

export interface DashboardCardProps {
  title: string;
  description: string;
  icon: Icon;
  to: string;
  color: string;
  bg: string;
}