import React from 'react';
import FeatureBlock from '@/components/features/FeatureBlock';
import ProductFeatures from '../data/productFeatures'
import CustomerShowcase from '../components/showcase/CustomerShocase'
import AboutSection from '../components/about/AboutSection';
import ReviewsSection from '../components/reviews/ReviewsSection';
import SocialProof from '../components/SocialProof';
import PricingSection from '../components/pricing/PricingSection';
import FAQSection from '../components/faq/FAQSection';
import FloatingCTA from '../components/FloatingCTA';
import FloatingChat from '../components/chat/FloatingChat';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <Hero/>
      <FeatureBlock />
      <CustomerShowcase />
      <AboutSection />
      <ProductFeatures />
      <ReviewsSection />
      <SocialProof />
      <PricingSection />
      <FAQSection />
      <FloatingCTA />
      <FloatingChat />
    </>
  );
}