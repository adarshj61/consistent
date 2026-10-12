import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

export default function SkiperThemeToggle({ size = 'md', className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const isSmall = size === 'sm';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary ${
        isDark
          ? 'bg-slate-800/90 border-slate-700 text-amber-400 hover:bg-slate-700 hover:text-amber-300'
          : 'bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
      } ${isSmall ? 'w-8 h-8' : 'w-9 h-9'} ${className}`}
    >
      {isDark ? (
        <Sun size={isSmall ? 15 : 17} className="transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={isSmall ? 15 : 17} className="transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
