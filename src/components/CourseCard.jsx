import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CourseCard({ course, onEnquire }) {
  const isKids = course.slug && course.slug.startsWith('kids');

  return (
    <article className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 hover:border-brand-primary/50 dark:hover:border-purple-500/50 transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Course Image Header */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={course.image}
          alt={`${course.title} - The Consistent Academy`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
          loading="lazy"
          width="400"
          height="192"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-200/60 dark:border-slate-700 shadow-sm">
            {course.categoryName || 'Academic Course'}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-slate-900/90 dark:bg-brand-primary text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
            {course.price}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium mb-2.5">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-brand-primary dark:text-purple-400" />
              <span>{course.hours || course.duration}</span>
            </span>
            {course.modulesCount && (
              <span className="flex items-center gap-1.5">
                <BookOpen size={13} className="text-brand-teal" />
                <span>{course.modulesCount} Modules</span>
              </span>
            )}
          </div>

          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-purple-300 transition-colors leading-snug">
            {course.title}
          </h3>

          {course.subtitle && (
            <p className="text-xs font-medium text-brand-primary dark:text-purple-400 mt-1">
              {course.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">
            {course.description}
          </p>

          {/* Highlights List */}
          {(course.highlights || course.features) && (
            <ul className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
              {(course.highlights || course.features).slice(0, 2).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={13} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Actions Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
          {course.slug && !isKids ? (
            <Link
              to={`/courses/${course.slug}`}
              className="flex-1 text-center bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold py-2 px-3 rounded-md border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-1"
            >
              <span>View Syllabus</span>
              <ArrowRight size={12} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onEnquire && onEnquire(course.title)}
              className="flex-1 text-center bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold py-2 px-3 rounded-md border border-slate-200 dark:border-slate-700 transition-colors"
            >
              Programme Details
            </button>
          )}

          <button
            type="button"
            onClick={() => onEnquire && onEnquire(course.title)}
            className="flex-1 text-center bg-brand-primary dark:bg-purple-600 hover:bg-brand-primary-hover dark:hover:bg-purple-700 text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </article>
  );
}
