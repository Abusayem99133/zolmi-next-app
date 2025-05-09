import { PRO_PLAN_PRICE, START_PLAN_PRICE } from '@/utils/pricing';
import React from 'react';


interface PricingBreakdownProps {
  staffCount: number;
  planType: 'start' | 'pro';
  isAnnual: boolean;
}

export default function PricingBreakdown({ 
  staffCount, 
  planType,
  isAnnual 
}: PricingBreakdownProps) {
  const basePrice = planType === 'start' ? START_PLAN_PRICE : PRO_PLAN_PRICE;
  const extraStaffPrice = planType === 'start' ? 3 : 5; // $3 for Start plan, $5 for Pro plan
  const extraStaffCount = Math.max(0, staffCount - 1); // Subtract first staff member
  const monthlyTotal = Math.ceil(basePrice + (extraStaffCount * extraStaffPrice));
  const annualDiscount = isAnnual ? 0.2 : 0; // 20% discount
  const finalMonthlyPrice = Math.ceil(monthlyTotal * (1 - annualDiscount));

  const isDark = planType === 'pro';
  const borderColor = isDark ? 'border-white/10' : 'border-brand/10';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextColor = isDark ? 'text-white/60' : 'text-gray-500';
  const highlightColor = 'text-blue-500';

  return (
    <div className={`border-t border-b ${borderColor} py-2 my-3 space-y-1.5 text-sm`}>
      <div className="flex justify-between items-center">
        <span className={textColor}>First Staff</span>
        <span className={`font-medium ${textColor}`}>${basePrice}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className={textColor}>Extra Staff</span>
        <span className={mutedTextColor}>{extraStaffCount} × ${extraStaffPrice}</span>
      </div>

      <div className={`flex justify-between items-center pt-1.5 border-t ${borderColor}`}>
        <span className={textColor}>Monthly Subtotal</span>
        <span className={`font-medium ${textColor}`}>${monthlyTotal}</span>
      </div>

      {isAnnual && (
        <div className="flex justify-between items-center">
          <span className={highlightColor}>Annual Discount</span>
          <span className={highlightColor}>-20%</span>
        </div>
      )}

      <div className={`flex justify-between items-center pt-1.5 border-t ${borderColor} font-semibold`}>
        <span className={textColor}>{isAnnual ? 'Annual Price' : 'Monthly Price'}</span>
        <span className={textColor}>${finalMonthlyPrice}/month</span>
      </div>
    </div>
  );
}