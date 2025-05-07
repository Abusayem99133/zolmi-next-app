import React from 'react';
import { Clock } from 'lucide-react';

const ZolmiNavHeader = () => {
  return (
    <div className="inline-flex items-center py-2 px-4 bg-white rounded-full border border-gray-100 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-5 h-5 bg-[#050f35] rounded">
          <Clock size={12} className="text-[#FFFD63]" />
        </div>
        <span className="text-[#050f35] font-semibold text-sm">zolmi</span>
      </div>
      
      {/* Divider */}
      <div className="mx-3 w-px h-7 bg-gray-200"></div>
      
      {/* Two-line Tagline */}
      <div className="text-[#050f35] text-[10px] font-medium leading-[1.2]">
        <div>making digital</div>
        <div>easy</div>
      </div>
    </div>
  );
};

export default ZolmiNavHeader;