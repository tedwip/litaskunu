import React from 'react';
import { Maximize2, Users, ArrowUpRight, Eye } from 'lucide-react';
import { HotelRoom } from '../types/hotel.ts';
import { formatPrice } from '../utils/booking.ts';
import { Language, Translations } from '../translations/index.ts';

interface RoomCardProps {
  room: HotelRoom;
  onSelect: (room: HotelRoom) => void;
  onBook: (room: HotelRoom) => void;
  t: Translations;
  currentLang?: Language;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  onSelect,
  onBook,
  t,
  currentLang = 'id',
}) => {
  return (
    <article className="group bg-white border border-[#e5e2da] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#bfb695]">
      
      {/* Top Image Showcase */}
      <div 
        className="relative aspect-4/3 w-full overflow-hidden bg-[#f4f4f4] cursor-pointer"
        onClick={() => onSelect(room)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') onSelect(room); }}
      >
        <img
          src={room.primaryImage}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
        />

        {/* Architectural code badge (Top Left) */}
        <div className="absolute top-3 left-3 bg-[#222426]/90 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md tracking-wider font-bold">
          {room.code}
        </div>

        {/* Collection Tag (Top Right) */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#222426] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
          {room.collection}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-[#222426]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-[#222426] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-md shadow-md flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#c38169]" />
            <span>{t.viewDetails}</span>
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata Line */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8c867c] uppercase tracking-wider mb-2">
            <span className="font-semibold">{room.squareMeters} m²</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-semibold">
              <Users className="w-3 h-3 text-[#c38169]" />
              <span>{room.maxGuests} {t.maxCapacity}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{room.view}</span>
          </div>

          {/* Room Title */}
          <h3 
            onClick={() => onSelect(room)}
            className="text-lg sm:text-xl font-bold text-[#222426] tracking-tight group-hover:text-[#c38169] transition-colors cursor-pointer"
          >
            {room.name}
          </h3>

          {/* Editorial Headline */}
          <p className="mt-2 text-xs sm:text-sm text-[#635f59] line-clamp-2 leading-relaxed">
            {room.headline}
          </p>

          {/* Key Architectural Amenities */}
          <div className="mt-4 pt-3 border-t border-[#f4f4f4] flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#635f59]">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#da908f]" />
                <span className="text-[11px] font-medium">{amenity}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Actions Strip */}
        <div className="pt-4 border-t border-[#e5e2da] flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#8c867c] font-bold">
              {t.startingFrom}
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#222426] tabular-nums">
              {formatPrice(room.pricePerNight, currentLang)}
              <span className="text-xs font-normal text-[#8c867c] ml-1">/{t.perNight}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelect(room)}
              className="p-2 border border-[#e5e2da] text-[#635f59] hover:text-[#222426] hover:border-[#222426] rounded-md transition-colors cursor-pointer bg-[#f4f4f4]"
              title={t.viewDetails}
              aria-label={`${t.viewDetails}: ${room.name}`}
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onBook(room)}
              className="px-4 py-2 bg-[#222426] text-white hover:bg-[#c38169] transition-colors text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer flex items-center gap-1.5 shadow-xs whitespace-nowrap"
            >
              <span>{t.bookNow}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </article>
  );
};
