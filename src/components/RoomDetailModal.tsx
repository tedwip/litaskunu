import React, { useState } from 'react';
import { X, Layers, Leaf, ArrowRight, Check } from 'lucide-react';
import { HotelRoom, BookingFilters } from '../types/hotel.ts';
import { calculateNights, calculateBookingTotal, formatPrice } from '../utils/booking.ts';
import { Language, Translations } from '../translations/index.ts';

interface RoomDetailModalProps {
  room: HotelRoom | null;
  onClose: () => void;
  onBook: (room: HotelRoom) => void;
  filters: BookingFilters;
  t: Translations;
  currentLang?: Language;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBook,
  filters,
  t,
  currentLang = 'id',
}) => {
  if (!room) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const nights = calculateNights(filters.checkIn, filters.checkOut);
  const summary = calculateBookingTotal(room.pricePerNight, nights, filters.guests, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-detail-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#e5e2da] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e2da] bg-[#f4f4f4]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#c38169] font-bold">{room.code}</span>
            <span className="text-[#8c867c]">·</span>
            <span className="text-xs uppercase tracking-wider text-[#635f59] font-semibold">{room.collection}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-[#635f59] hover:text-[#222426] hover:bg-white transition-colors cursor-pointer"
            aria-label={t.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Gallery */}
          <div>
            <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-[#f4f4f4] border border-[#e5e2da]">
              <img
                src={room.galleryImages[activeImageIndex] || room.primaryImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail selector */}
            {room.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 mt-3">
                {room.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#c38169] shadow-xs' : 'border-[#e5e2da] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Core Metrics */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#e5e2da]">
            <div>
              <h2 id="room-detail-title" className="text-2xl sm:text-3xl font-extrabold text-[#222426]">
                {room.name}
              </h2>
              <p className="mt-2 text-sm text-[#635f59] leading-relaxed max-w-xl">
                {room.description}
              </p>
            </div>

            {/* Quick Specs Block */}
            <div className="bg-[#f4f4f4] border border-[#e5e2da] rounded-xl p-4 shrink-0 text-xs font-mono space-y-2 min-w-[220px]">
              <div className="flex justify-between text-[#635f59]">
                <span>{t.totalArea}</span>
                <span className="font-bold text-[#222426]">{room.squareMeters} m²</span>
              </div>
              <div className="flex justify-between text-[#635f59]">
                <span>{t.filterGuests}</span>
                <span className="font-bold text-[#222426]">{room.maxGuests} {t.guestsLabel}</span>
              </div>
              <div className="flex justify-between text-[#635f59]">
                <span>Ranjang</span>
                <span className="font-bold text-[#222426]">{room.bedType.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between text-[#635f59]">
                <span>Lantai</span>
                <span className="font-bold text-[#222426]">{room.floor}</span>
              </div>
            </div>
          </div>

          {/* Architectural Floor Plan & Space Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#faf9f7] border border-[#e5e2da] rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8c867c] mb-2">
                <Layers className="w-4 h-4 text-[#c38169]" />
                <span>{t.spatialConceptTitle}</span>
              </div>
              <p className="text-xs text-[#635f59] leading-relaxed">
                {room.floorPlanDetails}
              </p>
              
              <ul className="mt-4 space-y-2 text-xs text-[#222426]">
                {room.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c38169] mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sustainability & Materials */}
            <div className="bg-[#faf9f7] border border-[#e5e2da] rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#586f6d] mb-2">
                <Leaf className="w-4 h-4 text-[#586f6d]" />
                <span>{t.sustainabilityTitle}</span>
              </div>
              
              <div className="space-y-3 mt-3 text-xs">
                <div className="border-b border-[#e5e2da] pb-2">
                  <div className="text-[10px] uppercase font-bold text-[#8c867c]">{t.materialCertLabel}</div>
                  <div className="font-bold text-[#222426] mt-0.5">{room.sustainability.materialCert}</div>
                </div>

                <div className="border-b border-[#e5e2da] pb-2">
                  <div className="text-[10px] uppercase font-bold text-[#8c867c]">{t.energyRatingLabel}</div>
                  <div className="font-bold text-[#222426] mt-0.5">{room.sustainability.energyRating}</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-[#8c867c]">{t.waterCycleLabel}</div>
                  <div className="font-bold text-[#222426] mt-0.5">{room.sustainability.waterEfficiency}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Amenities */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#8c867c] mb-3">
              {t.amenitiesIncludedTitle}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#222426]">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#f4f4f4] border border-[#e5e2da] rounded-lg">
                  <Check className="w-3.5 h-3.5 text-[#586f6d] shrink-0" />
                  <span className="font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="p-4 sm:p-6 bg-[#f4f4f4] border-t border-[#e5e2da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#8c867c]">
              {t.estimatedStayLabel} ({nights} {nights === 1 ? t.nightLabel : t.nightsLabel}, {filters.guests} {filters.guests === 1 ? t.guestLabel : t.guestsLabel})
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-[#222426]">
              {formatPrice(summary.roomSubtotal, currentLang)}
              <span className="text-xs font-normal text-[#8c867c] ml-1.5">
                ({formatPrice(room.pricePerNight, currentLang)} / {t.perNight})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-[#e5e2da] text-xs font-bold uppercase tracking-wider text-[#635f59] hover:text-[#222426] bg-white rounded-md transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(room);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#222426] hover:bg-[#c38169] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>{t.bookNow}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
