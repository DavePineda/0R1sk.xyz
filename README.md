# Digital Rain Frontend Template

A dark, cinematic landing page with a canvas-based amber digital rain animation. Designed for AI/deep-tech companies, featuring falling mathematical symbols that splash into a simulated water surface with ripple physics.

## Features

- Full-viewport hero with interactive digital rain canvas background
- Liquid glass button with SVG displacement map refraction effect
- Capabilities section with hover-reveal images and GSAP scroll animations
- Cinematic video section with ultrawide aspect ratio
- Research project grid (4-column) with grayscale-to-color hover transitions
- Capability detail sub-pages with article-style layout and prev/next navigation
- Scroll-aware sticky navigation with blur backdrop
- Fully responsive (mobile-friendly)

## Tech Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 3.4
- GSAP 3 (scroll-triggered animations)
- React Router DOM 7 (client-side routing)
- Canvas API (digital rain effect)
- SVG Filters (liquid glass button)
- Google Fonts (EB Garamond, Inter, Fira Code)
- Geist Mono (loaded from node_modules)

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Edit `src/config.ts` with your content
4. Add images to `public/images/`
5. Add video to `public/videos/`
6. Run dev server: `npm run dev`
7. Build for production: `npm run build`

## Configuration

All content is configured in `src/config.ts`. Edit this file to customize your site.

### Config Structure

```typescript
// Site-wide settings
export const siteConfig: SiteConfig = {
  language: "",       // BCP-47 language code, e.g. "en"
  brandName: "",      // Brand name in nav bar (max ~20 chars)
};

// Main navigation
export const navigationConfig: NavigationConfig = {
  links: [],          // Array of { label: string, href: string }
  ctaText: "",        // Right-side CTA button text
};

// Hero section
export const heroConfig: HeroConfig = {
  title: "",          // Main heading (max ~20 chars)
  subtitleLine1: "",  // First subtitle line (max ~90 chars)
  subtitleLine2: "",  // Second subtitle line (max ~60 chars)
  ctaText: "",        // Button text (max ~25 chars)
};

// Capabilities section
export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "",   // Section label, e.g. "Capabilities"
  items: [],          // Array of { title, slug, description, image }
};

// Capability detail pages
export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "",   // Page label, e.g. "Capability"
  backLinkText: "",   // Back link text, e.g. "Back to home"
  prevLabel: "",      // Previous nav label
  nextLabel: "",      // Next nav label
  notFoundText: "",   // 404 message
  capabilities: {},   // Record<slug, { title, subtitle, paragraphs[] }>
};

// Architecture / video section
export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "",   // Section label, e.g. "Architecture"
  videoPath: "",      // Video file path, e.g. "/videos/cinematic-vision.mp4"
  title: "",          // Section heading (max ~55 chars)
  description: "",    // Description paragraph
};

// Research grid section
export const researchConfig: ResearchConfig = {
  sectionLabel: "",   // Section label, e.g. "Research"
  projects: [],       // Array of { title, year, discipline, image }
};

// Footer
export const footerConfig: FooterConfig = {
  heading: "",        // Footer heading (max ~35 chars)
  columns: [],        // Array of { title, links[] }
  copyright: "",      // Copyright text
  bottomLinks: [],    // Array of { label, href }
};
```

## Required Images

### Capability Section (4 images)
- `public/images/capability-1.jpg` - Hover image (min 400x300)
- `public/images/capability-2.jpg`
- `public/images/capability-3.jpg`
- `public/images/capability-4.jpg`

### Research Grid (3-4 unique images)
- `public/images/research-1.jpg` - Square format (1:1, min 400x400)
- `public/images/research-2.jpg`
- `public/images/research-3.jpg`
- `public/images/research-4.jpg` (optional)

### Video
- `public/videos/cinematic-vision.mp4` - Looping video (21:9 aspect ratio, under 15MB)

## Design

**Colors:**
- Background: `#0a0a0a` (near-black)
- Primary text: `#ffffff` (white)
- Secondary text: `#dadada` (light gray)
- Accent: amber tones `rgba(200, 170, 130)`
- Primary HSL: `34 68% 75%`

**Fonts:**
- Display/Brand: GeistMono (monospace, from node_modules)
- Headings: EB Garamond (serif, Google Fonts)
- Body: Inter (sans-serif, Google Fonts)
- Code/Year: Fira Code (monospace, Google Fonts)

**Key Animations:**
- Digital rain: Canvas-rendered falling symbols with water physics and ripple effects
- Liquid glass button: SVG displacement filter simulating glass refraction
- GSAP scroll reveals: Staggered fade-in on intersection for capabilities and research grid
- Hover transitions: Amber color shift on capability titles, grayscale-to-color on research images

## Build

```bash
npm run build
```

Output in `dist/` folder ready to deploy. Supports any static hosting (Netlify, Vercel, Cloudflare Pages, etc.).

## Project Structure

```
01-cyber-rain-frontend/
├── index.html                  # Entry point (Google Fonts loaded here)
├── package.json                # Dependencies
├── vite.config.ts              # Vite build config
├── tailwind.config.js          # Tailwind theme (shadcn preset)
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config
├── eslint.config.js            # ESLint config
├── public/
│   ├── images/.gitkeep         # Add your images here
│   └── videos/.gitkeep         # Add your video here
└── src/
    ├── config.ts               # All content configuration
    ├── main.tsx                 # React entry (BrowserRouter)
    ├── App.tsx                  # Routes (HomePage + CapabilityDetail)
    ├── index.css                # Global styles, @font-face, nav-link class
    ├── lib/
    │   └── utils.ts            # Tailwind merge utility
    ├── hooks/
    │   └── use-mobile.ts       # Mobile breakpoint hook
    ├── components/
    │   ├── LiquidGlassButton.tsx  # Glass refraction button
    │   └── ui/                    # shadcn/ui component library
    └── sections/
        ├── Navigation.tsx      # Sticky nav bar
        ├── Hero.tsx            # Hero with digital rain
        ├── AmberCascades.tsx   # Canvas digital rain effect
        ├── Curriculum.tsx      # Capabilities listing
        ├── CinematicVision.tsx # Video + text section
        ├── AlumniArchives.tsx  # Research project grid
        ├── CapabilityDetail.tsx # Detail sub-page
        └── Footer.tsx          # Footer with link columns
```

## Notes

- Do not modify component files unless fixing bugs
- All content goes in `src/config.ts`
- Images go in `public/images/`
- Video goes in `public/videos/`
- Design properties (colors, fonts) are set in `tailwind.config.js` and `index.css`
- The Geist font is loaded from `node_modules` via `@font-face` in `index.css` -- make sure to run `npm install` before dev
- The digital rain animation respects `prefers-reduced-motion` media query
- React Router uses `BrowserRouter` -- configure your hosting for SPA fallback (redirect all routes to `index.html`)
