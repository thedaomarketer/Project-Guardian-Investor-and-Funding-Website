# Competitive Analysis

See `/competition` for the public comparison table; canonical data lives in
`src/lib/content/competitors.ts`, sourced from `docs/research/
competitors.md`.

## Companies compared

- **AngelSense** — GPS tracker built for children with special needs;
  4G + GPS + Wi-Fi + Bluetooth, two-way speakerphone, fall detection.
- **Jiobit (Life360)** — small multi-carrier cellular + GPS + Wi-Fi +
  Bluetooth tag; acquired by Life360 in 2021; SOS via a Noonlight
  dispatch partnership.
- **Xplora** — kids' 4G GPS smartwatch, sold via retail (Target, Walmart)
  in several markets.
- **Apple Find My / AirTag** — general-purpose Bluetooth item tracker on
  Apple's crowd-sourced network; not designed as a child-safety product
  (no GPS chip, no cellular, no dedicated SOS).
- **Project Guardian (proposed)** — the only unreleased entry in the
  table; every cell in its column is a design intent, never a shipped
  feature, and is labelled that way rather than with a checkmark.

## Methodology and honesty rules

- Every competitor claim is labelled "co." where it comes from the
  company's own marketing rather than independent verification (see the
  `note: "co"` field in the data file and the legend on `/competition`).
- Project Guardian never claims a competitor lacks a feature unless that
  absence is independently verifiable (e.g., AirTag's lack of a GPS chip
  is a well-documented hardware fact, not a guess).
- No competitor is disparaged; the comparison is presented as factual
  context, consistent with `CLAUDE.md`'s "position as an emerging
  platform, don't attack competitors" rule.

## Named differentiation (design intent, not proven advantage)

Modular hardware across multiple form factors, simple child-initiated SOS,
a unified parent command center, a structured emergency timeline,
controlled time-limited emergency sharing, privacy-first architecture, and
explainable (not black-box) anomaly detection. See `src/lib/content/
differentiation.ts` and `/solution` for the full list — always phrased as
"designed to differentiate through," never "unique" or "first," since
neither claim has been verified against the full competitive set.
