# GitHub Pages Deployment Setup

## ✅ Pre-Deployment Checklist

### 1. Repository Name
Make sure your GitHub repository name matches the `basePath` in `next.config.js`:
- Current basePath: `/My-PortFolio`
- If your repo is named differently, update `next.config.js` line 7:
  ```javascript
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  ```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 3. Push Your Code
```bash
git add .
git commit -m "Ready for GitHub Pages deployment"
git push origin main
```

### 4. Automatic Deployment
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
  - Build your Next.js project
  - Generate static files in the `out` folder
  - Deploy to GitHub Pages
- Check the **Actions** tab in your repository to see the deployment progress

### 5. Your Site Will Be Live At:
```
https://yourusername.github.io/My-PortFolio/
```

## Important Notes

- ✅ Static export is configured (`output: 'export'` in `next.config.js`)
- ✅ Images are unoptimized (required for static export)
- ✅ Trailing slashes enabled (required for GitHub Pages routing)
- ✅ Base path configured for repository name
- ✅ GitHub Actions workflow ready

## Troubleshooting

### If deployment fails:
1. Check the **Actions** tab for error messages
2. Verify your repository name matches the basePath
3. Make sure all dependencies are in `package.json`
4. Ensure `node_modules` is in `.gitignore` (it should be)

### If images don't load:
- Verify assets are in `public/assets/` folder
- Check that image paths use `/assets/...` (absolute paths)

### If routes return 404:
- Make sure `trailingSlash: true` is set in `next.config.js` (already set)
- GitHub Pages needs trailing slashes for routes

## Current Configuration Status

✅ **Ready for Deployment!**

All necessary configurations are in place:
- `next.config.js` - Static export and basePath configured
- `.github/workflows/deploy.yml` - Automated deployment workflow
- `package.json` - All dependencies listed
- `.gitignore` - Proper exclusions set

Just push your code and enable GitHub Pages in repository settings!

