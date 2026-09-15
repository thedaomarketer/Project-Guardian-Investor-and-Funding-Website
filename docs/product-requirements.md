# Product Requirements — Project Guardian Investor Website

## Purpose

An investor-facing website that explains the problem, the proposed solution,
demonstrates the concept, establishes credibility, shows the roadmap and
business model, presents market and competitive context honestly, and
captures interest from investors, partners, parents and schools — without
ever misrepresenting an unbuilt capability as shipped.

## Primary audiences

1. **Investors** (angel, VC, family office, strategic) — need to understand
   the opportunity, the team, the risks, and how to engage.
2. **Strategic / technology partners** — need to understand the platform
   vision and how they might integrate or collaborate.
3. **Parents / caregivers** — need to understand what the product would do,
   what stage it's at, and how privacy is handled.
4. **Schools / institutions** — a future customer segment, need a clear
   pathway to express interest.

## Information architecture

Home, Problem, Solution, Technology, Product (demo), Safety System
(privacy/security), Business, Market, Competition, Roadmap, Funding, About,
FAQ, Contact, Early Access, Investor Deck, Privacy Notice, Legal Notice,
Admin (internal, not in public nav). See `src/lib/nav.ts` for the grouped
navigation structure.

## Functional requirements

- Every route in the site map renders without console/network errors.
- The investor journey (Home → Problem → Solution → Product Demo →
  Technology → Market → Business Model → Funding → Investor Inquiry) is
  navigable without dead ends.
- The interactive product/emergency demo simulates nine device states using
  clearly synthetic data, with a persistent "DEMO MODE" indicator.
- Contact (investor/partner/parent/school pathways) and Early Access forms
  validate client- and server-side, persist to Supabase, and show real
  success/error/pending states — never a fake success on a form that
  didn't actually submit.
- An internal `/admin` dashboard (not linked from public nav, disallowed in
  `robots.txt`) lets an authenticated admin review and triage submissions.
- All figures on funding/business/market pages are either sourced (with the
  source discoverable via `docs/research/`) or explicitly labelled
  "Illustrative assumption" / "To be finalized."

## Non-functional requirements

- Mobile-first responsive layout, tested conceptually from 320px to 1920px
  using the same Tailwind breakpoint conventions throughout.
- Accessible: semantic HTML, labelled form fields, visible focus states,
  skip-to-content link, reduced-motion support, sufficient color contrast.
- No secrets in client code; Supabase access is either public-insert-only
  (RLS-gated) or authenticated-admin-only (RLS-gated) — no service-role key
  anywhere in the app.
- SEO: per-page metadata, Open Graph/Twitter tags, sitemap.xml, robots.txt,
  Organization JSON-LD.

## Out of scope for this build

- A real, shipped hardware device or mobile app — this site is a concept
  and investor-relations surface, not the product itself.
- Payment processing, e-commerce, or securities-offering infrastructure.
- Multi-language localization (English only for this version).
