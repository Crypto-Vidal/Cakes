'use client';

export default function Hero() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    orderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-warm-50 to-cream-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-warm-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Floating cake jar emojis */}
        <div className="absolute top-1/4 left-[15%] text-6xl opacity-10 animate-pulse">🎂</div>
        <div className="absolute top-1/3 right-[12%] text-5xl opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}>🍰</div>
        <div className="absolute bottom-1/4 left-[20%] text-7xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}>🍓</div>
        <div className="absolute bottom-1/3 right-[18%] text-6xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🎉</div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Small badge/subtitle */}
          <div className="inline-block mb-6 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-cream-300">
            <span className="text-sm tracking-wider text-cocoa-600 uppercase font-medium">
              Handcrafted with Love
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cocoa-900 mb-6 leading-tight">
            Cake Jars That
            <span className="block text-warm-500 mt-2">Spark Joy</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-cocoa-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Layered perfection in every jar. Artisanal cakes made fresh daily,
            perfect for celebrations, gifts, or treating yourself.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToOrder}
              className="btn-primary text-lg w-full sm:w-auto"
            >
              Order Your Cake Jar
            </button>
            <a
              href="#gallery"
              className="btn-secondary text-lg w-full sm:w-auto"
            >
              See Our Work
            </a>
          </div>

          {/* Social proof or additional info */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-cocoa-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span>Baked Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎂</span>
              <span>Premium Ingredients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💝</span>
              <span>Perfect for Gifting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cocoa-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
