# California Garage Door Repair (CGR)

Modern, premium redesign of the CGR homepage — a conversion-focused, statewide 24/7 garage door service site.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

- Homepage: `/`
- UI Style Guide: `/style-guide`

## Structure

```
app/                 layout (fonts, SEO, JSON-LD), page.tsx, style-guide, globals.css (design tokens)
components/site/      Header, Footer, MobileActionBar
components/sections/  Hero, BrandStrip, ValueProps, LocationSearch, Services, HowItWorks,
                      CaliforniaProblems, SocialProof, WhyChooseUs, Technicians, RecentProjects, Faq, FinalCta
components/ui/        Button, primitives (Badge/RatingChip/TrustChip/SectionHeading/Stars), Reveal, Accordion
lib/content.ts       Single source of truth for all copy & data
lib/icons.tsx        String → lucide icon map
public/images/       Photography (AI-generated placeholders — replace with verified photos)
```

## Design system

All tokens (color, typography, radius, shadow, spacing) live in `app/globals.css` under `@theme`.
See `/style-guide` for the full component and token reference.

## Content & photos

Copy lives in `lib/content.ts`. Review text and photography are realistic placeholders
marked "Replace with verified review" — swap for verified assets before launch.

- Phone: (818) 369-8144 · CSLB #1077353 · Available 24/7
