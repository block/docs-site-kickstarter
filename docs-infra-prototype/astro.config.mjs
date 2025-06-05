import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Block Documentation Template',
      customCss: [
        './src/styles/global.css',
        './src/fonts/font-face.css',
      ],
      components: {
        Header: './src/components/Header.astro',
      },
      social: [
        {
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
          icon: 'github',
        },
      ],
      sidebar: [
        {
          label: 'Get Started',
          items: [
            { label: 'Installation', link: '/get-started/installation/' },
            { label: 'Configuration', link: '/get-started/configuration/' },
            { label: 'Deploy your site', link: '/get-started/deploy-your-site/' },
          ]
        },
        {
          label: 'Create Content',
          items: [
            { label: 'Create a page', link: '/create-content/create-a-page/' },
            { label: 'Create a doc page', link: '/create-content/create-a-doc-page/' },
            { label: 'Create a blog post', link: '/create-content/create-a-blog-post/'},
          ]
        },
        {
          label: 'Styling',
          autogenerate: { directory: 'styling' },
        },
        {
          label: 'Components & Layouts',
          autogenerate: { directory: 'components-and-layouts' },
        },
      ],
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  }
});