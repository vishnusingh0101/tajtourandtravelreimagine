import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TourCard from "@/components/TourCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getPopularTours } from "@/data/tours";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const popularTours = getPopularTours();
  const featuredTestimonials = getFeaturedTestimonials();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="hero-gradient absolute inset-0"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-serif mb-6 animate-float"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover India with Ease
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience the magic of Golden Triangle tours with expert guides and luxury comfort
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/packages">
              <Button className="bg-sunset-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 conversion-gradient">
                <i className="fas fa-map-marked-alt mr-2"></i>
                View Packages
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-ocean-blue transition-all"
              onClick={() => window.open("tel:+919876543210")}
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users mr-2"></i>
              <span>250+ Happy Customers</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-award mr-2"></i>
              <span>15+ Years Experience</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </motion.div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue font-serif mb-4">
              Awesome Packages
            </h2>
            <p className="text-xl text-warm-gray max-w-2xl mx-auto">
              Discover India's most iconic destinations with our carefully curated tour packages
            </p>
            
            <div className="mt-6 inline-flex items-center bg-red-50 text-rich-crimson px-4 py-2 rounded-full">
              <i className="fas fa-fire mr-2 animate-pulse"></i>
              <span className="font-semibold">Limited spots available - Book now!</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TourCard {...tour} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/packages">
              <Button className="bg-warm-gold text-royal-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors">
                View All Packages
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue font-serif mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-warm-gray max-w-2xl mx-auto">
              Experience the difference with our professional services and authentic local expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-car",
                title: "Private Car Rentals",
                description: "Luxury AC vehicles with professional drivers for comfortable journeys"
              },
              {
                icon: "fas fa-user-tie", 
                title: "Expert Travel Guides",
                description: "Licensed local guides with deep knowledge of history and culture"
              },
              {
                icon: "fas fa-tags",
                title: "Best Price Guarantee", 
                description: "Competitive pricing with no hidden costs and transparent booking"
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description: "Round-the-clock assistance for any travel queries or emergencies"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-lg card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-warm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-4">{feature.title}</h3>
                <p className="text-warm-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "250+", label: "Happy Customers" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Tour Packages" },
              { number: "99%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-royal-blue mb-2">{stat.number}</div>
                <div className="text-warm-gray">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue font-serif mb-4">
              How It Works
            </h2>
            <p className="text-xl text-warm-gray max-w-2xl mx-auto">
              Simple steps to book your dream Indian adventure
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {[
                {
                  step: 1,
                  title: "Choose Your Package",
                  description: "Browse our curated tours and select the perfect package for your preferences"
                },
                {
                  step: 2,
                  title: "Book & Customize", 
                  description: "Fill out the booking form and customize your itinerary according to your needs"
                },
                {
                  step: 3,
                  title: "Enjoy Your Journey",
                  description: "Relax and enjoy your tour with our professional guides and luxury transportation"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center mb-8 md:mb-0 flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-royal-blue to-warm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-royal-blue mb-4">{item.title}</h3>
                  <p className="text-warm-gray">{item.description}</p>
                  
                  {index < 2 && (
                    <div className="hidden md:block text-warm-gold text-3xl mx-4 mt-8">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-royal-blue font-serif mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-warm-gray max-w-2xl mx-auto">
              See what our travelers say about their experiences with us
            </p>
            
            <div className="mt-6 inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google" 
                className="w-6 h-6 mr-2"
              />
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span className="text-royal-blue font-semibold">4.9/5</span>
              <span className="text-warm-gray ml-2">(250+ reviews)</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                {...testimonial} 
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://g.co/kgs/nnx5xEn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-royal-blue hover:text-blue-800 transition-colors"
            >
              <span className="font-semibold mr-2">View all 250+ reviews on Google</span>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-warm-gold">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for Your Dream Adventure?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book your Indian tour today and create memories that will last a lifetime
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/booking">
              <Button className="bg-white text-royal-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                <i className="fas fa-calendar-check mr-2"></i>
                Book Your Tour Today
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            >
              <i className="fas fa-whatsapp mr-2"></i>
              WhatsApp Us
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-2">Call us now for instant booking</p>
            <p className="text-2xl font-bold">+91 98765 43210</p>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        className={`fixed bottom-6 left-6 z-40 w-12 h-12 bg-royal-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all transform hover:scale-110 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-chevron-up"></i>
      </motion.button>
    </div>
  );
}
