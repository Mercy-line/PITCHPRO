// components/DashboardCard.tsx
import { Link } from 'react-router-dom';
import { DashboardCardProps } from '../types';

export default function DashboardCard({ title, description, icon: Icon, to, color, bg }: DashboardCardProps) {
  return (
    <Link 
      to={to}
      className="glass-card p-8 block group"
    >
      <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 border border-[var(--border-subtle)]`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <h3 className="text-lg font-medium text-[var(--text-main)] mb-3 uppercase tracking-widest">{title}</h3>
      <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{description}</p>
    </Link>
  );
}