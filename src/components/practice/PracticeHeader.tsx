import { Camera } from 'lucide-react';

export default function PracticeHeader() {
  return (
    <header className="glass-panel p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <h1 className="text-4xl font-medium tracking-tight uppercase flex items-center gap-4 relative z-10 text-[var(--text-main)]">
        <Camera className="w-8 h-8 text-lime-600 dark:text-lime-400" />
        Practice Studio
      </h1>
      <p className="text-[var(--text-muted)] mt-4 font-light uppercase tracking-widest text-sm relative z-10">
        Record your pitch, review your delivery, and perfect your timing.
      </p>
    </header>
  );
}
