'use client';

import { useState } from 'react';
import { galleryItems } from '@/lib/data';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-100 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-200 to-cream-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎂</div>
                  <p className="text-sm text-cocoa-600 font-medium">
                    {item.alt}
                  </p>
                </div>
              </div>

              {/* Overlay with caption */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-cocoa-900/90 via-cocoa-900/50 to-transparent
                           flex items-end transition-opacity duration-300
                           ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="p-6 w-full">
                  <p className="text-white font-display text-xl md:text-2xl">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Hover scale effect */}
              <div
                className={`absolute inset-0 transition-transform duration-500 ease-out
                           ${hoveredId === item.id ? 'scale-110' : 'scale-100'}`}
              />
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
