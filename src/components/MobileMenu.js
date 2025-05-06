"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenuLinks from "./MobileMenuLinks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-4">
      {/* Login Link */}
      <a
        href="https://ai.zolmi.com"
        className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Log in
      </a>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
          <MobileMenuLinks onClose={() => setIsOpen(false)} />
        </>
      )}
    </div>
  );
}
