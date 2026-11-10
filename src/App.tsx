/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromotionsSection } from './components/PromotionsSection';
import { ServicesSection } from './components/ServicesSection';
import { SecondOpinionSection } from './components/SecondOpinionSection';
import { ProShieldMembership } from './components/ProShieldMembership';
import { CommercialRefrigeration } from './components/CommercialRefrigeration';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaFinder } from './components/ServiceAreaFinder';
import { FinancingSection } from './components/FinancingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';
import { ServiceCategory } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [bookingPromo, setBookingPromo] = useState<string>('');
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('cooling');

  const openBookingWith = (serviceName = '', promoCode = '') => {
    setBookingService(serviceName);
    setBookingPromo(promoCode);
    setIsBookingOpen(true);
  };

  const handleTriageSelect = (issue: string) => {
    openBookingWith(issue);
  };

  const handleClaimOffer = (title: string, code: string) => {
    openBookingWith(title, code);
  };

  const handleBookService = (serviceName: string) => {
    openBookingWith(serviceName);
  };

  const handleScheduleCommercial = (serviceType = 'Commercial Refrigeration Repair') => {
    openBookingWith(serviceType);
  };

  const handleSecondOpinion = (notes?: string) => {
    openBookingWith('Free HVAC Second Opinion', notes ? `Details: ${notes}` : '2NDOPIN');
  };

  const handleScheduleForCity = (cityName: string) => {
    openBookingWith('Air Conditioning Repair', `Service requested for ${cityName}, TX`);
  };

  const handleEnrollProShield = () => {
    openBookingWith('Vortex Pro Shield Membership', 'PROSHIELD-ENROLL');
  };

  const handleApplyFinancing = () => {
    openBookingWith('HVAC Financing Inquiry', 'FINANCING-APPLICATION');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950 font-sans">
      
      {/* Primary Sticky Top Bar */}
      <Header
        onOpenBooking={() => openBookingWith()}
        onSelectServiceCategory={(cat) => setServiceCategory(cat as ServiceCategory)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => openBookingWith()}
          onSelectTriage={handleTriageSelect}
        />

        {/* 2. Special Offers & Promotions ($49 Tune-Up, Free 2nd Opinion, Combos) */}
        <PromotionsSection onClaimOffer={handleClaimOffer} />

        {/* 3. Core HVAC & Indoor Air Quality Services */}
        <ServicesSection
          selectedCategory={serviceCategory}
          onSelectCategory={(cat) => setServiceCategory(cat)}
          onBookService={handleBookService}
        />

        {/* 4. Signature Free Second Opinion Feature Block */}
        <SecondOpinionSection onRequestSecondOpinion={handleSecondOpinion} />

        {/* 5. Commercial Refrigeration & Rooftop HVAC Hub */}
        <CommercialRefrigeration onScheduleCommercial={handleScheduleCommercial} />

        {/* 6. Vortex Pro Shield Membership Plan */}
        <ProShieldMembership onEnroll={handleEnrollProShield} />

        {/* 7. Verified Customer Reviews & 5.0 Google Scoreboard */}
        <ReviewsSection />

        {/* 8. Interactive 38-City Texas Service Area Finder */}
        <ServiceAreaFinder onScheduleForCity={handleScheduleForCity} />

        {/* 9. Financing Options & Interactive Payment Estimator */}
        <FinancingSection onApply={handleApplyFinancing} />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Sleek Contact & Online Dispatch Booking Form */}
        <ContactSection
          prefilledService={bookingService}
          prefilledPromo={bookingPromo}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => setServiceCategory(cat as ServiceCategory)}
        onOpenBooking={() => openBookingWith()}
      />

      {/* Mobile Sticky Bottom Conversion Bar (< 15% mobile viewport) */}
      <MobileStickyBar
        onOpenBooking={() => openBookingWith()}
        onOpenSecondOpinion={() => handleSecondOpinion()}
      />

      {/* Fast Dispatch Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
        initialPromo={bookingPromo}
      />

    </div>
  );
}
