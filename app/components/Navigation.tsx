'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-1 hover:opacity-80 transition-opacity">
            <Image
              src="/scc-logo.svg"
              alt="SCC Church Logo"
              width={70}
              height={120}
              // className="h-20 w-auto"
            />
            <div className="text-white">
              <div className="text-xl font-bold">Soho City</div>
              <div className="text-sm font-medium tracking-wider">CHURCH</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/tentang" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Tentang
              </Link>
              <Link href="/jadwal-ibadah" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Jadwal Ibadah
              </Link>
              <Link href="/komunitas" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Komunitas
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Visit Us
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            <Link href="/tentang" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Tentang
            </Link>
            <Link href="/jadwal-ibadah" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Jadwal Ibadah
            </Link>
            <Link href="/komunitas" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Komunitas
            </Link>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}