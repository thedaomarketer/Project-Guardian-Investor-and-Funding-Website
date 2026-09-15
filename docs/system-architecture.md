# System Architecture

## Website (built)

- **Framework:** Next.js 16 (App Router), TypeScript, React 19.
- **Styling:** Tailwind CSS v4, design tokens in `src/app/globals.css`
  (deep-neutral base, controlled teal accent, light content surfaces).
- **UI primitives:** hand-rolled in `src/components/ui` (Button, Card,
  Section/Container, StatusTag, form fields) — no shadcn CLI dependency, to
  keep the dependency surface lean.
- **Content data:** typed data files under `src/lib/content/*` (form
  factors, roadmap, differentiation, risks, funding allocation, competitor
  comparison, market figures, demo scenarios) so numbers are defined once
  and reused across pages instead of duplicated in copy.
- **Interactive demo:** `src/components/demo/*` — a client-side scenario
  state machine (`src/lib/content/demo-scenarios.ts`) driving an abstract
  SVG map, status panel, timeline and emergency center. No real device
  telemetry; entirely synthetic, clearly labelled.
- **Forms:** React 19 Server Actions (`src/app/actions/*.ts`) with Zod
  validation, called from client components via `useActionState` for
  proper pending/success/error UI states.
- **Database:** Supabase (Postgres), project `project-guardian-website`
  (region `ca-central-1`). Schema in `supabase/migrations/`.
- **Auth:** Supabase Auth (email/password) for the internal `/admin`
  dashboard only — no public-facing account system.

## Data flow — public forms

```
Browser (Contact / Early Access form)
  → Server Action (Zod validation)
  → Supabase (anon-key client, RLS: INSERT-only for anon/authenticated)
  → Postgres (contact_inquiries / early_access_signups)
```

No service-role key exists anywhere in the codebase. The public insert path
relies entirely on Postgres Row-Level Security, not application-layer
trust.

## Data flow — admin dashboard

```
Browser (admin, signed in via Supabase Auth)
  → Server Component (cookie-based Supabase session, src/lib/supabase/server.ts)
  → Supabase (same anon-key client, but now carrying the user's session)
  → RLS policy checks auth.uid() against public.admins
  → Postgres (read/update contact_inquiries, early_access_signups)
```

The first authenticated user to "claim admin" becomes the sole admin (a
one-time, RLS-enforced bootstrap — see `supabase/migrations/0002_*.sql`).
Every subsequent admin action is gated by the same `admins` table via RLS,
not by anything the client asserts about itself.

## Why no service-role key

Using RLS + the authenticated user's own session for admin reads/writes
means the app never needs to hold Supabase's most powerful credential. This
reduces blast radius if application code or an environment variable ever
leaks, at the cost of slightly more SQL policy complexity — a deliberate
trade-off for a low-traffic investor-relations site.

## Deployment target

Designed to deploy on Vercel or any Next.js-compatible host. Requires
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment
variables (see `.env.local.example`). No other secrets are required by the
current codebase.

## Future product architecture (not built)

The device/cloud/app architecture described on `/technology` (SafeCore
module → connectivity → cloud platform → safety event engine → parent app
→ emergency sharing) is a **design concept**, not an implemented system.
See `docs/hardware-roadmap.md` and `docs/research/hardware.md` for what
that would require.
