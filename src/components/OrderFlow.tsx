'use client';

import { useState } from 'react';
import { cakeJarSizes, flavors } from '@/lib/data';
import { useCartStore } from '@/lib/store';

export default function OrderFlow() {
  const [selectedSize, setSelectedSize] = useState(cakeJarSizes[1].id); // Default to Classic
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0].id);
  const [addedToCart, setAddedToCart] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const handleAddToCart = () => {
    const size = cakeJarSizes.find((s) => s.id === selectedSize);
    const flavor = flavors.find((f) => f.id === selectedFlavor);

    if (size && flavor) {
      addItem({
        sizeId: size.id,
        sizeName: size.name,
        flavorId: flavor.id,
        flavorName: flavor.name,
        price: size.price,
      });

      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <section id="order" className="section-spacing bg-gradient-to-br from-cream-50 to-warm-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cocoa-900 mb-4">
            Build Your Perfect Jar
          </h2>
          <p className="text-lg md:text-xl text-cocoa-600 max-w-2xl mx-auto">
            Choose your size and flavor. Each jar is baked fresh to order.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Step 1: Size Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-semibold text-cocoa-900 mb-6 text-center">
              Step 1: Choose Your Size
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cakeJarSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`card p-6 text-left transition-all duration-300 ${
                    selectedSize === size.id
                      ? 'ring-4 ring-cocoa-500 scale-105'
                      : 'hover:scale-102'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-display text-2xl font-bold text-cocoa-900 mb-1">
                        {size.name}
                      </h4>
                      <p className="text-sm text-cocoa-500 uppercase tracking-wide">
                        {size.volume}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-warm-500">
                        ${size.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-cocoa-600 mb-2">{size.description}</p>
                  <p className="text-sm text-cocoa-500">{size.servingSize}</p>
                  {selectedSize === size.id && (
                    <div className="mt-4 flex items-center gap-2 text-cocoa-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">Selected</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Flavor Selection */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-semibold text-cocoa-900 mb-6 text-center">
              Step 2: Choose Your Flavor
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {flavors.map((flavor) => (
                <button
                  key={flavor.id}
                  onClick={() => setSelectedFlavor(flavor.id)}
                  className={`card p-6 text-left transition-all duration-300 ${
                    selectedFlavor === flavor.id
                      ? 'ring-4 ring-cocoa-500 scale-105'
                      : 'hover:shadow-lg hover:scale-102'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-display font-bold text-xl text-cocoa-900">
                      {flavor.name}
                    </h4>
                    {selectedFlavor === flavor.id && (
                      <svg className="w-6 h-6 text-cocoa-700" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-cocoa-600">{flavor.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="text-center">
            <button
              onClick={handleAddToCart}
              className={`btn-primary text-xl px-12 py-5 ${
                addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
              }`}
            >
              {addedToCart ? (
                <span className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Added to Cart!
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>
            <button
              onClick={toggleCart}
              className="ml-4 text-cocoa-600 hover:text-cocoa-900 underline"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
