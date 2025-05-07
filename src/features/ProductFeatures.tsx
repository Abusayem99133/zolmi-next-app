import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../layout/Container';

const features = [
  {
    id: 'scheduling',
    title: 'SCHEDULING',
    description: 'Smart scheduling system that makes appointment booking effortless',
    screenshot: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'services',
    title: 'SERVICES',
    description: 'Manage your service menu and pricing with ease',
    screenshot: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'clients',
    title: 'CLIENT RECORDS',
    description: 'Keep detailed client histories and preferences',
    screenshot: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'reporting',
    title: 'REPORTING',
    description: 'Comprehensive analytics and business insights',
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'reminders',
    title: 'REMINDERS',
    description: 'Automated SMS and email reminders to reduce no-shows',
    screenshot: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'inventory',
    title: 'INVENTORY',
    description: 'Track stock levels and manage product inventory',
    screenshot: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'staffing',
    title: 'STAFFING',
    description: 'Optimize your team scheduling and performance',
    screenshot: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80'
  }
];

export default function FeaturesBlock() {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const [showBeacon, setShowBeacon] = useState(true);
  const activeFeatureIndex = features.findIndex(f => f.id === activeTab);
  const activeFeature = features[activeFeatureIndex];

  const handlePrevious = () => {
    const newIndex = (activeFeatureIndex - 1 + features.length) % features.length;
    setActiveTab(features[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (activeFeatureIndex + 1) % features.length;
    setActiveTab(features[newIndex].id);
  };

  const handleTabClick = (featureId: string) => {
    setActiveTab(featureId);
    if (featureId === 'services') {
      setShowBeacon(false);
    }
  };

  return (
    <section className="py-4 bg-gray-50">
      <Container>
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-[30px] md:text-[38px] font-bold text-gray-900 mb-4">
            Powerful Features for Your Salon
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {features.map((feature) => {
            const isActive = activeTab === feature.id;
            const isServices = feature.id === 'services';
            return (
              <button
                key={feature.id}
                onClick={() => handleTabClick(feature.id)}
                className={`
                  text-xs font-medium transition-colors relative py-2 px-2
                  ${isActive ? 'text-brand' : 'text-gray-500 hover:text-gray-900'}
                  ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand' : ''}
                `}
              >
                {feature.title}
                {isServices && showBeacon && (
                  <span className="absolute top-0 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
              aria-label="Next feature"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Screenshot */}
          <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
            <img
              src={activeFeature.screenshot}
              alt={`${activeFeature.title} interface screenshot`}
              className="w-full h-auto object-contain max-h-[700px]"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}