import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/collection', label: 'Collection' },
    { href: '/create', label: 'Create' },
  ];

  return (
    <div className="navbar-links">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`navbar-link ${pathname === href ? 'active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation; 