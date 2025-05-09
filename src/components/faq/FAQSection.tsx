'use client';

import React from 'react';
import FAQList from './FAQList';
import Container from '@/layout/Container';

export default function FAQSection() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
      <Container>
        <div className="text-center mb-16">
          <h2 
            id="faq-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Would You Like To Know More About{' '}
            <span className="relative">
              Salon Management Software?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-brand/20" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some answers to your most common questions
          </p>
        </div>

        <FAQList />
      </Container>
    </section>
  );
}