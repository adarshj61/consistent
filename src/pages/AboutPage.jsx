import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Calendar,
  ExternalLink,
  GraduationCap,
  Target,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { founderData } from '../data/founderData';

export default function AboutPage({ onOpenEnquiry }) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Consistent Academy",
    "description": "Learn about The Consistent Academy's mission, pedagogical philosophy, and founder Vidya Wankhade.",
    "url": "https://www.theconsistentacademy.in/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Vidya Wankhade",
      "jobTitle": "Founder & IELTS Master Trainer",
      "worksFor": {
        "@type": "Organization",
        "name": "The Consistent Academy"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="About Us | The Consistent Academy & Founder Vidya Wankhade"
        description="Discover the pedagogical philosophy, 18+ year history, and published books of Vidya Wankhade, founder of The Consistent Academy in Pune."
        canonical="https://www.theconsistentacademy.in/about"
        schema={aboutSchema}
      />

      {/* Page Header */}
      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Institutional Background &amp; Leadership
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight">
            About The Consistent Academy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded on the principle that genuine linguistic competence and career readiness are forged through deliberate, daily consistency under expert human guidance.
          </p>
        </div>
      </section>

      {/* Core Mission & Philosophy */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Educational Philosophy
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white leading-tight">
                Why "Consistency" Governs Every Classroom
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                In an educational landscape increasingly dominated by automated apps and superficial test shortcuts, <strong>The Consistent Academy</strong> provides an academically disciplined, research-backed training environment.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Language is an embodied habit rather than an abstract subject. Whether an undergraduate preparing for IELTS Academic, a professional preparing for corporate interviews, or an educator seeking formal certification, training is organized around measurable, continuous practice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Target size={20} className="text-brand-primary dark:text-purple-400 mb-2" />
                  <h3 className="font-heading font-bold text-sm text-slate-950 dark:text-white">
                    Enduring Competence
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Developing receptive and productive skills that persist beyond the examination date into professional life.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Users size={20} className="text-teal-600 dark:text-teal-400 mb-2" />
                  <h3 className="font-heading font-bold text-sm text-slate-950 dark:text-white">
                    Individual Mentorship
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Capped batch sizes ensuring that every essay, presentation, and mock test is personally critiqued.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="lg:col-span-6">
              <figure className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <img
                  src="/assets/gallery/v8.jpeg"
                  alt="Faculty and student interaction at The Consistent Academy"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  width="600"
                  height="384"
                />
                <figcaption className="p-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-semibold text-brand-primary dark:text-purple-400 uppercase tracking-wider block">
                    Pedagogical Standard
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    "When students engage in deliberate practice with constructive feedback every single day, communicative ease becomes second nature."
                  </p>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Detailed Profile */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors" id="founder-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
              Academic Leadership
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white mt-1">
              Vidya Wankhade
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Educator, IELTS Master Trainer, Academic Director, and Author of three published reference works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Founder Photo & Credentials Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-80 object-cover object-top rounded-lg mb-4"
                  loading="lazy"
                  width="400"
                  height="320"
                />
                <h3 className="font-heading font-bold text-lg text-slate-950 dark:text-white">
                  {founderData.name}
                </h3>
                <p className="text-xs font-semibold text-brand-primary dark:text-purple-400 mt-0.5">
                  {founderData.role}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700/80 text-left space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Verified Qualifications
                  </span>
                  {founderData.qualifications.map((q, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Founder Narrative & Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {founderData.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Career Milestone Timeline */}
              <div className="pt-4">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-950 dark:text-white mb-6 flex items-center gap-2">
                  <Calendar size={18} className="text-brand-primary dark:text-purple-400" />
                  <span>Academic Milestones</span>
                </h3>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                  {founderData.timeline.map((item, idx) => (
                    <div key={idx} className="relative flex items-start gap-5 pl-1">
                      <div className="w-6 h-6 rounded-full bg-brand-primary dark:bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 ring-4 ring-white dark:ring-slate-900">
                        •
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-extrabold text-brand-primary dark:text-purple-400 bg-brand-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                            {item.year}
                          </span>
                          <span className="text-xs font-bold text-slate-950 dark:text-white">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Published Books Showcase */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors" id="books">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
              Published Literature
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white mt-1">
              Books Authored by Vidya Wankhade
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
              Available nationally across major platforms including Amazon, Flipkart, and Evincepub Publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderData.books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="p-6 bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} Book Cover`}
                      className="h-64 object-contain rounded shadow-sm"
                      loading="lazy"
                      width="180"
                      height="256"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      ISBN/ID: {book.isbn}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-primary dark:text-purple-400">
                      {book.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                      {book.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 mt-4">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                    Available Online:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {book.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1.5 rounded transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={11} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-14 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
            Schedule a Direct Mentorship Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Admissions are open for upcoming IELTS, Corporate, and Young Learner cohorts. Meet Vidya Wankhade for an initial diagnostic consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Request Consultation
            </button>
            <Link
              to="/courses"
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Explore Course Prospectus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
