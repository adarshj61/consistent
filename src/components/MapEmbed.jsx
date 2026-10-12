import React from 'react';
import { MapPin, Navigation, Mail, Clock } from 'lucide-react';

export default function MapEmbed() {
  // Direct Google Maps search link for The Consistent Academy / Pune, Maharashtra
  const mapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra";

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
      {/* Location Summary Header */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-brand-primary dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
            <MapPin size={14} />
            <span>Academy Headquarters</span>
          </div>
          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
            Pune, Maharashtra, India
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Offline workshops &amp; counseling sessions by appointment. Global batches conducted online.
          </p>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition-colors whitespace-nowrap self-start sm:self-auto"
          title="Open in Google Maps"
        >
          <Navigation size={13} />
          <span>Get Directions</span>
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-[210px] sm:h-[230px] bg-slate-100 dark:bg-slate-800">
        <iframe
          title="The Consistent Academy Pune Location"
          src="https://maps.google.com/maps?q=Pune,%20Maharashtra,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map showing Pune, Maharashtra location of The Consistent Academy"
        ></iframe>
      </div>

      {/* Direct Contact Bar below Map */}
      <div className="p-3.5 sm:p-4 bg-white dark:bg-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-brand-primary dark:text-purple-400 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">Headquarters</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200 truncate block">Pune, Maharashtra</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">Admissions</span>
            <a href="mailto:theconsistentacademy@gmail.com" className="font-semibold text-slate-900 dark:text-slate-200 hover:text-brand-primary dark:hover:text-purple-400 truncate block">
              theconsistentacademy@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={14} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">Counseling</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200 truncate block">Mon - Sat (9am - 7pm)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
