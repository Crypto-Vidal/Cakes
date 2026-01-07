'use client';

import { useState } from 'react';
import { galleryItems } from '@/lib/data';

// Beautiful gradient placeholders matching the actual product colors
const gradientStyles: Record<string, string> = {
  '1': 'bg-gradient-to-br from-pink-300 via-red-200 to-pink-400', // Strawberry Crunch
  '2': 'bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900', // Oreo
  '3': 'bg-gradient-to-br from-amber-400 via-yellow-600 to-amber-700', // Twix Delight
  '4': 'bg-gradient-to-br from-amber-200 via-yellow-700 to-orange-600', // S'mores
};

const decorativeElements: Record<string, JSX.Element> = {
  '1': (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl mb-2">🍓</div>
        <div className="text-7xl">✨</div>
      </div>
    </div>
  ),
  '2': (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl mb-2 filter drop-shadow-lg">🍪</div>
        <div className="text-7xl">🖤</div>
      </div>
    </div>
  ),
  '3': (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl mb-2">🍫</div>
        <div className="text-7xl">🍬</div>
      </div>
    </div>
  ),
  '4': (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl mb-2">🔥</div>
        <div className="text-7xl">🍫</div>
      </div>
    </div>
  ),
};

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cocoa-900 mb-4">
            Our Craft
          </h2>
          <p className="text-lg md:text-xl text-cocoa-600 max-w-2xl mx-auto">
            Every jar is a masterpiece. Layers of flavor, texture, and love
            baked into each handcrafted creation.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient background matching product colors */}
              <div className={`absolute inset-0 ${gradientStyles[item.id] || 'bg-cream-200'} transition-transform duration-500 ease-out ${
                hoveredId === item.id ? 'scale-110' : 'scale-100'
              }`}>
                {/* Decorative elements */}
                <div className={`transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-40' : 'opacity-70'}`}>
                  {decorativeElements[item.id]}
                </div>
              </div>

              {/* Overlay with caption */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-cocoa-900/90 via-cocoa-900/50 to-transparent
                           flex items-end transition-opacity duration-300
                           ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="p-6 w-full">
                  <p className="text-white font-display text-xl md:text-2xl mb-2">
                    {item.caption}
                  </p>
                  <p className="text-cream-100 text-sm">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-cocoa-600 text-lg mb-6">
            Ready to taste the difference?
          </p>
          <a href="#order" className="btn-primary inline-block">
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
}
