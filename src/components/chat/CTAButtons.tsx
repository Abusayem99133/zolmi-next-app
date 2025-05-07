"use client";

import React from "react";
import { Check } from "lucide-react";

export function CTAButtons() {
  return (
    <div className="mt-5 max-w-md mx-auto flex flex-col items-center md:mt-8">
      {/* Buttons Container */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-3">
        <a
          href="https://ai.zolmi.com/sign-up"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-coral hover:bg-coral-hover transition-colors md:py-4 md:text-lg md:px-10"
          aria-label="Start free trial of Zolmi salon management software"
        >
          Start Free Trial
        </a>
        <a
          href="/demo"
          className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors md:py-4 md:text-lg md:px-10"
          aria-label="Watch demo of Zolmi salon management software"
        >
          Watch Demo
        </a>
      </div>

      {/* Trust Indicators */}
      <div className="mt-4 flex flex-col md:flex-row items-center gap-1 md:gap-6">
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald" />
          <span className="text-sm text-gray-600">No credit card required</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-emerald" />
          <span className="text-sm text-gray-600">14-day free trial</span>
        </div>
      </div>
    </div>
  );
}
