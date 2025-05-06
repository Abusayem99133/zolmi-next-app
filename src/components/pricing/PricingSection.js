"use client";

import { useRef, useState, useEffect } from "react";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
import MobilePricingCard from "./MobilePricingCard";
import PricingStickyHeader from "./PricingStickyHeader";
import DemoPopup from "./DemoPopup";
import { pricingTiers } from "../../data/pricing";
import { usePricingCalculator } from "../../hooks/usePricingCalculator";
import { useStickyPricing } from "../../hooks/useStickyPricing";

export default function PricingSection() {
  const [staffCount, setStaffCount] = useState(3);
  const [isAnnual, setIsAnnual] = useState(true);
  const calculatedPricing = usePricingCalculator(
    pricingTiers,
    staffCount,
    isAnnual
  );

  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const hasShownPopup = useRef(false);

  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const isSticky = useStickyPricing({ headerRef, ctaRef });

  useEffect(() => {
    let timeoutId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownPopup.current) {
          timeoutId = setTimeout(() => {
            setShowDemoPopup(true);
            hasShownPopup.current = true;
          }, 30000);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Section id="pricing" className="bg-gray-50">
      {showDemoPopup && <DemoPopup onClose={() => setShowDemoPopup(false)} />}

      <PricingStickyHeader pricing={calculatedPricing} isVisible={isSticky} />

      <div className="relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Simple, Transparent Pricing"
            subtitle="Choose the perfect plan for your salon's needs"
          />

          <div className="space-y-8">
            <PricingHeader
              staffCount={staffCount}
              isAnnual={isAnnual}
              onStaffCountChange={setStaffCount}
              onBillingChange={setIsAnnual}
            />

            {/* Desktop View */}
            <div className="hidden md:block">
              <div ref={headerRef} className="grid grid-cols-3 gap-6">
                {calculatedPricing.map((tier) => (
                  <PricingCard key={tier.id} tier={tier} />
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden divide-y divide-gray-100">
              {calculatedPricing.map((tier) => (
                <MobilePricingCard key={tier.id} tier={tier} />
              ))}
            </div>
            <div ref={ctaRef} />
          </div>
        </div>
      </div>
    </Section>
  );
}
