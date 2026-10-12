import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | The Consistent Academy"
        description="Learn how The Consistent Academy collects, uses, and safeguards information provided through course inquiries and admissions counseling."
        canonical="https://www.theconsistentacademy.in/privacy"
      />

      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary dark:text-purple-400">
            Institutional Policies
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our commitment to safeguarding student, applicant, and visitor information across all educational touchpoints.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <strong>Policy Notice:</strong> This privacy document explains how The Consistent Academy collects, utilizes, and manages information submitted by students, prospective candidates, and website visitors.
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
              1. Information We Collect
            </h2>
            <p>
              When you submit an academic enquiry, diagnostic test, or career application through our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
              <li>Your full name and contact information (email address, telephone number).</li>
              <li>Academic background, target exam dates, and course interests (such as IELTS, Corporate Programs, or Kids Batches).</li>
              <li>Any specific learning goals or diagnostic questions you voluntarily provide.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is strictly utilized for educational counseling and direct communication:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
              <li>To respond to your course inquiries and provide syllabus details.</li>
              <li>To evaluate diagnostic assessments and offer personalized batch recommendations.</li>
              <li>To schedule counseling calls and notify you of upcoming batch commencement dates.</li>
              <li>To process faculty and career applications.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
              3. Data Protection &amp; Confidentiality
            </h2>
            <p>
              We value your trust and do not sell, trade, rent, or lease your personal information to third-party commercial marketing entities. Access to student contact details is restricted solely to authorized academic counselors and faculty at The Consistent Academy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
              4. External Links
            </h2>
            <p>
              Our website contains links to external platforms, including official book purchase links (Amazon, Flipkart, Evincepub), WhatsApp community channels, and the developer credit (ThinkBuild). We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-base sm:text-lg text-slate-950 dark:text-white">
              5. Contacting Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to have your contact details updated or removed from our inquiry records, please contact:
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
              <span className="font-bold text-slate-950 dark:text-white block">The Consistent Academy</span>
              <span>Pune, Maharashtra, India</span>
              <span className="block">Email: <a href="mailto:theconsistentacademy@gmail.com" className="text-brand-primary dark:text-purple-400 underline">theconsistentacademy@gmail.com</a></span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary dark:text-purple-400 hover:underline"
            >
              <ArrowLeft size={13} />
              <span>Return to Homepage</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
