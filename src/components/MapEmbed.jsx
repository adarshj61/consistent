import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';

export default function MapEmbed() {
  // Direct Google Maps search link for The Consistent Academy / Pune, Maharashtra
  const mapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft-sm">
      {/* Location Summary Header */}
      <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider mb-1">
            <MapPin size={15} />
            <span>Academy Headquarters</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">
            Pune, Maharashtra, India
          </h3>
          <p className="text-sm text-slate-600 mt-0.5">
            Offline workshops &amp; counseling sessions by appointment. Global batches conducted online.
          </p>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap self-start sm:self-auto"
          title="Open in Google Maps"
        >
          <Navigation size={15} />
          <span>Get Directions</span>
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-100">
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
      <div className="p-5 bg-white grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <Phone size={16} className="text-brand-purple flex-shrink-0" />
          <div>
            <span className="block font-medium text-slate-500">Telephone / WhatsApp</span>
            <a href="tel:+917709109830" className="font-semibold text-slate-900 hover:text-brand-primary">
              +91 77091 09830
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Mail size={16} className="text-brand-teal flex-shrink-0" />
          <div>
            <span className="block font-medium text-slate-500">Official Admissions</span>
            <a href="mailto:theconsistentacademy@gmail.com" className="font-semibold text-slate-900 hover:text-brand-primary truncate block">
              theconsistentacademy@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Clock size={16} className="text-brand-primary flex-shrink-0" />
          <div>
            <span className="block font-medium text-slate-500">Counseling Hours</span>
            <span className="font-semibold text-slate-900">Mon - Sat (9:00 AM - 7:00 PM IST)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
