'use client';

import Image from 'next/image';

export default function MarketplaceLoading() {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-logo">
            <Image
              src="/solbeaver-logo.png"
              alt="SolBeaver Logo"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>
        <div className="loading-text">Loading SolBeaver Market...</div>
      </div>
    </div>
  );
} 