import React, { useState } from 'react';
import { MapPin, Search, CheckCircle, Navigation, Phone } from 'lucide-react';
import { SERVICE_CITIES, COMPANY_INFO } from '../data/hvacData';

interface ServiceAreaProps {
  onScheduleForCity: (city: string) => void;
}

export const ServiceAreaFinder: React.FC<ServiceAreaProps> = ({ onScheduleForCity }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = SERVICE_CITIES.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.county.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="service-areas" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60">
            <MapPin className="w-3.5 h-3.5" />
            Waxahachie &amp; 38 Surrounding Communities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Serving North &amp; Central Texas
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Headquartered at 261 Park Meadows Drive in Waxahachie, TX. Dispatched daily across Ellis, Dallas, Johnson, Tarrant, and Kaufman counties.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Type your city (e.g. Midlothian, Arlington, Waxahachie...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors shadow-inner"
          />
        </div>

        {/* Live Search Result Confirmation */}
        {searchQuery.trim().length > 0 && (
          <div className="max-w-xl mx-auto mb-6 p-3 rounded-xl bg-sky-950/80 border border-sky-800 text-center space-y-1">
            {filteredCities.length > 0 ? (
              <p className="text-xs text-sky-200 font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                Yes! We provide daily service dispatch to {filteredCities[0].name} with zero travel surcharges.
              </p>
            ) : (
              <p className="text-xs text-slate-300">
                Don't see your city? Call us at <a href={`tel:${COMPANY_INFO.phoneCallNow}`} className="text-sky-400 font-bold underline">{COMPANY_INFO.phoneCallNow}</a>.
              </p>
            )}
          </div>
        )}

        {/* 38 Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {filteredCities.map((city) => (
            <button
              key={city.name}
              onClick={() => onScheduleForCity(city.name)}
              className={`p-2.5 rounded-xl text-left transition-all border group cursor-pointer flex flex-col justify-between ${
                city.isHeadquarters
                  ? 'bg-slate-950 border-sky-500/80 shadow-sm ring-1 ring-sky-500/30'
                  : 'bg-slate-950 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-xs font-bold transition-colors ${city.isHeadquarters ? 'text-sky-400' : 'text-slate-200 group-hover:text-white'}`}>
                    {city.name}
                  </span>
                  {city.isHeadquarters && (
                    <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-sky-500 text-slate-950">
                      HQ
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  {city.county}
                </span>
              </div>
              <span className="text-[10px] text-sky-400 mt-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Book here →
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Dispatch Info */}
        <div className="mt-8 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-sky-400" />
            GPS-Tracked Fleet Across I-35E, Hwy 287, &amp; I-20
          </span>
          <span className="text-slate-600">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            Same-day emergency slots available
          </span>
          <span className="text-slate-600">·</span>
          <a href={`tel:${COMPANY_INFO.phoneCallNow}`} className="text-white hover:text-sky-400 font-bold flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            Direct: {COMPANY_INFO.phoneCallNow}
          </a>
        </div>

      </div>
    </section>
  );
};
