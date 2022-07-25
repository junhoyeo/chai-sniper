export declare module Boost {
  export interface Promotion {
    sequence: number;
    discountAmount: string;
    maxDiscountAmount: number;
    benefitType: string;
    boltPrice: number;
    status: string;
  }

  export interface Url {
    id: number;
    type: string;
    url: string;
  }

  export interface Content {
    id: number;
    type: string;
    status: string;
    visible: string;
    priority: number;
    urls: Url[];
  }

  export interface Brand {
    id: number;
    name: string;
    color: string;
    logoImageUrl: string;
    typoImageUrl: string;
    isFavorite: boolean;
    contents: Content[];
  }

  export interface Card {
    id: number;
    type: string;
    lifeType: string;
    title: string;
    subTitle: string;
    usableLocationDescription: string;
    tutorialType: string;
    description: string;
    status: 'enabled' | 'sold_out';
    countCap?: number;
    boltPrice: number;
    countCapPerUser?: any;
    quota: number;
    promotions: Promotion[];
    cumulativeBenefits: number;
    campaignId: number;
    grade: string;
    animationType: string;
    isLocked: boolean;
    buyableFrom: Date;
    buyableTo: Date;
    usableFrom: Date;
    usableTo: Date;
    visibleFrom: Date;
    visibleTo: Date;
    brandId: number;
    important: string;
    logoImageUrl: string;
    typoImageUrl: string;
    taglines: string[];
    color: string;
    landingUrl: string;
    fallbackUrl: string;
    iosAppId: string;
    androidPackage: string;
    brand: Brand;
    discountType: string;
    promotionType: string;
    discountAmount: string;
    maxDiscountAmount: number;
    priceMin: number;
    priceMax: number;
    benefitDescription: string;
    discountMin: string;
    discountMax: string;
    curationMethod: string;
    categoryNames: any[];
    categoryIds: any[];
    hasBoostUp: boolean;
    isPossibleBoostUp: boolean;
    isFavorite: boolean;
    mission?: any;
  }
}
