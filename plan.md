# ONE-IN-TOWN PORTFOLIO — COMPLETE IMPLEMENTATION ROADMAP
## Antigravity IDE Agent-Based Development

---

## 📋 TABLE OF CONTENTS

1. [Pre-Build Phase](#phase-0-pre-build-foundation)
2. [Phase 1: Technical Foundation](#phase-1-technical-foundation)
3. [Phase 2: Design System & Tokens](#phase-2-design-system--tokens)
4. [Phase 3: Core Infrastructure](#phase-3-core-infrastructure)
5. [Phase 4: Section Implementation](#phase-4-section-implementation)
6. [Phase 5: Motion System](#phase-5-motion-system)
7. [Phase 6: Performance Optimization](#phase-6-performance-optimization)
8. [Phase 7: Quality Assurance](#phase-7-quality-assurance)
9. [Phase 8: Launch Preparation](#phase-8-launch-preparation)
10. [Agent Assignment Matrix](#agent-assignment-matrix)

---

## PHASE 0: PRE-BUILD FOUNDATION
**Duration:** 3-5 days  
**Status Gate:** Cannot proceed to Phase 1 until 100% complete

### Stage 0.1: Content Production (BLOCKING)
**Agent Assignment:** Content Agent + Human Review

**Deliverables:**
- ✅ Hero headline (LOCKED): "I build digital systems that feel inevitable."
- ✅ About copy (LOCKED): Three sentences, 49 words
- ☐ Project selection & curation (3-5 projects)
- ☐ Project one-liners (max 12 words each)
- ☐ Process principles (3-4 statements, ≤12 words each)
- ☐ Credibility signals copy
- ☐ CTA copy (one sentence)

**Content Agent Tasks:**
```
1. Review project portfolio
2. Apply range principle:
   - Project 1: Systems thinking
   - Project 2: Visual restraint
   - Project 3: Technical execution
   - Project 4: Editorial judgment
   - Project 5: Problem framing (optional)
3. Write one-line insight per project
4. Ensure no overlapping strengths
5. Editorial pass: remove words until only intent remains
```

**Acceptance Criteria:**
- Each project demonstrates ONE different strength
- No project serves the same narrative purpose
- All copy is final and locked
- No "TBD" or placeholder content

**Human Review Required:**
- Final approval on project selection
- Sign-off on all copy

---

### Stage 0.2: Asset Preparation
**Agent Assignment:** Asset Agent

**Image Requirements:**
```
Format: AVIF primary, WebP fallback
Dimensions: Explicit width/height attributes required
Optimization: < 200KB per image
Naming: project-{n}-hero.avif
Location: /public/images/
```

**Asset Agent Tasks:**
1. Collect project hero images (3-5)
2. Collect About portrait/abstract image (1)
3. Convert all to AVIF + WebP
4. Generate explicit dimensions manifest
5. Optimize for load budget
6. Create credibility signal logos (monochrome SVG)

**Deliverables:**
- `/public/images/project-1-hero.avif` (+ .webp)
- `/public/images/project-2-hero.avif` (+ .webp)
- `/public/images/project-3-hero.avif` (+ .webp)
- `/public/images/about-portrait.avif` (+ .webp)
- `/public/images/logos/` (monochrome SVGs)
- `image-manifest.json` with dimensions

**Acceptance Criteria:**
- Total image payload < 1.5MB
- All images have explicit dimensions
- No image causes CLS
- AVIF support with WebP fallback

---

### Stage 0.3: Design Specification Lock
**Agent Assignment:** Design Agent + Human Review

**Design Agent Tasks:**
1. Create Figma/design file with exact specifications
2. Implement 6-section layout structure
3. Define exact spacing tokens
4. Typography scale implementation
5. Color system documentation
6. Motion intent documentation (no animation yet)

**Deliverables:**
- Design file with all 6 sections
- Spacing token documentation
- Typography scale reference
- Motion intent per section (written description)
- Mobile/tablet/desktop breakpoint specs

**Acceptance Criteria:**
- All sections designed at 3 breakpoints
- Zero ambiguity in implementation specs
- Motion described in words, not shown
- Human sign-off on all designs

---

## PHASE 1: TECHNICAL FOUNDATION
**Duration:** 2-3 days  
**Dependencies:** Phase 0 complete

### Stage 1.1: Next.js Project Initialization
**Agent Assignment:** Infrastructure Agent

**Tasks:**
```bash
1. Initialize Next.js 14+ with App Router
   npx create-next-app@latest one-in-town-portfolio --typescript --tailwind --app

2. Project structure:
   /app
     /components
       /sections
       /ui
       /motion
     /lib
       /utils
       /constants
     /styles
     /public
       /images
       /fonts
```

**Configuration Files:**

**`next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
```

**Deliverables:**
- ✅ Next.js project initialized
- ✅ Folder structure created
- ✅ TypeScript configured
- ✅ next.config.js optimized

**Acceptance Criteria:**
- `npm run dev` starts successfully
- TypeScript has zero errors
- Folder structure matches spec

---

### Stage 1.2: Dependency Installation
**Agent Assignment:** Infrastructure Agent

**Allowed Dependencies:**
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

**Tasks:**
1. Install GSAP + ScrollTrigger
2. Install @gsap/react hook
3. Verify no extra dependencies
4. Lock dependency versions

**Acceptance Criteria:**
- Only approved dependencies installed
- package-lock.json committed
- No security vulnerabilities
- All dependencies have explicit versions

---

### Stage 1.3: Font Setup
**Agent Assignment:** Typography Agent

**Font Strategy:**
- Primary: SF Pro Display/Text (if licensed)
- Fallback: Inter (Google Fonts)

**Tasks:**

**Option A: SF Pro (Licensed):**
```typescript
// app/layout.tsx
import localFont from 'next/font/local'

const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/SF-Pro-Display-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
  display: 'swap',
  preload: true,
})
```

**Option B: Inter (Fallback):**
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})
```

**Font Loading Strategy:**
```typescript
// Prevent FOUT
<html className={sfPro.variable} suppressHydrationWarning>
  <body className="font-sans antialiased">
```

**Deliverables:**
- Fonts downloaded and optimized
- Font variables configured
- FOUT prevention implemented
- Fallback metrics matched

**Acceptance Criteria:**
- No flash of unstyled text
- Fonts load < 100ms
- Fallback fonts match metrics
- All weights available

---

## PHASE 2: DESIGN SYSTEM & TOKENS
**Duration:** 1-2 days  
**Dependencies:** Phase 1 complete

### Stage 2.1: Tailwind Configuration
**Agent Assignment:** Design Systems Agent

**`tailwind.config.ts`:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        muted: 'rgba(255, 255, 255, 0.7)',
        subtle: 'rgba(255, 255, 255, 0.45)',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: '#2997FF',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.4' }],
      },
      fontFamily: {
        sans: ['var(--font-sf-pro)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '10rem',
        'section-mobile': '5rem',
      },
      maxWidth: {
        'content': '1200px',
        'prose': '680px',
      },
    },
  },
  plugins: [],
}

export default config
```

**Deliverables:**
- ✅ Color tokens configured
- ✅ Typography scale defined
- ✅ Spacing system established
- ✅ Responsive breakpoints set

**Acceptance Criteria:**
- All PRD colors available as Tailwind classes
- Typography scale matches Appendix C
- No custom CSS needed for colors
- Design tokens locked and documented

---

### Stage 2.2: Global Styles
**Agent Assignment:** Design Systems Agent

**`app/globals.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    @apply scroll-smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: 'kern' 1, 'liga' 1;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Selection color */
  ::selection {
    @apply bg-accent text-background;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Deliverables:**
- Global styles configured
- Reduced motion support
- Font smoothing applied
- Selection styling

**Acceptance Criteria:**
- Dark background applies globally
- Fonts render smoothly
- Reduced motion respected
- No style conflicts

---

### Stage 2.3: Constants & Configuration
**Agent Assignment:** Infrastructure Agent

**`lib/constants/motion.ts`:**
```typescript
export const MOTION_CONFIG = {
  ease: {
    default: 'power3.out',
    smooth: 'power2.inOut',
  },
  duration: {
    min: 0.4,
    max: 0.8,
    default: 0.6,
  },
} as const

export const BREAKPOINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
} as const
```

**`lib/constants/content.ts`:**
```typescript
export const HERO_CONTENT = {
  headline: "I build digital systems that feel inevitable.",
  subheading: "", // Optional 8-word max
} as const

export const ABOUT_CONTENT = {
  paragraph: "I believe great software is quiet, fast, and deliberate. I build web systems by prioritizing performance, clarity, and long-term maintainability over short-term polish. I'm looking to work with teams who value judgment, restraint, and craft.",
} as const

// Projects will be populated from Phase 0 content
export const PROJECTS = [
  // To be filled after content production
] as const
```

**Deliverables:**
- Motion constants defined
- Content constants created
- Breakpoint definitions
- Type safety for all constants

**Acceptance Criteria:**
- All magic numbers eliminated
- Content centralized
- TypeScript types defined
- Easy to update content

---

## PHASE 3: CORE INFRASTRUCTURE
**Duration:** 2-3 days  
**Dependencies:** Phase 2 complete

### Stage 3.1: GSAP Setup & Utilities
**Agent Assignment:** Animation Agent

**`lib/utils/gsap.ts`:**
```typescript
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MOTION_CONFIG, BREAKPOINTS } from '@/lib/constants/motion'

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Reduced motion check
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Standard fade in animation
export const fadeIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 })
    return
  }

  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: MOTION_CONFIG.duration.default,
    ease: MOTION_CONFIG.ease.default,
    ...options,
  })
}

// Stagger fade in
export const staggerFadeIn = (
  elements: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 })
    return
  }

  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: MOTION_CONFIG.duration.default,
    ease: MOTION_CONFIG.ease.default,
    stagger: 0.1,
    ...options,
  })
}

// Responsive animation wrapper
export const createResponsiveAnimation = () => {
  const mm = gsap.matchMedia()
  
  return {
    add: (animations: {
      desktop?: () => void
      tablet?: () => void
      mobile?: () => void
    }) => {
      mm.add(BREAKPOINTS.desktop, animations.desktop || (() => {}))
      mm.add(BREAKPOINTS.tablet, animations.tablet || (() => {}))
      mm.add(BREAKPOINTS.mobile, animations.mobile || (() => {}))
    },
    revert: () => mm.revert(),
  }
}

// ScrollTrigger helper
export const createScrollTrigger = (
  trigger: string,
  animation: gsap.core.Animation,
  options?: ScrollTrigger.Vars
) => {
  if (prefersReducedMotion()) return

  return ScrollTrigger.create({
    trigger,
    animation,
    start: 'top 80%',
    toggleActions: 'play none none none',
    ...options,
  })
}
```

**Deliverables:**
- GSAP utilities created
- Reduced motion support
- Responsive animation helpers
- ScrollTrigger wrappers

**Acceptance Criteria:**
- All animations respect reduced motion
- Utilities work across breakpoints
- Type-safe API
- No GSAP called directly in components

---

### Stage 3.2: Layout Components
**Agent Assignment:** Structure Agent

**`app/layout.tsx`:**
```typescript
import type { Metadata } from 'next'
import { sfPro } from '@/lib/fonts' // or inter
import './globals.css'

