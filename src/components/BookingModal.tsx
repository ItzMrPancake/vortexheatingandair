import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CITIES } from '../data/hvacData';
import { BookingSubmission } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPromo?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialPromo = '',
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<BookingSubmission>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Air Conditioning Repair',
    city: 'Waxahachie',
    notes: initialPromo ? `Promo code: ${initialPromo}` : '',
    isEmergency: false,
    preferredTime: 'Morning (8am - 12pm)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length > 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`;
    } else if (raw.length > 3) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
    }
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const ref = `VTX-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-800">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Service Request Received!</h3>
            <p className="text-xs text-slate-300">
              Thank you, <strong className="text-white">{formData.firstName}</strong>. Ticket ID:{' '}
              <span className="font-mono font-bold text-sky-400">{ticketId}</span>. A Vortex dispatcher will call you promptly to confirm scheduling.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-0.5 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>Fast Service Dispatch</span>
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Book Your HVAC Service
              </h3>
              <p className="text-xs text-slate-400">
                Licensed #TACLA115421E · Waxahachie &amp; 38 Texas Communities
              </p>
            </div>

            {/* Emergency Toggle */}
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">Is this a 24/7 same-day emergency?</span>
              <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-rose-400">
                <input
                  type="checkbox"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="accent-rose-500 w-3.5 h-3.5 rounded cursor-pointer"
                />
                <span>Urgent Priority</span>
              </label>
            </div>

            {/* Names */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  First Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                    if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: '' }));
                  }}
                  className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-white text-xs ${
                    errors.firstName ? 'border-red-500' : 'border-slate-800 focus:border-sky-400'
                  }`}
                />
                {errors.firstName && <p className="text-[10px] text-red-400 mt-0.5">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-400"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Phone <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(469) 000-0000"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-white text-xs ${
                    errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-sky-400'
                  }`}
                />
                {errors.phone && <p className="text-[10px] text-red-400 mt-0.5">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-white text-xs ${
                    errors.email ? 'border-red-500' : 'border-slate-800 focus:border-sky-400'
                  }`}
                />
                {errors.email && <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>}
              </div>
            </div>

            {/* Service & City */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Service</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-400"
                >
                  <option value="Air Conditioning Repair">AC Repair &amp; Diagnostics</option>
                  <option value="AC Installation & Replacement">New AC Installation</option>
                  <option value="$49 HVAC Performance Tune-Up Offer">$49 Tune-Up Special</option>
                  <option value="Free HVAC Second Opinion">Free 2nd Opinion on Quote</option>
                  <option value="Heating Repair & Service">Heating &amp; Furnace Repair</option>
                  <option value="Ductless Mini-Splits">Ductless Mini-Splits</option>
                  <option value="Air Duct Cleaning">Air Duct Cleaning</option>
                  <option value="Commercial Refrigeration Repair">Commercial Refrigeration</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">City Location</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-400"
                >
                  {SERVICE_CITIES.map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                Describe the problem or enter promo code:
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Unit is blowing warm, fan not turning..."
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-sky-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>Confirm &amp; Request Dispatch</span>
            </button>

            <div className="pt-1 text-center">
              <a
                href={`tel:${COMPANY_INFO.phoneCallNow}`}
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center justify-center gap-1"
              >
                <Phone className="w-3 h-3 text-rose-400" />
                Or call our hotline directly: {COMPANY_INFO.phoneCallNow}
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
