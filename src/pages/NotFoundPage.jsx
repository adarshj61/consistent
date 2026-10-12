import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Phone, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | The Consistent Academy"
        description="The requested page could not be located on The Consistent Academy website."
        canonical="https://www.theconsistentacademy.in/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 bg-brand-50 dark:bg-slate-800 text-brand-primary dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto border border-brand-200 dark:border-slate-700">
            <Search size={30} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-purple-400">
              Error 404
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The page you are looking for may have moved, been renamed, or does not exist. Here are helpful destinations to get you back on track:
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              to="/"
              className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <Home size={14} />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/courses"
              className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen size={14} className="text-slate-500 dark:text-slate-400" />
              <span>Explore All Courses</span>
            </Link>

            <Link
              to="/contact"
              className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={14} className="text-slate-500 dark:text-slate-400" />
              <span>Contact Admissions Team</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
