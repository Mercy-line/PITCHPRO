import { Users, Upload } from 'lucide-react';

interface CommunityHeaderProps {
  openUpload: () => void;
}

export default function CommunityHeader({ openUpload }: CommunityHeaderProps) {
  return (
    <header className="glass-panel p-10 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="relative z-10">
        <h1 className="text-4xl font-medium tracking-tight uppercase flex items-center gap-4">
          <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
          Community
        </h1>
        <p className="text-[var(--text-muted)] mt-4 font-light uppercase tracking-widest text-sm">
          Learn from the best and share your progress.
        </p>
      </div>
      <button 
        onClick={openUpload}
        className="glass-button-primary relative z-10"
      >
        <Upload className="w-5 h-5" />
        POST YOUR VIDEO
      </button>
    </header>
  );
}