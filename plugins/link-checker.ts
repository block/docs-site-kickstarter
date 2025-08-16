import type { Plugin } from 'vite';
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

interface LinkCheckerOptions {
  failOnError?: boolean;
  checkExternal?: boolean;
  exclude?: string[];
  timeout?: number;
}

export function linkChecker(options: LinkCheckerOptions = {}): Plugin {
  const { 
    failOnError = true, 
    checkExternal = false, 
    exclude = [], 
    timeout = 5000 
  } = options;

  return {
    name: 'link-checker',
    apply: 'build',
    closeBundle: async () => {
      console.log('🔗 Checking links...');
      
      try {
        const htmlFiles = glob.sync('dist/**/*.html');
        const errors: string[] = [];
        const warnings: string[] = [];
        
        for (const file of htmlFiles) {
          const content = fs.readFileSync(file, 'utf-8');
          
          // Find all href attributes
          const linkMatches = content.match(/href="([^"]*)"/g) || [];
          
          for (const linkMatch of linkMatches) {
            const href = linkMatch.match(/href="([^"]*)"/)?.[1];
            if (!href || exclude.some(pattern => href.includes(pattern))) continue;
            
            // Skip anchors, mailto, tel, javascript links
            if (href.startsWith('#') || href.startsWith('mailto:') || 
                href.startsWith('tel:') || href.startsWith('javascript:')) {
              continue;
            }
            
            // Check internal links
            if (href.startsWith('/')) {
              const possiblePaths = [
                path.join('dist', href === '/' ? 'index.html' : `${href}.html`),
                path.join('dist', href, 'index.html'),
                path.join('dist', href)
              ];
              
              const exists = possiblePaths.some(p => fs.existsSync(p));
              
              if (!exists) {
                errors.push(`❌ Broken internal link: ${href} in ${path.relative(process.cwd(), file)}`);
              }
            }
            
            // Check external links if enabled
            if (checkExternal && (href.startsWith('http://') || href.startsWith('https://'))) {
              try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeout);
                
                const response = await fetch(href, { 
                  method: 'HEAD',
                  signal: controller.signal,
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (compatible; Link-Checker/1.0)'
                  }
                });
                
                clearTimeout(timeoutId);
                
                if (!response.ok) {
                  if (response.status >= 400 && response.status < 500) {
                    errors.push(`❌ Broken external link: ${href} (${response.status}) in ${path.relative(process.cwd(), file)}`);
                  } else {
                    warnings.push(`⚠️  External link warning: ${href} (${response.status}) in ${path.relative(process.cwd(), file)}`);
                  }
                }
              } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                  warnings.push(`⚠️  External link timeout: ${href} in ${path.relative(process.cwd(), file)}`);
                } else {
                  warnings.push(`⚠️  Failed to check external link: ${href} in ${path.relative(process.cwd(), file)}`);
                }
              }
            }
          }
        }
        
        // Report results
        if (warnings.length > 0) {
          console.warn('\n⚠️  Link check warnings:');
          warnings.forEach(warning => console.warn(`  ${warning}`));
        }
        
        if (errors.length > 0) {
          console.error('\n❌ Link check failed:');
          errors.forEach(error => console.error(`  ${error}`));
          
          if (failOnError) {
            process.exit(1);
          }
        } else {
          console.log('✅ All links are valid!');
        }
        
        console.log(`\n📊 Checked ${htmlFiles.length} HTML files`);
        
      } catch (error) {
        console.error('Error during link checking:', error);
        if (failOnError) {
          process.exit(1);
        }
      }
    }
  };
}
