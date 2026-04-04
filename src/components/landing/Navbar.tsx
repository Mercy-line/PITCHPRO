import { Link } from 'react-router-dom';
import { Mic, Sun, Moon } from 'lucide-react';

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
  onContact: () => void;
}

export default function Navbar({ isDark, toggleTheme, onContact }: Props) {
  return (
    <header className="flex justify-between items-center z-20 p-6 md:p-12">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center shadow-lg shadow-lime-500/20">
          <Mic className="w-5 h-5 text-zinc-900" />
        </div>
        <span className="text-xl font-medium tracking-widest uppercase">
          Pitch<span className="italic-serif text-lime-600 dark:text-lime-400">Craft</span>
        </span>
      </div>

      <nav className="hidden md:flex gap-8 micro-label items-center">
        <a href="#about" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">ABOUT</a>

        <button onClick={onContact} className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors uppercase tracking-[0.1em]">
          CONTACT
        </button>

        <button onClick={toggleTheme} className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <Link to="/app/dashboard" className="glass-button-primary !py-3 !px-6">
          GET STARTED
        </Link>
      </nav>

      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleTheme} className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <Link to="/app/dashboard" className="glass-button-primary !py-2 !px-4 !text-[10px]">
          GET STARTED
        </Link>
      </div>
    </header>
  );
}