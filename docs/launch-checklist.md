# Launch Checklist

Status as of this build session. ✅ = done and verified, ⬜ = not done.

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
- ⬜ Live end-to-end form submission and admin sign-up/claim-admin flow
  tested against the deployed site (blocked from this sandbox by its
  network egress policy — see `docs/qa-report.md`).
- ⬜ Rate limiting on public form Server Actions.
- ⬜ Automated accessibility audit (axe-core or equivalent).
- ⬜ Cross-browser testing beyond Chromium.
- ⬜ Real performance/Core Web Vitals measurement against a deployed
  instance (Lighthouse or equivalent) — not run in this sandbox.

## Before going live

1. Deploy to Vercel (or equivalent) and set `NEXT_PUBLIC_SUPABASE_URL` /
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` from the provisioned project.
2. Submit a real test inquiry and waitlist signup through the live site;
   confirm both rows appear in Supabase's table editor.
3. Sign up an admin account through `/admin/login`, claim admin access,
   confirm the dashboard renders both tables and status updates persist.
4. Replace `siteUrl`/`baseUrl` placeholders (`https://projectguardian.
   example`) in `src/app/layout.tsx`, `src/app/sitemap.ts`, and
   `src/app/robots.ts` with the real production domain.
5. Have legal counsel review `/privacy-notice`, `/legal-notice`, and the
   investor-facing funding language before any real fundraising outreach.
6. Set a real funding target (or make the deliberate choice to keep "to be
   finalized") — the current value is intentionally a placeholder, not an
   oversight.
7. Add real founder/team information once available.
8. Run a full accessibility and performance audit against the live
   deployment.

## Explicitly not done, and why

- **No fabricated market size, traction, or partnerships** — per the
  master brief's non-negotiable accuracy rules, several requested items
  (a single TAM figure, named partnerships, certifications) are
  deliberately left unfilled rather than invented. This is a completeness
  choice, not a gap to "fix" by adding numbers later without real data
  behind them.
