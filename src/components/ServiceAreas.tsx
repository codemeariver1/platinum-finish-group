import { MapPin } from 'lucide-react';
import { useState } from 'react';

const counties = [
  {
    name: 'Broward County',
    cities: [
      'Coconut Creek', 'Cooper City', 'Coral Springs', 'Dania Beach', 'Davie',
      'Deerfield Beach', 'Fort Lauderdale', 'Hallandale Beach', 'Hillsboro Beach',
      'Hollywood', 'Lauderdale-by-the-Sea', 'Lauderdale Lakes', 'Lauderhill',
      'Lazy Lake', 'Lighthouse Point', 'Margate', 'Miramar', 'North Lauderdale',
      'Oakland Park', 'Parkland', 'Pembroke Park', 'Pembroke Pines', 'Plantation',
      'Pompano Beach', 'Sea Ranch Lakes', 'Southwest Ranches', 'Sunrise', 'Tamarac',
      'West Park', 'Weston', 'Wilton Manors'
    ]
  },
  {
    name: 'Miami-Dade County',
    cities: [
      'Aventura', 'Bal Harbour', 'Bay Harbor Islands', 'Biscayne Park', 'Coral Gables',
      'Cutler Bay', 'Doral', 'El Portal', 'Florida City', 'Golden Beach', 'Hialeah',
      'Hialeah Gardens', 'Homestead', 'Indian Creek', 'Key Biscayne', 'Medley',
      'Miami', 'Miami Beach', 'Miami Gardens', 'Miami Lakes', 'Miami Shores',
      'Miami Springs', 'North Bay Village', 'North Miami', 'North Miami Beach',
      'Opa-Locka', 'Palmetto Bay', 'Pinecrest', 'South Miami', 'Sunny Isles Beach',
      'Surfside', 'Sweetwater', 'Virginia Gardens', 'West Miami'
    ]
  },
  {
    name: 'Palm Beach County',
    cities: [
      'Atlantis', 'Belle Glade', 'Boca Raton', 'Boynton Beach', 'Briny Breezes',
      'Cloud Lake', 'Delray Beach', 'Glen Ridge', 'Golf', 'Greenacres', 'Gulf Stream',
      'Haverhill', 'Highland Beach', 'Hypoluxo', 'Juno Beach', 'Jupiter',
      'Jupiter Inlet Colony', 'Lake Clarke Shores', 'Lake Park', 'Lake Worth',
      'Lantana', 'Loxahatchee Groves', 'Manalapan', 'Mangonia Park', 'North Palm Beach',
      'Ocean Ridge', 'Pahokee', 'Palm Beach', 'Palm Beach Gardens', 'Palm Beach Shores',
      'Palm Springs', 'Riviera Beach', 'Royal Palm Beach', 'South Bay', 'South Palm Beach',
      'Tequesta', 'Wellington', 'Westlake', 'West Palm Beach'
    ]
  }
];

export default function ServiceAreas() {
  const [expandedCounty, setExpandedCounty] = useState<number | null>(0);

  const toggleCounty = (index: number) => {
    setExpandedCounty(expandedCounty === index ? null : index);
  };

  return (
    <section id="service-areas" className="py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Service Areas</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We proudly serve South Florida across three major counties with expert home renovation and construction
            services
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {counties.map((county, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200
              hover:shadow-lg transition-shadow"
            >
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b-2 border-red-600">
                {county.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {county.cities.map((city, cityIndex) => (
                  <div
                    key={cityIndex}
                    className="text-slate-700 text-sm hover:text-amber-600 transition-colors"
                  >
                    • {city}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet View - Accordion */}
        <div className="hidden md:block lg:hidden space-y-3">
          {counties.map((county, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border
              border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleCounty(index)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 text-left">{county.name}</h3>
                <div
                  className={`text-red-600 transition-transform flex-shrink-0 ${
                    expandedCounty === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>

              {expandedCounty === index && (
                <div className="px-4 pb-3 bg-white">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {county.cities.map((city, cityIndex) => (
                      <div
                        key={cityIndex}
                        className="text-slate-700"
                      >
                        • {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion */}
        <div className="md:hidden space-y-3">
          {counties.map((county, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200
              overflow-hidden"
            >
              <button
                onClick={() => toggleCounty(index)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 text-left">{county.name}</h3>
                <div
                  className={`text-red-600 transition-transform flex-shrink-0 ${
                    expandedCounty === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>

              {expandedCounty === index && (
                <div className="px-4 pb-3 bg-white">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {county.cities.map((city, cityIndex) => (
                      <div
                        key={cityIndex}
                        className="text-slate-700"
                      >
                        • {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

