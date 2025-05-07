import { useState, useEffect, useRef } from 'react';
export function useRotatingText(words: readonly string[], interval: number = 2000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timers
    const clearTimers = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Set initial visibility
    setIsVisible(true);

    // Function to handle rotation
    const rotate = () => {
      setIsVisible(false);

      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % words.length);
        setIsVisible(true);
      }, 200);
    };

    // Start the rotation interval
    intervalRef.current = setInterval(rotate, interval);

    // Cleanup function
    return () => {
      clearTimers();
    };
  }, [interval, words.length]);

  return {
    text: words[currentIndex],
    isVisible
  };
}