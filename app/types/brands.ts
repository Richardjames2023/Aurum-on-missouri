// types/brands.ts
export interface BrandItem {
  id: string;
  name: string;
  isCustomLogo?: boolean;
  logoType: 'vitas' | 'caferio' | 'Aurum' | 'sonder' | 'marriott' | 'lamall';
  href: string;
}

export interface BrandGroup {
  heading: string;
  brands: BrandItem[];
}
