"use client";

import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import TogetherInFaith from "./components/TogetherInFaith";
import SpiritualMessages from "./components/SpiritualMessages";
import BelongingFellowship from "./components/BelongingFellowship";
import dynamic from "next/dynamic";
import { Instagram, BookOpen } from "lucide-react";
import Head from "next/head";

const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showInstagramDropdown, setShowInstagramDropdown] = useState(false);
  const [showBibleVerse, setShowBibleVerse] = useState(false);
  const [currentVerse, setCurrentVerse] = useState({ text: '', reference: '' });

  // Bible verses collection
  const bibleVerses = [
    {
      text: "Karena Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.",
      reference: "Yeremia 29:11"
    },
    {
      text: "Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka berjalan dan tidak menjadi lelah.",
      reference: "Yesaya 40:31"
    },
    {
      text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.",
      reference: "Filipi 4:13"
    },
    {
      text: "Janganlah hendaknya kamu kuatir tentang apa pun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.",
      reference: "Filipi 4:6"
    },
    {
      text: "Karena Allah sangat mengasihi dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.",
      reference: "Yohanes 3:16"
    },
    {
      text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
      reference: "Matius 11:28"
    },
    {
      text: "TUHAN adalah gembalaku, takkan kekurangan aku.",
      reference: "Mazmur 23:1"
    },
    {
      text: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.",
      reference: "Amsal 3:5"
    }
  ];

  // Function to get random Bible verse
  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    setCurrentVerse(bibleVerses[randomIndex]);
    setShowBibleVerse(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section') as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        setShowSocialIcons(scrollPosition > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close Instagram dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showInstagramDropdown && !target.closest('.instagram-dropdown-container')) {
        setShowInstagramDropdown(false);
      }
    };

    if (showInstagramDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInstagramDropdown]);

  // Handle Bible verse modal keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showBibleVerse) {
        setShowBibleVerse(false);
      }
    };

    if (showBibleVerse) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showBibleVerse]);
  return (
    <>
      <Head>
        <link rel="canonical" href="https://gbiscc.org/" />
        <meta name="robots" content="index, follow" />
      </Head>
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
        <div className={`fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3 sm:space-y-4 transition-all duration-500 ${showSocialIcons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
        {/* Instagram */}
        <div className="relative instagram-dropdown-container">
          <button 
            onClick={() => setShowInstagramDropdown(!showInstagramDropdown)}
            className="group relative w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Follow us on Instagram
            </div>
          </button>
          
          {/* Instagram Dropdown */}
          {showInstagramDropdown && (
            <div className="absolute right-16 top-0 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 p-4 min-w-[250px] z-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">Follow Our Instagram</h3>
                <button 
                  onClick={() => setShowInstagramDropdown(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                <a 
                  href="https://www.instagram.com/soho.citychurch/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">@soho.citychurch</p>
                    <p className="text-gray-400 text-xs">Main Church Account</p>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/jc.soho/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">@jc.soho</p>
                    <p className="text-gray-400 text-xs">Junior Church</p>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/creativedancerofblessed/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">@creativedancerofblessed</p>
                    <p className="text-gray-400 text-xs">Creative Dance Ministry</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
        
        {/* YouTube */}
        <a 
          href="https://www.youtube.com/@gbisohopancoran-rayon1i174" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-10 h-10 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
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
          className="group relative w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Follow us on TikTok
          </div>
        </a>
        
        {/* Bible Verse */}
        <button 
          onClick={getRandomVerse}
          className="group relative w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Daily Bible Verse
          </div>
        </button>
      </div>
        
        {/* Bible Verse Modal */}
        {showBibleVerse && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full mx-4 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">Firman Tuhan Hari Ini</h3>
                </div>
                <button 
                  onClick={() => setShowBibleVerse(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center">
                <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6 italic">
                  &ldquo;{currentVerse.text}&rdquo;
                </blockquote>
                <cite className="text-yellow-400 font-semibold text-lg">
                  - {currentVerse.reference}
                </cite>
              </div>
              
              <div className="flex justify-center space-x-4 mt-8">
                <button 
                  onClick={getRandomVerse}
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Ayat Lainnya
                </button>
                <button 
                  onClick={() => setShowBibleVerse(false)}
                  className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 border border-gray-600/50"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
        
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
    </>
  );
}
