# Build prompt for Claude Code

Paste everything below the line into Claude Code, in an empty folder that also
contains the unzipped `portfolio-bundle` (so you have `content.ts`, `public/`
and `reference/mockup.html` sitting next to it).

---

Build my personal portfolio site as a Next.js app and deploy it to Vercel.

## What you have to work with

- `reference/mockup.html` — **a complete, working reference implementation.** Open it and
  match it. It is a single HTML file with inline CSS and a small hash router. Your job is
  to port it to Next.js, not to redesign it. When my instructions below and the mockup
  disagree, the mockup wins.
- `content.ts` — every piece of copy and data, already structured. Move it to
  `src/content.ts` and import from it. **Do not retype or paraphrase any of this content.**
- `public/` — all images and videos, at the exact paths `content.ts` references. Copy the
  whole folder to the project root's `public/`.

## Stack

- Next.js (App Router, TypeScript), Tailwind CSS, Framer Motion.
- Deploy to Vercel. Set it up so pushing to `main` redeploys.
- No CMS, no database, no API routes. Content lives in `content.ts`.

## Routes

- `/` — the home page: intro, projects, experience, awards, education, skills.
- `/work/[slug]` — one static page per project, generated from `PROJECTS` via
  `generateStaticParams`. Slugs: `flowstate`, `reframe`, `finbuddy`, `scrf`, `tate`.

The mockup fakes these with a hash router. In Next these must be **real routed pages** so
they get their own URLs, their own metadata, and work when shared directly.

## Layout

Two columns, max width 1180px, 28px side padding:

- **Left rail, 168px**, sticky at 72px from top. Mono type, 10.5px, uppercase, letter-spacing
  .06em. Each item is a 14px horizontal tick plus a label. The active item's tick grows to
  26px and turns the signal colour, and the label goes to full ink and weight 500.
  - On `/` the rail lists: Intro, 01 Projects, 02 Experience, 03 Education, 04 Skills.
  - On a case study it lists "← All projects" then that project's section headings, in order.
  - Active state is driven by an IntersectionObserver scroll-spy with
    `rootMargin: "-12% 0px -72% 0px"`. Clicking scrolls smoothly to the section.
- **Main column** takes the rest, with a 52px gap.
- **Sticky top bar**: name with a signal-coloured dot on the left; Substack, email and a
  "Let's connect →" button on the right. Translucent background with a blur and a hairline
  bottom border.

## Design tokens

```
--bg:      #FBFBF9      --panel: #FFFFFF
--ink:     #0B0B0B      --ink2:  #3F3F46      --ink3: #71717A
--line:    #E7E7E3      --line2: #EFEFEB
--sig:     #C8102E      (the one signal colour — section numbers, active rail tick,
                         tags, accent borders, link underlines)
--radius:  8px
```

- **Body type:** Inter. **Mono:** JetBrains Mono, used for all labels, dates, captions and
  section headings. Load both from Google Fonts via `next/font`.
- **Texture:** a fixed full-viewport SVG feTurbulence noise overlay at `opacity: .16`,
  `mix-blend-mode: multiply`, `pointer-events: none`, `z-index: 9999`. The exact data URI is
  in the mockup's `--grain` variable — copy it verbatim. This is load-bearing to the look;
  without it the page is flat white and wrong.
- **Project card thumbnails** get a dot-grid background: `radial-gradient(rgba(11,11,11,.13)
  1px, transparent 1.1px)` at `background-size: 14px 14px`.

## Measure and media sizing

This matters and is easy to get wrong. The reference has been tuned; match it exactly.

- Body copy: `max-width: 660px`, justified, `hyphens: auto`, `text-justify: inter-word`.
- Headings, captions, mono labels, table headers, chips, pills, the experience left column
  and the fact strip: **left-aligned, not justified.**
- Standard figures: `max-width: 520px`. Slide figures (`.wide`): `660px`.
- Video: `max-width: 440px`.
- Side-by-side figure pairs: `660px` total.
- Experience photos: `max-width: 470px`.
- Tables, comparison grids and persona grids: 760–860px.

## Components

**Project card** — 300px thumbnail column plus body, min-height 238px, body vertically
centred so all five cards are the same height. Tag row in mono, title, glimpse, then
"Read case study →" plus optional "Visit site ↗" or "Demo video". Whole card is a link.
Hover: lift 2px, deepen the border, soft shadow.

**Case study page** — back link, tag row, title, one-line sub, optional external link, then
a fact strip (a bordered grid of label/value pairs, first one is always "My role"), then an
optional demo video block, then the content blocks.

**Block renderer** — each block may carry any of: `p[]`, `pull`, `fig`, `figs[]`, `decisions[]`,
`results[]`, `personas[]`, `html`, `facts2[]`, `p2[]`, `note`. Render them in the order the
mockup's `blockHTML` function uses. Give each block an `id` so the rail can target it.

**Decision card** — white, bordered, title, body, then a dashed-top-border "tradeoff" line in
mono with the lead word in the signal colour.

**Results row** — a grid of claim / target / actual, where actual is a pill that's green for
`hit` and signal-red for `miss`.

**Experience card** — two columns. Left (258px, faintly tinted, right border): 52px logo tile,
company at 20px/600, unit label in mono signal colour, role at 15px, dates and location in
mono. Right: the narrative paragraph, a "signature win" banner (big number, mono label, short
body, 2px signal left border), bullets, then an optional photo with caption.

**Award card** — photo left at 260px, details right. Date, title, description, optional
external link.

**Education row** — 40px logo tile, school, degree, dates right-aligned in mono.

**Skills** — four groups, each a mono uppercase label plus rounded pills.

## Motion

Restrained. Sections fade and rise 14px on entry via IntersectionObserver, 0.6s,
`cubic-bezier(.2,.7,.3,1)`, once only. Cards lift on hover. The availability dot has a slow
pulse. **Everything must be disabled under `prefers-reduced-motion: reduce`.**

## Responsive

Below 920px: single column; the rail becomes a horizontal scrolling strip sticky under the
top bar with the ticks hidden; project cards, experience cards and award cards stack with the
image on top; figure grids and comparison grids become one column.

Test at 390px width and make sure nothing scrolls horizontally.

## The details that are easy to miss

- **No em dashes or en dashes anywhere in the copy.** `content.ts` is already clean. Keep it
  that way. Use commas, colons or "to" for ranges.
- Content strings contain HTML entities and inline `<strong>`/`<em>`. Render with
  `dangerouslySetInnerHTML`, not as plain text, or they'll show as literal `&#163;`.
- Videos: `preload="none"` with a poster image. Never autoplay.
- All images get `loading="lazy"` except the headshot and the first project cover.

## SEO and metadata

- Title: `Snigdha Kyathari — Product Manager`. Description from the intro paragraph.
- Per-project metadata on each case study route, using the project name and its sub line.
- Open Graph image: generate one, or use `/projects/flowstate-cover.jpg` as a fallback.
- `sitemap.ts` and `robots.ts`. Sensible semantic HTML and alt text throughout.
- Target a Lighthouse score above 95 on performance and accessibility.

## Deployment

1. `git init`, commit, push to a new GitHub repo.
2. Connect it to Vercel and deploy.
3. Tell me the live URL and how to point a custom domain at it later.

## Finally

Run the build, open the site, and check each of the five case studies renders with its
figures and videos before you tell me it's done. Then write a short `README.md` explaining
that all copy lives in `content.ts` and that editing it and pushing redeploys the site.
