import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface StaffCounterProps {
  value: number;
  onChange: (value: number) => void;
}

export default function StaffCounter({ value, onChange }: StaffCounterProps) {
  const handleIncrement = () => {
    onChange(Math.min(value + 1, 15));
  };

  const handleDecrement = () => {
    onChange(Math.max(value - 1, 1));
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700">Staff Members:</span>
      
      <div className="flex items-center gap-2">
        {/* Decrease button */}
        <button
          onClick={handleDecrement}
          disabled={value <= 1}
          className={`
            p-2.5 rounded-lg border-2 border-gray-400
            transition-all duration-200
            ${value <= 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300' 
              : 'bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-600 active:scale-95'
            }
          `}
          aria-label="Decrease staff count"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        {/* Count display */}
        <div className="w-12 px-3 py-2 text-center border-2 border-gray-400 rounded-lg bg-white">
          <span className="text-sm font-medium text-gray-900">{value}</span>
        </div>
        
        {/* Increase button */}
        <button
          onClick={handleIncrement}
          disabled={value >= 15}
          className={`
            p-2.5 rounded-lg border-2 border-gray-400
            transition-all duration-200
            ${value >= 15
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300'
              : 'bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-600 active:scale-95'
            }
          `}
          aria-label="Increase staff count"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}