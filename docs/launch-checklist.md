# Launch Checklist

Status as of this build session. ✅ = done and verified, ⬜ = not done.

**Live:** https://project-guardian-website.vercel.app (Vercel project
`project-guardian-website`, team `bandooluurbans-projects`, linked to
`Personal-Main` on GitHub — every push to that branch auto-deploys).
Verified post-deploy: homepage, `/product`, `/contact`, and `/admin`
(correctly redirects to `/admin/login` when signed out) all return 200 with
the expected content and all security headers present.

## Product & content

- ✅ All primary routes implemented and building cleanly (see
  `docs/qa-report.md`).
- ✅ Investor journey (Home → Problem → Solution → Product Demo →
  Technology → Market → Business → Funding → Contact) navigable
  end-to-end.
- ✅ Interactive product/emergency demo built and verified interactive
  (9 scenarios, guided walkthrough, current-vs-last-confirmed location
  distinction).
- ✅ Mock/demo data clearly labelled ("DEMO MODE," "Demo Child," "Demo
  Guardian," synthetic locations).
- ✅ No fabricated claims found in the content audit (see
  `docs/qa-report.md`).
- ✅ Mock data never implies real customers.
- ✅ Funding figures labelled "Illustrative" / "To be finalized" rather
  than invented.
- ✅ Risks disclosed in full (13 items) rather than hidden.
- ✅ Research documented with per-claim sourcing (`docs/research/`).
- ✅ Investor deck structure built (19 slides, `/investor-deck`).
- ⬜ Real founder/team bio (currently an honest placeholder).
- ⬜ Legal review of `/privacy-notice`, `/legal-notice`, and all
  investment-related language.
- ⬜ Primary-source re-verification for research claims (this round used
  search snippets due to a sandbox network restriction — see
  `docs/sources.md`).

## Engineering

- ✅ TypeScript strict mode, `tsc --noEmit` clean.
- ✅ ESLint clean.
- ✅ Production build succeeds (`npm run build`), all routes prerender.
- ✅ Forms have real client + server validation (Zod) and success/error/
  loading states.
- ✅ Supabase schema + RLS applied to a live project (`ca-central-1`);
  policies reviewed and confirmed via `get_advisors` (zero security
  lints) and a direct RLS role-simulation test.
- ✅ No service-role key anywhere in the codebase; admin access is
  RLS-enforced via an authenticated-user allowlist with a one-time
  self-bootstrap.
- ✅ `/admin` excluded from public nav and `robots.txt`.
- ✅ `.env.local` gitignored; `.env.local.example` documents required
  vars without real secrets.
- ✅ Sitemap, robots.txt, per-page metadata, Open Graph/Twitter tags,
  Organization JSON-LD.
- ✅ Deployed to Vercel, linked to GitHub (`Personal-Main`) for continuous
  deployment. Live routes verified via `mcp__Vercel__web_fetch_vercel_url`
  (this sandbox's network policy blocks direct `curl` to `*.vercel.app`,
  same as it blocked Supabase — the Vercel-native fetch tool routes around
  that).
- ✅ Database-layer hardening: closed a race in the one-time admin
  self-bootstrap (unique index makes `admins` a true singleton), added
  IP-based rate limiting (5/hour) on both public insert tables via a
  `SECURITY DEFINER` trigger with `EXECUTE` revoked from
  anon/authenticated (closing the direct-RPC surface the advisor
  flagged), and rewrote RLS policies to evaluate `auth.uid()` once per
  query. `get_advisors` returns zero security and zero performance lints.
  See `docs/security.md`.
- ✅ HTTP security headers live in production (confirmed via response
  headers on the deployed site): CSP, X-Frame-Options, X-Content-Type-
  Options, Referrer-Policy, Permissions-Policy, HSTS.
- ⬜ Live end-to-end *form submission* (actually inserting a row) and the
  admin sign-up/claim-admin flow still haven't been exercised by an actual
  browser against the deployed site from within this session — page loads
  and the auth redirect are verified, but nobody has clicked "Submit" for
  real yet. Do this once after reading this checklist.
- ⬜ Automated accessibility audit (axe-core or equivalent).
- ⬜ Cross-browser testing beyond Chromium.
- ⬜ Real performance/Core Web Vitals measurement against the deployed
  instance (Lighthouse or equivalent) — not run in this sandbox.

## Before going live

1. ✅ ~~Deploy to Vercel~~ — done; see the live URL above. The app ships
   with the provisioned Supabase project's public URL/anon key as an
   in-repo fallback (`src/lib/env.ts`) since no tool was available here to
   set Vercel project environment variables — real env vars still take
   precedence if you add them later (e.g., to point at a different
   Supabase project).
2. Submit a real test inquiry and waitlist signup through the live site;
   confirm both rows appear in Supabase's table editor.
3. Sign up an admin account through `/admin/login`, claim admin access,
   confirm the dashboard renders both tables and status updates persist.
4. Replace `siteUrl`/`baseUrl` placeholders (`https://projectguardian.
   example`) in `src/app/layout.tsx`, `src/app/sitemap.ts`, and
   `src/app/robots.ts` with the real production domain (or Vercel's
   assigned domain, or a custom one once purchased).
5. Have legal counsel review `/privacy-notice`, `/legal-notice`, and the
   investor-facing funding language before any real fundraising outreach.
6. Set a real funding target (or make the deliberate choice to keep "to be
   finalized") — the current value is intentionally a placeholder, not an
   oversight.
7. Add real founder/team information once available.
8. Run a full accessibility and performance audit against the live
   deployment.
9. Consider adding NEXT_PUBLIC_SUPABASE_URL/NEXT_PUBLIC_SUPABASE_ANON_KEY
   as real Vercel project environment variables (Project Settings →
   Environment Variables) rather than relying on the in-repo fallback
   long-term, especially if the anon key is ever rotated.

## Explicitly not done, and why

- **No fabricated market size, traction, or partnerships** — per the
  master brief's non-negotiable accuracy rules, several requested items
  (a single TAM figure, named partnerships, certifications) are
  deliberately left unfilled rather than invented. This is a completeness
  choice, not a gap to "fix" by adding numbers later without real data
  behind them.
