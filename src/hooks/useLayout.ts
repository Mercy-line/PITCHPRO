import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './useTheme';

export const useLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isMobileMenuOpen,
    isDark,
    toggleTheme,
    handleLogout,
    toggleMobileMenu,
    closeMobileMenu
  };
};
