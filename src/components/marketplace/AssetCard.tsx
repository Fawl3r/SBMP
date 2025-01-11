import React from 'react';
import Image from 'next/image';
import Card from '../shared/Card';

interface AssetCardProps {
  title: string;
  price: string;
  image: string;
  rarity: 'legendary' | 'epic' | 'rare' | 'common';
  onClick?: () => void;
}

const AssetCard: React.FC<AssetCardProps> = ({
  title,
  price,
  image,
  rarity,
  onClick,
}) => {
  const rarityGradients = {
    legendary: 'linear-gradient(to bottom, var(--accent-magenta), var(--accent-purple))',
    epic: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple))',
    rare: 'linear-gradient(to bottom, var(--accent-cyan), rgba(0, 245, 255, 0.6))',
    common: 'linear-gradient(to bottom, #9ca3af, #4b5563)',
  };

  return (
    <div className="marketplace-card" onClick={onClick}>
      <div className="corner-frame corner-frame-tl" />
      <div className="corner-frame corner-frame-tr" />
      <div className="corner-frame corner-frame-bl" />
      <div className="corner-frame corner-frame-br" />
      
      <div className="marketplace-card-inner">
        <div className="card-image-container">
          <Image
            src={image}
            alt={title}
            fill
            className="card-image"
          />
          <div 
            className="card-gradient-overlay"
            style={{ background: rarityGradients[rarity] }}
          />
        </div>
        
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-price">
            <span className="price-label">Price</span>
            <span className="price-value">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCard; 