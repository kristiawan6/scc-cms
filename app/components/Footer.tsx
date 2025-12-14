import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white" role="contentinfo" aria-label="Site footer">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <section className="md:col-span-2" aria-labelledby="footer-about">
            <div className="flex items-center mb-4">
              <Image
                src="/scc-logo.svg"
                alt="Soho City Church Logo"
                width={50}
                height={120}
                className="filter brightness-0 invert"
                priority={false}
              />
              <div className="text-white">
                <div className="text-lg font-bold">Soho City</div>
                <div className="text-xs font-medium tracking-wider">CHURCH</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md" id="footer-about">
              GBI Soho City Church - Menjadi saksi Kristus di era pentakosta ketiga.
            </p>
            
            {/* Social Media Links */}
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.youtube.com/@gbisohopancoran-rayon1i174" className="text-gray-500 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md p-1" aria-label="Visit our YouTube channel">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@gbiscc" className="text-gray-500 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-md p-1" aria-label="Follow us on TikTok">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/soho.citychurch/" className="text-gray-500 hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 rounded-md p-1" aria-label="Follow us on Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          
          {/* Quick Links */}
          <section aria-labelledby="footer-navigation">
            <h3 id="footer-navigation" className="text-lg font-semibold mb-4 text-yellow-400">Navigasi</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-md">Beranda</Link></li>
                <li><Link href="/tentang" className="text-gray-400 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-md">Tentang</Link></li>
                <li><Link href="/jadwal-ibadah" className="text-gray-400 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-md">Jadwal Ibadah</Link></li>
                <li><Link href="/komunitas" className="text-gray-400 hover:text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-md">Komunitas</Link></li>
              </ul>
            </nav>
            
            <h4 className="text-md font-semibold mt-6 mb-3 text-yellow-400">Pelayanan</h4>
            <ul className="space-y-2 text-sm" role="list">
              <li><span className="text-gray-400">PEMUJI PENYEMBAH</span></li>
              <li><span className="text-gray-400">PENARI</span></li>
              <li><span className="text-gray-400">MEDIA & SOUND</span></li>
              <li><span className="text-gray-400">PENDOA</span></li>
              <li><span className="text-gray-400">HOSPITALITY & USHER</span></li>
            </ul>
          </section>
          
          {/* Contact Info */}
          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="text-lg font-semibold mb-4 text-yellow-400">Lokasi</h3>
            <address className="space-y-2 text-gray-400 text-sm not-italic">
              <div className="mb-4">
                <p className="font-semibold text-white mb-2">Alamat:</p>
                <p>Gedung SOHO Pancoran LT.UG</p>
                <p>Jl. Letjen M.T. Haryono No.Kav. 2</p>
                <p>Tebet Bar., Kec. Pancoran</p>
                <p>Kota Jakarta Selatan, DKI Jakarta 12810</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-white mb-2">Kontak:</p>
                <p><strong>Pdt.Danny Setiawan :</strong> 0812 1056 030</p>
              </div>
            </address>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-yellow-400">Jadwal Ibadah</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p><span className="font-medium text-white">Minggu:</span></p>
                <p className="ml-2">• Ibadah Raya 1: 10:00 WIB</p>
                <p className="ml-2">• Ibadah Raya 2: 16:30 WIB</p>
                <p className="ml-2">• Sekolah Minggu: 10:00 WIB</p>
                <p className="ml-2">• Junior Church : 13:30 WIB</p>
                <p className="mt-2"><span className="font-medium text-white">Rabu:</span></p>
                <p className="ml-2">• Worship Night: 19:00 WIB</p>
                <p className="mt-2"><span className="font-medium text-white">Sabtu:</span></p>
                <p className="ml-2">• Doa Fajar: 05:00 WIB</p>
              </div>
            </div>
          </section>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 GBI Soho City Church. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Ikuti Kami:</span>
              <div className="flex space-x-3">
                <a href="https://www.youtube.com/@gbisohopancoran-rayon1i174" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-200" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@gbiscc" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-200" aria-label="TikTok">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/soho.citychurch/" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white transition-all duration-200" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
