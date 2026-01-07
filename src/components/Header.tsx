'use client';

import { useCartStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const itemCount = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-3xl">🎂</span>
            <span
              className={`font-display text-2xl font-bold transition-colors ${
                isScrolled ? 'text-cocoa-900' : 'text-cocoa-900'
              }`}
            >
              Cake Jar Co.
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#gallery"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-cocoa-700 hover:text-cocoa-900'
                  : 'text-cocoa-700 hover:text-cocoa-900'
              }`}
            >
              Gallery
            </a>
            <a
              href="#order"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-cocoa-700 hover:text-cocoa-900'
                  : 'text-cocoa-700 hover:text-cocoa-900'
              }`}
            >
              Order
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-cocoa-700 hover:text-cocoa-900'
                  : 'text-cocoa-700 hover:text-cocoa-900'
              }`}
            >
              About
            </a>
          </nav>

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className={`relative px-4 py-2 rounded-full font-medium transition-all ${
              isScrolled
                ? 'bg-cocoa-700 text-cream-50 hover:bg-cocoa-800'
                : 'bg-cocoa-700 text-cream-50 hover:bg-cocoa-800'
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="ml-1 bg-warm-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
