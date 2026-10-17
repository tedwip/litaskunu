import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Filter,
  GraduationCap,
  HeartHandshake,
  Compass
} from 'lucide-react';
import { DAUROH_PROGRAMS } from '../data/daurohData.ts';
import { DaurohProgram, DaurohCategory } from '../types/dauroh.ts';
import { Language, Translations } from '../translations/index.ts';

interface DaurohPageProps {
  t: Translations;
  currentLang: Language;
  onRegisterProgram: (program: DaurohProgram) => void;
  onNavigateToBooking: () => void;
}

export const DaurohPage: React.FC<DaurohPageProps> = ({
  t,
  currentLang,
  onRegisterProgram,
  onNavigateToBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DaurohCategory>('all');
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(null);

  const categories: { key: DaurohCategory; label: string }[] = [
    { key: 'all', label: t.daurohFilterAll },
    { key: 'quran', label: t.daurohFilterQuran },
    { key: 'arabic', label: t.daurohFilterArabic },
    { key: 'tazkiyah', label: t.daurohFilterTazkiyah },
    { key: 'sakinah', label: t.daurohFilterSakinah },
    { key: 'fiqih', label: t.daurohFilterFiqih },
    { key: 'architecture', label: t.daurohFilterArchitecture },
  ];

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === 'all') return DAUROH_PROGRAMS;
    return DAUROH_PROGRAMS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Dauroh Hero Banner */}
      <section className="relative overflow-hidden bg-[#f4f4f4] border-b border-[#e5e2da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#da908f]/20 border border-[#da908f]/40 text-[#222426] text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#c38169]" />
              <span>{t.daurohKicker}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#222426] leading-tight">
              {t.daurohTitle}
            </h1>

            <p className="text-base sm:text-lg text-[#635f59] leading-relaxed max-w-2xl">
              {t.daurohSubtitle}
            </p>

            {/* Arabic Verse Quote */}
            <div className="p-4 rounded-xl bg-white border border-[#e5e2da] shadow-xs space-y-2">
              <p className="text-right text-lg sm:text-xl font-arabic text-[#222426] leading-loose">
                {t.verseArabic}
              </p>
              <p className="text-xs text-[#8c867c] italic border-t border-[#f4f4f4] pt-2">
                "{t.verseTranslation}"
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-[#635f59]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c38169]" />
                <span>Sanad Bersambung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#bfb695]" />
                <span>Paviliun Hening Asri</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#da908f]" />
                <span>Konsumsi Organik Sehat</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e5e2da] aspect-4/3">
              <img 
                src="/src/assets/images/dauroh_majlis_hall_1792058358750.jpg" 
                alt="Majlis Kubah & Kolam Pantul Litaskunu" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#f0be9d] block">
                    Ruang Tholabul 'Ilmi
                  </span>
                  <p className="text-sm font-bold">
                    Majlis Kolam Pantul & Kubah Terbuka Litaskunu
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#e5e2da] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs uppercase font-bold text-[#8c867c] mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Kategori:
            </span>
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#222426] text-white shadow-xs'
                      : 'bg-[#f4f4f4] text-[#635f59] hover:bg-[#eae8e1] hover:text-[#222426]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dauroh Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const isExpanded = expandedProgramId === program.id;
            const formattedPrice = currentLang === 'id' 
              ? `Rp ${program.price.idr.toLocaleString('id-ID')}`
              : `€${program.price.eur}`;
            const formattedSuitePrice = currentLang === 'id'
              ? `Rp ${program.suitePackagePrice.idr.toLocaleString('id-ID')}`
              : `€${program.suitePackagePrice.eur}`;

            return (
              <article 
                key={program.id}
                className="flex flex-col bg-white rounded-xl border border-[#e5e2da] overflow-hidden shadow-xs hover:shadow-md transition-all group"
              >
                {/* Image Cover */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#f4f4f4]">
                  <img 
                    src={program.image} 
                    alt={program.title[currentLang]} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-md bg-[#222426]/90 text-white backdrop-blur-xs">
                      {program.code}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-[#da908f] text-white shadow-xs">
                      {program.remainingSeats} {t.daurohSeatsRemaining}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white drop-shadow-md">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#f0be9d]" />
                      {program.dates[currentLang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#bfb695]" />
                      {program.duration[currentLang]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#c38169] block">
                        {program.location[currentLang]}
                      </span>
                      <h3 className="text-base font-bold text-[#222426] group-hover:text-[#c38169] transition-colors leading-snug mt-1">
                        {program.title[currentLang]}
                      </h3>
                    </div>

                    <p className="text-xs text-[#635f59] line-clamp-2 leading-relaxed">
                      {program.subtitle[currentLang]}
                    </p>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-[#f4f4f4] border border-[#e5e2da]">
                      <div className="w-9 h-9 rounded-full bg-[#bfb695]/30 flex items-center justify-center text-[#586f6d] shrink-0 font-bold text-xs">
                        {program.instructor.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-[#222426] block truncate">
                          {program.instructor.name}
                        </span>
                        <span className="text-[10px] text-[#8c867c] block truncate">
                          {program.instructor.title[currentLang]}
                        </span>
                      </div>
                    </div>

                    {/* Highlights bullets */}
                    <ul className="space-y-1.5 text-xs text-[#635f59] pt-1">
                      {program.curriculum[currentLang].slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#bfb695] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Details Accordion */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-[#e5e2da] space-y-3 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#222426] mb-1.5">
                          {t.daurohCurriculumTitle}:
                        </h4>
                        <ul className="space-y-1 text-xs text-[#635f59]">
                          {program.curriculum[currentLang].map((c, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#c38169] font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#222426] mb-1.5">
                          {t.daurohScheduleTitle}:
                        </h4>
                        <div className="space-y-1 text-[11px] text-[#635f59] bg-[#faf9f7] p-2.5 rounded-md border border-[#e5e2da]">
                          {program.dailySchedule.map((s, idx) => (
                            <div key={idx} className="flex justify-between gap-2">
                              <span className="font-mono text-[#8c867c] shrink-0">{s.time}</span>
                              <span className="font-medium text-[#222426] text-right">{s.activity[currentLang]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pricing & Actions */}
                  <div className="pt-4 border-t border-[#e5e2da] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-[#8c867c] block">Mulai Infaq:</span>
                        <span className="text-base font-extrabold text-[#222426]">
                          {formattedPrice}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#8c867c] block">+ Suite Menginap:</span>
                        <span className="text-xs font-bold text-[#c38169]">
                          {formattedSuitePrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setExpandedProgramId(isExpanded ? null : program.id)}
                        className="flex-1 py-2 px-3 text-xs font-semibold text-[#635f59] bg-[#f4f4f4] hover:bg-[#eae8e1] hover:text-[#222426] rounded-md transition-colors cursor-pointer text-center"
                      >
                        {isExpanded ? 'Tutup Detail' : 'Silabus & Jadwal'}
                      </button>

                      <button
                        type="button"
                        onClick={() => onRegisterProgram(program)}
                        className="flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] rounded-md transition-colors shadow-xs cursor-pointer text-center flex items-center justify-center gap-1.5"
                      >
                        <span>{t.daurohRegisterBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Facilities & Learning Environment */}
      <section className="bg-[#f4f4f4] border-t border-b border-[#e5e2da] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c38169]">
              Fasilitas & Suasana Tholabul 'Ilmi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222426]">
              Dirancang untuk Kekhusyukan & Keheningan Maksimal
            </h2>
            <p className="text-sm text-[#635f59]">
              Setiap sudut kawasan Litaskunu Project didesain agar membebaskan peserta dari distorsi duniawi, memfasilitasi tadabbur ayat, dan mempererat ukhuwah para penuntut ilmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#e5e2da] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#da908f]/20 flex items-center justify-center text-[#da908f]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#222426]">
                Perpustakaan Khazanah & Meja Jati
              </h3>
              <p className="text-xs text-[#635f59] leading-relaxed">
                Koleksi kitab-kitab turats rujukan, mushaf bertahsin tajwid, dan meja baca kayu jati solid yang menghadap taman zen zaitun.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e5e2da] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#bfb695]/30 flex items-center justify-center text-[#586f6d]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#222426]">
                Majlis Kubah & Kolam Pantul
              </h3>
              <p className="text-xs text-[#635f59] leading-relaxed">
                Pelataran terbuka berlantai batu travertine dengan kolam air tenang yang memantulkan langit subuh, menyegarkan pikiran dan jiwa.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#e5e2da] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#c38169]/20 flex items-center justify-center text-[#c38169]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#222426]">
                Kamar Paviliun Sakinah
              </h3>
              <p className="text-xs text-[#635f59] leading-relaxed">
                Bagi peserta yang memilih paket menginap, nikmati paviliun istirahat berkualitas bintang lima dengan linen organik dan teras privat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Accommodations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="max-w-xl mx-auto space-y-3">
          <h3 className="text-2xl font-bold text-[#222426]">
            Ingin Menginap Tanpa Mengikuti Jadwal Dauroh?
          </h3>
          <p className="text-sm text-[#635f59]">
            Anda dan keluarga dapat memesan kamar atau paviliun untuk liburan hening, tadabbur mandiri, atau istirahat pemulihan batin kapan pun.
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={onNavigateToBooking}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#222426] hover:bg-[#c38169] rounded-md transition-colors shadow-sm cursor-pointer"
          >
            Lihat Katalog Penginapan & Suite →
          </button>
        </div>
      </section>
    </div>
  );
};
