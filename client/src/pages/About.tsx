import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TestimonialCard from "@/components/TestimonialCard";
import { getAllTestimonials } from "@/data/testimonials";

export default function About() {
  const allTestimonials = getAllTestimonials();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-warm-gold text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                About Taj India Tour & Travel
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Your trusted partner for authentic Indian travel experiences since 2008
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-white text-royal-blue px-4 py-2">
                  <i className="fas fa-award mr-2"></i>
                  15+ Years Experience
                </Badge>
                <Badge className="bg-white text-royal-blue px-4 py-2">
                  <i className="fas fa-users mr-2"></i>
                  250+ Happy Customers
                </Badge>
                <Badge className="bg-white text-royal-blue px-4 py-2">
                  <i className="fas fa-star mr-2"></i>
                  4.9/5 Rating
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-royal-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => window.open("tel:+919876543210")}
                >
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Taj Mahal at sunset"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                  <span className="text-royal-blue font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-warm-gray">Google Reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-6">
              Our Story
            </h2>
            <p className="text-lg text-warm-gray leading-relaxed">
              Founded in 2008 with a passion for showcasing India's incredible heritage, Taj India Tour and Travel has grown from a small local business to one of the most trusted tour operators in North India. Our mission is simple: to provide authentic, memorable, and hassle-free travel experiences that showcase the real India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "2008",
                title: "Humble Beginnings",
                description: "Started as a small family business with a vision to share India's beauty with the world"
              },
              {
                year: "2015", 
                title: "Digital Transformation",
                description: "Embraced technology to enhance customer experience and streamline booking processes"
              },
              {
                year: "2025",
                title: "Trusted Leader",
                description: "Now serving 250+ satisfied customers annually with a 4.9/5 star rating"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{milestone.title}</h3>
                <p className="text-warm-gray">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-soft-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              We are committed to providing exceptional travel experiences while preserving India's cultural heritage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-heart",
                title: "Passion",
                description: "We love what we do and it shows in every experience we create"
              },
              {
                icon: "fas fa-handshake",
                title: "Trust",
                description: "Building lasting relationships through transparency and reliability"
              },
              {
                icon: "fas fa-leaf",
                title: "Sustainability",
                description: "Promoting responsible tourism that benefits local communities"
              },
              {
                icon: "fas fa-star",
                title: "Excellence",
                description: "Continuously striving to exceed our customers' expectations"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-warm-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-4">{value.title}</h3>
                <p className="text-warm-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Our experienced professionals are dedicated to making your Indian adventure unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Naresh Sharma",
                role: "Senior Tour Guide",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
                experience: "12+ years",
                speciality: "Golden Triangle Tours"
              },
              {
                name: "Mohib Khan", 
                role: "Cultural Expert",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
                experience: "10+ years",
                speciality: "Rajasthan Heritage"
              },
              {
                name: "Sanjay Kumar",
                role: "Professional Driver",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
                experience: "15+ years",
                speciality: "Safe & Comfortable Travel"
              },
              {
                name: "Priya Patel",
                role: "Travel Coordinator",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
                experience: "8+ years",
                speciality: "Customer Relations"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-soft-cream p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold text-royal-blue mb-2">{member.name}</h3>
                <p className="text-warm-gold font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-warm-gray mb-1">{member.experience}</p>
                <p className="text-sm text-warm-gray">{member.speciality}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Business Rating Section */}
      <section className="py-16 bg-royal-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Travelers Worldwide
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              See what our customers say about their experiences with us
            </p>
            
            {/* Google Rating Display */}
            <div className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-lg">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google" 
                className="w-8 h-8 mr-3"
              />
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-lg"></i>
                ))}
              </div>
              <span className="text-royal-blue font-bold text-xl">4.9/5</span>
              <span className="text-warm-gray ml-3 text-lg">(250+ reviews)</span>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://g.co/kgs/nnx5xEn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/90 hover:text-white transition-colors"
              >
                <span className="font-semibold mr-2">View all reviews on Google Business</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              What Our Customers Say
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Real experiences from real travelers who have journeyed with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                {...testimonial} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-blue to-warm-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our expert team today and let us help you create memories that will last a lifetime
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <i className="fas fa-phone text-3xl mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-white/90">+91 98765 43210</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <i className="fas fa-envelope text-3xl mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-white/90">info@tajindiatour.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <i className="fas fa-map-marker-alt text-3xl mb-4"></i>
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-white/90">New Delhi, India</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                className="bg-white text-royal-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open("tel:+919876543210")}
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors"
                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
