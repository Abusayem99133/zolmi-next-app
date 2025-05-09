import React from 'react';
import type { FAQ } from '../../data/faq';

export default function FAQItem({ question, answer }: FAQ) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">
        {question}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {answer}
      </p>
    </div>
  );
}