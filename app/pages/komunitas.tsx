import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function KomunitasPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              KOMUNITAS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan komunitas yang solid dan bertumbuh bersama dalam iman
            </p>
          </div>

          {/* COOL Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-yellow-400">COOL</h2>
              </div>
              <p className="text-gray-300 mb-8 text-lg">COmmunity Of Love</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Cool Dewasa */}
                <div className="bg-gray-800/40 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">Cool Dewasa</h3>
                  <div className="w-full h-40 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-lg mb-6 flex items-center justify-center border border-gray-600/30">
                    <span className="text-gray-300 text-lg font-medium">Cool Dewasa</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Komunitas untuk dewasa yang ingin bertumbuh dalam iman dan persekutuan yang mendalam
                  </p>
                </div>

                {/* Cool Dewasa Muda */}
                <div className="bg-gray-800/40 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">Cool Dewasa Muda (Youth)</h3>
                  <div className="w-full h-40 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-lg mb-6 flex items-center justify-center border border-gray-600/30">
                    <span className="text-gray-300 text-lg font-medium">Cool Youth</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Komunitas khusus untuk pemuda yang dinamis, penuh semangat, dan siap menghadapi tantangan hidup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MENTORING Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-3 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-yellow-400">MENTORING</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Growth In Christ</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Program mentoring yang dirancang untuk membantu setiap individu bertumbuh dalam kedewasaan rohani dan karakter Kristus.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-white font-medium">Setiap Jumat, 2 Minggu 1x</span>
                    </div>
                    <div className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-white font-medium">Hybrid Onsite</span>
                    </div>
                    <div className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-white font-medium">Online Via Zoom</span>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                     <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100" height="100" rx="20" fill="#4A90E2"/>
                          <rect x="20" y="35" width="35" height="25" rx="5" fill="white"/>
                          <path d="M60 35L75 25V65L60 55V35Z" fill="white"/>
                        </svg>
                        <h4 className="text-xl font-semibold text-yellow-400">Informasi Zoom</h4>
                      </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Meeting ID:</span>
                        <span className="text-white font-mono bg-orange-400/10 px-3 py-2 rounded-lg">493 382 3121</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Passcode:</span>
                        <span className="text-white font-mono bg-orange-400/10 px-3 py-2 rounded-lg">125881</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl flex items-center justify-center mb-8 border border-gray-600/30">
                    <div className="text-center">
                      <span className="text-white text-2xl font-bold block mb-2">Growth In Christ</span>
                      <span className="text-gray-300 text-lg">Mentoring Program</span>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 text-center text-lg italic leading-relaxed border-l-4 border-yellow-400 pl-6">
                    &ldquo;Bertumbuh bersama dalam kasih Kristus melalui mentoring yang terarah dan penuh kasih&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Community Gallery */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Best Moments</h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Precious moments in the journey of faith
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="w-full h-32 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300 flex items-center justify-center border border-gray-600/30 shadow-lg">
                <span className="text-white font-medium">Fellowship</span>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300 flex items-center justify-center border border-gray-600/30 shadow-lg">
                <span className="text-white font-medium">Worship</span>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300 flex items-center justify-center border border-gray-600/30 shadow-lg">
                <span className="text-white font-medium">Growth</span>
              </div>
              <div className="w-full h-32 bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-xl hover:from-gray-600/50 hover:to-gray-500/50 transition-all duration-300 flex items-center justify-center border border-gray-600/30 shadow-lg">
                <span className="text-white font-medium">Service</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}