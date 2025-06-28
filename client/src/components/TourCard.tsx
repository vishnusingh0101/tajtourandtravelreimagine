import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface TourCardProps {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  category: string;
  spotsLeft?: number;
  isPopular?: boolean;
}

export default function TourCard({
  id,
  title,
  price,
  duration,
  description,
  image,
  category,
  spotsLeft,
  isPopular
}: TourCardProps) {
  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "Popular": return "default";
      case "Cultural": return "secondary";
      case "Spiritual": return "outline";
      case "Nature": return "outline";
      default: return "secondary";
    }
  };

  const getAvailabilityBadge = () => {
    if (spotsLeft && spotsLeft <= 5) {
      return (
        <Badge variant="destructive" className="bg-red-100 text-rich-crimson">
          {spotsLeft} spots left
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-green-100 text-green-700">
        Available
      </Badge>
    );
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {isPopular && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-warm-gold text-royal-blue">
              Popular
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-ocean-blue">{title}</h3>
          {getAvailabilityBadge()}
        </div>
        
        <p className="text-mocha-mousse mb-4">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-mocha-mousse">
            <i className="fas fa-clock mr-1"></i>
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-mocha-mousse">
            <i className="fas fa-users mr-1"></i>
            <span>2-8 People</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-sunset-orange">₹{price.toLocaleString()}</span>
            <span className="text-sm text-mocha-mousse">/person</span>
          </div>
          <Link href="/booking">
            <Button className="bg-sunset-orange text-white hover:bg-orange-600 rounded-full conversion-gradient">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
