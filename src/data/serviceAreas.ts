/**
 * Service Areas Data
 * Contains all counties and cities served
 */

export interface County {
  name: string;
  cities: string[];
}

export const serviceAreaCounties: County[] = [
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

/**
 * Convert service areas data to JSON-LD schema format
 */
export function getServiceAreasSchema() {
  return serviceAreaCounties.map(county => ({
    '@type': 'AdministrativeArea',
    name: county.name,
    containsPlace: county.cities.map(city => ({
      '@type': 'City',
      name: city
    }))
  }));
}

