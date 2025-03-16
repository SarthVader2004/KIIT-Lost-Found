
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ItemCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  time: string;
  image_url?: string;
  status: 'lost' | 'found';
  index?: number;
}

const ItemCard = ({
  id,
  title,
  description,
  category,
  location,
  date,
  time,
  image_url,
  status,
  index = 0
}: ItemCardProps) => {
  // Default image if none provided
  const itemImage = image_url || 'https://via.placeholder.com/300?text=No+Image';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden"
    >
      <div className="relative">
        {/* Background gradient overlay */}
        <div 
          className={cn(
            "absolute inset-0 z-10 opacity-50",
            status === 'lost' 
              ? "bg-gradient-to-r from-orange-100/50 to-amber-100/50 dark:from-orange-900/30 dark:to-amber-900/30"
              : "bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/30 dark:to-emerald-900/30"
          )}
        />
        
        {/* Status badge */}
        <div className={cn(
          "absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-medium",
          status === 'lost' 
            ? "bg-orange-500/90 text-white" 
            : "bg-emerald-500/90 text-white"
        )}>
          {status === 'lost' ? 'Lost' : 'Found'}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white">
          {category}
        </div>
        
        {/* Image */}
        <img 
          src={itemImage} 
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-1 mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-kiit-green" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-kiit-green" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-kiit-green" />
            <span>{time}</span>
          </div>
        </div>
        
        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
          <Link 
            to={`/item/${id}`}
            className="text-kiit-green font-medium text-sm hover:text-kiit-dark transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
