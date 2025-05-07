import React from 'react';

export default function CustomerImage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent rounded-3xl -m-4" />
      <div className="relative overflow-hidden rounded-3xl shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=800&q=80"
          alt="Satisfied customer using Zolmi in their salon"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  );
}