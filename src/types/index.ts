export interface CakeJarSize {
  id: string;
  name: string;
  description: string;
  servingSize: string;
  price: number;
  volume: string;
}

export interface Flavor {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface CartItem {
  id: string;
  sizeId: string;
  sizeName: string;
  flavorId: string;
  flavorName: string;
  price: number;
  quantity: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
}
