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
    <section id="reviews" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Scoreboard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Verified Texas Homeowner &amp; Commercial Client Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              5.0 Star Reputation Built On Honest Work
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Read real, unedited reviews from homeowners across Waxahachie, Ellis County, and the DFW metroplex who trust Vortex.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-5 shrink-0 shadow-sm">
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

            <div className="h-10 w-px bg-slate-800" />

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
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            All Reviews ({REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('repair')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'repair'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            Repairs &amp; Tune-Ups
          </button>
          <button
            onClick={() => setFilter('replacement')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'replacement'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            System Replacements
          </button>
          <button
            onClick={() => setFilter('omar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'omar'
                ? 'bg-rose-950 text-rose-300 border border-rose-800/60'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            Technician Omar
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 shadow-sm hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500">{rev.timeAgo}</span>
                </div>

                {rev.highlight && (
                  <p className="text-xs font-bold text-sky-400">
                    “{rev.highlight}”
                  </p>
                )}

                <p className="text-xs text-slate-300 leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs">
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
