'use client';

import React from 'react';

export default function TrustBadges() {
  return (
    <div className="flex items-center justify-center gap-6 mt-4 mb-2">
      <div className="flex items-center">
        <img 
          src="https://brand-assets.capterra.com/badge/6568df05-d551-46ca-8380-c72be43eedbd.svg" 
          alt="Capterra"
          width={120}
          height={48}
          className="h-12 w-auto opacity-90"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}