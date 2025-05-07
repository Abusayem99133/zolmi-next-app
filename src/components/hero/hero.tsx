'use client';

import FeatureBlock from "@/features/FeatureBlock";
import Hero from ".";
import CustomerShowcase from "../showcase/CustomerShowcase";
import AboutSection from "../about/AboutSection";

export default function HeroSection() {
  return (
   <>
   <Hero/>
   <FeatureBlock/>
   <CustomerShowcase/>
   <AboutSection/>
   
   </>
  );
}
