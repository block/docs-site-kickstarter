import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { blockThemePlugin } from 'starlight-block-theme';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Block Docs',
      plugins: [blockThemePlugin()],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/nickhq/madrid' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'installation' },
            { label: 'Configuration', slug: 'configuration' },
            { label: 'Deployment', slug: 'deployment' },
          ],
        },
        {
          label: 'Block Components',
          items: [
            { label: 'Accordion', slug: 'block-components/accordion' },
            { label: 'Checklist', slug: 'block-components/checklist' },
            { label: 'GitHub Stats', slug: 'block-components/github-stats' },
            { label: 'Hero', slug: 'block-components/hero' },
            { label: 'Tabs', slug: 'block-components/tabs' },
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Button', slug: 'components/button' },
            { label: 'Card Group', slug: 'components/card-group' },
            { label: 'Code Snippet', slug: 'components/code-snippet' },
            { label: 'Divider', slug: 'components/divider' },
            { label: 'Inline Code', slug: 'components/inline-code' },
            { label: 'Sidebar', slug: 'components/sidebar' },
            { label: 'Table', slug: 'components/table' },
          ],
        },
        {
          label: 'Create Content',
          items: [
            { label: 'Create a Blog Post', slug: 'create-content/create-blog' },
            { label: 'Create a Doc Page', slug: 'create-content/create-doc' },
            { label: 'Create a Page', slug: 'create-content/create-page' },
          ],
        },
        {
          label: 'Layouts',
          items: [
            { label: 'Overview', slug: 'layouts' },
            { label: 'Landing', slug: 'layouts/landing' },
            { label: 'Documentation', slug: 'layouts/documentation' },
            { label: 'Tutorial', slug: 'layouts/tutorial' },
            { label: 'API Reference', slug: 'layouts/api' },
            { label: 'Bento Grid', slug: 'layouts/bento-grid' },
            { label: 'Header Section', slug: 'layouts/header-section' },
            { label: 'Feature Section', slug: 'layouts/feature-section' },
            { label: 'CTA Section', slug: 'layouts/cta-section' },
            { label: 'Blog Section', slug: 'layouts/blog-section' },
            { label: 'FAQ Section', slug: 'layouts/faq-section' },
            { label: 'Logo Section', slug: 'layouts/logo-section' },
            { label: 'Footer', slug: 'layouts/footer' },
          ],
        },
        {
          label: 'Styling',
          items: [
            { label: 'Icons', slug: 'styling/icons' },
            { label: 'Theme Customization', slug: 'styling/theme-customization' },
            { label: 'Typography', slug: 'styling/typography' },
          ],
        },
      ],
    }),
  ],
});
