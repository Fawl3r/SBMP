import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-brand">
          <div className="brand-container">
            <Image
              src="/solbeaver.png"
              alt="SolBeaver Logo"
              width={32}
              height={32}
              className="brand-logo"
            />
            <span className="brand-text">SolBeaver</span>
          </div>
        </Link>
        
        <div className="navbar-links">
          <Link href="/marketplace" className="nav-link">
            Marketplace
          </Link>
          <Link href="/lucky-draw" className="nav-link">
            Lucky Draw
          </Link>
          <Link href="/lucky-spin" className="nav-link">
            Lucky Spin
          </Link>
          <button className="connect-wallet-btn">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
} 