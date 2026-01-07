export default function About() {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-warm-200 via-pink-100 to-cream-300 flex items-center justify-center shadow-2xl overflow-hidden relative group">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-30 transition-opacity">🎂</div>
                <div className="absolute bottom-8 left-6 text-5xl opacity-20 group-hover:opacity-30 transition-opacity">🍓</div>
                <div className="absolute top-1/3 left-8 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">✨</div>

                <div className="text-center p-8 relative z-10">
                  <div className="text-8xl mb-4 animate-pulse">👩‍🍳</div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-sm text-cocoa-800 font-semibold mb-1">
                      Meet the Baker
                    </p>
                    <p className="text-xs text-cocoa-600">
                      Passionate about creating joy, one jar at a time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story */}
            <div className="order-1 md:order-2 animate-slide-up">
              <div className="inline-block mb-4 px-4 py-2 bg-cream-100 rounded-full">
                <span className="text-sm tracking-wider text-cocoa-600 uppercase font-medium">
                  About the Baker
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold text-cocoa-900 mb-6">
                Baked with Love,
                <span className="block text-warm-500 mt-2">Served with Joy</span>
              </h2>

              <div className="space-y-4 text-cocoa-700 leading-relaxed">
                <p className="text-lg">
                  What started as a passion for creating beautiful desserts has grown
                  into a business built on love, quality, and craftsmanship.
                </p>

                <p>
                  Every cake jar is handmade from scratch using premium ingredients
                  and traditional baking techniques. I believe that the best desserts
                  are made with patience, attention to detail, and a genuine love for
                  the craft.
                </p>

                <p>
                  From my kitchen to your table, each jar tells a story of dedication
                  to creating something truly special. Whether you're celebrating a
                  milestone or simply treating yourself, I'm honored to be part of
                  your sweet moments.
                </p>

                <div className="pt-6">
                  <p className="font-display text-2xl text-cocoa-900 italic">
                    "Life is short, eat dessert first."
                  </p>
                  <p className="mt-2 text-cocoa-600">— Your Baker's Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
