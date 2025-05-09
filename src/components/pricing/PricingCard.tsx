import React from 'react';

import PricingBreakdown from './PricingBreakdown';
import PriceDisplay from './PricingDisplay';
import { PricingTier } from '@/data/pricing';

interface PricingCardProps {
  tier: PricingTier & {
    staffCount: number;
    monthlyTotal: number | null;
    billedAnnually: boolean;
  };
}

export default function PricingCard({ tier }: PricingCardProps) {
  const buttonText = tier.price === 0 ? 'Get Started' : tier.buttonText;
  const showPricingBreakdown = ['start', 'pro'].includes(tier.id);
  const showSMSPricing = ['start', 'pro'].includes(tier.id);
  
  return (
    <div className={`
      h-full flex flex-col
      rounded-2xl p-6 transition-all duration-200
      border-2 md:mt-[15px]
      ${tier.featured 
        ? 'bg-brand text-white border-brand-light/30 ring-1 ring-brand-light/20' 
        : 'bg-white text-gray-900 border-gray-200'
      }
    `}>
      {/* Header */}
      <div className="mb-2">
        <h3 className={`text-xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-gray-900'}`}>
          {tier.name}
        </h3>
        <p className={`text-sm ${tier.featured ? 'text-brand-light' : 'text-gray-500'}`}>
          {tier.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-2">
        <PriceDisplay
          monthlyTotal={tier.monthlyTotal}
          isAnnual={tier.billedAnnually}
          featured={tier.featured}
        />
      </div>

      {/* Pricing Breakdown */}
      {showPricingBreakdown && (
        <div className="mb-2">
          <PricingBreakdown
            staffCount={tier.staffCount}
            planType={tier.id as 'start' | 'pro'}
            isAnnual={tier.billedAnnually}
          />
        </div>
      )}

      {/* SMS Pricing */}
      {showSMSPricing && (
        <div className="mb-4 text-sm">
          <div className="flex justify-between items-center">
            <span className={tier.featured ? 'text-white' : ''}>SMS pricing from</span>
            <span className={`font-medium ${tier.featured ? 'text-white' : ''}`}>$0.02</span>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="flex-1 mb-4">
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg 
                className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.featured ? 'text-white' : 'text-brand'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={`text-sm ${feature.included ? (tier.featured ? 'text-white' : '') : 'text-gray-400 line-through'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* View Features Link */}
      <div className="mb-4 text-center">
        <a 
          href="#features" 
          className={`
            inline-flex items-center gap-1 text-sm font-medium
            ${tier.featured ? 'text-white hover:text-brand-light' : 'text-brand hover:text-brand-hover'}
          `}
        >
          View all features
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* CTA Button */}
      <button className={`
        w-full py-2.5 px-6 rounded-full font-medium text-sm
        transition-colors duration-200
        ${tier.featured
          ? 'bg-white text-brand hover:bg-brand-light'
          : 'bg-brand text-white hover:bg-brand-hover'
        }
      `}>
        {buttonText}
      </button>
    </div>
  );
}