export interface Tour {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  category: string;
  spotsLeft?: number;
  isPopular?: boolean;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export const tours: Tour[] = [
  {
    id: "golden-triangle",
    title: "Golden Triangle Tour",
    price: 9500,
    duration: "4 Days",
    description: "Explore Delhi, Agra, and Jaipur in 4 unforgettable days with expert guides",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Popular",
    spotsLeft: 8,
    isPopular: true,
    highlights: [
      "Taj Mahal sunrise visit",
      "Red Fort and Jama Masjid",
      "Hawa Mahal and City Palace",
      "Amber Fort elephant ride"
    ],
    inclusions: [
      "AC car with driver",
      "Professional guide",
      "3 nights accommodation",
      "All entrance fees",
      "Daily breakfast"
    ],
    exclusions: [
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Sightseeing",
        description: "Visit Red Fort, Jama Masjid, India Gate, and Qutub Minar"
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description: "Drive to Agra, visit Taj Mahal and Agra Fort"
      },
      {
        day: 3,
        title: "Agra to Jaipur",
        description: "Drive to Jaipur via Fatehpur Sikri, evening free"
      },
      {
        day: 4,
        title: "Jaipur Sightseeing and Return",
        description: "Visit Amber Fort, City Palace, Hawa Mahal, return to Delhi"
      }
    ]
  },
  {
    id: "same-day-agra",
    title: "Same Day Agra Tour",
    price: 4500,
    duration: "1 Day",
    description: "Visit the magnificent Taj Mahal and Agra Fort in a comfortable day trip from Delhi",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Heritage",
    spotsLeft: 3,
    isPopular: true,
    highlights: [
      "Taj Mahal guided tour",
      "Agra Fort exploration",
      "Local handicrafts shopping",
      "Traditional lunch"
    ],
    inclusions: [
      "AC car with driver",
      "Professional guide",
      "All entrance fees",
      "Mineral water",
      "Lunch at 5-star hotel"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Shopping expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Agra Tour",
        description: "Early morning departure, Taj Mahal visit, lunch, Agra Fort, return to Delhi by evening"
      }
    ]
  },
  {
    id: "same-day-jaipur",
    title: "Same Day Jaipur Tour",
    price: 3800,
    duration: "1 Day",
    description: "Discover the Pink City's royal palaces and vibrant markets in one amazing day",
    image: "https://images.unsplash.com/photo-1599661046827-dacde5ac2671?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Royal",
    spotsLeft: 12,
    isPopular: false,
    highlights: [
      "Amber Fort and Palace",
      "City Palace complex",
      "Hawa Mahal photo stop",
      "Local markets visit"
    ],
    inclusions: [
      "AC car with driver",
      "Professional guide",
      "All entrance fees",
      "Mineral water",
      "Traditional lunch"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Shopping expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Jaipur Tour",
        description: "Early departure, Amber Fort, City Palace, Hawa Mahal, local markets, return to Delhi"
      }
    ]
  },
  {
    id: "delhi-vrindavan",
    title: "Delhi Vrindavan Package",
    price: 6200,
    duration: "2 Days",
    description: "Experience divine spirituality in Krishna's birthplace with temple visits and cultural immersion",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Spiritual",
    spotsLeft: 6,
    isPopular: false,
    highlights: [
      "Banke Bihari Temple",
      "ISKCON Temple visit",
      "Prem Mandir darshan",
      "Evening aarti ceremony"
    ],
    inclusions: [
      "AC car with driver",
      "Professional guide",
      "1 night accommodation",
      "All entrance fees",
      "Daily breakfast",
      "Temple prasadam"
    ],
    exclusions: [
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Donations to temples"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Vrindavan",
        description: "Drive to Vrindavan, visit Banke Bihari Temple, ISKCON Temple, evening aarti"
      },
      {
        day: 2,
        title: "Vrindavan and Return",
        description: "Prem Mandir visit, local markets, return to Delhi"
      }
    ]
  },
  {
    id: "rajasthan-cultural",
    title: "Rajasthan Cultural Tour",
    price: 18500,
    duration: "7 Days",
    description: "Immerse yourself in royal heritage, folk music, and traditional arts of Rajasthan",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Cultural",
    spotsLeft: 15,
    isPopular: false,
    highlights: [
      "Palace hotels stay",
      "Folk dance performances",
      "Camel safari in Thar",
      "Rajasthani cuisine"
    ],
    inclusions: [
      "AC car with driver",
      "Professional guide",
      "6 nights accommodation",
      "All entrance fees",
      "Daily breakfast",
      "Cultural shows",
      "Camel safari"
    ],
    exclusions: [
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Shopping expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Airport pickup, hotel check-in, City Palace visit"
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Amber Fort, Hawa Mahal, local markets"
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Drive to Jodhpur, Mehrangarh Fort visit"
      },
      {
        day: 4,
        title: "Jodhpur to Jaisalmer",
        description: "Drive to Jaisalmer, evening at leisure"
      },
      {
        day: 5,
        title: "Jaisalmer Sightseeing",
        description: "Golden Fort, Patwon Ki Haveli, camel safari"
      },
      {
        day: 6,
        title: "Jaisalmer to Udaipur",
        description: "Drive to Udaipur, City Palace visit"
      },
      {
        day: 7,
        title: "Udaipur and Departure",
        description: "Lake Pichola boat ride, departure"
      }
    ]
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters Tour",
    price: 12800,
    duration: "5 Days",
    description: "Cruise through scenic backwaters on traditional houseboats in God's Own Country",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Nature",
    spotsLeft: 10,
    isPopular: false,
    highlights: [
      "Houseboat cruise",
      "Spice plantation visit",
      "Kathakali performance",
      "Ayurvedic massage"
    ],
    inclusions: [
      "AC car with driver",
      "Professional guide",
      "4 nights accommodation",
      "All entrance fees",
      "Daily breakfast",
      "Houseboat cruise",
      "Traditional meals"
    ],
    exclusions: [
      "Airfare",
      "Personal expenses",
      "Travel insurance",
      "Shopping expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description: "Airport pickup, city tour, Chinese fishing nets"
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        description: "Drive to Munnar, tea plantation visit"
      },
      {
        day: 3,
        title: "Munnar to Alleppey",
        description: "Drive to Alleppey, houseboat check-in"
      },
      {
        day: 4,
        title: "Backwater Cruise",
        description: "Full day backwater cruise, village visits"
      },
      {
        day: 5,
        title: "Departure",
        description: "Check-out, transfer to Kochi airport"
      }
    ]
  }
];

export const getPopularTours = () => tours.filter(tour => tour.isPopular);
export const getTourById = (id: string) => tours.find(tour => tour.id === id);
export const getToursByCategory = (category: string) => tours.filter(tour => tour.category === category);
