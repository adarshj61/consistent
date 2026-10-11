import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Navigation,
  CheckCircle2,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import MapEmbed from '../components/MapEmbed';

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact The Consistent Academy",
    "description": "Reach The Consistent Academy admissions team in Pune, Maharashtra. Telephone, email, Google Maps directions, and enquiry form.",
    "url": "https://www.theconsistentacademy.in/contact",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "The Consistent Academy",
      "telephone": "+91 77091 09830",
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
        description="Get in touch with The Consistent Academy admissions desk. Phone: +91 77091 09830, Email: theconsistentacademy@gmail.com. Pune, Maharashtra."
        canonical="https://www.theconsistentacademy.in/contact"
        schema={contactSchema}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
            Admissions &amp; Directions
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Contact The Consistent Academy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding upcoming batches, batch timings, or IELTS diagnostics? We are here to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Direct Telephone
                </span>
                <a
                  href="tel:+917709109830"
                  className="font-heading font-bold text-lg text-slate-900 hover:text-brand-primary transition-colors block mt-0.5"
                >
                  +91 77091 09830
                </a>
                <span className="text-xs text-slate-500 mt-1 block">
                  Mon – Sat, 9am to 7pm IST
                </span>
              </div>
              <a
                href="tel:+917709109830"
                className="text-xs font-semibold text-brand-primary hover:underline flex items-center gap-1"
              >
                <span>Click to Call</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Admissions Email
                </span>
                <a
                  href="mailto:theconsistentacademy@gmail.com"
                  className="font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-brand-primary transition-colors block mt-0.5 break-all"
                >
                  theconsistentacademy@gmail.com
                </a>
                <span className="text-xs text-slate-500 mt-1 block">
                  Official inquiries &amp; syllabus requests
                </span>
              </div>
              <a
                href="mailto:theconsistentacademy@gmail.com"
                className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
              >
                <span>Send Email</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  WhatsApp Support
                </span>
                <a
                  href="https://wa.me/917709109830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-bold text-lg text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                >
                  Chat on WhatsApp
                </a>
                <span className="text-xs text-slate-500 mt-1 block">
                  Instant batch queries &amp; brochure
                </span>
              </div>
              <a
                href="https://wa.me/917709109830"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1"
              >
                <span>Open WhatsApp</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Campus City
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900 mt-0.5">
                  Pune, Maharashtra
                </h3>
                <span className="text-xs text-slate-500 mt-1 block">
                  India (Offline by appointment)
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-800 hover:underline flex items-center gap-1"
              >
                <span>Get Directions</span>
                <Navigation size={12} />
              </a>
            </div>

          </div>

          {/* Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Form Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Embedded Google Map & Verified Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <MapEmbed />

              {/* Working Hours & FAQs Summary Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-base">
                  <Clock size={18} className="text-brand-primary" />
                  <span>Counseling &amp; Admission Hours</span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium">Monday – Friday</span>
                    <span className="font-bold text-slate-900">9:00 AM – 7:00 PM IST</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="font-medium">Saturday</span>
                    <span className="font-bold text-slate-900">9:00 AM – 5:00 PM IST</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium">Sunday</span>
                    <span className="text-brand-purple font-medium">By Prior Appointment Only</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                  Both weekday morning/evening batches and weekend intensive batches are available for working professionals and university students.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
