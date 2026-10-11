import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ArrowRight, BookOpen } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Assessments', path: '/tests' },
    { name: 'Club', path: '/club' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+917709109830"
              className="flex items-center gap-2 hover:text-white transition-colors"
              title="Call The Consistent Academy"
            >
              <Phone size={13} className="text-purple-400" />
              <span>+91 77091 09830</span>
            </a>
            <a
              href="mailto:theconsistentacademy@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              title="Email Admissions"
            >
              <Mail size={13} className="text-teal-400" />
              <span>theconsistentacademy@gmail.com</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Pune, Maharashtra</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-purple-300 bg-purple-950/60 border border-purple-800/60 px-2 py-0.5 rounded-full">
              New Batches Commencing Every Week
            </span>
            <Link
              to="/courses"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Explore Programs</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft-md border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-purple rounded-lg p-1"
            aria-label="The Consistent Academy Homepage"
          >
            <img
              src="/assets/logo2.png"
              alt="The Consistent Academy Logo"
              className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              width="40"
              height="40"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                The Consistent <span className="text-brand-purple">Academy</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                English &amp; IELTS Mastery • Pune
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-primary bg-brand-50 font-semibold'
                      : 'text-slate-640 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917709109830"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone size={14} className="text-brand-primary" />
              <span>+91 77091 09830</span>
            </a>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
              aria-label="Open Course Enquiry Form"
            >
              <span>Enquire Now</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 max-h-[calc(100vh-70px)] overflow-y-auto animate-fadeIn"
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
                        ? 'text-brand-primary bg-brand-50 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+917709109830"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 bg-slate-100 py-3 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <Phone size={16} className="text-brand-primary" />
                <span>Call +91 77091 09830</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <span>Free Consultation / Enquiry</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
