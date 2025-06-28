import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  location,
  avatar,
  rating,
  review,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex text-yellow-400 mb-4">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
      <p className="text-warm-gray mb-6 italic">
        "{review}"
      </p>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-royal-blue">{name}</h4>
          <p className="text-sm text-warm-gray">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
