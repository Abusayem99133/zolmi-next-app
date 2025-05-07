import React from 'react';
import { Star, TrendingUp, Users, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Revenue Increase',
    description: 'Average growth within 6 months'
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Customer Rating',
    description: 'Based on 1,000+ reviews'
  },
  {
    icon: Users,
    value: '25K+',
    label: 'Active Users',
    description: 'Trusted by professionals'
  },
  {
    icon: Clock,
    value: '98%',
    label: 'Time Saved',
    description: 'On administrative tasks'
  }
];

export default function CustomerStats() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Transforming Salons Across the Globe
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Join thousands of salon owners who have revolutionized their business operations with Zolmi's comprehensive management solution.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl -m-2" />
            <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <stat.icon className="w-8 h-8 text-brand mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}