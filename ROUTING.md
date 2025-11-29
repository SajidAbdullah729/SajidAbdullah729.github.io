# Routing Structure

The portfolio now uses separate routes for each section instead of a single-page application.

## Routes

- `/` - Home (Hero section)
- `/about` - About section
- `/resume` - Resume download section
- `/education` - Education & Experiences
- `/competitive-programming` - Competitive Programming profiles and contests
- `/certifications` - Certifications
- `/portfolio` - Academic Projects listing
- `/projects/[slug]` - Individual project details (carmania, medimart, nextgen, alaska)
- `/research` - Research publications
- `/skills` - Programming Skills
- `/contact` - Contact information

## Navigation

The top navigation bar uses Next.js `Link` components for client-side routing. The active route is highlighted automatically.

## Benefits

- Better SEO (each section has its own URL)
- Faster page loads (only load what's needed)
- Better user experience (shareable URLs for each section)
- Cleaner code organization

