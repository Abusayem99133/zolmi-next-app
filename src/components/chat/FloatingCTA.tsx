'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';


export default function FloatingCTA() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px',
  });

  return (
    <>
      {/* Observer target at the SEO section */}
      <div ref={elementRef} className="absolute" style={{ top: 'calc(100vh - 100px)' }} />
      
      <div className={`
        fixed bottom-2 inset-x-4 z-50
        transition-all duration-300 transform md:hidden
        flex items-center gap-3
      `}>
        {/* CTA Button - Only visible after scrolling past hero */}
        <button className={`
          flex-1
          bg-coral hover:bg-coral-hover text-white 
          px-5 py-2.5 rounded-full font-medium text-sm
          shadow-lg transition-all duration-300
          border border-white/10 backdrop-blur-sm
          whitespace-nowrap
          ${isVisible ? 'translate-y-[200%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
        `}>
          Create Free Calendar
        </button>

        {/* Chat Button - Always visible */}
        <button className="
          bg-purple hover:bg-purple-hover text-white
          p-2.5 rounded-full shadow-lg transition-all duration-300
          border border-white/10 backdrop-blur-sm
          flex items-center justify-center flex-shrink-0
        ">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}