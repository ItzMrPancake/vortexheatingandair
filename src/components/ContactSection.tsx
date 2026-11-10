import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICE_CITIES } from '../data/hvacData';
import { BookingSubmission } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledPromo?: string;
  onSubmitted?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService = '',
  prefilledPromo = '',
}) => {
  const [formData, setFormData] = useState<BookingSubmission>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: prefilledService || 'Air Conditioning Repair',
    city: 'Waxahachie',
    notes: prefilledPromo ? `Promo applied: ${prefilledPromo}` : '',
    isEmergency: false,
    preferredTime: 'Morning (8am - 12pm)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  React.useEffect(() => {
    if (prefilledPromo) {
      setFormData((prev) => ({
        ...prev,
        notes: prev.notes ? `${prev.notes} | Promo: ${prefilledPromo}` : `Claiming promo: ${prefilledPromo}`,
      }));
    }
  }, [prefilledPromo]);

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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      serviceType: 'Air Conditioning Repair',
      city: 'Waxahachie',
      notes: '',
      isEmergency: false,
      preferredTime: 'Morning (8am - 12pm)',
    });
  };

  return (
    <section id="contact" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60">
              <Phone className="w-3.5 h-3.5" />
              Direct Texas Dispatch
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Contact Vortex Heating &amp; Air Solutions
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Reach our local team by calling <strong className="text-white">469-807-3995</strong> or our 24/7 hotline at <strong className="text-rose-400">469-309-6778</strong>, or submit the form below for fast dispatch.
            </p>

            {/* Direct Cards */}
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${COMPANY_INFO.phoneCallNow}`}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-950/80 text-rose-400 border border-rose-800/60 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary Call Line</span>
                    <p className="text-sm font-extrabold text-white group-hover:text-sky-400 transition-colors">
                      {COMPANY_INFO.phoneCallNow}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-rose-400 font-bold">Call Now →</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneOffice}`}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-950/80 text-sky-400 border border-sky-800/60 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Office &amp; Dispatch</span>
                    <p className="text-sm font-extrabold text-white group-hover:text-sky-400 transition-colors">
                      {COMPANY_INFO.phoneOffice}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-sky-400 font-bold">Call Office →</span>
              </a>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300 shadow-sm">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Headquarters:</strong> {COMPANY_INFO.address}, {COMPANY_INFO.cityStateZip}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Email:</strong> {COMPANY_INFO.email}</span>
                </div>
                <div className="flex items-start gap-2 text-white pt-1">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p><strong>Hours:</strong> {COMPANY_INFO.hours.weekday}</p>
                    <p>{COMPANY_INFO.hours.weekend}</p>
                    <p className="text-rose-400 font-semibold mt-0.5">{COMPANY_INFO.hours.emergency}</p>
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5 border-t border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Texas HVAC License: #TACLA115421E</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Sleek Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-800">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Request Confirmed!</h3>
                  <p className="text-xs text-slate-300">
                    Thank you, <strong className="text-white">{formData.firstName}</strong>. Confirmation ID:{' '}
                    <span className="font-mono font-bold text-sky-400">{ticketId}</span>. A Vortex dispatcher will call you at <strong className="text-white">{formData.phone}</strong> promptly.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="border-b border-slate-800 pb-2.5 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">Schedule Service Online</h3>
                      <p className="text-xs text-slate-400">Prompt response within business hours</p>
                    </div>

                    <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer select-none bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      <input
                        type="checkbox"
                        checked={formData.isEmergency}
                        onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                        className="accent-rose-500 w-3.5 h-3.5 rounded cursor-pointer"
                      />
                      <span className={formData.isEmergency ? 'text-rose-400 font-bold' : 'text-slate-400'}>
                        Urgent Same-Day
                      </span>
                    </label>
                  </div>

                  {formData.isEmergency && (
                    <div className="p-2.5 rounded-lg bg-rose-950/80 border border-rose-800/80 flex items-center gap-2 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Priority emergency flag enabled for rapid dispatch!</span>
                    </div>
                  )}

                  {/* Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        First Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: '' }));
                        }}
                        placeholder="John"
                        className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-500' : 'border-slate-800 focus:border-sky-400'
                        }`}
                      />
                      {errors.firstName && <p className="text-[10px] text-red-400 mt-0.5">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(469) 000-0000"
                        className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-sky-400'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-400 mt-0.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-3 py-2 rounded-lg bg-slate-950 border text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-800 focus:border-sky-400'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Service Needed</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-400 transition-colors"
                      >
                        <option value="Air Conditioning Repair">AC Repair &amp; Diagnostics</option>
                        <option value="AC Installation & Replacement">New AC Installation</option>
                        <option value="$49 HVAC Performance Tune-Up Offer">$49 Tune-Up Special</option>
                        <option value="Free HVAC Second Opinion">Free 2nd Opinion on Quote</option>
                        <option value="Heating Repair & Service">Heating &amp; Furnace Repair</option>
                        <option value="Ductless Mini-Splits">Ductless Mini-Split</option>
                        <option value="Air Duct Cleaning">Duct Cleaning &amp; Sanitization</option>
                        <option value="Commercial Refrigeration Repair">Commercial Refrigeration</option>
                        <option value="Vortex Pro Shield Membership">Pro Shield Membership</option>
                        <option value="Other Service">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">City Location</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-400 transition-colors"
                      >
                        {SERVICE_CITIES.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name} {c.isHeadquarters ? '(HQ)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Arrival Window */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time Window</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)'].map((win) => (
                        <button
                          key={win}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: win })}
                          className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                            formData.preferredTime === win
                              ? 'bg-slate-800 text-white border-sky-400'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {win}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      How can we help? (Symptoms, age, or notes)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. AC blowing warm air, outdoor unit buzzing..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                    <span>Submit Service Request</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    We respect your privacy. Your information is never sold or shared.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
