'use client';
import { useState, useEffect, useRef } from 'react';
import { assetFromCloudinary } from '@/lib/utils';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const texts = ['your heart', 'your life', 'your family'];
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Video Background with Poster */}
      <video
         className="absolute inset-0 w-full h-full object-cover z-0"
         autoPlay
         muted
         loop
         playsInline
         preload="auto"
         ref={videoRef}
       >
         <source src="https://scc-storage.b-cdn.net/scc-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.9] tracking-tight" style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
          <span className="text-white font-black" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)'}}>
            See what God
          </span>
          <br />
          <span className="text-white font-black" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)'}}>
            can do
          </span>
          <br />
          <span className="text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,1)'}}>
            through <span className="font-bold text-yellow-400">{currentText}</span>
          </span>
        </h1>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
