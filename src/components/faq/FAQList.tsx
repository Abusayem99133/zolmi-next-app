import React from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../../data/faq';

export default function FAQList() {
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      <div className="space-y-8">
        {leftColumn.map((item) => (
          <FAQItem key={item.id} {...item} />
        ))}
      </div>
      <div className="space-y-8">
        {rightColumn.map((item) => (
          <FAQItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}