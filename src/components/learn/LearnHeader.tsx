import { BookOpen } from 'lucide-react';

export default function LearnHeader() {
  return (
    <header className="glass-panel p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <h1 className="text-4xl font-medium tracking-tight uppercase flex items-center gap-4 relative z-10 text-[var(--text-main)]">
        <BookOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
        Learn & Grow
      </h1>
      <p className="text-[var(--text-muted)] mt-4 font-light uppercase tracking-widest text-sm relative z-10">
        Resources, games, and routines to elevate your speaking skills.
      </p>
    </header>
  );
}
