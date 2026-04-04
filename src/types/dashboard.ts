// types.ts
import { LucideIcon } from "lucide-react";

export interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: string;
  bg: string;
}
