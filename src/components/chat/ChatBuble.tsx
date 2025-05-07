import Link from "next/link";
import { MessageCircle } from 'lucide-react';

export default function ChatBubble() {
  return (
    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
      <MessageCircle className="w-6 h-6 text-white" />
    </div>
  );
}