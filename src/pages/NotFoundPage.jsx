import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Phone, ArrowLeft, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | The Consistent Academy"
        description="The requested page could not be located on The Consistent Academy website."
        canonical="https://www.theconsistentacademy.in/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-surface-subtle">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 bg-brand-100/80 text-brand-primary rounded-3xl flex items-center justify-center mx-auto border border-brand-200">
            <Search size={36} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Error 404
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The page you are looking for may have moved, been renamed, or does not exist. Here are helpful destinations to get you back on track:
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              to="/"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-soft-sm transition-colors flex items-center justify-center gap-2"
            >
              <Home size={15} />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/courses"
              className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen size={15} className="text-slate-500" />
              <span>Explore All Courses</span>
            </Link>

            <Link
              to="/contact"
              className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={15} className="text-slate-500" />
              <span>Contact Admissions Team</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
