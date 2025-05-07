

import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="yellowWhiteGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFD63"/>
            <stop offset="100%" stopColor="#FFFFFF"/>
          </linearGradient>
        </defs>
        
        <rect width="1200" height="600" fill="url(#yellowWhiteGradient)"/>
      </svg>
    </div>
  );
}