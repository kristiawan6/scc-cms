'use client';
import { Calendar, Heart, Users } from 'lucide-react';

export default function TogetherInFaith() {
  const events = [
    {
      icon: Calendar,
      title: "Worship Night",
      subtitle: "Every Wednesday",
      description: "7 PM - Onsite & Online streaming",
      scheduleHighlight: "7 PM - Onsite & Online streaming"
    },
    {
      icon: Heart,
      title: "COOL",
      subtitle: "Community Of Love",
      description: "Where faith meets family, and love builds community"
    },
    {
      icon: Users,
      title: "GIC",
      subtitle: "Growth In Christ",
      description: "Mentoring session - Every 2x (Friday) per month - Online",
      scheduleHighlight: "Every 2x (Friday) per month - Online"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black" id="community-events" aria-labelledby="community-heading">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 id="community-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Together In Faith,{' '}
            <span className="text-yellow-400">
              Rooted In Love
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join our community where faith flourishes through meaningful connections, 
            worship, and spiritual growth together.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event, index) => {
            const isHighlighted = event.title === "Worship Night" || event.title === "GIC" || event.title === "COOL";
            return (
              <div 
                key={index}
                className={`group relative ${
                  isHighlighted 
                    ? 'bg-white/5 border border-yellow-400/20' 
                    : 'bg-white/5 border border-gray-700'
                } backdrop-blur-sm rounded-lg p-6 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:-translate-y-1`}
                style={{ 
                  animationDelay: `${index * 150}ms`
                }}
              >

                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-base font-medium mb-4 text-yellow-400/80">
                    {event.subtitle}
                  </p>
                   
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {event.scheduleHighlight ? (
                      <span className="inline-block text-yellow-400 font-medium bg-yellow-400/10 px-2 py-1 rounded text-sm">
                        {event.scheduleHighlight}
                      </span>
                    ) : (
                      event.description
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}