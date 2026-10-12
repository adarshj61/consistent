import React, { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  Send,
  AlertCircle,
  ShieldAlert,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { careersData } from '../data/careersData';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(careersData[0].title);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    role: careersData[0].title,
    experience: '',
    resumeLink: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Valid email address is required.';
    }
    if (!formData.contact.trim()) errs.contact = 'Phone number is required.';
    if (!formData.experience.trim()) errs.experience = 'Years of experience is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setFormSubmitted(true);
  };

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormData(prev => ({ ...prev, role: roleTitle }));
    const formEl = document.getElementById('career-form');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Careers & Faculty Openings | The Consistent Academy"
        description="Join The Consistent Academy in Pune as an IELTS Trainer, Spoken English Mentor, or Writing Coach. Empower future global achievers."
        canonical="https://www.theconsistentacademy.in/careers"
      />

      {/* Header Banner - Compact & Professional */}
      <section className="bg-white dark:bg-slate-900 py-8 sm:py-10 md:py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2.5 sm:space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Faculty &amp; Academic Positions
          </span>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight">
            Careers at The Consistent Academy
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We invite applications from certified language trainers, corporate communication coaches, and pedagogy specialists committed to disciplined student mentorship.
          </p>
        </div>
      </section>

      {/* Main Section: Balanced 2-Column Roles & Compact Application Form */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Open Academic Positions Grid */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
                Open Academic Positions
              </h2>
              <span className="self-start sm:self-auto text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded">
                Pune &amp; Online Cohorts
              </span>
            </div>

            {/* Balanced 2-Column Grid of Role Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              {careersData.map((role, idx) => {
                const isLastAndOdd = idx === careersData.length - 1 && careersData.length % 2 !== 0;

                return (
                  <div
                    key={role.id}
                    className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-purple-300 dark:hover:border-purple-800/60 transition-colors shadow-sm ${
                      isLastAndOdd ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="space-y-3.5">
                      {/* Role Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div>
                          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                            {role.title}
                          </h3>
                          <span className="text-xs text-brand-primary dark:text-purple-400 font-semibold">
                            {role.type}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleApplyClick(role.title)}
                          className="self-start sm:self-auto text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-brand-primary hover:text-white dark:hover:bg-purple-600 text-slate-800 dark:text-slate-200 px-3.5 py-1.5 sm:py-2 rounded transition-colors cursor-pointer"
                        >
                          Apply for this Role &rarr;
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {role.description}
                      </p>

                      {/* Responsibilities and Requirements */}
                      <div className={`grid grid-cols-1 ${isLastAndOdd ? 'sm:grid-cols-2 gap-6' : 'sm:grid-cols-2 gap-4'} pt-1`}>
                        <div>
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                            Responsibilities:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                            {role.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-1.5">
                                <span className="text-brand-primary dark:text-purple-400 flex-shrink-0">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                            Requirements:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                            {role.requirements.map((req, qIdx) => (
                              <li key={qIdx} className="flex items-start gap-1.5">
                                <CheckCircle2 size={12} className="text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dedicated Application Form Section */}
          <div
            id="career-form"
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Panel: Header, Instructions & Prototype Notice */}
              <div className="lg:col-span-4 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-950 dark:text-white">
                    Faculty Application Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Submit your credentials to join our academic team in Pune or online.
                  </p>
                </div>

                {/* Selected Role Indicator */}
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 text-xs flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Selected Role:</span>
                  <span className="font-bold text-brand-primary dark:text-purple-300">{formData.role}</span>
                </div>

                {/* Prototype Notice */}
                <div className="p-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
                  <ShieldAlert size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="leading-tight space-y-1">
                    <strong className="font-semibold block">Prototype Verification</strong>
                    <span>
                      This career form validates inputs in prototype mode. In production, submissions dispatch to{' '}
                      <a href="mailto:theconsistentacademy@gmail.com" className="underline font-semibold">
                        theconsistentacademy@gmail.com
                      </a>
                      .
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Panel: Form Fields */}
              <div className="lg:col-span-8">
                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-center space-y-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-brand-primary dark:text-purple-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-slate-950 dark:text-white">
                      Application Validated (Prototype)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your profile for <strong>{formData.role}</strong> was successfully validated.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-brand-primary dark:text-purple-400 hover:underline pt-2 cursor-pointer inline-block"
                    >
                      Submit Another Profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Role Applied For <span className="text-rose-500">*</span>
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        >
                          {careersData.map(r => (
                            <option key={r.id} value={r.title}>{r.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anjali Deshmukh"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        />
                        {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="anjali@example.com"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        />
                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          name="contact"
                          type="tel"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        />
                        {errors.contact && <p className="text-xs text-rose-500 mt-1">{errors.contact}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Years of Experience <span className="text-rose-500">*</span>
                        </label>
                        <input
                          name="experience"
                          type="text"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="e.g. 3 years in IELTS coaching"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        />
                        {errors.experience && <p className="text-xs text-rose-500 mt-1">{errors.experience}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Resume / Portfolio Link (Optional)
                        </label>
                        <input
                          name="resumeLink"
                          type="url"
                          value={formData.resumeLink}
                          onChange={handleChange}
                          placeholder="e.g. LinkedIn or Google Drive URL"
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Brief Note / Cover Letter
                        </label>
                        <textarea
                          name="message"
                          rows={2}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your teaching philosophy or certifications..."
                          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:border-brand-primary dark:focus:border-purple-500"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto sm:min-w-[240px] bg-brand-primary hover:bg-brand-primary-hover dark:bg-purple-600 dark:hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      Submit Career Application
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
