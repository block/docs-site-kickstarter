# Branch Preview Deployment System

This repository is configured with a GitHub Actions workflow that automatically deploys branch previews, similar to Netlify's branch deployments.

## How it works

### Main Branch Deployment
- **Trigger**: Every push to the `main` branch
- **Deployment**: Main site deployed to the root of GitHub Pages
- **URL**: https://block.github.io/docs-site-kickstarter/

### Branch Preview Deployment
- **Trigger**: Every push to any non-main branch
- **Deployment**: Branch-specific preview deployed to a subdirectory
- **URL Pattern**: https://block.github.io/docs-site-kickstarter/branch/[branch-name]/
- **Index**: All branch previews listed at https://block.github.io/docs-site-kickstarter/branch/

## Features

### ✅ Automatic Branch Previews
- Every branch gets its own preview URL
- Branch names with slashes (e.g., `feature/new-docs`) are converted to safe URLs (`feature-new-docs`)
- Previews are updated on every push to the branch

### ✅ Branch Preview Index
- Navigate to `/branch/` to see all available branch previews
- Clean, organized interface showing all active branch deployments
- Direct links to each branch preview

### ✅ Automatic Cleanup
- Branch previews are automatically cleaned up when branches are deleted
- Manual cleanup available through workflow dispatch
- Keeps the deployment clean and organized

### ✅ Astro Configuration
- Branch previews automatically get the correct `base` path configuration
- Assets and routing work correctly for each branch
- No manual configuration needed per branch

## Usage

### Creating a Branch Preview
1. Create a new branch: `git checkout -b feature/my-new-feature`
2. Make your changes and push: `git push origin feature/my-new-feature`
3. GitHub Actions will automatically build and deploy your branch preview
4. Access your preview at: `https://block.github.io/docs-site-kickstarter/branch/feature-my-new-feature/`

### Viewing All Previews
Visit https://block.github.io/docs-site-kickstarter/branch/ to see all available branch previews.

### Manual Cleanup
If you need to manually clean up a branch preview:
1. Go to the Actions tab in GitHub
2. Select "Cleanup Branch Previews"
3. Click "Run workflow"
4. Optionally specify a branch name to clean up

## Technical Details

### Workflow Files
- `.github/workflows/deploy.yaml` - Main deployment workflow
- `.github/workflows/cleanup-previews.yaml` - Cleanup workflow for deleted branches

### Deployment Strategy
- Uses GitHub Pages with the `gh-pages` branch
- Main branch content deployed to root
- Branch previews deployed to `/branch/[branch-name]/` subdirectories
- Single deployment branch manages all content

### Branch Name Handling
- Branch names with special characters are sanitized for URLs
- Forward slashes (`/`) are converted to hyphens (`-`)
- Original branch names are preserved in the preview index display

## Limitations

- GitHub Pages serves from a single branch, so all content is managed in `gh-pages`
- Branch previews share the same domain as the main site
- Large numbers of branches may impact build times
- Preview URLs are not as short as dedicated preview services

## Comparison to Netlify

| Feature | Netlify | This Solution |
|---------|---------|---------------|
| Branch Previews | ✅ Automatic | ✅ Automatic |
| Custom URLs | ✅ Subdomain | ✅ Path-based |
| Cleanup | ✅ Automatic | ✅ Automatic |
| Build Speed | ⚡ Fast | 🐌 GitHub Actions |
| Cost | 💰 Paid plans | 🆓 Free with GitHub |
| Setup | 🎯 Simple | 🔧 Custom workflow |

This solution provides Netlify-like branch preview functionality using only GitHub Actions and GitHub Pages, making it completely free and integrated with your existing GitHub workflow.
