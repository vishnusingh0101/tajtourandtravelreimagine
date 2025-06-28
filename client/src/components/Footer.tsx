import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Booking", href: "/booking" },
  ];

  const popularTours = [
    "Golden Triangle Tour",
    "Same Day Agra Tour", 
    "Same Day Jaipur Tour",
    "Delhi Vrindavan Package",
    "Rajasthan Cultural Tour",
    "Kerala Backwaters",
  ];

  const paymentMethods = [
    { name: "Visa", icon: "fab fa-cc-visa", color: "text-blue-600" },
    { name: "MasterCard", icon: "fab fa-cc-mastercard", color: "text-red-600" },
    { name: "Paytm", icon: "fas fa-mobile-alt", color: "text-blue-600" },
    { name: "UPI", icon: "fas fa-university", color: "text-orange-600" },
    { name: "GPay", icon: "fab fa-google-pay", color: "text-blue-600" },
    { name: "PayPal", icon: "fab fa-paypal", color: "text-blue-600" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: "fab fa-facebook-f", href: "#", color: "bg-blue-600 hover:bg-blue-500" },
    { name: "Instagram", icon: "fab fa-instagram", href: "#", color: "bg-pink-600 hover:bg-pink-500" },
    { name: "TripAdvisor", icon: "fab fa-tripadvisor", href: "#", color: "bg-green-600 hover:bg-green-500" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", href: "https://wa.me/919876543210", color: "bg-green-500 hover:bg-green-400" },
  ];

  return (
    <footer className="bg-royal-blue text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-yellow-500 rounded-full flex items-center justify-center">
                <i className="fas fa-mosque text-royal-blue text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Taj India Tour</h3>
                <p className="text-sm text-blue-200">& Travel</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Your trusted partner for authentic Indian travel experiences. Discover the magic of India with our expert guides and premium services.
            </p>
            
            {/* Google Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <span className="text-blue-100 text-sm">4.9/5 on Google (250+ reviews)</span>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Popular Tours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              {popularTours.map((tour, index) => (
                <li key={index}>
                  <motion.span
                    className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tour}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-phone mr-3 mt-1 text-warm-gold"></i>
                <div>
                  <p className="font-semibold">+91 98765 43210</p>
                  <p className="text-sm text-blue-100">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope mr-3 mt-1 text-warm-gold"></i>
                <div>
                  <p>info@tajindiatour.com</p>
                  <p className="text-sm text-blue-100">Email Support</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 mt-1 text-warm-gold"></i>
                <div>
                  <p>New Delhi, India</p>
                  <p className="text-sm text-blue-100">Head Office</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Payment Options */}
        <motion.div 
          className="border-t border-blue-600 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-center">Secure Payment Options</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white rounded px-3 py-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <i className={`${method.icon} ${method.color} text-2xl`}></i>
                <span className="text-royal-blue font-semibold">{method.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="inline-flex items-center text-green-400">
              <i className="fas fa-shield-alt mr-2"></i>
              <span className="text-sm">100% Secure Payments</span>
            </span>
          </div>
        </motion.div>
        
        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-blue-600 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 mb-4 md:mb-0">
              © 2025 Taj India Tour and Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
