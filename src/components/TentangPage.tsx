import React, { useState } from 'react';
import { 
  Leaf, 
  Sun, 
  Droplets, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight,
  BookOpen,
  Heart
} from 'lucide-react';
import { Language, Translations } from '../translations/index.ts';

interface TentangPageProps {
  t: Translations;
  currentLang: Language;
  onOpenSpecSheet: () => void;
  onNavigateToDauroh: () => void;
  onNavigateToBooking: () => void;
}

export const TentangPage: React.FC<TentangPageProps> = ({
  t,
  currentLang,
  onOpenSpecSheet,
  onNavigateToDauroh,
  onNavigateToBooking,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('dauroh');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f4f4f4] border-b border-[#e5e2da] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#bfb695]/30 border border-[#bfb695]/50 text-[#222426] text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#c38169]" />
              <span>Filosofi & Visi Litaskunu Project</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#222426] leading-tight">
              {t.aboutTitle}
            </h1>

            <p className="text-base sm:text-lg text-[#635f59] leading-relaxed max-w-2xl">
              {t.aboutSubtitle}
            </p>

            {/* Arabic Calligraphy & Translation Card */}
            <div className="p-5 rounded-xl bg-white border border-[#e5e2da] shadow-xs space-y-3">
              <div className="text-right text-xl sm:text-2xl font-arabic text-[#222426] leading-relaxed font-medium">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              </div>
              <p className="text-xs text-[#635f59] italic border-t border-[#f4f4f4] pt-2 leading-relaxed">
                "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram padanya (li taskunū ilaihā), dan Dia menjadikan di antaramu rasa kasih dan sayang." — QS. Ar-Rum: 21
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e5e2da] aspect-4/3">
              <img 
                src="/src/assets/images/litaskunu_sanctuary_grounds_1792058359103.jpg" 
                alt="Lanskap Arsitektur Litaskunu Sanctuary" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#f0be9d] block">
                    Kawasan Cagar Arsitektur
                  </span>
                  <p className="text-sm font-bold">
                    Harmoni Alam, Arsitektur Vernakular & Ketenangan Jiwa
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Story Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-[#222426]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c38169] block text-center">
            Narasi & Landasan Pemikiran
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight">
            {t.aboutStoryHeading}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#635f59] leading-relaxed">
            <p>{t.aboutStoryP1}</p>
            <p>{t.aboutStoryP2}</p>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars */}
      <section className="bg-[#f4f4f4] border-t border-b border-[#e5e2da] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#da908f]">
              Pondasi Nilai
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222426]">
              {t.aboutPillarsHeading}
            </h2>
            <p className="text-sm text-[#635f59]">
              Setiap elemen di Litaskunu dibangun di atas tiga pilar utama yang saling menguatkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-xl bg-white border border-[#e5e2da] space-y-4 shadow-xs relative overflow-hidden group hover:border-[#da908f] transition-all">
              <div className="w-2 h-full absolute top-0 left-0 bg-[#da908f]" />
              <div className="w-12 h-12 rounded-lg bg-[#da908f]/20 flex items-center justify-center text-[#da908f]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#222426]">
                {t.aboutPillar1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#635f59] leading-relaxed">
                {t.aboutPillar1Desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-xl bg-white border border-[#e5e2da] space-y-4 shadow-xs relative overflow-hidden group hover:border-[#bfb695] transition-all">
              <div className="w-2 h-full absolute top-0 left-0 bg-[#bfb695]" />
              <div className="w-12 h-12 rounded-lg bg-[#bfb695]/30 flex items-center justify-center text-[#586f6d]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#222426]">
                {t.aboutPillar2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#635f59] leading-relaxed">
                {t.aboutPillar2Desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-xl bg-white border border-[#e5e2da] space-y-4 shadow-xs relative overflow-hidden group hover:border-[#c38169] transition-all">
              <div className="w-2 h-full absolute top-0 left-0 bg-[#c38169]" />
              <div className="w-12 h-12 rounded-lg bg-[#c38169]/20 flex items-center justify-center text-[#c38169]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#222426]">
                {t.aboutPillar3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#635f59] leading-relaxed">
                {t.aboutPillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Specs & Blueprint Download Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 md:p-12 rounded-2xl bg-[#222426] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f0be9d] font-bold">
              Litaskunu Architectural Blueprint 2026/27
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t.specDocTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#ddd5c5] leading-relaxed">
              {t.specDocDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenSpecSheet}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#222426] bg-white hover:bg-[#c38169] hover:text-white transition-all rounded-md flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>{t.buildingSpecsBtn}</span>
          </button>
        </div>
      </section>

      {/* Contact & Consultation Form */}
      <section className="bg-[#faf9f7] border-t border-[#e5e2da] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c38169]">
              Silaturahmi & Pertanyaan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222426]">
              {t.aboutContactTitle}
            </h2>
            <p className="text-sm text-[#635f59] leading-relaxed">
              {t.aboutContactDesc}
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#222426]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c38169] shrink-0" />
                <span>Kawasan Perbukitan As-Sakinah, Litaskunu Project</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#bfb695] shrink-0" />
                <span>salam@litaskunuproject.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#da908f] shrink-0" />
                <span>+62 811-2345-6789 (Concierge WhatsApp)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#e5e2da] shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#222426] mb-1">
                      {t.aboutFormName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#222426] mb-1">
                      {t.aboutFormEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#222426] mb-1">
                    {t.aboutFormTopic}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                  >
                    <option value="dauroh">Informasi Program Dauroh & Jadwal</option>
                    <option value="penginapan">Reservasi Kamar Paviliun & Rombongan</option>
                    <option value="arsitektur">Kunjungan Studi Arsitektur Berkelanjutan</option>
                    <option value="wakaf">Kerjasama Keilmuan & Wakaf Produktif</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#222426] mb-1">
                    {t.aboutFormMessage}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    className="w-full px-3 py-2 text-xs border border-[#e5e2da] rounded-md focus:outline-none focus:border-[#c38169]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] transition-colors rounded-md shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.aboutFormSubmit}</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#bfb695]/30 flex items-center justify-center text-[#586f6d]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#222426]">
                  Pesan Berhasil Terkirim
                </h3>
                <p className="text-xs text-[#635f59] max-w-sm mx-auto">
                  {t.aboutFormSuccess}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-[#c38169] underline cursor-pointer"
                >
                  Kirim pesan lain
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
