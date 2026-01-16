export type GalleryCategory =
  | 'bathroom'
  | 'kitchen'
  | 'bedroom'
  | 'living-room'
  | 'outdoor';

export interface GalleryItem {
  id: number;
  category: GalleryCategory;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  // Indoor - Bathroom
  {
    id: 1,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-1.jpg', import.meta.url).href,
    description: 'Professional bathroom renovation with modern fixtures and tile work',
  },
  {
    id: 2,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-2.jpg', import.meta.url).href,
    description: 'Elegant bathroom remodel featuring updated vanity and lighting',
  },
  {
    id: 3,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-3.jpg', import.meta.url).href,
    description: 'Spacious bathroom renovation with new tile and fixtures',
  },
  {
    id: 4,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-4.jpg', import.meta.url).href,
    description: 'Modern bathroom remodeling completed by Platinum Finish Group',
  },
  {
    id: 5,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-5.jpg', import.meta.url).href,
    description: 'Beautiful bathroom upgrade with quality craftsmanship',
  },
  {
    id: 6,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-6.jpg', import.meta.url).href,
    description: 'Custom bathroom renovation showcasing professional workmanship',
  },
  {
    id: 7,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-7.jpg', import.meta.url).href,
    description: 'Complete bathroom remodel with modern design and fixtures',
  },

  // Indoor - Kitchen
  {
    id: 8,
    category: 'kitchen',
    image: new URL('./indoor/kitchen/kitchen-1.jpg', import.meta.url).href,
    description: 'Modern kitchen renovation with updated cabinetry and countertops',
  },
  {
    id: 9,
    category: 'kitchen',
    image: new URL('./indoor/kitchen/kitchen-2.jpg', import.meta.url).href,
    description: 'Professional kitchen remodel showcasing quality craftsmanship and design',
  },

  // Indoor - Bedroom
  {
    id: 10,
    category: 'bedroom',
    image: new URL(
      './indoor/bedroom/pfg-handyman-19-1024x559.jpeg',
      import.meta.url,
    ).href,
    description: 'Elegant bedroom renovation with professional finishing touches',
  },
  {
    id: 11,
    category: 'bedroom',
    image: new URL(
      './indoor/bedroom/pfg-handyman-29-559x1024.jpeg',
      import.meta.url,
    ).href,
    description: 'Custom bedroom remodel completed by Platinum Finish Group',
  },

  // Indoor - Living Room
  {
    id: 12,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-10-1024x577.jpeg',
      import.meta.url,
    ).href,
    description: 'Professional living room renovation with quality finishes',
  },
  {
    id: 13,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-11-520x1024.jpeg',
      import.meta.url,
    ).href,
    description: 'Beautiful living room upgrade with modern design elements',
  },
  {
    id: 14,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-12-1024x577.jpeg',
      import.meta.url,
    ).href,
    description: 'Living room remodel showcasing expert craftsmanship and attention to detail',
  },
  {
    id: 15,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-13-1024x577.jpeg',
      import.meta.url,
    ).href,
    description: 'Custom living room renovation with professional finishing',
  },
  {
    id: 16,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-20-1024x559.jpeg',
      import.meta.url,
    ).href,
    description: 'Stunning living room design completed by Platinum Finish Group',
  },
  {
    id: 17,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-21-1024x559.jpeg',
      import.meta.url,
    ).href,
    description: 'Professional living space transformation with quality workmanship',
  },
  {
    id: 18,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-22-1024x559.jpeg',
      import.meta.url,
    ).href,
    description: 'Living room renovation showcasing exceptional attention to detail',
  },
  {
    id: 19,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-30-1024x559.jpeg',
      import.meta.url,
    ).href,
    description: 'Beautiful living room remodel with modern finishes and design',
  },

  // Outdoor
  {
    id: 20,
    category: 'outdoor',
    image: new URL('./outdoor/deck-1.jpg', import.meta.url).href,
    description: 'Professional deck construction and renovation project',
  },
  {
    id: 21,
    category: 'outdoor',
    image: new URL('./outdoor/paint-1.jpg', import.meta.url).href,
    description: 'Exterior painting and finishing work by Platinum Finish Group',
  },
  {
    id: 22,
    category: 'outdoor',
    image: new URL('./outdoor/patio-1.jpg', import.meta.url).href,
    description: 'Custom patio design and construction project completed by professionals',
  },
];
