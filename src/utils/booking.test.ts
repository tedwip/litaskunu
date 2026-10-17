import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateNights, calculateBookingTotal, filterSuites } from './booking.ts';
import type { HotelRoom, RoomAddon, BookingFilters } from '../types/hotel.ts';

test('calculateNights correctly computes difference in calendar days', () => {
  assert.equal(calculateNights('2026-10-20', '2026-10-23'), 3);
  assert.equal(calculateNights('2026-10-20', '2026-10-21'), 1);
  // Same day or reverse returns 1 minimum
  assert.equal(calculateNights('2026-10-20', '2026-10-20'), 1);
  assert.equal(calculateNights('2026-10-25', '2026-10-20'), 1);
  // Invalid string returns 1
  assert.equal(calculateNights('', ''), 1);
});

test('calculateBookingTotal computes correct subtotal, fees and taxes', () => {
  const baseRate = 400;
  const nights = 2;
  const guests = 2;
  const addons: RoomAddon[] = [
    {
      id: 'addon-1',
      name: 'Breakfast',
      description: 'Test breakfast',
      pricePerNight: 30, // 30 * 2 nights * 2 guests = 120
      category: 'culinary'
    },
    {
      id: 'addon-2',
      name: 'Wine',
      description: 'Test wine',
      flatPrice: 80,
      category: 'culinary'
    }
  ];

  const summary = calculateBookingTotal(baseRate, nights, guests, addons);

  assert.equal(summary.nights, 2);
  assert.equal(summary.roomSubtotal, 800);
  assert.equal(summary.addonsTotal, 120 + 80); // 200
  assert.equal(summary.serviceFee, 40); // 5% of 800 = 40
  assert.equal(summary.sustainabilityTax, 16); // 4 * 2 nights * 2 guests = 16
  assert.equal(summary.total, 800 + 200 + 40 + 16); // 1056
});

test('filterSuites filters suites by category, capacity and amenities', () => {
  const mockSuites: HotelRoom[] = [
    {
      id: 'suite-1',
      code: '01',
      name: 'Suite One',
      collection: 'Pavilion',
      category: 'pavilion',
      headline: '',
      description: '',
      pricePerNight: 350,
      squareMeters: 50,
      maxGuests: 2,
      bedType: 'King',
      view: 'Garden',
      floor: '1',
      primaryImage: '',
      galleryImages: [],
      features: [],
      amenities: ['Private Terrace', 'Walk-in Shower'],
      sustainability: { materialCert: '', energyRating: '', waterEfficiency: '' },
      floorPlanDetails: '',
      isAvailable: true
    },
    {
      id: 'suite-2',
      code: '02',
      name: 'Suite Two',
      collection: 'Sanctuary',
      category: 'sanctuary',
      headline: '',
      description: '',
      pricePerNight: 600,
      squareMeters: 80,
      maxGuests: 4,
      bedType: 'King',
      view: 'Ocean',
      floor: '2',
      primaryImage: '',
      galleryImages: [],
      features: [],
      amenities: ['Travertine Soaking Tub', 'Panoramic Ocean View'],
      sustainability: { materialCert: '', energyRating: '', waterEfficiency: '' },
      floorPlanDetails: '',
      isAvailable: true
    }
  ];

  const filterCategory: BookingFilters = {
    collection: 'pavilion',
    checkIn: '',
    checkOut: '',
    guests: 1,
    maxPrice: 1000,
    hasSoakingTub: false,
    hasPrivateTerrace: false,
    hasOceanView: false
  };

  const pavilionResult = filterSuites(mockSuites, filterCategory);
  assert.equal(pavilionResult.length, 1);
  assert.equal(pavilionResult[0].id, 'suite-1');

  const filterGuests: BookingFilters = {
    ...filterCategory,
    collection: 'all',
    guests: 3
  };

  const guestsResult = filterSuites(mockSuites, filterGuests);
  assert.equal(guestsResult.length, 1);
  assert.equal(guestsResult[0].id, 'suite-2');

  const filterTub: BookingFilters = {
    ...filterCategory,
    collection: 'all',
    guests: 1,
    hasSoakingTub: true
  };

  const tubResult = filterSuites(mockSuites, filterTub);
  assert.equal(tubResult.length, 1);
  assert.equal(tubResult[0].id, 'suite-2');
});
