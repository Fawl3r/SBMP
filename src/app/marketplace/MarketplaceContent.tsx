'use client';

import { useState } from 'react';

const MARKETPLACE_ITEMS = [
  {
    id: '1',
    title: 'Golden Beaver',
    price: '1000 LOG',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Golden+Beaver',
    rarity: 'legendary',
  },
  {
    id: '2',
    title: 'Silver Beaver',
    price: '500 LOG',
    image: 'https://placehold.co/400x400/C0C0C0/000000?text=Silver+Beaver',
    rarity: 'epic',
  },
  {
    id: '3',
    title: 'Bronze Beaver',
    price: '250 LOG',
    image: 'https://placehold.co/400x400/CD7F32/000000?text=Bronze+Beaver',
    rarity: 'rare',
  },
  {
    id: '4',
    title: 'Wooden Beaver',
    price: '100 LOG',
    image: 'https://placehold.co/400x400/8B4513/FFFFFF?text=Wooden+Beaver',
    rarity: 'common',
  },
  {
    id: '5',
    title: 'Crystal Beaver',
    price: '750 LOG',
    image: 'https://placehold.co/400x400/00FFFF/000000?text=Crystal+Beaver',
    rarity: 'epic',
  },
  {
    id: '6',
    title: 'Shadow Beaver',
    price: '300 LOG',
    image: 'https://placehold.co/400x400/1A1A1A/FFFFFF?text=Shadow+Beaver',
    rarity: 'rare',
  },
  {
    id: '7',
    title: 'Rainbow Beaver',
    price: '1500 LOG',
    image: 'https://placehold.co/400x400/FF69B4/FFFFFF?text=Rainbow+Beaver',
    rarity: 'legendary',
  },
  {
    id: '8',
    title: 'Stone Beaver',
    price: '150 LOG',
    image: 'https://placehold.co/400x400/808080/FFFFFF?text=Stone+Beaver',
    rarity: 'common',
  },
] as const;

export default function MarketplaceContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MARKETPLACE_ITEMS.filter((item) => {
    if (activeFilter !== 'all' && item.rarity !== activeFilter) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="marketplace">
      <div className="container">
        {/* Hero Section */}
        <div className="marketplace-header">
          <h1 className="marketplace-title">
            SolBeaver Market
          </h1>
          <p className="marketplace-description">
            Discover and collect unique digital beavers on Solana
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {[
            { label: 'Items', value: MARKETPLACE_ITEMS.length },
            { label: 'Legendary', value: MARKETPLACE_ITEMS.filter(i => i.rarity === 'legendary').length },
            { label: 'Epic', value: MARKETPLACE_ITEMS.filter(i => i.rarity === 'epic').length },
            { label: 'Rare', value: MARKETPLACE_ITEMS.filter(i => i.rarity === 'rare').length },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <div className="filter-buttons">
            {['all', 'legendary', 'epic', 'rare', 'common'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="marketplace-card">
              <div className="marketplace-card-inner">
                <div className="card-frame">
                  <div className="frame-corner top-left" />
                  <div className="frame-corner top-right" />
                  <div className="frame-corner bottom-left" />
                  <div className="frame-corner bottom-right" />
                </div>
                <div className="card-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-details">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-price">
                    <span className="price-label">Price</span>
                    <span className="price-value">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="empty-state">
            <h3 className="empty-state-title">No items found</h3>
            <p className="empty-state-message">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
} 