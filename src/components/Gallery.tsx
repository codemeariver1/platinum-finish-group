import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from "../assets/work-gallery";

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'bathroom', label: 'Bathrooms' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bedroom', label: 'Bedrooms' },
  { id: 'living-room', label: 'Living Rooms' },
  { id: 'outdoor', label: 'Outdoor' },
];

export default function Gallery() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCurrentPage(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ITEMS_PER_PAGE = isMobile ? 2 : 6;

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleSwipe();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleSwipe = () => {
    if (touchStart === 0 || touchEnd === 0) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      setIsSwiping(true);
      if (distance > 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  };

  const handleImageClick = (id: number) => {
    if (!isSwiping) {
      setSelectedImage(id);
    }
    setIsSwiping(false);
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Work</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Browse our portfolio of completed home renovation and repair projects showcasing the quality and expertise
            of our handyman services in South Florida.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist" aria-label="Gallery category filters">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              role="tab"
              aria-selected={selectedCategory === category.id}
              aria-label={`Filter gallery by ${category.label}`}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 cursor-grab
          active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.id)}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-48 md:h-72"
              style={{ colorScheme: 'light' }}
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ WebkitFilterForcedColorAdjust: 'none' } as React.CSSProperties}
              />
              <div
                className="absolute inset-0 group-hover:bg-black/50 transition-all duration-300 pointer-events-none"
                style={{ backgroundColor: 'transparent' }}
              >
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="bg-red-600 hover:bg-red-700 disabled:bg-slate-300 text-white p-3 rounded-lg
              transition-colors disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentPage ? 'bg-red-600 w-6' : 'bg-slate-300 w-2'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="bg-red-600 hover:bg-red-700 disabled:bg-slate-300 text-white p-3 rounded-lg
              transition-colors disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-600 transition-colors z-50 text-3xl
              font-bold"
            >
              ✕
            </button>
            <img
              src={galleryItems.find(item => item.id === selectedImage)?.image}
              alt={galleryItems.find(item => item.id === selectedImage)?.description || 'Gallery image'}
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

