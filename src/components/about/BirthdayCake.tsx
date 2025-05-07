import Link from "next/link";

export default function BirthdayCake() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full stroke-brand fill-none stroke-2"
      >
        {/* Bottom Layer */}
        <path d="M40,160 C40,140 160,140 160,160 L160,180 C160,200 40,200 40,180 Z" />
        
        {/* Middle Layer */}
        <path d="M50,140 C50,120 150,120 150,140 L150,140 C150,160 50,160 50,140 Z" />
        
        {/* Top Layer */}
        <path d="M60,120 C60,100 140,100 140,120 L140,120 C140,140 60,140 60,120 Z" />
        
        {/* Frosting Waves */}
        <path d="M60,120 C75,115 125,115 140,120" className="stroke-[2]" />
        <path d="M50,140 C70,135 130,135 150,140" className="stroke-[2]" />
        <path d="M40,160 C65,155 135,155 160,160" className="stroke-[2]" />
        
        {/* Candle */}
        <line x1="100" y1="60" x2="100" y2="100" className="stroke-[3]" />
        <path d="M95,60 L105,60 L100,50 Z" className="fill-brand" />
        
        {/* Flame */}
        <path 
          d="M100,45 C103,42 105,38 100,35 C95,38 97,42 100,45" 
          className="fill-brand stroke-none"
        >
          <animate 
            attributeName="d" 
            dur="1s"
            repeatCount="indefinite"
            values="
              M100,45 C103,42 105,38 100,35 C95,38 97,42 100,45;
              M100,45 C102,41 103,37 100,35 C97,37 98,41 100,45;
              M100,45 C103,42 105,38 100,35 C95,38 97,42 100,45
            "
          />
        </path>
        
        {/* Text */}
        <text 
          x="100" 
          y="170" 
          className="fill-brand text-[12px] font-bold text-center"
          textAnchor="middle"
        >
          we are 7
        </text>
      </svg>
    </div>
  );
}