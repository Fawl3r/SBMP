'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link href="/" className="navbar-brand">
          <div className="brand-container">
            <Image
              src="/android-chrome-192x192.png"
              alt="SolBeaver Logo"
              width={32}
              height={32}
              className="brand-logo"
            />
            <span className="brand-text">SolBeaver</span>
          </div>
        </Link>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links-wrapper">
            <Link href="/marketplace" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Marketplace
            </Link>
            <Link href="/lucky-draw" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Lucky Draw
            </Link>
            <Link href="/lucky-spin" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Lucky Spin
            </Link>
          </div>
          <button className="connect-wallet-btn">
            Connect Wallet
          </button>
        </div>

        {isMenuOpen && (
          <div 
            className="menu-backdrop" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar; 