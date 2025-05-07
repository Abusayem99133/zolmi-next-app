import React from 'react';
import Image from 'next/image';
export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Desktop Logo - Hidden on tablet and mobile */}
      <div className="hidden lg:block">
        <Image
          src="/image-nav/The essential app, for business..jpg"
          alt="Zolmi"
          className="h-8.5 sm:h-10 w-51 sm:w-60 object-contain"
          loading="eager"
          fetchPriority="high"
          width="240"
          height="40"
        />
      </div>

      {/* Tablet Logo - Hidden on mobile and desktop */}
      <div className="hidden md:block lg:hidden">
        <Image
          src="/image-nav/zolmi-logo-blue.png"
          alt="Zolmi"
          className="h-7 w-auto object-contain"
          loading="eager"
          fetchPriority="high"
          width="180"
          height="30"
        />
      </div>

      {/* Mobile Logo - Hidden on tablet and desktop */}
      <div className="md:hidden">
        <Image
          src="/image-nav/zolmi-logo-blue.png"
          alt="Zolmi"
          className="h-8.5 w-auto object-contain"
          loading="eager"
          fetchPriority="high"
          width="240"
          height="40"
        />
      </div>
    </div>
  );
}