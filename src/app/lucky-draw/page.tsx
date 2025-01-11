'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LuckyDraw() {
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 0.1; // SOL

  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount(prev => prev - 1);
    }
  };

  const handleIncrement = () => {
    setTicketCount(prev => prev + 1);
  };

  const totalPrice = ticketCount * ticketPrice;

  return (
    <div className="lucky-draw">
      <div className="container">
        <div className="lucky-draw-header">
          <h1 className="lucky-draw-title">Lucky Draw</h1>
          <p className="lucky-draw-description">
            Try your luck and win exclusive SolBeaver NFTs and other amazing prizes!
          </p>
        </div>

        <div className="prize-showcase">
          <div className="prize-card">
            <div className="prize-image-container">
              <div className="prize-label">GRAND PRIZE</div>
              <div className="prize-title">Legendary SolBeaver NFT</div>
            </div>
            <div className="prize-details">
              <div className="prize-info">
                <span className="info-label">Value</span>
                <span className="info-value">10 SOL</span>
              </div>
              <div className="prize-info">
                <span className="info-label">Rarity</span>
                <span className="info-value">Legendary</span>
              </div>
              <div className="prize-info">
                <span className="info-label">Total Winners</span>
                <span className="info-value">3</span>
              </div>
              <div className="prize-info">
                <span className="info-label">Draw Date</span>
                <span className="info-value">Dec 31</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ticket-section">
          <div className="ticket-info">
            <h2 className="section-title">Get Your Tickets</h2>
            <p className="ticket-price">1 Ticket = {ticketPrice} SOL</p>
          </div>
          
          <div className="ticket-controls">
            <div className="ticket-counter">
              <button 
                className="counter-btn" 
                onClick={handleDecrement}
                disabled={ticketCount <= 1}
              >
                -
              </button>
              <span className="ticket-count">{ticketCount}</span>
              <button 
                className="counter-btn" 
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            
            <div className="total-section">
              <span className="total-label">Total:</span>
              <span className="total-value">{totalPrice.toFixed(2)} SOL</span>
            </div>
            
            <button className="buy-tickets-btn">
              Buy Tickets
            </button>
          </div>
        </div>

        <div className="rules-section">
          <h2 className="section-title">How It Works</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-number">1</div>
              <h3 className="rule-title">Buy Tickets</h3>
              <p className="rule-description">
                Purchase tickets using SOL. The more tickets you buy, the higher your chances of winning!
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-number">2</div>
              <h3 className="rule-title">Wait for Draw</h3>
              <p className="rule-description">
                The lucky draw happens every month. Winners are selected randomly using Chainlink VRF.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-number">3</div>
              <h3 className="rule-title">Claim Prize</h3>
              <p className="rule-description">
                If you win, your prize will be automatically transferred to your wallet within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 