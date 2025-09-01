'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function BelongingFellowship() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isManualControl) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % fellowshipImages.length);
      }, isMobile ? 3000 : 5000); // Lebih cepat di mobile
      return () => clearInterval(interval);
    }
  }, [isManualControl, isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsManualControl(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % fellowshipImages.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + fellowshipImages.length) % fellowshipImages.length);
    }
    
    // Reset manual control after 5 seconds
    setTimeout(() => setIsManualControl(false), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsManualControl(true);
    setTimeout(() => setIsManualControl(false), 5000);
  };
  // Fellowship photos with actual images
  const fellowshipImages = [
    {
      src: "https://images.pexels.com/photos/8468704/pexels-photo-8468704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Community Worship"
    },
    {
      src: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Youth Fellowship"
    },
    {
      src: "https://images.pexels.com/photos/8468705/pexels-photo-8468705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Family Gathering"
    },
    {
      src: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Prayer Circle"
    },
    {
      src: "https://images.pexels.com/photos/8468703/pexels-photo-8468703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Community Service"
    },
    {
      src: "https://images.pexels.com/photos/7551660/pexels-photo-7551660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Bible Study"
    }
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...fellowshipImages, ...fellowshipImages];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Belonging &{' '}
            <span className="text-pink-400">
              Fellowship
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-12">
            Moments of joy, love, and togetherness in our community
          </p>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative">
            <div 
              ref={sliderRef}
              className="overflow-hidden rounded-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {fellowshipImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        width={400}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
                        <p className="text-gray-200 text-sm">Moments of faith and fellowship</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {fellowshipImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-pink-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            {/* Mobile Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + fellowshipImages.length) % fellowshipImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % fellowshipImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ) : (
          /* Desktop Infinity Slider */
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {duplicatedImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-3 group cursor-pointer"
                >
                  <div className="relative w-72 h-48 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105">
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      width={288}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
                      <p className="text-gray-200 text-sm">Moments of faith and fellowship</p>
                    </div>
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-pink-400/30 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}