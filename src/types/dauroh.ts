export type DaurohCategory = 'all' | 'quran' | 'arabic' | 'tazkiyah' | 'sakinah' | 'fiqih' | 'architecture';

export interface DaurohProgram {
  id: string;
  code: string;
  category: DaurohCategory;
  title: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  instructor: {
    name: string;
    title: {
      id: string;
      en: string;
    };
    bio: {
      id: string;
      en: string;
    };
  };
  dates: {
    id: string;
    en: string;
  };
  duration: {
    id: string;
    en: string;
  };
  location: {
    id: string;
    en: string;
  };
  remainingSeats: number;
  totalSeats: number;
  price: {
    idr: number;
    eur: number;
  };
  suitePackagePrice: {
    idr: number;
    eur: number;
  };
  includesSuite: boolean;
  curriculum: {
    id: string[];
    en: string[];
  };
  facilities: {
    id: string[];
    en: string[];
  };
  dailySchedule: {
    time: string;
    activity: {
      id: string;
      en: string;
    };
  }[];
  image: string;
  featured?: boolean;
}

export interface DaurohRegistration {
  registrationId: string;
  registrationCode: string;
  program: DaurohProgram;
  packageType: 'with_suite' | 'program_only';
  fullName: string;
  email: string;
  phone: string;
  city: string;
  specialRequests: string;
  totalPrice: number;
  createdAt: string;
}
