import { defineConfig } from 'astro/config'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  integrations: [
    {
      name: 'mdx-components',
      hooks: {
        'astro:config:setup': ({ updateConfig }) => {
          updateConfig({
            markdown: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              extendDefaultPlugins: true
            }
          })
        }
      }
    }
  ]
})