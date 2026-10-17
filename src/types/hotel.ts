export type SuiteCategory = 'all' | 'pavilion' | 'sanctuary' | 'penthouse' | 'villa';

export interface Amenity {
  id: string;
  name: string;
  iconName: string;
}

export interface RoomAddon {
  id: string;
  name: string;
  description: string;
  pricePerNight?: number;
  flatPrice?: number;
  category: 'culinary' | 'wellness' | 'mobility';
}

export interface HotelRoom {
  id: string;
  code: string;
  name: string;
  collection: string;
  category: SuiteCategory;
  headline: string;
  description: string;
  pricePerNight: number;
  squareMeters: number;
  maxGuests: number;
  bedType: string;
  view: string;
  floor: string;
  primaryImage: string;
  galleryImages: string[];
  features: string[];
  amenities: string[];
  sustainability: {
    materialCert: string;
    energyRating: string;
    waterEfficiency: string;
  };
  floorPlanDetails: string;
  isAvailable: boolean;
  featured?: boolean;
}

export interface BookingFilters {
  collection: SuiteCategory;
  checkIn: string;
  checkOut: string;
  guests: number;
  maxPrice: number;
  hasSoakingTub: boolean;
  hasPrivateTerrace: boolean;
  hasOceanView: boolean;
}

export interface BookingSummary {
  nights: number;
  baseRate: number;
  roomSubtotal: number;
  addonsTotal: number;
  serviceFee: number;
  sustainabilityTax: number;
  total: number;
}

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
  dietaryNotes: string;
  estimatedArrival: string;
}

export interface ConfirmedBooking {
  bookingId: string;
  confirmationCode: string;
  room: HotelRoom;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  selectedAddons: RoomAddon[];
  guest: GuestDetails;
  summary: BookingSummary;
  createdAt: string;
}
