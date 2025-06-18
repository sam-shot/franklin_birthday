import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { allPhotos, CardData } from "@/lib/card-data";

interface BirthdayCardProps {
  card: CardData;
  index: number;
  isActive: boolean;
  onSwipe: (direction: string) => void;
  onPhotoChange: (photoIndex: number) => void;
  currentPhotoIndex: number;
}

export function BirthdayCard({ 
  card, 
  index, 
  isActive, 
  onSwipe, 
  onPhotoChange, 
  currentPhotoIndex 
}: BirthdayCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-200, 200], [30, -30]);
  const rotateY = useTransform(x, [-200, 200], [-30, 30]);
  const rotateZ = useTransform(x, [-200, 200], [-15, 15]);
  
  const opacity = useTransform(
    [x, y],
    (latest) => {
      const distance = Math.sqrt(latest[0] ** 2 + latest[1] ** 2);
      return Math.max(0.3, 1 - distance / 300);
    }
  );
  
  const scale = useTransform(
    [x, y],
    (latest) => {
      const distance = Math.sqrt(latest[0] ** 2 + latest[1] ** 2);
      return Math.max(0.95, 1 - distance * 0.0005);
    }
  );

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    const threshold = 100;
    const { offset, velocity } = info;
    
    const distance = Math.sqrt(offset.x ** 2 + offset.y ** 2);
    
    if (distance > threshold || Math.abs(velocity.x) > 500 || Math.abs(velocity.y) > 500) {
      // Determine swipe direction
      let direction = 'right';
      if (Math.abs(offset.x) > Math.abs(offset.y)) {
        direction = offset.x > 0 ? 'right' : 'left';
      } else {
        direction = offset.y > 0 ? 'down' : 'up';
      }
      
      onSwipe(direction);
    }
  };

  const handlePhotoNavigation = (direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isActive) return;
    
    if (direction === 'prev') {
      const newIndex = (currentPhotoIndex - 1 + card.photos.length) % card.photos.length;
      onPhotoChange(newIndex);
    } else {
      const newIndex = (currentPhotoIndex + 1) % card.photos.length;
      onPhotoChange(newIndex);
    }
  };

  const handlePhotoDotClick = (photoIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isActive) return;
    onPhotoChange(photoIndex);
  };

  const cardStyle = {
    background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`,
    transform: `scale(${1 - index * 0.05}) translateY(${index * 4}px)`,
    zIndex: 10 - index,
    opacity: index === 0 ? 1 : 0.8,
  };

  return (
    <motion.div
      className={`absolute inset-0 rounded-3xl card-shadow overflow-hidden cursor-grab active:cursor-grabbing ${
        isDragging ? 'dragging' : ''
      }`}
      style={cardStyle}
      drag={isActive}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      whileHover={isActive ? { 
        scale: 1.02, 
        y: -2,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      } : {}}
      animate={isActive ? {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        opacity: 1
      } : {}}
      exit={{
        x: x.get() > 0 ? 1000 : -1000,
        y: y.get() > 0 ? 1000 : -1000,
        rotateZ: x.get() * 0.3,
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.div 
        className="relative w-full h-full"
        style={{
          rotateX: isActive ? rotateX : 0,
          rotateY: isActive ? rotateY : 0,
          rotateZ: isActive ? rotateZ : 0,
          scale: isActive ? scale : 1,
          opacity: isActive ? opacity : 1,
        }}
      >
        {/* Photo Section */}
        <div className="relative w-full h-1/2 overflow-hidden">
          <motion.img 
            src={allPhotos[currentPhotoIndex]} 
            alt="Birthday celebration photo" 
            className="w-full h-full object-cover photo-transition"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Photo Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {allPhotos.map((_, photoIndex) => (
              <button
                key={photoIndex}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  photoIndex === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => handlePhotoDotClick(photoIndex, e)}
              />
            ))}
          </div>
          
          {/* Photo Navigation Areas */}
          <div className="absolute inset-0 flex">
            <button 
              className="w-1/2 h-full"
              onClick={(e) => handlePhotoNavigation('prev', e)}
            />
            <button 
              className="w-1/2 h-full"
              onClick={(e) => handlePhotoNavigation('next', e)}
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="relative w-full h-1/2 p-6 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Happy Birthday! 🎉
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium drop-shadow">
              {card.wish}
            </p>
          </div>
          
          {/* Card number indicator */}
          <div className="absolute bottom-4 right-4 text-white/60 text-sm font-semibold">
            {card.id}/10
          </div>
        </div>
        
        {/* Drag handle indicator */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
      </motion.div>
      
      {/* Swipe Indicators */}
      {isDragging && (
        <>
          <div className="swipe-indicator absolute -top-8 left-1/2 transform -translate-x-1/2 text-white font-semibold">
            <div className="flex items-center space-x-2">
              <span>↑</span>
              <span className="text-sm">Love it!</span>
            </div>
          </div>
          <div className="swipe-indicator absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold">
            <div className="flex items-center space-x-2">
              <span>↓</span>
              <span className="text-sm">Save for later</span>
            </div>
          </div>
          <div className="swipe-indicator absolute top-1/2 -left-12 transform -translate-y-1/2 text-white font-semibold">
            <div className="flex items-center space-x-2">
              <span>←</span>
              <span className="text-sm">Skip</span>
            </div>
          </div>
          <div className="swipe-indicator absolute top-1/2 -right-12 transform -translate-y-1/2 text-white font-semibold">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Next</span>
              <span>→</span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
