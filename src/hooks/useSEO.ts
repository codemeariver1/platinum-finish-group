import { useEffect } from 'react';
import { updateMetaTags, addStructuredData, removeStructuredData, type StructuredData } from '../utils/seo';

interface UseSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  structuredData?: StructuredData;
}

/**
 * React hook for updating SEO meta tags and structured data
 * Usage: useSEO({ title, description, keywords, structuredData })
 */
export function useSEO({
  title,
  description,
  keywords,
  image = 'https://platinumfinishg.com/logo-preview.png',
  url = 'https://platinumfinishg.com/',
  structuredData
}: UseSEOProps) {
  useEffect(() => {
    updateMetaTags({
      title: `${title} | Platinum Finish Group LLC`,
      description,
      keywords,
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: url,
      twitterCard: 'summary_large_image',
      canonicalUrl: url
    });

    if (structuredData) {
      removeStructuredData();
      addStructuredData(structuredData);
    }

    return () => {
      updateMetaTags({
        title: 'Platinum Finish Group LLC - Expert Handyman & Home Renovation Services in South Florida',
        description: 'Professional handyman services in South Florida. Specializing in home repairs, maintenance, ' +
            'kitchen and bathroom remodeling, painting, drywall, tiling, and more.'
      });
    };
  }, [title, description, keywords, image, url, structuredData]);
}

