export interface PricingFeature {
    text: string;
    included: boolean;
  }
  
  export interface PricingTier {
    id: string;
    name: string;
    description: string;
    price: number;
    billedAnnually: boolean;
    featured: boolean;
    buttonText: string;
    features: PricingFeature[];
  }
  
  export const pricingTiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'BASIC',
      description: 'Perfect for small salons just getting started',
      price: 0,
      billedAnnually: false,
      featured: false,
      buttonText: 'Get Started Free',
      features: [
        { text: 'Up to 2 staff members', included: true },
        { text: 'Maximum 50 Appointments', included: true },
        { text: 'Unlimited Belliata Appointments', included: true },
        { text: 'Customer Booking App', included: true },
        { text: 'No Booking Page', included: false },
        { text: 'SMS notifications', included: false },
        { text: 'Online booking', included: false },
        { text: 'Marketing Tools', included: false }
      ]
    },
    {
      id: 'start',
      name: 'START',
      description: 'For growing salons ready to scale',
      price: 20,
      billedAnnually: true,
      featured: false,
      buttonText: 'Get Started',
      features: [
        { text: 'Business Reporting', included: true },
        { text: 'Advanced scheduling', included: true },
        { text: 'Staff & Client Management', included: true },
        { text: 'SMS notifications', included: true },
        { text: 'Online booking', included: true },
        { text: 'Stock Limited to 10 Products', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Priority support', included: false }
      ]
    },
    {
      id: 'pro',
      name: 'PRO',
      description: 'Most popular choice for established salons',
      price: 30,
      billedAnnually: true,
      featured: true,
      buttonText: 'Get Started',
      features: [
        { text: 'Business Reporting', included: true },
        { text: 'POS Features', included: true },
        { text: 'Stock Management', included: true },
        { text: 'Google Review Booster', included: true },
        { text: 'Priority support', included: true },
        { text: 'Dedicated account manager', included: true }
      ]
    }
  ];