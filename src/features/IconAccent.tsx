import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconAccentProps {
  icon: LucideIcon;
}

export default function IconAccent({ icon: Icon }: IconAccentProps) {
    console.log(Icon);
  return (
    <div className="inline-flex mb-4">
      <div className="relative">
        <div className="absolute -inset-3 bg-purple-100 rounded-lg blur-sm" />
        <div className="relative bg-white p-2 rounded-lg shadow-sm">
          <Icon className="w-8 h-8 text-purple-600" />
        </div>
      </div>
    </div>
  );
}