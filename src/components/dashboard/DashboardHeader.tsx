import { motion } from 'framer-motion';

export default function DashboardHeader({ item }: { item: any }) {
  return (
    <motion.header variants={item} className="glass-panel p-10 md:p-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <h1 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6 uppercase relative z-10">
        Welcome to <span className="italic-serif text-lime-600 dark:text-lime-400">PitchPro</span>
      </h1>
      <p className="text-[var(--text-muted)] text-lg max-w-3xl font-light leading-relaxed uppercase tracking-widest text-xs relative z-10">
        Your professional toolkit for mastering project pitches, conquering stage fright, and delivering with absolute clarity.
      </p>
    </motion.header>
  );
}