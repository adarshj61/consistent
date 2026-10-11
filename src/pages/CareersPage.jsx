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

  return (
    <>
      <SEOHead
        title="Careers & Faculty Openings | The Consistent Academy"
        description="Join The Consistent Academy in Pune as an IELTS Trainer, Spoken English Mentor, or Writing Coach. Empower future global achievers."
        canonical="https://www.theconsistentacademy.in/careers"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-subtle py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-100/80 px-3 py-1 rounded-md">
            Join Our Faculty
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Careers at The Consistent Academy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are always seeking passionate educators, certified language coaches, and corporate trainers who believe in consistent, high-standard student mentorship.
          </p>
        </div>
      </section>

      {/* Open Roles & Application Section */}
      <section className="py-16 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Role Profiles */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                  Open Faculty &amp; Mentor Positions
                </h2>
                <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                  Pune &amp; Remote
                </span>
              </div>

              <div className="space-y-4">
                {careersData.map((role) => (
                  <div
                    key={role.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft-sm space-y-4 hover:border-brand-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="font-heading font-bold text-lg text-slate-900">
                          {role.title}
                        </h3>
                        <span className="text-xs text-brand-purple font-semibold">
                          {role.type}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedRole(role.title);
                          setFormData(prev => ({ ...prev, role: role.title }));
                          const formEl = document.getElementById('career-form');
                          if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="self-start sm:self-auto text-xs font-semibold bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-800 px-3.5 py-2 rounded-lg transition-colors"
                      >
                        Apply for this Role &rarr;
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {role.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                          Key Responsibilities:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {role.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-1.5">
                              <span className="text-brand-primary">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                          Candidate Requirements:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {role.requirements.map((req, qIdx) => (
                            <li key={qIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 size={12} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-5" id="career-form">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-soft-sm space-y-5 sticky top-24">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Faculty Application Form
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Submit your credentials to join our academic team in Pune or online.
                  </p>
                </div>

                {/* Prototype Notice */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                  <ShieldAlert size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <strong className="font-semibold block">Prototype Verification</strong>
                    This career form validates inputs in prototype mode. In production, submissions dispatch to <a href="mailto:theconsistentacademy@gmail.com" className="underline font-semibold">theconsistentacademy@gmail.com</a>.
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 text-center space-y-3">
                    <div className="w-10 h-10 bg-purple-100 text-brand-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="font-heading font-bold text-base text-slate-900">
                      Application Validated (Prototype)
                    </h4>
                    <p className="text-xs text-slate-600">
                      Thank you, <strong>{formData.name}</strong>. Your profile for <strong>{formData.role}</strong> was successfully validated.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-brand-primary hover:underline pt-2"
                    >
                      Submit Another Profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Role Applied For <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-brand-purple"
                      >
                        {careersData.map(r => (
                          <option key={r.id} value={r.title}>{r.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anjali Deshmukh"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-purple"
                      />
                      {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="anjali@example.com"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-purple"
                        />
                        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          name="contact"
                          type="tel"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-purple"
                        />
                        {errors.contact && <p className="text-xs text-rose-500 mt-1">{errors.contact}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Years of Experience <span className="text-rose-500">*</span>
                      </label>
                      <input
                        name="experience"
                        type="text"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="e.g. 3 years in IELTS & corporate coaching"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-purple"
                      />
                      {errors.experience && <p className="text-xs text-rose-500 mt-1">{errors.experience}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Resume / Portfolio Link (Optional)
                      </label>
                      <input
                        name="resumeLink"
                        type="url"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        placeholder="e.g. https://linkedin.com/in/... or Google Drive"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-purple"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Brief Note / Cover Letter
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your teaching philosophy or certifications..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-purple"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold py-3 rounded-lg shadow-sm transition-colors"
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
