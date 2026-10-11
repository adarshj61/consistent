import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Instagram, Linkedin, MessageCircle, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Academy Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/logo2.png"
                alt="The Consistent Academy Logo"
                className="w-11 h-11 object-contain rounded-xl bg-white p-1"
                width="44"
                height="44"
              />
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight block">
                  The Consistent <span className="text-purple-400">Academy</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  English Language &amp; IELTS Institute
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students, working professionals, and global aspirants through structured IELTS preparation, spoken English mastery, and corporate communication skills. Founded by Vidya Wankhade.
            </p>

            {/* Social & Community Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://chat.whatsapp.com/Kw2YbntkWMqG66MVI9xSJq?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                title="Join WhatsApp Community"
                aria-label="WhatsApp Community"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.instagram.com/the_consistent_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/the-consistent-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                title="Follow on LinkedIn"
                aria-label="LinkedIn Company"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  All Courses &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/tests" className="text-slate-400 hover:text-white transition-colors">
                  Proficiency Assessments
                </Link>
              </li>
              <li>
                <Link to="/club" className="text-slate-400 hover:text-white transition-colors">
                  Consistency Reading Club
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Join as Faculty / Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Popular Programs
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/ielts-toefl-pte-celpip" className="text-slate-400 hover:text-white transition-colors">
                  IELTS / TOEFL / PTE Prep
                </Link>
              </li>
              <li>
                <Link to="/courses/corporate-survival-success" className="text-slate-400 hover:text-white transition-colors">
                  Corporate Survival &amp; Success
                </Link>
              </li>
              <li>
                <Link to="/courses/crack-your-interview" className="text-slate-400 hover:text-white transition-colors">
                  Crack Your Interview
                </Link>
              </li>
              <li>
                <Link to="/courses/corporate-dining-social-etiquette" className="text-slate-400 hover:text-white transition-colors">
                  Corporate Dining Etiquette
                </Link>
              </li>
              <li>
                <Link to="/courses/communication-skill-training" className="text-slate-400 hover:text-white transition-colors">
                  Communication Skill Training
                </Link>
              </li>
              <li>
                <Link to="/courses/eelta-teaching-approach" className="text-slate-400 hover:text-white transition-colors">
                  EELTA Educator Certification
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  View All 13 Offerings &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Academy Office
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={17} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <span>
                  Pune, Maharashtra, India
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={17} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+917709109830"
                  className="hover:text-white transition-colors"
                >
                  +91 77091 09830
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={17} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:theconsistentacademy@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  theconsistentacademy@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-purple hover:text-purple-300 font-medium bg-purple-950/80 border border-purple-800/80 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <span>Google Maps &amp; Directions</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & ThinkBuild Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {currentYear} The Consistent Academy. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Pune, Maharashtra</span>
          </div>

          {/* Mandatory ThinkBuild Credit */}
          <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 px-3.5 py-1.5 rounded-full">
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
