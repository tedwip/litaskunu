import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { HotelRoom, RoomAddon, GuestDetails, ConfirmedBooking, BookingFilters } from '../types/hotel';
import { getLocalizedAddons } from '../data/hotelRooms';
import { calculateNights, calculateBookingTotal, formatPrice, generateBookingReference } from '../utils/booking';
import { Translations, Language } from '../translations';

interface BookingReservationModalProps {
  room: HotelRoom | null;
  filters: BookingFilters;
  onClose: () => void;
  onSuccessBooking: (booking: ConfirmedBooking) => void;
  t: Translations;
  currentLang: Language;
}

export const BookingReservationModal: React.FC<BookingReservationModalProps> = ({
  room,
  filters,
  onClose,
  onSuccessBooking,
  t,
  currentLang,
}) => {
  if (!room) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [guest, setGuest] = useState<GuestDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    dietaryNotes: '',
    estimatedArrival: '15:00',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  const availableAddons = getLocalizedAddons(currentLang);
  const selectedAddons = availableAddons.filter((a) => selectedAddonIds.includes(a.id));

  const nights = calculateNights(filters.checkIn, filters.checkOut);
  const summary = calculateBookingTotal(room.pricePerNight, nights, filters.guests, selectedAddons);

  const toggleAddon = (addonId: string) => {
    if (selectedAddonIds.includes(addonId)) {
      setSelectedAddonIds(selectedAddonIds.filter((id) => id !== addonId));
    } else {
      setSelectedAddonIds([...selectedAddonIds, addonId]);
    }
  };

  const validateGuestForm = (): boolean => {
    const errors: Record<string, string> = {};
    const isId = currentLang === 'id';

    if (!guest.firstName.trim()) {
      errors.firstName = isId ? 'Nama depan wajib diisi' : 'First name is required';
    }
    if (!guest.lastName.trim()) {
      errors.lastName = isId ? 'Nama belakang wajib diisi' : 'Last name is required';
    }
    if (!guest.email.trim() || !/\S+@\S+\.\S+/.test(guest.email)) {
      errors.email = isId ? 'Alamat email yang valid wajib diisi' : 'Valid email is required';
    }
    if (!guest.phone.trim()) {
      errors.phone = isId ? 'Nomor telepon/WhatsApp wajib diisi' : 'Phone number is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateGuestForm()) return;

    const newBooking: ConfirmedBooking = {
      bookingId: `RES-${Date.now().toString().slice(-6)}`,
      confirmationCode: generateBookingReference(),
      room,
      checkIn: filters.checkIn,
      checkOut: filters.checkOut,
      nights,
      guests: filters.guests,
      selectedAddons,
      guest,
      summary,
      createdAt: new Date().toISOString(),
    };

    setConfirmedBooking(newBooking);
    onSuccessBooking(newBooking);
    setStep(4);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1A1917]/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-3xl bg-[#F5F2EB] border border-[#DDD5C5] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDD5C5] bg-[#EFECE4]">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#C26738] font-bold">
              {t.bookingOfficialTitle}
            </div>
            <h2 className="text-lg font-serif font-normal text-[#1A1917]">
              {step === 4 ? t.bookingSuccessBadge : `${t.bookNow}: ${room.name}`}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#666055] hover:text-[#1A1917] hover:bg-[#DDD5C5] transition-colors cursor-pointer"
            aria-label={t.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 py-2.5 bg-[#EAE4D7] border-b border-[#DDD5C5] flex items-center justify-between text-xs font-mono">
            <span className={step >= 1 ? 'text-[#1A1917] font-semibold' : 'text-[#857B6C]'}>{t.bookingStep1}</span>
            <span className="text-[#857B6C]">→</span>
            <span className={step >= 2 ? 'text-[#1A1917] font-semibold' : 'text-[#857B6C]'}>{t.bookingStep2}</span>
            <span className="text-[#857B6C]">→</span>
            <span className={step >= 3 ? 'text-[#1A1917] font-semibold' : 'text-[#857B6C]'}>{t.bookingStep3}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          
          {/* STEP 1: Stay Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-5 p-4 bg-[#EFECE4] border border-[#DDD5C5] rounded-lg">
                <img
                  src={room.primaryImage}
                  alt={room.name}
                  className="w-full sm:w-36 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="text-xs font-mono text-[#C26738] uppercase tracking-wider">{room.code} · {room.collection}</div>
                  <h3 className="text-xl font-serif text-[#1A1917] mt-0.5">{room.name}</h3>
                  <div className="mt-2 text-xs text-[#666055] space-y-1">
                    <div>{t.totalArea}: {room.squareMeters} m² · {t.maxCapacity}: {room.maxGuests} {t.guestsLabel}</div>
                    <div>{room.bedType}</div>
                  </div>
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#EAE4D7] border border-[#DDD5C5] rounded-lg p-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#857B6C] mb-3">
                  {t.stayParametersTitle}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="bg-[#F5F2EB] p-3 rounded border border-[#DDD5C5]">
                    <span className="text-[#857B6C] block">{t.filterCheckIn}</span>
                    <span className="font-semibold text-sm text-[#1A1917]">{filters.checkIn}</span>
                    <span className="text-[10px] text-[#857B6C] block">{t.checkInNotice}</span>
                  </div>

                  <div className="bg-[#F5F2EB] p-3 rounded border border-[#DDD5C5]">
                    <span className="text-[#857B6C] block">{t.filterCheckOut}</span>
                    <span className="font-semibold text-sm text-[#1A1917]">{filters.checkOut}</span>
                    <span className="text-[10px] text-[#857B6C] block">{t.checkOutNotice}</span>
                  </div>

                  <div className="bg-[#F5F2EB] p-3 rounded border border-[#DDD5C5]">
                    <span className="text-[#857B6C] block">{t.datesLabel}</span>
                    <span className="font-semibold text-sm text-[#1A1917]">{nights} {nights === 1 ? t.nightLabel : t.nightsLabel}</span>
                    <span className="text-[10px] text-[#857B6C] block">{filters.guests} {filters.guests === 1 ? t.guestLabel : t.guestsLabel}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DDD5C5] flex justify-between items-center text-xs">
                  <span className="text-[#666055]">{t.baseRateNotice} ({nights} {t.nightsLabel} × {formatPrice(room.pricePerNight)})</span>
                  <span className="font-mono font-semibold text-[#1A1917]">{formatPrice(summary.roomSubtotal)}</span>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-[#1A1917] text-[#F5F2EB] hover:bg-[#C26738] transition-colors text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.continueToExperiences}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Curated Add-ons */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif text-[#1A1917]">{t.experiencesTitle}</h3>
                <p className="text-xs text-[#666055] mt-1">
                  {t.experiencesSubtitle}
                </p>
              </div>

              <div className="space-y-3">
                {availableAddons.map((addon) => {
                  const isSelected = selectedAddonIds.includes(addon.id);
                  const priceDisplay = addon.pricePerNight 
                    ? `${formatPrice(addon.pricePerNight * nights * filters.guests)} (${formatPrice(addon.pricePerNight)}/${t.perNightPerPerson})`
                    : `${formatPrice(addon.flatPrice || 0)} (${t.singleSession})`;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-4 ${
                        isSelected 
                          ? 'bg-[#EAE4D7] border-[#C26738] shadow-xs' 
                          : 'bg-[#EFECE4] border-[#DDD5C5] hover:border-[#857B6C]'
                      }`}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleAddon(addon.id); }}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                        isSelected ? 'bg-[#C26738] border-[#C26738] text-white' : 'border-[#DDD5C5] bg-white'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-sm font-semibold text-[#1A1917]">{addon.name}</h4>
                          <span className="text-xs font-mono font-semibold text-[#C26738]">{priceDisplay}</span>
                        </div>
                        <p className="text-xs text-[#666055] mt-1 leading-relaxed">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal Preview */}
              <div className="p-4 bg-[#EAE4D7] rounded border border-[#DDD5C5] flex justify-between items-center text-xs font-mono">
                <span>{t.subtotalStayAndAddons}</span>
                <span className="font-bold text-sm text-[#1A1917]">{formatPrice(summary.roomSubtotal + summary.addonsTotal)}</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 border border-[#DDD5C5] text-xs font-semibold uppercase tracking-wider text-[#666055] hover:text-[#1A1917] rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.backBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-[#1A1917] text-[#F5F2EB] hover:bg-[#C26738] transition-colors text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.continueToGuestData}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Guest Details Form */}
          {step === 3 && (
            <form onSubmit={handleConfirmReservation} className="space-y-6">
              <div>
                <h3 className="text-lg font-serif text-[#1A1917]">{t.guestDataTitle}</h3>
                <p className="text-xs text-[#666055] mt-1">
                  {t.guestDataSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-mono uppercase text-[#857B6C] mb-1">
                    {t.firstNameLabel}
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    value={guest.firstName}
                    onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
                    className="w-full bg-[#EAE4D7] border border-[#DDD5C5] px-3 py-2 text-xs rounded text-[#1A1917] focus:ring-1 focus:ring-[#C26738] focus:outline-hidden"
                    placeholder="e.g. Raden / John"
                  />
                  {formErrors.firstName && <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.firstName}</span>}
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-xs font-mono uppercase text-[#857B6C] mb-1">
                    {t.lastNameLabel}
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    required
                    value={guest.lastName}
                    onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
                    className="w-full bg-[#EAE4D7] border border-[#DDD5C5] px-3 py-2 text-xs rounded text-[#1A1917] focus:ring-1 focus:ring-[#C26738] focus:outline-hidden"
                    placeholder="e.g. Wijaya / Smith"
                  />
                  {formErrors.lastName && <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.lastName}</span>}
                </div>

                <div>
                  <label htmlFor="guest-email" className="block text-xs font-mono uppercase text-[#857B6C] mb-1">
                    {t.emailLabel}
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    required
                    value={guest.email}
                    onChange={(e) => setGuest({ ...guest, email: e.target.value })}
                    className="w-full bg-[#EAE4D7] border border-[#DDD5C5] px-3 py-2 text-xs rounded text-[#1A1917] focus:ring-1 focus:ring-[#C26738] focus:outline-hidden"
                    placeholder="nama.email@domain.com"
                  />
                  {formErrors.email && <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.email}</span>}
                </div>

                <div>
                  <label htmlFor="guest-phone" className="block text-xs font-mono uppercase text-[#857B6C] mb-1">
                    {t.phoneLabel}
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    required
                    value={guest.phone}
                    onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
                    className="w-full bg-[#EAE4D7] border border-[#DDD5C5] px-3 py-2 text-xs rounded text-[#1A1917] focus:ring-1 focus:ring-[#C26738] focus:outline-hidden"
                    placeholder="+62 812 3456 7890"
                  />
                  {formErrors.phone && <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.phone}</span>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="special-requests" className="block text-xs font-mono uppercase text-[#857B6C] mb-1">
                    {t.specialRequestsLabel}
                  </label>
                  <textarea
                    id="special-requests"
                    rows={2}
                    value={guest.specialRequests}
                    onChange={(e) => setGuest({ ...guest, specialRequests: e.target.value })}
                    className="w-full bg-[#EAE4D7] border border-[#DDD5C5] px-3 py-2 text-xs rounded text-[#1A1917] focus:ring-1 focus:ring-[#C26738] focus:outline-hidden"
                    placeholder={currentLang === 'id' ? 'Contoh: Pilihan bantal bulu angsa atau organik, botol anggur selamat datang...' : 'E.g., Organic pillow choice, arrival refreshments...'}
                  />
                </div>
              </div>

              {/* Final Financial Breakdown */}
              <div className="p-4 bg-[#EFECE4] border border-[#DDD5C5] rounded-lg text-xs font-mono space-y-2">
                <div className="text-[10px] uppercase font-bold text-[#857B6C] tracking-wider mb-2">{t.finalBreakdownTitle}</div>
                
                <div className="flex justify-between text-[#666055]">
                  <span>{room.name} ({nights} {t.nightsLabel} × {formatPrice(room.pricePerNight)})</span>
                  <span>{formatPrice(summary.roomSubtotal)}</span>
                </div>

                {summary.addonsTotal > 0 && (
                  <div className="flex justify-between text-[#666055]">
                    <span>{t.experiencesTitle} ({selectedAddons.length})</span>
                    <span>{formatPrice(summary.addonsTotal)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#666055]">
                  <span>{t.serviceFeeLabel}</span>
                  <span>{formatPrice(summary.serviceFee)}</span>
                </div>

                <div className="flex justify-between text-[#666055]">
                  <span>{t.sustainabilityTaxLabel}</span>
                  <span>{formatPrice(summary.sustainabilityTax)}</span>
                </div>

                <div className="pt-2 border-t border-[#DDD5C5] flex justify-between items-center text-sm font-bold text-[#1A1917]">
                  <span>{t.guaranteedTotalLabel}</span>
                  <span className="text-base text-[#C26738]">{formatPrice(summary.total)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 border border-[#DDD5C5] text-xs font-semibold uppercase tracking-wider text-[#666055] hover:text-[#1A1917] rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.backBtn}</span>
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1A1917] text-[#F5F2EB] hover:bg-[#C26738] transition-colors text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>{t.confirmBookingBtn}</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmed Voucher */}
          {step === 4 && confirmedBooking && (
            <div className="space-y-6 text-center">
              
              <div className="w-16 h-16 rounded-full bg-[#525E4A]/15 text-[#525E4A] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#525E4A] font-bold">{t.bookingSuccessBadge}</span>
                <h3 className="text-2xl font-serif text-[#1A1917] mt-1">{t.bookingSuccessTitle}</h3>
                <p className="text-xs text-[#666055] mt-1 max-w-md mx-auto">
                  {t.bookingSuccessDesc} <strong className="text-[#1A1917]">{confirmedBooking.guest.email}</strong>.
                </p>
              </div>

              {/* Architectural Pass Card */}
              <div className="max-w-md mx-auto bg-white border border-[#e5e2da] rounded-xl p-6 text-left shadow-md">
                <div className="flex items-center justify-between border-b border-[#e5e2da] pb-3 mb-4">
                  <div>
                    <img 
                      src="/LitaskunuLogo.svg" 
                      alt="LITASKUNU PROJECT" 
                      className="h-6 w-auto mb-1.5"
                    />
                    <span className="text-[10px] font-mono text-[#8c867c] uppercase block">{t.bookingCodeLabel}</span>
                    <div className="text-xl font-mono font-bold text-[#c38169] tracking-wider">{confirmedBooking.confirmationCode}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#8c867c] uppercase">Suite</span>
                    <div className="text-sm font-mono font-bold text-[#222426] bg-[#f4f4f4] px-2 py-0.5 rounded">{confirmedBooking.room.code}</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-[#635f59]">
                  <div className="flex justify-between">
                    <span className="text-[#8c867c]">{t.holderLabel}</span>
                    <span className="font-bold text-[#222426]">{confirmedBooking.guest.firstName} {confirmedBooking.guest.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8c867c]">{t.datesLabel}</span>
                    <span className="text-[#222426]">{confirmedBooking.checkIn} - {confirmedBooking.checkOut} ({confirmedBooking.nights} {t.nightsLabel})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8c867c]">{t.filterGuests}:</span>
                    <span className="text-[#222426]">{confirmedBooking.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8c867c]">{t.totalPaidLabel}</span>
                    <span className="font-bold text-[#222426]">{formatPrice(confirmedBooking.summary.total, currentLang)}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#e5e2da] flex items-center justify-between text-[11px] font-mono text-[#8c867c]">
                  <span>Litaskunu Project · Check-in 14:00</span>
                  <span className="text-[#586f6d] font-bold">✓ {t.bookingSuccessBadge}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-2.5 border border-[#DDD5C5] text-xs font-semibold uppercase tracking-wider text-[#1A1917] hover:bg-[#DDD5C5] rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.printSaveBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1A1917] text-[#F5F2EB] hover:bg-[#C26738] text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  {t.finishReturnBtn}
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
