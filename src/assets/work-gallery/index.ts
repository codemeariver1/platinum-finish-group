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
}

export const galleryItems: GalleryItem[] = [
  // Indoor - Bathroom
  {
    id: 1,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-3.jpg', import.meta.url).href,
  },
  {
    id: 4,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-4.jpg', import.meta.url).href,
  },
  {
    id: 5,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-5.jpg', import.meta.url).href,
  },
  {
    id: 6,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-6.jpg', import.meta.url).href,
  },
  {
    id: 7,
    category: 'bathroom',
    image: new URL('./indoor/bathroom/bathroom-7.jpg', import.meta.url).href,
  },

  // Indoor - Kitchen
  {
    id: 8,
    category: 'kitchen',
    image: new URL('./indoor/kitchen/kitchen-1.jpg', import.meta.url).href,
  },
  {
    id: 9,
    category: 'kitchen',
    image: new URL('./indoor/kitchen/kitchen-2.jpg', import.meta.url).href,
  },

  // Indoor - Bedroom
  {
    id: 10,
    category: 'bedroom',
    image: new URL(
      './indoor/bedroom/pfg-handyman-19-1024x559.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 11,
    category: 'bedroom',
    image: new URL(
      './indoor/bedroom/pfg-handyman-29-559x1024.jpeg',
      import.meta.url,
    ).href,
  },

  // Indoor - Living Room
  {
    id: 12,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-10-1024x577.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 13,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-11-520x1024.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 14,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-12-1024x577.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 15,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-13-1024x577.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 16,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-20-1024x559.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 17,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-21-1024x559.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 18,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-22-1024x559.jpeg',
      import.meta.url,
    ).href,
  },
  {
    id: 19,
    category: 'living-room',
    image: new URL(
      './indoor/living-room/pfg-handyman-30-1024x559.jpeg',
      import.meta.url,
    ).href,
  },

  // Outdoor
  {
    id: 20,
    category: 'outdoor',
    image: new URL('./outdoor/deck-1.jpg', import.meta.url).href,
  },
  {
    id: 21,
    category: 'outdoor',
    image: new URL('./outdoor/paint-1.jpg', import.meta.url).href,
  },
  {
    id: 22,
    category: 'outdoor',
    image: new URL('./outdoor/patio-1.jpg', import.meta.url).href,
  },
];
