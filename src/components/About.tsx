export default function About() {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-warm-200 to-cream-300 flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👩‍🍳</div>
                  <p className="text-sm text-cocoa-600 font-medium">
                    Your photo here
                  </p>
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
