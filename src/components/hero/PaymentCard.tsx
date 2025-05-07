import React from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

export default function PaymentCard() {
  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200/50">
      <div className="flex items-center gap-2 mb-3">
        <CreditCard className="w-4 h-4 text-purple-600" />
        <h3 className="text-sm font-medium text-gray-900">Payments</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Today's Revenue</span>
          <span className="text-sm font-medium text-gray-900">
            <DollarSign className="w-3 h-3 inline-block" />
            1,234
          </span>
        </div>
        
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Target: $1,500</span>
          <span>82%</span>
        </div>
      </div>
    </div>
  );
}