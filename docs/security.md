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
2. Rate limiting on the Server Actions (e.g., at the edge/proxy layer) to
   reduce spam/abuse risk on public forms.
3. A documented incident-response process before any real user data (beyond
   inquiry/waitlist contact info) is collected.
