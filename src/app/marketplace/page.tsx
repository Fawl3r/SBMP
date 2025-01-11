'use client';

import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'

// Mock data for marketplace items
const mockItems = [
  {
    id: 1,
    title: 'Cyber Beaver #001',
    price: '0.5 SOL',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Cyber+Beaver+001'
  },
  {
    id: 2,
    title: 'Cyber Beaver #002',
    price: '0.8 SOL',
    image: 'https://placehold.co/400x400/C0C0C0/000000?text=Cyber+Beaver+002'
  },
  {
    id: 3,
    title: 'Cyber Beaver #003',
    price: '1.2 SOL',
    image: 'https://placehold.co/400x400/CD7F32/000000?text=Cyber+Beaver+003'
  },
  {
    id: 4,
    title: 'Cyber Beaver #004',
    price: '0.7 SOL',
    image: 'https://placehold.co/400x400/8B4513/FFFFFF?text=Cyber+Beaver+004'
  }
]

// Mock data for stats
const mockStats = [
  { label: 'Total Volume', value: '1.2M SOL' },
  { label: 'Floor Price', value: '0.5 SOL' },
  { label: 'Listed', value: '1,234' },
  { label: 'Owners', value: '3,456' }
]

// Marketplace content component
function MarketplaceContent() {
  const [items, setItems] = useState([])
  const [stats, setStats] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        setItems(mockItems)
        setStats(mockStats)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className="container">
      <div className="marketplace-header">
        <h1 className="marketplace-title">SolBeaver Market</h1>
        <p className="marketplace-description">
          Discover and collect unique digital beavers on Solana
        </p>
      </div>

      <div className="stats-bar">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search items..."
          className="search-input"
        />
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Legendary</button>
          <button className="filter-button">Epic</button>
          <button className="filter-button">Rare</button>
          <button className="filter-button">Common</button>
        </div>
      </div>

      <div className="grid">
        {items.map((item) => (
          <div key={item.id} className="marketplace-card">
            <div className="marketplace-card-inner">
              <div className="card-image-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="card-image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
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

      {items.length === 0 && (
        <div className="empty-state">
          <h3 className="empty-state-title">No items found</h3>
          <p className="empty-state-message">Try adjusting your search or filters</p>
        </div>
      )}
    </main>
  )
}

// Main marketplace page component
export default function MarketplacePage() {
  return (
    <Suspense fallback={<Loading />}>
      <MarketplaceContent />
    </Suspense>
  )
} 