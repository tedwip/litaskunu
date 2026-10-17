import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { Translations } from '../translations/index.ts';
import { AppRoute } from '../types/navigation.ts';

interface FooterProps {
  t: Translations;
  onNavigate: (route: AppRoute) => void;
  onOpenSpecSheet: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  onNavigate,
  onOpenSpecSheet,
}) => {
  return (
    <footer className="bg-[#f4f4f4] border-t border-[#e5e2da] text-[#222426] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
              className="inline-block"
            >
              <img 
                src="/LitaskunuLogo.svg" 
                alt="LITASKUNU PROJECT®" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#635f59] max-w-sm leading-relaxed">
              {t.brandTagline}. {t.brandPhilosophy}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#da908f]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#bfb695]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#c38169]" />
              <span className="text-xs font-mono text-[#8c867c] ml-1">Sakinah · Al-Bayan · Al-Ihsan</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#222426]">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#635f59]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#c38169] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/dauroh')}
                  className="hover:text-[#c38169] transition-colors cursor-pointer"
                >
                  Dauroh & Majlis Tholabul 'Ilmi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/penginapan')}
                  className="hover:text-[#c38169] transition-colors cursor-pointer"
                >
                  Katalog Penginapan & Suite
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/tentang')}
                  className="hover:text-[#c38169] transition-colors cursor-pointer"
                >
                  Tentang Litaskunu Project
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSpecSheet}
                  className="hover:text-[#c38169] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Spesifikasi & Blueprint</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#222426]">
              Suaka & Kontak
            </h4>
            <div className="space-y-2.5 text-xs text-[#635f59]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c38169] shrink-0 mt-0.5" />
                <span>{t.footerAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#bfb695] shrink-0" />
                <span>salam@litaskunuproject.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#da908f] shrink-0" />
                <span>+62 811-2345-6789 (WhatsApp Concierge)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e5e2da] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c867c]">
          <p>© 2026 LITASKUNU PROJECT®. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <button 
              type="button" 
              onClick={() => onNavigate('/tentang')} 
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              {t.footerTerms}
            </button>
            <button 
              type="button" 
              onClick={() => onNavigate('/tentang')} 
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              {t.footerPrivacy}
            </button>
            <button 
              type="button" 
              onClick={() => onNavigate('/tentang')} 
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              {t.footerDisputes}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
