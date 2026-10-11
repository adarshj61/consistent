import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Filter, CheckCircle2, PhoneCall } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CourseCard from '../components/CourseCard';
import { coursesData, kidsCoursesData } from '../data/coursesData';

export default function CoursesPage({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Programs (13)' },
    { id: 'test-prep', label: 'Test Preparation' },
    { id: 'corporate', label: 'Corporate & Career' },
    { id: 'skills', label: 'Communication & Speaking' },
    { id: 'educators', label: 'Educator Certification' },
    { id: 'kids', label: 'Kids & Young Learners' }
  ];

  // Filter logic
  let filteredMain = coursesData;
  let showKids = true;

  if (activeTab === 'test-prep') {
    filteredMain = coursesData.filter(c => c.category === 'test-prep');
    showKids = false;
  } else if (activeTab === 'corporate') {
    filteredMain = coursesData.filter(c => c.category === 'corporate');
    showKids = false;
  } else if (activeTab === 'skills') {
    filteredMain = coursesData.filter(c => c.category === 'skills');
    showKids = false;
  } else if (activeTab === 'educators') {
    filteredMain = coursesData.filter(c => c.category === 'educators');
    showKids = false;
  } else if (activeTab === 'kids') {
    filteredMain = [];
    showKids = true;
  }

  // Schema.org ItemList for courses
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Courses & Training Programs at The Consistent Academy",
    "description": "Comprehensive English language and professional communication courses in Pune.",
    "itemListElement": coursesData.map((course, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "The Consistent Academy",
          "sameAs": "https://www.theconsistentacademy.in/"
        }
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Courses & Fee Structure | The Consistent Academy Pune"
        description="Explore 13 specialized English courses: IELTS/TOEFL/PTE, Corporate Survival, Interview Prep, Dining Etiquette, Leadership, and Kids Elocution. Transparent fees & verified syllabus."
        canonical="https://www.theconsistentacademy.in/courses"
        schema={coursesSchema}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
            Academic Offerings
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Programs for Every Goal &amp; Milestone
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully designed courses, each tailored with structured modules, individual feedback, and clear outcomes.
          </p>
        </div>
      </section>

      {/* Course Catalog & Filter Section */}
      <section className="py-16 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none ${
                  activeTab === tab.id
                    ? 'bg-brand-primary text-white shadow-soft-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Courses Grid */}
          {filteredMain.length > 0 && (
            <div className="space-y-6 mb-16">
              {activeTab === 'all' && (
                <div className="flex items-center gap-3">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                    Comprehensive Professional &amp; Test Preparation Programs
                  </h2>
                  <span className="text-xs font-bold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded-md">
                    {filteredMain.length} Courses
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMain.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onEnquire={(title) => onOpenEnquiry && onOpenEnquiry(title)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Kids Courses Section */}
          {showKids && (
            <div className="pt-8 border-t border-slate-200/80 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                    Programs for Kids &amp; Young Learners
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Fun, expressive, and foundational courses building stage presence, speech clarity, and reading enthusiasm.
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 self-start">
                  5 Specialized Batches
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kidsCoursesData.map((kidCourse) => (
                  <article
                    key={kidCourse.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-soft-sm overflow-hidden flex flex-col justify-between hover:shadow-soft-lg transition-all"
                  >
                    <div>
                      <div className="h-44 bg-slate-100 overflow-hidden relative">
                        <img
                          src={kidCourse.image}
                          alt={kidCourse.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="350"
                          height="176"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-slate-900/90 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                            {kidCourse.price}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        <span className="text-xs font-semibold text-brand-purple">
                          Duration: {kidCourse.duration}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-slate-900">
                          {kidCourse.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {kidCourse.description}
                        </p>

                        <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                          {kidCourse.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        type="button"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`Kids: ${kidCourse.title}`)}
                        className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
                      >
                        Enquire for Kids Batch
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Advisory Consultation Banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-heading font-bold text-2xl text-slate-900">
            Unsure Which Course Matches Your Needs?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Take our free 5-minute online proficiency assessment or speak directly with our admissions counselor for a personalized recommendation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/tests"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold px-5 py-3 rounded-lg shadow-sm transition-colors"
            >
              Take Diagnostic Assessment
            </Link>
            <a
              href="tel:+917709109830"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-5 py-3 rounded-lg border border-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <PhoneCall size={14} className="text-brand-primary" />
              <span>Call +91 77091 09830</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
