import './styles.css';
import { Orbitron, Rajdhani } from 'next/font/google';
import Navbar from '../components/Navbar';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
});

export const metadata = {
  title: 'Beaver Market',
  description: 'Next-generation NFT marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
