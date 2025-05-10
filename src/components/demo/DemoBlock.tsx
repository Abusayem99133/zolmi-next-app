import React from 'react';
import Section from '../layout/Section';
import SectionHeader from '../layout/SectionHeader';

export default function DemoBlock() {
  return (
    <Section className="bg-white">
      <SectionHeader
        title="See Zolmi in Action"
        subtitle="Watch our interactive demo to discover how Zolmi can transform your salon"
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Demo Embed */}
          <div 
            className="relative box-content max-h-[80vh] max-h-[80svh] w-full aspect-[1.77/1] py-10"
          >
            <iframe 
              src="https://app.supademo.com/embed/cm6s50cpm015w5laqtmwgcj4l?embed_v=2" 
              loading="lazy" 
              title="Zolmi Demo" 
              allow="clipboard-write" 
              frameBorder="0" 
              webkitallowfullscreen="true" 
              mozallowfullscreen="true" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}