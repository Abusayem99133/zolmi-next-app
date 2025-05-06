"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { countries } from "../../data/countires";

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[#050f35] hover:text-[#1a245c] transition-colors"
      >
        <div className="w-5 h-5 aspect-square rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
          <img
            src="/images/flags/globe.svg"
            alt="Global flag"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm">USA / Global</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-20 bg-black/20 md:bg-transparent"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="
            fixed md:absolute z-30 
            inset-x-0 bottom-0 md:bottom-auto md:right-0 
            md:mt-2 md:min-w-[480px]
            bg-white rounded-t-2xl md:rounded-xl shadow-lg
            border border-gray-100
          "
          >
            {/* Header - Mobile only */}
            <div className="flex items-center justify-between p-4 border-b md:hidden">
              <h3 className="font-medium text-[#050f35]">Select Country</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#050f35] hover:text-[#1a245c]"
              >
                Close
              </button>
            </div>

            {/* Countries Grid */}
            <div className="p-2 max-h-[80vh] md:max-h-[400px] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {countries.map((country) => (
                  <button
                    key={country.name}
                    onClick={() => setIsOpen(false)}
                    className="
                      w-full px-3 py-2 text-left flex items-center gap-2
                      hover:bg-gray-50 rounded-lg transition-colors
                      text-[#050f35]
                    "
                  >
                    <div className="w-5 h-5 aspect-square rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                      <img
                        src={country.flagSrc}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm whitespace-nowrap">
                      {country.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
