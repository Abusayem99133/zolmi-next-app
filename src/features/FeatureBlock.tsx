import React from 'react';
import type { ProductFeature } from '../../data/productFeatures';
import IconAccent from './IconAccent';


interface FeatureBlockProps {
  feature: ProductFeature;
  compact?: boolean;
}

export default function FeatureBlock({ feature, compact = false }: FeatureBlockProps) {
  return (
    <div className={`
      relative group overflow-hidden rounded-2xl p-6 md:p-8
      bg-white/90 backdrop-blur-sm border border-gray-200/50
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
    `}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent -m-4" />
      
      <div className="relative">
        {/* Icon */}
        {/* <IconAccent icon={feature.icon} /> */}

        {/* Content */}
        <div className="space-y-4">
          {/* <h3 className="text-xl font-bold text-gray-900">
            {feature.title}
          </h3>
          
          <p className="text-gray-600">
            {feature.description}
          </p> */}

          {/* {!compact && (
            <ul className="space-y-2">
              {feature.features.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg 
                    className="w-4 h-4 text-brand"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
}