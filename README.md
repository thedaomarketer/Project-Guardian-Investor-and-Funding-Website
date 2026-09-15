# Project Guardian — Investor & Funding Website

An investor-facing website for Project Guardian, a proposed (pre-commercial)
modular child-safety technology platform. See [`CLAUDE.md`](./CLAUDE.md) for
the full project brief, accuracy rules, and directory map, and
[`docs/`](./docs) for architecture, security, privacy, business-model and
research documentation.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4, Supabase (Postgres +
Auth) for investor inquiries, the early access waitlist, and the admin
dashboard.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your Supabase project values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (also type-checks)
npm run lint     # eslint
npx tsc --noEmit # explicit type check
```

## Database

Schema and RLS policies live in [`supabase/migrations/`](./supabase/migrations).
Apply them to a Supabase project via the Supabase CLI or dashboard SQL
editor, then set `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_ANON_KEY`. No service-role key is required or used
anywhere in this app — see [`docs/security.md`](./docs/security.md).

## Admin dashboard

`/admin/login` — sign up, then the first account to visit `/admin` can
claim admin access (a one-time, RLS-enforced bootstrap). Not linked from
public navigation and disallowed in `robots.txt`.

## Before deploying to production

See [`docs/launch-checklist.md`](./docs/launch-checklist.md) for what's
verified, what's outstanding, and what a human needs to do before this
goes live (legal review, a real funding target, live end-to-end testing
against the deployed Supabase project, etc.).
