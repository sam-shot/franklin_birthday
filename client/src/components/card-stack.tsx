import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BirthdayCard } from "./birthday-card";
import { cardData, preloadImages } from "@/lib/card-data";
import { Button } from "@/components/ui/button";

export function CardStack() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [swipedCards, setSwipedCards] = useState<number[]>([]);

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    // Update background based on current card
    const currentCard = cardData[currentCardIndex];
    if (currentCard) {
      document.body.style.background = `linear-gradient(135deg, ${currentCard.darkColor}, ${currentCard.color}66)`;
    }
  }, [currentCardIndex]);

  const handleSwipe = (direction: string) => {
    console.log(`Card swiped ${direction}`);
    setSwipedCards(prev => [...prev, currentCardIndex]);
    
    if (currentCardIndex < cardData.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setCurrentPhotoIndex(0);
    }
  };

  const handlePhotoChange = (photoIndex: number) => {
    setCurrentPhotoIndex(photoIndex);
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setCurrentPhotoIndex(0);
      setSwipedCards(prev => prev.filter(index => index !== currentCardIndex - 1));
    }
  };

  const handleNext = () => {
    if (currentCardIndex < cardData.length - 1) {
      setSwipedCards(prev => [...prev, currentCardIndex]);
      setCurrentCardIndex(prev => prev + 1);
      setCurrentPhotoIndex(0);
    }
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setCurrentPhotoIndex(0);
    setSwipedCards([]);
  };

  const isCompleted = currentCardIndex >= cardData.length;

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="text-center mb-8 animate-bounce-subtle">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
          🎂 Franklin's Birthday 🎂
        </h1>
        <p className="text-white/80 text-lg font-medium drop-shadow">
          Swipe the cards in any direction!
        </p>
      </div>

      {/* Card Stack Container */}
      <div className="relative w-80 md:w-96 h-[480px] md:h-[540px]">
        {isCompleted ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20">
            <div className="text-center text-white p-8">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-3xl font-bold mb-4">All wishes sent!</h2>
              <p className="text-lg mb-6 opacity-90">Hope you enjoyed Franklin's birthday cards!</p>
              <Button 
                onClick={handleReset}
                className="bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-200"
              >
                Start Over
              </Button>
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {cardData
              .slice(currentCardIndex, currentCardIndex + 3)
              .map((card, stackIndex) => {
                const actualIndex = currentCardIndex + stackIndex;
                return (
                  <BirthdayCard
                    key={card.id}
                    card={card}
                    index={stackIndex}
                    isActive={stackIndex === 0}
                    onSwipe={handleSwipe}
                    onPhotoChange={handlePhotoChange}
                    currentPhotoIndex={currentPhotoIndex}
                  />
                );
              })}
          </AnimatePresence>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="mt-8 flex items-center space-x-2">
        <div className="flex space-x-2">
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCardIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <Button
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentCardIndex === cardData.length - 1}
          className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </Button>
      </div>

      {/* Reset Button */}
      <Button 
        onClick={handleReset}
        variant="ghost"
        className="mt-4 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
      >
        Start Over
      </Button>
    </div>
  );
}
