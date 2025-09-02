'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              TENTANG
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </div>

          {/* Content */}
           <div className="max-w-4xl mx-auto">
             {/* Welcome Message */}
             <p className="text-xl text-center mb-16 text-gray-300 leading-relaxed">
               Shalom, Selamat datang di <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">GBI Soho City Church</span> (GBI SCC).
             </p>

            {/* Church Information */}
            <div className="grid md:grid-cols-1 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Kepemimpinan</h3>
                <p className="text-gray-300 leading-relaxed">
                  GBI SCC Merupakan bagian dari GBI Rayon 1i yang digembalai oleh <span className="font-semibold text-white">Pdt. Herron Dollf Anton, S.E., M.M</span> dengan <span className="font-semibold text-white">Pdt. Danny Setiawan </span> sebagai wakil gembala dan berada dalam naungan GBI Gatot Subroto yang digembalai oleh <span className="font-semibold text-white">Pdt. DR. Ir. Niko Njotorahardjo</span>.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Awal</h3>
                <p className="text-gray-300 leading-relaxed">
                  GBI SCC Memulai perjalanan pelayanan pada tahun <span className="font-semibold text-white">2018</span> di gedung <span className="font-semibold text-white">SOHO Pancoran, Jakarta Selatan</span>.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Misi Kami</h3>
                <p className="text-gray-300 leading-relaxed">
                  Berlandaskan <span className="font-semibold text-white">5 pesan Tuhan dalam pelayanan rohani</span>, GBI SCC berfokus pada pengembangan karakter jemaat untuk tumbuh serupa dengan karakter Kristus dan hidup dalam kasih.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Pelayanan Kami</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lebih dari <span className="font-semibold text-white">7 tahun</span>, GBI SCC dipenuhi dengan pekerjaan Tuhan yang luar biasa, selain ibadah raya setiap minggu, kegerakan pelayanan GBI SCC juga bergerak ke arah sosial seperti berbagi makanan kepada yang membutuhkan, pelayanan panti asuhan, bakti sosial potong rambut gratis, dan lainnya. Dengan kegerakan ini, kami mengimpartasikan kasih dan kebaikan Tuhan agar bisa dirasakan oleh banyak orang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}