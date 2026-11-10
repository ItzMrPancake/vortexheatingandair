import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { REVIEWS, COMPANY_INFO } from '../data/hvacData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews = filter === 'all'
    ? REVIEWS
    : filter === 'replacement'
    ? REVIEWS.filter((r) => r.serviceType.toLowerCase().includes('replacement') || r.serviceType.toLowerCase().includes('install'))
    : filter === 'repair'
    ? REVIEWS.filter((r) => r.serviceType.toLowerCase().includes('repair') || r.serviceType.toLowerCase().includes('service'))
    : REVIEWS.filter((r) => r.content.toLowerCase().includes('omar'));

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#0A0E17] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Scoreboard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Verified Texas Homeowner &amp; Commercial Client Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              5.0 Star Reputation Built On Honest Work
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Read real, unedited reviews from homeowners across Waxahachie, Ellis County, and the DFW metroplex who trust Vortex.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 rounded-2xl bg-[#111726] border border-white/[0.08] flex items-center gap-5 shrink-0 shadow-sm">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums leading-none">
                {COMPANY_INFO.stats.rating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                {COMPANY_INFO.stats.reviewCount} Verified Reviews
              </div>
            </div>

            <div className="h-10 w-px bg-white/[0.08]" />

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Google Verified Reviews</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300"
              >
                <MessageSquare className="w-3 h-3" />
                Leave A Review
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'all'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-[#111726] border border-white/[0.08]'
            }`}
          >
            All Reviews ({REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('repair')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'repair'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-[#111726] border border-white/[0.08]'
            }`}
          >
            Repairs &amp; Tune-Ups
          </button>
          <button
            onClick={() => setFilter('replacement')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'replacement'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white bg-[#111726] border border-white/[0.08]'
            }`}
          >
            System Replacements
          </button>
          <button
            onClick={() => setFilter('omar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'omar'
                ? 'bg-rose-500 text-white font-bold'
                : 'text-slate-400 hover:text-white bg-[#111726] border border-white/[0.08]'
            }`}
          >
            Technician Omar
          </button>
        </div>

        {/* Reviews Grid with Equal Card Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="h-full flex flex-col justify-between p-6 rounded-2xl bg-[#111726] border border-white/[0.08] shadow-sm hover:border-white/[0.16] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 h-6">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{rev.timeAgo}</span>
                </div>

                {rev.highlight && (
                  <p className="text-xs font-bold text-sky-400 min-h-[18px]">
                    “{rev.highlight}”
                  </p>
                )}

                <p className="text-xs text-slate-300 leading-relaxed min-h-[54px]">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-3.5 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white">{rev.author}</h4>
                  <span className="text-[10px] text-slate-400">{rev.serviceType}</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
