import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a 
      href={href}
      className="block text-brand-light/80 hover:text-white transition-colors mb-2"
    >
      {children}
    </a>
  );
}