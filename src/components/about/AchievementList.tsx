import Link from "next/link";
import { Users, TrendingUp, Star, Clock } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    value: '25K+',
    label: 'Active Users',
    description: 'Trusted by salon professionals worldwide'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Revenue Growth',
    description: 'Average increase within 6 months'
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Customer Rating',
    description: 'Based on 1,000+ reviews'
  },
  {
    icon: Clock,
    value: '98%',
    label: 'Time Saved',
    description: 'On administrative tasks'
  }
];

export default function AchievementList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, index) => (
        <div 
          key={index}
          className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
        >
          <achievement.icon className="w-8 h-8 text-brand mb-4" />
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {achievement.value}
          </div>
          <div className="text-lg font-semibold text-gray-800 mb-1">
            {achievement.label}
          </div>
          <p className="text-gray-600">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
}