import React from 'react';
import Container from '../layout/Container';
import ExpandableFAQ from './ExpandableFAQ';

const faqs = [
  {
    question: "What makes Zolmi different from other salon software?",
    answer: "Zolmi is specifically designed for salons in the UAE, offering features like multi-language support, local payment integration, and compliance with regional business requirements. We also provide 24/7 local support and regular updates based on user feedback."
  },
  {
    question: "Can I try Zolmi before committing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, set up your salon, and see how it works for your business risk-free."
  },
  {
    question: "Is it easy to switch from my current software to Zolmi?",
    answer: "Absolutely. Our team provides free data migration and setup assistance. We'll help transfer your client database, appointment history, and other important information. Most salons are up and running within 24 hours."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 live chat, phone support during business hours, video tutorials, and a detailed knowledge base. Our Dubai-based team is always ready to help in English or Arabic."
  },
  {
    question: "Can I use Zolmi on multiple devices?",
    answer: "Yes, Zolmi works on any device with an internet connection. We have native apps for iOS and Android, plus a web version that works on all browsers. Your data syncs automatically across all devices."
  }
];

export default function ExpandableFAQSection() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="bg-white py-16">
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Zolmi
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => (
              <ExpandableFAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}