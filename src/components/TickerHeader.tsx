// src/components/TickerHeader.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Users, text: '25,000+ Active Users' },
  { icon: Globe, text: 'Available in 25+ Countries' },
  { icon: Award, text: '98% Customer Satisfaction' },
  { icon: Heart, text: '24/7 Live Support' }
];

export default function TickerHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-100
      transition-transform duration-300
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-10">
          <div className="flex items-center gap-1.5 pr-2 md:pr-4 border-r border-gray-200">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-brand text-black" />
            <span className="text-xs md:text-sm font-medium text-brand hover:text-brand-hover cursor-pointer whitespace-nowrap text-black">
              Why Zolmi?
            </span>
          </div>
          <div 
            className="flex-1 overflow-hidden ml-2 md:ml-4"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="animate-marquee flex items-center gap-8 md:gap-16 text-xs md:text-sm text-gray-600">
              {[...stats, ...stats, ...stats].map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap"
                >
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                  <span className="font-medium">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
