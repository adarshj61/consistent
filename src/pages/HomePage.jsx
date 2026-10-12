import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  Award,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FAQAccordion from '../components/FAQAccordion';
import LearningEnvironmentGallery from '../components/LearningEnvironmentGallery';
import { founderData } from '../data/founderData';
import { faqData } from '../data/faqData';
import { galleryData } from '../data/galleryData';

export default function HomePage({ onOpenEnquiry }) {
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Consistent Academy",
    "url": "https://www.theconsistentacademy.in/",
    "logo": "https://www.theconsistentacademy.in/assets/logo2.png",
    "description": "Premier English language proficiency and IELTS preparation institute in Pune, Maharashtra. Founded by Vidya Wankhade.",
    "email": "theconsistentacademy@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Vidya Wankhade",
      "jobTitle": "IELTS Master Trainer & Author"
    },
    "sameAs": [
      "https://www.instagram.com/the_consistent_academy/",
      "https://www.linkedin.com/company/the-consistent-academy/"
    ]
  };

  // Curated core course highlights (4 primary offerings)
  const coreCourses = [
    {
      title: "International Test Preparation",
      subtitle: "IELTS • TOEFL • PTE Academic • CELPIP",
      description: "Targeted training for study abroad and global migration. Individual diagnostic level assessment, Cambridge materials, and line-by-line writing and speaking evaluation.",
      duration: "4 to 8 Weeks",
      slug: "ielts-toefl-pte-celpip",
      tag: "Test Prep"
    },
    {
      title: "Professional Spoken English & Fluency",
      subtitle: "Speaking Confidence • Accent Neutrality",
      description: "Overcome hesitation and internal translation lag. Practice natural conversational sentence structures, pronunciation clarity, and impromptu speaking.",
      duration: "4 to 12 Weeks",
      slug: "spoken-english-fluency",
      tag: "Spoken English"
    },
    {
      title: "Corporate Survival & Interview Coaching",
      subtitle: "Executive Presence • Group Discussions",
      description: "Master workplace communication, the PEEL argument framework for GDs, behavioral interviews using the STAR method, and executive presence.",
      duration: "2 to 6 Weeks",
      slug: "corporate-survival-success",
      tag: "Career & Leadership"
    },
    {
      title: "Young Learners & Reading Foundations",
      subtitle: "Phonics • Comprehension • Elocution",
      description: "Developmental language programs cultivating phonetic clarity, expressive public speaking, and active daily reading comprehension habits.",
      duration: "4 to 8 Weeks",
      slug: "kids-reading-club",
      tag: "Young Learners"
    }
  ];

  return (
    <>
      <SEOHead
        title="The Consistent Academy | English Language Proficiency & IELTS Coaching in Pune"
        description="Master IELTS, spoken English, corporate communication, and kids public speaking through structured, consistent mentorship with Vidya Wankhade in Pune, Maharashtra."
        canonical="https://www.theconsistentacademy.in/"
        schema={educationalOrgSchema}
      />

      {/* 1. IMMERSIVE ART-DIRECTED HERO SECTION (PRESERVED EXACTLY) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-slate-950 text-white">
        {/* Full-width authentic academy photograph background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/gallery/v5.png"
            alt="The Consistent Academy Auditorium and Masterclass"
            className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.80]"
            width="4032"
            height="3024"
          />
          {/* Deep-purple / near-black cinematic photographic veil for pristine contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-purple-950/10"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-slate-950/10"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Large, Confident, Expressive Left-Aligned Headline with Natural Line Breaks */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
              Build confidence<br />
              in the way you<br />
              communicate.
            </h1>

            {/* Concise One-Sentence Educational Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl pt-1">
              Structured IELTS preparation, corporate speech mastery, and individualized spoken English instruction in Pune — led by Vidya Wankhade.
            </p>

            {/* Two Clear Buttons Only: Primary & Secondary */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/courses"
                className="bg-brand-purple hover:bg-purple-700 text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore Courses</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="border border-white/25 hover:border-white/50 text-white hover:bg-white/10 text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 inline-flex items-center justify-center text-center"
              >
                <span>Contact the Academy</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ACADEMIC LEADERSHIP — CONCISE EDITORIAL FOUNDER INTRODUCTION */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Authentic Portrait */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 shadow-sm max-w-md mx-auto lg:max-w-none">
                <img
                  src="/assets/gallery/vidya.png"
                  alt="Vidya Wankhade, Founder and Academic Director of The Consistent Academy"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-top"
                  loading="lazy"
                  width="480"
                  height="520"
                />
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-950 dark:text-white">
                      Vidya Wankhade
                    </h3>
                    <p className="text-xs text-brand-primary dark:text-purple-400 font-medium">
                      Founder &amp; Academic Director
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Pune Campus
                  </span>
                </div>
              </div>
            </div>

            {/* Right Concise Academic Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand-primary dark:text-purple-400">
                <span className="w-2 h-2 rounded-full bg-brand-primary dark:bg-purple-400" />
                <span>Academic Leadership</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white tracking-tight leading-snug">
                Personalized Mentorship Backed by 18+ Years of Classroom Pedagogy.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded by certified IELTS Master Trainer and published author <strong>Vidya Wankhade</strong>, The Consistent Academy operates on a disciplined educational philosophy: communicative ease is an embodied habit built through continuous, deliberate practice and direct feedback.
              </p>

              {/* 3 Key Verified Credentials */}
              <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-brand-primary dark:text-purple-400 flex-shrink-0" />
                  <span><strong>Academic Qualifications:</strong> B.Sc, B.Ed, MPM &bull; UGC NET Qualified</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-brand-primary dark:text-purple-400 flex-shrink-0" />
                  <span><strong>Global Accreditations:</strong> Certified IELTS Master Trainer (Since 2016), TOEFL &amp; TESOL/TEFL Educator</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-brand-primary dark:text-purple-400 flex-shrink-0" />
                  <span><strong>Published Literature:</strong> Author of 3 educational handbooks including <em>“Cakewalk IELTS”</em> and <em>“101 Management Books”</em></span>
                </div>
              </div>

              {/* Understated Link to Full Biography */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <span>Read Full Founder Biography &amp; Academic Background</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE COURSES & CURRICULUM OVERVIEW */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
                Core Curricula
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white">
                Focused Programs for Measurable Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Clear module outlines, structured practice drills, and small batches tailored to individual student goals.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex-shrink-0"
            >
              <span>View All 13 Courses</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCourses.map((c, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-brand-primary dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                      {c.tag}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {c.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-xs text-brand-primary dark:text-purple-400 font-medium">
                    {c.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to={`/courses/${c.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-purple-400 transition-colors"
                  >
                    <span>Inspect Syllabus</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TEACHING APPROACH — 3 CONCISE PRINCIPLES */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Teaching Methodology
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white">
              Deliberate Pedagogy, Not Generic Lecture Notes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Three core pedagogical standards tested across 18 years of classroom and corporate training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-l-2 border-brand-primary dark:border-purple-400 pl-5">
              <span className="font-heading font-extrabold text-2xl text-brand-primary dark:text-purple-400 block">
                01
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                Diagnostic Evaluation First
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Every candidate begins with a baseline assessment measuring grammar, phonology, lexical variety, and coherence. We do not place students into one-size-fits-all batches.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-teal-600 dark:border-teal-400 pl-5">
              <span className="font-heading font-extrabold text-2xl text-teal-600 dark:text-teal-400 block">
                02
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                Line-by-Line Direct Feedback
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Writing and speaking submissions receive direct, line-by-line critique from certified faculty with precise grammatical adjustments, lexical upgrades, and Cambridge rubric band metrics.
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-purple-600 dark:border-purple-400 pl-5">
              <span className="font-heading font-extrabold text-2xl text-purple-600 dark:text-purple-400 block">
                03
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                Daily Consistency Over Cramming
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Communicative fluency cannot be acquired through last-minute shortcuts. We enforce daily structured micro-drills and proven reading circle habits documented in <em>Cakewalk IELTS</em>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DIAGNOSTIC ASSESSMENTS BRIDGE */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
                Online Placement Tools
              </span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
                Evaluate Your Baseline Level Before Enrolling
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Take our complimentary 10-question English diagnostic test or discover your executive communication style archetype with our interactive placement modules.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span>&bull; English Proficiency Diagnostic (10 Qs)</span>
                <span>&bull; Leadership Style Archetype (5 Scenarios)</span>
                <span>&bull; Instant Scoring &amp; Level Report</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                to="/tests"
                className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Take Diagnostic Assessment</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PUBLISHED LITERATURE & REFERENCE BOOKS */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
                Academic Publications
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white">
                Authored Handbooks by Vidya Wankhade
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Curriculum frameworks and reference literature authored by the founder.
              </p>
            </div>

            <Link
              to="/blog"
              className="text-xs sm:text-sm font-semibold text-brand-primary dark:text-purple-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Explore Blog &amp; Book Insights</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founderData.books.map((b, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-start gap-4"
              >
                <img
                  src={b.coverImage}
                  alt={b.title}
                  className="w-16 h-22 sm:w-20 sm:h-28 object-cover rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex-shrink-0"
                  loading="lazy"
                  width="80"
                  height="112"
                />
                <div className="space-y-1 truncate">
                  <h3 className="font-heading font-bold text-sm text-slate-950 dark:text-white line-clamp-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {b.subtitle}
                  </p>
                  <span className="text-[10px] text-brand-primary dark:text-purple-400 font-semibold block pt-1">
                    ISBN: {b.isbn || "Published Handbook"}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. UPGRADED LEARNING ENVIRONMENT GALLERY (STAGGERED CINEMATIC SHOWCASE) */}
      <LearningEnvironmentGallery />

      {/* 8. CURATED FAQS (4 ESSENTIAL QUESTIONS) */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
              Essential Information
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Clear answers regarding batch formats, level evaluation, and course schedules.
            </p>
          </div>

          {/* Clean accessible accordion with the top 4 most practical FAQs */}
          <FAQAccordion items={faqData.slice(0, 4)} />

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary dark:text-purple-400 hover:underline"
            >
              <span>Have a specific admission query? Contact our desk &rarr;</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 9. CONCISE CLOSING ADMISSIONS ACTION */}
      <section className="py-14 sm:py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Admissions &amp; Consultation
          </span>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 dark:text-white tracking-tight">
            Begin Your Learning Journey with The Consistent Academy
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule an in-person level evaluation at our Pune center or receive personalized batch timings for IELTS, Spoken English, or Corporate Training.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors"
            >
              Request Course Information
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Admissions Desk &amp; Campus Map
            </Link>
          </div>

          <p className="pt-2 text-xs text-slate-500 dark:text-slate-400">
            theconsistentacademy@gmail.com &bull; Pune, Maharashtra
          </p>
        </div>
      </section>
    </>
  );
}
