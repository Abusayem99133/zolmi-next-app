import Link from "next/link";
import Image from "next/image";
import CountrySelector from "./CountrySelector";
import { useScrollToTop } from "../hooks/useScrollToTop";

const footerSections = {
  "Business Types": [
    { label: "Solutions", href: "/solutions" },
    { label: "Nail Salons", href: "/solutions/nail-salon" },
    { label: "Barber Shops", href: "/solutions/barber-shop" },
    { label: "Spa & Medi Spas", href: "/solutions/spa" },
    { label: "Beauty Salons", href: "/solutions/beauty-salon" },
    { label: "Hair Salons", href: "/solutions/hair-salon" },
  ],
  "App Features": [
    { label: "Features Overview", href: "/features" },
    { label: "Point of Sale", href: "/features#pos" },
    { label: "Inventory Management", href: "/features#inventory" },
    { label: "Scheduling", href: "/features#scheduling" },
    { label: "Online Booking", href: "/features#booking" },
  ],
  "Software Features": [
    { label: "Software Overview", href: "/features" },
    { label: "Inventory Management", href: "/features#inventory-management" },
    { label: "Salon POS", href: "/features#pos" },
    { label: "Marketing Tools", href: "/features#marketing" },
    { label: "Website Builder", href: "/features#website" },
    { label: "Reputation Management", href: "/features#reputation" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Blog", href: "/learn" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  "Social Media": [
    { label: "YouTube", href: "https://youtube.com/@zolmi" },
    { label: "Instagram", href: "https://instagram.com/zolmi.ae" },
    { label: "Facebook", href: "https://facebook.com/zolmi.ae" },
    { label: "LinkedIn", href: "https://linkedin.com/company/zolmi" },
    { label: "Twitter", href: "https://twitter.com/zolmi_ae" },
  ],
};

function Footer() {
  const scrollToTop = useScrollToTop();
  const currentYear = new Date().getFullYear();

  const isExternal = (url) => url.startsWith("http");

  return (
    <footer className="bg-white pt-16 pb-8">
      {/* <Container> */}
      {/* Logo and Country Selector */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-8">
          <Image
            src="https://zolmi.com/assets/img/com/zolmi-logo-blue.png"
            alt="Zolmi"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
          <CountrySelector />
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {Object.entries(footerSections).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[#050f35] text-base font-semibold mb-6">
              {title}
            </h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  {isExternal(link.href) ? (
                    <a
                      href={link.href}
                      className="text-[#050f35] hover:text-[#050f35] transition-colors text-[15px] leading-relaxed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} scroll={false}>
                      <span
                        onClick={scrollToTop}
                        className="cursor-pointer text-[#050f35] hover:text-[#050f35] transition-colors text-[15px] leading-relaxed"
                      >
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-sm text-[#050f35] border-t border-gray-200 pt-8">
        <p className="mb-2">
          © {currentYear} Zolmi® & Belliata® are registered trademarks owned by
          Umov Sp. z o.o.
        </p>
        <p>
          Zolmi Software, London E14 7FY Tel:{" "}
          <a
            href="tel:+442045876390"
            className="text-[#050f35] hover:text-[#050f35] transition-colors"
          >
            +44 204 587 6390
          </a>
        </p>
      </div>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
