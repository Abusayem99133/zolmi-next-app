export interface FAQ {
    id: string;
    question: string;
    answer: string;
  }
  
  export const faqData: FAQ[] = [
    {
      id: 'pricing',
      question: 'How much does Zolmi cost?',
      answer: 'We offer flexible pricing plans starting from free for small salons. Our paid plans start at $79/month and scale based on your needs. All plans include core features with premium features available in higher tiers.'
    },
    {
      id: 'trial',
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial of our Pro plan with all features included. No credit card required to start your trial.'
    },
    {
      id: 'setup',
      question: 'How long does it take to set up?',
      answer: 'Most salons are up and running within a day. Our intuitive setup wizard guides you through the process, and our support team is available to help if needed.'
    },
    {
      id: 'data-migration',
      question: 'Can I import my existing client data?',
      answer: 'Absolutely! We support importing client data from most popular salon software and spreadsheets. Our team can assist with the migration process to ensure a smooth transition.'
    },
    {
      id: 'support',
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 email support for all plans, with priority phone support for Pro plan subscribers. Our comprehensive help center and video tutorials are always available.'
    },
    {
      id: 'cancel',
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. We offer a hassle-free cancellation process and you can export your data before leaving.'
    }
  ];