# Funding Plan

See `/funding` for the public-facing version.

## Target raise

**To be finalized following engineering and commercialization planning.**
No dollar figure is published anywhere on the site. This is a deliberate
choice, not an oversight — the master brief explicitly prohibits inventing
a raise amount. When the founder sets a real target, update the "Target
raise" block in `src/app/funding/page.tsx` directly (it is a static,
easy-to-find literal, not a generated value, so there is no hidden config
to hunt for).

## Illustrative use-of-funds allocation

Canonical data in `src/lib/content/funding.ts` (`fundingAllocation`),
rendered as a bar chart on `/funding` via `src/components/charts/
allocation-bars.tsx`. Categories and current illustrative percentages:

| Category | % |
|---|---|
| Hardware engineering | 28% |
| Software development | 18% |
| Prototype manufacturing | 12% |
| Testing | 8% |
| Certification & compliance | 8% |
| Security | 6% |
| Pilot program | 6% |
| Cloud infrastructure | 5% |
| Legal & IP | 4% |
| Operations | 3% |
| Customer validation | 2% |

These are a planning assumption, explicitly labelled "Illustrative
allocation" on the page — not a binding budget, and not based on actual
vendor quotes or a finalized engineering plan.

## Unit economics calculator

An interactive tool (`/funding`) lets a visitor set device price, cost of
goods, subscription price, retention length and CAC to see how hardware +
subscription economics could shape up. Every output is labelled
illustrative. No default value in the calculator should be read as Project
Guardian's actual pricing or cost structure — none of that exists yet.

## Sequencing

Funds would move the company through the roadmap phases in
`docs/hardware-roadmap.md` — from software MVP and development hardware,
through engineering validation, regulatory testing, a pilot program, and
into manufacturing and commercial launch. See `/roadmap` for the full
phase list and current status (only Phase 1, Research & Requirements, is
in progress).
