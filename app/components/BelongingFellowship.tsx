'use client';
import Image from 'next/image';

export default function BelongingFellowship() {
  // Fellowship photos with actual images
  const fellowshipImages = [
    {
      src: "https://images.pexels.com/photos/8468704/pexels-photo-8468704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Community Worship"
    },
    {
      src: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Youth Fellowship"
    },
    {
      src: "https://images.pexels.com/photos/8468705/pexels-photo-8468705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Family Gathering"
    },
    {
      src: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Prayer Circle"
    },
    {
      src: "https://images.pexels.com/photos/8468703/pexels-photo-8468703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Community Service"
    },
    {
      src: "https://images.pexels.com/photos/7551660/pexels-photo-7551660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Bible Study"
    }
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...fellowshipImages, ...fellowshipImages];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Belonging &{' '}
            <span className="text-pink-400">
              Fellowship
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-12">
            Moments of joy, love, and togetherness in our community
          </p>
        </div>

        {/* Infinity Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll hover:pause-animation">
            {duplicatedImages.map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-3 group cursor-pointer"
              >
                <div className="relative w-72 h-48 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105">
                  {/* Image */}
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    width={288}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
                    <p className="text-gray-200 text-sm">Moments of faith and fellowship</p>
                  </div>
                  
                  {/* Border Effect */}
                  <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-pink-400/30 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}