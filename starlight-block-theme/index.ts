import type { StarlightPlugin } from '@astrojs/starlight/types';

/**
 * Starlight plugin that applies the Block design system.
 *
 * Injects Cash Sans fonts, Block color tokens, and typography overrides
 * via Starlight's CSS custom properties.
 */
export function blockThemePlugin(): StarlightPlugin {
  return {
    name: 'starlight-block-theme',
    hooks: {
      'config:setup'({ config, updateConfig }) {
        updateConfig({
          customCss: [
            'starlight-block-theme/styles',
            ...(config.customCss ?? []),
          ],
          expressiveCode: {
            themes: ['github-light', 'github-dark'],
            styleOverrides: {
              borderRadius: '0.5rem',
              codeFontFamily:
                "'Cash Sans Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            },
          },
        });
      },
    },
  };
}
