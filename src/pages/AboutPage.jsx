import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Calendar,
  ExternalLink,
  GraduationCap,
  Sparkles,
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
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
            Our Story &amp; Philosophy
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            About The Consistent Academy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Founded on the conviction that genuine English fluency and career readiness are built through daily, structured consistency rather than temporary shortcuts.
          </p>
        </div>
      </section>

      {/* Core Mission & Philosophy */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                Our Purpose
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Why "Consistency" Defines Everything We Teach
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In a language training landscape dominated by superficial tips and cramming gimmicks, <strong>The Consistent Academy</strong> was founded in 2025 by Vidya Wankhade to provide an academically disciplined, research-backed training environment.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe that language is a habit, not merely a subject. Whether an undergraduate student preparing for IELTS, a fresher facing their first campus placement interview, or a corporate lead presenting to executive boards, our curriculum is engineered around measurable, progressive practice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Target size={20} className="text-brand-primary mb-2" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Real Language Competence
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Building genuine listening, speaking, reading, and writing skills that endure long past test day.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Users size={20} className="text-brand-teal mb-2" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Individual Mentorship
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Small batch sizes where every student receives line-by-line editorial feedback on writing and speech.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-soft-lg">
                <img
                  src="/assets/gallery/v8.jpeg"
                  alt="Faculty & Student Interaction at The Consistent Academy"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  width="600"
                  height="384"
                />
                <div className="p-6 bg-white border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">
                    Pedagogical Benchmark
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    "When students practice deliberately with expert feedback each day, confidence becomes their natural state."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Detailed Profile */}
      <section className="py-20 bg-surface-subtle border-b border-slate-100" id="founder-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
              Lead Faculty &amp; Founder
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2">
              Vidya Wankhade
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Educator, IELTS Master Trainer, Head of Department (Academics), and Author.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Founder Photo & Credentials Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-soft-sm text-center">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-80 object-cover object-top rounded-xl mb-4"
                  loading="lazy"
                  width="400"
                  height="320"
                />
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  {founderData.name}
                </h3>
                <p className="text-xs font-semibold text-brand-purple mt-0.5">
                  {founderData.role}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 text-left space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Verified Qualifications &amp; Accreditations
                  </span>
                  {founderData.qualifications.map((q, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Founder Narrative & Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {founderData.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Career Milestone Timeline */}
              <div className="pt-4">
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                  <Calendar size={20} className="text-brand-primary" />
                  <span>Professional Milestones &amp; History</span>
                </h3>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                  {founderData.timeline.map((item, idx) => (
                    <div key={idx} className="relative flex items-start gap-5 pl-1">
                      <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 ring-4 ring-white">
                        •
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-soft-sm flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-extrabold text-brand-purple bg-brand-50 px-2 py-0.5 rounded-md">
                            {item.year}
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
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
      <section className="py-20 bg-white border-b border-slate-100" id="books">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-purple-50 px-3 py-1 rounded-md border border-purple-200">
              Published Literature
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2">
              Books Authored by Vidya Wankhade
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Explore the published titles available on national booksellers including Amazon, Flipkart, and Evincepub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderData.books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft-sm flex flex-col justify-between hover:shadow-soft-lg transition-all"
              >
                <div>
                  <div className="p-6 bg-slate-50 flex items-center justify-center border-b border-slate-100">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} Book Cover`}
                      className="h-64 object-contain rounded-lg shadow-md"
                      loading="lazy"
                      width="180"
                      height="256"
                    />
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[11px] text-slate-500 font-mono">
                      ISBN/ID: {book.isbn}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-purple">
                      {book.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      {book.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Available Online:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {book.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 px-3 py-1.5 rounded-md transition-colors"
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
      <section className="py-16 bg-surface-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
            Learn Under Vidya Wankhade's Direct Guidance
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Admissions are open for upcoming IELTS, Corporate, and Kids batches. Schedule a personal diagnostic counseling session today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors"
            >
              Request Free Consultation
            </button>
            <Link
              to="/courses"
              className="bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-colors"
            >
              Explore Course Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
