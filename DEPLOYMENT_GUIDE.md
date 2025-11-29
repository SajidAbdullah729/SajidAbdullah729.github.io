# GitHub Pages Deployment Guide

## ✅ Project Conversion Complete

Your portfolio has been successfully converted from Next.js to a React SPA using Vite, optimized for GitHub Pages deployment.

## 🎯 Key Features

- ✅ Single-page application with smooth section switching
- ✅ No page reloads when navigating between sections
- ✅ Client-side routing compatible with GitHub Pages
- ✅ All Next.js dependencies removed
- ✅ Ready for GitHub Pages deployment

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### 3. Build for Production

```bash
npm run build
```

This creates a `dist` folder with all the production files.

## 📦 GitHub Pages Deployment

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

**Steps:**
1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push

### Manual Deployment

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **If your repo is NOT at root** (e.g., `username.github.io/repo-name`):
   - Update `vite.config.ts`:
     ```typescript
     base: '/repo-name/'
     ```
   - Rebuild: `npm run build`

3. **Deploy using gh-pages:**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── sections/        # All section components
│   │   ├── TopNav.tsx       # Navigation with section switching
│   │   ├── BackToTop.tsx    # Back to top button
│   │   └── AOSInit.tsx      # Animation initialization
│   ├── App.tsx              # Main app with section routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets (images, etc.)
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies
```

## 🔧 Configuration

### Base Path for GitHub Pages

If your repository is not at the root (e.g., `username.github.io/repo-name`), update the `base` in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/repo-name/',  // Change this to your repo name
  // ...
})
```

### Section Navigation

Sections are controlled in `src/App.tsx`. To add/remove sections:

1. Add the section component import
2. Add it to the `Section` type
3. Add it to the `navItems` in `TopNav.tsx`
4. Add the section div in `App.tsx`

## 🎨 How Section Switching Works

- Clicking a nav link updates the active section state
- Only the active section is displayed (others are hidden)
- URL hash is updated for bookmarking/sharing
- Smooth scroll to top when switching sections
- No page reloads - pure client-side navigation

## 📝 Notes

- All assets should be in the `public` folder
- Images are referenced as `/assets/...` (from public root)
- CSS modules are used for component styling
- AOS animations are initialized on mount
- Typed.js is used for the hero typing effect

## 🐛 Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

### Assets not loading on GitHub Pages
- Ensure assets are in the `public` folder
- Check that paths start with `/` (absolute from root)
- Verify `base` in `vite.config.ts` matches your repo structure

### Sections not switching
- Check browser console for errors
- Verify all section components are imported in `App.tsx`
- Ensure section IDs match the navigation data attributes

## ✨ Next Steps

1. Customize your content in the section components
2. Update images in the `public/assets` folder
3. Adjust colors and styles in CSS modules
4. Deploy to GitHub Pages
5. Share your portfolio! 🎉

