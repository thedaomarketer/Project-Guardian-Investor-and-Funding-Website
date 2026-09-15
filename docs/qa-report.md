# QA Report

Date: 2026-09-15 (build session). Tested against the dev server
(`npm run dev`) and `npm run build` output on this branch.

## Automated checks

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ Clean, no errors |
| `npx eslint .` | ✅ Clean, no errors or warnings |
| `npm run build` (production build + prerender) | ✅ All 23 routes compile and prerender: `/`, `/problem`, `/solution`, `/technology`, `/product`, `/safety-system`, `/business`, `/market`, `/competition`, `/roadmap`, `/funding`, `/about`, `/faq`, `/contact` (dynamic), `/early-access`, `/investor-deck`, `/privacy-notice`, `/legal-notice`, `/admin` (dynamic), `/admin/login`, plus `robots.txt` and `sitemap.xml` |

## Browser testing (Playwright + pre-installed Chromium)

Ran headless-browser checks across all 18 public routes at two
viewports (375×812 mobile, 1440×900 desktop):

- **Status codes:** all 200. `38/38` route×viewport checks passed.
- **Console/page errors:** none, at either viewport, on any route.
- **Failed network requests:** none (excluding the expected Supabase data-
  plane calls blocked by this sandbox's own network egress policy — see
  "Known limitation" below).
- **Horizontal scroll / mobile overflow:** none detected on any route at
  375px width.
- **Internal links:** crawled every `<a href>` on every public page (18
  unique internal targets) and confirmed each resolves with a 200 — no
  broken links.

### Interactive feature checks

- **Product demo** (`/product`): guided emergency walkthrough advances
  through its 7 steps via Next/Back; selecting the SOS or Emergency Mode
  scenario correctly reveals the Emergency Center panel; selecting the
  "Offline" scenario correctly switches the location label from "Current
  location" to "Last confirmed location" (and vice versa for online
  scenarios) — the current/last-confirmed distinction required by the spec
  is verified working, not just present in code.
- **FAQ** (`/faq`): all 8 `<details>` elements present and using native
  disclosure semantics (keyboard/screen-reader accessible without custom
  JS).
- **Admin auth gate** (`/admin`): confirmed an unauthenticated request is
  redirected to `/admin/login` rather than leaking any data or UI.
- **Keyboard navigation** (`/`): first Tab stop is the "Skip to content"
  link, confirming the skip-link and focus order work as intended.
- **Forms** (`/contact`, `/early-access`): client + server (Zod) validation
  confirmed via code review; the RLS insert path was verified directly
  against the live Supabase database (see below) since a live browser
  submission could not complete from this sandbox.

## Known limitation — live Supabase writes not exercisable from this sandbox

This sandboxed environment's network egress policy blocks outbound
connections to the newly-created Supabase project host
(`mggcfgfovipyomziwkef.supabase.co`) — confirmed via both a direct `curl`
CONNECT (403) and a live form submission attempt in the dev server, which
correctly surfaced a graceful error state rather than crashing. This is an
environment restriction, not an application defect: the same code will
reach Supabase normally once deployed outside this sandbox (e.g., on
Vercel).

To still verify correctness, the INSERT path was tested directly against
the live database via `SET LOCAL ROLE anon` + `INSERT` (matching exactly
what the app's Supabase client does, since the app never calls `.select()`
after insert): the anon role can insert into both `contact_inquiries` and
`early_access_signups` under RLS, and cannot read the row back via
`RETURNING` (also matching the app, which doesn't need to). The test row
was deleted after verification.

**Before launch, a human (or an agent with unblocked network access)
should submit both forms through the actual deployed site once and confirm
the row appears in the Supabase table editor**, and complete the admin
sign-up → claim-admin → dashboard flow once live (this also could not be
exercised end-to-end from this sandbox for the same reason).

## Accessibility — reviewed, not exhaustively audited

- Skip-to-content link present and is the first focusable element.
- All form fields use associated `<label>`/`htmlFor` via the shared
  `Field` component; error messages use `role="alert"`.
- FAQ uses native `<details>/<summary>` (no custom JS required).
- `prefers-reduced-motion` is respected globally in `globals.css`.
- Focus-visible outline styling (`.focus-ring`) applied to all interactive
  primitives (buttons, links, inputs).
- **Not done:** a full automated accessibility audit (e.g., axe-core) or
  screen-reader walkthrough. Recommended before public launch.

## Content/accuracy audit

Grepped the full `src/` tree for `100%`, `guaranteed`, `patented`,
`certified`, `approved`, `million`, `billion`, `prevents`, `detects
trafficking`, `cannot be hacked`, `partner`, `police`, `government`,
`customers`, `users`. Every match reviewed in context:

- All "million/billion" references are either sourced household figures
  (StatCan/US Census) or explicitly-attributed, explicitly-caveated
  third-party market estimates — never presented as Project Guardian's own
  number.
- "Certified" and "cannot be hacked" appear only in sentences explicitly
  *denying* those claims ("not yet certified," "does not claim... cannot
  be hacked").
- "Partner"/"police"/"government" appear only in the FAQ's explicit denial
  of any such affiliation, in competitor-attributed claims (Jiobit's
  Noonlight dispatch partnership), or in speculative/future-labelled
  business-model content.
- No instance of "prevents," "detects trafficking," "guaranteed," or
  "100%" found anywhere in the codebase.
- No fabricated customer/user counts found.

## Outstanding for a human before public launch

1. Live end-to-end form/auth verification outside this sandbox (see above).
2. Legal review of `/privacy-notice`, `/legal-notice`, and all investment
   language before any real fundraising activity.
3. Re-verify primary sources in `docs/research/` directly (see
   `docs/sources.md` — this round relied on search snippets due to the
   same sandbox network restriction).
4. A full accessibility audit (axe-core or equivalent) and screen-reader
   pass.
5. Real founder/team content to replace the honest "coming soon"
   placeholder on `/about` and the investor deck's Team slide.
