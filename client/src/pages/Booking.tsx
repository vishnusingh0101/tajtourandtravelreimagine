import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

export default function Booking() {
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
            Book Your Dream Tour
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start your incredible journey through India with our easy and secure booking process
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-8 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center">
              <i className="fas fa-shield-alt mr-2"></i>
              <span>Secure Booking</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock mr-2"></i>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users mr-2"></i>
              <span>Expert Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-royal-blue mb-4">
                  Book Your Tour in 3 Easy Steps
                </h2>
                <p className="text-warm-gray text-lg">
                  Fill out the form below and our team will contact you within 24 hours to confirm your booking
                </p>
              </div>
              
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Book With Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Why Book With Us?
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Experience the difference with our professional services and commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-star",
                title: "5-Star Rated",
                description: "4.9/5 rating from 250+ satisfied customers",
                color: "bg-yellow-100 text-yellow-700"
              },
              {
                icon: "fas fa-shield-check",
                title: "100% Secure",
                description: "Safe and secure payment processing",
                color: "bg-green-100 text-green-700"
              },
              {
                icon: "fas fa-undo",
                title: "Free Cancellation",
                description: "Cancel up to 24 hours before departure",
                color: "bg-blue-100 text-blue-700"
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description: "Round-the-clock customer assistance",
                color: "bg-purple-100 text-purple-700"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{feature.title}</h3>
                <p className="text-warm-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-soft-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Our travel experts are available to help you plan your perfect Indian adventure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "fas fa-phone",
                title: "Call Us",
                info: "+91 98765 43210",
                description: "Speak with our travel experts",
                action: "tel:+919876543210",
                color: "bg-blue-600"
              },
              {
                icon: "fab fa-whatsapp",
                title: "WhatsApp",
                info: "+91 98765 43210",
                description: "Quick chat for instant replies",
                action: "https://wa.me/919876543210",
                color: "bg-green-500"
              },
              {
                icon: "fas fa-envelope",
                title: "Email Us",
                info: "info@tajindiatour.com",
                description: "Send us your detailed requirements",
                action: "mailto:info@tajindiatour.com",
                color: "bg-purple-600"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${contact.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-2">{contact.title}</h3>
                <p className="text-lg font-semibold text-warm-gray mb-2">{contact.info}</p>
                <p className="text-sm text-warm-gray mb-6">{contact.description}</p>
                <a 
                  href={contact.action}
                  target={contact.action.startsWith('http') ? "_blank" : undefined}
                  rel={contact.action.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`inline-block ${contact.color} text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity`}
                >
                  Contact Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-royal-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Find answers to common questions about booking and traveling with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I confirm my booking?",
                answer: "After submitting the form, our team will contact you within 24 hours to confirm details and process payment."
              },
              {
                question: "What is included in the tour packages?",
                answer: "Our packages typically include transportation, accommodation, guided tours, entrance fees, and daily breakfast. Specific inclusions vary by package."
              },
              {
                question: "Can I customize my itinerary?",
                answer: "Yes! We offer flexible itineraries that can be customized according to your preferences, budget, and time constraints."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We offer free cancellation up to 24 hours before departure. For longer tours, different terms may apply - our team will clarify during booking."
              },
              {
                question: "Do you provide travel insurance?",
                answer: "While we don't provide insurance directly, we strongly recommend purchasing travel insurance and can guide you to reliable providers."
              },
              {
                question: "Are your guides licensed?",
                answer: "Yes, all our guides are licensed professionals with extensive knowledge of local history, culture, and languages."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-soft-cream p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-royal-blue mb-3">{faq.question}</h3>
                <p className="text-warm-gray">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
