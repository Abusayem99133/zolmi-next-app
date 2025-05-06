import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    isVisible: true,
    lastScrollY: 0,
  });

  useEffect(() => {
    let animationFrameId;
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 20;

      setScrollState({
        isScrolled,
        isVisible: true, // Can be adjusted for hiding/showing navbar
        lastScrollY: scrollY,
      });

      lastScrollY = scrollY;
    };

    const onScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateScrollState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return scrollState;
}
