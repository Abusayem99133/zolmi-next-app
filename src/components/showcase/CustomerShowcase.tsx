'use client';

import React, { useState, useEffect } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Section from '@/layout/Section';
import SuccessCard from './SuccesssCard';
import { successStories } from '@/data/SuccessStories';

export default function CustomerShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See how leading UAE salons are transforming their business
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4">
        {successStories.map((story, index) => (
          <SuccessCard key={index} {...story} />
        ))}
      </div>

      {/* Mobile Swiper - Only render on client side */}
      <div className="lg:hidden -mx-4">
        {isMounted && (
          <Swiper
            spaceBetween={12}
            slidesPerView={1.2}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 16
              }
            }}
            className="pb-4"
          >
            {successStories.map((story, index) => (
              <SwiperSlide key={index} className="pl-4 first:pl-4">
                <div className="h-full">
                  <SuccessCard {...story} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Section>
  );
}