'use client';

import Link from 'next/link';
import Container from '@/layout/Container';

interface FooterLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

interface FooterSections {
  [key: string]: FooterLink[];
}

const footerSections: FooterSections = {
  'Business Types': [
    { label: 'Solutions', href: '/solutions', isRoute: true },
    { label: 'Nail Salons', href: '/solutions/nail-salon', isRoute: true },
    { label: 'Barber Shops', href: '/solutions/barber-shop', isRoute: true },
    { label: 'Spa & Medi Spas', href: '/solutions/spa', isRoute: true },
    { label: 'Beauty Salons', href: '/solutions/beauty-salon', isRoute: true },
    { label: 'Hair Salons', href: '/solutions/hair-salon', isRoute: true }
  ],
  'App Features': [
    { label: 'Features Overview', href: '/features', isRoute: true },
    { label: 'Point of Sale', href: '/features#pos', isRoute: true },
    { label: 'Inventory Management', href: '/features#inventory', isRoute: true },
    { label: 'Scheduling', href: '/features#scheduling', isRoute: true },
    { label: 'Online Booking', href: '/features#booking', isRoute: true }
  ],
  'Software Features': [
    { label: 'Software Overview', href: '/features', isRoute: true },
    { label: 'Inventory Management', href: '/features#inventory-management', isRoute: true },
    { label: 'Salon POS', href: '/features#pos', isRoute: true },
    { label: 'Marketing Tools', href: '/features#marketing', isRoute: true },
    { label: 'Website Builder', href: '/features#website', isRoute: true },
    { label: 'Reputation Management', href: '/features#reputation', isRoute: true }
  ],
  'Company': [
    { label: 'About Us', href: '/about', isRoute: true },
    { label: 'Contact Us', href: '/contact', isRoute: true },
    { label: 'Help Center', href: '/help', isRoute: true },
    { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
    { label: 'Terms & Conditions', href: '/terms', isRoute: true },
    { label: 'Blog', href: '/learn', isRoute: true },
    { label: 'Sitemap', href: '/sitemap', isRoute: true }
  ],
  'Social Media': [
    { label: 'YouTube', href: 'https://youtube.com/@zolmi' },
    { label: 'Instagram', href: 'https://instagram.com/zolmi.ae' },
    { label: 'Facebook', href: 'https://facebook.com/zolmi.ae' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zolmi' },
    { label: 'Twitter', href: 'https://twitter.com/zolmi_ae' }
  ]
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8">
      <Container>
        {/* Logo and Country Selector */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-8">
            <img 
              src="https://zolmi.com/assets/img/com/zolmi-logo-blue.png"
              alt="Zolmi"
              className="h-8"
            />
            {/* Replace with appropriate selector if needed */}
            {/* <CountrySelector /> */}
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
                {link.isRoute ? (
                  <Link
                    href={link.href}
                    className="text-[#050f35] hover:text-[#050f35] transition-colors text-[15px] leading-relaxed"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-[#050f35] hover:text-[#050f35] transition-colors text-[15px] leading-relaxed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                )}
              </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-[#050f35] border-t border-gray-200 pt-8">
          <p className="mb-2">© {currentYear} Zolmi® & Belliata® are registered trademarks owned by Umov Sp. z o.o.</p>
          <p>
            Zolmi Software, London E14 7FY Tel:{' '}
            <a 
              href="tel:+442045876390" 
              className="text-[#050f35] hover:text-[#050f35] transition-colors"
            >
              +44 204 587 6390
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