export const metadata: Metadata = {
  title: 'One in Town — Portfolio',
  description: 'I build digital systems that feel inevitable.',
  metadataBase: new URL('https://yoursite.com'),
  openGraph: {
    title: 'One in Town — Portfolio',
    description: 'I build digital systems that feel inevitable.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sfPro.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

**`app/page.tsx`:**
```typescript
import Hero from '@/components/sections/Hero'
import SelectedWork from '@/components/sections/SelectedWork'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import Credibility from '@/components/sections/Credibility'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <SelectedWork />
      <Process />
      <About />
      <Credibility />
      <CTA />
    </main>
  )
}
```

**Deliverables:**
- Root layout configured
- Main page structure
- Section import structure
- Metadata configured

**Acceptance Criteria:**
- Six sections in correct order
- Metadata complete
- Font loading working
- Page renders without errors

---

### Stage 3.3: Performance Monitoring Setup
**Agent Assignment:** Performance Agent

**`lib/utils/performance.ts`:**
```typescript
// Web Vitals tracking
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }
  
  // Track to analytics in production
  // Verify against budgets:
  // - FCP < 1.5s
  // - LCP < 2.5s
  // - CLS = 0
  // - FID < 100ms
}

// Performance budget checker
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined') return

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Check against budgets from PRD
      if (entry.duration > 150) {
        console.warn('JS execution exceeded budget:', entry)
      }
    }
  })

  observer.observe({ entryTypes: ['measure'] })
}
```

**`app/layout.tsx` addition:**
```typescript
import { reportWebVitals } from '@/lib/utils/performance'

export { reportWebVitals }
```

**Deliverables:**
- Web Vitals tracking
- Performance budget monitoring
- Development logging
- Production analytics hooks

**Acceptance Criteria:**
- Vitals logged in dev
- Budget violations flagged
- Ready for analytics integration
- Zero performance regressions

---

## PHASE 4: SECTION IMPLEMENTATION
**Duration:** 5-7 days  
**Dependencies:** Phase 3 complete

### Stage 4.1: Hero Section
**Agent Assignment:** Hero Agent

**`components/sections/Hero.tsx`:**
```typescript
'use client'

import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { fadeIn } from '@/lib/utils/gsap'
import { HERO_CONTENT } from '@/lib/constants/content'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!headlineRef.current) return

    // Only animate after font is loaded
    document.fonts.ready.then(() => {
      fadeIn(headlineRef.current!, {
        duration: 0.8,
        delay: 0.2,
      })
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-content w-full">
        <h1
          ref={headlineRef}
          className="text-display font-semibold text-foreground text-balance opacity-0"
        >
          {HERO_CONTENT.headline}
        </h1>
        {HERO_CONTENT.subheading && (
          <p className="text-body text-muted mt-4 max-w-prose">
            {HERO_CONTENT.subheading}
          </p>
        )}
      </div>
    </section>
  )
}
```

**Hero Agent Tasks:**
1. Implement headline component
2. Add entrance animation (opacity + y)
3. Ensure font-loaded before animation
4. Test on 3 breakpoints
5. Verify reduced motion fallback
6. Ensure < 800ms completion

**Motion Audit Checklist (Hero):**
- ✅ Meaning Test: Headline works without animation
- ✅ Removal Test: Section complete without motion
- ✅ Respect Test: Reduced motion respected
- ✅ Mobile Test: Smooth on real device

**Deliverables:**
- Hero component complete
- Animation passing audit
- Responsive at all breakpoints
- Reduced motion supported

**Acceptance Criteria:**
- Animation completes < 800ms
- No animation until font loaded
- Headline max 2 lines on desktop
- Motion audit: 4/4 pass

---

### Stage 4.2: Selected Work Section
**Agent Assignment:** Work Section Agent

**`components/sections/SelectedWork.tsx`:**
```typescript
'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { PROJECTS } from '@/lib/constants/content'
import { MOTION_CONFIG, BREAKPOINTS } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

export default function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    const mm = gsap.matchMedia()

    mm.add(BREAKPOINTS.desktop, () => {
      // Desktop: Pinning + scale animations
      PROJECTS.forEach((project, index) => {
        const projectEl = containerRef.current?.querySelector(
          `[data-project="${index}"]`
        )
        const imageEl = projectEl?.querySelector('[data-image]')
        const textEl = projectEl?.querySelector('[data-text]')

        if (!projectEl || !imageEl || !textEl) return

        // Pin project while scrolling
        ScrollTrigger.create({
          trigger: projectEl,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
        })

        // Image scale animation
        gsap.fromTo(
          imageEl,
          { scale: 0.98, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: MOTION_CONFIG.duration.default,
            ease: MOTION_CONFIG.ease.default,
            scrollTrigger: {
              trigger: projectEl,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )

        // Text slide animation (opposite direction of scroll)
        gsap.fromTo(
          textEl,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: MOTION_CONFIG.duration.default,
            ease: MOTION_CONFIG.ease.default,
            scrollTrigger: {
              trigger: projectEl,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    mm.add(BREAKPOINTS.mobile, () => {
      // Mobile: Simple fades only
      PROJECTS.forEach((project, index) => {
        const projectEl = containerRef.current?.querySelector(
          `[data-project="${index}"]`
        )

        if (!projectEl) return

        gsap.fromTo(
          projectEl,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: MOTION_CONFIG.duration.default,
            ease: MOTION_CONFIG.ease.default,
            scrollTrigger: {
              trigger: projectEl,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-section">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-heading font-semibold mb-16">Selected Work</h2>
        
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            data-project={index}
            className="min-h-screen flex items-center mb-section"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <div
                data-image
                className={`relative aspect-[4/3] ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <Image
                  src={project.image.src}
                  alt={project.title}
                  width={project.image.width}
                  height={project.image.height}
                  className="rounded-lg"
                  priority={index === 0}
                />
              </div>
              
              <div
                data-text
                className={`space-y-4 ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <h3 className="text-heading font-medium">{project.title}</h3>
                <p className="text-body text-muted">{project.insight}</p>
                <span className="text-small text-subtle">
                  {project.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
```

**Work Section Agent Tasks:**
1. Implement project grid layout
2. Add pinning for desktop
3. Implement scale animations (0.98 → 1.0)
4. Add horizontal text slides
5. Simplify for mobile (fade only)
6. Test with 3-5 projects
7. Verify smooth transitions

**Motion Audit Checklist (Selected Work):**
- Desktop pinning doesn't block scroll
- Image scale is subtle (0.98 → 1.0, not dramatic)
- Text animations alternate directions
- Mobile has no pinning
- All animations < 0.8s

**Deliverables:**
- Work section component
- Desktop pinning working
- Mobile simplified animations
- Image optimization implemented

**Acceptance Criteria:**
- No scroll blocking
- Smooth pin/unpin transitions
- Images load progressively
- Motion audit: 4/4 pass on all animations

---

### Stage 4.3: Process & Thinking Section
**Agent Assignment:** Process Agent

**`components/sections/Process.tsx`:**
```typescript
'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

const PRINCIPLES = [
  "Motion explains, never decorates",
  "Restraint is the signature",
  "Performance is the aesthetic",
  "Typography does the heavy lifting",
]

export default function Process() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    const principles = containerRef.current?.querySelectorAll('[data-principle]')
    if (!principles) return

    principles.forEach((principle, index) => {
      gsap.fromTo(
        principle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: MOTION_CONFIG.duration.default,
          ease: MOTION_CONFIG.ease.default,
          scrollTrigger: {
            trigger: principle,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-section">
      <div className="max-w-prose mx-auto px-6">
        <h2 className="text-heading font-semibold mb-16">Principles</h2>
        
        <div className="space-y-section-mobile">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={index}
              data-principle
              className="min-h-[50vh] flex items-center"
            >
              <p className="text-heading font-medium text-balance">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Process Agent Tasks:**
1. Implement principle layout
2. Add sequential reveal animations
3. One principle per viewport
4. Ensure readability at all sizes
5. Test line-length constraints
6. Verify mobile spacing

**Motion Audit Checklist (Process):**
- Each principle appears independently
- No overlapping animations
- Readable without motion
- Mobile version simplified

**Deliverables:**
- Process section complete
- Sequential reveals working
- Viewport-based layout
- Mobile simplified

**Acceptance Criteria:**
- Principles ≤ 12 words each
- One principle per viewport
- Sequential fade-in working
- Motion audit: 4/4 pass

---

### Stage 4.4: About Section
**Agent Assignment:** About Agent

**`components/sections/About.tsx`:**
```typescript
'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import gsap from 'gsap'
import { ABOUT_CONTENT } from '@/lib/constants/content'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    // Text fade + translate
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: MOTION_CONFIG.duration.default,
        ease: MOTION_CONFIG.ease.default,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Image parallax (slight depth illusion)
    gsap.to(imageRef.current, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-section">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative aspect-square lg:aspect-[3/4]">
            <Image
              src="/images/about-portrait.avif"
              alt="Portrait"
              width={800}
              height={1000}
              className="rounded-lg object-cover"
            />
          </div>
          
          <div ref={textRef} className="space-y-6">
            <h2 className="text-heading font-semibold">About</h2>
            <p className="text-body text-muted leading-relaxed">
              {ABOUT_CONTENT.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**About Agent Tasks:**
1. Implement two-column layout
2. Add portrait image with parallax
3. Implement text fade-in
4. Lock copy to 49 words
5. Test image aspect ratios
6. Verify mobile stack

**Motion Audit Checklist (About):**
- Parallax is subtle (≤ 30px movement)
- Text readable without animation
- Image loads without CLS
- Mobile version removes parallax

**Deliverables:**
- About section complete
- Portrait image optimized
- Parallax effect implemented
- Copy locked at 49 words

**Acceptance Criteria:**
- Copy is exactly 3 sentences, 49 words
- Parallax doesn't cause scroll jank
- Image aspect ratio preserved
- Motion audit: 4/4 pass

---

### Stage 4.5: Credibility Signals Section
**Agent Assignment:** Credibility Agent

**`components/sections/Credibility.tsx`:**
```typescript
'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

const CREDENTIALS = [
  {
    type: 'metric',
    label: 'Decade of craft',
  },
  {
    type: 'metric',
    label: 'Shipped at global scale',
  },
  {
    type: 'logo',
    src: '/images/logos/company-1.svg',
    alt: 'Company 1',
  },
  {
    type: 'logo',
    src: '/images/logos/company-2.svg',
    alt: 'Company 2',
  },
  {
    type: 'quote',
    text: 'Exceptional attention to detail',
    author: 'Client Name',
  },
]

export default function Credibility() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    const items = containerRef.current?.querySelectorAll('[data-credential]')
    if (!items) return

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: MOTION_CONFIG.duration.default,
        ease: MOTION_CONFIG.ease.default,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-section border-t border-border">
      <div className="max-w-content mx-auto px-6">
        {/* Horizontal sequence - left-aligned */}
        <div className="flex flex-col space-y-12">
          {CREDENTIALS.map((item, index) => (
            <div
              key={index}
              data-credential
              className="flex items-baseline"
            >
              {item.type === 'metric' && (
                <p className="text-body text-muted">{item.label}</p>
              )}
              
              {item.type === 'logo' && (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-8 opacity-70 grayscale"
                />
              )}
              
              {item.type === 'quote' && (
                <figure className="space-y-2">
                  <blockquote className="text-body text-muted italic">
                    "{item.text}"
                  </blockquote>
                  <figcaption className="text-small text-subtle">
                    — {item.author}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Credibility Agent Tasks:**
1. Implement horizontal sequence layout
2. Prepare monochrome logos (SVG)
3. Add staggered fade-ups
4. Ensure equal visual weight
5. Test quote length (≤15 words)
6. Verify left-alignment

**Layout Requirements:**
- Single vertical sequence
- Left-aligned
- Equal baseline alignment
- Generous vertical spacing (3rem minimum)
- No grid, no columns, no cards
- Natural page flow (no pinning)

**Motion Audit Checklist (Credibility):**
- Stagger is subtle (0.1s intervals)
- Elements appear independently
- Readable without animation
- No complex scroll interactions

**Deliverables:**
- Credibility section complete
- Logos converted to monochrome SVG
- Staggered animations working
- Quote length verified

**Acceptance Criteria:**
- Layout is single vertical sequence
- All logos monochrome
- Quotes ≤ 15 words
- Motion audit: 4/4 pass

---

### Stage 4.6: Call to Action Section
**Agent Assignment:** CTA Agent

**`components/sections/CTA.tsx`:**
```typescript
'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MOTION_CONFIG } from '@/lib/constants/motion'
import { prefersReducedMotion } from '@/lib/utils/gsap'

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useGSAP(() => {
    if (prefersReducedMotion()) return

    // CTA fade in last
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: MOTION_CONFIG.duration.default,
        ease: MOTION_CONFIG.ease.default,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: containerRef })

  // Button hover micro-interaction
  useGSAP(() => {
    if (prefersReducedMotion() || !buttonRef.current) return

    gsap.to(buttonRef.current, {
      scale: isHovered ? 1.03 : 1,
      duration: 0.2,
      ease: MOTION_CONFIG.ease.default,
    })
  }, [isHovered])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center py-section"
    >
      <div className="max-w-prose mx-auto px-6 text-center space-y-8">
        <h2 className="text-heading font-semibold">
          Let's build something inevitable.
        </h2>
        
        <a
          ref={buttonRef}
          href="mailto:your@email.com"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="inline-block px-8 py-4 text-body font-medium text-background bg-foreground rounded-lg transition-colors hover:bg-accent hover:text-foreground"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
```

**CTA Agent Tasks:**
1. Implement centered CTA layout
2. Add fade-in animation
3. Implement button hover (scale 1.0 → 1.03)
4. Configure email link
5. Test on all devices
6. Verify accessibility

**Motion Audit Checklist (CTA):**
- Fade-in is final animation on page
- Button hover is micro-interaction (subtle)
- Works without JavaScript
- Mobile touch state appropriate

**Deliverables:**
- CTA section complete
- Button hover working
- Email configured
- Accessibility verified

**Acceptance Criteria:**
- CTA is one sentence
- Button hover ≤ 0.2s duration
- Scale is subtle (1.03 max)
- Motion audit: 4/4 pass

---

## PHASE 5: MOTION SYSTEM
**Duration:** 3-4 days  
**Dependencies:** Phase 4 complete

### Stage 5.1: Global Motion Audit
**Agent Assignment:** Motion Audit Agent (You - Non-Delegable)

**Audit Process:**
1. Review every animation section-by-section
2. Apply 4-question checklist to each
3. Score: 4/4 = PASS, 3/4 or less = DELETE
4. Document decisions

**Audit Documentation Template:**
```markdown
## Motion Audit Report

### Hero Section
**Animation:** Headline fade + translate
- Meaning Test: ✅ Content clear without motion
- Removal Test: ✅ Section works without animation
- Respect Test: ✅ Reduced motion respected
- Mobile Test: ✅ Smooth on real device
**Score:** 4/4 PASS ✅
**Sentence:** "This animation exists to guide attention to the headline after fonts load."

### Selected Work
**Animation 1:** Image scale (0.98 → 1.0)
- Meaning Test: ✅
- Removal Test: ✅
- Respect Test: ✅
- Mobile Test: ✅
**Score:** 4/4 PASS ✅

**Animation 2:** Desktop pinning
- Meaning Test: ✅
- Removal Test: ✅
- Respect Test: ✅
- Mobile Test: ❌ Removed on mobile
**Score:** 4/4 PASS ✅ (desktop only)

[Continue for all sections...]
```

**Motion Audit Agent Tasks:**
1. Open each section component
2. Test on real mobile hardware
3. Apply 4-question checklist
4. Delete failing animations immediately
5. Document every decision
6. Re-test after deletions

**Acceptance Criteria:**
- All animations scored
- Failing animations deleted (not revised)
- Audit report complete
- No "tweak later" states
- Real device testing complete

---

### Stage 5.2: Reduced Motion Testing
**Agent Assignment:** Accessibility Agent

**Test Procedure:**
1. Enable "Reduce motion" in OS
2. Navigate entire site
3. Verify no information loss
4. Check all animations disabled
5. Test on multiple browsers

**Test Cases:**
```typescript
// Test checklist
const REDUCED_MOTION_TESTS = [
  {
    section: 'Hero',
    test: 'Headline appears immediately',
    expected: 'No fade animation, instant visibility',
  },
  {
    section: 'Selected Work',
    test: 'Projects visible on scroll',
    expected: 'No pinning, no scale, simple appearance',
  },
  {
    section: 'Process',
    test: 'Principles readable',
    expected: 'No sequential reveal, all visible',
  },
  {
    section: 'About',
    test: 'Content accessible',
    expected: 'No parallax, static image',
  },
  {
    section: 'Credibility',
    test: 'Credentials visible',
    expected: 'No stagger, immediate visibility',
  },
  {
    section: 'CTA',
    test: 'Button functional',
    expected: 'No hover animation, still clickable',
  },
]
```

**Accessibility Agent Tasks:**
1. Enable reduced motion in macOS/Windows
2. Test each section
3. Verify gsap.matchMedia() working
4. Check prefersReducedMotion() function
5. Test on Safari, Chrome, Firefox
6. Document any failures

**Deliverables:**
- Reduced motion test report
- All tests passing
- Cross-browser verification
- Documentation updated

**Acceptance Criteria:**
- Zero information loss with reduced motion
- All sections functional
- Tests pass on 3 browsers
- Static fallbacks in place

---

### Stage 5.3: Mobile Hardware Testing
**Agent Assignment:** Mobile Testing Agent

**Test Devices Required:**
- iPhone (Safari)
- Android phone (Chrome)
- iPad (Safari)

**Test Scenarios:**
```markdown
## Mobile Test Protocol

### Scroll Performance
- [ ] No scroll blocking
- [ ] Smooth 60fps scrolling
- [ ] No animation lag
- [ ] Pinning works (desktop) / removed (mobile)

### Touch Interactions
- [ ] Button taps responsive
- [ ] No hover-dependent features
- [ ] Touch targets ≥ 44px
- [ ] Accidental tap prevention

### Animation Performance
- [ ] Fades complete < 0.8s
- [ ] No jank during scroll
- [ ] Parallax smooth or disabled
- [ ] Reduced motion works

### Layout
- [ ] No horizontal scroll
- [ ] Text readable (16px min)
- [ ] Images don't overflow
- [ ] Spacing appropriate

### Load Performance
- [ ] First paint < 1.5s
- [ ] Images lazy-load
- [ ] Fonts load immediately
- [ ] No layout shift
```

**Mobile Testing Agent Tasks:**
1. Deploy to staging URL
2. Test on real devices (not emulators)
3. Complete test protocol
4. Record performance metrics
5. Document issues with video
6. Fix critical issues
7. Re-test after fixes

**Deliverables:**
- Mobile test report
- Performance metrics log
- Video evidence of issues
- All critical issues resolved

**Acceptance Criteria:**
- All test protocol items passing
- Scroll is 60fps on real device
- No animation blocking
- Load time < 1.5s on 4G

---

### Stage 5.4: Animation Removal & Simplification
**Agent Assignment:** Optimization Agent

**Removal Criteria:**
Based on Phase 5.1 audit, remove animations that scored < 4/4

**Simplification Guidelines:**
```typescript
// If an animation is causing issues but passed audit:

// BEFORE (complex)
gsap.to(element, {
  scale: 1.05,
  rotate: 2,
  x: 10,
  duration: 0.8,
})

// AFTER (simplified)
gsap.to(element, {
  scale: 1.02,
  duration: 0.4,
})
```

**Common Simplifications:**
1. **Desktop → Mobile:**
   - Remove pinning
   - Convert complex motion to fade
   - Reduce animation duration
   - Remove parallax

2. **Hover States:**
   - Reduce scale (1.05 → 1.02)
   - Shorten duration (0.4s → 0.2s)
   - Remove if not essential

3. **Scroll Triggers:**
   - Increase start threshold (70% → 85%)
   - Remove scrub on mobile
   - Simplify easing

**Optimization Agent Tasks:**
1. Review Phase 5.1 audit results
2. Delete failed animations
3. Simplify passing but heavy animations
4. Test performance after changes
5. Verify visual quality maintained
6. Document all changes

**Deliverables:**
- Simplified animation codebase
- Performance improvement metrics
- Before/after comparison
- Updated documentation

**Acceptance Criteria:**
- No animations scoring < 4/4 remain
- Performance improved or unchanged
- Visual quality maintained
- Motion feels invisible

---

## PHASE 6: PERFORMANCE OPTIMIZATION
**Duration:** 2-3 days  
**Dependencies:** Phase 5 complete

### Stage 6.1: Image Optimization
**Agent Assignment:** Asset Optimization Agent

**Image Optimization Checklist:**
```markdown
## Image Optimization Protocol

### Format Conversion
- [ ] All images converted to AVIF + WebP fallback
- [ ] PNG/JPG originals removed from build
- [ ] SVG logos optimized (SVGO)

### Sizing
- [ ] Width/height attributes on all <Image> tags
- [ ] Responsive sizes defined
- [ ] srcSet generated for all images
- [ ] Aspect ratios preserved

### Lazy Loading
- [ ] Hero images: priority={true}
- [ ] Below fold: lazy loading default
- [ ] Intersection Observer polyfill (if needed)

### Compression
- [ ] AVIF quality: 85
- [ ] WebP quality: 90
- [ ] Total image payload < 1.5MB
- [ ] Individual images < 200KB

### Performance
- [ ] No CLS from images
- [ ] Blur placeholders (optional)
- [ ] Images don't block render
```

**next.config.js optimization:**
```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
```

**Asset Optimization Agent Tasks:**
1. Audit all images in /public/images
2. Convert to AVIF + WebP
3. Add explicit dimensions to all <Image> tags
4. Verify lazy loading below fold
5. Test on slow 3G connection
6. Measure total payload

**Deliverables:**
- All images optimized
- Dimensions added to components
- Lazy loading verified
- Performance metrics documented

**Acceptance Criteria:**
- Total image payload < 1.5MB
- Zero CLS from images
- AVIF support with WebP fallback
- All images < 200KB

---

### Stage 6.2: JavaScript Optimization
**Agent Assignment:** Code Optimization Agent

**JS Optimization Tasks:**

**1. Bundle Analysis:**
```bash
npm install @next/bundle-analyzer
```

**next.config.js:**
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... existing config
})
```

**Run analysis:**
```bash
ANALYZE=true npm run build
```

**2. Code Splitting:**
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const SelectedWork = dynamic(() => import('@/components/sections/SelectedWork'), {
  loading: () => <div>Loading...</div>,
})
```

**3. GSAP Tree Shaking:**
```typescript
// Only import what's needed
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Don't import entire GSAP library
// ❌ import * as gsap from 'gsap'
```

**4. Remove Console Logs:**
```javascript
// next.config.js
module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

**Code Optimization Agent Tasks:**
1. Run bundle analyzer
2. Identify large dependencies
3. Implement code splitting where beneficial
4. Verify GSAP tree-shaking
5. Remove unused imports
6. Test production build size
7. Verify JS execution < 150ms

**Deliverables:**
- Bundle analysis report
- Optimized JavaScript bundle
- Code splitting implemented
- Production build verified

**Acceptance Criteria:**
- JS execution budget ≤ 150ms
- No unused dependencies
- GSAP properly tree-shaken
- Production bundle optimized

---

### Stage 6.3: Font Loading Optimization
**Agent Assignment:** Typography Optimization Agent

**Font Loading Strategy:**

**1. Preload Critical Fonts:**
```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sfPro.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/SF-Pro-Display-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SF-Pro-Display-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

**2. Font Display Strategy:**
```typescript
const sfPro = localFont({
  src: [...],
  variable: '--font-sf-pro',
  display: 'swap', // Prevents FOUT
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})
```

**3. Fallback Font Matching:**
```css
/* globals.css */
@font-face {
  font-family: 'SF Pro Fallback';
  src: local('Arial');
  size-adjust: 97%;
  ascent-override: 105%;
  descent-override: 35%;
  line-gap-override: 0%;
}
```

**Typography Optimization Agent Tasks:**
1. Configure font preloading
2. Set display: swap
3. Create fallback font metrics
4. Test font loading on slow connection
5. Verify no FOUT
6. Measure font load time

**Deliverables:**
- Fonts preloaded
- Fallback metrics configured
- FOUT prevention verified
- Font loading tested

**Acceptance Criteria:**
- Fonts load < 100ms
- No FOUT visible
- Fallback fonts match metrics
- display: swap configured

---

### Stage 6.4: Lighthouse Audit & Optimization
**Agent Assignment:** Performance Audit Agent

**Lighthouse Target Scores:**
- Performance: ≥ 95
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Audit Process:**
```bash
# Run Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3000
```

**Common Issues & Fixes:**

**Performance Issues:**
```markdown
## Performance Optimization Checklist

### Largest Contentful Paint (LCP < 2.5s)
- [ ] Hero image optimized
- [ ] Critical CSS inlined
- [ ] Fonts preloaded
- [ ] Above-fold content prioritized

### First Input Delay (FID < 100ms)
- [ ] JS execution < 150ms
- [ ] No long tasks blocking main thread
- [ ] GSAP loaded efficiently
- [ ] Code splitting implemented

### Cumulative Layout Shift (CLS = 0)
- [ ] All images have dimensions
- [ ] Fonts use display: swap
- [ ] No dynamic content above fold
- [ ] Animations don't cause reflows

### Time to Interactive (TTI < 3.8s)
- [ ] JavaScript minified
- [ ] Unused code removed
- [ ] Third-party scripts deferred
- [ ] Critical rendering path optimized
```

**Performance Audit Agent Tasks:**
1. Run Lighthouse audit (incognito, 3x)
2. Document all scores
3. Identify bottlenecks
4. Implement fixes for issues < 95
5. Re-run audit after fixes
6. Verify all metrics pass

**Deliverables:**
- Lighthouse audit reports (before/after)
- Performance optimization log
- All scores ≥ targets
- Issues resolved documentation

**Acceptance Criteria:**
- Performance score ≥ 95
- CLS = 0
- JS execution ≤ 150ms
- Initial load ≤ 2MB
- First interaction < 1.5s

---

## PHASE 7: QUALITY ASSURANCE
**Duration:** 2-3 days  
**Dependencies:** Phase 6 complete

### Stage 7.1: Cross-Browser Testing
**Agent Assignment:** QA Agent

**Browser Matrix:**
- Safari (macOS, iOS)
- Chrome (macOS, Windows, Android)
- Firefox (macOS, Windows)
- Edge (Windows)

**Test Protocol:**
```markdown
## Cross-Browser Test Checklist

### Visual Regression
- [ ] Layout identical across browsers
- [ ] Fonts render correctly
- [ ] Colors match specification
- [ ] Images display properly
- [ ] Spacing consistent

### Animation Compatibility
- [ ] GSAP animations work
- [ ] ScrollTrigger functions correctly
- [ ] Reduced motion respected
- [ ] Easing functions supported
- [ ] No janky animations

### Interaction Testing
- [ ] Buttons clickable
- [ ] Links functional
- [ ] Hover states work
- [ ] Touch interactions (mobile)
- [ ] Keyboard navigation

### Performance
- [ ] Smooth scrolling
- [ ] No layout shifts
- [ ] Images load properly
- [ ] Fonts display correctly
- [ ] No console errors
```

**QA Agent Tasks:**
1. Set up browser testing environment
2. Test on all browsers in matrix
3. Document visual differences
4. Test animations on each
5. Verify interactions
6. Fix browser-specific issues
7. Re-test after fixes

**Deliverables:**
- Cross-browser test report
- Screenshots from each browser
- Issue log with fixes
- Final verification complete

**Acceptance Criteria:**
- No critical issues on any browser
- Visual consistency maintained
- All interactions functional
- Performance targets met

---

### Stage 7.2: Accessibility Audit
**Agent Assignment:** Accessibility Agent

**Accessibility Checklist:**
```markdown
## WCAG 2.1 AA Compliance

### Color & Contrast
- [ ] Text contrast ≥ 7:1 (body text)
- [ ] Text contrast ≥ 4.5:1 (large text)
- [ ] Accent color passes contrast check
- [ ] No color-only communication

### Keyboard Navigation
- [ ] All interactive elements focusable
- [ ] Focus indicators visible
- [ ] Tab order logical
- [ ] No keyboard traps
- [ ] Skip to content link

### Screen Reader Support
- [ ] All images have alt text
- [ ] Landmarks properly used
- [ ] Headings hierarchical (h1 → h2 → h3)
- [ ] Links descriptive
- [ ] ARIA labels where needed

### Motion & Animation
- [ ] prefers-reduced-motion respected
- [ ] No auto-playing media with sound
- [ ] Animations can be paused
- [ ] No flashing content (< 3/second)

### Forms & Interactions
- [ ] Form labels associated
- [ ] Error messages clear
- [ ] Touch targets ≥ 44x44px
- [ ] Buttons have accessible names

### Document Structure
- [ ] Valid HTML
- [ ] Lang attribute set
- [ ] Page title descriptive
- [ ] Semantic HTML used
```

**Testing Tools:**
```bash
# Install axe DevTools
npm install -D @axe-core/react

# Install Pa11y for automated testing
npm install -g pa11y

# Run accessibility audit
pa11y http://localhost:3000
```

**Accessibility Agent Tasks:**
1. Run automated accessibility scan (axe, Pa11y)
2. Manual keyboard navigation test
3. Screen reader testing (VoiceOver, NVDA)
4. Color contrast verification
5. Document all issues
6. Fix accessibility violations
7. Re-test after fixes

**Deliverables:**
- Accessibility audit report
- WCAG compliance documentation
- Fixed violations log
- Screen reader test results

**Acceptance Criteria:**
- Zero critical accessibility issues
- WCAG 2.1 AA compliant
- Keyboard navigation fully functional
- Screen reader compatible
- Lighthouse accessibility: 100

---

### Stage 7.3: Content Verification
**Agent Assignment:** Content QA Agent

**Content Checklist:**
```markdown
## Content Verification

### Copy Accuracy
- [ ] Hero headline: "I build digital systems that feel inevitable."
- [ ] About section: Exactly 49 words, 3 sentences
- [ ] Project one-liners: ≤ 12 words each
- [ ] Process principles: ≤ 12 words each
- [ ] Credibility quotes: ≤ 15 words
- [ ] CTA: One sentence
- [ ] No typos or grammar errors

### Content Quality
- [ ] All copy final and approved
- [ ] No placeholder text
- [ ] Tone consistent throughout
- [ ] First-person where appropriate
- [ ] Editorial clarity maintained

### Project Curation
- [ ] 3-5 projects selected
- [ ] Each demonstrates different strength
- [ ] No overlapping purposes
- [ ] Range principle applied
- [ ] One-line insights clear

### Visual Content
- [ ] All images final and approved
- [ ] Image quality high
- [ ] Aspect ratios correct
- [ ] Alt text descriptive
- [ ] Portrait image appropriate

### Metadata
- [ ] Page title correct
- [ ] Meta description compelling
- [ ] OG tags configured
- [ ] Favicon present
- [ ] Analytics configured (if applicable)
```

**Content QA Agent Tasks:**
1. Review all copy against PRD
2. Verify word counts
3. Check for typos and errors
4. Validate project selection
5. Review image quality
6. Test metadata tags
7. Get final human approval

**Deliverables:**
- Content verification report
- Final copy sign-off
- Image approval documentation
- Metadata verification

**Acceptance Criteria:**
- All copy matches PRD specifications
- Word counts exact
- Zero typos or errors
- Human approval obtained
- Metadata complete

---

### Stage 7.4: Final Motion Audit (Pre-Launch)
**Agent Assignment:** You (Non-Delegable)

**Final Motion Review Process:**
This is the last checkpoint before launch. Every animation must be re-evaluated.

**Audit Protocol:**
```markdown
## Final Motion Audit - Launch Gate

### Re-evaluation Criteria
Each animation must still pass 4/4 on the checklist:
1. Meaning Test: Content clear without motion?
2. Removal Test: Section works without it?
3. Respect Test: Reduced motion respected?
4. Mobile Test: Smooth on real device?

### Testing Environment
- [ ] Real iPhone (Safari)
- [ ] Real Android phone (Chrome)
- [ ] MacBook Pro (Safari, Chrome)
- [ ] Windows laptop (Chrome, Edge)
- [ ] Slow 3G network throttling
- [ ] Reduced motion enabled

### Decision Framework
- 4/4 PASS → Ships
- 3/4 or less → Delete immediately
- No "almost good enough"
- No "we'll fix post-launch"

### Documentation
For each animation that ships, write:
"This animation exists to _____."

If the sentence mentions aesthetics → DELETE
If the sentence mentions clarity/hierarchy → PASS candidate
```

**Final Audit Tasks:**
1. Deploy to staging environment
2. Test every animation on real hardware
3. Re-apply 4-question checklist
4. Delete any animations now failing
5. Document final decisions
6. Get human sign-off
7. Lock motion system (no further changes)

**Emergency Kill Switch:**
At any point during this audit, you can invoke:
> "Ship without this."

No justification required. Shipping calm > shipping clever.

**Deliverables:**
- Final motion audit report
- List of shipped animations with justifications
- List of deleted animations (if any)
- Human sign-off documentation
- Motion system locked

**Acceptance Criteria:**
- Every animation scored 4/4
- All tests on real hardware
- Reduced motion verified again
- Motion system locked
- Zero "tweak later" items

---

## PHASE 8: LAUNCH PREPARATION
**Duration:** 1-2 days  
**Dependencies:** Phase 7 complete

### Stage 8.1: Production Environment Setup
**Agent Assignment:** DevOps Agent

**Deployment Platform:** Vercel (recommended for Next.js)

**Vercel Configuration:**

**`vercel.json`:**
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "github": {
    "silent": true
  },
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

**Environment Variables:**
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

**DevOps Agent Tasks:**
1. Create Vercel account/project
2. Connect GitHub repository
3. Configure build settings
4. Set up environment variables
5. Configure custom domain
6. Enable HTTPS
7. Test deployment pipeline
8. Configure CDN caching

**Deliverables:**
- Vercel project configured
- Custom domain connected
- HTTPS enabled
- Build pipeline tested
- CDN caching optimized

**Acceptance Criteria:**
- Production URL live
- Custom domain working
- HTTPS enforced
- Build succeeds
- Environment variables set

---

### Stage 8.2: SEO & Metadata Configuration
**Agent Assignment:** SEO Agent

**Complete Metadata Setup:**

**`app/layout.tsx` - Enhanced Metadata:**
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'One in Town — Portfolio',
    template: '%s | One in Town',
  },
  description: 'I build digital systems that feel inevitable. A portfolio showcasing judgment, restraint, and craft in web development.',
  keywords: ['web development', 'portfolio', 'design systems', 'performance', 'GSAP', 'Next.js'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'One in Town — Portfolio',
    description: 'I build digital systems that feel inevitable.',
    siteName: 'One in Town',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'One in Town Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One in Town — Portfolio',
    description: 'I build digital systems that feel inevitable.',
    images: ['/og-image.jpg'],
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
```

**`public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

**`app/sitemap.ts`:**
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

**OG Image Generation:**
Create `/public/og-image.jpg`:
- Size: 1200x630px
- Format: JPG (optimized)
- Content: Minimal, on-brand
- File size: < 100KB

**SEO Agent Tasks:**
1. Configure complete metadata
2. Create OG image
3. Set up robots.txt
4. Generate sitemap
5. Configure Google Search Console
6. Test OG tags (opengraph.xyz)
7. Verify social sharing previews

**Deliverables:**
- Complete metadata configuration
- OG image created
- robots.txt configured
- Sitemap generated
- Search Console connected
- Social previews verified

**Acceptance Criteria:**
- All metadata fields populated
- OG image displays correctly
- robots.txt allows indexing
- Sitemap accessible
- Social previews look correct

---

### Stage 8.3: Analytics & Monitoring Setup (Optional)
**Agent Assignment:** Analytics Agent

**Analytics Options:**
1. **Vercel Analytics** (recommended for Next.js)
2. **Google Analytics 4** (if needed)
3. **Plausible** (privacy-focused alternative)

**Vercel Analytics Setup:**

**`package.json`:**
```json
{
  "dependencies": {
    "@vercel/analytics": "^1.1.0"
  }
}
```

**`app/layout.tsx`:**
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Performance Monitoring:**
```typescript
// lib/utils/monitoring.ts
export function logPerformanceMetric(metric: string, value: number) {
  if (process.env.NODE_ENV === 'production') {
    // Log to analytics service
    console.log(`[Performance] ${metric}:`, value)
  }
}

// Usage in components
useEffect(() => {
  const start = performance.now()
  // ... animation code
  const end = performance.now()
  logPerformanceMetric('animation-duration', end - start)
}, [])
```

**Error Monitoring (Optional):**
If using Sentry or similar:
```typescript
// Only add if explicitly needed
// This violates "no third-party scripts" principle
// Use only if business requires error tracking
```

**Analytics Agent Tasks:**
1. Decide on analytics platform
2. Install minimal tracking
3. Configure privacy-compliant tracking
4. Set up performance monitoring
5. Test data collection
6. Verify GDPR compliance (if applicable)

**Important Note:**
PRD states "No third-party scripts" - analytics should be:
- Minimal (Vercel Analytics only)
- Privacy-respecting
- Not block rendering
- Justify existence

**Deliverables:**
- Analytics configured (if approved)
- Performance monitoring active
- Privacy compliance verified
- No render-blocking scripts

**Acceptance Criteria:**
- Analytics load asynchronously
- No performance impact
- Privacy-compliant
- Justified by business need

---

### Stage 8.4: Pre-Launch Checklist
**Agent Assignment:** Launch Coordinator Agent

**Final Pre-Launch Verification:**

```markdown
## Launch Checklist - All Must Pass

### Content & Design
- [ ] All copy final and approved
- [ ] About section: 49 words, 3 sentences ✅
- [ ] Hero headline locked ✅
- [ ] 3-5 projects selected and approved
- [ ] All images optimized (AVIF + WebP)
- [ ] Portrait/about image finalized
- [ ] No placeholder content
- [ ] Typography rendering correctly
- [ ] Color system implemented ✅
- [ ] Six sections only (no extras)

### Performance
- [ ] Lighthouse Performance ≥ 95 ✅
- [ ] Initial load ≤ 2MB ✅
- [ ] JS execution ≤ 150ms ✅
- [ ] CLS = 0 ✅
- [ ] First interaction < 1.5s ✅
- [ ] Images lazy-load below fold
- [ ] Fonts load < 100ms
- [ ] No FOUT

### Motion System
- [ ] Final motion audit complete (4/4 all)
- [ ] Reduced motion tested and working
- [ ] Mobile hardware testing complete
- [ ] No scroll-blocking animations
- [ ] All animations < 0.8s duration
- [ ] Motion audit report signed off
- [ ] No "tweak later" animations

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] Color contrast ≥ 7:1 (body text)
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] Lighthouse Accessibility: 100

### Cross-Browser
- [ ] Safari (macOS) tested
- [ ] Safari (iOS) tested
- [ ] Chrome (desktop) tested
- [ ] Chrome (mobile) tested
- [ ] Firefox tested
- [ ] Edge tested
- [ ] No critical browser issues

### Technical
- [ ] Production build succeeds
- [ ] No console errors
- [ ] No console warnings
- [ ] All environment variables set
- [ ] Custom domain configured
- [ ] HTTPS enforced
- [ ] Metadata complete
- [ ] OG image working
- [ ] Sitemap accessible
- [ ] robots.txt configured

### Quality Assurance
- [ ] All sections render correctly
- [ ] All links functional
- [ ] Email link configured correctly
- [ ] Images display properly
- [ ] Animations work as expected
- [ ] Mobile experience verified
- [ ] Tablet experience verified
- [ ] Desktop experience verified

### Documentation
- [ ] Motion audit documentation complete
- [ ] Performance metrics logged
- [ ] Browser test results documented
- [ ] Accessibility audit complete
- [ ] Launch decision documented
- [ ] Post-launch plan defined

### Final Gates (Non-Negotiable)
- [ ] Motion audit: All animations 4/4
- [ ] Lighthouse Performance: ≥ 95
- [ ] CLS: = 0
- [ ] Real device testing: Complete
- [ ] Human sign-off: Obtained
- [ ] Content: 100% final
```

**Launch Coordinator Tasks:**
1. Review all phase deliverables
2. Verify all checklist items
3. Coordinate final testing
4. Document any blockers
5. Get stakeholder sign-offs
6. Schedule launch time
7. Prepare rollback plan

**Deliverables:**
- Completed launch checklist
- All stakeholder approvals
- Launch plan document
- Rollback procedure
- Launch communication prepared

**Acceptance Criteria:**
- 100% of checklist items passing
- All sign-offs obtained
- Zero critical issues
- Ready for production

---

### Stage 8.5: Launch Execution
**Agent Assignment:** Launch Agent

**Launch Day Protocol:**

**Pre-Launch (T-1 hour):**
```markdown
## Launch Hour Checklist

### Final Verification
- [ ] Run final Lighthouse audit
- [ ] Test on real mobile device
- [ ] Verify DNS propagation
- [ ] Test custom domain
- [ ] Check HTTPS certificate
- [ ] Verify all redirects

### Deployment
- [ ] Merge to main branch
- [ ] Vercel auto-deploy triggered
- [ ] Monitor build logs
- [ ] Verify deployment success
- [ ] Test production URL
- [ ] Verify edge caching

### Smoke Testing (Production)
- [ ] Homepage loads
- [ ] All sections visible
- [ ] Images load correctly
- [ ] Animations work
- [ ] Links functional
- [ ] Mobile responsive
- [ ] Performance metrics pass

### Monitoring
- [ ] Watch error logs
- [ ] Monitor performance metrics
- [ ] Check analytics (if enabled)
- [ ] Verify no 404s
- [ ] Check console errors
```

**Launch Agent Tasks:**
1. Execute launch protocol
2. Monitor deployment
3. Perform smoke tests
4. Verify all functionality
5. Monitor for issues
6. Document launch time
7. Notify stakeholders

**Deliverables:**
- Production site live
- Smoke tests passed
- Launch time documented
- Monitoring active
- Stakeholders notified

**Acceptance Criteria:**
- Site accessible at production URL
- All smoke tests passing
- No critical errors
- Performance metrics maintained
- Launch documented

---

### Stage 8.6: Post-Launch Monitoring (48 hours)
**Agent Assignment:** Monitoring Agent

**48-Hour Watch Period:**

**Monitoring Schedule:**
```markdown
## Post-Launch Monitoring

### Hour 1
- [ ] Check error logs every 15 minutes
- [ ] Monitor performance metrics
- [ ] Review analytics (if enabled)
- [ ] Test on multiple devices
- [ ] Check social sharing

### Hours 2-24
- [ ] Check error logs every 2 hours
- [ ] Monitor performance trends
- [ ] Review user feedback
- [ ] Check for bug reports
- [ ] Monitor uptime

### Hours 24-48
- [ ] Daily performance check
- [ ] Review accumulated metrics
- [ ] Check for edge cases
- [ ] Monitor any issues
- [ ] Document learnings
```

**Metrics to Track:**
```typescript
// Performance Metrics
{
  lighthouse_performance: '>= 95',
  lighthouse_accessibility: '100',
  cls: '0',
  lcp: '< 2.5s',
  fid: '< 100ms',
  ttfb: '< 600ms',
  page_weight: '< 2MB',
}

// Error Tracking
{
  console_errors: '0',
  failed_requests: '0',
  broken_links: '0',
  image_load_failures: '0',
}

// User Experience
{
  bounce_rate: 'Monitor',
  avg_session_duration: 'Monitor',
  scroll_depth: 'Monitor',
}
```

**Issue Response Protocol:**
```markdown
## Issue Severity & Response

### Critical (Fix Immediately)
- Site down/inaccessible
- Major performance regression (< 80)
- Critical accessibility failure
- Broken core functionality
- Security vulnerability

**Response Time:** < 1 hour

### High (Fix Same Day)
- Performance regression (80-94)
- Animation not working
- Images not loading
- Mobile layout broken
- Browser compatibility issue

**Response Time:** < 4 hours

### Medium (Fix Within 48h)
- Minor visual inconsistency
- Non-critical animation glitch
- Edge case behavior
- Performance optimization opportunity

**Response Time:** < 48 hours

### Low (Backlog)
- Enhancement ideas
- Minor polish opportunities
- Future feature considerations

**Response Time:** Post-launch review
```

**Monitoring Agent Tasks:**
1. Set up monitoring schedule
2. Track all metrics
3. Document any issues
4. Triage by severity
5. Coordinate fixes if needed
6. Maintain issue log
7. Prepare post-launch report

**Deliverables:**
- 48-hour monitoring log
- Performance metrics report
- Issue log (if any)
- User feedback summary
- Lessons learned document

**Acceptance Criteria:**
- All metrics remain within targets
- Zero critical issues
- Quick response to any problems
- Documentation complete
- Stakeholders updated

---

### Stage 8.7: Launch Retrospective
**Agent Assignment:** Project Lead + All Agents

**Retrospective Meeting Agenda:**

```markdown
## Post-Launch Retrospective

### What Went Well
- Which phases executed smoothly?
- What processes worked effectively?
- Which agent assignments were optimal?
- What exceeded expectations?

### What Could Improve
- Which phases had blockers?
- What took longer than expected?
- Where did scope creep occur?
- What caused rework?

### Metrics Review
- Performance targets met?
- Motion audit results?
- Timeline adherence?
- Budget adherence?

### Lessons Learned
- Process improvements?
- Tool/technology insights?
- Communication effectiveness?
- Documentation quality?

### PRD Adherence
- Did we maintain six sections only?
- Motion discipline maintained?
- Color system followed?
- Quality bar achieved?
- "Inspiration Kill List" respected?

### Future Iterations
- What would we change?
- What would we keep?
- What needs documentation update?
```

**Documentation:**
Create `POST_LAUNCH_RETROSPECTIVE.md`:
```markdown
# One-in-Town Portfolio - Launch Retrospective
Date: [Launch Date]

## Executive Summary
[One paragraph summary of launch success]

## Metrics Achieved
- Lighthouse Performance: [Score]
- CLS: [Score]
- Initial Load: [Size]
- JS Execution: [Time]
- First Interaction: [Time]

## What Worked
[List successes]

## What Didn't Work
[List challenges]

## Lessons Learned
[Key takeaways]

## Recommendations for Future Projects
[Process improvements]

## Final Thoughts
[Qualitative assessment]
```

**Deliverables:**
- Retrospective document
- Lessons learned log
- Process improvement recommendations
- Final project metrics
- Team feedback compiled

**Acceptance Criteria:**
- All stakeholders participate
- Honest feedback documented
- Action items identified
- Knowledge transfer complete
- Documentation archived

---

## AGENT ASSIGNMENT MATRIX

### Phase 0: Pre-Build Foundation
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 0.1 Content Production | Content Agent | - | ✅ Required |
| 0.2 Asset Preparation | Asset Agent | - | ✅ Final approval |
| 0.3 Design Spec Lock | Design Agent | - | ✅ Sign-off |

### Phase 1: Technical Foundation
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 1.1 Next.js Init | Infrastructure Agent | - | ❌ |
| 1.2 Dependencies | Infrastructure Agent | - | ❌ |
| 1.3 Font Setup | Typography Agent | Infrastructure | ❌ |

### Phase 2: Design System & Tokens
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 2.1 Tailwind Config | Design Systems Agent | - | ❌ |
| 2.2 Global Styles | Design Systems Agent | - | ❌ |
| 2.3 Constants | Infrastructure Agent | - | ❌ |

### Phase 3: Core Infrastructure
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 3.1 GSAP Setup | Animation Agent | - | ❌ |
| 3.2 Layout Components | Structure Agent | - | ❌ |
| 3.3 Performance Monitoring | Performance Agent | - | ❌ |

### Phase 4: Section Implementation
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 4.1 Hero Section | Hero Agent | Animation | ✅ Motion audit |
| 4.2 Selected Work | Work Section Agent | Animation | ✅ Motion audit |
| 4.3 Process Section | Process Agent | Animation | ✅ Motion audit |
| 4.4 About Section | About Agent | Animation | ✅ Motion audit |
| 4.5 Credibility | Credibility Agent | - | ✅ Motion audit |
| 4.6 CTA Section | CTA Agent | - | ✅ Motion audit |

### Phase 5: Motion System
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 5.1 Global Motion Audit | **YOU (Non-Delegable)** | - | ✅ **REQUIRED** |
| 5.2 Reduced Motion | Accessibility Agent | - | ✅ Verification |
| 5.3 Mobile Testing | Mobile Testing Agent | - | ✅ Sign-off |
| 5.4 Optimization | Optimization Agent | Performance | ❌ |

### Phase 6: Performance Optimization
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 6.1 Image Optimization | Asset Optimization Agent | - | ❌ |
| 6.2 JS Optimization | Code Optimization Agent | - | ❌ |
| 6.3 Font Optimization | Typography Optimization Agent | - | ❌ |
| 6.4 Lighthouse Audit | Performance Audit Agent | - | ✅ Score review |

### Phase 7: Quality Assurance
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 7.1 Cross-Browser | QA Agent | - | ✅ Sign-off |
| 7.2 Accessibility | Accessibility Agent | - | ✅ WCAG review |
| 7.3 Content QA | Content QA Agent | - | ✅ **REQUIRED** |
| 7.4 Final Motion Audit | **YOU (Non-Delegable)** | - | ✅ **REQUIRED** |

### Phase 8: Launch Preparation
| Stage | Primary Agent | Backup Agent | Human Review |
|-------|---------------|--------------|--------------|
| 8.1 Production Setup | DevOps Agent | Infrastructure | ❌ |
| 8.2 SEO & Metadata | SEO Agent | - | ✅ Review |
| 8.3 Analytics Setup | Analytics Agent | - | ✅ Privacy review |
| 8.4 Pre-Launch Checklist | Launch Coordinator | All Agents | ✅ **REQUIRED** |
| 8.5 Launch Execution | Launch Agent | DevOps | ✅ Go/No-Go |
| 8.6 Post-Launch Monitor | Monitoring Agent | - | ✅ Daily review |
| 8.7 Retrospective | Project Lead | All Agents | ✅ **REQUIRED** |

---

## ANTIGRAVITY IDE AGENT CONFIGURATION

### Agent Roles & Responsibilities

**1. Content Agent**
```yaml
role: Content Production
responsibilities:
  - Project selection and curation
  - Copywriting and editing
  - Applying range principle
  - Word count enforcement
  - Editorial pass
skills_required:
  - Editorial judgment
  - Copywriting
  - Content strategy
tools:
  - Text editor
  - Word counter
  - Grammar checker
```

**2. Asset Agent**
```yaml
role: Asset Preparation
responsibilities:
  - Image optimization
  - Format conversion (AVIF/WebP)
  - Dimension specification
  - Logo preparation
  - File organization
skills_required:
  - Image optimization
  - Format conversion
  - File management
tools:
  - Image optimization tools
  - Format converters
  - SVG optimizers
```

**3. Design Agent**
```yaml
role: Design Specification
responsibilities:
  - Layout design
  - Spacing tokens
  - Typography scale
  - Motion intent documentation
  - Design system creation
skills_required:
  - UI/UX design
  - Design systems
  - Typography
tools:
  - Figma/design software
  - Token documentation
```

**4. Infrastructure Agent**
```yaml
role: Technical Infrastructure
responsibilities:
  - Project initialization
  - Dependency management
  - Build configuration
  - Environment setup
  - Constants management
skills_required:
  - Next.js
  - npm/package management
  - Build tools
  - TypeScript
tools:
  - Terminal
  - Package managers
  - Build tools
```

**5. Animation Agent**
```yaml
role: Animation Implementation
responsibilities:
  - GSAP setup
  - Animation utilities
  - Motion implementation
  - Reduced motion support
  - ScrollTrigger configuration
skills_required:
  - GSAP
  - JavaScript animation
  - Performance optimization
  - Accessibility
tools:
  - GSAP
  - Browser DevTools
  - Performance monitors
```

**6. Section-Specific Agents (Hero, Work, Process, About, Credibility, CTA)**
```yaml
role: Section Implementation
responsibilities:
  - Component development
  - Animation implementation
  - Responsive design
  - Content integration
  - Testing
skills_required:
  - React
  - TypeScript
  - GSAP
  - Responsive design
tools:
  - Code editor
  - Browser DevTools
  - Testing tools
```

**7. Performance Agent**
```yaml
role: Performance Optimization
responsibilities:
  - Performance monitoring
  - Lighthouse audits
  - Bundle analysis
  - Optimization implementation
  - Metrics tracking
skills_required:
  - Performance optimization
  - Web Vitals
  - Build optimization
tools:
  - Lighthouse
  - Bundle analyzer
  - Performance monitors
```

**8. QA Agent**
```yaml
role: Quality Assurance
responsibilities:
  - Cross-browser testing
  - Visual regression testing
  - Functional testing
  - Bug reporting
  - Issue coordination
skills_required:
  - Testing methodologies
  - Cross-browser debugging
  - Issue tracking
tools:
  - Browser testing tools
  - Screenshot tools
  - Issue trackers
```

**9. Accessibility Agent**
```yaml
role: Accessibility Compliance
responsibilities:
  - WCAG compliance
  - Screen reader testing
  - Keyboard navigation
  - Contrast checking
  - Accessibility audits
skills_required:
  - WCAG 2.1
  - Screen readers
  - Accessibility testing
tools:
  - axe DevTools
  - Pa11y
  - Screen readers (VoiceOver, NVDA)
  - Contrast checkers
```

**10. Launch Coordinator**
```yaml
role: Launch Management
responsibilities:
  - Checklist management
  - Stakeholder coordination
  - Timeline management
  - Sign-off collection
  - Launch execution
skills_required:
  - Project management
  - Communication
  - Risk management
tools:
  - Project management tools
  - Communication platforms
  - Checklists
```

---

## CRITICAL SUCCESS FACTORS

### Non-Negotiable Requirements

**1. Content First (Blocking)**
- Design cannot begin until Phase 0 complete
- All copy must be final and locked
- No placeholder content allowed
- Human approval required

**2. Motion Discipline**
- Motion audit at Phase 5.1 (human-led)
- Final motion audit at Phase 7.4 (human-led)
- 4/4 scoring required for all animations
- Delete, don't revise failing animations

**3. Performance Targets**
- Lighthouse Performance ≥ 95
- CLS = 0 (zero tolerance)
- JS execution ≤ 150ms
- Initial load ≤ 2MB
- First interaction < 1.5s

**4. Six Sections Only**
- Scope locked to PRD specification
- No additional sections
- Whitespace is intentional
- Kill list actively enforced

**5. Real Device Testing**
- Not emulators or simulators
- iPhone + Android required
- Motion tested on hardware
- Performance verified on real devices

---

## TIMELINE ESTIMATION

### Optimistic Timeline: 18-22 days
```
Phase 0: 3-5 days
Phase 1: 2-3 days
Phase 2: 1-2 days
Phase 3: 2-3 days
Phase 4: 5-7 days
Phase 5: 3-4 days
Phase 6: 2-3 days
Phase 7: 2-3 days
Phase 8: 1-2 days
```

### Realistic Timeline: 25-30 days
```
Includes:
- Content revision cycles
- Motion audit deletions
- Performance optimization iterations
- QA issue resolution
- Human review delays
```

### Conservative Timeline: 35-40 days
```
Includes:
- Multiple content revisions
- Significant motion system changes
- Performance challenges
- Cross-browser issues
- Launch delays
```

---

## RISK MITIGATION STRATEGIES

### Content Risks
**Risk:** Content not final by Phase 0 deadline  
**Mitigation:** 
- Start content production immediately
- Set hard deadline for copy
- No design work until content locked
- Human approval gated

### Performance Risks
**Risk:** Cannot achieve Lighthouse ≥ 95  
**Mitigation:**
- Performance monitoring from Phase 3
- Incremental audits throughout
- Budget tracking per component
- Early optimization focus

### Motion Risks
**Risk:** Animations fail motion audit  
**Mitigation:**
- Motion intent documented early (Phase 0.3)
- Incremental audits per section
- Delete-first mindset
- Reduced motion from start

### Scope Risks
**Risk:** Scope creep beyond six sections  
**Mitigation:**
- Kill list actively referenced
- "Six sections only" mantra
- Reject new section requests
- Whitespace is intentional

### Timeline Risks
**Risk:** Project exceeds timeline  
**Mitigation:**
- Phase gates strictly enforced
- Dependencies clearly mapped
- Parallel work where possible
- Cut scope, never quality

---

## DEPENDENCIES & BLOCKERS

### Critical Path Dependencies

**Phase 0 → Phase 1:**
- BLOCKER: Content must be 100% complete
- Cannot start technical foundation without final copy
- All projects selected and approved
- Design specifications locked

**Phase 1 → Phase 2:**
- Next.js project initialized
- Dependencies installed
- Fonts configured

**Phase 2 → Phase 3:**
- Tailwind tokens configured
- Global styles set
- Constants defined

**Phase 3 → Phase 4:**
- GSAP utilities ready
- Layout components built
- Performance monitoring active

**Phase 4 → Phase 5:**
- All sections implemented
- Initial animations in place
- Ready for motion audit

**Phase 5 → Phase 6:**
- Motion audit complete
- Animations finalized or deleted
- No further motion changes

**Phase 6 → Phase 7:**
- Performance targets met
- Images optimized
- JS/Fonts optimized

**Phase 7 → Phase 8:**
- All QA passed
- Final motion audit complete
- Content verified
- Human approvals obtained

---

## QUALITY GATES

### Phase 0 Gate: Content Complete
**Criteria:**
- All copy final and approved
- 3-5 projects selected
- All images prepared
- Design specs locked
- Human sign-off obtained

**If Not Met:** Cannot proceed to Phase 1

---

### Phase 4 Gate: Sections Complete
**Criteria:**
- All 6 sections implemented
- Initial animations working
- Responsive at all breakpoints
- No console errors

**If Not Met:** Cannot proceed to Phase 5

---

### Phase 5 Gate: Motion Audit Pass
**Criteria:**
- All animations scored 4/4
- Reduced motion verified
- Mobile testing complete
- Human sign-off obtained

**If Not Met:** Delete failing animations, re-audit

---

### Phase 6 Gate: Performance Targets
**Criteria:**
- Lighthouse Performance ≥ 95
- CLS = 0
- JS execution ≤ 150ms
- Initial load ≤ 2MB
- First interaction < 1.5s

**If Not Met:** Continue optimization, cannot launch

---

### Phase 7 Gate: QA Complete
**Criteria:**
- Cross-browser testing passed
- Accessibility audit passed
- Content verification complete
- Final motion audit 4/4
- All human approvals obtained

**If Not Met:** Resolve issues, re-test

---

### Phase 8 Gate: Launch Ready
**Criteria:**
- 100% of pre-launch checklist complete
- Zero critical issues
- All stakeholder approvals
- Rollback plan ready

**If Not Met:** Do not launch

---

## COMMUNICATION PROTOCOL

### Daily Standups (Async)
**Format:**
```markdown
## Daily Update - [Date]

### Completed Yesterday
- [Task 1]
- [Task 2]

### Today's Focus
- [Task 1]
- [Task 2]

### Blockers
- [Blocker 1] - Owner: [Agent/Human]
- [Blocker 2] - Owner: [Agent/Human]

### Help Needed
- [Request 1]
```

### Phase Completion Reports
**Format:**
```markdown
## Phase [N] Completion Report

### Phase Summary
- Start Date: [Date]
- End Date: [Date]
- Duration: [Days]

### Deliverables Completed
- [x] Deliverable 1
- [x] Deliverable 2

### Acceptance Criteria Met
- [x] Criteria 1
- [x] Criteria 2

### Issues Encountered
- Issue 1: [Description] - Resolved: [Y/N]
- Issue 2: [Description] - Resolved: [Y/N]

### Lessons Learned
- [Learning 1]
- [Learning 2]

### Next Phase Readiness
- [x] Dependencies met
- [x] Resources allocated
- [x] Human approvals obtained
```

### Human Review Requests
**Format:**
```markdown
## Review Request - [Component/Phase]

### What Needs Review
[Description]

### Review Criteria
- [ ] Criteria 1
- [ ] Criteria 2

### Materials Provided
- [Link/File 1]
- [Link/File 2]

### Questions for Reviewer
1. [Question 1]
2. [Question 2]

### Urgency
- [ ] Blocking (stop work until reviewed)
- [ ] High (needed within 24h)
- [ ] Medium (needed within 3 days)
- [ ] Low (needed before phase end)

### Deadline
[Date/Time]
```

---

## TROUBLESHOOTING GUIDE

### Common Issues & Solutions

#### Issue: GSAP ScrollTrigger Not Working
**Symptoms:**
- Animations not triggering on scroll
- Console errors about ScrollTrigger

**Solutions:**
1. Verify ScrollTrigger is registered:
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

2. Check if running on server-side:
```typescript
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}
```

3. Verify trigger elements exist:
```typescript
const element = document.querySelector('[data-trigger]')
if (!element) console.error('Trigger element not found')
```

---

#### Issue: Images Causing CLS
**Symptoms:**
- Layout shift when images load
- Lighthouse CLS score > 0

**Solutions:**
1. Add explicit dimensions:
```typescript
<Image 
  src="/image.jpg"
  width={800}
  height={600}  // Must match actual aspect ratio
  alt="Description"
/>
```

2. Use aspect-ratio wrapper:
```typescript
<div className="relative aspect-[4/3]">
  <Image src="/image.jpg" fill alt="Description" />
</div>
```

3. Verify no dynamic content above images

---

#### Issue: Fonts Causing FOUT
**Symptoms:**
- Flash of unstyled text on load
- Text appears then changes font

**Solutions:**
1. Use display: swap:
```typescript
const font = localFont({
  src: './font.woff2',
  display: 'swap',
  preload: true,
})
```

2. Preload critical fonts:
```typescript
<link 
  rel="preload" 
  href="/fonts/font.woff2" 
  as="font" 
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

3. Match fallback font metrics

---

#### Issue: Animations Janky on Mobile
**Symptoms:**
- Stuttering animations
- Low frame rate
- Scroll feels heavy

**Solutions:**
1. Simplify mobile animations:
```typescript
mm.add('(max-width: 767px)', () => {
  // Replace complex animation with simple fade
  gsap.to(element, { opacity: 1, duration: 0.4 })
})
```

2. Remove pinning on mobile:
```typescript
mm.add('(min-width: 1024px)', () => {
  // Pinning only on desktop
  ScrollTrigger.create({ pin: element })
})
```

3. Use will-change sparingly:
```css
.animated-element {
  will-change: transform, opacity;
}
```

---

#### Issue: Lighthouse Performance < 95
**Symptoms:**
- Performance score below target
- Slow load times

**Solutions:**
1. Check image sizes:
```bash
# Images should be < 200KB each
ls -lh public/images/
```

2. Analyze bundle size:
```bash
ANALYZE=true npm run build
```

3. Check JS execution time:
```typescript
// Add performance marks
performance.mark('start')
// ... code
performance.mark('end')
performance.measure('duration', 'start', 'end')
```

4. Remove unused dependencies

---

#### Issue: prefers-reduced-motion Not Working
**Symptoms:**
- Animations still play with reduced motion enabled
- Accessibility failure

**Solutions:**
1. Verify check at component level:
```typescript
useGSAP(() => {
  if (prefersReducedMotion()) return
  // animations
})
```

2. Add global CSS fallback:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

3. Test with OS setting enabled

---

#### Issue: Vercel Build Failing
**Symptoms:**
- Build fails during deployment
- Type errors in production

**Solutions:**
1. Test production build locally:
```bash
npm run build
npm run start
```

2. Check TypeScript errors:
```bash
npx tsc --noEmit
```

3. Verify environment variables set

4. Check Next.js version compatibility

---

## OPTIMIZATION CHECKLIST

### Image Optimization
- [ ] All images < 200KB
- [ ] AVIF + WebP formats
- [ ] Explicit dimensions set
- [ ] Lazy loading below fold
- [ ] Priority loading for hero
- [ ] Total payload < 1.5MB
- [ ] No CLS from images

### JavaScript Optimization
- [ ] Bundle analyzed
- [ ] Unused code removed
- [ ] Code splitting implemented
- [ ] GSAP tree-shaken
- [ ] Console logs removed (production)
- [ ] No blocking scripts
- [ ] JS execution < 150ms

### CSS Optimization
- [ ] Critical CSS inlined
- [ ] Unused Tailwind purged
- [ ] No render-blocking CSS
- [ ] Minimal custom CSS
- [ ] Animations use transform/opacity only

### Font Optimization
- [ ] Fonts preloaded
- [ ] display: swap configured
- [ ] Fallback metrics matched
- [ ] WOFF2 format used
- [ ] Subset fonts (if applicable)
- [ ] Font load < 100ms

### Animation Optimization
- [ ] All animations < 0.8s
- [ ] Use transform/opacity only
- [ ] Reduced motion respected
- [ ] No janky animations
- [ ] ScrollTrigger optimized
- [ ] Mobile simplified

### Accessibility Optimization
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation working
- [ ] Screen reader compatible
- [ ] Color contrast ≥ 7:1
- [ ] Focus indicators visible
- [ ] Alt text descriptive
- [ ] ARIA labels where needed

---

## TESTING MATRIX

### Browser Testing Matrix
| Browser | Version | Desktop | Mobile | Tablet | Priority |
|---------|---------|---------|--------|--------|----------|
| Safari | Latest | ✅ | ✅ | ✅ | Critical |
| Chrome | Latest | ✅ | ✅ | ✅ | Critical |
| Firefox | Latest | ✅ | ❌ | ❌ | High |
| Edge | Latest | ✅ | ❌ | ❌ | Medium |
| Samsung Internet | Latest | ❌ | ✅ | ❌ | Low |

### Device Testing Matrix
| Device | OS | Browser | Screen Size | Priority |
|--------|----|---------|-----------:|----------|
| iPhone 14 Pro | iOS 17 | Safari | 393×852 | Critical |
| iPhone SE | iOS 17 | Safari | 375×667 | High |
| iPad Pro | iPadOS 17 | Safari | 1024×1366 | Medium |
| Samsung Galaxy S23 | Android 13 | Chrome | 360×780 | Critical |
| Google Pixel 7 | Android 13 | Chrome | 412×915 | High |
| MacBook Pro 14" | macOS | Safari/Chrome | 1512×982 | Critical |
| Windows Laptop | Windows 11 | Chrome/Edge | 1920×1080 | High |

### Network Testing Matrix
| Connection | Download | Upload | Latency | Test Scenarios |
|------------|----------|--------|---------|----------------|
| Fast 4G | 4 Mbps | 3 Mbps | 170ms | Initial load, image loading |
| Slow 3G | 400 Kbps | 400 Kbps | 400ms | Performance baseline |
| WiFi | 30+ Mbps | 15+ Mbps | 28ms | Ideal conditions |
| Offline | - | - | - | PWA fallback (N/A for this project) |

---

## LAUNCH CHECKLIST (FINAL)

### Pre-Launch Sign-Offs Required

#### Content Sign-Off
```markdown
## Content Sign-Off Document

### Reviewer Information
- Name: [Human Reviewer]
- Role: [Role]
- Date: [Date]

### Content Items Reviewed
- [ ] Hero headline: "I build digital systems that feel inevitable."
- [ ] About section: 49 words, 3 sentences
- [ ] Project 1: [Title] - [One-liner]
- [ ] Project 2: [Title] - [One-liner]
- [ ] Project 3: [Title] - [One-liner]
- [ ] Process principles (3-4)
- [ ] Credibility signals
- [ ] CTA copy

### Approval Status
- [ ] All content approved as final
- [ ] No further changes needed
- [ ] Ready for launch

**Signature:** ________________  
**Date:** ________________
```

#### Motion Audit Sign-Off
```markdown
## Final Motion Audit Sign-Off

### Reviewer Information
- Name: [You - Non-Delegable]
- Date: [Date]

### Animations Reviewed
- [ ] Hero entrance: 4/4 PASS
- [ ] Selected Work pinning: 4/4 PASS
- [ ] Selected Work scale: 4/4 PASS
- [ ] Process reveals: 4/4 PASS
- [ ] About parallax: 4/4 PASS
- [ ] Credibility stagger: 4/4 PASS
- [ ] CTA fade + hover: 4/4 PASS

### Testing Completed
- [ ] Real iPhone tested
- [ ] Real Android tested
- [ ] Reduced motion verified
- [ ] All animations < 0.8s
- [ ] No scroll blocking

### Motion System Status
- [ ] All animations scored 4/4
- [ ] Motion system locked
- [ ] No further changes

**Signature:** ________________  
**Date:** ________________
```

#### Performance Sign-Off
```markdown
## Performance Audit Sign-Off

### Metrics Achieved
- Lighthouse Performance: [Score] / 95 minimum
- Lighthouse Accessibility: [Score] / 100 required
- CLS: [Score] / 0 required
- LCP: [Score] / 2.5s maximum
- FID: [Score] / 100ms maximum
- Page Weight: [Size] / 2MB maximum
- JS Execution: [Time] / 150ms maximum

### Approval Status
- [ ] All performance targets met
- [ ] Ready for launch

**Signature:** ________________  
**Date:** ________________
```

#### Technical Sign-Off
```markdown
## Technical Launch Sign-Off

### Infrastructure
- [ ] Production environment configured
- [ ] Custom domain connected
- [ ] HTTPS enforced
- [ ] Environment variables set
- [ ] CDN caching configured

### Build & Deployment
- [ ] Production build succeeds
- [ ] No console errors
- [ ] No console warnings
- [ ] Vercel deployment tested

### Monitoring
- [ ] Error logging configured
- [ ] Performance monitoring active
- [ ] Analytics configured (if applicable)

### Approval Status
- [ ] All technical requirements met
- [ ] Ready for launch

**Signature:** ________________  
**Date:** ________________
```

---

## POST-LAUNCH MAINTENANCE

### Week 1 Maintenance Tasks
```markdown
## Week 1 Post-Launch Tasks

### Daily (Days 1-7)
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Review user feedback
- [ ] Track analytics (if enabled)
- [ ] Verify uptime

### End of Week 1
- [ ] Generate performance report
- [ ] Compile user feedback
- [ ] Document any issues
- [ ] Assess launch success
- [ ] Plan iteration roadmap (if needed)
```

### Month 1 Maintenance Tasks
```markdown
## Month 1 Post-Launch Tasks

### Weekly
- [ ] Performance check
- [ ] Error log review
- [ ] Content freshness assessment
- [ ] Analytics review

### End of Month 1
- [ ] Full performance audit
- [ ] User feedback synthesis
- [ ] Competitive analysis
- [ ] Iteration planning
- [ ] ROI assessment
```

### Ongoing Maintenance
```markdown
## Ongoing Maintenance Schedule

### Monthly
- [ ] Lighthouse audit
- [ ] Dependency updates (security only)
- [ ] Performance monitoring
- [ ] Content review

### Quarterly
- [ ] Full QA regression test
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO review
- [ ] Analytics deep-dive

### Annually
- [ ] Major dependency updates
- [ ] Design refresh assessment
- [ ] Content strategy review
- [ ] Technology stack review
```

---

## SUCCESS METRICS DASHBOARD

### Technical Metrics
```markdown
## Technical Success Metrics

### Performance (Target)
- Lighthouse Performance: ≥ 95 (Current: ___)
- Lighthouse Accessibility: 100 (Current: ___)
- CLS: 0 (Current: ___)
- LCP: < 2.5s (Current: ___)
- FID: < 100ms (Current: ___)
- TTFB: < 600ms (Current: ___)

### Load Performance
- Initial Page Weight: ≤ 2MB (Current: ___)
- JS Execution Time: ≤ 150ms (Current: ___)
- Time to Interactive: < 1.5s (Current: ___)
- Font Load Time: < 100ms (Current: ___)

### Quality Metrics
- Console Errors: 0 (Current: ___)
- Failed Requests: 0 (Current: ___)
- Broken Links: 0 (Current: ___)
- Accessibility Issues: 0 (Current: ___)
```

### User Experience Metrics
```markdown
## User Experience Success Metrics

### Engagement (Monitor)
- Average Session Duration: ___
- Bounce Rate: ___
- Scroll Depth: ___
- Pages per Session: ___ (N/A - single page)

### Conversion (Goals)
- Contact Form Submissions: ___
- Email Link Clicks: ___
- Project Interest: ___

### Qualitative (Feedback)
- User Testimonials: ___
- Peer Reviews: ___
- Industry Recognition: ___
```

---

## FINAL PRINCIPLES REMINDER

### The Six Immutable Principles

1. **Content Over Interface**
   - The content is the interface
   - Motion serves content, never replaces it
   - Every word earns its place

2. **Motion Explains, Never Decorates**
   - Animations have purpose
   - Delete if it fails the 4-question test
   - Invisible motion is successful motion

3. **Restraint Is the Signature**
   - One accent color only
   - Six sections only
   - Whitespace is intentional
   - Less is more

4. **Performance Is the Aesthetic**
   - Fast feels premium
   - Targets are non-negotiable
   - Optimize before polish
   - Measure everything

5. **Typography Does the Heavy Lifting**
   - Type is the primary visual element
   - Hierarchy through scale and weight
   - Generous line-height
   - Text-first design

6. **Real Devices, Real Testing**
   - Not emulators
   - Not screenshots
   - Real hardware only
   - Test in context

---

## EMERGENCY CONTACTS & ESCALATION

### Critical Issue Escalation Path

**Level 1: Agent Self-Resolution (< 1 hour)**
- Agent attempts to resolve independently
- Consult documentation
- Check troubleshooting guide

**Level 2: Cross-Agent Collaboration (< 4 hours)**
- Consult with backup agent
- Review with related agents
- Check phase dependencies

**Level 3: Human Intervention (< 24 hours)**
- Document issue thoroughly
- Prepare options for resolution
- Request human decision

**Level 4: Project Lead Decision (Immediate)**
- Critical blockers
- Launch-impacting issues
- Scope change requests
- Budget/timeline concerns

---

## APPENDIX A: GLOSSARY

**CLS (Cumulative Layout Shift):** Metric measuring visual stability. Target: 0

**FID (First Input Delay):** Metric measuring interactivity. Target: < 100ms

**FOUT (Flash of Unstyled Text):** Brief period where fallback font shows before web font loads

**LCP (Largest Contentful Paint):** Metric measuring loading performance. Target: < 2.5s

**Motion Audit:** 4-question evaluation of every animation (Meaning, Removal, Respect, Mobile)

**Range Principle:** Each project must demonstrate a different strength

**Reduced Motion:** Accessibility preference to minimize or eliminate animations

**TTFB (Time to First Byte):** Metric measuring server response time. Target: < 600ms

**TTI (Time to Interactive):** Metric measuring when page becomes fully interactive

**WCAG:** Web Content Accessibility Guidelines. Target: 2.1 AA compliance

---

## APPENDIX B: REFERENCE LINKS

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Pa11y](https://pa11y.org/)
- [WebPageTest](https://www.webpagetest.org/)
- [Vercel Analytics](https://vercel.com/analytics)

### Testing
- [BrowserStack](https://www.browserstack.com/)
- [LambdaTest](https://www.lambdatest.com/)
- [Can I Use](https://caniuse.com/)

### Optimization
- [Squoosh](https://squoosh.app/) - Image optimization
- [SVGO](https://github.com/svg/svgo) - SVG optimization
- [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) - Font conversion

---

## APPENDIX C: FILE STRUCTURE REFERENCE

```
one-in-town-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── SelectedWork.tsx
│       │   ├── Process.tsx
│       │   ├── About.tsx
│       │   ├── Credibility.tsx
│       │   └── CTA.tsx
│       ├── ui/
│       │   └── (reusable UI components if needed)
│       └── motion/
│           └── (motion-specific components if needed)
├── lib/
│   ├── utils/
│   │   ├── gsap.ts
│   │   ├── performance.ts
│   │   └── monitoring.ts
│   ├── constants/
│   │   ├── motion.ts
│   │   └── content.ts
│   └── fonts.ts
├── public/
│   ├── images/
│   │   ├── project-1-hero.avif
│   │   ├── project-1-hero.webp
│   │   ├── project-2-hero.avif
│   │   ├── project-2-hero.webp
│   │   ├── project-3-hero.avif
│   │   ├── project-3-hero.webp
│   │   ├── about-portrait.avif
│   │   ├── about-portrait.webp
│   │   └── logos/
│   │       ├── company-1.svg
│   │       └── company-2.svg
│   ├── fonts/
│   │   ├── SF-Pro-Display-Regular.woff2
│   │   ├── SF-Pro-Display-Medium.woff2
│   │   └── SF-Pro-Display-Semibold.woff2
│   ├── og-image.jpg
│   ├── favicon.ico
│   └── robots.txt
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── vercel.json
├── .env.production
└── README.md
```

---

## CONCLUSION

This implementation roadmap provides a complete, phase-by-phase guide to building the One-in-Town Portfolio to PRD specifications using Antigravity IDE with agent-based development.

### Key Success Principles:
1. **Content First** - No design without final copy
2. **Motion Discipline** - Delete failing animations immediately
3. **Performance Non-Negotiable** - Meet all targets or don't ship
4. **Six Sections Only** - Scope is locked
5. **Real Device Testing** - Verify on actual hardware

### Human Involvement Required:
- **Phase 0:** Content approval
- **Phase 5.1:** Motion audit (non-delegable)
- **Phase 7.3:** Content QA
- **Phase 7.4:** Final motion audit (non-delegable)
- **Phase 8.4:** Launch decision

### Remember the Core Test:
> "Can someone describe this site in one sentence without mentioning what's on it?"

If the answer is vague ("clean", "nice", "smooth"), the product has failed.

The goal is **memorability through restraint**, not flashy effects. Every decision should pass the test: "Does this serve the content, or replace it?"

### Final Philosophy:
> "If someone compliments your animations, that's fine. If no one mentions them, that's success."

This person has **taste, not just tools**. The entire site exists to prove judgment and restraint — quietly.

**Ship calm. Ship confident. Ship inevitable.**

---

**Document Version:** 1.0  
**Last Updated:** [Current Date]  
**Status:** Ready for Implementation  
**Next Review:** Post-Launch Retrospective

---

END OF IMPLEMENTATION ROADMAP