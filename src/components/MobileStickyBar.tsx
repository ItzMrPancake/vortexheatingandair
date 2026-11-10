import React from 'react';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
  onOpenSecondOpinion: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenBooking,
  onOpenSecondOpinion,
}) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-xl"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneCallNow}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] tracking-wide text-center transition-colors shadow-xs active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 mb-0.5" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-[10px] tracking-wide text-center transition-colors shadow-xs active:scale-95 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 mb-0.5 text-slate-950" />
          <span>Book Service</span>
        </button>

        <button
          onClick={onOpenSecondOpinion}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-rose-400 font-bold text-[10px] tracking-wide text-center transition-colors border border-slate-800 active:scale-95 cursor-pointer"
        >
          <ShieldCheck className="w-3.5 h-3.5 mb-0.5 text-rose-400" />
          <span>Free 2nd Op.</span>
        </button>
      </div>
    </aside>
  );
};
