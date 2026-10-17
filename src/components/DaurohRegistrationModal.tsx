import React, { useState } from 'react';
import { X, Check, Calendar, Users, MapPin, Sparkles, CheckCircle2, Download, Printer } from 'lucide-react';
import { DaurohProgram, DaurohRegistration } from '../types/dauroh.ts';
import { Language, Translations } from '../translations/index.ts';
import { formatPrice } from '../utils/booking.ts';

interface DaurohRegistrationModalProps {
  program: DaurohProgram | null;
  onClose: () => void;
  onSuccess: (reg: DaurohRegistration) => void;
  t: Translations;
  currentLang: Language;
}

export const DaurohRegistrationModal: React.FC<DaurohRegistrationModalProps> = ({
  program,
  onClose,
  onSuccess,
  t,
  currentLang,
}) => {
  const [packageType, setPackageType] = useState<'with_suite' | 'program_only'>('with_suite');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedReg, setConfirmedReg] = useState<DaurohRegistration | null>(null);

  if (!program) return null;

  const currentPrice = packageType === 'with_suite'
    ? (currentLang === 'id' ? program.suitePackagePrice.idr : program.suitePackagePrice.eur)
    : (currentLang === 'id' ? program.price.idr : program.price.eur);

  const formattedPrice = currentLang === 'id'
    ? `Rp ${currentPrice.toLocaleString('id-ID')}`
    : `€${currentPrice.toLocaleString('en-US')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !city) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const regCode = `REG-LTK-${program.code.replace(/\s+/g, '')}-${randomSuffix}`;

    const newRegistration: DaurohRegistration = {
      registrationId: `reg-${Date.now()}`,
      registrationCode: regCode,
      program,
      packageType,
      fullName,
      email,
      phone,
      city,
      specialRequests,
      totalPrice: currentPrice,
      createdAt: new Date().toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    setConfirmedReg(newRegistration);
    setIsConfirmed(true);
    onSuccess(newRegistration);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#e5e2da] overflow-hidden my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#f4f4f4] px-6 py-4 border-b border-[#e5e2da] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c38169]/15 flex items-center justify-center text-[#c38169]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#c38169]">
                {program.code} · Litaskunu Project
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#222426]">
                {isConfirmed ? t.daurohSuccessTitle : t.daurohRegisterTitle}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#635f59] hover:text-[#222426] hover:bg-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isConfirmed ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Program Brief Card */}
            <div className="flex gap-4 p-4 rounded-lg bg-[#faf9f7] border border-[#e5e2da]">
              <img 
                src={program.image} 
                alt={program.title[currentLang]} 
                className="w-24 h-24 rounded-md object-cover shrink-0"
              />
              <div className="space-y-1 min-w-0">
                <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-[#da908f]/20 text-[#222426]">
                  {program.dates[currentLang]}
                </span>
                <h3 className="text-sm font-bold text-[#222426] truncate">
                  {program.title[currentLang]}
                </h3>
                <p className="text-xs text-[#635f59]">
                  {program.instructor.name} ({program.instructor.title[currentLang]})
                </p>
                <div className="flex items-center gap-3 pt-1 text-[11px] text-[#8c867c]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#c38169]" />
                    {program.duration[currentLang]}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#bfb695]" />
                    {program.location[currentLang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#222426] mb-2">
                {t.daurohPackageSelectionLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Option 1: With Suite */}
                <div
                  onClick={() => setPackageType('with_suite')}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                    packageType === 'with_suite'
                      ? 'border-[#c38169] bg-[#c38169]/5 shadow-xs'
                      : 'border-[#e5e2da] hover:border-[#bfb695] bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#222426]">
                          {t.daurohPackageSuite}
                        </span>
                        {packageType === 'with_suite' && (
                          <Check className="w-4 h-4 text-[#c38169]" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#635f59] mt-1">
                        Termasuk menginap di Suite Paviliun, 3x makan organik, dan modul eksklusif.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-extrabold text-[#c38169]">
                    {currentLang === 'id' ? `Rp ${program.suitePackagePrice.idr.toLocaleString('id-ID')}` : `€${program.suitePackagePrice.eur}`}
                  </div>
                </div>

                {/* Option 2: Program Only */}
                <div
                  onClick={() => setPackageType('program_only')}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                    packageType === 'program_only'
                      ? 'border-[#c38169] bg-[#c38169]/5 shadow-xs'
                      : 'border-[#e5e2da] hover:border-[#bfb695] bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#222426]">
                          {t.daurohPackageOnly}
                        </span>
                        {packageType === 'program_only' && (
                          <Check className="w-4 h-4 text-[#c38169]" />
                        )}
                      </div>
                      <p className="text-[11px] text-[#635f59] mt-1">
                        Akses majlis dauroh, modul belajar, konsumsi harian (tanpa menginap).
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-extrabold text-[#222426]">
                    {currentLang === 'id' ? `Rp ${program.price.idr.toLocaleString('id-ID')}` : `€${program.price.eur}`}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#222426] mb-1">
                  {t.aboutFormName}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Contoh: Muhammad Ihsan"
                  className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222426] mb-1">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222426] mb-1">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+62 812-XXXX-XXXX"
                  className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#222426] mb-1">
                  {t.daurohCityLabel}
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Contoh: Bandung / Jakarta / Yogyakarta"
                  className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#222426] mb-1">
                  {t.daurohNotesLabel}
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Catatan kesehatan, alergi makanan, atau riwayat tholabul 'ilmi sebelumnya..."
                  className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                />
              </div>
            </div>

            {/* Pricing Summary & Submit */}
            <div className="pt-3 border-t border-[#e5e2da] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#8c867c] block">
                  Total Kontribusi / Infaq:
                </span>
                <span className="text-lg font-extrabold text-[#222426]">
                  {formattedPrice}
                </span>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] transition-colors rounded-md shadow-sm cursor-pointer"
              >
                {t.daurohConfirmBtn}
              </button>
            </div>
          </form>
        ) : confirmedReg && (
          /* Confirmation Pass Voucher */
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#bfb695]/20 flex items-center justify-center text-[#586f6d]">
                <CheckCircle2 className="w-7 h-7 text-[#586f6d]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#222426]">
                {t.daurohSuccessTitle}
              </h3>
              <p className="text-xs text-[#635f59] max-w-md mx-auto">
                {t.daurohSuccessDesc} <strong className="text-[#222426]">{confirmedReg.email}</strong>.
              </p>
            </div>

            {/* Official Pass Ticket */}
            <div className="p-5 rounded-xl bg-[#f4f4f4] border border-[#e5e2da] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#da908f]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e2da]">
                <img 
                  src="/LitaskunuLogo.svg" 
                  alt="LITASKUNU PROJECT" 
                  className="h-7 w-auto"
                />
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-white text-[#c38169] border border-[#e5e2da] rounded">
                  {confirmedReg.registrationCode}
                </span>
              </div>

              <div className="py-4 space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8c867c] block">
                    {t.daurohProgramLabel}
                  </span>
                  <h4 className="text-sm font-bold text-[#222426]">
                    {confirmedReg.program.title[currentLang]}
                  </h4>
                  <p className="text-xs text-[#635f59]">
                    {confirmedReg.program.instructor.name}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-[#8c867c] block">Nama Peserta</span>
                    <span className="font-bold text-[#222426]">{confirmedReg.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8c867c] block">Kota Domisili</span>
                    <span className="font-bold text-[#222426]">{confirmedReg.city}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8c867c] block">Tanggal Retret</span>
                    <span className="font-bold text-[#222426]">{confirmedReg.program.dates[currentLang]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8c867c] block">Paket Pilihan</span>
                    <span className="font-bold text-[#c38169]">
                      {confirmedReg.packageType === 'with_suite' ? t.daurohPackageSuite : t.daurohPackageOnly}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e5e2da] flex items-center justify-between text-xs">
                <span className="text-[#8c867c]">Status: Terkonfirmasi Aktif</span>
                <span className="font-extrabold text-[#222426]">{formattedPrice}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#222426] bg-[#f4f4f4] hover:bg-[#eae8e1] border border-[#e5e2da] rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                {t.printSaveBtn}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] rounded-md transition-colors cursor-pointer"
              >
                {t.finishReturnBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
