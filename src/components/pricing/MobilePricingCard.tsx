import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PricingBreakdown from './PricingBreakdown';
import type { PricingTier } from '../../data/pricing';
import PriceDisplay from './PricingDisplay';

interface MobilePricingCardProps {
  tier: PricingTier & {
    staffCount: number;
    monthlyTotal: number | null;
    billedAnnually: boolean;
  };
}

export default function MobilePricingCard({ tier }: MobilePricingCardProps) {
  const [isExpanded, setIsExpanded] = useState(tier.id === 'pro');
  const showContactSales = tier.monthlyTotal === null;
  const showPricingBreakdown = ['start', 'pro'].includes(tier.id);

  return (
    <div 
      className={`
        px-4 py-6 -mx-4 cursor-pointer border-2
        ${tier.featured 
          ? 'bg-brand text-white border-brand-light/30' 
          : 'bg-white text-gray-900 border-gray-200'
        }
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <button 
              className={`
                py-0.5 px-2 rounded-full text-[10px] font-medium
                transition-colors
                ${tier.featured
                  ? 'bg-white text-brand hover:bg-brand-light'
                  : 'bg-brand text-white hover:bg-brand-hover'
                }
              `}
              onClick={(e) => {
                e.stopPropagation();
                // Handle subscription action
              }}
            >
              {showContactSales ? "Contact" : "Get Started"}
            </button>
          </div>
          <p className={`text-sm mt-1 ${tier.featured ? 'text-brand-light' : 'text-gray-500'}`}>
            {tier.description}
          </p>
        </div>
        <div 
          className={`
            ml-3 p-1.5 rounded-lg transition-all duration-200
            ${tier.featured 
              ? 'hover:bg-white/10' 
              : 'hover:bg-gray-100'
            }
          `}
        >
          <ChevronDown className={`
            w-4 h-4 transition-transform duration-200
            ${isExpanded ? 'rotate-180' : ''}
          `} />
        </div>
      </div>

      {/* Price */}
      <div className="mt-4">
        <PriceDisplay
          monthlyTotal={tier.monthlyTotal}
          isAnnual={tier.billedAnnually}
          featured={tier.featured}
        />
      </div>

      {/* Expanded Content */}
      <div className={`
        overflow-hidden transition-all duration-200 ease-in-out
        ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
      `}>
        <div className="space-y-6">
          {/* Pricing Breakdown */}
          {showPricingBreakdown && (
            <PricingBreakdown
              staffCount={tier.staffCount}
              planType={tier.id as 'start' | 'pro'}
              isAnnual={tier.billedAnnually}
            />
          )}

          {/* Features */}
          <div className="space-y-3">
            {tier.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg 
                  className={`h-5 w-5 flex-shrink-0 ${tier.featured ? 'text-white' : 'text-brand'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className={`text-sm ${feature.included ? '' : 'text-gray-400 line-through'}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}