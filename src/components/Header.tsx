import React, { useState } from 'react';
import { Globe, ChevronDown, Check, Menu, X } from 'lucide-react';
import { Language, Translations } from '../translations/index.ts';
import { AppRoute, NAV_ITEMS } from '../types/navigation.ts';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  onOpenBooking: () => void;
}

const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: 'id', label: 'Bahasa Indonesia', short: 'ID' },
  { code: 'en', label: 'English (US)', short: 'EN' },
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
  currentRoute,
  onNavigate,
  onOpenBooking,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, path: AppRoute) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e2da] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Litaskunu SVG Logo */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2 shrink-0 py-1 transition-opacity hover:opacity-90"
          aria-label="Litaskunu Project Home"
        >
          <img 
            src="/LitaskunuLogo.svg" 
            alt="LITASKUNU PROJECT®" 
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Zone 2: Navigation Links (Home - Dauroh - Penginapan - Tentang) */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-medium text-[#55524e]">
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.path;
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`relative py-2.5 transition-colors whitespace-nowrap cursor-pointer font-semibold ${
                  isActive
                    ? 'text-[#222426]'
                    : 'text-[#635f59] hover:text-[#c38169]'
                }`}
              >
                {item.label[currentLang]}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c38169] rounded-full animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Selector & Primary Booking CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#222426] bg-[#f4f4f4] hover:bg-[#eae8e1] border border-[#e5e2da] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Pilih Bahasa / Select Language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#c38169]" />
              <span className="tracking-wide uppercase font-bold">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-[#8c867c]" />
            </button>

            {langMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-44 bg-[#ffffff] border border-[#e5e2da] rounded-lg shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                role="menu"
              >
                <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#8c867c] font-semibold border-b border-[#f4f4f4] mb-1">
                  {currentLang === 'id' ? 'Pilih Bahasa' : 'Choose Language'}
                </div>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left cursor-pointer ${
                      currentLang === lang.code
                        ? 'bg-[#f4f4f4] text-[#222426] font-bold'
                        : 'text-[#635f59] hover:bg-[#faf9f7] hover:text-[#222426]'
                    }`}
                    role="menuitem"
                  >
                    <span>{lang.label}</span>
                    {currentLang === lang.code && (
                      <Check className="w-3.5 h-3.5 text-[#c38169]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] active:bg-[#a4847b] transition-all rounded-md shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.navBook}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#222426] hover:bg-[#f4f4f4] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5e2da] bg-[#ffffff] px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.path;
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`block px-3 py-2.5 rounded-md text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'bg-[#f4f4f4] text-[#c38169]'
                    : 'text-[#635f59] hover:bg-[#faf9f7] hover:text-[#222426]'
                }`}
              >
                {item.label[currentLang]}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#f4f4f4]">
            <button
              type="button"
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] rounded-md text-center cursor-pointer"
            >
              {t.navBook}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
