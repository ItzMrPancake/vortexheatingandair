import React from 'react';
import { Building2, ArrowRight, CheckCircle2, Clock, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface CommercialProps {
  onScheduleCommercial: (serviceType?: string) => void;
}

export const CommercialRefrigeration: React.FC<CommercialProps> = ({ onScheduleCommercial }) => {
  const capabilities = [
    { title: 'Commercial Refrigeration & Walk-Ins', desc: 'Walk-in coolers, freezers, reach-ins, floral coolers, and ice machines with 24/7 inventory protection.' },
    { title: 'Rooftop Package Units (RTUs)', desc: 'Maintenance, sensor calibration, belt swaps, crane retrofits, and economizer tuning up to 25+ tons.' },
    { title: 'Restaurant & Café Emergency Service', desc: 'Rapid response for prep tables, bar coolers, draft systems, and undercounter refrigeration.' },
    { title: 'Multi-Location PM Agreements', desc: 'Custom maintenance contracts with regulatory health-code compliance logs and priority slots.' },
  ];

  return (
    <section id="commercial" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60">
              <Building2 className="w-3.5 h-3.5" />
              Waxahachie &amp; DFW Commercial Division
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Commercial HVAC &amp; Heavy Refrigeration Solutions
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              If you own a restaurant, retail storefront, multi-family complex, or warehouse, an HVAC or refrigeration breakdown directly threatens your inventory, tenant comfort, and revenue. Vortex is licensed, insured, and equipped for commercial scale.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>24/7 Food Safety Response:</strong> Emergency inventory protection</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Rooftop RTUs &amp; Split Systems:</strong> Certified maintenance &amp; swaps</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Custom PM Plans:</strong> Health code audit compliance</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>New Construction:</strong> From plan design to commissioning</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => onScheduleCommercial('Commercial Refrigeration Repair')}
                className="px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request Commercial Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneCallNow}`}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>Call: {COMPANY_INFO.phoneCallNow}</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Priority emergency slots reserved for food-service and healthcare facilities.</span>
            </div>
          </div>

          {/* Right Column (6 cols): Photo & Clean Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-sm relative">
              <div className="aspect-[16/10] w-full relative">
                <img
                  src="./images/commercial_hvac_1794328677346.jpg"
                  alt="Modern commercial rooftop packaged HVAC units"
                  className="w-full h-full object-cover"
                  width={640}
                  height={400}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                  <h4 className="text-xs font-bold text-white">{cap.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{cap.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
