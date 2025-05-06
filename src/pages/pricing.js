import React, { Suspense } from "react";
import Footer from "../components/footer/Footer";

import PricingSection from "../components/pricing/PricingSection";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Navbar from "@/components/Navbar";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* <Container> */}
        <div className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your needs.
            </p>
          </div>
        </div>
        {/* </Container> */}
        <Suspense fallback={<LoadingSpinner />}>
          <PricingSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
