import React from 'react';

interface BillingToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <span className={`text-sm ${!value ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
        Monthly
      </span>
      
      <button
        onClick={() => onChange(!value)}
        className={`
          relative w-14 h-7 rounded-full transition-colors duration-200 ease-in-out
          ${value ? 'bg-brand' : 'bg-gray-200'}
        `}
        role="switch"
        aria-checked={value}
      >
        <span
          className={`
            absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm
            transform transition-transform duration-200 ease-in-out
            ${value ? 'translate-x-7' : 'translate-x-0'}
          `}
        />
      </button>
      
      <div className="flex items-center gap-2">
        <span className={`text-sm ${value ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
          Annual
        </span>
        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  );
}