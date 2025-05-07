import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Desktop Logo - Hidden on tablet and mobile */}
      <div className="hidden lg:block">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczMRBe8v20iJSUOs88xWH9AIBRF4pmCksDzXTosPkLCzfSnHjAxWVi9o54ZRtMcUlzXKGmuVLr4m3d9T2w3YRbz8Ucp0j9mH8wrGqAg84f9qTJvHk8g=w2400"
          alt="Zolmi"
          className="h-8.5 sm:h-10 w-51 sm:w-60 object-contain"
          loading="eager"
          fetchpriority="high"
          width="240"
          height="40"
        />
      </div>

      {/* Tablet Logo - Hidden on mobile and desktop */}
      <div className="hidden md:block lg:hidden">
        <img
          src="https://zolmi.com/assets/img/com/zolmi-logo-blue.png"
          alt="Zolmi"
          className="h-7 w-auto object-contain"
          loading="eager"
          fetchpriority="high"
          width="180"
          height="30"
        />
      </div>

      {/* Mobile Logo - Hidden on tablet and desktop */}
      <div className="md:hidden">
        <img
          src="https://zolmi.com/assets/img/com/zolmi-logo-blue.png"
          alt="Zolmi"
          className="h-8.5 w-auto object-contain"
          loading="eager"
          fetchpriority="high"
          width="240"
          height="40"
        />
      </div>
    </div>
  );
}