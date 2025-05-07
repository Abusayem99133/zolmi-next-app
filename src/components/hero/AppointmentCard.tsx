import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function AppointmentCard() {
  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200/50">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 text-purple-600" />
        <h3 className="text-sm font-medium text-gray-900">Today's Schedule</h3>
      </div>
      
      <div className="space-y-3">
        {/* Appointments */}
        {[
          { time: '10:00', client: 'Sarah M.', service: 'Haircut & Style' },
          { time: '11:30', client: 'Alex K.', service: 'Color Treatment' },
          { time: '14:00', client: 'Emma R.', service: 'Manicure' }
        ].map((appointment, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-1.5 min-w-[60px]">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-600">{appointment.time}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{appointment.client}</p>
              <p className="text-xs text-gray-500">{appointment.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}