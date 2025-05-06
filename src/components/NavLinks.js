"use client";

import React, { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductMenu from "./ProductMenu";

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
];

export default function NavLinks() {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const router = useRouter();

  const handleGetStarted = useCallback(() => {
    router.push("/demo");
  }, [router]);

  const handleMouseEnter = useCallback(() => {
    setShowProductMenu(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowProductMenu(false);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-8">
      {/* Pricing */}
      <Link
        href="/pricing"
        className="text-[15px] font-medium text-gray-600 hover:text-brand transition-colors"
      >
        Pricing
      </Link>

      {/* Product Menu (Second Item) */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-1.5 text-[15px] font-medium text-gray-600 hover:text-brand transition-colors">
          Product
          <ChevronDown className="w-4 h-4" />
        </button>
        {showProductMenu && <ProductMenu />}
      </div>

      {/* Other Navigation Links */}
      {links.slice(1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[15px] font-medium text-gray-600 hover:text-brand transition-colors"
        >
          {link.label}
        </Link>
      ))}

      <button
        onClick={() =>
          (window.location.href =
            "https://ai.zolmi.com/sign-up?get_started_button_homepage")
        }
        className="px-6 py-2.5 rounded-full text-[15px] font-medium bg-[#050f35] text-white hover:bg-[#0A1940] transition-colors ml-4"
      >
        Get Started
      </button>

      <a
        href="https://ai.zolmi.com"
        className="text-[15px] font-medium text-gray-600 hover:text-brand transition-colors ml-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Log in
      </a>
    </div>
  );
}

export { links };
