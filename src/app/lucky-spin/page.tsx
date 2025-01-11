'use client';

import { useState, useEffect } from 'react';

const prizes = [
  { option: 'Rare NFT', value: '5 SOL' },
  { option: '100 Tokens', value: '100 BVR' },
  { option: 'Mystery Box', value: '?' },
  { option: 'Common NFT', value: '1 SOL' },
  { option: '50 Tokens', value: '50 BVR' },
  { option: 'Better Luck', value: '0' },
  { option: '25 Tokens', value: '25 BVR' },
  { option: 'Free Spin', value: 'FREE' }
];

export default function LuckySpin() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);
  const [spinPrice] = useState('0.5 SOL');

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomPrize = Math.floor(Math.random() * prizes.length);
    const extraSpins = 5; // Number of full rotations before stopping
    const segmentAngle = 360 / prizes.length;
    const targetRotation = rotation + (360 * extraSpins) + (randomPrize * segmentAngle);

    setRotation(targetRotation);
    
    setTimeout(() => {
      setSelectedPrize(randomPrize);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="lucky-spin">
      <div className="container">
        <div className="lucky-spin-header">
          <h1 className="lucky-spin-title">Lucky Spin</h1>
          <p className="lucky-spin-description">
            Spin the wheel for a chance to win amazing prizes! Each spin costs {spinPrice}.
          </p>
        </div>

        <div className="spin-showcase">
          <div className="spin-wheel-container">
            <div 
              className="spin-wheel"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
              }}
            >
              {prizes.map((prize, index) => {
                const angle = (360 / prizes.length) * index;
                return (
                  <div
                    key={index}
                    className="wheel-segment"
                    style={{
                      transform: `rotate(${angle}deg) skewY(-${360 / prizes.length / 2}deg)`,
                      background: index % 2 === 0 ? 
                        'linear-gradient(45deg, rgba(0, 245, 255, 0.2), rgba(15, 15, 30, 0.95))' : 
                        'linear-gradient(45deg, rgba(183, 33, 255, 0.2), rgba(15, 15, 30, 0.95))'
                    }}
                  >
                    <div 
                      className="segment-content"
                      style={{
                        transform: `skewY(${360 / prizes.length / 2}deg) rotate(90deg)`
                      }}
                    >
                      <div>{prize.option}</div>
                      <div>{prize.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="wheel-center" />
            <div className="wheel-pointer" />
          </div>

          <div className="spin-controls">
            <div className="spin-price">
              <span className="price-label">Spin Price</span>
              <span className="price-value">{spinPrice}</span>
            </div>

            <button 
              className="spin-button"
              onClick={spinWheel}
              disabled={isSpinning}
            >
              {isSpinning ? 'Spinning...' : 'Spin Now'}
            </button>

            {selectedPrize !== null && !isSpinning && (
              <div className="prize-result">
                <div className="result-title">Congratulations!</div>
                <div className="result-prize">
                  You won: {prizes[selectedPrize].option} ({prizes[selectedPrize].value})
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="rules-section">
          <h2 className="section-title">How It Works</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-number">1</div>
              <h3 className="rule-title">Connect Wallet</h3>
              <p className="rule-description">
                Connect your Solana wallet to participate in the Lucky Spin.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-number">2</div>
              <h3 className="rule-title">Pay to Spin</h3>
              <p className="rule-description">
                Each spin costs {spinPrice}. The payment will be deducted from your wallet.
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-number">3</div>
              <h3 className="rule-title">Win Prizes</h3>
              <p className="rule-description">
                Spin the wheel and win amazing prizes including NFTs, tokens, and mystery boxes!
              </p>
            </div>
            <div className="rule-card">
              <div className="rule-number">4</div>
              <h3 className="rule-title">Claim Rewards</h3>
              <p className="rule-description">
                Your prizes will be automatically transferred to your connected wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 