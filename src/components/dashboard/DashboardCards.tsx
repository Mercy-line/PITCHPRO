import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { dashboardCards } from '@/data/dashboard';
import { DashboardCardProps } from '@/types/dashboard';

function DashboardCard({ title, description, icon: Icon, to, color, bg }: DashboardCardProps) {
  return (
    <Link to={to} className="block group">
      <div className="glass-panel p-8 h-full transition-all duration-300 group-hover:border-lime-500/30 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.1)]">
        <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-medium text-[var(--text-main)] mb-3 uppercase tracking-wider">{title}</h3>
        <p className="text-[var(--text-muted)] font-light leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function DashboardCards({ container }: { container: any }) {
  return (
    <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardCards.map(card => (
        <DashboardCard key={card.title} {...card} />
      ))}
    </motion.div>
  );
}
