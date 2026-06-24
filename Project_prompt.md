# PROJECT: 6 to 9 Dental — Hero Section Redesign (Cold Outreach Demo)

## CONTEXT

I'm a freelance web developer. I find local dental practices with outdated,
cluttered, or non-converting websites and send them a redesigned hero section
as a cold outreach sample to win them as a client. This project is one of
those samples, built for a real practice called "6 to 9 Dental" (San Antonio, TX).

I'm attaching screenshots of their CURRENT live website. It is visually outdated
(wood-grain background, clashing green/yellow/red colors, no font hierarchy,
illegible logo, no real photography, weak CTA, key info buried below the fold,
two conflicting "best dentist" award badges from different years).

Your job: build a clean, modern, high-converting hero section that fixes all
of this, using their REAL business information (provided below), so the
final result looks like a legitimate redesign proposal I can screenshot and
email directly to the practice owner.

## TECH STACK

- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Tailwind CSS (utility classes only, no inline styles)
- No additional UI libraries unless specified below
- Use next/image for all images (with placeholder boxes per instructions below)
- Use next/font for font loading (Google Fonts)
- Fully responsive: mobile-first, test breakpoints at 375px, 768px, 1024px, 1440px
- Semantic HTML5 (header, nav, main, section) and accessible markup (proper
  heading hierarchy, alt text, aria-labels on icon buttons, sufficient color
  contrast — WCAG AA minimum)

## REAL BUSINESS INFO (use exactly as given, do not invent or alter)

- Practice name: 6 to 9 Dental Texas
- Location: City Base West Shopping Center, 2603 SE Military Dr #103,
  San Antonio, Texas 78223
- Phone: 210-333-6911
- Hours: Mon 10am-8pm, Tues 10am-9pm, Wed 10am-5pm, Thurs 10am-8pm,
  Fri 10am-6pm, Sat 9am-5pm, Sun Closed
- Key differentiators: open 6 days a week including evenings and weekends,
  walk-ins and emergencies welcome, same-day care available, Se Habla Español,
  VA Vouchers welcome, latex and mercury-free, nitrous-oxide available,
  accepts most PPOs and offers payment plans / CareCredit
- Tone: warm, family-friendly, modern-but-approachable (NOT cold/clinical,
  NOT cartoonish)

## DESIGN DIRECTION

- Color palette: max 2 brand colors + 1 neutral base. Use a calming teal or
  sage green as primary (dental = clean/trustworthy), warm off-white/cream
  as background, near-black or dark slate for text. NO yellow, NO wood
  texture, NO clashing red/green from the original site.
- Typography: ONE clean modern sans-serif for all UI text (e.g. Inter,
  Plus Jakarta Sans, or similar via next/font/google). Optionally ONE
  secondary serif/display font ONLY for a short tagline accent — never
  more than 2 typefaces total. Establish clear hierarchy: H1 largest/boldest,
  supporting text clearly smaller and lighter weight.
- Generous whitespace — do not cram elements edge-to-edge like the original.
- Single dominant call-to-action — do not give multiple competing CTAs
  equal visual weight.

## HERO SECTION STRUCTURE (build exactly this, top to bottom)

1. **Navbar** (sticky, transparent-to-solid on scroll)

   - Logo/wordmark left ("6 to 9 Dental" in clean type, no clashing colors)
   - Nav links right: Home, About, Treatments, Testimonials, Contact
     (desktop only — collapse into a hamburger menu on mobile)
   - Phone number rendered as a real button/pill on the far right
     (e.g. "📞 210-333-6911"), not plain text
2. **Hero content** (two-column on desktop ≥1024px, stacked on mobile)

   - LEFT COLUMN:
     - Small eyebrow/badge text above the headline, e.g. "Open 6 Days a Week"
     - H1 (large, bold): "Same-Day Dental Care, Open Evenings & Weekends"
     - Supporting paragraph (1-2 sentences, smaller/lighter weight):
       gentle family dentistry angle + walk-ins welcome + Se Habla Español
     - CTA row: ONE primary button ("Book an Appointment" or "Call Now:
       210-333-6911") + one secondary/ghost-style link ("View Treatments")
     - Trust strip directly below CTAs: star rating + review count placeholder,
       "VA Vouchers Welcome", "Most PPOs Accepted" — small icons + short text,
       horizontally arranged, wrap on mobile
   - RIGHT COLUMN:
     - One large hero image placeholder (see IMAGE PLACEHOLDER INSTRUCTIONS)
     - Optional small floating card overlapping the image bottom-left or
       bottom-right with a short stat, e.g. "★ 4.9 — 200+ Happy Patients"
       (placeholder number, mark clearly as placeholder data)
3. Keep the entire hero within the first viewport (100vh on desktop, can
   scroll slightly on small mobile but CTA button must always be visible
   without scrolling on mobile)

## IMAGE PLACEHOLDER INSTRUCTIONS (IMPORTANT)

Do NOT use any real photos, stock photo URLs, or AI-generated images directly
in the code. Everywhere a photograph is needed, instead render a styled
placeholder box with:

- A dashed border (border-2 border-dashed border-gray-300)
- A muted background (bg-gray-100)
- Centered label text identifying exactly which image goes there, e.g.
  "IMAGE 1: Hero — Dentist with Patient"
- Correct aspect ratio / dimensions for that slot so the layout doesn't
  break once a real image is dropped in later
- Use a reusable `<ImagePlaceholder label="..." aspect="..." />` component
  so I can swap in real images later by just replacing this component
  with next/image

Number and label every placeholder clearly (IMAGE 1, IMAGE 2, etc.) matching
the image prompts I'll generate separately, so I know exactly which AI-
generated image goes in which slot.

## DELIVERABLE

- A single working Next.js page (app/page.tsx) with the hero section, plus
  any small subcomponents (Navbar, Hero, ImagePlaceholder, TrustBadge, etc.)
  cleanly split into a /components folder
- Clean, readable, properly typed TypeScript — no `any` types
- Tailwind config should include the chosen color palette as named theme
  colors (e.g. primary, primary-dark) rather than hardcoded hex classes
  scattered through the JSX
- Add a brief comment block at the top of page.tsx noting this is a cold-
  outreach redesign sample, not the production site

## WHAT NOT TO DO

- Don't add a footer, full nav pages, or other sections beyond the hero
  unless I ask — this is a hero-section sample only
- Don't invent fake review counts/ratings as if real — clearly mark any
  placeholder stat as a placeholder in a code comment
- Don't use the original site's wood texture, color palette, or fonts in
  any way
