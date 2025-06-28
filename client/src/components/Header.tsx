import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ocean-blue to-sunset-orange rounded-full flex items-center justify-center">
                <i className="fas fa-mosque text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-ocean-blue font-serif">Taj India Tour</h1>
                <p className="text-xs text-mocha-mousse">& Travel</p>
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  className={`cursor-pointer transition-colors ${
                    location === item.href 
                      ? "text-ocean-blue font-semibold" 
                      : "text-gray-700 hover:text-ocean-blue"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>
          
          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-ocean-blue">+91 98765 43210</p>
              <p className="text-xs text-mocha-mousse">24/7 Support</p>
            </div>
            <Link href="/booking">
              <Button className="bg-sunset-orange text-white hover:bg-orange-600 rounded-full conversion-gradient">
                Book Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-ocean-blue">
                <i className="fas fa-bars text-2xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80" aria-describedby="mobile-nav-description">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-ocean-blue to-sunset-orange rounded-full flex items-center justify-center">
                    <i className="fas fa-mosque text-white text-sm"></i>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-ocean-blue">Taj India Tour</h2>
                    <p className="text-xs text-mocha-mousse">& Travel</p>
                  </div>
                </div>
                <p id="mobile-nav-description" className="sr-only">
                  Mobile navigation menu for Taj India Tour and Travel website
                </p>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <motion.span
                        className={`block text-lg cursor-pointer transition-colors ${
                          location === item.href 
                            ? "text-ocean-blue font-semibold" 
                            : "text-gray-700 hover:text-ocean-blue"
                        }`}
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  ))}
                </nav>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-lg font-semibold text-royal-blue mb-2">+91 98765 43210</p>
                  <p className="text-sm text-warm-gray mb-4">24/7 Support</p>
                  <Link href="/booking">
                    <Button 
                      className="w-full bg-rich-crimson text-white hover:bg-red-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
