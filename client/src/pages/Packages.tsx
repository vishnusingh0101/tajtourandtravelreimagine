import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");

  const categories = ["all", ...Array.from(new Set(tours.map(tour => tour.category.toLowerCase())))];
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-5000", label: "Under ₹5,000" },
    { value: "5000-10000", label: "₹5,000 - ₹10,000" },
    { value: "10000-15000", label: "₹10,000 - ₹15,000" },
    { value: "15000+", label: "Above ₹15,000" }
  ];

  const filteredTours = tours
    .filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || 
                             tour.category.toLowerCase() === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map(p => p.replace("+", ""));
        if (max) {
          matchesPrice = tour.price >= parseInt(min) && tour.price <= parseInt(max);
        } else {
          matchesPrice = tour.price >= parseInt(min);
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
        case "name":
          return a.title.localeCompare(b.title);
        default:
          return b.isPopular ? 1 : -1;
      }
    });

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
            Tour Packages
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose from our extensive collection of carefully crafted tour packages designed for every traveler
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
              <span>100% Secure Booking</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-undo mr-2"></i>
              <span>Free Cancellation</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-headset mr-2"></i>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Tours</label>
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-6 bg-soft-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-royal-blue mb-2">
                {filteredTours.length} Package{filteredTours.length !== 1 ? "s" : ""} Found
              </h2>
              <p className="text-warm-gray">
                Showing results {searchTerm && `for "${searchTerm}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
              </p>
            </div>
            
            {filteredTours.length > 0 && (
              <div className="mt-4 sm:mt-0">
                <Badge variant="outline" className="bg-white">
                  <i className="fas fa-filter mr-2"></i>
                  {filteredTours.length} of {tours.length} packages
                </Badge>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredTours.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="fas fa-search text-6xl text-warm-gray mb-6"></i>
              <h3 className="text-2xl font-bold text-royal-blue mb-4">No packages found</h3>
              <p className="text-warm-gray mb-8">
                Try adjusting your search criteria or browse our popular packages below
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSortBy("popular");
                  }}
                  className="bg-royal-blue hover:bg-blue-800"
                >
                  <i className="fas fa-undo mr-2"></i>
                  Clear All Filters
                </Button>
                <Link href="/tours">
                  <Button variant="outline" className="border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white">
                    <i className="fas fa-eye mr-2"></i>
                    Browse All Tours
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TourCard {...tour} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Special Offers Section */}
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
              Special Offers
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Don't miss these limited-time deals on our most popular packages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Early Bird Discount",
                description: "Book 30 days in advance and save up to 20%",
                icon: "fas fa-early-bird",
                color: "bg-green-100 text-green-700"
              },
              {
                title: "Group Booking",
                description: "Special rates for groups of 6 or more travelers",
                icon: "fas fa-users",
                color: "bg-blue-100 text-blue-700"
              },
              {
                title: "Honeymoon Special",
                description: "Romantic packages with exclusive perks for couples",
                icon: "fas fa-heart",
                color: "bg-pink-100 text-pink-700"
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                className="bg-soft-cream p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${offer.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${offer.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-3">{offer.title}</h3>
                <p className="text-warm-gray">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-blue to-warm-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our travel experts are here to help you find the perfect package for your dream vacation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-royal-blue px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open("tel:+919876543210")}
              >
                <i className="fas fa-phone mr-2"></i>
                Call Our Experts
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-royal-blue transition-colors"
                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
