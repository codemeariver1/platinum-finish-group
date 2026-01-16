import { Paintbrush, Home, Wrench, Hammer, Grid3x3, Layers, Frame, Bath, ChefHat, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const services = [
  {
    icon: Layers,
    title: 'Knockdown Texture',
    description: 'Professional knockdown texture application for modern, sophisticated wall finishes.'
  },
  {
    icon: Droplets,
    title: 'Popcorn Removal',
    description: 'Expert removal of outdated popcorn ceilings to modernize your space.'
  },
  {
    icon: Home,
    title: 'Stucco',
    description: 'Durable and beautiful stucco installation and repair for interior and exterior surfaces.'
  },
  {
    icon: Frame,
    title: 'Accent Walls',
    description: 'Custom accent walls that add character and focal points to any room.'
  },
  {
    icon: Grid3x3,
    title: 'Tiling',
    description: 'Precision tile installation for floors, walls, backsplashes, and more.'
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'Professional interior and exterior painting with meticulous attention to detail.'
  },
  {
    icon: ChefHat,
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen renovations from design to final installation.'
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Custom carpentry work including trim, cabinetry, and built-in solutions.'
  },
  {
    icon: Wrench,
    title: 'Drywall & Metal Studding',
    description: 'Expert drywall installation, repair, and metal framing for structural integrity.'
  },
  {
    icon: Bath,
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom into a luxurious retreat with our complete remodeling services.'
  }
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const currentService = services[currentIndex];

  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive home improvement solutions tailored to your vision
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="
            bg-white rounded-xl p-8 shadow-lg border border-slate-100 mb-6 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <currentService.icon className="w-8 h-8 text-red-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{currentService.title}</h3>
            <p className="text-slate-600 leading-relaxed">{currentService.description}</p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevSlide}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-red-600 w-6' : 'bg-slate-300 w-2'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
              bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform
              hover:-translate-y-2 border border-slate-100"
            >
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-red-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
