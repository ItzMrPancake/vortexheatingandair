import React from 'react';
import { Tag, Check, ArrowRight, Clock, Percent } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/hvacData';

interface PromotionsSectionProps {
  onClaimOffer: (title: string, code: string) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onClaimOffer }) => {
  return (
    <section id="promotions" className="py-16 sm:py-20 bg-[#0A0E17] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            <Tag className="w-3.5 h-3.5" />
            Seasonal Specials &amp; Guaranteed Offers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Honest Value. Zero Pricing Gimmicks.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Take advantage of verified promotions designed to protect your HVAC equipment, lower electric bills, and ensure you never overpay.
          </p>
        </div>

        {/* Promotions Grid with Equal Card Heights & Aligned Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {SPECIAL_OFFERS.map((offer) => {
            const isTuneUp = offer.id === 'tuneup-49';
            const isSecondOpinion = offer.id === 'free-second-opinion';

            return (
              <div
                key={offer.id}
                className={`h-full flex flex-col justify-between rounded-2xl p-6 bg-[#111726] border transition-all ${
                  isTuneUp
                    ? 'border-sky-500/40 ring-1 ring-sky-500/15 shadow-md shadow-sky-950/20'
                    : isSecondOpinion
                    ? 'border-rose-500/40 ring-1 ring-rose-500/15 shadow-md shadow-rose-950/20'
                    : 'border-white/[0.08] hover:border-white/[0.16]'
                }`}
              >
                {/* Top Section */}
                <div className="flex flex-col flex-1">
                  
                  {/* Badge & Promo Code Row */}
                  <div className="flex items-center justify-between gap-2 h-7 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isTuneUp 
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' 
                        : isSecondOpinion 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : 'bg-white/[0.06] text-slate-300 border border-white/[0.08]'
                    }`}>
                      {offer.badge}
                    </span>
                    <span className="text-[10px] font-mono font-medium text-slate-400">
                      {offer.code}
                    </span>
                  </div>

                  {/* Title with consistent height */}
                  <h3 className="text-base font-bold text-white leading-snug min-h-[48px] flex items-center">
                    {offer.title}
                  </h3>

                  {/* Subtitle with consistent min-height */}
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[36px] mt-1 mb-4">
                    {offer.subtitle}
                  </p>

                  {/* Details Checklist: flex-1 ensures equal spacing */}
                  <div className="flex-1 pt-3 pb-2 border-t border-white/[0.06] space-y-2">
                    {offer.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Area: Always sitting flush at card base */}
                <div className="pt-4 mt-2 border-t border-white/[0.06]">
                  <button
                    onClick={() => onClaimOffer(offer.title, offer.code)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isTuneUp
                        ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sm'
                        : isSecondOpinion
                        ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-sm'
                        : 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.06]'
                    }`}
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    Texas limited-time offer
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Financing Callout Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-[#111726] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a New System? Flexible Low-Monthly Financing</h4>
              <p className="text-xs text-slate-300">
                Convenient payment options with 0% promotional APR upon approved credit.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const elem = document.getElementById('financing');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors border border-white/[0.08] whitespace-nowrap cursor-pointer shrink-0"
          >
            View Financing Calculator
          </button>
        </div>

      </div>
    </section>
  );
};
