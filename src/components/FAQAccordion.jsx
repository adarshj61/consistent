import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `faq-btn-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-brand-300 shadow-soft-sm'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-xl"
            >
              <span className="font-heading font-semibold text-base sm:text-lg text-slate-900">
                {item.question}
              </span>
              <span
                className={`p-1 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 bg-brand-50 text-brand-primary' : ''
                }`}
              >
                <ChevronDown size={18} />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
