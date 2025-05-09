import React from 'react';
import BillingToggle from './BillingToggle';
import StaffCounter from './StaffCounter';

interface PricingHeaderProps {
  staffCount: number;
  isAnnual: boolean;
  onStaffCountChange: (count: number) => void;
  onBillingChange: (isAnnual: boolean) => void;
}

export default function PricingHeader({
  staffCount,
  isAnnual,
  onStaffCountChange,
  onBillingChange
}: PricingHeaderProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12 p-6">
        {/* Staff Counter */}
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <StaffCounter
            value={staffCount}
            onChange={onStaffCountChange}
          />
        </div>

        {/* Divider for mobile */}
        <div className="w-full h-px bg-gray-100 mb-6 md:hidden" />

        {/* Billing Toggle */}
        <div className="w-full md:w-auto">
          <BillingToggle
            value={isAnnual}
            onChange={onBillingChange}
          />
        </div>
      </div>
    </div>
  );
}