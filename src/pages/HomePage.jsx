import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Users,
  Compass,
  GraduationCap,
  Sparkles,
  PhoneCall,
  MapPin,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CourseCard from '../components/CourseCard';
import FAQAccordion from '../components/FAQAccordion';
import { coursesData, kidsCoursesData } from '../data/coursesData';
import { founderData } from '../data/founderData';
import { testimonialsData } from '../data/testimonialsData';
import { faqData } from '../data/faqData';
import { galleryData } from '../data/galleryData';

export default function HomePage({ onOpenEnquiry }) {
  // Select top featured courses for home preview
  const featuredCourses = coursesData.slice(0, 4);
  const featuredKidsCourse = kidsCoursesData[0];

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Consistent Academy",
    "url": "https://www.theconsistentacademy.in/",
    "logo": "https://www.theconsistentacademy.in/assets/logo2.png",
    "description": "Premier English language proficiency and IELTS preparation institute in Pune, Maharashtra. Founded by Vidya Wankhade.",
    "telephone": "+91 77091 09830",
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

  return (
    <>
      <SEOHead
        title="The Consistent Academy | English Language Proficiency & IELTS Coaching in Pune"
        description="Master IELTS, spoken English, corporate communication, and kids public speaking through structured, consistent mentorship with Vidya Wankhade in Pune, Maharashtra."
        canonical="https://www.theconsistentacademy.in/"
        schema={educationalOrgSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-primary text-xs font-semibold tracking-wide shadow-soft-sm">
                <Sparkles size={14} className="text-brand-purple" />
                <span>Empowering Global Communication &amp; Fluency</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
                Master English with <br className="hidden sm:inline" />
                <span className="text-brand-purple">Clarity, Confidence</span> &amp; Consistency.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to <strong>The Consistent Academy</strong>. Under the direct mentorship of published author and IELTS Master Trainer <strong>Vidya Wankhade</strong>, we prepare students, executives, and educators to excel in global tests and workplace leadership.
              </p>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-soft-sm">
                  <Award size={15} className="text-brand-primary" />
                  <span>18+ Years Teaching Pedagogy</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-soft-sm">
                  <GraduationCap size={15} className="text-brand-teal" />
                  <span>IELTS Master Trainer Certified</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-soft-sm">
                  <BookOpen size={15} className="text-brand-purple" />
                  <span>3 Published Educational Books</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-soft-md hover:shadow-soft-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={17} />
                </button>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 text-base font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-soft-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>View All 13 Courses</span>
                  <BookOpen size={16} className="text-slate-500" />
                </Link>
              </div>

              {/* Direct Telephone Contact */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
                <PhoneCall size={14} className="text-brand-primary" />
                <span>Admissions Helpline:</span>
                <a href="tel:+917709109830" className="font-bold text-slate-800 hover:text-brand-primary transition-colors">
                  +91 77091 09830
                </a>
                <span>• Pune, Maharashtra</span>
              </div>
            </div>

            {/* Hero Right Visuals: Authentic Founder & Academy Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Clean Frame Card */}
                <div className="bg-white rounded-3xl p-3 border border-slate-200/90 shadow-soft-xl">
                  <div className="relative rounded-2xl overflow-hidden bg-brand-50 aspect-[4/4.5]">
                    <img
                      src="/assets/gallery/vidya.png"
                      alt="Vidya Wankhade - Founder of The Consistent Academy"
                      className="w-full h-full object-cover object-top"
                      width="450"
                      height="500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded-md inline-block mb-1">
                        Founder &amp; Master Trainer
                      </span>
                      <h2 className="font-heading font-bold text-xl text-white">
                        Vidya Wankhade
                      </h2>
                      <p className="text-xs text-slate-200 mt-0.5">
                        B.Sc, B.Ed, MPM • UGC NET • IELTS Master Trainer • Author of 3 Books
                      </p>
                    </div>
                  </div>

                  {/* Highlights under photo */}
                  <div className="p-4 grid grid-cols-2 gap-3 mt-1">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <span className="block font-heading font-extrabold text-xl text-brand-primary">18+ Yrs</span>
                      <span className="text-[11px] text-slate-500 font-medium">Teaching Career</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <span className="block font-heading font-extrabold text-xl text-brand-teal">Band 7.5+</span>
                      <span className="text-[11px] text-slate-500 font-medium">Proven First Attempt</span>
                    </div>
                  </div>
                </div>

                {/* Floating Verified Badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white rounded-2xl p-3.5 border border-slate-200 shadow-soft-lg hidden sm:flex items-center gap-3 max-w-xs">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0">
                    <Compass size={20} />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Personalized Feedback</span>
                    <span className="text-[11px] text-slate-500">Every writing &amp; speaking task evaluated</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Verified Numbers Strip */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-primary block">
                2007
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 block">
                Teaching Journey Began
              </span>
              <span className="text-[11px] text-slate-500">
                18+ years continuous mentoring
              </span>
            </div>

            <div className="p-4">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-teal block">
                3 Books
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 block">
                Authored by Founder
              </span>
              <span className="text-[11px] text-slate-500">
                Available on Amazon &amp; Flipkart
              </span>
            </div>

            <div className="p-4">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-purple block">
                13 Courses
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 block">
                Specialized Programs
              </span>
              <span className="text-[11px] text-slate-500">
                Test prep, corporate &amp; kids
              </span>
            </div>

            <div className="p-4">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 block">
                Pune, MH
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 block">
                Academy Headquarters
              </span>
              <span className="text-[11px] text-slate-500">
                Online &amp; offline sessions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Core Programs Section */}
      <section className="py-20 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
                Verified Curriculum
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2">
                Featured Programs for Every Educational Milestone
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                Structured courses with exact modules, transparent fees, and official study materials. No hidden charges or false guarantees.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-primary-hover self-start md:self-end whitespace-nowrap"
            >
              <span>Explore All Courses</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnquire={(title) => onOpenEnquiry && onOpenEnquiry(title)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-soft-sm transition-all"
            >
              <span>View Corporate, Teacher Certification &amp; Kids Courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Profile & Published Books Section */}
      <section className="py-20 bg-white border-y border-slate-100" id="founder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Visual & Books Collage */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-soft-md">
                <img
                  src="/assets/gallery/vidya.png"
                  alt="Vidya Wankhade - Lead Trainer"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  loading="lazy"
                  width="450"
                  height="384"
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Vidya Wankhade
                  </h3>
                  <p className="text-xs text-brand-purple font-semibold mt-0.5">
                    Founder, Lead Academic Coach &amp; Published Author
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-primary" />
                      <span>B.Sc, B.Ed, MPM • UGC NET Qualified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-primary" />
                      <span>Certified IELTS Master Trainer (Since 2016)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-brand-primary" />
                      <span>Certified TOEFL &amp; PET Trainer • TESOL / TEFL</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Verified Books Preview */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Published Books by Founder
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {founderData.books.map((b, i) => (
                    <div key={i} className="text-center group">
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="w-full h-24 object-cover rounded-md shadow-sm border border-slate-200 group-hover:scale-105 transition-transform"
                        loading="lazy"
                        width="80"
                        height="96"
                      />
                      <span className="text-[10px] text-slate-700 font-medium line-clamp-1 mt-1 block">
                        {b.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder Biography & Methodology */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                Academic Leadership
              </span>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                "Real Language Fluency Comes from Daily Consistency, Not Exam Shortcuts."
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                With over 18 years in English language education, Vidya Wankhade established The Consistent Academy to offer students and professionals a dependable, rigorous, and personalized training ecosystem.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass size={17} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-slate-900">
                      Diagnostics First, Curriculum Second
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Every student begins with a baseline assessment. Training is customized to target exact weakness areas across listening, grammar, pronunciation, or writing structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={17} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-slate-900">
                      Line-by-Line Writing &amp; Speaking Evaluations
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We don't just assign mock tests; we provide line-by-line editorial corrections, lexical replacements, and band score predictions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen size={17} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-slate-900">
                      Published Methodologies (Cakewalk IELTS)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Study materials are based on published research and proven strategies documented in the widely appreciated guidebook <em>“A Focal Easy Guide Cakewalk IELTS”</em>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Full Founder Biography</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/about#books"
                  className="bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-lg border border-slate-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore 3 Published Books</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Real Testimonials Section */}
      <section className="py-20 bg-surface-subtle" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
              Student Journeys
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2">
              Authentic First-Attempt Success Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Real feedback from students who achieved their target band scores and moved abroad for higher education and professional practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4" aria-label="5 out of 5 stars">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    "{test.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      {test.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {test.role}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-block bg-brand-50 text-brand-primary text-xs font-extrabold px-2.5 py-1 rounded-md border border-brand-200">
                      {test.band}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      Destination: {test.destination}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning In Action Gallery Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
              Campus &amp; Workshops
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2">
              Learning in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Authentic classroom interactions, public speaking workshops, corporate seminars, and certificate distributions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {galleryData.slice(0, 12).map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden aspect-square bg-slate-100 border border-slate-200 shadow-soft-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width="200"
                  height="200"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2.5">
                  <span className="text-[11px] text-white font-medium leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs text-slate-500">
              Photos from Pune classroom sessions, institutional seminars, and corporate workshops.
            </span>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 bg-surface-subtle" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
              Clear Answers
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to know regarding course formats, fee structures, batch schedules, and trainer credentials.
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Ready to Begin?
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Start Your Journey Toward English Fluency Today
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether preparing for your international IELTS exam, college placements, or executive presence, our structured mentorship will help you succeed.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="w-full sm:w-auto bg-brand-purple hover:bg-purple-600 text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Enquire Now for Next Batch
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              Contact Admissions &amp; Map
            </Link>
          </div>

          <div className="pt-4 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span>Direct helpline: +91 77091 09830</span>
            <span>•</span>
            <span>theconsistentacademy@gmail.com</span>
          </div>
        </div>
      </section>
    </>
  );
}
