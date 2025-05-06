// /components/Logo.js
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Desktop Logo - Hidden on tablet and mobile */}
      <div className="hidden lg:block">
        <Image
          src="/image-nav/The essential app, for business..jpg"
          alt="Zolmi"
          className="h-10 sm:h-12 w-60 sm:w-64 object-contain"
          width={240}
          height={40}
          priority
        />
      </div>

      {/* Tablet Logo - Hidden on mobile and desktop */}
      <div className="hidden md:block lg:hidden">
        <Image
          src="/image-nav/zolmi-logo-blue.png"
          alt="Zolmi"
          className="h-7 w-auto object-contain"
          width={180}
          height={30}
          priority
        />
      </div>

      {/* Mobile Logo - Hidden on tablet and desktop */}
      <div className="md:hidden">
        <Image
          src="/image-nav/zolmi-logo-blue.png"
          alt="Zolmi"
          className="h-8.5 w-auto object-contain"
          width={240}
          height={40}
          priority
        />
      </div>
    </div>
  );
}
