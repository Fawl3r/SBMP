import React from 'react';
import Navbar from './Navbar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default ClientLayout; 