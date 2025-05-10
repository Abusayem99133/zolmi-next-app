import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableFAQProps {
  question: string;
  answer: string;
}

export default function ExpandableFAQ({ question, answer }: ExpandableFAQProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`
          overflow-hidden transition-all duration-200 ease-in-out
          ${isExpanded ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}
        `}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}