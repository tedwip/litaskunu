import type { DaurohProgram } from '../types/dauroh.ts';

export const DAUROH_PROGRAMS: DaurohProgram[] = [
  {
    id: 'dauroh-01-quran-sakinah',
    code: 'D-01 QURAN',
    category: 'quran',
    title: {
      id: "Dauroh Tadabbur Al-Qur'an & Qira'at As-Sakinah",
      en: "Quranic Contemplation & As-Sakinah Recitation Retreat",
    },
    subtitle: {
      id: 'Menyelami ayat-ayat ketenteraman jiwa, tahsin tartil bersanad, dan tadabbur alam semesta di paviliun terbuka.',
      en: 'Exploring verses of serenity, certified tajweed recitation, and deep reflection amidst open-air architectural colonnades.',
    },
    instructor: {
      name: 'Dr. K.H. Salman Al-Farisi, Lc., M.A.',
      title: {
        id: 'Pakar Tafsir & Ahli Qiraat Asyrah',
        en: 'Quranic Exegesis & Ten Recitation Scholar',
      },
      bio: {
        id: 'Alumni Universitas Al-Azhar Kairo, pengasuh ma\'had tahfizh dan pembina retret spiritual Qur\'ani.',
        en: 'Al-Azhar University Cairo alumnus, founder of Quran institute and spiritual retreat counselor.',
      },
    },
    dates: {
      id: '24 - 26 Oktober 2026',
      en: 'October 24 - 26, 2026',
    },
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    location: {
      id: 'Majlis Kubah & Kolam Pantul Litaskunu',
      en: 'Litaskunu Dome Majlis & Reflecting Pool',
    },
    remainingSeats: 4,
    totalSeats: 25,
    price: {
      idr: 1750000,
      eur: 110,
    },
    suitePackagePrice: {
      idr: 3850000,
      eur: 240,
    },
    includesSuite: false,
    curriculum: {
      id: [
        "Tafsir tematik ayat-ayat Sakinah (QS. Ar-Rum: 21, Al-Fath: 4, At-Taubah: 26)",
        "Tahsin Makharijul Huruf & Shifatul Huruf dengan bimbingan sanad talaqqi",
        "Sesi tadabbur subuh di pelataran kolam pantul menghadap lembah",
        "Pemberian Ijazah Sanad Matan Al-Jazariyyah bagi peserta yang tuntas"
      ],
      en: [
        "Thematic tafsir of Sakinah tranquility verses (Ar-Rum: 21, Al-Fath: 4)",
        "Precision Tajweed and recitation under certified sanad guidance",
        "Dawn contemplation sessions along the reflecting pool facing valley orchards",
        "Certificate of completion & traditional sanad recognition for qualified attendees"
      ]
    },
    facilities: {
      id: [
        'Mushaf Al-Qur\'an cetakan Madinah eksklusif & buku modul tafsir',
        'Konsumsi makanan organik & kurma ajwah premium sepanjang program',
        'Akses penuh ke Majlis Kolam Pantul & Gazebo Perpustakaan',
        'Sertifikat kelulusan dauroh resmi berstempel Litaskunu Project'
      ],
      en: [
        'Exclusive Medina Quran print & tailored tafsir study syllabus',
        'Nutritious organic meals, herbal beverages & premium dates throughout',
        'Full access to the Reflecting Pool Majlis & Khazanah Library gazebo',
        'Official signed completion certificate from Litaskunu Project'
      ]
    },
    dailySchedule: [
      { time: '04:00 - 05:30', activity: { id: 'Qiyamul Lail & Shalat Subuh Berjamaah', en: 'Night Vigil Prayer & Dawn Congregation' } },
      { time: '06:00 - 07:30', activity: { id: 'Halaqah Tadabbur Pagi di Tepi Kolam Air', en: 'Morning Quranic Reflection by Reflecting Pool' } },
      { time: '08:00 - 09:00', activity: { id: 'Sarapan Sehat Bahan Alami & Istirahat Santai', en: 'Artisanal Organic Breakfast & Leisure' } },
      { time: '09:30 - 11:30', activity: { id: 'Sesi Intensif 1: Talaqqi & Bedah Makna Ayat', en: 'Intensive Session 1: Talaqqi & Linguistic Depth' } },
      { time: '12:00 - 14:00', activity: { id: 'Shalat Zhuhur, Makan Siang & Qailulah (Tidur Siang)', en: 'Noon Prayer, Lunch & Sunnah Qailulah Nap' } },
      { time: '15:30 - 17:30', activity: { id: 'Sesi Intensif 2: Aplikasi Sakinah dalam Keseharian', en: 'Intensive Session 2: Daily Tranquility Application' } },
      { time: '18:00 - 20:30', activity: { id: 'Maghrib, Makan Malam & Halaqah Muhasabah Malam', en: 'Sunset Prayer, Dinner & Evening Contemplation' } }
    ],
    image: '/src/assets/images/dauroh_majlis_hall_1792058358750.jpg',
    featured: true,
  },
  {
    id: 'dauroh-02-bahasa-arab-balaghah',
    code: 'D-02 ARABIC',
    category: 'arabic',
    title: {
      id: "Dauroh Bahasa Arab Intensif: Meraba Keindahan Al-Bayan",
      en: "Intensive Arabic & Quranic Eloquence Retreat",
    },
    subtitle: {
      id: "Pendekatan cepat & aplikatif memahami struktur nahwu, shorof, dan keajaiban sastra bahasa Al-Qur'an.",
      en: "Accelerated, immersive methodology for mastering grammar and literary brilliance of the Quran.",
    },
    instructor: {
      name: 'Al-Ustadz Dr. Ahmad Zaki, Lc., M.A.',
      title: {
        id: 'Doktor Linguistik Bahasa Arab & Pengajar Senior',
        en: 'PhD in Arabic Linguistics & Senior Academic',
      },
      bio: {
        id: 'Penulis puluhan modul bahasa Arab modern dengan pengalaman membimbing ribuan pembelajar dari nol hingga mutqin.',
        en: 'Author of acclaimed modern Arabic curricula with decades of coaching learners to fluency.',
      },
    },
    dates: {
      id: '7 - 12 November 2026',
      en: 'November 7 - 12, 2026',
    },
    duration: {
      id: '6 Hari 5 Malam',
      en: '6 Days 5 Nights',
    },
    location: {
      id: 'Perpustakaan Khazanah & Courtyard Zaitun',
      en: 'Khazanah Library & Olive Courtyard',
    },
    remainingSeats: 6,
    totalSeats: 20,
    price: {
      idr: 2900000,
      eur: 180,
    },
    suitePackagePrice: {
      idr: 6800000,
      eur: 420,
    },
    includesSuite: false,
    curriculum: {
      id: [
        "Metode Al-Muyassar: Memahami pola kalimat Arab dalam 48 jam",
        "Analisis I'rab interaktif ayat-ayat pilihan Juz Amma",
        "Praktik percakapan bahasa Arab fushah tematik di alam terbuka",
        "Membedah rahasia balaghah (I'jaz Lughawi) dalam Al-Qur'an"
      ],
      en: [
        "The Facilitated Method: Grasping sentence architectures in 48 hours",
        "Interactive grammatical parsing of Juz Amma selections",
        "Spoken conversational Arabic sessions in courtyard gardens",
        "Unlocking rhetorical secrets (Balaghah) of divine speech"
      ]
    },
    facilities: {
      id: [
        'Workbook ensiklopedis tata bahasa Arab Litaskunu',
        'Papan tulis portabel jati & peralatan tulis ramah lingkungan',
        'Akomodasi kamar bersama atau suite opsional',
        'Bimbingan langsung privat 1-on-1 setiap petang'
      ],
      en: [
        'Litaskunu encyclopedic Arabic grammar workbook',
        'Sustainable cedar stationery & personal study lecterns',
        'Shared or private suite accommodation options',
        'One-on-one personal tutorial feedback every evening'
      ]
    },
    dailySchedule: [
      { time: '05:00 - 06:30', activity: { id: 'Subuh & Dzikir Pagi Berjamaah', en: 'Dawn Prayer & Morning Remembrance' } },
      { time: '07:30 - 09:00', activity: { id: 'Sarapan & Sesi Mufradat Alam', en: 'Breakfast & Botanical Vocabulary Walk' } },
      { time: '09:30 - 12:00', activity: { id: 'Kelas Teori & Kaidah Nahwu Aplikatif', en: 'Applied Syntax Lecture & Core Drills' } },
      { time: '14:00 - 16:30', activity: { id: 'Bedah Kitab & Latihan I\'rab Interaktif', en: 'Text Analysis & Live Parsing Clinic' } },
      { time: '19:30 - 21:00', activity: { id: 'Mudzakarah Santai di Teras Kayu Jati', en: 'Evening Peer Study on Teak Terrace' } }
    ],
    image: '/src/assets/images/hotel_lounge_courtyard_1792044088133.jpg',
    featured: true,
  },
  {
    id: 'dauroh-03-tazkiyatun-nufus',
    code: 'D-03 TAZKIYAH',
    category: 'tazkiyah',
    title: {
      id: 'Dauroh Tazkiyatun Nufus: Menyucikan Jiwa di Balik Heningnya Alam',
      en: 'Tazkiyatun Nufus: Spiritual Purification & Inner Stillness',
    },
    subtitle: {
      id: 'Detoksifikasi hati, riyadhah batin, dan adab ma\'rifatullah di tengah desau angin lembah nan teduh.',
      en: 'Heart detoxification, contemplative disciplines, and divine intimacy within whispering valley groves.',
    },
    instructor: {
      name: 'K.H. Muhammad Ridwan, M.Ag.',
      title: {
        id: 'Ulama Pengasuh Pesantren Qalbun Salim',
        en: 'Spiritual Mentor & Head of Qalbun Salim Institute',
      },
      bio: {
        id: 'Dikenal dengan nasehatnya yang sejuk, menyentuh relung batin, dan membimbing penuntut ilmu menuju ketulusan hakiki.',
        en: 'Renowned for gentle spiritual counsel, soul nourishment, and guiding seekers to profound sincerity.',
      },
    },
    dates: {
      id: '19 - 21 November 2026',
      en: 'November 19 - 21, 2026',
    },
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    location: {
      id: 'Lembah Khusyu\' & Pelataran Batu Alami',
      en: 'Lembah Khusyu & Natural Stone Terraces',
    },
    remainingSeats: 8,
    totalSeats: 30,
    price: {
      idr: 1650000,
      eur: 105,
    },
    suitePackagePrice: {
      idr: 3650000,
      eur: 230,
    },
    includesSuite: false,
    curriculum: {
      id: [
        "Kajian Kitab Mukhtashar Minhajul Qashidin karya Ibnu Qudamah",
        "Terapi batin terhadap riya, hasad, ujub, dan cinta duniawi (hubbud dunya)",
        "Praktik 'Uzlah terukur: Silent retreat 4 jam tanpa gawai di taman batu",
        "Malam Munajat: Istighfar akbar dan doa penyejuk kalbu"
      ],
      en: [
        "Study of Ibn Qudamah's spiritual classic Minhaj al-Qasidin",
        "Remedies for spiritual ailments: ostentation, envy, and conceit",
        "Guided mindful solitude: 4-hour device-free silent retreat in stone gardens",
        "Midnight supplication and repentance gathering beneath star-lit skies"
      ]
    },
    facilities: {
      id: [
        'Buku panduan dzikir Al-Ma\'tsurat kulit & jurnal muhasabah pribadi',
        'Teh rempah hangat alami racikan tabib Litaskunu',
        'Bilik tafakkur pribadi di area kebun zaitun',
        'Ruang tidur sejuk beraroma kayu cemara dan gaharu'
      ],
      en: [
        'Handcrafted leather prayer compendium & personal reflection journal',
        'Signature organic soothing herbal infusions throughout',
        'Private secluded meditation niches along olive groves',
        'Peaceful sleeping sanctuaries scented with natural cypress'
      ]
    },
    dailySchedule: [
      { time: '03:30 - 05:00', activity: { id: 'Tahajjud Berbisik & Istighfar Sahar', en: 'Quiet Tahajjud & Predawn Seeking Forgiveness' } },
      { time: '06:00 - 07:30', activity: { id: 'Tadabbur Asmaul Husna Sambil Berjalan', en: 'Walking Contemplation on Divine Names' } },
      { time: '09:00 - 11:30', activity: { id: 'Majlis Hati: Mengupas Penyakit Batin', en: 'Heart Clinic: Uprooting Inner Afflictions' } },
      { time: '14:00 - 16:00', activity: { id: 'Uzlah Mandiri: Tafakkur Tanpa Gadget', en: 'Guided Solitude: Mindful Device-Free Hours' } },
      { time: '20:00 - 21:30', activity: { id: 'Munajat Bersama di Bawah Kubah Langit', en: 'Shared Supplication Under Open Sky' } }
    ],
    image: '/src/assets/images/litaskunu_sanctuary_grounds_1792058359103.jpg',
    featured: true,
  },
  {
    id: 'dauroh-04-keluarga-sakinah',
    code: 'D-04 SAKINAH',
    category: 'sakinah',
    title: {
      id: 'Dauroh Keluarga Sakinah: Merajut Harmoni Menuju Jannah',
      en: 'Family Retreat: Cultivating Sakinah Towards Eternity',
    },
    subtitle: {
      id: 'Retret akhir pekan khusus pasutri dan keluarga untuk menyegarkan cinta berlandaskan QS. Ar-Rum: 21.',
      en: 'Weekend sanctuary retreat for couples and families to renew affection and prophetic communication.',
    },
    instructor: {
      name: 'Ust. Hanif Muslih & dr. Fatimah Az-Zahra',
      title: {
        id: 'Konselor Keluarga Islami & Dokter Pemerhati Kesehatan Jiwa',
        en: 'Islamic Family Counselors & Mental Health Advocates',
      },
      bio: {
        id: 'Pasangan pembina ribuan keluarga dengan pendekatan fiqih muasyarah bil ma\'ruf yang realistis dan menenteramkan.',
        en: 'Couples counselors combining classical Islamic ethics with empathetic modern relationship dialogue.',
      },
    },
    dates: {
      id: '4 - 6 Desember 2026',
      en: 'December 4 - 6, 2026',
    },
    duration: {
      id: '3 Hari 2 Malam (Khusus Pasutri/Keluarga)',
      en: '3 Days 2 Nights (Couples & Families)',
    },
    location: {
      id: 'Paviliun Taman & Ruang Keluarga Arsitektural',
      en: 'Garden Pavilion & Architectural Hearth Lounge',
    },
    remainingSeats: 5,
    totalSeats: 16,
    price: {
      idr: 4200000,
      eur: 260,
    },
    suitePackagePrice: {
      idr: 6500000,
      eur: 400,
    },
    includesSuite: true,
    curriculum: {
      id: [
        "Bedah filosofi 'Litaskunu Ilaiha' dalam dinamika rumah tangga kontemporer",
        "Seni mendengar & komunikasi empatik ala Rasulullah ﷺ",
        "Manajemen konflik finansial, peran suami-istri, dan pengasuhan anak",
        "Sesi candle-light dialogue privat pasutri di teras kamar"
      ],
      en: [
        "Deconstructing 'Litaskunu Ilaiha' in contemporary household dynamics",
        "The art of prophetic empathetic listening & kind speech",
        "Resolving financial conflicts and balanced parenting values",
        "Private evening candle-lit dialogue kit on private terrace"
      ]
    },
    facilities: {
      id: [
        'Menginap di Pavilion Suite pribadi dengan kasur king-size & teras taman',
        'Makan malam romantis privat hidangan sehat bahan organik lokal',
        'Paket hampers aromaterapi relaksasi & kartu panduan dialog pasutri',
        'Penyediaan ruang aktivitas edukatif anak (bila membawa balita)'
      ],
      en: [
        'Private Pavilion Suite lodging with king platform bed & private garden',
        'Intimate private organic dinners crafted with wholesome ingredients',
        'Couples wellness aromatherapy kit & guided conversation prompts',
        'Childcare & educational activities for children during parent sessions'
      ]
    },
    dailySchedule: [
      { time: '05:00 - 06:30', activity: { id: 'Shalat Berjamaah & Nasehat Pagi Pasutri', en: 'Congregation & Morning Spousal Reminders' } },
      { time: '08:00 - 09:30', activity: { id: 'Sarapan Sehat di Teras Alam', en: 'Garden Terrace Artisanal Breakfast' } },
      { time: '10:00 - 12:00', activity: { id: 'Workshop Saling Memahami Bahasa Kasih', en: 'Love Languages & Prophetic Compassion Workshop' } },
      { time: '15:30 - 17:30', activity: { id: 'Jalan Santai Tadabbur Berdua di Kebun Zaitun', en: 'Scenic Couples Nature Walk in Olive Groves' } },
      { time: '19:30 - 21:30', activity: { id: 'Makan Malam Hangat & Muhasabah Ikrar Cinta', en: 'Gourmet Dinner & Vow Renewal Contemplation' } }
    ],
    image: '/src/assets/images/suite_garden_pavilion_1792044086387.jpg',
    featured: true,
  },
  {
    id: 'dauroh-05-fiqih-muamalah',
    code: 'D-05 FIQIH',
    category: 'fiqih',
    title: {
      id: 'Dauroh Fiqih Muamalah: Keberkahan Bisnis & Investasi Syar\'i',
      en: 'Islamic Commerce & Ethical Investment Masterclass',
    },
    subtitle: {
      id: 'Pedoman praktis akad-akad perniagaan modern, etika permodalan, dan membersihkan rezeki dari keraguan.',
      en: 'Practical frameworks for modern Islamic contracts, ethical investments, and purifying wealth.',
    },
    instructor: {
      name: 'Dr. Irfan Syauqi, M.Ec.',
      title: {
        id: 'Dewan Pengawas Syariah & Peneliti Ekonomi Islam',
        en: 'Shariah Board Member & Islamic Finance Researcher',
      },
      bio: {
        id: 'Konsultan perbankan syariah dan pendamping ratusan pengusaha muslim dalam menyusun struktur bisnis halal.',
        en: 'Senior advisor to Islamic financial institutions helping entrepreneurs build compliant enterprises.',
      },
    },
    dates: {
      id: '18 - 20 Desember 2026',
      en: 'December 18 - 20, 2026',
    },
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    location: {
      id: 'Ruang Diskusi Paviliun Timur Litaskunu',
      en: 'Litaskunu East Pavilion Seminar Lounge',
    },
    remainingSeats: 10,
    totalSeats: 35,
    price: {
      idr: 2200000,
      eur: 135,
    },
    suitePackagePrice: {
      idr: 4400000,
      eur: 275,
    },
    includesSuite: false,
    curriculum: {
      id: [
        "Fondasi Riba, Gharar, Maysir dalam instrumen finansial kontemporer",
        "Bedah akad Musyarakah, Mudharabah, Ijarah, dan Murabahah dalam startup & UKM",
        "Kajian mata uang digital, saham, sukuk, dan kripto menurut fatwa ulama dunia",
        "Klinik bisnis: Konsultasi langsung legalitas akad usaha peserta"
      ],
      en: [
        "Core prohibitions: Riba, Gharar, and Maysir in modern fintech",
        "Partnership frameworks: Musharakah, Mudharabah & Ijarah in business",
        "Digital currencies, equities, sukuk & tokens through global fatwas",
        "Live Business Clinic: Direct contract review for participant ventures"
      ]
    },
    facilities: {
      id: [
        'Buku kompendium Fatwa DSN-MUI & Standar AAOIFI ringkas',
        'Akses rekaman audio kajian berkualitas tinggi',
        'Networking dinner bersama pengusaha muslim terkemuka',
        'Sertifikat kompetensi dasar muamalah'
      ],
      en: [
        'AAOIFI & Islamic Financial Standards summary handbook',
        'High-fidelity digital audio recordings of all sessions',
        'Curated networking dinner with ethical entrepreneurs',
        'Accredited foundational certificate in Islamic commerce'
      ]
    },
    dailySchedule: [
      { time: '05:00 - 06:30', activity: { id: 'Subuh & Dzikir Pembuka Pintu Rezeki', en: 'Dawn Prayer & Sustenance Remembrance' } },
      { time: '09:00 - 12:00', activity: { id: 'Sesi Kaidah Akad & Studi Kasus Finansial', en: 'Core Contract Theory & Real-World Cases' } },
      { time: '14:00 - 16:30', activity: { id: 'Klinik Bedah Akad Usaha Peserta', en: 'Live Contract Clinic & Peer Consultations' } },
      { time: '19:30 - 21:00', activity: { id: 'Simulasi Negosiasi Bisnis Berkeadaban', en: 'Ethical Negotiation Simulation' } }
    ],
    image: '/src/assets/images/hero_hotel_facade_1792044085387.jpg',
    featured: false,
  },
  {
    id: 'dauroh-06-arsitektur-ekologi-islam',
    code: 'D-06 ARSITEKTUR',
    category: 'architecture',
    title: {
      id: 'Dauroh Arsitektur Sakinah, Ekologi & Kelestarian Bumi',
      en: 'Islamic Architecture, Sacred Geometry & Eco-Sanctuary Design',
    },
    subtitle: {
      id: 'Memadukan nilai tauhid, estetika vernakular, material alami, dan efisiensi energi dalam rancang bangun.',
      en: 'Synthesizing monotheistic principles, biophilic vernacular craft, and zero-carbon building design.',
    },
    instructor: {
      name: "Ir. Fauzan Noe'man, IAI & Tim Desain Litaskunu",
      title: {
        id: 'Arsitek Utama & Peneliti Arsitektur Berkelanjutan',
        en: 'Principal Architect & Sustainable Design Specialist',
      },
      bio: {
        id: 'Arsitek di balik masterplan Litaskunu Project yang mendedikasikan karyanya untuk merajut kemaslahatan lingkungan dan kesyahduan ruang.',
        en: 'The visionary architect behind Litaskunu Project dedicated to harmonious ecological sacred spaces.',
      },
    },
    dates: {
      id: '8 - 10 Januari 2027',
      en: 'January 8 - 10, 2027',
    },
    duration: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
    },
    location: {
      id: 'Studio Perancangan & Paviliun Batu Litaskunu',
      en: 'Litaskunu Design Studio & Stone Pavilion',
    },
    remainingSeats: 7,
    totalSeats: 22,
    price: {
      idr: 2400000,
      eur: 150,
    },
    suitePackagePrice: {
      idr: 4600000,
      eur: 290,
    },
    includesSuite: false,
    curriculum: {
      id: [
        "Filsafat ruang dalam peradaban Islam: Privasi, ketenangan, dan kesederhanaan",
        "Geometri sakral & ornamen arsitektural: Melodi bentuk tanpa figur",
        "Materialitas jujur: Batu kapur, kayu daur ulang, dan ventilasi pasif",
        "Tur arsitektur berpemandu menelusuri detail teknik Litaskunu Project"
      ],
      en: [
        "Philosophy of space in Islamic civilization: Privacy, stillness, elegance",
        "Sacred geometry & proportion: Rhythmic harmony without idolatry",
        "Honest materiality: Travertine, reclaimed timber, and passive microclimates",
        "Comprehensive guided masterplan walking tour of Litaskunu complex"
      ]
    },
    facilities: {
      id: [
        'Buku cetak Masterplan & Blueprint arsitektur Litaskunu Project edisi terbatas',
        'Peralatan sketsa arsitektur profesional & notebook kanvas',
        'Kamar paviliun batu travertine selama retret',
        'Sertifikat partisipasi workshop arsitektur hijau bernilai syiar'
      ],
      en: [
        'Limited edition Litaskunu architectural blueprint & drawings volume',
        'Professional architectural sketching kit & heavyweight canvas notebook',
        'Direct residence within limestone pavilion rooms',
        'Accredited Certificate of Ecological Islamic Architecture'
      ]
    },
    dailySchedule: [
      { time: '05:30 - 07:00', activity: { id: 'Tadabbur Cahaya & Orientasi Kiblat di Alam Terbuka', en: 'Natural Light & Orientation Walking Study' } },
      { time: '09:00 - 12:00', activity: { id: 'Kuliah Desain & Analisis Struktur Lengkung', en: 'Design Masterclass & Arch Masonry Mechanics' } },
      { time: '14:00 - 16:30', activity: { id: 'Tur Teknis: Pengelolaan Air Mandiri & Tenaga Surya', en: 'Technical Tour: Closed-Loop Water & Solar Grid' } },
      { time: '19:30 - 21:00', activity: { id: 'Studio Sketsa & Diskusi Filosofi Desain Malam', en: 'Evening Design Studio & Philosophy Colloquium' } }
    ],
    image: '/src/assets/images/suite_travertine_bath_1792044086845.jpg',
    featured: false,
  },
];
