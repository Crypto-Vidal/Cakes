import { CakeJarSize, Flavor, GalleryItem } from '@/types';

export const cakeJarSizes: CakeJarSize[] = [
  {
    id: 'mini',
    name: 'Mini Jar',
    description: 'Perfect for a personal treat or tasting',
    servingSize: '1-2 servings',
    price: 8.00,
    volume: '4 oz',
  },
  {
    id: 'classic',
    name: 'Classic Jar',
    description: 'Our most popular size for sharing',
    servingSize: '2-4 servings',
    price: 15.00,
    volume: '8 oz',
  },
  {
    id: 'celebration',
    name: 'Celebration Jar',
    description: 'For special occasions and gatherings',
    servingSize: '4-6 servings',
    price: 28.00,
    volume: '16 oz',
  },
];

export const flavors: Flavor[] = [
  {
    id: 'vanilla-dream',
    name: 'Vanilla Dream',
    description: 'Classic Madagascar vanilla with silky buttercream',
  },
  {
    id: 'chocolate-velvet',
    name: 'Chocolate Velvet',
    description: 'Rich dark chocolate with layers of chocolate ganache',
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Romance',
    description: 'Velvety cocoa cake with cream cheese frosting',
  },
  {
    id: 'lemon-bliss',
    name: 'Lemon Bliss',
    description: 'Fresh lemon cake with tangy lemon curd',
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel',
    description: 'Brown butter cake with homemade salted caramel',
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description: 'Chocolate cake layered with crushed cookies and cream',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/images/gallery/placeholder-1.jpg',
    alt: 'Layered cake jar with visible chocolate and vanilla layers',
    caption: 'Handcrafted layers',
  },
  {
    id: '2',
    image: '/images/gallery/placeholder-2.jpg',
    alt: 'Collection of colorful cake jars',
    caption: 'Every jar tells a story',
  },
  {
    id: '3',
    image: '/images/gallery/placeholder-3.jpg',
    alt: 'Close-up of red velvet cake jar',
    caption: 'Made with love',
  },
  {
    id: '4',
    image: '/images/gallery/placeholder-4.jpg',
    alt: 'Cake jar with fresh berries on top',
    caption: 'Fresh ingredients',
  },
  {
    id: '5',
    image: '/images/gallery/placeholder-5.jpg',
    alt: 'Elegant presentation of cake jars',
    caption: 'Perfect for any occasion',
  },
  {
    id: '6',
    image: '/images/gallery/placeholder-6.jpg',
    alt: 'Seasonal cake jar flavors',
    caption: 'Seasonal specialties',
  },
];
