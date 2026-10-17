import React, { useState, useMemo, useEffect } from 'react';
import { getLocalizedRooms } from './data/hotelRooms.ts';
import { HotelRoom, BookingFilters, ConfirmedBooking } from './types/hotel.ts';
import { DaurohProgram, DaurohRegistration } from './types/dauroh.ts';
import { DAUROH_PROGRAMS } from './data/daurohData.ts';
import { filterSuites } from './utils/booking.ts';
import { Language, TRANSLATIONS } from './translations/index.ts';
import { AppRoute } from './types/navigation.ts';

// Components
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { BookingBar } from './components/BookingBar.tsx';
import { RoomCatalog } from './components/RoomCatalog.tsx';
import { RoomDetailModal } from './components/RoomDetailModal.tsx';
import { BookingReservationModal } from './components/BookingReservationModal.tsx';
import { SpecSheetModal } from './components/SpecSheetModal.tsx';
import { SustainabilitySection } from './components/SustainabilitySection.tsx';
import { NewsletterSection } from './components/NewsletterSection.tsx';
import { Footer } from './components/Footer.tsx';
import { DaurohPage } from './components/DaurohPage.tsx';
import { TentangPage } from './components/TentangPage.tsx';
import { DaurohRegistrationModal } from './components/DaurohRegistrationModal.tsx';

