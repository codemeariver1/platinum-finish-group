/**
 * SEO Utilities for managing meta tags and structured data
 */

import config from '../config/env';

export interface SEOMetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: string | number | boolean | object | (string | number | boolean | object)[];
}

/**
 * Update document meta tags for SEO
 */
export function updateMetaTags(meta: SEOMetaTags) {
  // Update title
  document.title = meta.title;

  // Update or create meta description
  updateMetaTag('description', meta.description);

  // Update keywords if provided
  if (meta.keywords) {
    updateMetaTag('keywords', meta.keywords);
  }

  // Open Graph tags
  if (meta.ogTitle) {
    updateMetaTag('og:title', meta.ogTitle, 'property');
  }
  if (meta.ogDescription) {
    updateMetaTag('og:description', meta.ogDescription, 'property');
  }
  if (meta.ogImage) {
    updateMetaTag('og:image', meta.ogImage, 'property');
  }
  if (meta.ogUrl) {
    updateMetaTag('og:url', meta.ogUrl, 'property');
  }

  // Twitter Card tags
  if (meta.twitterCard) {
    updateMetaTag('twitter:card', meta.twitterCard);
    updateMetaTag('twitter:title', meta.title);
    updateMetaTag('twitter:description', meta.description);
  }

  // Canonical URL
  if (meta.canonicalUrl) {
    updateCanonicalTag(meta.canonicalUrl);
  }
}

/**
 * Update or create a single meta tag
 */
function updateMetaTag(
  name: string,
  content: string,
  attribute: 'name' | 'property' = 'name'
) {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

/**
 * Update or create canonical URL tag
 */
function updateCanonicalTag(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

/**
 * Add structured data (JSON-LD) to the page
 */
export function addStructuredData(data: StructuredData) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Remove all JSON-LD structured data scripts
 */
export function removeStructuredData() {
  document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
    script.remove();
  });
}

/**
 * Get business structured data using environment variables
 */
export function getBusinessStructuredData(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.business.name,
    image: config.site.logo,
    description:
        'Professional handyman service specializing in home repairs, maintenance, and improvements in South Florida',
    telephone: config.business.phone,
    email: config.business.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: config.business.address.state,
      streetAddress: config.business.address.street,
      addressCity: config.business.address.city,
      postalCode: config.business.address.zip,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Broward County',
        state: 'Florida',
        country: 'United States'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Miami-Dade County',
        state: 'Florida',
        country: 'United States'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County',
        state: 'Florida',
        country: 'United States'
      }
    ],
    sameAs: [
      config.social.facebook,
      config.social.instagram,
      config.social.tiktok
    ],
    url: config.site.url
  };
}

/**
 * Service structured data using environment variables
 */
export function createServiceStructuredData(
  name: string,
  description: string,
  image?: string
): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    image: image || config.site.logo,
    provider: {
      '@type': 'LocalBusiness',
      name: config.business.name,
      image: config.site.logo,
      url: config.site.url,
      telephone: config.business.phone,
      email: config.business.email,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida'
    },
    availableLanguage: 'en'
  };
}

