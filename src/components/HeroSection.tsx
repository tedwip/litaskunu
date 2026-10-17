import React from 'react';
import { ArrowDown, FileText, Compass, Sparkles, BookOpen } from 'lucide-react';
import { Translations } from '../translations/index.ts';

interface HeroSectionProps {
  t: Translations;
  onExploreCatalog: () => void;
  onNavigateToDauroh: () => void;
  onOpenSpecSheet: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  t,
  onExploreCatalog,
  onNavigateToDauroh,
  onOpenSpecSheet,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#e5e2da] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Architectural Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#da908f]/20 border border-[#da908f]/30 text-xs font-bold uppercase tracking-widest text-[#222426]">
            <Compass className="w-3.5 h-3.5 text-[#c38169]" />
            <span>{t.heroKicker}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#222426] leading-tight text-balance">
            {t.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#635f59] max-w-2xl mx-auto leading-relaxed">
            {t.heroSubheadline}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onExploreCatalog}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#222426] text-white hover:bg-[#c38169] transition-all text-xs font-bold uppercase tracking-wider rounded-md shadow-xs cursor-pointer"
            >
              <span>{t.heroButtonExplore}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onNavigateToDauroh}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4f4f4] hover:bg-[#eae8e1] text-[#222426] border border-[#e5e2da] transition-all text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#c38169]" />
              <span>{t.heroButtonDauroh}</span>
            </button>
          </div>
        </div>

        {/* Hero Architectural Card Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-[#e5e2da] bg-[#f4f4f4] shadow-md">
          {/* Main Visual Frame */}
          <div className="relative aspect-16/9 sm:aspect-21/9 min-h-[380px] lg:min-h-[480px] w-full overflow-hidden">
            <img
              src="/src/assets/images/hero_hotel_facade_1792044085387.jpg"
              alt="Litaskunu Project facade and reflecting water sanctuary"
              className="w-full h-full object-cover object-center filter brightness-[0.93] contrast-[1.02] transition-transform duration-1000 hover:scale-103"
            />

            {/* Architectural Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#222426]/90 via-[#222426]/30 to-transparent" />

            {/* Bottom Content Bar directly inside hero frame */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              
              <div className="max-w-xl text-white space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#f0be9d] bg-black/40 px-2 py-0.5 rounded">
                    {t.heroCardTag}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">
                    {t.heroCardSubtitle}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                  {t.heroCardHeadline}
                </h2>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onExploreCatalog}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#222426] hover:bg-[#c38169] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer shadow-xs"
                  >
                    <span>{t.heroButtonExplore}</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenSpecSheet}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors text-xs font-semibold uppercase tracking-wider rounded-md border border-white/25 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#bfb695]" />
                    <span>{t.buildingSpecsBtn}</span>
                  </button>
                </div>
              </div>

              {/* Litaskunu Spec Sheet Trigger Card in Corner */}
              <div 
                onClick={onOpenSpecSheet}
                className="self-start md:self-end bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#e5e2da] text-[#222426] flex items-center gap-4 cursor-pointer hover:bg-white transition-all shadow-md max-w-xs"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onOpenSpecSheet(); }}
              >
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#8c867c] font-bold">
                    Masterplan & Blueprint
                  </div>
                  <div className="text-xs font-bold tracking-tight text-[#222426]">
                    {t.specsCardTitle}
                  </div>
                  <div className="text-[11px] text-[#c38169] font-bold mt-0.5 flex items-center gap-1">
                    <span>{t.heroCatalogAction}</span>
                    <span>→</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#da908f]/20 border border-[#da908f]/30 flex items-center justify-center shrink-0 text-[#c38169]">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Architectural Material Features Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#635f59]">
          <div className="border border-[#e5e2da] bg-[#f4f4f4] p-3.5 rounded-lg">
            <div className="text-[10px] text-[#c38169] font-bold uppercase">Struktur & Batu Alam</div>
            <div className="font-sans font-bold text-[#222426] mt-0.5">Batu Travertine Alami</div>
          </div>
          <div className="border border-[#e5e2da] bg-[#f4f4f4] p-3.5 rounded-lg">
            <div className="text-[10px] text-[#bfb695] font-bold uppercase">Kayu Warisan</div>
            <div className="font-sans font-bold text-[#222426] mt-0.5">Kayu Jati Daur Ulang</div>
          </div>
          <div className="border border-[#e5e2da] bg-[#f4f4f4] p-3.5 rounded-lg">
            <div className="text-[10px] text-[#da908f] font-bold uppercase">Energi & Udara</div>
            <div className="font-sans font-bold text-[#222426] mt-0.5">Sirkulasi Alami Ramah Lingkungan</div>
          </div>
          <div className="border border-[#e5e2da] bg-[#f4f4f4] p-3.5 rounded-lg">
            <div className="text-[10px] text-[#586f6d] font-bold uppercase">Kawasan Hening</div>
            <div className="font-sans font-bold text-[#222426] mt-0.5">Lembah As-Sakinah</div>
          </div>
        </div>

      </div>
    </section>
  );
};
