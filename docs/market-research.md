# Market Research

See `/market` for the public-facing version; canonical data in
`src/lib/content/market.ts`, full sourcing in `docs/research/market.md` and
`docs/research/investor-market.md`.

## Why there is no single TAM number on this site

Third-party research firms (Fortune Business Insights, Grand View Research,
GM Insights and others) publish overlapping but differently-scoped
estimates for the kids' GPS tracker / smartwatch / wearable market, with
figures that vary widely depending on report scope and methodology. No
single authoritative number exists for the specific niche Project Guardian
would occupy. Per the master brief's own instruction — "a smaller
defensible estimate is better than a fabricated billion-dollar TAM" — this
site presents the range attributed to each named firm, plus a bottom-up
methodology, rather than picking a favorable headline number and calling
it Project Guardian's TAM.

## Verified inputs

- Canada: ~6.0 million census families with children (58% of 10.3 million
  census families), per Statistics Canada's 2021 Census.
- US: ~33.3 million families with children under 18 (39% of US family
  households), per the US Census Bureau's 2024 Current Population Survey.

## Bottom-up methodology (formula shown, inputs intentionally left open)

```
Households with children × relevant segment (% who would consider
a connected safety wearable) × estimated annual spend (hardware +
subscription, amortized)
```

The middle and right terms are **not filled in** on the public site. No
research has validated an adoption rate or willingness-to-pay for Project
Guardian specifically — inventing a percentage "for illustration" would
violate the no-fabrication rule. Validating these inputs (via a pilot
program) is itself a roadmap milestone, not a number to guess today.

## Industry-interest signals (not Project Guardian's own traction)

Life360's acquisition of Jiobit (reported ~$37–54.5M, 2021), Bark's $30M
Series C (2022), and AngelQ's ~$5.85M seed round (2025) are cited as
evidence of ongoing investor and strategic interest in child-safety
technology — explicitly framed as third-party comps, never as Project
Guardian's own results.

## Known research limitation

This research round could not directly fetch most primary sources (see
`docs/research/sources.md`) due to a sandboxed environment's network
egress policy; findings rely on search-result snippets. Before using any
figure here in a fundraising deck, re-verify the primary source directly.
