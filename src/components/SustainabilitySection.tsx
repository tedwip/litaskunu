import React from 'react';
import { Sun, Droplets, TreePine } from 'lucide-react';
import { Translations } from '../translations/index.ts';

interface SustainabilitySectionProps {
  t: Translations;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ t }) => {
  return (
    <section id="sustentabilidade" className="py-20 bg-[#f4f4f4] border-t border-[#e5e2da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c38169] block">
            {t.manifestoTag}
          </span>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222426] leading-snug">
            "{t.quotePhilosophy}"
          </blockquote>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222426] tracking-tight">
              {t.sustainableCraftTitle}
            </h3>
            <p className="mt-4 text-sm text-[#635f59] leading-relaxed">
              {t.sustainableCraftText}
            </p>

            <div className="mt-8 space-y-4 text-xs">
              <div className="p-4 bg-white border border-[#e5e2da] rounded-xl flex items-start gap-4 shadow-xs">
                <TreePine className="w-5 h-5 text-[#586f6d] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#222426]">{t.woodMaterialTitle}</div>
                  <div className="text-[#635f59] mt-0.5 leading-relaxed">
                    {t.woodMaterialDesc}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#e5e2da] rounded-xl flex items-start gap-4 shadow-xs">
                <Sun className="w-5 h-5 text-[#c38169] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#222426]">{t.positiveEnergyTitle}</div>
                  <div className="text-[#635f59] mt-0.5 leading-relaxed">
                    {t.positiveEnergyDesc}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#e5e2da] rounded-xl flex items-start gap-4 shadow-xs">
                <Droplets className="w-5 h-5 text-[#bfb695] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#222426]">{t.closedWaterTitle}</div>
                  <div className="text-[#635f59] mt-0.5 leading-relaxed">
                    {t.closedWaterDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courtyard Architectural Image */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#e5e2da]">
            <img
              src="/src/assets/images/hotel_lounge_courtyard_1792044088133.jpg"
              alt="Litaskunu Courtyard and Olive Grove"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-[10px] uppercase font-bold text-[#f0be9d] tracking-widest">{t.nativeEcoLabel}</div>
                <div className="text-sm font-bold mt-0.5">{t.courtyardLocationLabel}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
