'use client';

import Container from '@/layout/Container';
import React from 'react';

const trustedSalons = [
  {
    id: 'colourist',
    name: 'The Colourist',
    logo: '../../public/image/logos/the-colourist.svg'
  },
  {
    id: 'levelup',
    name: 'Level Up Barbers',
    logo: '/public/image/logos/level-up.svg'
  },
  {
    id: 'mkhair',
    name: 'MK Hair Design',
    logo: '/image/logos/mk-hair.svg'
  },
  {
    id: 'skills',
    name: 'Skills Barber Shop',
    logo: '/image/logos/skills.svg'
  }
];


export default function SocialProof() {
  return (
    <section className="bg-brand py-16" aria-labelledby="social-proof-heading">
      <Container>
        <div className="text-center">
          <h2 
            id="social-proof-heading" 
            className="text-base font-semibold text-brand-light tracking-wide uppercase mb-12"
          >
            These UAE Businesses Trust Zolmi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center">
            {trustedSalons.map(salon => (
              <div 
                key={salon.id} 
                className="w-full flex justify-center items-center h-16"
              >
                <img
                  src={salon.logo}
                  alt={`${salon.name} logo`}
                  className="h-full w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}