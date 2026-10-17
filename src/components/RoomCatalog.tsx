import React from 'react';
import { HotelRoom, BookingFilters } from '../types/hotel.ts';
import { RoomCard } from './RoomCard.tsx';
import { Language, Translations } from '../translations/index.ts';
import { Layers } from 'lucide-react';

interface RoomCatalogProps {
  rooms: HotelRoom[];
  onSelectRoom: (room: HotelRoom) => void;
  onBookRoom: (room: HotelRoom) => void;
  filters: BookingFilters;
  onResetFilters: () => void;
  t: Translations;
  currentLang?: Language;
}

export const RoomCatalog: React.FC<RoomCatalogProps> = ({
  rooms,
  onSelectRoom,
  onBookRoom,
  filters,
  onResetFilters,
  t,
  currentLang = 'id',
}) => {
  return (
    <section id="catalogo-quartos" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e5e2da]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c867c] mb-2">
            <Layers className="w-3.5 h-3.5 text-[#c38169]" />
            <span>{t.catalogKicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222426] tracking-tight">
            {t.catalogTitle}
          </h2>
          <p className="mt-2 text-sm text-[#635f59] max-w-xl">
            {t.catalogSubtitle}
          </p>
        </div>

        <div className="text-xs font-mono text-[#8c867c] shrink-0 bg-[#f4f4f4] px-3 py-1.5 rounded-md border border-[#e5e2da]">
          <span>{t.showingRooms} </span>
          <span className="font-extrabold text-[#222426]">{rooms.length}</span>
          <span> {t.certifiedSanctuaries}</span>
        </div>
      </div>

      {/* Empty State */}
      {rooms.length === 0 ? (
        <div className="text-center py-20 bg-[#f4f4f4] border border-[#e5e2da] rounded-2xl p-8 space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#bfb695]/30 flex items-center justify-center text-[#586f6d]">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#222426]">{t.noRoomsFound}</h3>
          <p className="text-xs sm:text-sm text-[#635f59] max-w-md mx-auto">
            {t.noRoomsDesc}
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-2 px-5 py-2.5 bg-[#222426] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#c38169] transition-colors cursor-pointer"
          >
            {t.resetFilters}
          </button>
        </div>
      ) : (
        /* 3-column desktop / 2-column tablet responsive catalog grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelect={onSelectRoom}
              onBook={onBookRoom}
              t={t}
              currentLang={currentLang}
            />
          ))}
        </div>
      )}

    </section>
  );
};
