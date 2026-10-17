import React from 'react';
import { Calendar, Users, Check, Filter } from 'lucide-react';
import { BookingFilters, SuiteCategory } from '../types/hotel.ts';
import { calculateNights } from '../utils/booking.ts';
import { Translations } from '../translations/index.ts';

interface BookingBarProps {
  filters: BookingFilters;
  onFilterChange: (filters: BookingFilters) => void;
  availableCount: number;
  t: Translations;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  filters,
  onFilterChange,
  availableCount,
  t,
}) => {
  const nights = calculateNights(filters.checkIn, filters.checkOut);

  const categories: { key: SuiteCategory; label: string }[] = [
    { key: 'all', label: t.allCategories },
    { key: 'pavilion', label: t.pavilionCategory },
    { key: 'sanctuary', label: t.sanctuaryCategory },
    { key: 'penthouse', label: t.penthouseCategory },
    { key: 'villa', label: t.villaCategory },
  ];

  return (
    <div id="booking-bar" className="bg-[#f4f4f4] border-y border-[#e5e2da] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Control Bar: Dates, Guests, and Summary */}
        <div className="bg-white border border-[#e5e2da] rounded-xl p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Check-In */}
            <div className="flex flex-col">
              <label 
                htmlFor="check-in-date" 
                className="text-[11px] uppercase tracking-wider font-bold text-[#635f59] flex items-center gap-1.5 mb-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#c38169]" />
                <span>{t.filterCheckIn}</span>
              </label>
              <input
                id="check-in-date"
                type="date"
                value={filters.checkIn}
                onChange={(e) => onFilterChange({ ...filters, checkIn: e.target.value })}
                className="w-full bg-[#f4f4f4] border border-[#e5e2da] px-3 py-2 text-xs font-semibold text-[#222426] rounded-md focus:outline-none focus:ring-1 focus:ring-[#c38169] focus:border-[#c38169]"
              />
            </div>

            {/* Check-Out */}
            <div className="flex flex-col">
              <label 
                htmlFor="check-out-date" 
                className="text-[11px] uppercase tracking-wider font-bold text-[#635f59] flex items-center gap-1.5 mb-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#c38169]" />
                <span>{t.filterCheckOut}</span>
                <span className="text-[10px] text-[#c38169] font-bold">({nights} {nights === 1 ? t.nightLabel : t.nightsLabel})</span>
              </label>
              <input
                id="check-out-date"
                type="date"
                value={filters.checkOut}
                onChange={(e) => onFilterChange({ ...filters, checkOut: e.target.value })}
                className="w-full bg-[#f4f4f4] border border-[#e5e2da] px-3 py-2 text-xs font-semibold text-[#222426] rounded-md focus:outline-none focus:ring-1 focus:ring-[#c38169] focus:border-[#c38169]"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label 
                htmlFor="guests-select" 
                className="text-[11px] uppercase tracking-wider font-bold text-[#635f59] flex items-center gap-1.5 mb-1.5"
              >
                <Users className="w-3.5 h-3.5 text-[#bfb695]" />
                <span>{t.filterGuests}</span>
              </label>
              <select
                id="guests-select"
                value={filters.guests}
                onChange={(e) => onFilterChange({ ...filters, guests: Number(e.target.value) })}
                className="w-full bg-[#f4f4f4] border border-[#e5e2da] px-3 py-2 text-xs font-semibold text-[#222426] rounded-md focus:outline-none focus:ring-1 focus:ring-[#c38169] focus:border-[#c38169]"
              >
                <option value={1}>1 {t.guestLabel}</option>
                <option value={2}>2 {t.guestsLabel}</option>
                <option value={3}>3 {t.guestsLabel}</option>
                <option value={4}>4 {t.guestsLabel}</option>
              </select>
            </div>

            {/* Availability Indicator */}
            <div className="flex flex-col justify-center sm:border-l sm:border-[#e5e2da] sm:pl-4">
              <div className="text-[11px] uppercase tracking-wider text-[#8c867c] font-bold">{t.availableCountLabel}</div>
              <div className="text-sm font-extrabold text-[#222426] mt-0.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#586f6d]" />
                <span>{availableCount} {t.availableCountLabel}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Secondary Filter Controls: Collections and Amenities */}
        <div className="mt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#e5e2da] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => onFilterChange({ ...filters, collection: cat.key })}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  filters.collection === cat.key
                    ? 'bg-[#222426] text-white shadow-xs'
                    : 'text-[#635f59] hover:text-[#222426] hover:bg-[#f4f4f4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Amenity Toggles */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#635f59]">
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#8c867c] mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Filter:
            </span>
            
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, hasSoakingTub: !filters.hasSoakingTub })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold transition-all cursor-pointer ${
                filters.hasSoakingTub
                  ? 'bg-[#da908f]/20 border-[#da908f] text-[#222426]'
                  : 'bg-white border-[#e5e2da] text-[#635f59] hover:border-[#bfb695]'
              }`}
            >
              {filters.hasSoakingTub && <Check className="w-3 h-3 text-[#c38169]" />}
              <span>{t.soakingTub}</span>
            </button>

            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, hasPrivateTerrace: !filters.hasPrivateTerrace })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold transition-all cursor-pointer ${
                filters.hasPrivateTerrace
                  ? 'bg-[#bfb695]/30 border-[#bfb695] text-[#222426]'
                  : 'bg-white border-[#e5e2da] text-[#635f59] hover:border-[#bfb695]'
              }`}
            >
              {filters.hasPrivateTerrace && <Check className="w-3 h-3 text-[#c38169]" />}
              <span>{t.terrace}</span>
            </button>

            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, hasOceanView: !filters.hasOceanView })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold transition-all cursor-pointer ${
                filters.hasOceanView
                  ? 'bg-[#c38169]/20 border-[#c38169] text-[#222426]'
                  : 'bg-white border-[#e5e2da] text-[#635f59] hover:border-[#bfb695]'
              }`}
            >
              {filters.hasOceanView && <Check className="w-3 h-3 text-[#c38169]" />}
              <span>{t.oceanView}</span>
            </button>

            {(filters.hasSoakingTub || filters.hasPrivateTerrace || filters.hasOceanView || filters.collection !== 'all') && (
              <button
                type="button"
                onClick={() => onFilterChange({
                  ...filters,
                  collection: 'all',
                  hasSoakingTub: false,
                  hasPrivateTerrace: false,
                  hasOceanView: false
                })}
                className="text-xs text-[#c38169] hover:underline font-bold ml-2 cursor-pointer"
              >
                {t.clearFilters}
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
