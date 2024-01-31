import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/en',
  },
  integrations: [
    react(),
    starlight({
      title: '🐱‍🚀 Cat-UI Docs',
      social: {
        github: 'https://github.com/Juanestban/catui',
        twitter: 'https://twitter.com/juanestbandev',
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        es: {
          label: 'Español',
        },
      },
      favicon: '/catui-v2.png',
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            en: 'Getting Started',
            es: 'empezando',
          },
          autogenerate: {
            directory: 'getting-started',
          },
        },
        {
          label: 'Components',
          translations: {
            en: 'Components',
            es: 'Componentes',
          },
          autogenerate: {
            directory: 'components',
          },
        },
        {
          label: 'Guides',
          translations: {
            en: 'Guides',
            es: 'Guias',
          },
          autogenerate: {
            directory: 'guides',
          },
        },
        {
          label: 'Reference',
          translations: {
            en: 'Reference',
            es: 'Referencia',
          },
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
  ],
});
