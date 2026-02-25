import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Gift, Sparkles, CalendarClock, TreePine, Home, Moon, Cross } from 'lucide-react';

export default function JadwalIbadahPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              JADWAL IBADAH
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan kami dalam setiap momen ibadah dan persekutuan yang penuh berkat
            </p>
          </div>

          {/* Seasonal Notices */}
          <section aria-labelledby="seasonal-notices" className="mb-12">
            <h2 id="seasonal-notices" className="sr-only">Pengumuman Natal & Awal Tahun</h2>
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-yellow-400/10 rounded-full blur-[90px]" />

              {/* Ornaments removed per request */}

              <div className="mb-4 flex items-center gap-2 relative z-20">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">JADWAL IBADAH SCC</span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Ibadaha Raya */}
                {/* <div className="space-y-3 bg-white/5 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-400/30 transition-colors min-h-[160px]">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-yellow-400" />
                    <p className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">IBADAH RAYA 1 & 2</p>
                  </div>
                  <p className="text-white font-medium">Ps. Samuel Pristiantoro</p>
                  <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-orange-400" />
                      <span>Minggu, 22 February 2026</span>
                    </div>
                    <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">10.00 WIB</span>
                  </div>
                  <p className="text-gray-400">Disertai Perjamuan Kudus</p>
                </div> */}

                {/* Worship Night */}
                <div className="space-y-3 bg-white/5 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-400/30 transition-colors min-h-[160px]">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-yellow-400" />
                    <p className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">WORSHIP NIGHT</p>
                  </div>
                  <p className="text-white font-medium">Ps. Danny Setiawan</p>
                  <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-orange-400" />
                      <span>Rabu, 25 Februari 2026</span>
                    </div>
                    <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">19.00 WIB</span>
                  </div>
                </div>

                {/* Growth In Christ */}
                <div className="space-y-3 bg-white/5 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-400/30 transition-colors min-h-[160px]">
                  <div className="flex items-center gap-2">
                    <Cross className="w-5 h-5 text-yellow-400" />
                    <p className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">GROWTH IN CHRIST</p>
                  </div>
                  <p className="text-white font-medium">Ps. Danny Setiawan</p>
                  <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-orange-400" />
                      <span>Jumat, 27 Februari 2026</span>
                    </div>
                    <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">20.00 WIB</span>
                  </div>
                </div>

                {/* Junior Curch */}
                {/* <div className="space-y-3 bg-white/5 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-400/30 transition-colors min-h-[160px]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <p className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">Junior Church</p>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-orange-400" />
                      <span>Minggu, 22 Februari 2026</span>
                    </div>
                    <span className="text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">13.30 WIB</span>
                  </div>
                  <p className="text-gray-400">Disertai Perjamuan Kudus</p>
                </div> */}
              </div>
            </div>
          </section>

          {/* Schedule Grid */}
          <div className="grid gap-8 md:gap-10">
            {/* Sunday Schedule */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-yellow-400">MINGGU</h2>
              </div>
              <div className="grid gap-4">
                <div className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div>
                    <span className="text-xl font-medium text-white">Ibadah Raya 1</span>
                    <p className="text-sm text-gray-400 mt-1">Ibadah Umum</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">10.00</span>
                </div>
                <div className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div>
                    <span className="text-xl font-medium text-white">Ibadah Raya 2</span>
                    <p className="text-sm text-gray-400 mt-1">Ibadah Sore</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">16.30</span>
                </div>
                <div className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div>
                    <span className="text-xl font-medium text-white">Ibadah Sekolah Minggu</span>
                    <p className="text-sm text-gray-400 mt-1">Untuk Anak-anak</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">10.00</span>
                </div>
                <div className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div>
                    <span className="text-xl font-medium text-white">Ibadah Junior Church</span>
                    <p className="text-sm text-gray-400 mt-1">Untuk Remaja</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">13.30</span>
                </div>
              </div>
            </div>

            {/* Wednesday Schedule */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-yellow-400">RABU</h2>
              </div>
              <div className="grid gap-4">
                <div className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div>
                    <span className="text-xl font-medium text-white">Worship Night</span>
                    <p className="text-sm text-gray-400 mt-1">Ibadah Malam Penyembahan</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">19.00</span>
                </div>
              </div>
            </div>

            {/* Saturday Schedule */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-yellow-400">SABTU</h2>
              </div>
              <div className="grid gap-4">
                <div className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div>
                    <span className="text-xl font-medium text-white">Doa Fajar</span>
                    <p className="text-sm text-gray-400 mt-1">Doa Pagi Bersama</p>
                  </div>
                  <span className="text-2xl font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-lg">05.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/30">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Informasi Penting</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  🕐 Semua waktu dalam <span className="font-semibold text-white">WIB (Waktu Indonesia Barat)</span>
                </p>
                <p className="text-lg">
                  📍 Lokasi: <span className="font-semibold text-white">GBI Soho City Church</span>
                </p>
                <p className="text-lg">
                  📞 Untuk informasi lebih lanjut, silakan <span className="font-semibold text-orange-400">hubungi kami</span>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 italic">
                  &ldquo;Marilah kita datang ke hadirat-Nya dengan nyanyian syukur, dan bersorak-sorai kepada-Nya dengan nyanyian pujian!&rdquo;
                </p>
                <p className="text-sm text-gray-500 mt-2">- Mazmur 95:2</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
