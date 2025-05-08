'use client';

import FeatureBlock from "@/features/FeatureBlock";
import Hero from ".";
import CustomerShowcase from "../showcase/CustomerShowcase";
import AboutSection from "../about/AboutSection";
import  ProductFeatures  from "@/features/productFeatures";
import ReviewsSection from "@/reviews/ReviewsSection";
import SocialProof from "../SocialProof";
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
   </>
  );
}
