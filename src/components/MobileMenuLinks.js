"use client";

import React from "react";
import Link from "next/link";
import { links } from "./NavLinks";

export default function MobileMenuLinks({ onClose }) {
  return (
    <div className="fixed inset-x-0 top-16 p-4 bg-white border-t border-gray-100 shadow-lg z-50">
      <nav className="space-y-4">
        {/* All Links */}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 text-gray-600 hover:text-brand hover:bg-gray-50 rounded-lg transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}

        <div className="pt-2 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full px-6 py-2 rounded-full text-sm font-medium bg-brand text-white hover:bg-brand-hover transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}
