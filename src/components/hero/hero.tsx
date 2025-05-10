'use client';

import Hero from ".";
import CustomerShowcase from "../showcase/CustomerShowcase";
import AboutSection from "../about/AboutSection";
import ReviewsSection from "@/reviews/ReviewsSection";
import SocialProof from "../SocialProof";
import PricingSection from "../pricing/PricinigSection";
import FAQSection from "../faq/FAQSection";
import FloatingCTA from "../chat/FloatingCTA";
import FloatingChat from "../chat/FloatingChat";
import FeaturesBlock from "@/features/FeaturesBlock";
import ProductFeatures from '../../features/ProductFeatures'
export default function HeroSection() {
  return (
   <>
   <Hero/>
   <FeaturesBlock/> 
   <CustomerShowcase/>
   <AboutSection/>
   {/* <ProductFeatures/> */}
   <ReviewsSection/>
   <SocialProof/>
   <PricingSection/>
   <FAQSection/>
   <FloatingCTA/>
   <FloatingChat/>
   </>
  );
}
