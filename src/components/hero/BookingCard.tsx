import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function BookingCard() {
  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200/50">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 text-purple-600" />
        <h3 className="text-sm font-medium text-gray-900">Online Booking</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Available slots:</span>
          <span className="text-purple-600 font-medium">Today</span>
        </div>
        
        {['14:00', '15:30', '17:00'].map(time => (
          <button
            key={time}
            className="w-full text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 py-1.5 px-3 rounded-full transition-colors"
          >
            <Clock className="w-3 h-3 inline-block mr-1" />
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}