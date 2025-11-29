# Setup Instructions

## Asset Migration

You need to copy your assets from the old project structure to the new Next.js `public` folder:

### Steps:

1. Copy the entire `assets` folder to `public/assets`:
   ```
   assets/ → public/assets/
   ```

2. The structure should be:
   ```
   public/
   ├── assets/
   │   ├── img/
   │   │   ├── image.jpg
   │   │   ├── image2.jpg
   │   │   ├── imageback.jpg
   │   │   ├── favicon.png
   │   │   └── apple-touch-icon.png
   │   └── projects/
   │       ├── alaska/
   │       ├── carmania/
   │       ├── medimart/
   │       └── nextgen/
   ```

### Quick Copy Commands (Windows PowerShell):

```powershell
# From project root
Copy-Item -Path "assets" -Destination "public/assets" -Recurse
```

### Quick Copy Commands (Linux/Mac):

```bash
# From project root
cp -r assets public/assets
```

## After Copying Assets

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

1. Make sure your repository name matches the `basePath` in `next.config.js`
2. Push your code to GitHub
3. The GitHub Actions workflow will automatically deploy to GitHub Pages
4. Or manually: Go to Settings → Pages → Select `gh-pages` branch or `out` folder

## Notes

- All image paths in the code are already updated to use `/assets/...` which will work with Next.js public folder
- The project uses CSS Modules for component styling
- AOS (Animate On Scroll) is initialized globally
- Typed.js is used for the hero typing effect
- Swiper is used for portfolio detail image carousels

