import { NavLink, useLocation } from 'react-router-dom';
import { Mic, LogOut, Sun, Moon } from 'lucide-react';
import { NavItem } from '../../types/layout';

interface SidebarProps {
  navItems: NavItem[];
  isDark: boolean;
  onToggleTheme: () => void;
  onLogout: () => void;
}

export default function Sidebar({ navItems, isDark, onToggleTheme, onLogout }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-[var(--bg-panel)] border-r border-[var(--border-subtle)] h-screen sticky top-0 transition-colors duration-300">
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center shadow-lg shadow-lime-500/20">
            <Mic className="w-5 h-5 text-zinc-900" />
          </div>
          <span className="text-xl font-medium tracking-widest uppercase text-[var(--text-main)]">
            Pitch<span className="italic-serif text-lime-600 dark:text-lime-400">Craft</span>
          </span>
        </div>
        <button onClick={onToggleTheme} className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.exact}
            className={({ isActive }) => `
              flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-medium text-xs tracking-widest uppercase
              ${isActive 
                ? 'bg-[var(--border-strong)] text-[var(--text-main)] border border-[var(--border-strong)]' 
                : 'text-[var(--text-muted)] hover:bg-[var(--border-subtle)] hover:text-[var(--text-main)]'
              }
            `}
          >
            <item.icon className={`w-5 h-5 ${location.pathname === item.to || (item.exact && (location.pathname === '/app' || location.pathname === '/app/')) ? 'text-lime-600 dark:text-lime-400' : ''}`} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-8 border-t border-[var(--border-subtle)]">
        <button 
          onClick={onLogout}
          className="flex items-center gap-4 text-[var(--text-muted)] hover:text-red-500 font-medium text-xs tracking-widest uppercase transition-colors w-full"
        >
          
          <LogOut className="w-5 h-5" />
          LOGOUT
        </button>
      </div>
    </aside>
  );
}
