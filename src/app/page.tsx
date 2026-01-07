import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import OrderFlow from '@/components/OrderFlow';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Cart from '@/components/Cart';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Cart />
      <Hero />
      <Gallery />
      <OrderFlow />
      <About />
      <Footer />
    </main>
  );
}
