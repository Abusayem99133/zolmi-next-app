import { Calendar, MessageSquare, Package, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

export const productFeatures: ProductFeature[] = [
  {
    id: 'online-reputation',
    title: 'Improve Online Reputation',
    description: 'Build trust and attract new clients with automated review management and reputation monitoring.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=800&q=80',
    icon: MessageCircle,
    features: [
      'Automated review collection',
      'Review monitoring dashboard',
      'Response templates',
      'Rating analytics',
      'Social proof widgets'
    ]
  },
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling & Calendar',
    description: 'Streamline your appointment booking process and maximize efficiency.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPfF0ZgaWDZODIGIKdt9U1KpYYgHYMyJLWyY2stUYFSQDWzK0FlKdYhZW8FELSCgAMWLTXbPrjpf83ioh3D_uvZiIIYcsGDxgvVbLkyLd2r5tuFGuY=w2400',
    icon: Calendar,
    features: [
      'Drag-and-drop scheduling',
      'Automated reminders',
      'Multi-staff calendar',
      'Real-time availability',
      'Online booking'
    ]
  },
  {
    id: 'client-management',
    title: 'Client Management',
    description: 'Keep track of client preferences and build lasting relationships.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPfF0ZgaWDZODIGIKdt9U1KpYYgHYMyJLWyY2stUYFSQDWzK0FlKdYhZW8FELSCgAMWLTXbPrjpf83ioh3D_uvZiIIYcsGDxgvVbLkyLd2r5tuFGuY=w2400',
    icon: MessageSquare,
    features: [
      'Detailed client profiles',
      'Service history tracking',
      'Automated follow-ups',
      'Client feedback system',
      'Loyalty program'
    ]
  },
  {
    id: 'inventory-control',
    title: 'Inventory Control',
    description: 'Take control of your product inventory with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=800&q=80',
    icon: Package,
    features: [
      'Real-time tracking',
      'Auto reorder alerts',
      'Usage analytics',
      'Barcode scanning',
      'Supplier management'
    ]
  }
];