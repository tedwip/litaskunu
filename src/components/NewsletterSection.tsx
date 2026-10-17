import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Translations } from '../translations/index.ts';

interface NewsletterSectionProps {
  t: Translations;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ t }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white border-t border-[#e5e2da]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="text-xs font-bold uppercase tracking-widest text-[#c38169]">
          {t.communityTag}
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222426] tracking-tight">
          {t.newsletterTitle}
        </h3>

        <p className="text-sm text-[#635f59] max-w-lg mx-auto leading-relaxed">
          {t.newsletterSubtitle}
        </p>

        {submitted ? (
          <div className="mt-8 p-4 bg-[#f4f4f4] border border-[#bfb695] rounded-xl max-w-md mx-auto flex items-center justify-center gap-2 text-xs font-semibold text-[#586f6d]">
            <Check className="w-4 h-4 text-[#586f6d]" />
            <span>{t.newsletterSuccess}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletterPlaceholder}
                className="flex-1 bg-[#f4f4f4] border border-[#e5e2da] px-4 py-3 text-xs text-[#222426] rounded-md focus:outline-none focus:ring-1 focus:ring-[#c38169] focus:border-[#c38169]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#222426] text-white hover:bg-[#c38169] text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>{t.newsletterSubmit}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-[#8c867c]">
              {t.newsletterAgreement}{' '}
              <span className="underline cursor-pointer hover:text-[#222426]">{t.privacyPolicy}</span>.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
