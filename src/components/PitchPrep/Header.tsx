import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="glass-panel p-10 mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <h1 className="text-4xl font-medium tracking-tight uppercase flex items-center gap-4 relative z-10">
        <Sparkles className="w-8 h-8 text-lime-600 dark:text-lime-400" />
        AI Pitch Generator
      </h1>
      <p className="text-[var(--text-muted)] mt-4 font-light uppercase tracking-widest text-sm relative z-10">
        Paste your technical docs and let AI craft your perfect pitch strategy.
      </p>
    </header>
  );
}
