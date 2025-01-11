import Image from 'next/image';

interface MarketplaceCardProps {
  title: string;
  price: string;
  imageUrl: string;
  backgroundColor: string;
  onClick?: () => void;
}

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  price,
  imageUrl,
  backgroundColor,
  onClick,
}) => {
  return (
    <div 
      className="marketplace-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="marketplace-card-inner">
        <div className="card-image-container" style={{ background: backgroundColor }}>
          <div className="card-title-overlay">{title}</div>
        </div>
        
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-price">
            <span className="price-label">Price</span>
            <span className="price-value">{price}</span>
          </div>
        </div>
      </div>

      {/* Animated Border Frame */}
      <div className="card-frame" />
      <div className="frame-corner top-left" />
      <div className="frame-corner top-right" />
      <div className="frame-corner bottom-left" />
      <div className="frame-corner bottom-right" />
    </div>
  );
};

export default MarketplaceCard; 