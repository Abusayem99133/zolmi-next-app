'use client';

import FeatureBlock from "@/features/FeatureBlock";
import Hero from ".";
import CustomerShowcase from "../showcase/CustomerShowcase";
import AboutSection from "../about/AboutSection";
import  ProductFeatures  from "@/features/productFeatures";
import ReviewsSection from "@/reviews/ReviewsSection";
import SocialProof from "../SocialProof";
import PricingSection from "../pricing/PricinigSection";
import FAQSection from "../faq/FAQSection";
export default function HeroSection() {
  return (
   <>
   <Hero/>
   <ProductFeatures/>
   <FeatureBlock/>
   <CustomerShowcase/>
   <AboutSection/>
   <ReviewsSection/>
   <SocialProof/>
   <PricingSection/>
   <FAQSection/>
   </>
  );
}
