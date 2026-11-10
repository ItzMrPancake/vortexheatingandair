import React, { useState } from 'react';
import { Snowflake, Flame, Wind, Building2, Check, ArrowRight, ShieldCheck, Wrench, Sparkles, Gauge, RefreshCw, CloudHail, Cpu, Activity, ShieldAlert, Layers, Sun, Filter, Droplets, Box, Package, Coffee, Building, ClipboardCheck, HardHat, Zap, Sliders } from 'lucide-react';
import { SERVICES } from '../data/hvacData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  selectedCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onBookService,
}) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>(selectedCategory || 'cooling');

  React.useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const categories: { key: ServiceCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'cooling', label: 'Air Conditioning & Cooling', icon: <Snowflake className="w-4 h-4" /> },
    { key: 'heating', label: 'Heating & Furnaces', icon: <Flame className="w-4 h-4" /> },
    { key: 'iaq', label: 'Air Quality & Insulation', icon: <Wind className="w-4 h-4" /> },
    { key: 'commercial', label: 'Commercial & Refrigeration', icon: <Building2 className="w-4 h-4" /> },
  ];

  const filteredServices = SERVICES.filter((s) => s.category === activeTab);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-sky-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-400" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-sky-400" />;
      case 'CloudHail': return <CloudHail className="w-5 h-5 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-rose-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-slate-300" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-slate-300" />;
      case 'Layers': return <Layers className="w-5 h-5 text-slate-300" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Filter': return <Filter className="w-5 h-5 text-slate-300" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-sky-400" />;
      case 'Box': return <Box className="w-5 h-5 text-slate-300" />;
      case 'Package': return <Package className="w-5 h-5 text-slate-300" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-slate-300" />;
      case 'Building': return <Building className="w-5 h-5 text-slate-300" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-slate-300" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-slate-300" />;
      default: return <Wrench className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#0A0E17] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Complete Residential &amp; Commercial Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Precision Climate Solutions Built For Texas
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              From scorching summer heatwaves to sudden sub-freezing Texas winter freezes, Vortex provides prompt, honest, and certified climate engineering.
            </p>
          </div>

          {/* Technician Guarantee Callout */}
          <div className="hidden lg:flex items-center gap-3.5 p-3 rounded-xl bg-[#111726] border border-white/[0.08] shadow-sm shrink-0 max-w-sm">
            <img
              src="./images/hvac_service_tech_1794328676762.jpg"
              alt="Certified Vortex HVAC technician inspecting outdoor AC unit"
              className="w-14 h-14 rounded-lg object-cover shrink-0"
              width={56}
              height={56}
            />
            <div>
              <p className="text-xs font-bold text-white">Certified Technicians</p>
              <p className="text-[11px] text-slate-400">
                TACLA115421E licensed specialists with stocked trucks for 1-trip resolutions.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Segmented Control Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111726] rounded-xl border border-white/[0.08] mb-8 overflow-x-auto scrollbar-none shadow-sm">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveTab(cat.key);
                  onSelectCategory(cat.key);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid with Equal Card Heights & Uniform Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`h-full flex flex-col justify-between rounded-2xl p-6 bg-[#111726] border transition-all ${
                service.popular
                  ? 'border-sky-500/40 ring-1 ring-sky-500/15 shadow-sm'
                  : 'border-white/[0.08] hover:border-white/[0.16]'
              }`}
            >
              <div className="flex flex-col flex-1 space-y-3">
                {/* Header Row: Icon & Badge */}
                <div className="flex items-center justify-between gap-3 h-10">
                  <div className="p-2.5 rounded-xl bg-[#0A0E17] border border-white/[0.08] shrink-0">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/25">
                      Popular
                    </span>
                  )}
                </div>

                {/* Title & Tagline with stable heights */}
                <div>
                  <h3 className="text-base font-bold text-white min-h-[26px]">
                    {service.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 mt-0.5 min-h-[34px] leading-snug">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="flex-1 space-y-1.5 pt-3 border-t border-white/[0.06]">
                  {service.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for card note */}
                <div className="text-[11px] text-slate-400 bg-[#0A0E17] rounded-lg p-2.5 border border-white/[0.06]">
                  <span className="font-semibold text-slate-200">Best for: </span>
                  {service.idealFor}
                </div>
              </div>

              {/* Bottom Action Area: Aligned flush across cards */}
              <div className="pt-4 mt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onBookService(service.name)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dealer Accreditation Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-[#111726] border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-0.5 max-w-xl">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Authorized American Standard Dealer &amp; Amana Specialist
            </h4>
            <p className="text-xs text-slate-400">
              We service all makes and models (Carrier, Trane, Lennox, Goodman, Rheem, Daikin) with authentic factory parts.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="px-2.5 py-1 rounded-md bg-[#0A0E17] border border-white/[0.08]">American Standard</span>
            <span className="px-2.5 py-1 rounded-md bg-[#0A0E17] border border-white/[0.08]">Amana</span>
            <span className="px-2.5 py-1 rounded-md bg-[#0A0E17] border border-white/[0.08]">All Makes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
