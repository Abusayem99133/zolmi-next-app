import type { SuccessStory } from '../types/success';

export const successStories: SuccessStory[] = [
  {
    name: "Level Up Gents Salon",
    location: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    description: "Transformed their booking process and increased customer retention through automated marketing campaigns.",
    stats: [
      { value: "85%", label: "Booking Rate" },
      { value: "2.5x", label: "Revenue Growth" }
    ]
  },
  {
    name: "The Colourist",
    location: "JLT, Dubai",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    description: "Streamlined operations and reduced no-shows with smart scheduling and automated reminders.",
    stats: [
      { value: "-70%", label: "No Shows" },
      { value: "4.9★", label: "Rating" }
    ]
  },
  {
    name: "MK Hair Design",
    location: "Business Bay",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "Expanded from 1 to 3 locations while maintaining consistent service quality and brand standards.",
    stats: [
      { value: "300%", label: "Growth" },
      { value: "98%", label: "Satisfaction" }
    ]
  },
  {
    name: "Skills Barber Shop",
    location: "DIFC",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    description: "Increased average ticket value through better inventory management and client analytics.",
    stats: [
      { value: "+45%", label: "Avg. Value" },
      { value: "92%", label: "Retention" }
    ]
  }
];