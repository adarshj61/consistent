import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const essentialLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Assessments', path: '/tests' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Academy Identity & Social Contact Row */}
          <div className="max-w-md space-y-3">
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg p-0.5"
              aria-label="The Consistent Academy"
            >
              <img
                src="/assets/logo2.png"
                alt="The Consistent Academy Logo"
                className="w-9 h-9 object-contain rounded-lg"
                width="36"
                height="36"
              />
              <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                The Consistent <span className="text-purple-400">Academy</span>
              </span>
            </Link>

            {/* Social Media & Direct Contact Icons */}
            <div className="flex items-center gap-3 pt-0.5">
              <a
                href="https://www.instagram.com/the_consistent_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Instagram"
                title="The Consistent Academy on Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://chat.whatsapp.com/Kw2YbntkWMqG66MVI9xSJq?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="WhatsApp"
                title="The Consistent Academy WhatsApp Community"
              >
                <WhatsAppIcon size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/the-consistent-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="LinkedIn"
                title="The Consistent Academy on LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:theconsistentacademy@gmail.com"
                className="text-slate-400 hover:text-purple-400 transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Email"
                title="Email The Consistent Academy"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <a
                href="mailto:theconsistentacademy@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail size={13} className="text-purple-400" />
                <span>theconsistentacademy@gmail.com</span>
              </a>
              <span className="text-slate-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin size={13} className="text-teal-400" />
                <span>Pune, Maharashtra</span>
              </span>
            </div>
          </div>

          {/* Compact Essential Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs sm:text-sm">
            {essentialLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

        </div>

        {/* Bottom Bar: Copyright, Attribution & Mandatory ThinkBuild Developer Credit */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap">
            <p>
              &copy; {currentYear} The Consistent Academy. All rights reserved.
            </p>
          </div>

          {/* Mandatory ThinkBuild Developer Credit Badge */}
          <div className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <img
              src="/assets/thinkbuild-logo.png"
              alt="ThinkBuild Logo"
              className="w-4 h-4 object-contain"
              width="16"
              height="16"
            />
            <span className="text-slate-400">Developed and Maintained by</span>
            <a
              href="https://www.thinkbuild.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 font-semibold inline-flex items-center gap-1 transition-colors underline decoration-purple-500/50 underline-offset-2"
              title="ThinkBuild - Leading IT Services & Software Development Company"
            >
              <span>ThinkBuild</span>
              <ExternalLink size={11} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
