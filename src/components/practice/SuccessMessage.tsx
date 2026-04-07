import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-6 border-lime-500/30 bg-lime-500/10 flex items-center gap-4"
    >
      <CheckCircle2 className="w-8 h-8 text-lime-600 dark:text-lime-400" />
      <div>
        <h3 className="text-lime-700 dark:text-lime-400 font-medium uppercase tracking-widest text-sm">Pitch Sent Successfully</h3>
        <p className="text-[var(--text-muted)] text-sm font-light mt-1">Your pitch has been saved and sent to your team for review.</p>
      </div>
    </motion.div>
  );
}
