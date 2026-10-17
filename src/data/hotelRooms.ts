import { HotelRoom, RoomAddon } from '../types/hotel.ts';
import { Language } from '../translations/index.ts';

export const RAW_HOTEL_ROOMS = [
  {
    id: 'suite-01-garden-pavilion',
    code: '01 PAV',
    name: {
      id: 'Paviliun Taman Sanctuary',
      en: 'Garden Pavilion Suite'
    },
    collection: {
      id: 'Koleksi Paviliun',
      en: 'Pavilion Collection'
    },
    category: 'pavilion' as const,
    headline: {
      id: 'Perpaduan ruang dalam dan luar ruangan yang tenang, dibingkai pepohonan zaitun liar dan teras batu kapur.',
      en: 'Seamless indoor-outdoor living framed by wild olive groves and limestone stone patios.'
    },
    description: {
      id: 'Dirancang sebagai suaka ketenangan tempat arsitektur menyatu dengan lanskap alam. Menampilkan tempat tidur platform kayu ek Eropa buatan tangan, linen Belgia organik, dan pintu geser kaca berbingkai kayu yang membuka ke teras batu privat di tengah taman lavender aromatik.',
      en: 'Designed as a tranquil sanctuary where architecture meets landscape. Features custom European oak platform beds, Belgian linen textiles, and floor-to-ceiling timber sliding apertures leading onto a secluded stone veranda surrounded by aromatic lavender and rosemary gardens.'
    },
    pricePerNight: 460,
    squareMeters: 62,
    maxGuests: 2,
    bedType: {
      id: 'Ranjang Super King Kayu Ek Solid',
      en: 'Super King-Size Oak Platform Bed'
    },
    view: {
      id: 'Kebun Zaitun & Lembah Hijau',
      en: 'Olive Groves & Valley View'
    },
    floor: {
      id: 'Lantai Dasar (Akses Taman)',
      en: 'Ground Terrace'
    },
    primaryImage: '/src/assets/images/suite_garden_pavilion_1792044086387.jpg',
    galleryImages: [
      '/src/assets/images/suite_garden_pavilion_1792044086387.jpg',
      '/src/assets/images/hotel_lounge_courtyard_1792044088133.jpg',
      '/src/assets/images/hero_hotel_facade_1792044085387.jpg'
    ],
    features: {
      id: [
        'Teras batu kapur pribadi 28m² dengan daybed santai',
        'Pertukangan kayu ek solid bersertifikasi ramah lingkungan',
        'Insulasi akustik khusus & kaca tiga lapis kedap suara',
        'Stasiun teh herbal & kopi espresso keramik artisanal'
      ],
      en: [
        'Private 28m² limestone patio with daybed',
        'Hand-crafted solid oak millwork',
        'Custom acoustic insulation & triple glazing',
        'Artisanal ceramic tea & espresso station'
      ]
    },
    amenities: {
      id: [
        'Teras Pribadi',
        'Shower Hujan Walk-in',
        'Ranjang Kayu Ek Kustom',
        'Wi-Fi Kecepatan Tinggi',
        'Perlengkapan Mandi Botani Alami',
        'Pemutar Piringan Hitam Vinyl',
        'Lemari Pendingin Minuman Kurasi'
      ],
      en: [
        'Private Terrace',
        'Walk-in Rain Shower',
        'Custom Oak Platform Bed',
        'High-Speed Wi-Fi',
        'Bespoke Botanical Toiletries',
        'Vinyl Sound System',
        'Wine & Botanical Fridge'
      ]
    },
    sustainability: {
      materialCert: {
        id: 'Kayu Ek Tersertifikasi PEFC & Batu Kapur Regional',
        en: 'PEFC Certified Oak & Local Limestone'
      },
      energyRating: {
        id: 'Standar A+ Efisiensi Termal Geotermal',
        en: 'A+ Geothermal Climate Control'
      },
      waterEfficiency: {
        id: '100% Daur Ulang Air Abu-abu untuk Lanskap Taman',
        en: '100% Greywater Garden Recycling'
      }
    },
    floorPlanDetails: {
      id: 'Tata ruang terbuka seluas 62m² dengan akses langsung ke kebun zaitun, ruang ganti tertutup, dan kamar mandi batu kapur bernuansa spa.',
      en: 'Open-concept 62m² footprint with direct garden access, dedicated dressing vestibule, and limestone bathroom sanctuary.'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'suite-02-stone-sanctuary',
    code: '02 SAN',
    name: {
      id: 'Suaka Monolit Travertine',
      en: 'Monolith Travertine Sanctuary'
    },
    collection: {
      id: 'Koleksi Suaka Mineral',
      en: 'Sanctuary Collection'
    },
    category: 'sanctuary' as const,
    headline: {
      id: 'Dipahat dari batu travertine alami dan kuningan antik, menghadirkan ketenangan mineral yang hangat.',
      en: 'Sculpted from raw travertine and brushed brass, celebrating tactile mineral quietude.'
    },
    description: {
      id: 'Sebuah oasis arsitektur kontemplatif dengan fokus pada kenyamanan suhu alami dan ketenangan akustik. Berpusat pada bak mandi rendam monolit travertine utuh di bawah lengkungan jendela Romawi alami, dengan dinding plester kapur bertekstur yang menjaga kelembapan ruangan secara seimbang.',
      en: 'A contemplative architectural haven focused on thermal comfort and acoustic calm. Centered around a carved monolithic travertine soaking bath framed beneath a natural Roman arched window, with textured lime plaster walls that regulate indoor humidity naturally.'
    },
    pricePerNight: 580,
    squareMeters: 74,
    maxGuests: 2,
    bedType: {
      id: 'Ranjang Kustom Emperor King',
      en: 'Custom Emperor King Bed'
    },
    view: {
      id: 'Pelataran Sunyi & Hutan Pinus',
      en: 'Private Cloister & Forest Pines'
    },
    floor: {
      id: 'Lantai 1 Sayap Barat',
      en: 'Level 1 West Wing'
    },
    primaryImage: '/src/assets/images/suite_travertine_bath_1792044086845.jpg',
    galleryImages: [
      '/src/assets/images/suite_travertine_bath_1792044086845.jpg',
      '/src/assets/images/suite_garden_pavilion_1792044086387.jpg',
      '/src/assets/images/hotel_lounge_courtyard_1792044088133.jpg'
    ],
    features: {
      id: [
        'Bak mandi monolit travertin hasil pahatan satu blok batu utuh',
        'Pemanas lantai bersumber energi geotermal alami',
        'Perlengkapan kamar mandi kuningan berpatina khusus',
        'Tirai linen tebal dengan peredam cahaya dan suara maksimal'
      ],
      en: [
        'Hand-carved single-block travertine bathtub',
        'Underfloor geothermal radiant heating',
        'Brushed patinated brass bathroom fittings',
        'Linen drapery with full blackout acoustics'
      ]
    },
    amenities: {
      id: [
        'Bak Mandi Travertine',
        'Shower Hujan Ganda Walk-in',
        'Perapian Kayu Alami',
        'Balkon Hutan Pinus Pribadi',
        'Karpet Wol Alami',
        'Garam Mandi & Ramuan Botani',
        'Bar Kopi Spesialti'
      ],
      en: [
        'Travertine Soaking Tub',
        'Walk-in Double Rain Shower',
        'Fireplace Chimney',
        'Private Forest Balcony',
        'Natural Wool Rugs',
        'Artisan Bath Salts & Herbs',
        'Gourmet Coffee Bar'
      ]
    },
    sustainability: {
      materialCert: {
        id: 'Batu Travertine Tambang Lokal & Plester Kapur Alami',
        en: 'Quarried Regional Travertine & Lime Plaster'
      },
      energyRating: {
        id: 'Standar Rumah Pasif / Pra-pemanasan Surya',
        en: 'Passive House Standard / Solar Preheated'
      },
      waterEfficiency: {
        id: 'Kran Kuningan Aerasi Rendah Konsumsi Air',
        en: 'Aerated Low-Flow Brassware'
      }
    },
    floorPlanDetails: {
      id: 'Area ganda seluas 74m² dengan ruang spa kebugaran luas, ruang ganti walk-in, dan ceruk meditasi hening.',
      en: '74m² dual-zone suite with expansive spa wellness room, walk-in dressing wardrobe, and secluded meditation alcove.'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'suite-03-penthouse-terrace',
    code: '03 PEN',
    name: {
      id: 'Penthouse Horizon Pantai & Bukit Pasir',
      en: 'Coastal Dune Horizon Penthouse'
    },
    collection: {
      id: 'Koleksi Penthouse',
      en: 'Penthouse Collection'
    },
    category: 'penthouse' as const,
    headline: {
      id: 'Titik pandang ketinggian menghadap perbukitan pasir pantai dan cakrawala matahari terbenam samudra.',
      en: 'Elevated vantage points overlooking coastal sand dunes and golden Mediterranean horizons.'
    },
    description: {
      id: 'Berada di puncak bangunan hotel, Horizon Penthouse memiliki dinding kaca panorama melingkar, perapian batu alam kayu bakar, dan ruang santai bernuansa Jepang-Nordik dengan perabot kayu ek rendah serta lentera kertas Noguchi washi.',
      en: 'Floating at the crest of the hotel structure, the Horizon Penthouse features wrap-around panoramic glazing, a wood-burning architectural hearth, and a generous sunken lounge dressed in low-profile Japanese-Nordic oak furnishings and Noguchi washi light sculptures.'
    },
    pricePerNight: 890,
    squareMeters: 110,
    maxGuests: 4,
    bedType: {
      id: 'Master King + Ranjang Alcove Tamu Opsional',
      en: 'Master King + Optional Guest Alcove Bed'
    },
    view: {
      id: 'Panorama Samudra & Senja Pesisir',
      en: 'Panoramic Coast & Dune Sunset'
    },
    floor: {
      id: 'Lantai Penthouse (Lift Pribadi)',
      en: 'Penthouse Level (Private Lift)'
    },
    primaryImage: '/src/assets/images/suite_penthouse_terrace_1792044087598.jpg',
    galleryImages: [
      '/src/assets/images/suite_penthouse_terrace_1792044087598.jpg',
      '/src/assets/images/hero_hotel_facade_1792044085387.jpg',
      '/src/assets/images/suite_travertine_bath_1792044086845.jpg'
    ],
    features: {
      id: [
        'Dek berjemur gantung seluas 45m² menghadap laut',
        'Perapian batu alam kayu bakar terbuka',
        'Koleksi piringan hitam vinyl pilihan & audio audiophile',
        'Pantry kuliner privat dan bar kurasi sommelier'
      ],
      en: [
        '45m² wrap-around private cantilevered sun deck',
        'Open wood-burning slate fireplace',
        'Bespoke curated vinyl library & audiophile setup',
        'Private in-suite culinary pantry and sommelier bar'
      ]
    },
    amenities: {
      id: [
        'Pemandangan Laut / Bukit Pasir',
        'Teras Pribadi',
        'Perapian Kayu Alami',
        'Bak Mandi Travertine',
        'Akses Lift Pribadi Langsung',
        'Sistem Audio Audiophile',
        'Bar Pribadi & Sommelier'
      ],
      en: [
        'Panoramic Ocean View',
        'Private Terrace',
        'Fireplace',
        'Travertine Soaking Tub',
        'Direct Elevator Access',
        'Audiophile Sound System',
        'Pantry & Sommelier Bar'
      ]
    },
    sustainability: {
      materialCert: {
        id: 'Kayu Bersertifikasi FSC & Baja Daur Ulang',
        en: 'Sustainably Managed FSC Timber & Recycled Steel'
      },
      energyRating: {
        id: 'Operasional Net Zero Emisi (Panel Surya Atap)',
        en: 'Net Zero Operational Footprint (Roof PV array)'
      },
      waterEfficiency: {
        id: 'Penampungan Air Hujan & Filtrasi Tiga Tahap',
        en: 'Rainwater Capture & Triple Filtration'
      }
    },
    floorPlanDetails: {
      id: 'Hunian mewah 110m² mencakup suite utama, ruang santai sunken salon, meja makan untuk 6 orang, dan dek balkon keliling.',
      en: '110m² expansive residence including master suite, sunken lounge salon, dining table for 6, and wrap-around viewing deck.'
    },
    isAvailable: true,
    featured: true
  },
  {
    id: 'suite-04-courtyard-atelier',
    code: '04 ATEL',
    name: {
      id: 'Atelier Pelataran Zaitun',
      en: 'Cloistered Courtyard Atelier'
    },
    collection: {
      id: 'Koleksi Paviliun',
      en: 'Pavilion Collection'
    },
    category: 'pavilion' as const,
    headline: {
      id: 'Kamar teduh yang tenang, menghadap langsung ke pelataran pohon zaitun kuno dan gemercik air mancur batu.',
      en: 'Quiet sheltered quarters opening onto the ancient olive courtyard and quiet stone fountain.'
    },
    description: {
      id: 'Terinspirasi dari ketenangan monastik klasik, atelier ini menawarkan akses lantai dasar langsung ke pelataran tengah. Interiornya memadukan ubin terakota alami dengan karpet serat rami anyaman tangan dan ruang baca buku arsitektur.',
      en: 'Inspired by monastic tranquility, this atelier offers direct ground-level access to the tranquil central courtyard. The interiors pair raw terracotta floor tiles with hand-woven hemp carpets and an integrated reading niche lined with architectural monographs.'
    },
    pricePerNight: 390,
    squareMeters: 52,
    maxGuests: 2,
    bedType: {
      id: 'California King Kayu Ek Terang',
      en: 'California King Bed in Bleached Oak'
    },
    view: {
      id: 'Pelataran Batu Tengah & Pohon Zaitun',
      en: 'Central Stone Courtyard & Olive Tree'
    },
    floor: {
      id: 'Lantai Dasar Pelataran',
      en: 'Ground Courtyard'
    },
    primaryImage: '/src/assets/images/hotel_lounge_courtyard_1792044088133.jpg',
    galleryImages: [
      '/src/assets/images/hotel_lounge_courtyard_1792044088133.jpg',
      '/src/assets/images/suite_garden_pavilion_1792044086387.jpg',
      '/src/assets/images/hero_hotel_facade_1792044085387.jpg'
    ],
    features: {
      id: [
        'Teras berundak menghadap langsung ke pelataran zaitun bersejarah',
        'Ceruk perpustakaan kayu kenari dengan buku arsitektur pilihan',
        'Pendinginan massa termal alami melalui ketebalan dinding batu',
        'Jubah linen buatan tangan & aromaterapi botani tidur nyenyak'
      ],
      en: [
        'Stepped patio onto the historic olive courtyard',
        'Integrated walnut book alcove with curated library',
        'Thermal mass cooling via thick stone walls',
        'Artisanal linen robes & botanical sleep scent'
      ]
    },
    amenities: {
      id: [
        'Akses Langsung Pelataran',
        'Shower Hujan Walk-in',
        'Perpustakaan Buku Arsitektur',
        'Wi-Fi Kecepatan Tinggi',
        'Mesin Espresso Kopi Kustom',
        'Insulasi Kedap Suara Alami'
      ],
      en: [
        'Direct Courtyard Access',
        'Walk-in Rain Shower',
        'Curated Library',
        'High-Speed Wi-Fi',
        'Espresso Machine',
        'Acoustic Soundproofing'
      ]
    },
    sustainability: {
      materialCert: {
        id: 'Ubin Terakota Daur Ulang & Mortar Tanah Liat',
        en: 'Salvaged Heritage Terracotta & Clay Mortars'
      },
      energyRating: {
        id: 'Massa Termal Alami (Tanpa AC Berlebih)',
        en: 'Natural Thermal Mass (Zero Active AC Required)'
      },
      waterEfficiency: {
        id: 'Sirkulasi Tertutup Air Mancur Kolam',
        en: 'Fountain Closed-Loop Circulation'
      }
    },
    floorPlanDetails: {
      id: 'Atelier lantai dasar seluas 52m² dengan pintu masuk privat dari koridor batu dan kamar mandi ensuite yang lapang.',
      en: '52m² ground atelier with private entrance from the stone colonnade and spacious ensuite bathroom.'
    },
    isAvailable: true,
    featured: false
  },
  {
    id: 'suite-05-dune-residence-villa',
    code: '05 VIL',
    name: {
      id: 'Villa Suaka Bukit Pasir',
      en: 'The Dune Sanctuary Villa'
    },
    collection: {
      id: 'Koleksi Suaka Mineral',
      en: 'Sanctuary Collection'
    },
    category: 'villa' as const,
    headline: {
      id: 'Paviliun arsitektur berdiri sendiri dengan kolam renang rendam pribadi di antara pepohonan pinus pesisir.',
      en: 'Stand-alone architectural pavilion with private plunge pool set in the pine forest.'
    },
    description: {
      id: 'Puncak kemewahan privat di Floema. Hunian mandiri seluas 140m² tersembunyi di tengah pinus maritim dengan kolam renang air hangat batu kapur pribadi sepanjang 8 meter, dua kamar tidur master king, shower luar ruangan, dan layanan butler pribadi sesuai permintaan.',
      en: 'The pinnacle of private luxury at Floema. A freestanding 140m² residence hidden among maritime pines with a private heated limestone plunge pool, two master king suites, an outdoor rain shower, and private butler service upon request.'
    },
    pricePerNight: 1250,
    squareMeters: 140,
    maxGuests: 4,
    bedType: {
      id: 'Dua Kamar Tidur Utama Ranjang King',
      en: 'Two Master King Suites'
    },
    view: {
      id: 'Hutan Pinus Maritim & Bukit Pasir',
      en: 'Maritime Pines & Dune Wilderness'
    },
    floor: {
      id: 'Paviliun Villa Mandiri Terpisah',
      en: 'Detached Private Pavilion'
    },
    primaryImage: '/src/assets/images/hero_hotel_facade_1792044085387.jpg',
    galleryImages: [
      '/src/assets/images/hero_hotel_facade_1792044085387.jpg',
      '/src/assets/images/suite_penthouse_terrace_1792044087598.jpg',
      '/src/assets/images/suite_travertine_bath_1792044086845.jpg'
    ],
    features: {
      id: [
        'Kolam rendam air hangat batu kapur privat sepanjang 8 meter',
        'Dua kamar tidur utama dengan bak mandi rendam travertine',
        'Dek santai kayu cedar di tengah naungan pepohonan hutan',
        'Dapur luar ruangan dan meja perapian api unggun batu alam'
      ],
      en: [
        'Private 8-meter heated limestone plunge pool',
        'Dual master suites with freestanding soaking tubs',
        'Secluded forest sun deck with cedar loungers',
        'Bespoke outdoor kitchen and open-flame fire table'
      ]
    },
    amenities: {
      id: [
        'Kolam Renang Rendam Privat',
        'Bak Mandi Travertine',
        'Teras Pribadi',
        'Perapian Kayu Alami',
        'Pemandangan Laut / Bukit Pasir',
        'Dapur Chef & Bar Lengkap',
        'Layanan Butler Khusus'
      ],
      en: [
        'Private Plunge Pool',
        'Travertine Soaking Tub',
        'Private Terrace',
        'Fireplace',
        'Panoramic Ocean View',
        'Chef Kitchen & Bar',
        'Dedicated Butler Service'
      ]
    },
    sustainability: {
      materialCert: {
        id: '100% Gabus Alami Portugal, Kayu Pinus & Batu Kapur',
        en: '100% Sourced Portuguese Cork, Pine & Stone'
      },
      energyRating: {
        id: 'Bangunan Energi Positif (Menyalurkan Energi ke Jaringan)',
        en: 'Positive Energy Building (Returns power to grid)'
      },
      waterEfficiency: {
        id: 'Sanitasi Kolam Renang Air Asin Alami Tertutup',
        en: 'Closed-Loop Saline Pool Sanitization'
      }
    },
    floorPlanDetails: {
      id: 'Hunian mandiri seluas 140m² dengan 2 kamar suite, taman pelataran privat, dek luas, dan kolam renang.',
      en: '140m² detached residence with 2 suites, private garden courtyard, expansive deck, and private pool.'
    },
    isAvailable: true,
    featured: true
  }
];

export const RAW_CURATED_ADDONS = [
  {
    id: 'addon-organic-breakfast',
    name: {
      id: 'Keranjang Sarapan Organik Artisanal',
      en: 'Artisanal Organic Breakfast Basket'
    },
    description: {
      id: 'Roti sourdough hangat dari toko roti lokal, madu hutan murni, keju susu domba, selai jeruk pusaka, dan jus buah segar diantar ke pintu kamar Anda setiap pagi.',
      en: 'Fresh sourdough from local bakeries, raw forest honey, sheep’s milk cheese, heirloom citrus preserves, and freshly squeezed orchard juice delivered to your door each morning.'
    },
    pricePerNight: 35,
    category: 'culinary' as const
  },
  {
    id: 'addon-sunset-wine',
    name: {
      id: 'Pencicipan Anggur Senja & Pasangan Keju',
      en: 'Sommelier Sunset Tasting & Vineyard Pairing'
    },
    description: {
      id: 'Satu botol anggur biodinamik Colares pilihan dan papan keju Serra regional yang disiapkan di teras privat Anda saat senja tiba.',
      en: 'A curated bottle of biodynamic Colares wine and aged regional Serra cheese board prepared on your private terrace at twilight.'
    },
    flatPrice: 85,
    category: 'culinary' as const
  },
  {
    id: 'addon-thermal-spa',
    name: {
      id: 'Sauna Kayu Cedar Geotermal & Ritual Mandi Herbal',
      en: 'Geothermal Cedar Sauna & Herbal Bath Ritual'
    },
    description: {
      id: 'Sesi privat 90 menit di bathhouse hutan, termasuk uap distilasi kayu putih lokal dan teh seduh ramuan botani alami.',
      en: 'Private 90-minute evening session at the woodland bathhouse, including local eucalyptus distillation steam and botanical infusion teas.'
    },
    flatPrice: 120,
    category: 'wellness' as const
  },
  {
    id: 'addon-ev-transfer',
    name: {
      id: 'Antar-Jemput Bandara Mobil Listrik Ramah Lingkungan',
      en: 'Zero-Emission Chauffeur Airport Transfer'
    },
    description: {
      id: 'Layanan penjemputan atau pengantaran bandara privat dengan sedan listrik mewah lengkap dengan bantuan bagasi dan minuman penyegar.',
      en: 'Private airport pickup or drop-off in a luxury electric saloon with luggage assistance and mineral refreshments.'
    },
    flatPrice: 95,
    category: 'mobility' as const
  }
];

export function getLocalizedRooms(lang: Language = 'id'): HotelRoom[] {
  const isEn = lang === 'en';
  return RAW_HOTEL_ROOMS.map((r) => ({
    id: r.id,
    code: r.code,
    name: isEn ? r.name.en : r.name.id,
    collection: isEn ? r.collection.en : r.collection.id,
    category: r.category,
    headline: isEn ? r.headline.en : r.headline.id,
    description: isEn ? r.description.en : r.description.id,
    pricePerNight: r.pricePerNight,
    squareMeters: r.squareMeters,
    maxGuests: r.maxGuests,
    bedType: isEn ? r.bedType.en : r.bedType.id,
    view: isEn ? r.view.en : r.view.id,
    floor: isEn ? r.floor.en : r.floor.id,
    primaryImage: r.primaryImage,
    galleryImages: r.galleryImages,
    features: isEn ? r.features.en : r.features.id,
    amenities: isEn ? r.amenities.en : r.amenities.id,
    sustainability: {
      materialCert: isEn ? r.sustainability.materialCert.en : r.sustainability.materialCert.id,
      energyRating: isEn ? r.sustainability.energyRating.en : r.sustainability.energyRating.id,
      waterEfficiency: isEn ? r.sustainability.waterEfficiency.en : r.sustainability.waterEfficiency.id,
    },
    floorPlanDetails: isEn ? r.floorPlanDetails.en : r.floorPlanDetails.id,
    isAvailable: r.isAvailable,
    featured: r.featured
  }));
}

export function getLocalizedAddons(lang: Language = 'id'): RoomAddon[] {
  const isEn = lang === 'en';
  return RAW_CURATED_ADDONS.map((a) => ({
    id: a.id,
    name: isEn ? a.name.en : a.name.id,
    description: isEn ? a.description.en : a.description.id,
    pricePerNight: a.pricePerNight,
    flatPrice: a.flatPrice,
    category: a.category
  }));
}

export const HOTEL_ROOMS = getLocalizedRooms('id');
export const CURATED_ADDONS = getLocalizedAddons('id');
