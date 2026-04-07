import { Play } from 'lucide-react';
import { ProTip } from '../../types/practice';

interface ProTipsSidebarProps {
  tips: ProTip[];
}

export default function ProTipsSidebar({ tips }: ProTipsSidebarProps) {
  return (
    <div className="glass-panel p-8">
      <h3 className="text-lg font-medium mb-6 uppercase tracking-widest flex items-center gap-3 text-[var(--text-main)]">
        <Play className="w-5 h-5 text-lime-600 dark:text-lime-400" />
        Pro Tips
      </h3>
      <ul className="space-y-6">
        {tips.map((tip, i) => (
          <li key={i} className="border-l-2 border-lime-500/30 pl-4">
            <h4 className="text-[var(--text-main)] font-medium text-sm uppercase tracking-wider mb-1">{tip.title}</h4>
            <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{tip.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
