# Portfolio Website

A modern, single-page React portfolio website built with Vite and TypeScript, optimized for GitHub Pages deployment.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 📱 Mobile-friendly navigation
- 🎯 Single-page application with smooth section switching
- 🚀 Ready for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. If your repository is not at the root (e.g., `username.github.io/repo-name`), update `vite.config.ts`:
```typescript
base: '/repo-name/'
```

3. Copy the `dist` folder contents to the `gh-pages` branch or use:
```bash
npm install -g gh-pages
gh-pages -d dist
```

## Project Structure

```
src/
├── components/
│   ├── sections/      # Section components
│   ├── TopNav.tsx     # Navigation component
│   ├── BackToTop.tsx  # Back to top button
│   └── AOSInit.tsx    # AOS animation init
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Technologies

- React 18
- TypeScript
- Vite
- AOS (Animate On Scroll)
- Typed.js

## License

MIT
