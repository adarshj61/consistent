import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CourseCard({ course, onEnquire }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg hover:border-brand-300 transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Course Banner Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={`${course.title} - The Consistent Academy`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="400"
          height="208"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-white/95 backdrop-blur-sm text-brand-primary text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
            {course.categoryName || 'Specialized Program'}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-slate-900/90 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
            {course.price}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-2">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-purple" />
              <span>{course.hours || course.duration}</span>
            </span>
            {course.modulesCount && (
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-brand-teal" />
                <span>{course.modulesCount} Core Modules</span>
              </span>
            )}
          </div>

          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-2">
            {course.title}
          </h3>

          {course.subtitle && (
            <p className="text-xs font-medium text-brand-purple mt-1">
              {course.subtitle}
            </p>
          )}

          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
            {course.description}
          </p>

          {/* Highlights / Features List */}
          {course.highlights && (
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
              {course.highlights.slice(0, 3).map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{hl}</span>
                </li>
              ))}
            </ul>
          )}

          {course.features && (
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
              {course.features.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Actions Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
          {course.slug && !course.slug.startsWith('kids') ? (
            <Link
              to={`/courses/${course.slug}`}
              className="flex-1 text-center bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1"
            >
              <span>View Syllabus</span>
              <ArrowRight size={13} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onEnquire && onEnquire(course.title)}
              className="flex-1 text-center bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg border border-slate-200 transition-colors"
            >
              Course Details
            </button>
          )}

          <button
            type="button"
            onClick={() => onEnquire && onEnquire(course.title)}
            className="flex-1 text-center bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </article>
  );
}
