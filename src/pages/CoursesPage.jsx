import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';
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
      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Academic Prospectus
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight">
            Comprehensive Course Offerings &amp; Fees
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Thirteen structured curricula with verified syllabus modules, transparent tuition fees, small batch sizes, and direct evaluation by Vidya Wankhade.
          </p>
        </div>
      </section>

      {/* Course Catalog & Filter Section */}
      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors focus:outline-none ${
                  activeTab === tab.id
                    ? 'bg-brand-primary dark:bg-purple-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
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
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
                    Core Academic &amp; Professional Programs
                  </h2>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
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
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
                    Foundations &amp; Young Learners
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    Foundational speech clarity, systematic phonics, stage elocution, and expressive writing for school-age learners.
                  </p>
                </div>
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded border border-teal-200 dark:border-teal-800 self-start">
                  5 Specialized Batches
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kidsCoursesData.map((kidCourse) => (
                  <article
                    key={kidCourse.id}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:border-brand-primary/50 dark:hover:border-purple-500/50 transition-colors"
                  >
                    <div>
                      <div className="h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                        <img
                          src={kidCourse.image}
                          alt={kidCourse.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="350"
                          height="176"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-slate-900/90 dark:bg-brand-primary text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                            {kidCourse.price}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 space-y-2.5">
                        <span className="text-xs font-semibold text-brand-primary dark:text-purple-400">
                          Duration: {kidCourse.duration}
                        </span>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                          {kidCourse.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {kidCourse.description}
                        </p>

                        <ul className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                          {kidCourse.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 size={13} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        type="button"
                        onClick={() => onOpenEnquiry && onOpenEnquiry(`Kids: ${kidCourse.title}`)}
                        className="w-full bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-xs font-semibold py-2.5 rounded-md transition-colors"
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
      <section className="py-14 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
            Unsure Which Curriculum Aligns With Your Goals?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Take our free diagnostic assessment or speak directly with our admissions desk in Pune for a personalized level evaluation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/tests"
              className="bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Take Diagnostic Assessment
            </Link>
            <Link
              to="/contact"
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Contact Admissions Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
