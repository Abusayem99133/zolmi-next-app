import { useState, useEffect } from 'react';

interface ScrollState {
  isScrolled: boolean;
  isVisible: boolean;
  lastScrollY: number;
}

export function useScrollPosition() {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    isVisible: true,
    lastScrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let animationFrameId: number;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 20;

      setScrollState(prev => ({
        isScrolled,
        isVisible: true,
        lastScrollY: scrollY,
      }));

      lastScrollY = scrollY;
    };

    const onScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return scrollState;
}