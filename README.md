# Personal Portfolio

A Next.js portfolio site built with TypeScript, Tailwind CSS, and Framer Motion. All content lives in `src/content.ts` — edit this file and push to redeploy.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing content

All copy, data, and metadata live in `src/content.ts`. The file exports:

- **`PROFILE`** — your name, headline, links, photo, and intro text
- **`PROJECTS`** — the five case studies with blocks, facts, videos, and figures
- **`EXPERIENCE`** — jobs, companies, logos, and accomplishments
- **`AWARDS`** — recognitions and fellowships
- **`EDUCATION`** — schools, degrees, and dates
- **`SKILLS`** — grouped by category

The site re-renders automatically when you edit `src/content.ts`. HTML entities (like `&#163;` for £) and inline `<strong>`/`<em>` tags are rendered as HTML, not as literal text.

### Do not retype or paraphrase. The content.ts file has already been structured. Copy from it directly.

## Structure

```
src/
├── app/
│   ├── layout.tsx          — topbar, rail navigation
│   ├── page.tsx            — home page (all sections)
│   ├── globals.css         — all styling (design tokens, components, responsive)
│   └── work/[slug]/
│       ├── page.tsx        — case study route (server component, generateStaticParams)
│       └── client.tsx      — case study rendering (client component, scroll-spy)
├── content.ts              — all portfolio copy and data
└── public/                 — images, videos, logos (referenced in content.ts)
```

## Deployment to Vercel

1. **Initialize git and push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repo
   - Vercel will auto-detect Next.js and set build settings
   - Deploy

3. **Custom domain:**
   - In Vercel project settings, add your custom domain
   - Update your domain registrar's DNS records (Vercel provides instructions)

Every time you push to `main`, the site redeploys automatically.

## Key design details

- **Layout:** Two-column grid with sticky left rail (shrinks to horizontal strip on mobile)
- **Animations:** Sections fade and rise on scroll (IntersectionObserver), disabled under `prefers-reduced-motion`
- **Styling:** Custom CSS with Tailwind utilities, design tokens for colours and typography
- **Images:** Lazy-loaded except headshot and first project cover
- **Videos:** Preload="none" with poster images, never autoplay
- **Responsive:** Single column below 920px, images stack on top

## Building for production

```bash
npm run build
npm run start
```

## Technologies

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4** with `@tailwindcss/postcss`
- **React 19** with Framer Motion for animations
- **TypeScript** for type safety
