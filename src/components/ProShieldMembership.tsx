import React from 'react';
import { ShieldCheck, Check, ArrowRight, Star } from 'lucide-react';
import { PRO_SHIELD_BENEFITS } from '../data/hvacData';

interface ProShieldProps {
  onEnroll: () => void;
}

export const ProShieldMembership: React.FC<ProShieldProps> = ({ onEnroll }) => {
  return (
    <section id="pro-shield" className="py-16 sm:py-20 bg-[#0A0E17] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            VIP Preventive Maintenance
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Vortex Pro Shield™ Membership
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Annual heating and cooling maintenance to maximize efficiency, stop unexpected breakdowns, and give your home priority status all year.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111726] border border-white/[0.08] shadow-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">Homeowner Protection Plan</span>
              <h3 className="text-xl font-bold text-white mt-0.5">The Pro Shield Club</h3>
              <p className="text-xs text-slate-400">Includes 2 comprehensive seasonal tune-ups every year</p>
            </div>

            <button
              onClick={onEnroll}
              className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Enroll In Pro Shield</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-6">
            {PRO_SHIELD_BENEFITS.map((b, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0A0E17] border border-white/[0.06]">
                <div className="w-5 h-5 rounded-md bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{b.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fine print */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Over 850 active Texas households protected</span>
            </div>
            <div className="text-[11px] text-slate-500">
              *Lifetime minor parts warranty active during continuous membership.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
