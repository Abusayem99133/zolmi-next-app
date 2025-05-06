"use client";

import React from "react";
import {
  Ticket,
  MessageCircle,
  BookOpen,
  Bot,
  Inbox,
  BarChart,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";

const productItems = [
  {
    title: "Ticketing System",
    description: "Efficient, end-to-end ticketing system for your salon.",
    icon: Ticket,
  },
  {
    title: "Live Chat",
    description: "Support customers in real time on your website.",
    icon: MessageCircle,
  },
  {
    title: "Knowledge Base",
    description: "Self-service information center for your customers.",
    icon: BookOpen,
  },
  {
    title: "Treatment Forms & SOAP Notes",
    description:
      "Digitize your consultation forms, consent forms, and treatment records.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=800&q=80",
  },
  {
    title: "AI Assistant",
    description: "Reduce support volume with AI automations.",
    icon: Bot,
  },
  {
    title: "Omnichannel Inbox",
    description: "Manage all communications in one place.",
    icon: Inbox,
  },
  {
    title: "Analytics",
    description: "Track and improve your salon performance.",
    icon: BarChart,
  },
];

export default function ProductMenu() {
  return (
    <div className="absolute top-full left-0 pt-4 w-[600px]">
      <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden">
        {/* Title Section */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Customer Service Software
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Everything you need to deliver exceptional customer service
          </p>
          <Link
            href="/features"
            className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-brand hover:text-brand-hover"
          >
            See all features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-px bg-gray-100">
          {productItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-brand/5 rounded-lg">
                    <item.icon className="w-5 h-5 text-brand" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>

                  {item.image && (
                    <div className="mt-3">
                      <img
                        src={item.image}
                        alt={`${item.title} preview`}
                        className="rounded-lg w-full h-auto shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
