"use client";


import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import TogetherInFaith from "./components/TogetherInFaith";
import SpiritualMessages from "./components/SpiritualMessages";
import BelongingFellowship from "./components/BelongingFellowship";
import dynamic from "next/dynamic";
import { Instagram } from "lucide-react";

const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section') as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Show icons when scrolled past hero section
        setShowSocialIcons(scrollPosition > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Global Animated Background Elements */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 -right-32 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/10 to-purple-700/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating Social Media Icons */}
        <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4 transition-all duration-500 ${showSocialIcons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
        {/* Instagram */}
        <a 
          href="https://www.instagram.com/soho.citychurch/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Instagram className="w-7 h-7 text-white" />
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Follow us on Instagram
          </div>
        </a>
        
        {/* YouTube */}
        <a 
          href="https://www.youtube.com/@gbisohopancoran-rayon1i174" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Subscribe to our YouTube
          </div>
        </a>
        
        {/* TikTok */}
        <a 
          href="https://www.tiktok.com/@gbiscc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Follow us on TikTok
          </div>
        </a>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <div id="hero-section">
          <Hero />
        </div>
        <TogetherInFaith />
        <SpiritualMessages />
        <BelongingFellowship />
        <Footer />
      </div>
    </div>
  );
}
