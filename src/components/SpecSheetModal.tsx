import React from 'react';
import { X, Download, CheckCircle2, Building2 } from 'lucide-react';
import { getLocalizedRooms } from '../data/hotelRooms.ts';
import { Translations, Language } from '../translations/index.ts';

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  currentLang: Language;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({
  isOpen,
  onClose,
  t,
  currentLang,
}) => {
  if (!isOpen) return null;

  const rooms = getLocalizedRooms(currentLang);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#e5e2da] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e2da] bg-[#f4f4f4]">
          <div className="flex items-center gap-3">
            <img 
              src="/LitaskunuLogo.svg" 
              alt="LITASKUNU PROJECT" 
              className="h-6 w-auto"
            />
            <span className="text-[#8c867c]">|</span>
            <h2 id="spec-modal-title" className="text-xs font-bold uppercase tracking-wider text-[#222426]">
              {t.specDocTitle}
            </h2>
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

        {/* Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-xs font-mono">
          
          <div className="border-b border-[#e5e2da] pb-6">
            <div className="text-[10px] uppercase font-bold text-[#c38169]">{t.specDocRef}</div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#222426] mt-1 font-sans">
              {t.specDocTitle}
            </h3>
            <p className="mt-2 text-xs font-sans text-[#635f59] max-w-2xl leading-relaxed">
              {t.specDocDesc}
            </p>
          </div>

          {/* Table */}
          <div>
            <h4 className="text-xs uppercase font-bold text-[#222426] mb-3">
              {t.specTableTitle}
            </h4>

            <div className="overflow-x-auto border border-[#e5e2da] rounded-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f4f4] border-b border-[#e5e2da] text-[10px] uppercase tracking-wider text-[#635f59]">
                    <th className="p-3 font-bold">{t.specCode}</th>
                    <th className="p-3 font-bold">{t.specRoom}</th>
                    <th className="p-3 font-bold">{t.specCollection}</th>
                    <th className="p-3 font-bold">{t.specArea}</th>
                    <th className="p-3 font-bold">{t.specCapacity}</th>
                    <th className="p-3 font-bold">{t.specView}</th>
                    <th className="p-3 font-bold">{t.specAcoustics}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e2da] text-[11px] text-[#222426]">
                  {rooms.map((r) => (
                    <tr key={r.id} className="hover:bg-[#f4f4f4]/60 transition-colors">
                      <td className="p-3 font-mono font-bold text-[#c38169]">{r.code}</td>
                      <td className="p-3 font-sans font-bold">{r.name}</td>
                      <td className="p-3 font-sans text-[#635f59]">{r.collection}</td>
                      <td className="p-3 font-mono">{r.squareMeters} m²</td>
                      <td className="p-3 font-mono">{r.maxGuests} {t.guestsLabel}</td>
                      <td className="p-3 font-sans text-[#635f59]">{r.view}</td>
                      <td className="p-3 font-mono text-[#586f6d] font-bold">STC 58+ (Hening)</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Three Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#e5e2da]">
            <div className="p-4 bg-[#f4f4f4] border border-[#e5e2da] rounded-xl">
              <div className="flex items-center gap-2 text-[#586f6d] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-bold uppercase text-[11px]">{t.specCertTitle1}</span>
              </div>
              <p className="text-[11px] font-sans text-[#635f59] leading-relaxed">
                {t.specCertDesc1}
              </p>
            </div>

            <div className="p-4 bg-[#f4f4f4] border border-[#e5e2da] rounded-xl">
              <div className="flex items-center gap-2 text-[#c38169] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-bold uppercase text-[11px]">{t.specCertTitle2}</span>
              </div>
              <p className="text-[11px] font-sans text-[#635f59] leading-relaxed">
                {t.specCertDesc2}
              </p>
            </div>

            <div className="p-4 bg-[#f4f4f4] border border-[#e5e2da] rounded-xl">
              <div className="flex items-center gap-2 text-[#da908f] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-bold uppercase text-[11px]">{t.specCertTitle3}</span>
              </div>
              <p className="text-[11px] font-sans text-[#635f59] leading-relaxed">
                {t.specCertDesc3}
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#f4f4f4] border-t border-[#e5e2da] flex items-center justify-between gap-4">
          <span className="text-[11px] font-mono text-[#8c867c]">
            {t.specFooterEdition}
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 border border-[#e5e2da] text-xs font-bold uppercase tracking-wider text-[#222426] bg-white hover:bg-[#eae8e1] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.specDownloadBtn}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-[#222426] text-white hover:bg-[#c38169] text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
