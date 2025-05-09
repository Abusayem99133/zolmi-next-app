import React from 'react';
import { X, CalendarClock, TrendingUp, Rocket } from 'lucide-react';

interface DemoPopupProps {
  onClose: () => void;
}

export default function DemoPopup({ onClose }: DemoPopupProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    window.open('https://calendly.com/your-link', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 md:p-8">
        {/* Close Button - Updated with white circle background and blue X */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-brand" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Book a Free Demo Call
          </h3>
          <p className="text-gray-600">
            Learn how Zolmi can transform your salon business in just 20 minutes
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-brand/5 rounded-lg">
              <CalendarClock className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Ease of setup</h4>
              <p className="text-sm text-gray-600">Learn how to get started in minutes</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-brand/5 rounded-lg">
              <TrendingUp className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Benefits To Your Business</h4>
              <p className="text-sm text-gray-600">See how Zolmi drives growth</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-brand/5 rounded-lg">
              <Rocket className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Our Exciting Plans</h4>
              <p className="text-sm text-gray-600">Preview upcoming features</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-brand text-white rounded-full font-medium hover:bg-brand-hover transition-colors"
          >
            Schedule Your Demo Call
          </button>
          <p className="text-xs text-center text-gray-500">
            20-minute personalized demo
          </p>
        </form>
      </div>
    </div>
  );
}