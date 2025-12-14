'use client';
import { useState } from 'react';

export default function SpiritualMessages() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  
  const messages = [
    {
      title: "Jaga Hati",
      verse: "Amsal 4:23",
      content: "Jagalah hatimu dengan segala kewaspadaan, karena dari situlah terpancar kehidupan."
    },
    {
      title: "Jaga Perkataan",
      verse: "Amsal 4:24",
      content: "Buanglah mulut serong dari padamu dan jauhkanlah bibir yang dolak-dalik dari padamu."
    },
    {
      title: "Jaga Langkah",
      verse: "Amsal 4:25-27, Pengkotbah 4:17a",
      verses: [
        {
          reference: "Amsal 4:25-27",
          content: "Biarlah matamu memandang lurus ke depan dan pandanganmu terarah langsung ke muka. Tempuhlah jalan yang rata di bawah kakimu, maka segala jalanmu akan aman. Janganlah menyimpang ke kanan atau ke kiri, jauhkanlah kakimu dari kejahatan."
        },
        {
          reference: "Pengkotbah 4:17a",
          content: "Jagalah langkahmu, apabila engkau pergi ke rumah Allah."
        }
      ]
    },
    {
      title: "Berdiri Teguh Jangan Goyah",
      verse: "1 Korintus 15:58",
      content: "Karena itu, saudara-saudaraku yang kekasih, berdirilah teguh, jangan goyah, dan giatlah selalu dalam pekerjaan Tuhan! Sebab kamu tahu, bahwa dalam persekutuan dengan Tuhan jerih payahmu tidak sia-sia."
    },
    {
      title: "Giatlah Dalam Pekerjaan Tuhan",
      verse: "Roma 12:11, 1 Korintus 15:58",
      verses: [
        {
          reference: "Roma 12:11",
          content: "Janganlah hendaknya kerajinanmu kendor, biarlah rohmu menyala-nyala dan layanilah Tuhan."
        },
        {
          reference: "1 Korintus 15:58",
          content: "Karena itu, saudara-saudaraku yang kekasih, berdirilah teguh, jangan goyah, dan giatlah selalu dalam pekerjaan Tuhan! Sebab kamu tahu, bahwa dalam persekutuan dengan Tuhan jerih payahmu tidak sia-sia."
        }
      ]
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-black" id="spiritual-messages" aria-labelledby="messages-heading">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 id="messages-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            5 Pesan Tuhan Dalam{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Pelayanan Rohani
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            💡 <span className="text-yellow-400 font-medium">Tip:</span> Klik pada setiap pesan untuk melihat ayat Alkitab yang terkait
          </p>
        </header>

        {/* Messages List */}
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <div 
                onClick={() => setSelectedMessage(selectedMessage === index ? null : index)}
                className="py-6 border-b border-gray-700 hover:bg-gray-900 transition-colors duration-300 px-6 rounded-lg cursor-pointer"
              >
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                  <div className="flex items-center space-x-4 mb-2">
                    {/* Number */}
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white">
                      {message.title}
                    </h3>
                  </div>
                  
                  {/* Bible Verse - Mobile */}
                  <div className="text-gray-400 text-sm font-medium ml-12">
                    {message.verse}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Number */}
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white">
                      {message.title}
                    </h3>
                  </div>
                  
                  {/* Bible Verse - Desktop */}
                  <div className="text-gray-400 text-sm font-medium">
                    {message.verse}
                  </div>
                </div>
              </div>
              
              {/* Bible Verse Content */}
              {selectedMessage === index && (
                <div className="mt-4 overflow-hidden transition-all duration-500 ease-in-out animate-in slide-in-from-top-2 fade-in">
                  {message.verses ? (
                    <div className="space-y-4">
                      {message.verses.map((verse, verseIndex) => (
                        <div 
                          key={verseIndex} 
                          className="p-6 bg-black rounded-lg border-l-4 border-yellow-400 transform transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02]"
                          style={{
                            animationDelay: `${verseIndex * 150}ms`
                          }}
                        >
                          <p className="text-gray-300 leading-relaxed italic">
                            &ldquo;{verse.content}&rdquo;
                          </p>
                          <p className="text-yellow-400 text-sm mt-3 font-medium">
                            - {verse.reference}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 bg-black rounded-lg border-l-4 border-yellow-400 transform transition-all duration-300 hover:bg-gray-900 hover:scale-[1.02]">
                      <p className="text-gray-300 leading-relaxed italic">
                        &ldquo;{message.content}&rdquo;
                      </p>
                      <p className="text-yellow-400 text-sm mt-3 font-medium">
                        - {message.verse}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
