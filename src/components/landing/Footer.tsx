import { Mic } from 'lucide-react';

interface Props {
  onContact: () => void;
}

export default function Footer({ onContact }: Props) {
  return (
    <footer className="px-6 md:px-12 py-12 bg-[var(--bg-panel)] flex flex-col md:flex-row justify-between items-center gap-8 z-10 border-t border-[var(--border-subtle)]">
        <div className="micro-label flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
            <Mic className="w-3 h-3 text-zinc-900" />
          </div>
          AN AI-POWERED PITCHING PLATFORM
        </div>
        <div className="flex gap-6">
          <button onClick={onContact} className="micro-label hover:text-lime-600 dark:hover:text-lime-400 transition-colors">CONTACT US</button>
          <span className="micro-label">PITCHCRAFT @ 2026</span>
        </div>
      </footer>
  );
}