// Icons for Home section previews
import { BookOpen, BedDouble, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Primary language: Indonesian ('id'), Secondary: English ('en')
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const t = useMemo(() => TRANSLATIONS[currentLang] || TRANSLATIONS.id, [currentLang]);

  // Clean Path-based Routing ('/', '/dauroh', '/penginapan', '/tentang')
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path === '/dauroh' || path === '/dauroh/') return '/dauroh';
      if (path === '/penginapan' || path === '/penginapan/') return '/penginapan';
      if (path === '/tentang' || path === '/tentang/') return '/tentang';
    }
    return '/';
  });

  // Listen to browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/dauroh')) {
        setCurrentRoute('/dauroh');
      } else if (path.startsWith('/penginapan')) {
        setCurrentRoute('/penginapan');
      } else if (path.startsWith('/tentang')) {
        setCurrentRoute('/tentang');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic navigation with pushState
  const navigateTo = (route: AppRoute) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dynamic localized rooms
  const allRooms = useMemo(() => getLocalizedRooms(currentLang), [currentLang]);

  // Today + 7 days default stay dates
  const [filters, setFilters] = useState<BookingFilters>({
    collection: 'all',
    checkIn: '2026-10-20',
    checkOut: '2026-10-23',
    guests: 2,
    maxPrice: 2000,
    hasSoakingTub: false,
    hasPrivateTerrace: false,
    hasOceanView: false,
  });

  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<HotelRoom | null>(null);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<HotelRoom | null>(null);
  const [selectedDaurohForReg, setSelectedDaurohForReg] = useState<DaurohProgram | null>(null);
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState(false);
  const [confirmedBookings, setConfirmedBookings] = useState<ConfirmedBooking[]>([]);
  const [confirmedDaurohRegs, setConfirmedDaurohRegs] = useState<DaurohRegistration[]>([]);

  // Filtered rooms
  const filteredRooms = useMemo(() => {
    return filterSuites(allRooms, filters);
  }, [allRooms, filters]);

  // Keep modal room in sync with current language if selected
  const activeDetailRoom = useMemo(() => {
    if (!selectedRoomForDetail) return null;
    return allRooms.find((r) => r.id === selectedRoomForDetail.id) || selectedRoomForDetail;
  }, [allRooms, selectedRoomForDetail]);

  const activeBookingRoom = useMemo(() => {
    if (!selectedRoomForBooking) return null;
    return allRooms.find((r) => r.id === selectedRoomForBooking.id) || selectedRoomForBooking;
  }, [allRooms, selectedRoomForBooking]);

  const handleResetFilters = () => {
    setFilters({
      collection: 'all',
      checkIn: '2026-10-20',
      checkOut: '2026-10-23',
      guests: 2,
      maxPrice: 2000,
      hasSoakingTub: false,
      hasPrivateTerrace: false,
      hasOceanView: false,
    });
  };

  const handleBookingSuccess = (newBooking: ConfirmedBooking) => {
    setConfirmedBookings((prev) => [newBooking, ...prev]);
  };

  const handleDaurohSuccess = (newReg: DaurohRegistration) => {
    setConfirmedDaurohRegs((prev) => [newReg, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white text-[#222426] flex flex-col font-sans selection:bg-[#da908f]/30 selection:text-[#222426]">
      {/* Top Header with 4 Navbar links and Litaskunu SVG Logo */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        t={t}
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenBooking={() => setSelectedRoomForBooking(allRooms[0])}
      />

      <main className="flex-1">
        {/* ROUTE 1: Home (/) */}
        {currentRoute === '/' && (
          <div className="animate-in fade-in duration-200">
            {/* Hero Section */}
            <HeroSection
              t={t}
              onExploreCatalog={() => navigateTo('/penginapan')}
              onNavigateToDauroh={() => navigateTo('/dauroh')}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />

            {/* Quick Reservation & Date Search Bar */}
            <div className="bg-[#f4f4f4] py-8 border-b border-[#e5e2da]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c38169]">
                      Cari Ketersediaan Kamar
                    </span>
                    <h3 className="text-xl font-bold text-[#222426]">
                      Rencanakan Waktu Istirahat & Retret Anda
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigateTo('/penginapan')}
                    className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#c38169] hover:underline cursor-pointer"
                  >
                    <span>Buka Semua Kamar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <BookingBar
                filters={filters}
                onFilterChange={setFilters}
                availableCount={filteredRooms.length}
                t={t}
              />
            </div>

            {/* SECTION: Featured Dauroh Showcase */}
            <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#e5e2da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#bfb695] mb-1.5">
                    <BookOpen className="w-4 h-4 text-[#bfb695]" />
                    <span>Program Retret Keilmuan</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222426]">
                    Dauroh & Majlis Tholabul 'Ilmi Terdekat
                  </h2>
                  <p className="text-xs sm:text-sm text-[#635f59] mt-1">
                    Jadwal kajian intensif bersama para asatidz dan ulama di paviliun alam terbuka.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo('/dauroh')}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] transition-colors rounded-md shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Lihat Semua Dauroh</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DAUROH_PROGRAMS.slice(0, 3).map((program) => (
                  <div
                    key={program.id}
                    className="bg-[#f4f4f4] rounded-xl border border-[#e5e2da] overflow-hidden flex flex-col justify-between p-5 hover:border-[#da908f] transition-all group"
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-3">
                        <img 
                          src={program.image} 
                          alt={program.title[currentLang]} 
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 bg-[#222426]/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                          {program.code}
                        </span>
                        <span className="absolute bottom-2 right-2 bg-[#da908f] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                          {program.remainingSeats} {t.daurohSeatsRemaining}
                        </span>
                      </div>
                      
                      <span className="text-[10px] uppercase font-bold text-[#c38169]">
                        {program.dates[currentLang]}
                      </span>
                      <h3 className="text-base font-bold text-[#222426] line-clamp-1 group-hover:text-[#c38169] transition-colors">
                        {program.title[currentLang]}
                      </h3>
                      <p className="text-xs text-[#635f59] line-clamp-2">
                        {program.subtitle[currentLang]}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#e5e2da] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#8c867c] block">Infaq:</span>
                        <span className="text-sm font-extrabold text-[#222426]">
                          {currentLang === 'id' ? `Rp ${program.price.idr.toLocaleString('id-ID')}` : `€${program.price.eur}`}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedDaurohForReg(program)}
                        className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] rounded-md transition-colors cursor-pointer"
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: Featured Suites Showcase */}
            <div className="bg-[#faf9f7] border-t border-b border-[#e5e2da]">
              <RoomCatalog
                rooms={filteredRooms.slice(0, 3)}
                onSelectRoom={(room) => setSelectedRoomForDetail(room)}
                onBookRoom={(room) => setSelectedRoomForBooking(room)}
                filters={filters}
                onResetFilters={handleResetFilters}
                t={t}
                currentLang={currentLang}
              />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
                <button
                  type="button"
                  onClick={() => navigateTo('/penginapan')}
                  className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] rounded-md transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Buka Seluruh Katalog Penginapan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sustainability Section */}
            <SustainabilitySection t={t} />

            {/* Community Newsletter */}
            <NewsletterSection t={t} />
          </div>
        )}

        {/* ROUTE 2: Dauroh (/dauroh) */}
        {currentRoute === '/dauroh' && (
          <div className="animate-in fade-in duration-200">
            <DaurohPage
              t={t}
              currentLang={currentLang}
              onRegisterProgram={(program) => setSelectedDaurohForReg(program)}
              onNavigateToBooking={() => navigateTo('/penginapan')}
            />
          </div>
        )}

        {/* ROUTE 3: Penginapan (/penginapan) */}
        {currentRoute === '/penginapan' && (
          <div className="animate-in fade-in duration-200">
            {/* Catalog Page Header */}
            <div className="bg-[#f4f4f4] border-b border-[#e5e2da] py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#da908f]/20 border border-[#da908f]/30 text-xs font-bold uppercase tracking-wider text-[#222426]">
                  <BedDouble className="w-3.5 h-3.5 text-[#c38169]" />
                  <span>Katalog Penginapan & Paviliun Litaskunu</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#222426] tracking-tight">
                  Suaka Istirahat yang Dirancang Abadi
                </h1>
                <p className="text-sm text-[#635f59] max-w-2xl leading-relaxed">
                  Pilihlah paviliun dan suite yang berorientasi ke kebun zaitun dan lembah asri. Setiap kamar dilengkapi insulasi akustik premium dan material alam ramah lingkungan.
                </p>
              </div>
            </div>

            {/* Full Booking Filter Bar */}
            <BookingBar
              filters={filters}
              onFilterChange={setFilters}
              availableCount={filteredRooms.length}
              t={t}
            />

            {/* Full Room Catalog Grid */}
            <RoomCatalog
              rooms={filteredRooms}
              onSelectRoom={(room) => setSelectedRoomForDetail(room)}
              onBookRoom={(room) => setSelectedRoomForBooking(room)}
              filters={filters}
              onResetFilters={handleResetFilters}
              t={t}
              currentLang={currentLang}
            />

            {/* Architectural Manifesto Strip */}
            <SustainabilitySection t={t} />
          </div>
        )}

        {/* ROUTE 4: Tentang (/tentang) */}
        {currentRoute === '/tentang' && (
          <div className="animate-in fade-in duration-200">
            <TentangPage
              t={t}
              currentLang={currentLang}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
              onNavigateToDauroh={() => navigateTo('/dauroh')}
              onNavigateToBooking={() => navigateTo('/penginapan')}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onNavigate={navigateTo}
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={activeDetailRoom}
        onClose={() => setSelectedRoomForDetail(null)}
        onBook={(room) => {
          setSelectedRoomForDetail(null);
          setSelectedRoomForBooking(room);
        }}
        filters={filters}
        t={t}
        currentLang={currentLang}
      />

      {/* Booking Reservation Flow Modal */}
      <BookingReservationModal
        room={activeBookingRoom}
        filters={filters}
        onClose={() => setSelectedRoomForBooking(null)}
        onSuccessBooking={handleBookingSuccess}
        t={t}
        currentLang={currentLang}
      />

      {/* Dauroh Registration Modal */}
      <DaurohRegistrationModal
        program={selectedDaurohForReg}
        onClose={() => setSelectedDaurohForReg(null)}
        onSuccess={handleDaurohSuccess}
        t={t}
        currentLang={currentLang}
      />

      {/* Architectural Spec Sheet Modal */}
      <SpecSheetModal
        isOpen={isSpecSheetOpen}
        onClose={() => setIsSpecSheetOpen(false)}
        t={t}
        currentLang={currentLang}
      />
    </div>
  );
}
