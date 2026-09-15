# Privacy

## Scope

Two distinct things share the word "privacy" on this project, and they
must not be confused:

1. **This website's own data handling** — covered by `/privacy-notice`
   (public-facing) and this document. Limited to contact-form and
   early-access-form submissions.
2. **The future product's privacy architecture** — covered by
   `/safety-system` (public-facing) and `docs/research/privacy.md` /
   `docs/research/regulatory-canada.md` (research). Entirely design intent;
   nothing is built or certified.

## This website's data handling (actual, current)

- Collects: name, email, organization, investor type/range, message,
  optional LinkedIn/phone (contact form); email, country, caregiver status,
  children count/age range, form-factor/interest preference (early access
  form). Both require explicit consent to be contacted.
- Stored in Supabase Postgres (`ca-central-1` region), RLS-restricted to
  admin read access — see `docs/security.md`.
- Not sold, not used for any purpose beyond responding to the inquiry or
  waitlist signup.
- No child data is collected by this website. The early-access form asks a
  caregiver about *their own* household in aggregate (e.g., "1–2 children,
  ages 5–8"), not a specific child's name or identifying information.

## Future product privacy architecture (design intent, not built)

Principles the future device/app is being designed around (see
`/safety-system` for the public version): data minimization, encryption,
strong authentication, role-based caregiver permissions, temporary/
revocable emergency sharing, audit logging, secure device identity, secure
firmware updates, limited retention, account security, abuse prevention.

## Regulatory context (research only — not a compliance claim)

`docs/research/privacy.md` and `docs/research/regulatory-canada.md`
summarize PIPEDA, Quebec's Law 25, and OPC guidance on children's data as
the relevant Canadian framework, plus COPPA as the relevant US framework
for any future US expansion. **Project Guardian has not undergone legal
compliance review and does not claim compliance with any of these
regimes today.** All public copy uses "designed with X in mind," never
"compliant" or "certified," per `CLAUDE.md`'s accuracy rules.

## Before any real product ships

1. Full privacy policy drafted and reviewed by qualified legal counsel.
2. Data Protection Impact Assessment appropriate to handling children's
   location data.
3. Confirm which regime(s) apply based on actual markets served, and
   implement the specific consent/access/deletion mechanics each requires.
