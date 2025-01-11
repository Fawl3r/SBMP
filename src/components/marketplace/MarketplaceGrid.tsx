import React from 'react';
import AssetCard from './AssetCard';
import { MarketplaceItem } from '@/types/marketplace';

interface MarketplaceGridProps {
  items: MarketplaceItem[];
  onItemClick?: (item: MarketplaceItem) => void;
}

const MarketplaceGrid: React.FC<MarketplaceGridProps> = ({
  items,
  onItemClick,
}) => {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h3 className="empty-state-title">
          No items found
        </h3>
        <p className="empty-state-message">
          Try adjusting your search or filter to find what you're looking for
        </p>
      </div>
    );
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <AssetCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rarity={item.rarity}
          onClick={() => onItemClick?.(item)}
        />
      ))}
    </div>
  );
};

export default MarketplaceGrid; 