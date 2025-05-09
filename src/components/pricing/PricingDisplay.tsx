import { formatPrice } from '@/utils/pricing';
import React from 'react';

interface PriceDisplayProps {
  monthlyTotal: number | null;
  isAnnual: boolean;
  featured?: boolean;
  compact?: boolean;
}

export default function PriceDisplay({ 
  monthlyTotal, 
  isAnnual, 
  featured = false,
  compact = false 
}: PriceDisplayProps) {
  const showContactSales = monthlyTotal === null;
  const isFree = monthlyTotal === 0;
  const discountedPrice = monthlyTotal !== null ? monthlyTotal * (isAnnual ? 0.8 : 1) : null;
  const price = formatPrice(discountedPrice);
  const textColorClass = featured ? 'text-white' : 'text-gray-900';
  const subTextColorClass = featured ? 'text-brand-light' : 'text-gray-500';

  if (compact) {
    return (
      <div className="flex items-baseline gap-1">
        <span className={`font-semibold ${textColorClass}`}>{price}</span>
        {!showContactSales && !isFree && (
          <span className={`text-sm ${subTextColorClass}`}>/mo</span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      <div className="flex items-baseline gap-1">
        {!showContactSales && !isFree && monthlyTotal !== null && isAnnual && (
          <span className={`text-lg line-through ${subTextColorClass}`}>
            ${monthlyTotal}
          </span>
        )}
        <span className={`text-4xl font-bold ${textColorClass}`}>{price}</span>
        {!showContactSales && !isFree && (
          <span className={`text-lg ${subTextColorClass}`}>/month</span>
        )}
      </div>
      {isAnnual && !showContactSales && !isFree && (
        <p className={`text-sm ${subTextColorClass}`}>
          Billed annually
        </p>
      )}
    </div>
  );
}