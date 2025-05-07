import React from 'react';
import AppointmentCard from './AppointmentCard';
import ClientCard from './ClientCard';
import BookingCard from './BookingCard';
import PaymentCard from './PaymentCard';

export default function SchedulingPreview() {
  return (
    <div className="relative px-4 sm:px-0">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl" />
      
      {/* Grid layout for cards */}
      <div className="relative grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
        <AppointmentCard />
        <ClientCard />
        <BookingCard />
        <PaymentCard />
      </div>
    </div>
  );
}