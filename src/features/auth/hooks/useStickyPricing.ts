import { useState, useEffect, RefObject } from 'react';

interface UseStickyPricingProps {
  headerRef: RefObject<HTMLElement>;
  ctaRef: RefObject<HTMLElement>;
}

export function useStickyPricing({ headerRef, ctaRef }: UseStickyPricingProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!headerRef.current || !ctaRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isHeader = entry.target === headerRef.current;

          if (isHeader) {
            setIsSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
          }

          // Hide sticky header when CTA is about to come into view
          if (entry.target === ctaRef.current && entry.boundingClientRect.top < window.innerHeight) {
            setIsSticky(false);
          }
        });
      }, 
      { 
        threshold: 0,
        rootMargin: '-80px 0px -100px 0px' // Account for navbar height and bottom margin
      }
    );

    observer.observe(headerRef.current);
    observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, [headerRef, ctaRef]);

  return isSticky;
}