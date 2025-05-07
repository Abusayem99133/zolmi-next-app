import React from 'react';
import { X } from 'lucide-react';

interface PlatformTooltipProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlatformTooltip({ isOpen, onClose }: PlatformTooltipProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[260px] sm:w-[280px]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative bg-black rounded-lg p-4 shadow-xl">
        {/* Close button - Only visible on mobile */}
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-lg md:hidden"
        >
          <X className="w-4 h-4 text-gray-900" />
        </button>

        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-black" />

        {/* Content */}
        <div className="relative space-y-3">
          <p className="text-white text-sm font-medium">
            Trusted by 500+ Leading Salons
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-gray-200 text-xs">98% Customer Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-gray-200 text-xs">Award-winning Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-gray-200 text-xs">24/7 Live Chat Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}