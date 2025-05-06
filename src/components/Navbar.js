"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useScrollPosition } from "./hooks/useScrollPosition";

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();
  const [isArticlePage, setIsArticlePage] = useState(false);

  useEffect(() => {
    setIsArticlePage(pathname.startsWith("/learn/") && pathname !== "/learn");
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 bg-white border-b border-gray-100
        ${isArticlePage ? "top-0" : isScrolled ? "top-0" : "top-10"}`}
    >
      <div className="px-4 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1260px] mx-auto">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="block">
            <Logo />
          </Link>
          <NavLinks />
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
