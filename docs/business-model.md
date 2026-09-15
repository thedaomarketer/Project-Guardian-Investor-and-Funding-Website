# Business Model

See `/business` for the public-facing version.

## Proposed revenue streams

- **Hardware revenue** — one-time device sale. Planned, not yet priced or
  costed against real manufacturing quotes.
- **Recurring subscription** — monthly/annual fee for the connected safety
  service (location, alerts, emergency features). Planned.

## Potential future revenue streams (explicitly speculative)

Family plans with multiple devices, institutional/school offerings,
enterprise partnerships, potential emergency-services integrations. None
of these are committed, priced, or in any pipeline today — labelled
"Future Roadmap" wherever they appear on the site.

## Unit economics

`/funding` includes an interactive calculator
(`src/components/calculators/unit-economics-calculator.tsx`) that lets a
visitor model device price, cost of goods, subscription price, retention,
and CAC assumptions of their own choosing. Every output is explicitly
labelled "illustrative" — it is a way to reason about the model's shape,
not a projection of Project Guardian's actual results, which do not exist
yet (there is no revenue, no customers, no manufacturing cost data).

## Why hardware + subscription

A standard, well-understood model for connected hardware (see comparable
companies in `docs/research/competitors.md` and `docs/research/
investor-market.md` — AngelSense, Jiobit/Life360, Xplora all combine a
device purchase with a recurring fee). Recurring revenue compounds per
customer over the device's useful life, which is the core argument for why
this could become a larger business than a one-time hardware sale alone.

## What's NOT claimed

No customer numbers, no revenue, no signed manufacturing agreements, no
retail partnerships. `docs/research/investor-market.md` documents
comparable company funding events (Jiobit's acquisition by Life360, Bark's
Series C, AngelQ's seed round) strictly as evidence of investor interest in
the category — never as Project Guardian's own traction.
