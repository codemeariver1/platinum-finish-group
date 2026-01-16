import logoColor from '../assets/logo-color.svg';
import config from '../config/env';

export default function Hero() {
  return (
    <section
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 px-6
        overflow-hidden"
        aria-label="Hero Section - Platinum Finish Group Home Services"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage:
              'url("https://images.pexels.com/photos/1571460/' +
              'pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-6">
          <img
            src={logoColor}
            alt={`${config.business.name} - Expert Handyman and Home Renovation Services`}
            className="h-64 w-auto"
            loading="eager"
          />
        </div>

        <h1 className="sr-only">{config.business.name} - Professional Handyman Services in South Florida</h1>

        <p className="text-xl md:text-2xl text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transforming spaces with exceptional craftsmanship and attention to detail.
          Your trusted partner for residential renovations in South Florida.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg
            transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label={`Get your free quote from ${config.business.name}`}
          >
            Get Your Free Quote
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
