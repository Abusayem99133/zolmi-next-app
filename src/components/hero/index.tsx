import { useEffect, useState } from 'react';

import TrustBadges from '@/components/Hero/TrustBadges';
import { useRotatingText } from '@/hooks/useRotatingText';

import { CTAButtons } from '../chat/CTAButtons';
import { businessTypes } from '@/data/businessTypes';

export default function Hero() {
  const { text: businessType, isVisible } = useRotatingText(businessTypes, 2000);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=630&q=80";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative pt-24 sm:pt-32 overflow-hidden">
      {/* Background with gradient and curve */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7ff] via-[#f0f4ff] to-[#e8edff]">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-brand/0" />
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
          }}
        />
      </div>
      
      {/* Hero Image - Optimized for LCP */}
      {imageLoaded && (
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=630&q=80"
          alt="Salon software"
          width={1200}
          height={630}
          className="hidden"
        />
      )}
      
      <div className="relative px-4 sm:px-6 lg:px-8 xl:px-0 w-[80%] max-w-[1260px] mx-auto pt-5 sm:pt-8 pb-12 sm:pb-16">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="space-y-4 sm:space-y-6">
            <span 
              className={`block text-[1.008545rem] sm:text-[1.3125rem] md:text-[1.6875rem] lg:text-[2.0625rem] leading-[1.1] font-thin transition-opacity duration-200 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {businessType}
            </span>
            <span className="block text-[1.40625rem] sm:text-[2.1875rem] md:text-[2.8125rem] lg:text-[3.4375rem] leading-[1.3] sm:leading-[1.1] font-semibold">
              Free up <span className="relative inline-block font-bold">
                your
                <div className="absolute inset-x-0 -bottom-1 sm:bottom-0 h-3">
                  <svg className="w-full h-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path
                      d="M3,3 Q50,2 100,3 T197,3"
                      className="stroke-[#39FF14] stroke-[3] fill-none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        filter: 'drop-shadow(0 0 2px rgba(57, 255, 20, 0.3))',
                        opacity: 0.9
                      }}
                    />
                  </svg>
                </div>
              </span> time <span className="relative inline-block font-bold">
                every day
                <div className="absolute inset-x-0 -bottom-1 sm:bottom-0 h-3">
                  <svg className="w-full h-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path
                      d="M3,3 Q50,2 100,3 T197,3"
                      className="stroke-[#39FF14] stroke-[3] fill-none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        filter: 'drop-shadow(0 0 2px rgba(57, 255, 20, 0.3))',
                        opacity: 0.9
                      }}
                    />
                  </svg>
                </div>
              </span>
            </span>
            <span className="block text-base sm:text-lg text-brand mt-2 mx-auto w-[75%] font-light">
              Join other leading hair salons in UAE who are optimising their business using Zolmi
            </span>
          </h2>
          <div className="mt-5 sm:mt-6">
            <CTAButtons />
          </div>
          <TrustBadges />
        </div>
      </div>
    </section>
  );
}
