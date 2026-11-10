import React from 'react';
import { Tag, Check, ArrowRight, Clock, Percent } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/hvacData';

interface PromotionsSectionProps {
  onClaimOffer: (title: string, code: string) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onClaimOffer }) => {
  return (
    <section id="promotions" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60">
            <Tag className="w-3.5 h-3.5" />
            Seasonal Specials &amp; Guaranteed Offers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Honest Value. Zero Pricing Gimmicks.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Take advantage of verified promotions designed to protect your HVAC equipment, lower electric bills, and ensure you never overpay.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIAL_OFFERS.map((offer) => {
            const isTuneUp = offer.id === 'tuneup-49';
            const isSecondOpinion = offer.id === 'free-second-opinion';

            return (
              <div
                key={offer.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all bg-slate-950 border ${
                  isTuneUp
                    ? 'border-sky-500/80 shadow-lg shadow-sky-950/40 ring-1 ring-sky-500/20'
                    : isSecondOpinion
                    ? 'border-rose-500/80 shadow-lg shadow-rose-950/40 ring-1 ring-rose-500/20'
                    : 'border-slate-800 hover:border-slate-700 shadow-sm'
                }`}
              >
                {/* Top Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isTuneUp ? 'bg-sky-500 text-slate-950' : isSecondOpinion ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {offer.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {offer.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed min-h-[34px]">
                    {offer.subtitle}
                  </p>

                  <div className="pt-3 pb-1 border-t border-slate-800/80 space-y-1.5">
                    {offer.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onClaimOffer(offer.title, offer.code)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isTuneUp
                        ? 'bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-sm'
                        : isSecondOpinion
                        ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-sm'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    Texas homeowner limited-time offer
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Financing Callout Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/60 text-sky-400 flex items-center justify-center shrink-0">
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
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            View Financing Calculator
          </button>
        </div>

      </div>
    </section>
  );
};
