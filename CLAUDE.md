# Project Guardian — Investor & Funding Website

## What this is

An investor-facing website for Project Guardian, a **proposed** child-safety
technology company developing a modular connected safety platform ("SafeCore")
that can be built into multiple wearable form factors (bracelet, pendant,
backpack clip, clothing attachment, toy; jewelry/earring are future research
only).

The company is pre-commercial. **Nothing on this site may claim a capability,
partnership, certification, statistic, or amount of traction that has not
been verified or explicitly labelled as a placeholder/assumption.** See
"Accuracy rules" below before touching copy.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Hand-rolled accessible UI primitives in `src/components/ui` (no shadcn CLI
  dependency — kept lean per the "avoid unnecessary dependencies" rule)
- Supabase (Postgres) for investor inquiries / early access / admin — see
  `docs/system-architecture.md`. Requires `NEXT_PUBLIC_SUPABASE_URL`,
  `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` env vars. No
  live Supabase project has been provisioned by the agent — that is a
  deliberate infrastructure decision left to a human (see
  `docs/launch-checklist.md`).
- Zod for form/server validation.

## Directory map

- `src/app/*` — routes (App Router, one folder per nav item)
- `src/components/ui` — design-system primitives (Button, Card, Badge/Status
  tag, Section, etc.)
- `src/components/sections` — page-specific composed sections
- `src/components/demo` — interactive product/emergency/dashboard demo
  components (all must render a visible "DEMO MODE — simulated data" badge)
- `src/lib` — utilities, validation schemas, Supabase clients, content data
  (market assumptions, roadmap data, etc. kept as typed data files so numbers
  aren't hand-duplicated across pages)
- `docs/research/*` — claim-by-claim sourced research (market, competitors,
  regulatory, hardware, privacy, etc.). Every externally-sourced number or
  claim used in copy must trace back to one of these files or be labelled
  "Illustrative assumption" / "Planned" / "To be validated."
- `docs/*.md` — architecture, security, privacy, business model, risks,
  investor thesis, QA report, launch checklist (see master spec for full
  list).

## Accuracy rules (non-negotiable)

- Never invent statistics, market sizes, customer/user counts, partnerships,
  patents, certifications, regulatory approvals, investor commitments, test
  results, device specs (GPS accuracy, battery life, coverage), revenue, or
  traction.
- Default language for anything unbuilt/unvalidated: "Proposed," "Planned,"
  "Under development," "Target specification," "To be validated," "Concept."
- Never claim the product prevents/detects kidnapping, trafficking, or abuse,
  guarantees safety, or cannot be hacked. Position it as technology that
  helps caregivers monitor, identify defined safety events, and respond
  faster.
- All demo data is synthetic and must say so on-screen ("Demo Child," "Demo
  Guardian," "DEMO MODE"). No AI or telemetry claims about real devices.
- Funding target, allocation percentages, and unit economics are
  "Illustrative assumption[s]" until the founder supplies real figures —
  never presented as actuals.
- Before adding a new external claim to copy, add a row to the relevant
  `docs/research/*.md` file with claim/source/URL/date checked/confidence.

## Commands

```
npm run dev      # local dev server
npm run build    # production build (also type-checks via Next's build step)
npm run lint     # eslint
npx tsc --noEmit # explicit type check
```

## Conventions

- Server Components by default; mark `"use client"` only where interactivity
  (demo simulations, forms) requires it.
- Every form has real client + server validation (Zod) and success/error/
  loading states — no form that appears to submit without doing anything.
- Every "Planned / Prototype / Under validation / Future" hardware or
  capability claim uses the shared `<StatusTag>` component so labelling stays
  consistent.
- Keep copy investor-grade: concise, no fear marketing, no unearned
  superlatives ("first," "only," "patented," "guaranteed").
