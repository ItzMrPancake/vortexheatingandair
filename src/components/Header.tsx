import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronDown, ShieldCheck, Snowflake, Flame, Wind, Building2, Tag, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface HeaderProps {
  onOpenBooking: (serviceName?: string, promoCode?: string) => void;
  onSelectServiceCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onSelectServiceCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Compact Brand Wordmark & Official SVG Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Vortex Heating & Air Solutions Home"
        >
          <img
            src="./assets/aistudio/Vortex_Master_Logo_bcac8e40.svg"
            alt="Vortex Heating & Air Solutions"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            width={120}
            height={40}
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-base font-extrabold tracking-tight text-white leading-none">
              VORTEX
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-sky-400 leading-tight">
              Heating &amp; Air Solutions
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Dark Mode Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
          
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => navigateToSection('services')}
              className="flex items-center gap-1 py-2 text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Clean, Elegant Dark Dropdown Popover */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-[680px] bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-5 grid grid-cols-4 gap-4 text-left z-50 animate-in fade-in duration-150">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-slate-800">
                    <Snowflake className="w-3.5 h-3.5" />
                    <span>Cooling</span>
                  </div>
                  <ul className="text-xs space-y-1 text-slate-300">
                    <li><button onClick={() => { onSelectServiceCategory('cooling'); navigateToSection('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">AC Repair</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('cooling'); navigateToSection('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">AC Installation</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('cooling'); navigateToSection('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">$49 Tune-Up</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('cooling'); navigateToSection('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Mini-Splits</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('cooling'); navigateToSection('services'); }} className="hover:text-sky-400 transition-colors text-left cursor-pointer">Hail Damage</button></li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-slate-800">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Heating</span>
                  </div>
                  <ul className="text-xs space-y-1 text-slate-300">
                    <li><button onClick={() => { onSelectServiceCategory('heating'); navigateToSection('services'); }} className="hover:text-rose-400 transition-colors text-left cursor-pointer">Furnace Repair</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('heating'); navigateToSection('services'); }} className="hover:text-rose-400 transition-colors text-left cursor-pointer">Heating Install</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('heating'); navigateToSection('services'); }} className="hover:text-rose-400 transition-colors text-left cursor-pointer">Heat Pumps</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('heating'); navigateToSection('services'); }} className="hover:text-rose-400 transition-colors text-left cursor-pointer">Safety Tune-Ups</button></li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-slate-200 font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-slate-800">
                    <Wind className="w-3.5 h-3.5 text-slate-400" />
                    <span>Air Quality</span>
                  </div>
                  <ul className="text-xs space-y-1 text-slate-300">
                    <li><button onClick={() => { onSelectServiceCategory('iaq'); navigateToSection('services'); }} className="hover:text-white transition-colors text-left cursor-pointer">Room Temp Analysis</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('iaq'); navigateToSection('services'); }} className="hover:text-white transition-colors text-left cursor-pointer">Air Duct Cleaning</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('iaq'); navigateToSection('services'); }} className="hover:text-white transition-colors text-left cursor-pointer">Attic Insulation</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('iaq'); navigateToSection('services'); }} className="hover:text-white transition-colors text-left cursor-pointer">UV Purifiers</button></li>
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-slate-200 font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-slate-800">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Commercial</span>
                  </div>
                  <ul className="text-xs space-y-1 text-slate-300">
                    <li><button onClick={() => { onSelectServiceCategory('commercial'); navigateToSection('commercial'); }} className="hover:text-white transition-colors text-left cursor-pointer">Walk-In Coolers</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('commercial'); navigateToSection('commercial'); }} className="hover:text-white transition-colors text-left cursor-pointer">Freezer Repair</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('commercial'); navigateToSection('commercial'); }} className="hover:text-white transition-colors text-left cursor-pointer">Rooftop AC (RTUs)</button></li>
                    <li><button onClick={() => { onSelectServiceCategory('commercial'); navigateToSection('commercial'); }} className="hover:text-white transition-colors text-left cursor-pointer">Commercial PM Plans</button></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigateToSection('second-opinion')}
            className="text-rose-400 hover:text-rose-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Free 2nd Opinions</span>
          </button>

          <button
            onClick={() => navigateToSection('promotions')}
            className="text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <Tag className="w-3.5 h-3.5 text-sky-400" />
            <span>$49 Tune-Up Special</span>
          </button>

          <button
            onClick={() => navigateToSection('commercial')}
            className="text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Commercial</span>
          </button>

          <button
            onClick={() => navigateToSection('service-areas')}
            className="text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Waxahachie &amp; 38 Cities</span>
          </button>
        </nav>

        {/* Zone 3: Direct Phone & 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phoneCallNow}`}
            className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-sky-400 transition-colors px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="hidden sm:inline font-mono text-sm">{COMPANY_INFO.phoneCallNow}</span>
            <span className="sm:hidden font-mono">Call</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-950" />
            <span>Schedule</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 bg-slate-900 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-slate-950/98 backdrop-blur-xl z-50 p-5 overflow-y-auto border-t border-slate-800">
          <div className="space-y-4 max-w-md mx-auto text-sm">
            
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-rose-400">24/7 Texas Emergency Dispatch</p>
                <p className="text-base font-extrabold text-white">{COMPANY_INFO.phoneCallNow}</p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneCallNow}`}
                className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold"
              >
                Call Now
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2">Services</p>
              <button
                onClick={() => { onSelectServiceCategory('cooling'); navigateToSection('services'); }}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium flex items-center justify-between cursor-pointer"
              >
                <span>Air Conditioning &amp; Cooling</span>
                <Snowflake className="w-4 h-4 text-sky-400" />
              </button>
              <button
                onClick={() => { onSelectServiceCategory('heating'); navigateToSection('services'); }}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium flex items-center justify-between cursor-pointer"
              >
                <span>Heating &amp; Furnaces</span>
                <Flame className="w-4 h-4 text-rose-400" />
              </button>
              <button
                onClick={() => { onSelectServiceCategory('iaq'); navigateToSection('services'); }}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium flex items-center justify-between cursor-pointer"
              >
                <span>Duct Cleaning &amp; Attic Insulation</span>
                <Wind className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => { onSelectServiceCategory('commercial'); navigateToSection('commercial'); }}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium flex items-center justify-between cursor-pointer"
              >
                <span>Commercial Refrigeration &amp; HVAC</span>
                <Building2 className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="space-y-1 pt-3 border-t border-slate-800">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2">Programs &amp; Specials</p>
              <button
                onClick={() => navigateToSection('second-opinion')}
                className="w-full text-left px-3 py-2 rounded-lg text-rose-400 hover:bg-slate-900 font-bold flex items-center justify-between cursor-pointer"
              >
                <span>Free 2nd Opinions (Save $500+)</span>
                <ShieldCheck className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateToSection('promotions')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium flex items-center justify-between cursor-pointer"
              >
                <span>$49 Performance Tune-Up</span>
                <Tag className="w-4 h-4 text-sky-400" />
              </button>
              <button
                onClick={() => navigateToSection('service-areas')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium flex items-center justify-between cursor-pointer"
              >
                <span>38 Texas Service Areas</span>
                <MapPin className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => navigateToSection('reviews')}
                className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 font-medium cursor-pointer"
              >
                <span>5.0 Star Reviews (329+ Verified)</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-center text-xs uppercase tracking-wider cursor-pointer"
              >
                Schedule Service Online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
