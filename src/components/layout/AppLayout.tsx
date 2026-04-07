import { Outlet } from 'react-router-dom';
import { useLayout } from '../../hooks/useLayout';
import { navItems } from '../../data/layout';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

export default function AppLayout() {
  const {
    isMobileMenuOpen,
    isDark,
    toggleTheme,
    handleLogout,
    toggleMobileMenu,
    closeMobileMenu
  } = useLayout();

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] font-sans flex selection:bg-lime-500 selection:text-zinc-900 transition-colors duration-300">
      
      <Sidebar 
        navItems={navItems}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
      />

      <MobileNav 
        navItems={navItems}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isMenuOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
        onCloseMenu={closeMobileMenu}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-12 pt-24 lg:pt-12 scroll-smooth z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
