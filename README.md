# HerChoice — B2B2C Sanitary Hygiene Website Demo

A polished, production-grade demo website for a sanitary hygiene manufacturer. Built as a recruiter-facing portfolio piece to showcase full-stack engineering, accessibility, security, and compliance standards.

> **Note:** All branding uses the fictional company name "HerChoice" with product brands "Live care" (premium maxi) and "Cozy-lite" (standard ultra-thin). Facility details, contact information, and testimonials are generic placeholders. This is a UI/UX demo — the contact form does not send real email in static mode.

---

## Table of Contents

- [What This Website Is About](#what-this-website-is-about)
- [Tech Stack](#tech-stack)
- [How It Was Developed](#how-it-was-developed)
- [Dual-Mode Architecture](#dual-mode-architecture)
- [Audits Carried Out](#audits-carried-out)
- [Bugs Found and Fixed](#bugs-found-and-fixed)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Naming Conventions](#naming-conventions)
- [Environment Variables](#environment-variables)
- [Verification Checklist](#verification-checklist)
- [Developer](#developer)
- [License](#license)

---

## What This Website Is About

A B2B2C positioning that serves two audiences:

- **Business buyers** — distributors, retailers, NGOs, and institutional procurement teams looking for OEM/white-label manufacturing partnerships and bulk supply
- **End consumers** — women seeking safe, comfortable, dermatologically-tested sanitary products

### Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, trust badges, product preview, values, stats, testimonials, CTA |
| About | `/about` | Company story, mission/vision/values, scale stats |
| Products | `/products` | Live care and Cozy-lite product details, comparison table, distributor CTA |
| Innovation | `/innovation` | 4-step manufacturing process on image background, ISO certification banner |
| Impact | `/impact` | Social impact metrics, accessibility and sustainability pillars, partner CTA |
| Manufacturing | `/manufacturing` | Technical material specs, 6-step production timeline, 8 certifications |
| Contact | `/contact` | Contact details, UI-only form with SPDI consent, FAQ |
| Privacy Policy | `/privacy` | Privacy policy (IT Act 2000, SPDI Rules 2011 compliant) |
| Terms of Service | `/terms` | Terms of service (Indian law governed) |

### Design Highlights

- **Hero gradient** — pages without background images use a layered 135-degree linear gradient (blush to warm to cream) with two subtle radial glow pseudo-elements for depth
- **Image heroes** — home, impact, and innovation pages use local PNG background images with overlay gradients for text legibility
- **No card lift animations** — cards use shadow and border changes on hover only, no vertical transform
- **Smooth scroll** — Lenis-powered smooth scrolling with scroll progress bar
- **Animated counters** — Framer Motion count-up animations on stats with screen-reader-friendly `aria-label`
- **Responsive typography** — `clamp()` for fluid font scaling across all breakpoints

---

## Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Framework | Next.js | 16.1.6 | App Router, static export, API routes |
| UI Library | React | 19.2.3 | Component rendering |
| Language | TypeScript | 5 | Type safety |
| Styling | Tailwind CSS | 4 | Utility classes, PostCSS |
| Animation | Framer Motion | 12.34.2 | Page and component animations |
| Smooth Scroll | Lenis | 1.3.17 | Smooth scroll behavior |
| Icons | lucide-react | 0.574.0 | SVG icon set |
| Linting | ESLint | 9 | Code quality with `eslint-config-next` |
| Deployment | GitHub Pages | — | Static export via GitHub Actions |
| Runtime | Node.js | 20+ | Build and dev server |

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `rose` | `#D6336C` | Primary brand color |
| `roseDeep` | `#B0285A` | Hover/active states |
| `roseLight` | `#FF4081` | Accent color |
| `blush` | `#FFB6C1` | Light accent, icon backgrounds |
| `cream` | `#FFF5F8` | Page background |
| `warm` | `#FFF0F3` | Section background |
| `brown` | `#2D1520` | Body text, dark sections |
| `muted` | `#8B5A6B` | Secondary text |
| `line` | `#F5DDE6` | Borders, dividers |
| `sand` | `#D4A5B0` | Footer secondary text |
| `parchment` | `#F0D5DD` | Footer body text |

All colors are defined as constants in `src/lib/colors.ts` and as CSS custom properties in `src/app/globals.css`.

### Fonts

| Font | Usage | Source |
|------|-------|--------|
| Cormorant Garamond | All text — headings, body, buttons, labels, navigation, footer | Google Fonts |

The project uses a single font family throughout. Cormorant Garamond is a serif typeface that gives the site a premium, editorial feel suitable for both display headings and body copy. Fallbacks: `Georgia, serif`.

---

## How It Was Developed

This project was **fully AI-assisted**, built through iterative prompt-driven development using [Devin](https://devin.ai) by Cognition. No code was written manually.

To be clear on the division of work: **the developer (Gauresh) acted as the system architect and decision-maker** — defining the architecture, page structure, design system, color palette, content positioning, compliance requirements, and review standards. **The AI only did the job of writing code based on prompts.** Every design choice, audit framework, bug diagnosis, and acceptance criteria came from the developer's own architectural knowledge. The AI was the typist, not the architect.

### Development Workflow

The development process followed this workflow:

1. **Project scaffolding** — Next.js app created with `create-next-app`, then progressively customized
2. **Branding generalization** — original Caphealthy Pharma references replaced with fictional "HerChoice" branding with product brands "Live care" and "Cozy-lite", facility details changed to `ABC Industrial Estate, Goa — 403XXX, India`
3. **B2C to B2B2C repositioning** — homepage rewritten to serve both business buyers (distributors, NGOs, procurement) and consumers, with CTAs like "Partner With Us" and "Request a Quote"
4. **Visual refinement** — pink palette applied, pad SVG artwork removed, hero image positioning tuned for mobile at approximately 75% from left
5. **Page-by-page audit** — every page audited and rewritten for dead code, naming, indentation, responsive behavior, and accessibility
6. **Compliance audit** — full ISO 27001, ISO 5055, WCAG 2.1, IT Act 2000, ISO 42001, and OWASP Top 10 audit applied across all pages and shared components
7. **Static export support** — GitHub Pages workflow added while preserving dynamic Next.js mode for local development
8. **README documentation** — full project documentation including audit results, bug log, and setup instructions

### Key Design Decisions

- **Why dual-mode?** Recruiters view the site on GitHub Pages (static), but the project should remain deployable to Vercel with a working API. Conditional export in `next.config.ts` achieves both without duplicating code.
- **Why no database?** This is a recruiter demo. The contact form is UI-only in static mode. The API route exists for future dynamic deployment but no database is wired.
- **Why fictional branding?** The project is a portfolio piece. "HerChoice" with product brands "Live care" and "Cozy-lite" gives the demo a realistic feel while remaining clearly fictional.
- **Why Cormorant Garamond for everything?** It gives a premium, editorial feel that works for both display headings and body copy — a common pattern in luxury and healthcare branding. Using a single font also simplifies the design system.
- **Why no card lift animations?** The developer chose shadow and border changes over vertical transforms for a more grounded, professional feel suitable for B2B audiences.

---

## Dual-Mode Architecture

The project supports two build modes from a single codebase:

### Dynamic Mode (Default)

Used for local development and future Vercel deployment.

| Feature | Status |
|---------|--------|
| API route `/api/contact` | Active — serverless function |
| Next.js image optimization | Enabled (AVIF, WebP) |
| Security headers (CSP, HSTS, etc.) | Active |
| Contact form | Sends to API, validates, returns JSON |

```bash
npm run dev    # development
npm run build  # production build
```

### Static Mode (GitHub Pages)

Used by the GitHub Actions workflow for recruiter-facing deployment.

| Feature | Status |
|---------|--------|
| API route `/api/contact` | Excluded from export |
| Next.js image optimization | Disabled (`images.unoptimized`) |
| Security headers | Not applicable (static hosting) |
| Contact form | UI-only — shows success message without sending |

```bash
GITHUB_PAGES=true NEXT_PUBLIC_STATIC_EXPORT=true npm run build
```

Output is generated in the `out/` directory.

### How It Works

The mode is controlled by two environment variables:

- `GITHUB_PAGES=true` — triggers `output: "export"` in `next.config.ts`
- `NEXT_PUBLIC_STATIC_EXPORT=true` — read client-side in `contact/page.tsx` to switch form behavior

The GitHub Actions workflow sets both variables during the build step.

---

## Audits Carried Out

Every page and shared component was audited against the following frameworks. No page was considered complete until it passed all applicable checks.

### ISO/IEC 27001 — Information Security

| Control | Check | Result |
|---------|-------|--------|
| A.8.15 Secrets | No hardcoded API keys, Supabase URLs, or credentials | Pass |
| A.8.2/A.8.3 Session | No `localStorage`, `sessionStorage`, or `document.cookie` usage | Pass |
| A.8.24 Data | No XSS vectors (`dangerouslySetInnerHTML`, `eval()`, `innerHTML`) | Pass |
| A.8.23 Web | No `target="_blank"` without `rel="noopener"` | Pass |
| A.8.23 Web | Content-Security-Policy header configured | Pass |
| A.8.23 Web | Strict-Transport-Security (HSTS) header configured | Pass |
| A.8.23 Web | X-Frame-Options: SAMEORIGIN (clickjacking defense) | Pass |
| A.8.23 Web | X-Content-Type-Options: nosniff | Pass |
| A.8.23 Web | Referrer-Policy: strict-origin-when-cross-origin | Pass |
| A.8.23 Web | Permissions-Policy: camera, microphone, geolocation disabled | Pass |
| A.8.12 Audit | API route validates Content-Type header (CWE-434) | Pass |
| A.8.12 Audit | API route performs strict input validation with length bounds | Pass |

### ISO/IEC 5055 — Software Quality

| Characteristic | Check | Result |
|----------------|-------|--------|
| Reliability | Deterministic error handling, no silent failures | Pass |
| Reliability | API throws explicit errors, no mocked fallback values | Pass |
| Maintainability | Shared CSS classes in `globals.css` | Pass |
| Maintainability | Data arrays extracted to named constants | Pass |
| Maintainability | Human-readable section IDs (`story`, `mission`, `stats`, etc.) | Pass |
| Maintainability | No array index keys (`key={i}`) — all keys are meaningful | Pass |
| Maintainability | No inline `<style>` blocks — all CSS in `globals.css` | Pass |
| Performance | Static prerendering for all 9 pages | Pass |
| Performance | Image optimization in dynamic mode (AVIF, WebP) | Pass |
| Performance | `clamp()` for fluid typography — no fixed pixel font sizes | Pass |
| Security | Input validation on all API fields | Pass |
| Security | Content-Type checking on API | Pass |

### WCAG 2.1 — Accessibility

| Criterion | Check | Result |
|-----------|-------|--------|
| 1.1.1 Non-text Content | `alt=""` on decorative background images | Pass |
| 1.3.1 Info and Relationships | Semantic HTML (`<ol>`, `<ul>`, `<li>`, `<h2>`) | Pass |
| 1.3.1 Info and Relationships | `scope="col"` on all table headers | Pass |
| 1.4.10 Reflow | Responsive grids with `auto-fit` and `minmax()` | Pass |
| 1.4.10 Reflow | Breakpoints at 640px and 768px | Pass |
| 1.4.11 Non-text Contrast | Color contrast meets AA standards on all sections | Pass |
| 2.1.1 Keyboard | Skip-to-content link in layout | Pass |
| 2.4.1 Bypass | `aria-label` on navigation and footer | Pass |
| 2.4.4 Link Purpose | `aria-current="page"` on active nav links | Pass |
| 2.4.6 Headings and Labels | All form inputs have associated `<label>` elements | Pass |
| 4.1.2 Name, Role, Value | `aria-label` on AnimatedCounter for screen readers | Pass |
| 4.1.2 Name, Role, Value | `aria-label` on logo link | Pass |
| 4.1.2 Name, Role, Value | `aria-expanded` on mobile menu toggle | Pass |

### IT Act 2000 & SPDI Rules 2011 — Indian Data Protection

| Requirement | Check | Result |
|-------------|-------|--------|
| SPDI Consent | Contact form includes explicit consent checkbox | Pass |
| SPDI Consent | Form cannot submit without consent | Pass |
| SPDI Consent | Consent text links to Privacy Policy | Pass |
| Privacy Policy | Covers data collection, usage, retention, rights, security | Pass |
| Terms of Service | Covers acceptance, usage, IP, liability, governing law | Pass |
| Section 79 | Terms of service and privacy policy published | Pass |
| Section 43A | Reasonable security practices (ISO 27001 alignment) | Pass |

### ISO/IEC 42001 — AI Governance

| Requirement | Check | Result |
|-------------|-------|--------|
| Algorithmic Accountability | No AI/LLM integration in the application | N/A |
| Hallucination Defense | No mocked fallback values — API throws explicit errors | Pass |
| Data Provenance | No external data processing | N/A |
| Deterministic Fallbacks | All try/catch blocks throw explicit errors | Pass |

### OWASP Top 10 (2021)

| ID | Vulnerability | Mitigation | Status |
|----|--------------|------------|--------|
| A01 | Broken Access Control | No auth in demo — N/A | N/A |
| A02 | Cryptographic Failures | HSTS enforced, no plaintext secrets | Pass |
| A03 | Injection (XSS) | CSP header, no `dangerouslySetInnerHTML`, React auto-escaping | Pass |
| A04 | Insecure Design | Input validation, content-type checking, length bounds | Pass |
| A05 | Security Misconfiguration | Security headers, no default credentials | Pass |
| A06 | Vulnerable Components | Dependencies pinned, no floating ranges | Pass |
| A07 | Auth Failures | No auth in demo — N/A | N/A |
| A08 | Data Integrity Failures | Content-Type validation on API | Pass |
| A09 | Logging Failures | API returns structured error responses | Pass |
| A10 | SSRF | No server-side requests — N/A | N/A |

---

## Bugs Found and Fixed

### 1. Static Export / API Route Conflict

**Problem:** `output: "export"` and `/api/contact` could not coexist — Next.js static export failed because API routes are inherently dynamic.

**Fix:** Made static export conditional in `next.config.ts` using the `GITHUB_PAGES` environment variable. The API route is preserved for dynamic mode. GitHub Actions sets the env var during build so the static export skips the API route.

**Files changed:** `next.config.ts`, `.github/workflows/deploy.yml`

### 2. Homepage Mobile Hero Image Cropping

**Problem:** `objectPosition: "center right"` caused poor framing on mobile — the hero image was cut off at the extreme right edge, cutting off the subject.

**Fix:** Introduced responsive `.hero-image` CSS with mobile-specific positioning at approximately 75% from the left. Reduced mobile hero height from `60vh` to a smaller mobile-specific value. Kept desktop positioning right-oriented for the two-column hero layout.

**Files changed:** `src/app/globals.css`, `src/app/page.tsx`

### 3. Footer Contrast

**Problem:** Footer body text was too dark against the dark brown background — unreadable and failed WCAG AA contrast.

**Fix:** Brightened footer body text to `var(--parchment)`, headings to `var(--blush)`, secondary/copyright text to `var(--sand)`.

**Files changed:** `src/components/footer.tsx`, `src/app/globals.css`

### 4. Footer Alignment and Spacing

**Problem:** Footer did not align cleanly with page content and the grid broke on mobile screens.

**Fix:** Replaced fixed `py-20` with `.section-py` shared class. Added responsive grid breakpoints. Kept footer inside `.wrap` container. Bottom bar stacks vertically on mobile and aligns horizontally on larger screens.

**Files changed:** `src/components/footer.tsx`, `src/app/globals.css`

### 5. Old Color Palette Bleed

**Problem:** After migrating to the new pink palette, 12+ old hex values remained scattered across the codebase: `#c0445a`, `#f0e4df`, `#a07060`, `#7a5c52`, `#2d1f1a`, `#c4a89e`, `#e8d5cf`, `#f4a7b9`, `#fce8ed`, `#fffaf8`. Old RGBA values `rgba(192,68,90,...)` and `rgba(255,250,248,...)` also persisted.

**Fix:** Systematically searched and replaced every old value with shared palette constants from `src/lib/colors.ts` or CSS variables. Verified zero remaining matches with grep across all `.tsx` and `.css` files.

**Files changed:** `src/components/navbar.tsx`, `src/components/scroll-progress.tsx`, `src/app/layout.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, all page files

### 6. Flat Hero Sections

**Problem:** Secondary page heroes used flat solid backgrounds (`blush`, `warm`) — looked unpolished compared to the image-based home hero.

**Fix:** Created reusable `.hero-gradient` CSS class with a 135-degree linear gradient (blush to warm to cream) plus two subtle radial glow pseudo-elements (`::before` and `::after`) for ambient depth. Applied to all 7 image-less hero sections without adding card components.

**Files changed:** `src/app/globals.css`, all page files with flat heroes

### 7. Dead Code and Inline Styles

**Problem:** Products page had a dead `type` field on product objects left over from removed pad SVGs. Products page had 34 lines of inline `<style>` CSS. About page had an inline `<style>` block for responsive grid.

**Fix:** Removed dead `type` field. Moved all inline CSS to `globals.css` as shared reusable classes: `.product-section-grid`, `.product-pad-visual`, `.product-section-wrap`, `.two-col-grid`.

**Files changed:** `src/app/products/page.tsx`, `src/app/about/page.tsx`, `src/app/globals.css`

### 8. Array Index Keys

**Problem:** Multiple pages used `key={i}` or `key={index}` for list items — a React anti-pattern that breaks reconciliation and can cause rendering bugs.

**Fix:** Replaced all index keys with meaningful values: `stat.label`, `metric.label`, `step.title`, `faq.q`, `feature`, `cert`, `section.heading`.

**Files changed:** All page files

### 9. Missing Viewport Meta

**Problem:** Layout had no viewport export — mobile rendering would use desktop width and require zooming.

**Fix:** Added `viewport` export with `width: device-width`, `initialScale: 1`, `themeColor: #D6336C`.

**Files changed:** `src/app/layout.tsx`

### 10. Stale Twitter Metadata

**Problem:** Twitter card title still said "Confidence. Period." — the old B2C consumer tagline that was replaced during the B2B2C repositioning.

**Fix:** Updated to "HerChoice — A Force for Health. A Force for Good." to match the updated OpenGraph and page title.

**Files changed:** `src/app/layout.tsx`

### 11. Missing Security Headers

**Problem:** `next.config.ts` only had 4 security headers — missing CSP and HSTS, which are critical for OWASP A03 (XSS) and A02 (Cryptographic Failures).

**Fix:** Added `Content-Security-Policy` with `default-src 'self'`, restricted script/style/img/font/connect sources, `frame-ancestors 'self'`, `base-uri 'self'`, `form-action 'self'`. Added `Strict-Transport-Security` with 2-year max-age, subdomains, preload.

**Files changed:** `next.config.ts`

### 12. Missing API Content-Type Validation

**Problem:** The contact API route accepted any Content-Type — a client could send non-JSON payloads causing unhandled parse errors.

**Fix:** Added Content-Type check at the top of the POST handler. Returns 415 Unsupported Media Type if `application/json` is not present.

**Files changed:** `src/app/api/contact/route.ts`

### 13. Missing SPDI Consent

**Problem:** Contact form collected personal data (name, email, message) without explicit consent — non-compliant with IT Act SPDI Rules 2011.

**Fix:** Added consent checkbox with link to Privacy Policy. Form validation prevents submission without consent. Error message displayed if user tries to submit without checking.

**Files changed:** `src/app/contact/page.tsx`

### 14. Non-Semantic HTML in Manufacturing Page

**Problem:** Process steps and certifications used `<div>` elements instead of semantic lists — failed WCAG 1.3.1 (Info and Relationships).

**Fix:** Converted process steps container from `<div>` to `<ol>` with `<li>` items. Converted certifications container from `<div>` to `<ul>` with `<li>` items.

**Files changed:** `src/app/manufacturing/page.tsx`

### 15. Footer Headings Using `<p>` Instead of `<h2>`

**Problem:** Footer section headings ("Products", "Company", "Our Facility") used `<p>` tags — failed WCAG 1.3.1 and broke heading hierarchy.

**Fix:** Converted all three footer section headings to `<h2>` with `font-family: Roboto` reset to match the visual style. Added `margin: 0` reset to override browser defaults.

**Files changed:** `src/components/footer.tsx`, `src/app/globals.css`

---

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/neural-port/project-b2b-website-demo.git
cd project-b2b-website-demo
npm install
```

### Local Development (Dynamic Mode)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For mobile/LAN testing, ensure your phone and dev machine are on the same network and access:

```
http://<your-machine-ip>:3000
```

### Production Build (Dynamic Mode)

```bash
npm run build
npm run start
```

### Static Export (GitHub Pages Mode)

```bash
# On Windows (PowerShell)
$env:GITHUB_PAGES="true"; $env:NEXT_PUBLIC_STATIC_EXPORT="true"; npm run build

# On Linux/macOS
GITHUB_PAGES=true NEXT_PUBLIC_STATIC_EXPORT=true npm run build
```

Output is generated in the `out/` directory. You can serve it locally with:

```bash
npx serve out
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npx tsc --noEmit
```

---

## Deployment

### GitHub Pages (Active)

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically:

1. Triggers on push to `master` branch
2. Checks out the code
3. Sets up Node.js 20 with npm cache
4. Installs dependencies with `npm ci`
5. Builds with `GITHUB_PAGES=true` and `NEXT_PUBLIC_STATIC_EXPORT=true`
6. Uploads the `out/` directory as a GitHub Pages artifact
7. Deploys to GitHub Pages

**Intended URL:** `https://neural-port.github.io/project-b2b-website-demo/`

To enable GitHub Pages after pushing:

1. Go to repository **Settings > Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `master` — the workflow runs automatically

### Vercel (Future)

The dynamic mode build is Vercel-ready. To deploy:

1. Import the repository on [Vercel](https://vercel.com)
2. No environment variables needed for dynamic mode
3. The API route at `/api/contact` will be available as a serverless function
4. Security headers from `next.config.ts` will be applied automatically

---

## Project Structure

```
project-b2b-website-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages deployment workflow
├── public/
│   └── images/
│       ├── hero_bg_1.png           # Home hero background
│       ├── hero_bg_2.png           # Impact hero background
│       └── hero_bg_3.png           # Innovation process background
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # Contact API (dynamic mode only)
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page with form + SPDI consent
│   │   ├── impact/
│   │   │   └── page.tsx            # Impact page
│   │   ├── innovation/
│   │   │   └── page.tsx            # Innovation/process page
│   │   ├── manufacturing/
│   │   │   └── page.tsx            # Manufacturing page
│   │   ├── privacy/
│   │   │   └── page.tsx            # Privacy policy
│   │   ├── products/
│   │   │   └── page.tsx            # Products page
│   │   ├── terms/
│   │   │   └── page.tsx            # Terms of service
│   │   ├── globals.css             # Global styles, shared classes, footer
│   │   ├── layout.tsx              # Root layout, metadata, viewport
│   │   └── page.tsx                # Home page
│   ├── components/
│   │   ├── animated-counter.tsx    # Count-up animation with aria-label
│   │   ├── footer.tsx              # Shared footer with semantic headings
│   │   ├── navbar.tsx              # Shared navbar with mobile menu
│   │   ├── pad-svg.tsx             # (Unused — removed from all pages)
│   │   ├── scroll-progress.tsx     # Scroll progress bar
│   │   └── smooth-scroll.tsx       # Lenis smooth scroll wrapper
│   └── lib/
│       ├── colors.ts               # Shared color palette constants
│       └── motion.ts               # Shared Framer Motion variants
├── next.config.ts                  # Next.js config with security headers
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.mjs               # ESLint configuration
└── README.md                       # This file
```

---

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Files and folders | kebab-case | `animated-counter.tsx`, `smooth-scroll.tsx` |
| Variables and functions | camelCase | `storyHighlights`, `contactDetails` |
| Classes and components | PascalCase | `AnimatedCounter`, `ScrollProgress` |
| Environment variables | UPPER_SNAKE_CASE | `NEXT_PUBLIC_STATIC_EXPORT`, `GITHUB_PAGES` |
| CSS classes | kebab-case | `.hero-gradient`, `.premium-card`, `.section-py` |
| Section IDs | kebab-case | `story`, `mission`, `stats`, `certifications` |

---

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `GITHUB_PAGES` | No | Set to `true` for static export. Triggers `output: "export"` in `next.config.ts` |
| `NEXT_PUBLIC_STATIC_EXPORT` | No | Set to `true` for static export. Read client-side in contact form to switch to UI-only mode |

No other environment variables are required. There are no database URLs, API keys, or secrets to configure.

---

## Verification Checklist

Before any change is considered complete, the following must pass:

```bash
npm run lint          # ESLint — 0 errors, 0 warnings
npx tsc --noEmit      # TypeScript — 0 errors
npm run build         # Next.js build — all pages generated
```

### Expected Build Output

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ƒ /api/contact
├ ○ /contact
├ ○ /impact
├ ○ /innovation
├ ○ /manufacturing
├ ○ /privacy
├ ○ /products
└ ○ /terms

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

- 9 static pages (`○`)
- 1 dynamic API route (`ƒ`) — only in dynamic mode
- 1 not-found page

---

## Developer

**Gauresh Chari** — Poriem, Goa, India

- System Architect and decision-maker
- Defined architecture, design system, compliance requirements, and review standards
- All code was written by AI (Devin by Cognition) based on the developer's prompts and architectural direction

---

## License

Copyright (c) 2026 Gauresh Chari. All rights reserved.

This software and associated documentation files (the "Software") are provided solely for portfolio demonstration and recruiter review purposes. The Software is provided under a **proprietary, all-rights-reserved license** — no open-source license is granted.

### Permitted Uses

- Viewing the Software for evaluation purposes
- Running the Software locally for demonstration
- Reviewing the code for recruitment assessment

### Prohibited Uses

- Commercial use of any kind
- Redistribution, sublicensing, or resale
- Modification and redistribution of modified versions
- Use of the design, layout, or code as a template for other commercial products
- Removal or alteration of copyright notices

### Branding Notice

All branding in this project uses the fictional company name "HerChoice" with product brands "Live care" (premium maxi) and "Cozy-lite" (standard ultra-thin). Facility details, contact information, testimonials, and product specifications are fictional placeholders created for demonstration purposes only. No real company, person, or product is represented.

### Disclaimer of Warranty

The Software is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the author be liable for any claim, damages, or other liability arising from the use of the Software.

### Contact

For licensing inquiries or permissions beyond the scope of this license, contact:

```
Gauresh Chari
Poriem, Goa, India
```
