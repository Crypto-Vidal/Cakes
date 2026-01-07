import { CakeJarSize, Flavor, GalleryItem } from '@/types';

export const cakeJarSizes: CakeJarSize[] = [
  {
    id: 'small',
    name: 'Small Jar',
    description: 'Perfect for a personal treat',
    servingSize: '1-2 servings',
    price: 10.00,
    volume: '8 oz',
  },
  {
    id: 'medium',
    name: 'Medium Jar',
    description: 'Great for sharing',
    servingSize: '2-3 servings',
    price: 15.00,
    volume: '12 oz',
  },
  {
    id: 'large',
    name: 'Large Jar',
    description: 'For celebrations and gatherings',
    servingSize: '4-6 servings',
    price: 25.00,
    volume: '16 oz',
  },
];

export const flavors: Flavor[] = [
  {
    id: 'strawberry-crunch',
    name: 'Strawberry Crunch',
    description: 'Fluffy vanilla cake layered with fresh strawberries, whipped cream, and crunchy topping',
  },
  {
    id: 'oreo',
    name: 'Oreo',
    description: 'Rich chocolate cake with Oreo cookie pieces and creamy vanilla frosting',
  },
  {
    id: 'twix-delight',
    name: 'Twix Delight',
    description: 'Chocolate cake with caramel layers, shortbread pieces, and chocolate drizzle',
  },
  {
    id: 'smores',
    name: "S'mores",
    description: 'Graham cracker cake with marshmallow cream and chocolate ganache',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/images/gallery/strawberry-crunch.jpg',
    alt: 'Beautiful strawberry crunch cake jars with fresh strawberries and crunchy topping',
    caption: 'Strawberry Crunch',
  },
  {
    id: '2',
    image: '/images/gallery/oreo.jpg',
    alt: 'Decadent Oreo cake jars with cookie pieces and creamy frosting',
    caption: 'Oreo Dreams',
  },
  {
    id: '3',
    image: '/images/gallery/twix-delight.jpg',
    alt: 'Twix delight cake jars with caramel, shortbread, and chocolate',
    caption: 'Twix Delight',
  },
  {
    id: '4',
    image: '/images/gallery/smores.jpg',
    alt: "S'mores cake jars with graham cracker, marshmallow, and chocolate",
    caption: "S'mores Magic",
  },
];
