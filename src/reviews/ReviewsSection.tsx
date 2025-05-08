'use client';

import React from 'react';
import Section from '../layout/Section';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  rating: number;
  text: string;
  author: {
    name: string;
  };
}

const reviews: Review[] = [
  {
    id: '1',
    rating: 5,
    text: 'The branded website and Online ordering platform is perfect for our guest and growing my business.',
    author: {
      name: 'Steven F'
    }
  },
  {
    id: '2',
    rating: 5,
    text: 'With Owner.com I keep all money from sales and only pay minimal fee on delivery cost.',
    author: {
      name: 'Mohammad A'
    }
  },
  {
    id: '3',
    rating: 5,
    text: 'Owner.com has been an absolute lifesaver when it comes to minimizing third-party service fees and driving direct store sales',
    author: {
      name: 'Tara B'
    }
  },
  {
    id: '4',
    rating: 5,
    text: 'My restaurants operate very late, yet Owner Customer\'s Support has ALWAYS been active and able to help me with any concerns!',
    author: {
      name: 'Daryl E'
    }
  },
  {
    id: '5',
    rating: 5,
    text: 'Owner.com has almost everything you need to run your restaurant online. An awesome partner to have for restaurants.',
    author: {
      name: 'Jake A'
    }
  },
  {
    id: '6',
    rating: 5,
    text: 'They are helping us take back more control of our business and compete with larger companies because the technology is great!',
    author: {
      name: 'Michael B'
    }
  }
];

function ReviewCard({ review, hideAuthor = false, isThirdRow = false }: { 
  review: Review; 
  hideAuthor?: boolean;
  isThirdRow?: boolean;
}) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm">
      {/* Stars */}
      <div className="flex gap-2 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-900 text-lg mb-4 leading-relaxed">
        {review.text}
      </p>

      {/* Author - Only show if not hidden */}
      {!hideAuthor && !isThirdRow && (
        <div className="flex items-center gap-2">
          <span className="text-gray-600">{review.author.name}</span>
        </div>
      )}

      {/* Fade overlay for third row */}
      {isThirdRow && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white rounded-2xl" />
      )}
    </div>
  );
}

export default function ReviewsSection() {
  // Split reviews into three columns with staggered layout
  const columns = [
    reviews.slice(0, 2),  // First column
    reviews.slice(2, 4),  // Second column
    reviews.slice(4)      // Third column
  ];

  return (
    <Section className="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-brand mb-4">
            See why we are<br />rated #1 by our clients
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of salon owners who have transformed their business with Zolmi
          </p>
        </div>

        {/* Desktop layout - 3 columns with staggered effect */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {columns.map((column, columnIndex) => (
            <div 
              key={columnIndex} 
              className={`space-y-6 ${
                columnIndex === 1 ? 'mt-12' : ''
              }`}
            >
              {column.map(review => (
                <ReviewCard 
                  key={review.id} 
                  review={review}
                  hideAuthor={columnIndex === 2}
                  isThirdRow={columnIndex === 2}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile layout - single column */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto">
          {reviews.slice(0, 3).map((review, index) => (
            <ReviewCard 
              key={review.id} 
              review={review} 
              hideAuthor={index === 2}
              isThirdRow={index === 2}
            />
          ))}
          
          {/* Mobile "See more" button */}
          <div className="text-center mt-8">
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              See more reviews
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}