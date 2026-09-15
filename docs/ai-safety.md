# AI Safety Intelligence (Concept)

Described publicly as "Safety Intelligence" on `/technology`. This is a
**future roadmap concept**, not an implemented model. No AI system exists
in this codebase today; the interactive demo's "unusual movement" scenario
uses hand-authored synthetic data, not a real anomaly-detection model.

## What the future system is designed to do

Identify deviations from a child's configured routine and explain them in
plain language — e.g., "Unusual movement detected because the device left
a configured safe zone outside the expected schedule." Every alert must be
traceable to a specific, statable rule or pattern.

## Hard rules — what it must never do

Carried verbatim from the master specification and enforced in
`CLAUDE.md`:

- Never diagnose abuse, trafficking, or criminal intent.
- Never identify a "suspected trafficker" or any other criminal actor.
- Never automatically contact police or emergency services.
- Never make an autonomous emergency decision that overrides a caregiver.
- Never present a black-box "risk score" without a stated, explainable
  reason.

## What it may do

- Identify unusual patterns (unscheduled zone departure, unrecognized
  route, unrecognized destination, device tampering signals, connectivity
  interruption patterns).
- Explain, in one sentence, why an alert fired.
- Summarize an emergency timeline for a caregiver reviewing it later.
- Highlight a deviation from a configured routine — framed as "this doesn't
  match the usual pattern," never as a judgment about intent or danger
  level beyond that fact.

## Why this matters for investor credibility

Overclaiming AI capability in child safety is both an ethical risk and a
regulatory one (see `docs/research/child-safety.md` and
`docs/research/privacy.md`). Explainability is a deliberate product
requirement, not a limitation to apologize for — it is what makes the
system auditable and trustworthy to caregivers and regulators alike.
