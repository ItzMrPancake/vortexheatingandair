import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/hvacData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Clear Answers To Your HVAC Questions
          </h2>
          <p className="text-slate-300 text-sm">
            Everything you need to know about our services, flat-rate pricing integrity, and warranties.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900 transition-colors"
                >
                  <span className="text-sm font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-sky-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More questions banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
          <p className="text-xs text-slate-300">
            Have a specific HVAC or commercial refrigeration question?
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneCallNow}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300"
          >
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            Call our Waxahachie office directly at {COMPANY_INFO.phoneCallNow}
          </a>
        </div>

      </div>
    </section>
  );
};
