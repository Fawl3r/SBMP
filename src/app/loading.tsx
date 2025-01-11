'use client';

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">Loading SolBeaver Market...</div>
      </div>
    </div>
  );
} 