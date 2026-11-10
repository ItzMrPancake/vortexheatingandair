import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A10] text-slate-400 border-t border-white/[0.08] pt-16 pb-24 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./assets/aistudio/Vortex_Master_Logo_bcac8e40.svg"
                alt="Vortex Heating &amp; Air Solutions Logo"
                className="h-9 w-auto object-contain"
                width={110}
                height={36}
              />
              <div>
                <span className="text-base font-black text-white tracking-tight">VORTEX</span>
                <span className="block text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                  Heating &amp; Air Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Mastering Your Home’s Climate Control One VORTEX AT A TIME. Professional heating, AC repair, attic insulation, and commercial refrigeration in Waxahachie, Midlothian, and across North Texas.
            </p>

            <div className="space-y-1 text-slate-400 text-[11px]">
              <p>State License: <strong className="text-white">#{COMPANY_INFO.license}</strong></p>
              <p className="text-sky-400 font-semibold">American Standard Dealer &amp; Amana Advantage Specialist</p>
              <p>We Service All Major Makes &amp; Models</p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">HVAC Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => { onSelectCategory('cooling'); scrollTo('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">AC Repair &amp; Diagnostics</button></li>
              <li><button onClick={() => { onSelectCategory('cooling'); scrollTo('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">AC System Installation</button></li>
              <li><button onClick={() => { onSelectCategory('cooling'); scrollTo('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">$49 Performance Tune-Up</button></li>
              <li><button onClick={() => { onSelectCategory('cooling'); scrollTo('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Ductless Mini-Splits</button></li>
              <li><button onClick={() => { onSelectCategory('heating'); scrollTo('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Heating &amp; Furnace Repair</button></li>
              <li><button onClick={() => { onSelectCategory('iaq'); scrollTo('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Duct Cleaning &amp; Attic Insulation</button></li>
              <li><button onClick={() => { onSelectCategory('commercial'); scrollTo('commercial'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Commercial Refrigeration</button></li>
            </ul>
          </div>

          {/* Col 3: Programs & Trust */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Customer Programs</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('second-opinion')} className="hover:text-rose-400 transition-colors text-left text-rose-300 font-semibold cursor-pointer">Free Second Opinions</button></li>
              <li><button onClick={() => scrollTo('promotions')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Seasonal Promotions</button></li>
              <li><button onClick={() => scrollTo('pro-shield')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Vortex Pro Shield Club</button></li>
              <li><button onClick={() => scrollTo('financing')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Financing &amp; Payments</button></li>
              <li><button onClick={() => scrollTo('service-areas')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">38 Texas Service Areas</button></li>
              <li><button onClick={() => scrollTo('reviews')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">5.0 Star Reviews (329+)</button></li>
              <li><button onClick={() => scrollTo('faqs')} className="hover:text-sky-400 transition-colors text-left cursor-pointer">FAQ &amp; Support</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Contact &amp; Hours</h4>
            <div className="space-y-2.5">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">24/7 Hotline</span>
                <a href={`tel:${COMPANY_INFO.phoneCallNow}`} className="block text-white font-bold hover:text-sky-400 text-sm">
                  {COMPANY_INFO.phoneCallNow}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Office Dispatch</span>
                <a href={`tel:${COMPANY_INFO.phoneOffice}`} className="block text-slate-300 font-semibold hover:text-sky-400">
                  {COMPANY_INFO.phoneOffice}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Shop &amp; Dispatch HQ</span>
                <p className="text-slate-300 leading-tight">
                  {COMPANY_INFO.address}<br />
                  {COMPANY_INFO.cityStateZip}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Hours</span>
                <p className="text-slate-300 leading-tight">
                  {COMPANY_INFO.hours.weekday}<br />
                  {COMPANY_INFO.hours.weekend}
                </p>
                <p className="text-rose-400 font-semibold mt-0.5">{COMPANY_INFO.hours.emergency}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Vortex Air Solutions LLC. All Rights Reserved. Texas HVAC Contractor License #TACLA115421E.
          </p>

          <div className="flex items-center gap-6">
            <span>American Standard &amp; Amana Specialists</span>
            <span>·</span>
            <span>Waxahachie, TX</span>
            <span>·</span>
            <button onClick={onOpenBooking} className="text-sky-400 hover:underline cursor-pointer">
              Schedule Service Online
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
