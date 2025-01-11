export interface MarketplaceItem {
  id: string;
  title: string;
  price: string;
  image: string;
  rarity: 'legendary' | 'epic' | 'rare' | 'common';
}

export interface MarketplaceStats {
  total: number;
  legendary: number;
  epic: number;
  rare: number;
  common: number;
} 