'use client';

import React, { useState } from 'react';
import ChatTooltip from './ChatTooltip';
import ChatBubble from './ChatBuble';

export default function FloatingChat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleChatClick = () => {
    // Here you would typically open your chat widget
    console.log('Opening chat...');
  };

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <div className="relative">
        {showTooltip && <ChatTooltip onClose={() => setShowTooltip(false)} />}
        <button 
          onClick={handleChatClick}
          className="transition-transform hover:scale-105"
          aria-label="Open chat"
        >
          <ChatBubble />
        </button>
      </div>
    </div>
  );
}