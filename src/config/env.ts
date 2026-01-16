/**
 * Configuration management using Vite environment variables
 */

export const config = {
  // Business Information
  business: {
    name: import.meta.env.VITE_BUSINESS_NAME || 'Your Business Name',
    phone: import.meta.env.VITE_BUSINESS_PHONE || '+1-XXX-XXX-XXXX',
    email: import.meta.env.VITE_BUSINESS_EMAIL || 'contact@example.com',
    address: {
      street: import.meta.env.VITE_BUSINESS_ADDRESS_STREET || '',
      city: import.meta.env.VITE_BUSINESS_ADDRESS_CITY || '',
      state: import.meta.env.VITE_BUSINESS_ADDRESS_STATE || 'FL',
      zip: import.meta.env.VITE_BUSINESS_ADDRESS_ZIP || '',
    },
  },

  // Website URLs
  site: {
    url: import.meta.env.VITE_SITE_URL || 'https://example.com',
    logo: import.meta.env.VITE_SITE_LOGO || 'https://example.com/logo.png',
  },

  // Social Media
  social: {
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://www.facebook.com/yourpage',
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://www.instagram.com/yourprofile',
    tiktok: import.meta.env.VITE_SOCIAL_TIKTOK || 'https://www.tiktok.com/@yourprofile',
  },

  // Google AdSense
  adsense: {
    publisherId: import.meta.env.VITE_ADSENSE_PUBLISHER_ID || 'ca-pub-xxxxxxxxxxxxxxxx',
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};

// Type for environment configuration
declare global {
  interface ImportMetaEnv {
    readonly VITE_BUSINESS_NAME: string;
    readonly VITE_BUSINESS_PHONE: string;
    readonly VITE_BUSINESS_EMAIL: string;
    readonly VITE_BUSINESS_ADDRESS_STREET: string;
    readonly VITE_BUSINESS_ADDRESS_CITY: string;
    readonly VITE_BUSINESS_ADDRESS_STATE: string;
    readonly VITE_BUSINESS_ADDRESS_ZIP: string;
    readonly VITE_SITE_URL: string;
    readonly VITE_SITE_LOGO: string;
    readonly VITE_SOCIAL_FACEBOOK: string;
    readonly VITE_SOCIAL_INSTAGRAM: string;
    readonly VITE_SOCIAL_TIKTOK: string;
    readonly VITE_ADSENSE_PUBLISHER_ID: string;
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export default config;

