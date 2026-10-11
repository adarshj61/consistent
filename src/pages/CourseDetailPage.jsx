import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  BookOpen,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  PhoneCall
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { coursesData } from '../data/coursesData';

export default function CourseDetailPage({ onOpenEnquiry }) {
  const { slug } = useParams();
  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="py-24 max-w-2xl mx-auto px-4 text-center space-y-4">
        <h1 className="font-heading font-bold text-3xl text-slate-900">
          Course Not Found
        </h1>
        <p className="text-sm text-slate-600">
          The requested course syllabus could not be located. Please check our course catalog.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-brand-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg"
        >
          <span>View All Courses</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  // Schema.org Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "The Consistent Academy",
      "sameAs": "https://www.theconsistentacademy.in/"
    },
    "timeRequired": course.hours,
    "offers": {
      "@type": "Offer",
      "price": course.price.replace(/[^\d]/g, ''),
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <SEOHead
        title={`${course.title} | The Consistent Academy Pune`}
        description={`${course.description} Duration: ${course.hours}, Fee: ${course.price}. Learn from IELTS Master Trainer Vidya Wankhade.`}
        canonical={`https://www.theconsistentacademy.in/courses/${course.slug}`}
        schema={courseSchema}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-slate-800 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/courses" className="hover:text-slate-800 transition-colors">Courses</Link>
            <ChevronRight size={12} />
            <span className="text-slate-900 font-medium truncate max-w-xs">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Course Hero Banner */}
      <section className="bg-gradient-to-b from-brand-50/60 via-white to-surface-subtle py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-md">
                  {course.categoryName}
                </span>
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-md border border-slate-200">
                  {course.hours}
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
                {course.title}
              </h1>

              {course.subtitle && (
                <p className="text-sm sm:text-base font-semibold text-brand-purple">
                  {course.subtitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Target Audience & Academy Promise */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Target Audience:
                  </span>
                  <p className="text-xs text-slate-700 mt-1 leading-normal font-medium">
                    {course.targetAudience}
                  </p>
                </div>

                {course.promise && (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal block">
                      Academy Promise:
                    </span>
                    <p className="text-xs text-slate-700 mt-1 leading-normal font-medium">
                      {course.promise}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Pricing & CTA Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft-lg space-y-5">
                <div className="overflow-hidden rounded-xl h-44 bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    width="350"
                    height="176"
                  />
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-500 font-medium block">Course Tuition:</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-heading font-extrabold text-3xl text-slate-900">
                      {course.price}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({course.hours})
                    </span>
                  </div>

                  {course.singleSkillPrice && (
                    <div className="mt-2 p-2.5 rounded-lg bg-purple-50 border border-purple-100 text-xs text-purple-900">
                      <strong>Single Skill Option:</strong> {course.singleSkillPrice} ({course.singleSkillHours} per module)
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
                    className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold py-3 rounded-xl shadow-sm transition-colors"
                  >
                    Enquire for Next Batch
                  </button>

                  <a
                    href="tel:+917709109830"
                    className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold py-2.5 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall size={14} className="text-brand-primary" />
                    <span>Call Helpline: +91 77091 09830</span>
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 text-center space-y-1">
                  <span>• Comprehensive study material included</span>
                  <span className="block">• Weekend and weekday batches available</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Syllabus Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
                Course Syllabus
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
                Detailed Module Breakdown
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Each module is delivered with targeted learning objectives, diagnostic exercises, and review tasks.
              </p>
            </div>

            {/* Modules List */}
            <div className="space-y-5">
              {course.moduleDetails && course.moduleDetails.map((module, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-brand-primary text-white text-xs flex items-center justify-center font-bold">
                        {mIdx + 1}
                      </span>
                      <span>{module.title}</span>
                    </h3>
                    {module.duration && (
                      <span className="text-xs font-semibold text-brand-purple bg-purple-100/80 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                        {module.duration}
                      </span>
                    )}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Highlights Box */}
            {course.highlights && (
              <div className="p-6 rounded-2xl bg-brand-50/70 border border-brand-200 space-y-3">
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Key Course Features &amp; Inclusions:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {course.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-brand-primary flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  Ready to enroll in this course?
                </h4>
                <p className="text-xs text-slate-600">
                  Speak with our admissions counselor for batch timing availability.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                Apply for {course.title}
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
