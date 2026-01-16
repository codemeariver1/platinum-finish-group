import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { OutputBundle } from 'rollup'

import { getServiceAreasSchema } from './src/data/serviceAreas'

// Custom plugin to inject environment variables and service areas into HTML and XML files
const envPlugin = (env: Record<string, string>) => {
  return {
    name: 'env-plugin',
    transformIndexHtml(html: string) {
      return processTemplate(html, env);
    },
    generateBundle(_options: unknown, bundle: OutputBundle) {
      const variables = getVariables(env);

      for (const fileName in bundle) {
        if (fileName === 'sitemap.xml') {
          const file = bundle[fileName];
          if (file.type === 'asset' && typeof file.source === 'string') {
            let content = file.source;
            Object.entries(variables).forEach(([key, value]) => {
              content = content.replace(new RegExp(`__${key}__`, 'g'), value as string);
            });
            file.source = content;
          }
        }
      }
    }
  };
};

function getVariables(env: Record<string, string>) {
  return {
    VITE_BUSINESS_NAME: env.VITE_BUSINESS_NAME || 'Your Business Name',
    VITE_BUSINESS_PHONE: env.VITE_BUSINESS_PHONE || '+1-XXX-XXX-XXXX',
    VITE_BUSINESS_EMAIL: env.VITE_BUSINESS_EMAIL || 'contact@example.com',
    VITE_SITE_URL: env.VITE_SITE_URL || 'https://example.com',
    VITE_SITE_LOGO: env.VITE_SITE_LOGO || 'https://example.com/logo.png',
    VITE_SOCIAL_FACEBOOK: env.VITE_SOCIAL_FACEBOOK || 'https://www.facebook.com/yourpage',
    VITE_SOCIAL_INSTAGRAM: env.VITE_SOCIAL_INSTAGRAM || 'https://www.instagram.com/yourprofile',
    VITE_SOCIAL_TIKTOK: env.VITE_SOCIAL_TIKTOK || 'https://www.tiktok.com/@yourprofile',
    VITE_ADSENSE_PUBLISHER_ID: env.VITE_ADSENSE_PUBLISHER_ID || 'ca-pub-xxxxxxxxxxxxxxxx',
  };
}

function processTemplate(html: string, env: Record<string, string>) {
  const variables = getVariables(env);
  const serviceAreasSchema = JSON.stringify(getServiceAreasSchema());

  let result = html;
  Object.entries(variables).forEach(([key, value]) => {
    result = result.replace(new RegExp(`__${key}__`, 'g'), value as string);
  });

  result = result.replace(/"__VITE_SERVICE_AREAS_SCHEMA__"/g, serviceAreasSchema);

  return result;
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), envPlugin(env)],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  }
})
