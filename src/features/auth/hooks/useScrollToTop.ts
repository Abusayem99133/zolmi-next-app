import { useCallback } from 'react';

export function useScrollToTop() {
  return useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
}