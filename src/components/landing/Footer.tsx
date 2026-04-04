import { Mic } from 'lucide-react';

interface Props {
  onContact: () => void;
}

export default function Footer({ onContact }: Props) {
  return (
    <footer className="px-6 md:px-12 py-12 bg-[var(--bg-panel)] flex flex-col md:flex-row justify-between items-center gap-8 z-10 border-t border-[var(--border-subtle)]">
      <div className="flex items-center gap-2">
        <Mic className="w-3 h-3" />
        AN AI-POWERED PITCHING PLATFORM
      </div>

      <div className="flex gap-6">
        <button onClick={onContact}>CONTACT US</button>
        <span>PITCHCRAFT @ 2026</span>
      </div>
    </footer>
  );
}