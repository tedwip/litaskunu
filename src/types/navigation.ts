export type AppRoute = '/' | '/dauroh' | '/penginapan' | '/tentang';

export interface NavItem {
  id: string;
  path: AppRoute;
  label: {
    id: string;
    en: string;
  };
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    path: '/',
    label: {
      id: 'Home',
      en: 'Home',
    },
  },
  {
    id: 'dauroh',
    path: '/dauroh',
    label: {
      id: 'Dauroh',
      en: 'Dauroh',
    },
  },
  {
    id: 'penginapan',
    path: '/penginapan',
    label: {
      id: 'Penginapan',
      en: 'Accommodations',
    },
  },
  {
    id: 'tentang',
    path: '/tentang',
    label: {
      id: 'Tentang',
      en: 'About',
    },
  },
];
