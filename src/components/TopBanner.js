"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Heart,
  MessageCircle,
  DollarSign,
  Award,
  Smartphone,
} from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const features = [
  { text: "Trusted by salons in 25 countries", icon: Award },
  { text: "24/7 Live Chat Support", icon: MessageCircle },
  { text: "Affordable pricing with no hidden fees", icon: DollarSign },
  { text: "iOS & Android Apps", icon: Smartphone },
];

export default function TopBanner() {
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();

  // Hide banner on learn pages
  if (pathname.startsWith("/learn/")) {
    return null;
  }

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-200/80 
        transition-transform duration-300
        ${isScrolled ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-10">
          {/* "Why Zolmi?" section */}
          <div className="flex items-center gap-1.5 pr-2 md:pr-4 border-r border-gray-200">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-brand" />
            <span className="text-xs md:text-sm font-medium text-brand hover:text-brand-hover cursor-pointer whitespace-nowrap">
              Why Zolmi?
            </span>
          </div>

          {/* Scrolling ticker */}
          <div
            className="flex-1 overflow-hidden ml-2 md:ml-4"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="animate-marquee flex items-center gap-8 md:gap-16 text-xs md:text-sm text-gray-600">
              {[...features, ...features, ...features].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap"
                >
                  <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
