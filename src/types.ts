export type ServiceCategory = 'cooling' | 'heating' | 'iaq' | 'commercial';

export interface HvacService {
  id: string;
  category: ServiceCategory;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  idealFor: string;
  iconName: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  content: string;
  serviceType: string;
  verified: boolean;
  highlight?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  details: string[];
  expiration?: string;
  code: string;
  ctaText: string;
}

export interface CityCoverage {
  name: string;
  county: string;
  isHeadquarters?: boolean;
}

export interface BookingSubmission {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  serviceType: string;
  address?: string;
  city?: string;
  notes: string;
  isEmergency: boolean;
  preferredTime?: string;
}
