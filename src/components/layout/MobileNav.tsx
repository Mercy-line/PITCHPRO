import { NavLink, useLocation } from 'react-router-dom';
import { LogOut, Sun, Moon, X, Menu, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types/layout';

interface MobileNavProps {
  navItems: NavItem[];
  isDark: boolean;
  onToggleTheme: () => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onLogout: () => void;
}

export default function MobileNav({
  navItems,
  isDark,
  onToggleTheme,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
  onLogout
}: MobileNavProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg-panel)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-300">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
              <Mic className="w-4 h-4 text-zinc-900" />
            </div>
            <span className="text-lg font-medium tracking-widest uppercase text-[var(--text-main)]">
              Pitch<span className="italic-serif text-lime-600 dark:text-lime-400">Craft</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={onToggleTheme} className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-[var(--text-muted)] hover:text-[var(--text-main)] p-2"
              onClick={onToggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="lg:hidden fixed inset-0 z-40 bg-[var(--bg-panel)] pt-20 flex flex-col"
          >
            <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.exact}
                  onClick={onCloseMenu}
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
                onClick={() => {
                  onCloseMenu();
                  onLogout();
                }}
                className="flex items-center gap-4 text-[var(--text-muted)] hover:text-red-500 font-medium text-xs tracking-widest uppercase transition-colors w-full"
              >
                <LogOut className="w-5 h-5" />
                LOGOUT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
