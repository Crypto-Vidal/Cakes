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
    id: 'strawberry-shortcake',
    name: 'Strawberry Shortcake',
    description: 'Fluffy vanilla cake with fresh strawberries and whipped cream',
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
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description: 'Chocolate cake layered with crushed cookies and cream',
  },
  {
    id: 'vanilla-funfetti',
    name: 'Vanilla Funfetti',
    description: 'Classic vanilla cake with colorful sprinkles and buttercream',
  },
  {
    id: 'mint-shamrock',
    name: 'Mint Shamrock',
    description: 'Refreshing mint cake with creamy frosting (seasonal)',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/images/gallery/strawberry-red-velvet.jpg',
    alt: 'Five beautiful red velvet cake jars topped with whipped cream and fresh strawberries',
    caption: 'Strawberry perfection',
  },
  {
    id: '2',
    image: '/images/gallery/variety-collection.jpg',
    alt: 'Colorful collection of cake jars featuring vanilla, chocolate, mint, and strawberry flavors',
    caption: 'Every jar tells a story',
  },
  {
    id: '3',
    image: '/images/gallery/chocolate-cookie-crumble.jpg',
    alt: 'Three chocolate cake jars with layers of cream and cookie crumble topping',
    caption: 'Cookies & cream delight',
  },
  {
    id: '4',
    image: '/images/gallery/strawberry-sprinkle-trio.jpg',
    alt: 'Trio of cake jars with strawberry and colorful sprinkle toppings',
    caption: 'Fresh & festive',
  },
  {
    id: '5',
    image: '/images/gallery/mint-shamrock-pair.jpg',
    alt: 'Two mint-flavored cake jars decorated with green shamrock sprinkles',
    caption: 'Seasonal specialties',
  },
];
