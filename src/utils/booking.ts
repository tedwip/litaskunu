import type { HotelRoom, RoomAddon, BookingFilters, BookingSummary } from '../types/hotel.ts';

/**
 * Calculates the number of nights between checkIn and checkOut date strings (YYYY-MM-DD).
 * Ensures a minimum of 1 night if checkOut <= checkIn or if invalid.
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 1;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return 1;
  }
  
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 1;
}

/**
 * Calculates complete booking financial summary including base rate, addons, service fee, and sustainability tax.
 */
export function calculateBookingTotal(
  basePricePerNight: number,
  nights: number,
  guests: number,
  selectedAddons: RoomAddon[] = []
): BookingSummary {
  const safeNights = Math.max(1, nights);
  const safeGuests = Math.max(1, guests);
  
  const roomSubtotal = basePricePerNight * safeNights;
  
  const addonsTotal = selectedAddons.reduce((acc, addon) => {
    if (addon.pricePerNight) {
      return acc + (addon.pricePerNight * safeNights * safeGuests);
    }
    if (addon.flatPrice) {
      return acc + addon.flatPrice;
    }
    return acc;
  }, 0);

  // 5% concierge & heritage maintenance service fee
  const serviceFee = Math.round(roomSubtotal * 0.05);

  // €4 per guest per night environmental conservation contribution
  const sustainabilityTax = 4 * safeNights * safeGuests;

  const total = roomSubtotal + addonsTotal + serviceFee + sustainabilityTax;

  return {
    nights: safeNights,
    baseRate: basePricePerNight,
    roomSubtotal,
    addonsTotal,
    serviceFee,
    sustainabilityTax,
    total
  };
}

/**
 * Filters the list of hotel rooms based on active criteria.
 */
export function filterSuites(suites: HotelRoom[], filters: BookingFilters): HotelRoom[] {
  return suites.filter((room) => {
    // Category match
    if (filters.collection !== 'all' && room.category !== filters.collection) {
      return false;
    }

    // Guest capacity
    if (room.maxGuests < filters.guests) {
      return false;
    }

    // Price ceiling
    if (filters.maxPrice > 0 && room.pricePerNight > filters.maxPrice) {
      return false;
    }

    // Amenities
    if (filters.hasSoakingTub && !room.amenities.some(a => {
      const lower = a.toLowerCase();
      return lower.includes('tub') || lower.includes('travertine') || lower.includes('bak mandi');
    })) {
      return false;
    }

    if (filters.hasPrivateTerrace && !room.amenities.some(a => {
      const lower = a.toLowerCase();
      return lower.includes('terrace') || lower.includes('teras') || lower.includes('pátio');
    })) {
      return false;
    }

    if (filters.hasOceanView && !room.amenities.some(a => {
      const lower = a.toLowerCase();
      return lower.includes('ocean') || lower.includes('coast') || lower.includes('laut') || lower.includes('pasir') || lower.includes('dune');
    })) {
      return false;
    }

    return true;
  });
}

/**
 * Formats currency amount in IDR (Rupiah) or EUR (€) based on language preference.
 */
export function formatPrice(amount: number, lang: 'id' | 'en' = 'id'): string {
  if (lang === 'id') {
    // 1 unit roughly Rp 4.200 (e.g., 460 -> Rp 1.932.000)
    const idrValue = Math.round(amount * 4200);
    return `Rp ${idrValue.toLocaleString('id-ID')}`;
  }
  return `€${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

/**
 * Deterministic booking confirmation generator with Litaskunu prefix
 */
export function generateBookingReference(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `LTK-${code}`;
}
