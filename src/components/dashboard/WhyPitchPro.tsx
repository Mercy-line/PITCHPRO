import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whyPitchProPoints } from '@/data/dashboard';

export function WhyPitchPro({ item }: { item: any }) {
  return (
    <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      
      {/* Left: Points */}
      <motion.div variants={item} className="glass-panel p-10 relative overflow-hidden group">
        <h2 className="text-2xl font-medium text-[var(--text-main)] mb-6 flex items-center gap-3 uppercase tracking-widest">
          <Target className="w-6 h-6 text-lime-600 dark:text-lime-400" />
          Why PitchPro?
        </h2>
        <p className="text-[var(--text-muted)] leading-relaxed mb-8 font-light">
          When investors or visitors arrive suddenly, the technical team looks to you. 
          PitchPro bridges the gap between complex technical documentation and a compelling, audience-tailored pitch.
        </p>
        <ul className="space-y-5">
          {whyPitchProPoints.map((text, i) => (
            <li key={i} className="flex items-start gap-4 text-[var(--text-main)] opacity-80 font-light">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0 shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
              {text}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right: Call to Action */}
      <motion.div variants={item} className="glass-panel p-10 relative overflow-hidden flex flex-col justify-center border-lime-500/20 bg-gradient-to-br from-[var(--bg-card)] to-lime-500/5">
        <div className="relative z-10">
          <h2 className="text-3xl font-medium mb-6 text-[var(--text-main)] uppercase tracking-widest">Ready to win them over?</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-md font-light leading-relaxed">
            Start by pasting your project documentation and let our AI Pro the perfect pitch strategy for you.
          </p>
          <Link 
            to="/app/prep" 
            className="glass-button-primary inline-flex w-max"
          >
            START PITCH PREP
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

    </motion.div>
  );
}