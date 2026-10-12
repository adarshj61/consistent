import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Navigation,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact The Consistent Academy",
    "description": "Reach The Consistent Academy admissions team in Pune, Maharashtra. Email, Google Maps directions, and online enquiry form.",
    "url": "https://www.theconsistentacademy.in/contact",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "The Consistent Academy",
      "email": "theconsistentacademy@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us & Directions | The Consistent Academy Pune"
        description="Get in touch with The Consistent Academy admissions desk. Email: theconsistentacademy@gmail.com. Pune, Maharashtra."
        canonical="https://www.theconsistentacademy.in/contact"
        schema={contactSchema}
      />

      {/* Header */}
      <section className="bg-white dark:bg-slate-900 py-8 sm:py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Admissions &amp; Academic Inquiries
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight">
            Contact The Consistent Academy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding upcoming batches, diagnostic testing, or syllabus outlines? Connect directly with our Pune academic center.
          </p>
        </div>
      </section>

      {/* Main Contact Section — Balanced Two-Column Layout */}
      <section className="py-8 sm:py-12 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Column: Academic Enquiry Contact Form */}
            <div className="w-full">
              <ContactForm />
            </div>

            {/* Right Column: Direct Contact Info, Interactive Map & Consultation Hours */}
            <div className="w-full space-y-6">
              
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Admissions Email Card */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm transition-colors">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-400 flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        Admissions Email
                      </span>
                      <a
                        href="mailto:theconsistentacademy@gmail.com"
                        className="font-heading font-bold text-sm sm:text-base text-slate-950 dark:text-white hover:text-brand-primary dark:hover:text-purple-400 transition-colors block mt-0.5 break-all"
                      >
                        theconsistentacademy@gmail.com
                      </a>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block leading-relaxed">
                        Official inquiries, syllabus outlines &amp; fee brochures
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href="mailto:theconsistentacademy@gmail.com"
                      className="text-xs font-semibold text-brand-primary dark:text-purple-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Compose Email</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Academy Campus Card */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm transition-colors">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        Academy Campus
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white mt-0.5">
                        Pune, Maharashtra
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block leading-relaxed">
                        Classroom training, seminars &amp; mock assessments
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Get Directions</span>
                      <Navigation size={12} />
                    </a>
                  </div>
                </div>

              </div>

              {/* Embedded Google Map */}
              <MapEmbed />

              {/* Academic Consultation & Counseling Hours Card */}
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        Counseling Hours
                      </span>
                      <h3 className="font-heading font-bold text-base text-slate-950 dark:text-white">
                        Mon – Sat, 9am – 7pm IST
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-primary dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded border border-purple-200/60 dark:border-purple-800/60">
                    Admissions Desk Open Weekly
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-950 dark:text-white font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    <span>Academic Consultation Hours</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="font-medium">Monday – Friday</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">9:00 AM – 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="font-medium">Saturday</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">9:00 AM – 5:00 PM IST</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium">Sunday</span>
                      <span className="text-brand-primary dark:text-purple-400 font-medium">By Prior Appointment Only</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                  In-person &amp; online video consultation by appointment. Online video consultations and in-person Pune campus sessions available for international candidates and local batches.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
