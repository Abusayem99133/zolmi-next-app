import React from 'react';
import { UserCircle, Scissors } from 'lucide-react';

export default function ClientCard() {
  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200/50">
      <div className="flex items-center gap-2 mb-3">
        <UserCircle className="w-4 h-4 text-purple-600" />
        <h3 className="text-sm font-medium text-gray-900">Client Notes</h3>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <Scissors className="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">Sarah Johnson</h4>
          <p className="text-xs text-gray-600 mt-1">
            Preferred style: Natural waves
            Last visit: 6 weeks ago
          </p>
        </div>
      </div>
    </div>
  );
}