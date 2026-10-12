import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, ShieldAlert } from 'lucide-react';
import { coursesData, kidsCoursesData } from '../data/coursesData';

export default function ContactForm({ prefilledCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: prefilledCourse,
    message: '',
    agreePrivacy: false
  });

  const [errors, setErrors] = useState({});
  const [submittedState, setSubmittedState] = useState(null); // 'prototype-tested' or null

  const allCourses = [
    ...coursesData.map(c => c.title),
    ...kidsCoursesData.map(k => `Kids: ${k.title}`)
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact telephone number.';
    } else if (!/^[\d\s+\-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number.';
    }
    if (!formData.agreePrivacy) {
      errs.agreePrivacy = 'Please confirm that you agree to be contacted regarding this enquiry.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Explicit prototype handling: No false server claims
    setSubmittedState('prototype-tested');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
      agreePrivacy: false
    });
    setErrors({});
    setSubmittedState(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm transition-colors">
      <div className="mb-5">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
          Send an Academic Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Have questions regarding IELTS batches, syllabus modules, or personalized batch timings? Fill in the details below.
        </p>
      </div>

      {/* Transparent Prototype Notice Banner */}
      <div className="mb-5 p-3.5 sm:p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
        <ShieldAlert size={17} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-semibold block text-amber-950 dark:text-amber-100">Development Prototype Notice</strong>
          This enquiry form operates in prototype mode for review. In live production, submissions dispatch directly to the academy admissions desk. For immediate assistance today, email <a href="mailto:theconsistentacademy@gmail.com" className="underline font-semibold">theconsistentacademy@gmail.com</a>.
        </div>
      </div>

      {submittedState === 'prototype-tested' ? (
        <div className="p-6 sm:p-8 rounded-xl bg-purple-50/70 dark:bg-slate-800/90 border border-purple-200 dark:border-purple-800 text-center space-y-4 my-2">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-brand-primary dark:text-purple-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={26} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
              Form Validation Passed (Prototype Verification)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Your inputs for <strong>{formData.name || 'Student'}</strong> regarding{' '}
              <strong>{formData.course || 'General Enquiry'}</strong> have been validated successfully.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`mailto:theconsistentacademy@gmail.com?subject=${encodeURIComponent(`Course Enquiry: ${formData.course || 'General Admissions'}`)}&body=${encodeURIComponent(`Hello Admissions Desk,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSelected Course: ${formData.course}\nPreferred Batch: ${formData.timing}\nMessage: ${formData.message}\n`)}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <Mail size={14} />
              <span>Email Admissions Directly</span>
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Reset Form
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="enquiry-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 dark:text-white focus:outline-none transition-colors ${
                  errors.name ? 'border-rose-400 focus:ring-2 focus:ring-rose-200' : 'border-slate-300 dark:border-slate-700 focus:border-brand-primary dark:focus:border-purple-500'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="enquiry-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@example.com"
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 dark:text-white focus:outline-none transition-colors ${
                  errors.email ? 'border-rose-400 focus:ring-2 focus:ring-rose-200' : 'border-slate-300 dark:border-slate-700 focus:border-brand-primary dark:focus:border-purple-500'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white dark:bg-slate-800 dark:text-white focus:outline-none transition-colors ${
                  errors.phone ? 'border-rose-400 focus:ring-2 focus:ring-rose-200' : 'border-slate-300 dark:border-slate-700 focus:border-brand-primary dark:focus:border-purple-500'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Course Program Selection */}
            <div>
              <label htmlFor="enquiry-course" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Program of Interest
              </label>
              <select
                id="enquiry-course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500 transition-colors"
              >
                <option value="">Select a program (optional)</option>
                {allCourses.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Requirements */}
          <div>
            <label htmlFor="enquiry-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Your Questions or Learning Goals
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your target exam date, current band score, or specific areas you want to improve..."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500 transition-colors"
            ></textarea>
          </div>

          {/* Privacy Consent Checkbox */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleChange}
                className="mt-0.5 rounded text-brand-primary focus:ring-brand-primary h-4 w-4 border-slate-300 dark:border-slate-700 dark:bg-slate-800"
              />
              <span className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                I agree to be contacted by The Consistent Academy admissions team regarding my learning inquiry.
              </span>
            </label>
            {errors.agreePrivacy && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>{errors.agreePrivacy}</span>
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Submit Academic Enquiry</span>
              <Send size={14} />
            </button>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              Admissions Desk:{' '}
              <a href="mailto:theconsistentacademy@gmail.com" className="text-brand-primary dark:text-purple-400 font-semibold hover:underline">
                theconsistentacademy@gmail.com
              </a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
