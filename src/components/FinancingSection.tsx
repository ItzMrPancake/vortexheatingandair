import React, { useState } from 'react';
import { CreditCard, Check, ArrowRight } from 'lucide-react';

interface FinancingProps {
  onApply: () => void;
}

export const FinancingSection: React.FC<FinancingProps> = ({ onApply }) => {
  const [estimatedCost, setEstimatedCost] = useState<number>(7500);
  const [termMonths, setTermMonths] = useState<number>(60);

  const apr = 0.0899;
  const monthlyRate = apr / 12;
  const estimatedMonthly = Math.round(
    (estimatedCost * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)
  );

  return (
    <section id="financing" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60">
                <CreditCard className="w-3.5 h-3.5" />
                Flexible Home Comfort Financing
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Don’t Let Budget Delay <br />
                <span className="text-sky-400">Your Family’s Home Comfort.</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                An unexpected HVAC failure during a Texas heatwave shouldn't drain your emergency savings. We partner with reputable national lenders to provide convenient monthly payment options, rapid digital approvals, and competitive rates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Simple Digital Application:</strong> Decisions in under 5 minutes</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Low Monthly Payments:</strong> Tailored to your household budget</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>0% Interest Promotions:</strong> Available for qualifying credit</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>No Prepayment Penalties:</strong> Pay off anytime with zero fees</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onApply}
                  className="px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Apply For Financing Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column (5 cols): Estimator Widget */}
            <div className="lg:col-span-5 bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">Monthly Estimator</span>
                <h3 className="text-base font-bold text-white">Estimate Your Installment</h3>
                <p className="text-xs text-slate-400">Slide to see approximate monthly payments</p>
              </div>

              {/* Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300 font-medium">
                  <span>System Estimate:</span>
                  <span className="font-bold text-white font-mono text-sm">${estimatedCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="16000"
                  step="500"
                  value={estimatedCost}
                  onChange={(e) => setEstimatedCost(Number(e.target.value))}
                  className="w-full accent-sky-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$3,000</span>
                  <span>$8,000</span>
                  <span>$16,000</span>
                </div>
              </div>

              {/* Term Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Select Loan Term:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[36, 60, 84].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setTermMonths(months)}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                        termMonths === months
                          ? 'bg-sky-400 text-slate-950 border-sky-400'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {months} Mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Output */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-center space-y-0.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Estimated Monthly</span>
                <div className="text-2xl font-extrabold text-sky-400 font-mono tabular-nums">
                  ${estimatedMonthly} <span className="text-xs text-slate-400 font-normal">/ mo*</span>
                </div>
                <p className="text-[10px] text-slate-500">
                  *Based on {termMonths} mo term at ~8.99% APR. Subject to credit approval.
                </p>
              </div>

              <button
                onClick={onApply}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Check Pre-Approval</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
