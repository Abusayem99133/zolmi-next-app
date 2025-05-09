import { useMemo } from 'react';
import type { PricingTier } from '../data/pricing';



export function usePricingCalculator(
  basePricing: PricingTier[], 
  staffCount: number,
  isAnnual: boolean
) {
  return useMemo(() => {
    return basePricing.map(tier => {
      let monthlyTotal = 0;
      
      if (tier.id === 'basic') {
        monthlyTotal = 0;
      } else if (tier.id === 'start') {
        monthlyTotal = staffCount > MAX_STAFF_COUNT ? null : calculateTotalPrice(staffCount, 'start');
      } else if (tier.id === 'pro') {
        monthlyTotal = staffCount > MAX_STAFF_COUNT ? null : calculateTotalPrice(staffCount, 'pro');
      }

      const finalPrice = monthlyTotal !== null && isAnnual 
        ? calculateAnnualPrice(monthlyTotal) 
        : monthlyTotal;

      return {
        ...tier,
        price: finalPrice,
        monthlyTotal,
        staffCount,
        billedAnnually: isAnnual
      };
    });
  }, [basePricing, staffCount, isAnnual]);
}