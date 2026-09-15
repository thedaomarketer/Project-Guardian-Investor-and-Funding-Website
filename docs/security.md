# Security

## What's implemented today (the website)

- **Row-Level Security on every table.** `contact_inquiries` and
  `early_access_signups` allow public INSERT only; SELECT/UPDATE require
  the requesting user's `auth.uid()` to exist in `public.admins`. The
  `admins` table itself has no public policy at all — see
  `supabase/migrations/`.
- **No service-role key in the app.** Every Supabase call, including admin
  reads, goes through the anon/publishable key plus the user's own session,
  relying on RLS as the real security boundary rather than a trusted
  server secret.
- **Server-side validation.** Every form is validated with Zod in a Server
  Action before touching the database, in addition to client-side HTML
  validation — a client that skips JS still can't insert malformed data.
- **Admin auth.** Supabase Auth (email/password) protects `/admin/*`; the
  route is excluded from the public nav and disallowed in `robots.txt`.
  Admin status is a database fact (the `admins` table + RLS), not a
  client-side flag.
- **Secrets hygiene.** `.env.local` is gitignored; `.env.local.example`
  documents required variables without real values committed.
- **Rate limiting at the database layer.** A `BEFORE INSERT` trigger
  (`enforce_submission_rate_limit`, migration `0003`) rejects more than 5
  submissions from the same IP address within a rolling hour on both
  `contact_inquiries` and `early_access_signups` — enforced in Postgres, so
  it applies no matter what the client claims, not just via app-layer
  trust. The function is `SECURITY DEFINER` (so it can count rows despite
  anon having no `SELECT` grant) but has `EXECUTE` revoked from
  `anon`/`authenticated`/`public` (migration `0004`), closing the direct
  PostgREST RPC surface the Supabase security advisor flagged — verified
  the trigger still fires correctly after the revoke. `early_access_signups`
  additionally has a `unique(email)` constraint, a natural second layer of
  abuse resistance.
- **Admin bootstrap race closed.** The one-time "first authenticated user
  claims admin" flow originally relied only on an RLS `not exists` check,
  which is evaluated per-statement and could theoretically let two
  concurrent sign-ups both pass before either commits. A unique index on a
  constant expression (`admins_singleton_idx`, migration `0003`) makes the
  table a true singleton at the storage layer, so a second concurrent
  claim now fails with a normal unique-violation the app already handles
  gracefully — this closes the race rather than just narrowing it.
- **RLS policies use `(select auth.uid())`**, not bare `auth.uid()`, so
  Postgres evaluates it once per query instead of once per row (migration
  `0004`) — the Supabase performance advisor's documented pattern. Verified
  `get_advisors` returns zero security and zero performance lints after
  all of the above.
- **HTTP security headers** set on every response via `next.config.ts`:
  `Content-Security-Policy` (default-src 'self', object-src 'none',
  frame-ancestors 'none', connect-src restricted to Supabase), `X-Frame-
  Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy:
  strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geo
  denied), and `Strict-Transport-Security` with preload. The CSP allows
  `'unsafe-inline'` on `script-src` — a deliberate trade-off: the only
  inline script in the app is a static, first-party JSON-LD block (no
  user-generated content is ever rendered via `dangerouslySetInnerHTML`
  anywhere in the codebase — verified by search), and a per-request nonce
  would have forced every page to render dynamically instead of staying
  statically prerendered. Verified with a Playwright pass across the main
  routes that the CSP causes zero console violations and the interactive
  demo still works.

## Threat model for the future product (not built)

Documented on `/safety-system` and summarized here for the record. Project
Guardian's future device/cloud/app system would need to defend against:

| Threat | Design intent |
|---|---|
| Account takeover | Strong authentication, session monitoring |
| Unauthorized caregiver access | Role-based permissions, explicit invite flow |
| Device theft | Secure device identity, remote deauthorization |
| Device tampering | Tamper-evident design goals, integrity checks |
| Replay attacks | Authenticated, timestamped device communication |
| Credential compromise | MFA for caregiver accounts, anomaly detection |
| API abuse | Rate limiting, authenticated + authorized endpoints |
| Location data exposure | Minimization, encryption at rest and in transit, time-limited sharing |

**No system is perfectly secure, and Project Guardian does not claim the
future product "cannot be hacked."** Security is a first-class design
constraint, not a marketing claim — see `/safety-system` for the
public-facing version of this same honesty.

## What has NOT happened

- No third-party security audit or penetration test of this website.
- No production secrets exist yet (no deployed environment, no live
  service-role key issued).
- No device or firmware exists to secure — the hardware threat model above
  is a design intent for future engineering work, not a description of
  something built and tested today.

## Recommended before public launch

1. Independent review of the RLS policies against the final feature set.
2. A documented incident-response process before any real user data (beyond
   inquiry/waitlist contact info) is collected.
3. Consider a CAPTCHA or similar on the public forms if the IP-based rate
   limit proves insufficient against determined abuse (the current limit
   protects against scripted spam, not a distributed attack).
4. Live end-to-end verification of the rate limiter and admin-bootstrap
   singleton against the deployed site (this session verified both
   directly against the database via role-simulated SQL — see
   `docs/qa-report.md` — since browser-level testing was blocked by this
   sandbox's network egress policy).
