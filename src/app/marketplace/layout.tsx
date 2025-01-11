export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-dark to-dark-lighter">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5 pointer-events-none" />
      <div className="relative">
        {children}
      </div>
    </section>
  );
} 