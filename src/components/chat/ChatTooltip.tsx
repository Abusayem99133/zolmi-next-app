import Link from "next/link";

interface ChatTooltipProps {
  onClose: () => void;
}

export default function ChatTooltip({ onClose }: ChatTooltipProps) {
  return (
    <div className="absolute bottom-full right-0 mb-4 w-[160px]">
      <div className="bg-white rounded-2xl p-2.5 shadow-lg relative">
        <div className="flex items-start gap-1.5">
          <div className="flex-1">
            <p className="text-[#1e1b4b] text-xs font-medium mb-0.5">We're here to help</p>
            <p className="text-gray-600 text-[10px]">and we're not a bot</p>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-400 hover:text-gray-600 text-sm"
            aria-label="Close chat tooltip"
          >
            ×
          </button>
        </div>
        
        <div className="mt-1">
          <span className="text-lg">👋</span>
        </div>

        <div className="absolute -bottom-2 right-4 w-3 h-3 bg-white transform rotate-45" />
      </div>
    </div>
  );
}