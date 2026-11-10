import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, FileText, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface SecondOpinionProps {
  onRequestSecondOpinion: (notes?: string) => void;
}

export const SecondOpinionSection: React.FC<SecondOpinionProps> = ({ onRequestSecondOpinion }) => {
  const [competitorQuote, setCompetitorQuote] = useState('');
  const [equipmentAge, setEquipmentAge] = useState('8-12 years');
  const [competitorDiagnosis, setCompetitorDiagnosis] = useState('Condemned system / Complete replacement advised');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `Competitor Quote: $${competitorQuote || 'N/A'}, System Age: ${equipmentAge}, Stated Problem: ${competitorDiagnosis}`;
    onRequestSecondOpinion(details);
  };

  return (
    <section id="second-opinion" className="py-16 sm:py-20 bg-[#0A0E17] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-10 bg-[#111726] border border-white/[0.08] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Vortex Second Opinion Guarantee
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Got An Expensive HVAC Quote? <br />
                <span className="text-rose-400">Get A 100% Free Second Opinion.</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Large corporate heating and air companies in DFW frequently send commissioned sales reps who condemn repairable units or push $15,000+ replacements for simple, fixable problems.
              </p>

              {/* Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-[#0A0E17] border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    Other DFW Companies
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Commission-driven salespeople</li>
                    <li>• Pushing $14k–$20k replacements</li>
                    <li>• High-pressure "sign today" tactics</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0E17] border border-white/[0.08] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    The Vortex Standard
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Certified master technicians, not sales reps</li>
                    <li>• If it can be repaired safely, we tell you</li>
                    <li>• <strong>$0 fee</strong> for replacement second opinions</li>
                  </ul>
                </div>
              </div>

              {/* Customer quote */}
              <div className="p-4 rounded-xl bg-[#0A0E17] border border-white/[0.08] text-xs text-slate-300 italic">
                “I had gotten 3 bids but was most impressed with Omar, which happened to be the lowest bid... fast, clean work and they stand behind their product!”
                <span className="block mt-1 font-semibold text-rose-400 not-italic">— Desiree Childs (Verified Google Review)</span>
              </div>

            </div>

            {/* Right Interactive Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/[0.08] shadow-sm space-y-4">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-sky-400" />
                    Request Your Free 2nd Opinion
                  </h3>
                  <p className="text-xs text-slate-400">
                    Tell us what the other company quoted. We will verify it free.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      What did they quote you? (Approx. $)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $12,500 or $1,800 for repair"
                      value={competitorQuote}
                      onChange={(e) => setCompetitorQuote(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#111726] border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Approximate Age of Your Unit
                    </label>
                    <select
                      value={equipmentAge}
                      onChange={(e) => setEquipmentAge(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#111726] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-sky-400 transition-colors"
                    >
                      <option value="Under 5 years">Under 5 years</option>
                      <option value="5-10 years">5 to 10 years</option>
                      <option value="10-15 years">10 to 15 years</option>
                      <option value="15+ years">15+ years</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      What did they claim was wrong?
                    </label>
                    <textarea
                      rows={2}
                      value={competitorDiagnosis}
                      onChange={(e) => setCompetitorDiagnosis(e.target.value)}
                      placeholder="e.g. Bad compressor, cracked heat exchanger..."
                      className="w-full px-3 py-2 rounded-lg bg-[#111726] border border-white/[0.08] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Verify My Quote For Free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-1 text-center">
                    <a
                      href={`tel:${COMPANY_INFO.phoneCallNow}`}
                      className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-rose-400" />
                      Or call directly: {COMPANY_INFO.phoneCallNow}
                    </a>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
