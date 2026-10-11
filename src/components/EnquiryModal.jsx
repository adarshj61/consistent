import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

export default function EnquiryModal({ isOpen, onClose, initialCourse = '' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 z-10 overflow-hidden animate-fadeIn">
        <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary"></span>
            <span id="modal-headline" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Admissions &amp; Course Consultation
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close Enquiry Dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-2 sm:p-4 max-h-[85vh] overflow-y-auto">
          <ContactForm prefilledCourse={initialCourse} />
        </div>
      </div>
    </div>
  );
}
