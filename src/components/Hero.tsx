import React from 'react';
import { ShieldCheck, Phone, Calendar, Star, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface HeroProps {
  onOpenBooking: (serviceName?: string, promoCode?: string) => void;
  onSelectTriage: (issue: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onSelectTriage }) => {
  const quickIssues = [
    { label: 'AC Not Cooling', value: 'Air Conditioning Repair' },
    { label: '$49 Tune-Up', value: '$49 HVAC Performance Tune-Up Offer' },
    { label: 'Free 2nd Opinion', value: 'Free HVAC Second Opinion' },
    { label: 'Furnace Down', value: 'Heating Repair & Service' },
    { label: 'Commercial Cooler', value: 'Commercial Refrigeration Repair' },
  ];

  return (
    <section className="relative bg-slate-950 text-slate-100 border-b border-slate-800/80 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Clean Typographic Proposition */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Trust Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="text-sky-400 font-bold uppercase tracking-wider">Waxahachie &amp; 38 DFW Cities</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">TACLA115421E</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <strong className="text-white">5.0</strong> (329+ Google Reviews)
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Mastering Your Home’s Climate Control <span className="text-sky-400">One VORTEX At A Time.</span>
            </h1>

            {/* Subhead */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Expert heating, air conditioning, and commercial refrigeration in Ellis County and North Texas. Upfront flat-rate pricing, certified technicians, and 100% free second opinions.
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span><strong>Free 2nd Opinions:</strong> Never get pressured into replacing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span><strong>24/7 Texas Emergency:</strong> Stocked trucks for 1-trip fixes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span><strong>American Standard Dealer</strong> &amp; Amana Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span><strong>$49 Performance Tune-Up</strong> seasonal special</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenBooking('Free HVAC Second Opinion', '2NDOPIN')}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-rose-300 hover:text-rose-200 border border-rose-500/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-rose-400" />
                <span>Get Free 2nd Opinion</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneCallNow}`}
                className="px-4 py-3 text-slate-200 hover:text-sky-400 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>(469) 309-6778</span>
              </a>
            </div>

            {/* Quick issue selection */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Quick Problem Triage:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickIssues.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onSelectTriage(item.value)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-colors cursor-pointer shadow-xs"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Focused Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl relative">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src="./images/hero_hvac_home_1794328676909.jpg"
                  alt="Modern Texas home interior with pristine climate control"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={600}
                  height={450}
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md rounded-xl p-3 border border-slate-800 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800/60 text-sky-400 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Mastering Climate Control</p>
                      <p className="text-[10px] text-slate-400">Waxahachie HQ · 261 Park Meadows Dr</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-rose-400 whitespace-nowrap">
                    24/7 Hotline
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof Row */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">5.0 ★</div>
            <div className="text-[11px] text-slate-400 font-medium">329+ Google Reviews</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono tabular-nums">$0 Fee</div>
            <div className="text-[11px] text-slate-400 font-medium">Free 2nd Opinions</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono tabular-nums">38 Cities</div>
            <div className="text-[11px] text-slate-400 font-medium">DFW Metroplex &amp; Ellis</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">TACLA</div>
            <div className="text-[11px] text-slate-400 font-medium">#115421E Licensed</div>
          </div>
        </div>

      </div>
    </section>
  );
};
