import React from 'react';
import type { PricingTier } from '../../data/pricing';
import PriceDisplay from './PricingDisplay';
import Container from '@/layout/Container';

interface PricingStickyHeaderProps {
  pricing: Array<PricingTier & {
    staffCount: number;
    monthlyTotal: number | null;
    billedAnnually: boolean;
  }>;
  isVisible: boolean;
}

export default function PricingStickyHeader({ pricing, isVisible }: PricingStickyHeaderProps) {
  return (
    <div 
      className={`
        hidden md:block fixed top-0 left-0 right-0 z-40
        bg-white/95 backdrop-blur-sm shadow-sm
        transform transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
      aria-hidden={!isVisible}
    >
      <Container className="py-3">
        <div className="grid grid-cols-3 gap-6">
          {pricing.map((tier) => (
            <button 
              key={tier.id}
              className={`
                flex items-center justify-between px-4 py-2
                rounded-xl transition-colors duration-200
                ${tier.featured 
                  ? 'bg-brand text-white' 
                  : 'bg-white text-gray-900'
                }
              `}
              onClick={() => {
                const element = document.getElementById(tier.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <h3 className={`text-lg font-semibold ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <PriceDisplay
                monthlyTotal={tier.monthlyTotal}
                isAnnual={tier.billedAnnually}
                featured={tier.featured}
                compact
              />
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}