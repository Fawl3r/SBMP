import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h2 className="loading-title gradient-text">
          Loading SolBeaver Market
        </h2>
        <div className="loading-bar">
          <div className="loading-progress" />
        </div>
        <div className="loading-text">
          Connecting to Solana Network
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 