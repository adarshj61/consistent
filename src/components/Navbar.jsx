import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import SkiperThemeToggle from './ui/skiper-ui/SkiperThemeToggle';

export default function Navbar({ onOpenEnquiry }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Clean navigation links without Club
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Assessment', path: '/tests' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-3'
          : 'bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Mark Only: Verified Logo & Institution Typography */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-lg p-1"
          aria-label="The Consistent Academy Homepage"
        >
          <img
            src="/assets/logo2.png"
            alt="The Consistent Academy Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            width="40"
            height="40"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-950 dark:text-white tracking-tight leading-none">
              The Consistent <span className="text-brand-purple dark:text-purple-400">Academy</span>
            </span>
            
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-brand-primary dark:text-purple-400 bg-brand-50 dark:bg-slate-800 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs: Skiper Theme Toggle & Primary Consultation Action */}
        <div className="hidden sm:flex items-center gap-3">
          <SkiperThemeToggle />

          <button
            type="button"
            onClick={onOpenEnquiry}
            className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 cursor-pointer"
            aria-label="Open Course Enquiry Form"
          >
            <span>Enquire Now</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Button + Theme Toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <SkiperThemeToggle size="sm" />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[61px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 max-h-[calc(100vh-65px)] overflow-y-auto"
          id="mobile-navigation"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-brand-primary dark:text-purple-400 bg-brand-50 dark:bg-slate-800 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-brand-primary dark:bg-purple-600 hover:bg-brand-primary-hover text-white text-base font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Academic Consultation / Enquiry</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
