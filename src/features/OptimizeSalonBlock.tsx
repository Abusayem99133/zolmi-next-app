import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '../layout/Container';

const features = [
  {
    id: 'pos',
    title: 'Salon POS & Checkout',
    description: 'Complete point of sale system with integrated payments, commission tracking, and detailed sales reports.',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'no-show',
    title: 'No-Show Reduction',
    description: 'Reduce no-shows with automated reminders and deposit requirements.',
    image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'forms',
    title: 'Treatment Forms & SOAP Notes',
    description: 'Digital consultation forms and treatment records for better client care.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'booking',
    title: 'Online & App Booking',
    description: 'Let clients book appointments online and through our mobile app.',
    image: 'https://images.unsplash.com/photo-1576153192621-7a3be10b356e?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track and manage your product inventory efficiently.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'staff',
    title: 'Staff Scheduling',
    description: 'Optimize your staff schedules and track performance.',
    image: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'website',
    title: 'Website Builder',
    description: 'Create a professional website for your salon.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1920&q=80'
  }
];

export default function OptimizeSalonBlock() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="py-16 bg-[#050f35] text-white">
      <Container>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              7 Ways Zolmi Salon Booking Software
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Will Help You Optimize Your Salon
            </h3>
            <p className="mt-4 text-lg text-gray-300">
              Join other leading hair salons in UAE who are optimizing their business using Zolmi's
              comprehensive salon management solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`
                    w-full px-6 py-4 rounded-xl text-left flex items-center justify-between
                    transition-all duration-200 group
                    ${activeFeature.id === feature.id 
                      ? 'bg-white/10'
                      : 'bg-white/5 hover:bg-white/10'
                    }
                  `}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium">{feature.title}</span>
                    </div>
                    {activeFeature.id === feature.id && (
                      <p className="mt-2 ml-10 text-sm text-gray-400">
                        {feature.description}
                      </p>
                    )}
                  </div>
                  {activeFeature.id === feature.id ? (
                    <Minus className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Feature Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#features" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              Check out the full list of features →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}