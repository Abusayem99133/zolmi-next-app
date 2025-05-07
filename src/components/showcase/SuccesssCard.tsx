import React from 'react';
import type { SuccessStory } from '../../types/success';

export default function SuccessCard({ name, location, image, description, stats }: SuccessStory) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="h-40 relative"> {/* Fixed height for image container */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-white/80">{location}</p>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-auto">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-brand mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}