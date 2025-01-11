import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-brand">
          SolBeaver
        </Link>
        <Navigation />
      </div>
    </nav>
  );
};

export default Navbar; 