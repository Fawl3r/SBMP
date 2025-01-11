import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
  glow = true,
}) => {
  const classes = `card ${hover ? 'card-hover' : ''} ${glow ? 'card-glow' : ''} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      <div className="card-content">
        {children}
      </div>
      {hover && (
        <>
          <div className="shine" />
          <div className="glow" />
        </>
      )}
    </div>
  );
};

export default Card; 