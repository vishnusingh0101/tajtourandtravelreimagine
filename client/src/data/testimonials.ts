export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  tourPackage: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    rating: 5,
    review: "Absolutely amazing experience! Our guide Naresh was incredibly knowledgeable and the photography services were outstanding. The Golden Triangle tour exceeded all expectations.",
    tourPackage: "Golden Triangle Tour"
  },
  {
    id: "2", 
    name: "Michael Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    rating: 5,
    review: "Professional drivers, luxury cars, and stress-free planning. Mohib was an excellent guide who made our Same Day Agra tour unforgettable. Highly recommended!",
    tourPackage: "Same Day Agra Tour"
  },
  {
    id: "3",
    name: "Emma Rodriguez", 
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    rating: 5,
    review: "From booking to completion, everything was perfectly organized. The Jaipur tour was magical and our driver Sanjay was both professional and friendly. Thank you!",
    tourPackage: "Same Day Jaipur Tour"
  },
  {
    id: "4",
    name: "David Thompson",
    location: "London, UK", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    rating: 5,
    review: "The spiritual journey to Vrindavan was transformative. Our guide explained the religious significance beautifully, and the temple visits were deeply moving.",
    tourPackage: "Delhi Vrindavan Package"
  },
  {
    id: "5",
    name: "Lisa Wang",
    location: "Melbourne, Australia",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    rating: 5,
    review: "The Rajasthan cultural tour was incredible! Every detail was well planned, from the palace hotels to the folk performances. A truly royal experience.",
    tourPackage: "Rajasthan Cultural Tour"
  },
  {
    id: "6",
    name: "James Miller",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    rating: 5,
    review: "Kerala backwaters cruise was like a dream. The houseboat was comfortable, food was delicious, and the scenery was breathtaking. Perfect for relaxation.",
    tourPackage: "Kerala Backwaters Tour"
  }
];

export const getFeaturedTestimonials = () => testimonials.slice(0, 3);
export const getAllTestimonials = () => testimonials;
export const getTestimonialsByTour = (tourPackage: string) => 
  testimonials.filter(testimonial => testimonial.tourPackage === tourPackage);
