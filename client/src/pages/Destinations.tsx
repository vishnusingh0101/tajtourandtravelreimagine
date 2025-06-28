import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Destinations() {
  const destinations = [
    {
      id: "delhi",
      name: "Delhi",
      description: "India's historic capital with magnificent Mughal architecture",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Red Fort", "India Gate", "Lotus Temple", "Qutub Minar"],
      discount: null
    },
    {
      id: "agra", 
      name: "Agra",
      description: "Home to the iconic Taj Mahal and UNESCO World Heritage sites",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Itimad-ud-Daulah"],
      discount: "15% OFF"
    },
    {
      id: "jaipur",
      name: "Jaipur",
      description: "The Pink City with royal palaces and vibrant markets",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar"],
      discount: null
    },
    {
      id: "vrindavan",
      name: "Vrindavan", 
      description: "Sacred city of Lord Krishna with ancient temples",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Banke Bihari Temple", "ISKCON Temple", "Prem Mandir", "Radha Raman Temple"],
      discount: "20% OFF"
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      description: "Yoga capital of the world nestled in the Himalayas",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat", "Neelkanth Mahadev"],
      discount: null
    },
    {
      id: "varanasi",
      name: "Varanasi",
      description: "One of the world's oldest cities and spiritual center", 
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath", "Ganga Aarti"],
      discount: null
    },
    {
      id: "kerala",
      name: "Kerala",
      description: "God's own country with backwaters and spice plantations",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Alleppey Backwaters", "Munnar Hills", "Kochi Fort", "Spice Gardens"],
      discount: "25% OFF"
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      description: "Land of kings with majestic forts and desert landscapes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Udaipur Lakes", "Jodhpur Fort", "Jaisalmer Desert", "Mount Abu"],
      discount: null
    },
    {
      id: "goa",
      name: "Goa", 
      description: "Beach paradise with Portuguese heritage and vibrant culture",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      highlights: ["Baga Beach", "Basilica of Bom Jesus", "Dudhsagar Falls", "Old Goa Churches"],
      discount: "30% OFF"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-warm-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Amazing Destinations
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore India's most captivating destinations, each with its unique charm and cultural heritage
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Popular Destinations
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              From historic monuments to spiritual centers, discover the diverse beauty of India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {destination.discount && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="bg-rich-crimson text-white">
                        {destination.discount}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-royal-blue mb-3">{destination.name}</h3>
                  <p className="text-warm-gray mb-4">{destination.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-royal-blue mb-2">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-warm-gray">
                          <i className="fas fa-check text-green-600 mr-2"></i>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link href="/tours" className="flex-1">
                      <Button className="w-full bg-royal-blue hover:bg-blue-800 text-white">
                        <i className="fas fa-eye mr-2"></i>
                        View Tours
                      </Button>
                    </Link>
                    <Link href="/booking" className="flex-1">
                      <Button variant="outline" className="w-full border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white">
                        <i className="fas fa-calendar-plus mr-2"></i>
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Ready to Explore India?
            </h2>
            <p className="text-warm-gray text-lg mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect itinerary to experience India's incredible diversity and rich cultural heritage
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button className="bg-warm-gold text-royal-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors">
                  <i className="fas fa-map-marked-alt mr-2"></i>
                  Browse All Packages
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-2 border-royal-blue text-royal-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-royal-blue hover:text-white transition-colors"
                onClick={() => window.open("tel:+919876543210")}
              >
                <i className="fas fa-phone mr-2"></i>
                Call Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
